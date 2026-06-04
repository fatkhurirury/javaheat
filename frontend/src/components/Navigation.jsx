import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND, buildWhatsAppHref } from "@/constants/brand";
import { NAV } from "@/constants/testIds";

const links = [
    { to: "/", label: "Home", testid: NAV.linkHome },
    { to: "/about", label: "About", testid: NAV.linkAbout },
    { to: "/products", label: "Products", testid: NAV.linkProducts },
    { to: "/contact", label: "Contact", testid: NAV.linkContact },
];

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setOpen(false);
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [location.pathname]);

    // Pages whose hero is dark — Home and About sit on a near-black hero
    // image, so the nav must render in white until the user scrolls past it.
    const darkHero = location.pathname === "/" || location.pathname === "/about";
    const onDark = darkHero && !scrolled;

    return (
        <header
            data-testid={NAV.container}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-background/85 backdrop-blur-xl border-b border-border/60 text-foreground"
                    : darkHero
                      ? "bg-transparent text-white"
                      : "bg-transparent text-foreground"
            }`}
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
                <Link
                    to="/"
                    data-testid={NAV.logo}
                    className="flex items-center gap-3 group"
                    aria-label="JavaHeat home"
                >
                    <span
                        className={`inline-flex h-9 w-9 items-center justify-center overflow-hidden transition-colors ${
                            onDark ? "bg-white" : "bg-foreground"
                        }`}
                    >
                        <img
                            src={BRAND.logoUrl}
                            alt="JavaHeat"
                            className="h-7 w-7 object-contain"
                            style={{ filter: onDark ? "none" : "invert(1)" }}
                        />
                    </span>
                    <div className="flex flex-col leading-none">
                        <span className="font-serif text-xl tracking-tight">
                            JavaHeat
                        </span>
                        <span
                            className={`text-[10px] tracking-luxe uppercase mt-0.5 ${
                                onDark
                                    ? "text-white/60"
                                    : "text-muted-foreground"
                            }`}
                        >
                            Plus Value
                        </span>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-10">
                    {links.map((l) => (
                        <NavLink
                            key={l.to}
                            to={l.to}
                            end={l.to === "/"}
                            data-testid={l.testid}
                            className={({ isActive }) =>
                                `text-xs uppercase tracking-luxe font-medium transition-opacity ${
                                    isActive
                                        ? "opacity-100"
                                        : "opacity-60 hover:opacity-100"
                                }`
                            }
                        >
                            {l.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="hidden md:flex items-center">
                    <a
                        data-testid={NAV.whatsappCta}
                        href={buildWhatsAppHref()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 text-[11px] uppercase tracking-luxe transition-colors ${
                            onDark
                                ? "bg-white text-black hover:bg-white/90"
                                : "bg-foreground text-background hover:bg-foreground/85"
                        }`}
                    >
                        <WhatsAppGlyph className="h-3.5 w-3.5" />
                        Chat on WhatsApp
                    </a>
                </div>

                <button
                    data-testid={NAV.mobileToggle}
                    aria-label="Toggle menu"
                    className={`md:hidden inline-flex h-10 w-10 items-center justify-center border transition-colors ${
                        onDark ? "border-white/40" : "border-border"
                    }`}
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        data-testid={NAV.mobileSheet}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden bg-background border-t border-border"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            {links.map((l) => (
                                <NavLink
                                    key={l.to}
                                    to={l.to}
                                    end={l.to === "/"}
                                    data-testid={`${l.testid}-mobile`}
                                    className={({ isActive }) =>
                                        `font-serif text-3xl tracking-tight ${
                                            isActive
                                                ? "opacity-100"
                                                : "opacity-60"
                                        }`
                                    }
                                >
                                    {l.label}
                                </NavLink>
                            ))}
                            <a
                                href={buildWhatsAppHref()}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid={`${NAV.whatsappCta}-mobile`}
                                className="mt-4 inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-4 text-xs uppercase tracking-luxe"
                            >
                                <WhatsAppGlyph className="h-4 w-4" />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

const WhatsAppGlyph = ({ className = "" }) => (
    <svg
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
        aria-hidden="true"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" />
    </svg>
);

export default Navigation;
