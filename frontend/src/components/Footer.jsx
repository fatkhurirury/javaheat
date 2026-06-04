import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { BRAND, buildWhatsAppHref, buildMailtoHref } from "@/constants/brand";
import { FOOTER } from "@/constants/testIds";

const Footer = () => {
    return (
        <footer
            data-testid={FOOTER.container}
            className="bg-foreground text-background"
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
                    <div className="md:col-span-5">
                        <p className="text-[11px] uppercase tracking-luxe opacity-60 mb-4">
                            JavaHeat — Plus Value
                        </p>
                        <h3 className="font-serif text-4xl md:text-5xl font-light leading-[1.05] tracking-tight text-balance">
                            The first eco-friendly graded charcoal.
                        </h3>
                        <p className="mt-8 text-sm leading-relaxed opacity-70 max-w-md">
                            Engineered in Java. Graded by hand. Delivered to
                            connoisseurs, restaurants and lounges across the
                            world.
                        </p>
                    </div>

                    <div className="md:col-span-3">
                        <p className="text-[11px] uppercase tracking-luxe opacity-60 mb-6">
                            Navigate
                        </p>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to="/" className="underline-link">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="underline-link">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="underline-link">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="underline-link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-4">
                        <p className="text-[11px] uppercase tracking-luxe opacity-60 mb-6">
                            Reach Us
                        </p>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <Mail className="h-4 w-4 mt-1 opacity-70" />
                                <a
                                    data-testid={FOOTER.emailLink}
                                    href={buildMailtoHref()}
                                    className="underline-link"
                                >
                                    {BRAND.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="h-4 w-4 mt-1 opacity-70" />
                                <a
                                    data-testid={FOOTER.whatsappLink}
                                    href={buildWhatsAppHref()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline-link"
                                >
                                    {BRAND.phoneDisplay} · WhatsApp
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 mt-1 opacity-70" />
                                <span className="opacity-80">
                                    Central Java, Indonesia
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-background/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] uppercase tracking-luxe opacity-50">
                    <p>
                        © {new Date().getFullYear()} JavaHeat. All rights reserved.
                    </p>
                    <p>Plus Value · Graded · Eco-friendly</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
