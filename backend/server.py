from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.responses import StreamingResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import io
import logging
from functools import lru_cache
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="JavaHeat API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ----- Models -----
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    company: Optional[str] = Field(default=None, max_length=160)
    subject: Optional[str] = Field(default=None, max_length=200)
    message: str = Field(..., min_length=1, max_length=4000)


class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    company: Optional[str] = None
    subject: Optional[str] = None
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ----- Routes -----
@api_router.get("/")
async def root():
    return {"message": "JavaHeat API is running", "tagline": "The first eco-friendly graded charcoal"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


@api_router.post("/contact", response_model=ContactMessage, status_code=201)
async def create_contact_message(payload: ContactMessageCreate):
    try:
        obj = ContactMessage(**payload.model_dump())
        doc = obj.model_dump()
        doc['created_at'] = doc['created_at'].isoformat()
        await db.contact_messages.insert_one(doc)
        logger.info(f"New contact message from {obj.email} stored (id={obj.id})")
        return obj
    except Exception as e:
        logger.exception("Failed to store contact message")
        raise HTTPException(status_code=500, detail="Could not store message") from e


@api_router.get("/contact", response_model=List[ContactMessage])
async def list_contact_messages(limit: int = 100):
    docs = await db.contact_messages.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    for d in docs:
        if isinstance(d.get('created_at'), str):
            d['created_at'] = datetime.fromisoformat(d['created_at'])
    return docs


# ----- Product Grades -----
GRADES = {
    "plus-value": {
        "name": "Plus Value Grade",
        "tier": "Top Tier · Fine Dining & Lounges",
        "tagline": "Our flagship — hand-graded, calibrated, export-finished.",
        "description": (
            "The world's first formally graded eco-friendly charcoal. Plus Value "
            "is reserved for restaurants, fine-dining grills and premium shisha "
            "lounges that cannot tolerate variance. Every cube is hand-sorted "
            "against a master sample for density, geometry, moisture and burn "
            "profile."
        ),
        "specs": {
            "Calorific value": "≥ 7,200 kcal/kg",
            "Fixed carbon": "≥ 80%",
            "Ash content": "≤ 3%",
            "Moisture": "≤ 6%",
            "Volatile matter": "≤ 12%",
            "Burn time": "3–4 hours",
            "Geometry tolerance": "± 2 mm",
            "Sustainability score": "A+ (fully traceable)",
            "Origin": "Java, Indonesia",
            "Packaging": "10 kg export carton, vacuum-sealed inner",
        },
        "ideal_for": [
            "Michelin-track restaurants",
            "Hospitality groups · 5-star hotels",
            "Premium shisha lounges",
            "Yacht & private chef clients",
        ],
    },
    "premium": {
        "name": "Premium Grade",
        "tier": "HORECA · Professional Kitchens",
        "tagline": "Consistent, professional-grade charcoal for working kitchens.",
        "description": (
            "Premium Grade delivers the JavaHeat eco-grading discipline at a "
            "working price point — calibrated for busy restaurants, BBQ "
            "concepts and steakhouses that need predictable performance every "
            "service."
        ),
        "specs": {
            "Calorific value": "≥ 6,800 kcal/kg",
            "Fixed carbon": "≥ 76%",
            "Ash content": "≤ 4%",
            "Moisture": "≤ 7%",
            "Volatile matter": "≤ 14%",
            "Burn time": "2.5–3.5 hours",
            "Geometry tolerance": "± 4 mm",
            "Sustainability score": "A (traceable batches)",
            "Origin": "Java, Indonesia",
            "Packaging": "15 kg export carton",
        },
        "ideal_for": [
            "Restaurants & steakhouses",
            "BBQ & smoke-house concepts",
            "Hospitality wholesale",
            "Catering operations",
        ],
    },
    "eco-standard": {
        "name": "Eco Standard Grade",
        "tier": "Retail · Conscious Consumer",
        "tagline": "The everyday eco-charcoal — graded, traceable, accessible.",
        "description": (
            "Eco Standard makes graded, sustainable charcoal an everyday choice. "
            "Same eco-sourcing and grading discipline as our premium tiers, in a "
            "format suitable for retail shelves and the home grill."
        ),
        "specs": {
            "Calorific value": "≥ 6,400 kcal/kg",
            "Fixed carbon": "≥ 72%",
            "Ash content": "≤ 5%",
            "Moisture": "≤ 8%",
            "Volatile matter": "≤ 16%",
            "Burn time": "2–3 hours",
            "Geometry tolerance": "± 6 mm",
            "Sustainability score": "A (traceable cooperative)",
            "Origin": "Java, Indonesia",
            "Packaging": "3 kg / 5 kg retail bag",
        },
        "ideal_for": [
            "Retail & supermarkets",
            "Home BBQ enthusiasts",
            "Outdoor & camping",
            "Gift / hamper distributors",
        ],
    },
}


@api_router.get("/grades")
async def list_grades():
    return {"grades": [{"slug": k, **v} for k, v in GRADES.items()]}


@api_router.get("/grades/{slug}")
async def get_grade(slug: str):
    if slug not in GRADES:
        raise HTTPException(status_code=404, detail="Grade not found")
    return {"slug": slug, **GRADES[slug]}


@lru_cache(maxsize=16)
def _build_spec_pdf(slug: str) -> bytes:
    grade = GRADES[slug]
    buffer = io.BytesIO()
    doc = SimpleDocTemplate(
        buffer,
        pagesize=A4,
        topMargin=22 * mm,
        bottomMargin=20 * mm,
        leftMargin=22 * mm,
        rightMargin=22 * mm,
        title=f"JavaHeat — {grade['name']} Spec Sheet",
        author="JavaHeat",
    )

    styles = getSampleStyleSheet()
    BLACK = colors.HexColor("#0A0A0A")
    GREY = colors.HexColor("#666666")
    LINE = colors.HexColor("#E5E5E5")

    eyebrow_style = ParagraphStyle(
        "eyebrow",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8,
        textColor=GREY,
        spaceAfter=4,
        leading=10,
    )
    h1_style = ParagraphStyle(
        "h1",
        parent=styles["Title"],
        fontName="Times-Roman",
        fontSize=32,
        textColor=BLACK,
        leading=34,
        spaceAfter=8,
        alignment=0,
    )
    h2_style = ParagraphStyle(
        "h2",
        parent=styles["Heading2"],
        fontName="Times-Roman",
        fontSize=14,
        textColor=GREY,
        leading=16,
        spaceAfter=18,
    )
    section_style = ParagraphStyle(
        "section",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=9,
        textColor=GREY,
        spaceBefore=14,
        spaceAfter=10,
        leading=11,
    )
    body_style = ParagraphStyle(
        "body",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=10,
        textColor=BLACK,
        leading=15,
        spaceAfter=8,
    )

    story = []
    story.append(Paragraph("JAVAHEAT · ECO-GRADED CHARCOAL", eyebrow_style))
    story.append(Paragraph(grade["name"], h1_style))
    story.append(Paragraph(grade["tier"], h2_style))
    story.append(Paragraph(grade["description"], body_style))
    story.append(Spacer(1, 14))

    story.append(Paragraph("TECHNICAL SPECIFICATIONS", section_style))
    spec_rows = [[k, v] for k, v in grade["specs"].items()]
    spec_table = Table(spec_rows, colWidths=[70 * mm, 90 * mm])
    spec_table.setStyle(
        TableStyle(
            [
                ("FONT", (0, 0), (-1, -1), "Helvetica", 10),
                ("TEXTCOLOR", (0, 0), (0, -1), GREY),
                ("TEXTCOLOR", (1, 0), (1, -1), BLACK),
                ("LINEBELOW", (0, 0), (-1, -1), 0.4, LINE),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ]
        )
    )
    story.append(spec_table)

    story.append(Paragraph("IDEAL FOR", section_style))
    for item in grade["ideal_for"]:
        story.append(Paragraph(f"·  {item}", body_style))

    story.append(Spacer(1, 18))
    story.append(Paragraph("CONTACT", section_style))
    story.append(Paragraph("Email · info@javaheat.com", body_style))
    story.append(Paragraph("WhatsApp · +62 812-2844-6702", body_style))
    story.append(
        Paragraph(
            f"Issued {datetime.now(timezone.utc).strftime('%B %Y')} · JavaHeat, Central Java, Indonesia",
            eyebrow_style,
        )
    )

    doc.build(story)
    pdf_bytes = buffer.getvalue()
    buffer.close()
    return pdf_bytes


@api_router.get("/grades/{slug}/spec-sheet.pdf")
async def grade_spec_sheet(slug: str):
    if slug not in GRADES:
        raise HTTPException(status_code=404, detail="Grade not found")
    pdf_bytes = _build_spec_pdf(slug)
    filename = f"JavaHeat-{slug}-spec-sheet.pdf"
    return StreamingResponse(
        io.BytesIO(pdf_bytes),
        media_type="application/pdf",
        headers={"Content-Disposition": f'attachment; filename="{filename}"'},
    )


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
