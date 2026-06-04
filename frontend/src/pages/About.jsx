import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, ShieldCheck, Globe2, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import { BRAND, IMAGES, buildWhatsAppHref } from "@/constants/brand";
import { ABOUT } from "@/constants/testIds";

const pillars = [
    {
        slug: "heritage",
        icon: Sparkles,
        title: "Indonesian heritage",
        body: "Born on the volcanic island of Java, JavaHeat carries generations of charcoal craft, refined for a global stage.",
    },
    {
        slug: "grading",
        icon: ShieldCheck,
        title: "World’s first graded charcoal",
        body: "We invented the Plus Value standard — a transparent quality grade so chefs and importers know exactly what they receive.",
    },
    {
        slug: "eco",
        icon: Leaf,
        title: "Eco-friendly by design",
        body: "Plantation-sourced hardwood, coconut shell residues, and low-emission pyrolysis. Zero deforestation. Fully traceable.",
    },
    {
        slug: "export",
        icon: Globe2,
        title: "Engineered for export",
        body: "Calibrated burn profiles, kiln-dried packaging and consistent specs — ready for restaurants and importers worldwide.",
    },
];

const stats = [
    { slug: "burn", v: "3–4 h", k: "Burn time" },
    { slug: "carbon", v: "≥ 80%", k: "Fixed carbon" },
    { slug: "ash", v: "≤ 3%", k: "Ash content" },
    { slug: "markets", v: "20+", k: "Export markets" },
];

const About = () => {
    return (
        <div data-testid={ABOUT.page} className="bg-background">
            {/* HERO */}
            <section className="relative min-h-[90vh] flex items-end overflow-hidden bg-[#0A0A0A] text-[#FDFDFD]">
                <div
                    className="absolute inset-0 bg-cover bg-center scale-105 opacity-65"
                    style={{ backgroundImage: `url(${IMAGES.aboutBg})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/85" />
                <div className="absolute inset-0 grain" />

                <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pb-20 md:pb-28 pt-40 w-full">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[11px] uppercase tracking-luxe text-white/70 mb-8"
                    >
                        About JavaHeat
                    </motion.p>
                    <motion.h1
                        data-testid={ABOUT.heroHeadline}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="font-serif font-light leading-[0.95] tracking-tight text-balance text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] max-w-6xl"
                    >
                        Quietly redefining
                        <br />
                        <em className="not-italic">what charcoal can be.</em>
                    </motion.h1>
                </div>
            </section>

            {/* STORY — editorial layout */}
            <section
                data-testid={ABOUT.storySection}
                className="py-24 md:py-40"
            >
                <div className="max-w-[1100px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                        <Reveal className="md:col-span-4">
                            <p className="text-[11px] uppercase tracking-luxe text-muted-foreground">
                                Our story
                            </p>
                            <h2 className="mt-4 font-serif text-3xl md:text-4xl font-light leading-tight tracking-tight">
                                From a single
                                <br />
                                Javanese kiln.
                            </h2>
                        </Reveal>
                        <div className="md:col-span-8 space-y-8 text-lg leading-relaxed font-light text-foreground/85">
                            <Reveal>
                                <p className="text-balance">
                                    <span className="font-serif text-7xl float-left leading-[0.85] mr-4 mt-1">
                                        J
                                    </span>
                                    avaHeat began with a simple, uncomfortable
                                    question: why is the world’s most-used
                                    cooking fuel still sold without a single
                                    standard? Charcoal had become an afterthought
                                    — opaque, inconsistent, often tied to
                                    deforestation.
                                </p>
                            </Reveal>
                            <Reveal delay={0.05}>
                                <p className="text-balance">
                                    We started in Central Java with one small
                                    kiln, a notebook full of moisture readings,
                                    and a refusal to ship anything we could not
                                    classify. Over time, that notebook became a
                                    grading scale. That scale became Plus Value
                                    — the first formal grade of eco-friendly
                                    charcoal anyone had attempted to define.
                                </p>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <p className="text-balance">
                                    Today, JavaHeat partners with sustainable
                                    plantations and traceable coconut-shell
                                    cooperatives across the archipelago. Every
                                    box that leaves our facility carries the
                                    same promise: a measurable burn, a clean
                                    conscience, and a charcoal you can finally
                                    pronounce with pride.
                                </p>
                            </Reveal>
                        </div>
                    </div>

                    <Reveal delay={0.15} className="mt-24 md:mt-32">
                        <blockquote className="border-l-2 border-foreground pl-8 md:pl-12 max-w-4xl">
                            <p className="font-serif text-3xl md:text-5xl font-light leading-[1.1] tracking-tight text-balance">
                                “If we are going to burn something, we should at
                                least know exactly what it is.”
                            </p>
                            <footer className="mt-6 text-[11px] uppercase tracking-luxe text-muted-foreground">
                                — Founding Principle, JavaHeat
                            </footer>
                        </blockquote>
                    </Reveal>
                </div>
            </section>

            {/* PILLARS */}
            <section
                data-testid={ABOUT.pillarsSection}
                className="py-24 md:py-40 bg-secondary"
            >
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <Reveal>
                        <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-6">
                            What we stand for
                        </p>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.02] tracking-tight max-w-3xl text-balance">
                            Four principles. Burned in.
                        </h2>
                    </Reveal>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
                        {pillars.map((p, i) => (
                            <Reveal
                                key={p.slug}
                                delay={i * 0.05}
                                data-testid={ABOUT.pillarCard(p.slug)}
                                className="bg-background p-8 md:p-12"
                            >
                                <p.icon
                                    className="h-7 w-7 mb-10 text-foreground/80"
                                    strokeWidth={1.2}
                                />
                                <h3 className="font-serif text-3xl md:text-4xl font-light tracking-tight leading-tight">
                                    {p.title}
                                </h3>
                                <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground font-light max-w-md">
                                    {p.body}
                                </p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* STAT BAND */}
            <section
                data-testid={ABOUT.statSection}
                className="py-20 md:py-32 bg-[#0A0A0A] text-[#FDFDFD]"
            >
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
                    {stats.map((s) => (
                        <Reveal
                            key={s.slug}
                            className="bg-[#0A0A0A] p-8 md:p-12 text-center"
                        >
                            <p
                                data-testid={ABOUT.statValue(s.slug)}
                                className="font-serif text-5xl md:text-7xl font-light tracking-tight"
                            >
                                {s.v}
                            </p>
                            <p className="mt-4 text-[10px] uppercase tracking-luxe opacity-60">
                                {s.k}
                            </p>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 md:py-40 bg-background">
                <div className="max-w-[1100px] mx-auto px-6 md:px-12 text-center">
                    <Reveal>
                        <h2 className="font-serif text-4xl md:text-6xl font-light leading-[1.02] tracking-tight text-balance">
                            Curious about our process?
                            <br />
                            <em className="not-italic text-muted-foreground">
                                Speak with us directly.
                            </em>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-3">
                        <a
                            href={buildWhatsAppHref()}
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
                            Contact the team
                            <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default About;
