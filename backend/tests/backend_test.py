"""
JavaHeat backend API tests.
Covers:
- GET /api/ health/brand
- POST /api/contact valid (201, persistence, returns id + created_at)
- POST /api/contact invalid email (422)
- POST /api/contact missing required fields (422)
- GET /api/contact returns list (most recent first), no _id
"""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://javaheat-premium.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ----- Root / brand -----
class TestRoot:
    def test_root_returns_200_and_brand(self, client):
        r = client.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "tagline" in data
        assert "eco-friendly" in data["tagline"].lower()


# ----- Contact create -----
class TestContactCreate:
    def test_create_contact_valid_minimum_fields(self, client):
        unique = f"TEST_{uuid.uuid4().hex[:8]}"
        payload = {
            "name": f"{unique} User",
            "email": f"{unique.lower()}@example.com",
            "message": "Hello, I'd like info on Plus Value charcoal.",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 201, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "created_at" in data
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["message"] == payload["message"]
        assert data.get("company") is None
        assert data.get("subject") is None
        # No _id field leaked
        assert "_id" not in data

    def test_create_contact_with_all_optional_fields(self, client):
        unique = f"TEST_{uuid.uuid4().hex[:8]}"
        payload = {
            "name": f"{unique} Full",
            "email": f"{unique.lower()}@example.com",
            "company": "Acme Foods",
            "subject": "Wholesale inquiry",
            "message": "Need pricing for 20ft container.",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 201, r.text
        data = r.json()
        assert data["company"] == "Acme Foods"
        assert data["subject"] == "Wholesale inquiry"

        # Verify persistence by listing and finding the email
        list_r = client.get(f"{API}/contact")
        assert list_r.status_code == 200
        emails = [m["email"] for m in list_r.json()]
        assert payload["email"] in emails

    def test_create_contact_invalid_email_returns_422(self, client):
        payload = {
            "name": "Bad Email User",
            "email": "not-an-email",
            "message": "Test invalid email handling.",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422, r.text

    def test_create_contact_missing_name_returns_422(self, client):
        payload = {
            "email": "missingname@example.com",
            "message": "No name field",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_create_contact_missing_email_returns_422(self, client):
        payload = {
            "name": "No Email",
            "message": "No email field",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_create_contact_missing_message_returns_422(self, client):
        payload = {
            "name": "No Message",
            "email": "nomessage@example.com",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_create_contact_empty_strings_returns_422(self, client):
        payload = {"name": "", "email": "x@example.com", "message": ""}
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422


# ----- Contact list -----
class TestContactList:
    def test_list_returns_200_and_no_mongo_id(self, client):
        # Seed at least one
        seed = {
            "name": f"TEST_list_{uuid.uuid4().hex[:6]}",
            "email": f"list_{uuid.uuid4().hex[:6]}@example.com",
            "message": "list test",
        }
        client.post(f"{API}/contact", json=seed)

        r = client.get(f"{API}/contact")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        assert len(items) > 0
        for item in items:
            assert "_id" not in item
            assert "id" in item
            assert "email" in item
            assert "created_at" in item

    def test_list_sorted_most_recent_first(self, client):
        # Create two messages and check ordering
        e1 = f"order1_{uuid.uuid4().hex[:6]}@example.com"
        e2 = f"order2_{uuid.uuid4().hex[:6]}@example.com"
        client.post(f"{API}/contact", json={"name": "T1", "email": e1, "message": "first"})
        client.post(f"{API}/contact", json={"name": "T2", "email": e2, "message": "second"})

        r = client.get(f"{API}/contact")
        items = r.json()
        # find the two by email
        idx1 = next((i for i, m in enumerate(items) if m["email"] == e1), None)
        idx2 = next((i for i, m in enumerate(items) if m["email"] == e2), None)
        assert idx1 is not None and idx2 is not None
        # e2 created after e1, so it should appear before e1 in list
        assert idx2 < idx1



# ----- Grades list / detail -----
EXPECTED_SLUGS = {"plus-value", "premium", "eco-standard"}


class TestGradesList:
    def test_list_grades_returns_200_with_three_items(self, client):
        r = client.get(f"{API}/grades")
        assert r.status_code == 200, r.text
        data = r.json()
        assert "grades" in data
        grades = data["grades"]
        assert isinstance(grades, list)
        assert len(grades) == 3
        slugs = {g["slug"] for g in grades}
        assert slugs == EXPECTED_SLUGS
        for g in grades:
            assert "name" in g and isinstance(g["name"], str) and g["name"]
            assert "tier" in g and g["tier"]
            assert "tagline" in g and g["tagline"]
            assert "description" in g and g["description"]
            assert "specs" in g and isinstance(g["specs"], dict) and g["specs"]
            assert "ideal_for" in g and isinstance(g["ideal_for"], list) and g["ideal_for"]


class TestGradeDetail:
    @pytest.mark.parametrize("slug", ["plus-value", "premium", "eco-standard"])
    def test_get_valid_grade(self, client, slug):
        r = client.get(f"{API}/grades/{slug}")
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["slug"] == slug
        assert isinstance(data["specs"], dict)
        assert isinstance(data["ideal_for"], list)

    def test_get_bogus_grade_returns_404(self, client):
        r = client.get(f"{API}/grades/bogus-grade")
        assert r.status_code == 404


# ----- Spec sheet PDF -----
class TestSpecSheetPdf:
    @pytest.mark.parametrize("slug", ["plus-value", "premium", "eco-standard"])
    def test_pdf_for_valid_slug(self, client, slug):
        r = client.get(f"{API}/grades/{slug}/spec-sheet.pdf")
        assert r.status_code == 200, r.text[:300]
        assert r.headers.get("content-type", "").startswith("application/pdf")
        cd = r.headers.get("content-disposition", "")
        assert "attachment" in cd.lower()
        assert "filename=" in cd.lower()
        assert slug in cd
        # PDF magic bytes
        assert r.content[:4] == b"%PDF"
        # Reasonable size for a generated PDF
        assert len(r.content) > 800

    def test_pdf_bogus_slug_returns_404(self, client):
        r = client.get(f"{API}/grades/bogus/spec-sheet.pdf")
        assert r.status_code == 404
