import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { ArrowRight, Download, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { IMAGES, buildWhatsAppHref } from "@/constants/brand";
import { GRADING_CRITERIA } from "@/constants/grading";
import { PRODUCTS } from "@/constants/testIds";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const fallbackGrades = [
    {
        slug: "plus-value",
        name: "Plus Value Grade",
        tier: "Top Tier · Fine Dining & Lounges",
        tagline: "Our flagship — hand-graded, calibrated, export-finished.",
        description:
            "The world's first formally graded eco-friendly charcoal. Plus Value is reserved for restaurants, fine-dining grills and premium shisha lounges that cannot tolerate variance.",
        specs: {
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
        ideal_for: [
            "Michelin-track restaurants",
            "Hospitality groups · 5-star hotels",
            "Premium shisha lounges",
            "Yacht & private chef clients",
        ],
    },
    {
        slug: "premium",
        name: "Premium Grade",
        tier: "HORECA · Professional Kitchens",
        tagline: "Consistent, professional-grade charcoal for working kitchens.",
        description:
            "The JavaHeat eco-grading discipline at a working price point — calibrated for busy restaurants and steakhouses that need predictable performance every service.",
        specs: {
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
        ideal_for: [
            "Restaurants & steakhouses",
            "BBQ & smoke-house concepts",
            "Hospitality wholesale",
            "Catering operations",
        ],
    },
    {
        slug: "eco-standard",
        name: "Eco Standard Grade",
        tier: "Retail · Conscious Consumer",
        tagline: "The everyday eco-charcoal — graded, traceable, accessible.",
        description:
            "Same eco-sourcing and grading discipline as our premium tiers, in a format suitable for retail shelves and the home grill.",
        specs: {
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
        ideal_for: [
            "Retail & supermarkets",
            "Home BBQ enthusiasts",
            "Outdoor & camping",
            "Gift / hamper distributors",
        ],
    },
];

const COMPARISON_KEYS = [
    "Calorific value",
    "Fixed carbon",
    "Ash content",
    "Moisture",
    "Burn time",
    "Geometry tolerance",
    "Sustainability score",
    "Packaging",
];

const Products = () => {
    const [grades, setGrades] = useState(fallbackGrades);

    useEffect(() => {
        let alive = true;
        axios
            .get(`${API}/grades`)
            .then((res) => {
                if (alive && Array.isArray(res?.data?.grades)) {
                    setGrades(res.data.grades);
                }
            })
            .catch(() => {});
        return () => {
            alive = false;
        };
    }, []);

    return (
        <div data-testid={PRODUCTS.page} className="bg-background">
            {/* HERO */}
            <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 border-b border-border">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="md:col-span-8"
                    >
                        <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-8">
                            JavaHeat · Eco-Graded Products
                        </p>
                        <h1
                            data-testid={PRODUCTS.heroHeadline}
                            className="font-serif font-light leading-[0.95] tracking-tight text-balance text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                        >
                            Three grades.
                            <br />
                            <em className="not-italic">One standard.</em>
                        </h1>
                    </motion.div>
                    <div className="md:col-span-4">
                        <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light max-w-md">
                            Every JavaHeat product passes the same eco-grading
                            system before it leaves Java. The grade is the
                            promise of how it will burn — and the proof of how
                            it was made.
                        </p>
                    </div>
                </div>
            </section>

            {/* THE ECO-GRADING SYSTEM (before the products themselves) */}
            <section
                data-testid={PRODUCTS.gradingSystemSection}
                className="py-24 md:py-40"
            >
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end mb-16 md:mb-24">
                        <Reveal className="md:col-span-3">
                            <p className="text-[11px] uppercase tracking-luxe text-muted-foreground">
                                The Eco-Grading System
                            </p>
                        </Reveal>
                        <Reveal delay={0.05} className="md:col-span-9">
                            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.02] tracking-tight text-balance">
                                Before you choose a grade,
                                <br />
                                <em className="not-italic text-muted-foreground">
                                    understand what makes one.
                                </em>
                            </h2>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                        <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
                            <p className="text-base md:text-lg leading-relaxed text-foreground/85 font-light max-w-md">
                                The JavaHeat Eco-Grading System scores every
                                batch across four criteria — before it is
                                packaged, before it is sold, before it ever
                                touches a fire. The result is the world’s first
                                charcoal you can specify by grade, not by hope.
                            </p>
                        </Reveal>

                        <ol className="lg:col-span-7 space-y-px bg-border border border-border">
                            {GRADING_CRITERIA.map((c, i) => (
                                <Reveal
                                    key={c.slug}
                                    delay={i * 0.05}
                                    data-testid={PRODUCTS.gradingCriterion(c.slug)}
                                    className="bg-background flex items-start gap-6 md:gap-8 p-6 md:p-10"
                                >
                                    <div className="flex flex-col items-center shrink-0">
                                        <span className="font-serif text-2xl md:text-3xl text-muted-foreground">
                                            0{i + 1}
                                        </span>
                                        <c.icon
                                            className="mt-4 h-5 w-5 text-foreground/70"
                                            strokeWidth={1.2}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-2xl md:text-3xl font-light tracking-tight">
                                            {c.title}
                                        </h3>
                                        <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground font-light max-w-lg">
                                            {c.body}
                                        </p>
                                    </div>
                                </Reveal>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            {/* THE THREE GRADES */}
            <section className="bg-secondary py-24 md:py-32 border-y border-border">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <Reveal>
                        <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-6">
                            The Range
                        </p>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.02] tracking-tight max-w-3xl text-balance">
                            Now — the products.
                        </h2>
                    </Reveal>
                </div>
            </section>

            {grades.map((grade, idx) => (
                <GradeBlock key={grade.slug} grade={grade} index={idx} />
            ))}

            {/* COMPARISON TABLE */}
            <section className="py-24 md:py-32 bg-[#0A0A0A] text-[#FDFDFD]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <Reveal>
                        <p className="text-[11px] uppercase tracking-luxe opacity-60 mb-6">
                            At-a-glance
                        </p>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.02] tracking-tight max-w-3xl text-balance">
                            Side by side.
                        </h2>
                    </Reveal>

                    <Reveal delay={0.1} className="mt-12 overflow-x-auto">
                        <table
                            data-testid={PRODUCTS.comparisonTable}
                            className="w-full min-w-[720px] text-left text-sm"
                        >
                            <thead>
                                <tr className="border-b border-white/20">
                                    <th className="py-5 pr-6 font-normal text-[10px] uppercase tracking-luxe opacity-60">
                                        Specification
                                    </th>
                                    {grades.map((g) => (
                                        <th
                                            key={g.slug}
                                            className="py-5 pl-6 font-serif text-xl md:text-2xl font-light"
                                        >
                                            {g.name}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {COMPARISON_KEYS.map((key) => (
                                    <tr
                                        key={key}
                                        data-testid={PRODUCTS.comparisonRow(
                                            key
                                                .toLowerCase()
                                                .replace(/[^a-z0-9]+/g, "-"),
                                        )}
                                        className="border-b border-white/10"
                                    >
                                        <td className="py-4 pr-6 text-[10px] uppercase tracking-luxe opacity-60">
                                            {key}
                                        </td>
                                        {grades.map((g) => (
                                            <td
                                                key={g.slug}
                                                className="py-4 pl-6 font-light"
                                            >
                                                {g.specs?.[key] || "—"}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Reveal>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-24 md:py-40 bg-background">
                <div className="max-w-[1100px] mx-auto px-6 md:px-12 text-center">
                    <Reveal>
                        <h2 className="font-serif text-4xl md:text-6xl font-light leading-[1.02] tracking-tight text-balance">
                            Need a sample, a quote,
                            <br />
                            <em className="not-italic text-muted-foreground">
                                or a private label run?
                            </em>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-3">
                        <a
                            href={buildWhatsAppHref(
                                "Hello JavaHeat, I would like a quote across your three grades.",
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 text-[11px] uppercase tracking-luxe hover:bg-foreground/85 transition-colors"
                        >
                            Chat on WhatsApp
                            <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 border border-foreground/40 px-7 py-4 text-[11px] uppercase tracking-luxe hover:bg-foreground hover:text-background transition-colors"
                        >
                            Send a Message
                            <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

const GradeBlock = ({ grade, index }) => {
    const dark = index === 1;
    const reverse = index % 2 === 1;

    const downloadHref = `${API}/grades/${grade.slug}/spec-sheet.pdf`;
    const waMsg = `Hello JavaHeat, I'd like a quote for ${grade.name}.`;

    const heroImage =
        index === 0
            ? IMAGES.heroCube
            : index === 1
              ? IMAGES.embers
              : IMAGES.abstractCharcoal;

    return (
        <section
            data-testid={`products-grade-${grade.slug}`}
            className={`py-24 md:py-40 ${
                dark ? "bg-[#0A0A0A] text-[#FDFDFD]" : "bg-background"
            }`}
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start ${
                        reverse ? "" : ""
                    }`}
                >
                    <Reveal
                        className={`lg:col-span-6 ${
                            reverse ? "lg:order-2" : ""
                        }`}
                    >
                        <div className="relative aspect-[4/5] overflow-hidden border border-border/30">
                            <img
                                src={heroImage}
                                alt={`${grade.name} visual`}
                                className="absolute inset-0 h-full w-full object-cover hover:scale-[1.04] transition-transform duration-[1400ms] ease-out"
                            />
                            <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-white">
                                <span className="font-serif text-2xl md:text-3xl">
                                    {grade.name}
                                </span>
                                <span className="text-[10px] uppercase tracking-luxe bg-white text-black px-3 py-1.5">
                                    Grade {String.fromCharCode(65 + index)}
                                </span>
                            </div>
                        </div>
                    </Reveal>

                    <div
                        className={`lg:col-span-6 ${
                            reverse ? "lg:order-1" : ""
                        }`}
                    >
                        <Reveal delay={0.05}>
                            <p
                                className={`text-[11px] uppercase tracking-luxe mb-6 ${
                                    dark
                                        ? "opacity-60"
                                        : "text-muted-foreground"
                                }`}
                            >
                                {grade.tier}
                            </p>
                            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.02] tracking-tight">
                                {grade.name}
                            </h2>
                            <p
                                className={`mt-6 font-serif text-xl md:text-2xl ${
                                    dark
                                        ? "opacity-80"
                                        : "text-muted-foreground"
                                }`}
                            >
                                {grade.tagline}
                            </p>
                            <p
                                className={`mt-8 text-base md:text-lg font-light leading-relaxed max-w-xl ${
                                    dark ? "opacity-80" : "text-foreground/85"
                                }`}
                            >
                                {grade.description}
                            </p>
                        </Reveal>

                        <Reveal delay={0.1} className="mt-12">
                            <p
                                className={`text-[10px] uppercase tracking-luxe mb-4 ${
                                    dark ? "opacity-60" : "text-muted-foreground"
                                }`}
                            >
                                Technical specifications
                            </p>
                            <div
                                className={`grid grid-cols-2 gap-px ${
                                    dark
                                        ? "bg-white/10 border border-white/10"
                                        : "bg-border border border-border"
                                }`}
                            >
                                {Object.entries(grade.specs || {}).map(
                                    ([k, v]) => (
                                        <div
                                            key={k}
                                            className={`p-4 md:p-5 ${
                                                dark
                                                    ? "bg-[#0A0A0A]"
                                                    : "bg-background"
                                            }`}
                                        >
                                            <p
                                                className={`text-[10px] uppercase tracking-luxe ${
                                                    dark
                                                        ? "opacity-60"
                                                        : "text-muted-foreground"
                                                }`}
                                            >
                                                {k}
                                            </p>
                                            <p className="mt-1 font-serif text-lg md:text-xl tracking-tight">
                                                {v}
                                            </p>
                                        </div>
                                    ),
                                )}
                            </div>
                        </Reveal>

                        <Reveal delay={0.15} className="mt-10">
                            <p
                                className={`text-[10px] uppercase tracking-luxe mb-4 ${
                                    dark ? "opacity-60" : "text-muted-foreground"
                                }`}
                            >
                                Ideal for
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {(grade.ideal_for || []).map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-2 text-sm font-light"
                                    >
                                        <Check
                                            className={`h-4 w-4 mt-0.5 ${
                                                dark
                                                    ? "opacity-70"
                                                    : "text-foreground/70"
                                            }`}
                                            strokeWidth={1.5}
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>

                        <Reveal delay={0.2} className="mt-12 flex flex-wrap gap-3">
                            <a
                                data-testid={PRODUCTS.gradeDownload(grade.slug)}
                                href={downloadHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-3 px-7 py-4 text-[11px] uppercase tracking-luxe transition-colors ${
                                    dark
                                        ? "bg-white text-black hover:bg-white/90"
                                        : "bg-foreground text-background hover:bg-foreground/85"
                                }`}
                            >
                                Download spec sheet
                                <Download className="h-3.5 w-3.5" />
                            </a>
                            <a
                                data-testid={PRODUCTS.gradeWhatsapp(grade.slug)}
                                href={buildWhatsAppHref(waMsg)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-3 px-7 py-4 text-[11px] uppercase tracking-luxe transition-colors border ${
                                    dark
                                        ? "border-white/40 hover:bg-white hover:text-black"
                                        : "border-foreground/40 hover:bg-foreground hover:text-background"
                                }`}
                            >
                                Request a quote
                                <ArrowRight className="h-3.5 w-3.5" />
                            </a>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
