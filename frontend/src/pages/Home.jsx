import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Flame, ScanLine, Award } from "lucide-react";
import Reveal from "@/components/Reveal";
import { BRAND, IMAGES, buildWhatsAppHref } from "@/constants/brand";
import { GRADING_CRITERIA } from "@/constants/grading";
import { HOME } from "@/constants/testIds";

const benefits = [
    {
        slug: "graded",
        icon: ScanLine,
        title: "Graded, not guessed.",
        body: "Every batch is sorted by density, geometry and moisture — the world’s first charcoal with consistent, certified grades.",
    },
    {
        slug: "eco",
        icon: Leaf,
        title: "Truly eco-friendly.",
        body: "Sourced from sustainably managed Indonesian hardwood and coconut shell residue. Zero deforestation, traceable to origin.",
    },
    {
        slug: "burn",
        icon: Flame,
        title: "Cleaner, longer burn.",
        body: "Low ash. Low smoke. High calorific value. A burn profile engineered for restaurants, lounges and discerning grills.",
    },
    {
        slug: "premium",
        icon: Award,
        title: "Plus Value tier.",
        body: "Our top grade — hand-finished, calibrated and packaged for the world’s most demanding kitchens and connoisseurs.",
    },
];

const specs = [
    { k: "Calorific value", v: "≥ 7,200 kcal/kg" },
    { k: "Fixed carbon", v: "≥ 80%" },
    { k: "Ash content", v: "≤ 3%" },
    { k: "Moisture", v: "≤ 6%" },
    { k: "Burn time", v: "3–4 hours" },
    { k: "Origin", v: "Java, Indonesia" },
];

const Home = () => {
    return (
        <div data-testid={HOME.page}>
            {/* HERO */}
            <section className="relative min-h-screen flex items-end overflow-hidden bg-[#0A0A0A] text-[#FDFDFD]">
                <div
                    className="absolute inset-0 bg-cover bg-center scale-105"
                    style={{
                        backgroundImage: `url(${IMAGES.heroCube})`,
                    }}
                    aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/85" aria-hidden="true" />
                <div className="absolute inset-0 grain" aria-hidden="true" />

                <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pb-20 md:pb-28 pt-40 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-5xl"
                    >
                        <p className="text-[11px] uppercase tracking-luxe text-white/70 mb-8">
                            JavaHeat · Plus Value Grade
                        </p>
                        <h1
                            data-testid={HOME.heroHeadline}
                            className="font-serif font-light leading-[0.95] tracking-tight text-balance text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem]"
                        >
                            The first{" "}
                            <br />
                            <em className="not-italic">eco-friendly</em>{" "}
                            <br />
                            graded charcoal.
                        </h1>
                        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                            <p className="md:col-span-7 text-base md:text-lg leading-relaxed text-white/80 max-w-xl font-light">
                                Engineered in Java. Sorted by science. Crafted for the
                                world’s most discerning grills, lounges and restaurants.
                            </p>
                            <div className="md:col-span-5 flex flex-wrap gap-3 md:justify-end">
                                <a
                                    data-testid={HOME.heroCtaWhatsapp}
                                    href={buildWhatsAppHref()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-white text-black px-7 py-4 text-[11px] uppercase tracking-luxe hover:bg-white/90 transition-colors"
                                >
                                    Chat on WhatsApp
                                    <ArrowRight className="h-3.5 w-3.5" />
                                </a>
                                <a
                                    data-testid={HOME.heroCtaExplore}
                                    href="#product"
                                    className="inline-flex items-center gap-3 border border-white/40 text-white px-7 py-4 text-[11px] uppercase tracking-luxe hover:bg-white/10 transition-colors"
                                >
                                    Explore Plus Value
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 1 }}
                    className="absolute bottom-6 right-6 md:bottom-8 md:right-32 hidden sm:flex flex-col items-end gap-2 text-[10px] uppercase tracking-luxe text-white/60"
                >
                    <span>Scroll</span>
                    <span className="block h-12 w-px bg-white/40" />
                </motion.div>
            </section>

            {/* MARQUEE / TRUST STRIP */}
            <section className="border-y border-border bg-background overflow-hidden">
                <div className="marquee-track flex gap-16 whitespace-nowrap py-6 text-[11px] uppercase tracking-luxe text-muted-foreground">
                    {Array.from({ length: 2 }).map((_, i) => (
                        <div key={i} className="flex gap-16 shrink-0">
                            <span>· Plus Value Grade</span>
                            <span>· Eco-Friendly Sourcing</span>
                            <span>· Low Ash · Long Burn</span>
                            <span>· Made in Java, Indonesia</span>
                            <span>· Restaurant & Hospitality Approved</span>
                            <span>· Hand-Graded</span>
                            <span>· Export to 20+ Countries</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ECO-GRADING SYSTEM — placed BEFORE any product details */}
            <section
                id="grading-system"
                data-testid={HOME.gradingSystemSection}
                className="py-24 md:py-40 bg-background"
            >
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end mb-16 md:mb-24">
                        <Reveal className="md:col-span-3">
                            <p className="text-[11px] uppercase tracking-luxe text-muted-foreground">
                                The Foundation
                            </p>
                        </Reveal>
                        <Reveal delay={0.05} className="md:col-span-9">
                            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-light leading-[1.02] tracking-tight text-balance">
                                Before we talk products,
                                <br />
                                <em className="not-italic text-muted-foreground">
                                    meet our grading system.
                                </em>
                            </h2>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                        <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
                            <p className="text-base md:text-lg leading-relaxed text-foreground/85 font-light max-w-md">
                                Charcoal has always been sold by trust alone — a
                                fuel without a standard. JavaHeat changes that.
                                The <strong className="font-medium">Eco-Grading System</strong>{" "}
                                is the first formal framework that scores
                                charcoal across four eco-friendly criteria
                                before a single piece is packaged. It is what
                                makes Plus Value possible — and it is what
                                makes every JavaHeat product different.
                            </p>
                            <a
                                href="#product"
                                className="mt-10 inline-flex items-center gap-3 border border-foreground/30 px-7 py-4 text-[11px] uppercase tracking-luxe hover:bg-foreground hover:text-background transition-colors"
                            >
                                Then meet the product
                                <ArrowRight className="h-3.5 w-3.5" />
                            </a>
                        </Reveal>

                        <div className="lg:col-span-7">
                            <ol className="space-y-px bg-border border border-border">
                                {GRADING_CRITERIA.map((c, i) => (
                                    <Reveal
                                        key={c.slug}
                                        delay={i * 0.05}
                                        data-testid={HOME.gradingCriterion(c.slug)}
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

                            <Reveal delay={0.25} className="mt-10">
                                <div className="grid grid-cols-3 gap-px bg-border border border-border">
                                    {[
                                        { k: "Eco criteria", v: "4" },
                                        { k: "Grades produced", v: "3" },
                                        { k: "Traceable origin", v: "100%" },
                                    ].map((s) => (
                                        <div
                                            key={s.k}
                                            className="bg-background p-6 text-center"
                                        >
                                            <p className="font-serif text-4xl md:text-5xl font-light tracking-tight">
                                                {s.v}
                                            </p>
                                            <p className="mt-2 text-[10px] uppercase tracking-luxe text-muted-foreground">
                                                {s.k}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRODUCT — Plus Value */}
            <section
                id="product"
                data-testid={HOME.productSection}
                className="py-24 md:py-40 bg-background"
            >
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                        <div className="lg:col-span-5 lg:sticky lg:top-32">
                            <Reveal>
                                <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-6">
                                    The Product
                                </p>
                                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.02] tracking-tight">
                                    Plus Value.
                                    <br />
                                    <em className="not-italic text-muted-foreground">
                                        Our finest grade.
                                    </em>
                                </h2>
                                <p className="mt-8 text-base md:text-lg leading-relaxed text-muted-foreground max-w-md font-light">
                                    The first commercially graded eco-friendly
                                    charcoal in the world. Hand-sorted by
                                    density and geometry, then calibrated
                                    against a rigorous burn-profile standard
                                    before it ever leaves our facility in Java.
                                </p>
                                <div className="mt-10 flex flex-col items-start gap-3">
                                    <a
                                        href={buildWhatsAppHref(
                                            "Hello JavaHeat, I would like a Plus Value quotation.",
                                        )}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 text-[11px] uppercase tracking-luxe hover:bg-foreground/85 transition-colors"
                                    >
                                        Request a Plus Value Quote
                                        <ArrowRight className="h-3.5 w-3.5" />
                                    </a>
                                    <Link
                                        data-testid={HOME.seeAllGradesCta}
                                        to="/products"
                                        className="inline-flex items-center gap-3 border border-foreground/30 text-foreground px-7 py-4 text-[11px] uppercase tracking-luxe hover:bg-foreground hover:text-background transition-colors"
                                    >
                                        See all 3 grades
                                        <ArrowRight className="h-3.5 w-3.5" />
                                    </Link>
                                </div>
                            </Reveal>
                        </div>

                        <div className="lg:col-span-7">
                            <Reveal delay={0.1}>
                                <div
                                    data-testid={HOME.productCard}
                                    className="relative aspect-[4/5] overflow-hidden border border-border"
                                >
                                    <img
                                        src={IMAGES.heroCube}
                                        alt="JavaHeat Plus Value graded charcoal cubes"
                                        className="absolute inset-0 h-full w-full object-cover hover:scale-[1.04] transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                                    />
                                    <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-white">
                                        <span className="font-serif text-2xl">Plus Value</span>
                                        <span className="text-[10px] uppercase tracking-luxe bg-white text-black px-3 py-1.5">
                                            Top Grade
                                        </span>
                                    </div>
                                </div>
                            </Reveal>

                            <Reveal delay={0.2} className="mt-10">
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-border border border-border">
                                    {specs.map((s) => (
                                        <div
                                            key={s.k}
                                            className="bg-background p-6"
                                        >
                                            <p className="text-[10px] uppercase tracking-luxe text-muted-foreground">
                                                {s.k}
                                            </p>
                                            <p className="mt-2 font-serif text-2xl tracking-tight">
                                                {s.v}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS BENTO */}
            <section
                data-testid={HOME.benefitsSection}
                className="py-24 md:py-40 bg-[#0A0A0A] text-[#FDFDFD]"
            >
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
                        <Reveal className="md:col-span-3">
                            <p className="text-[11px] uppercase tracking-luxe opacity-60">
                                Why JavaHeat
                            </p>
                        </Reveal>
                        <Reveal className="md:col-span-9" delay={0.1}>
                            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.02] tracking-tight text-balance">
                                A different idea of what
                                <br />
                                charcoal can be.
                            </h2>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
                        {benefits.map((b, i) => (
                            <Reveal
                                key={b.slug}
                                delay={0.05 * i}
                                data-testid={HOME.benefitCard(b.slug)}
                                className="bg-[#0A0A0A] p-8 md:p-10 group hover:bg-white/[0.03] transition-colors duration-500"
                            >
                                <b.icon
                                    className="h-7 w-7 mb-10 opacity-80 group-hover:opacity-100 transition-opacity"
                                    strokeWidth={1.2}
                                />
                                <h3 className="font-serif text-2xl md:text-3xl font-light leading-tight tracking-tight mb-4">
                                    {b.title}
                                </h3>
                                <p className="text-sm leading-relaxed opacity-70 font-light">
                                    {b.body}
                                </p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* GRADING PROCESS */}
            <section
                data-testid={HOME.gradingSection}
                className="py-24 md:py-40 bg-background"
            >
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        <Reveal className="lg:col-span-6 order-2 lg:order-1">
                            <div className="relative aspect-[4/5] overflow-hidden border border-border">
                                <img
                                    src={IMAGES.embers}
                                    alt="Glowing embers — JavaHeat burn profile"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                        </Reveal>
                        <div className="lg:col-span-6 order-1 lg:order-2">
                            <Reveal>
                                <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-6">
                                    The Grading
                                </p>
                                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.02] tracking-tight">
                                    Four checkpoints.
                                    <br />
                                    <em className="not-italic text-muted-foreground">
                                        One uncompromising standard.
                                    </em>
                                </h2>
                            </Reveal>

                            <ol className="mt-12 space-y-px bg-border border border-border">
                                {[
                                    {
                                        n: "01",
                                        t: "Sustainable sourcing",
                                        b: "Hardwood and coconut shell from traceable, replanted plantations across Java.",
                                    },
                                    {
                                        n: "02",
                                        t: "Slow pyrolysis",
                                        b: "Low-oxygen carbonisation that locks in carbon and removes volatiles.",
                                    },
                                    {
                                        n: "03",
                                        t: "Hand grading",
                                        b: "Each piece sorted by density, geometry and moisture against a master sample.",
                                    },
                                    {
                                        n: "04",
                                        t: "Burn-profile audit",
                                        b: "Every batch tested for calorific value, ash and burn time before export.",
                                    },
                                ].map((step, i) => (
                                    <Reveal
                                        key={step.n}
                                        delay={i * 0.05}
                                        className="bg-background flex items-start gap-8 p-6 md:p-8"
                                    >
                                        <span className="font-serif text-3xl md:text-4xl text-muted-foreground shrink-0">
                                            {step.n}
                                        </span>
                                        <div>
                                            <h4 className="font-serif text-2xl tracking-tight">
                                                {step.t}
                                            </h4>
                                            <p className="text-sm leading-relaxed text-muted-foreground mt-2 font-light max-w-md">
                                                {step.b}
                                            </p>
                                        </div>
                                    </Reveal>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* SUSTAINABILITY PULL QUOTE */}
            <section
                data-testid={HOME.sustainabilitySection}
                className="relative py-32 md:py-48 bg-[#0A0A0A] text-[#FDFDFD] overflow-hidden"
            >
                <div
                    className="absolute inset-0 opacity-40 bg-cover bg-center"
                    style={{ backgroundImage: `url(${IMAGES.aboutBg})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
                <div className="relative max-w-[1100px] mx-auto px-6 md:px-12 text-center">
                    <Reveal>
                        <p className="text-[11px] uppercase tracking-luxe opacity-60 mb-8">
                            On Sustainability
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-balance">
                            “Premium does not have to cost the forest.
                            <br />
                            JavaHeat proves it — one graded ember at a time.”
                        </p>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="mt-10 text-[11px] uppercase tracking-luxe opacity-60">
                            — JavaHeat Production Manifesto
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* FINAL CTA */}
            <section
                data-testid={HOME.ctaFooterBlock}
                className="py-24 md:py-40 bg-background"
            >
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
                        <Reveal className="md:col-span-8">
                            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-[1.02] tracking-tight text-balance">
                                Bring Plus Value
                                <br />
                                to your fire.
                            </h2>
                            <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl font-light">
                                Quotes, samples, B2B and export enquiries —
                                reach the JavaHeat team directly. We typically
                                reply within one business day.
                            </p>
                        </Reveal>
                        <Reveal className="md:col-span-4 flex flex-col gap-3" delay={0.1}>
                            <a
                                href={buildWhatsAppHref()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-between gap-3 bg-foreground text-background px-7 py-5 text-[11px] uppercase tracking-luxe hover:bg-foreground/85 transition-colors"
                            >
                                Chat on WhatsApp
                                <ArrowRight className="h-3.5 w-3.5" />
                            </a>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-between gap-3 border border-foreground/40 text-foreground px-7 py-5 text-[11px] uppercase tracking-luxe hover:bg-foreground hover:text-background transition-colors"
                            >
                                Send a Message
                                <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                        </Reveal>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
