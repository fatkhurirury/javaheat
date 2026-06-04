import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Check, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import Reveal from "@/components/Reveal";
import {
    BRAND,
    IMAGES,
    buildWhatsAppHref,
    buildMailtoHref,
} from "@/constants/brand";
import { CONTACT } from "@/constants/testIds";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const initialState = {
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
};

const Contact = () => {
    const [form, setForm] = useState(initialState);
    const [status, setStatus] = useState({ state: "idle", error: "" });

    const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

    const submit = async (e) => {
        e.preventDefault();
        setStatus({ state: "submitting", error: "" });
        try {
            await axios.post(`${API}/contact`, form);
            setStatus({ state: "success", error: "" });
            setForm(initialState);
            toast.success("Message sent. We will be in touch shortly.");
        } catch (err) {
            const detail = err?.response?.data?.detail;
            const fallback =
                "Could not send the message. Please try again or message us on WhatsApp.";
            const msg = Array.isArray(detail)
                ? detail.map((d) => d?.msg || String(d)).join(", ")
                : typeof detail === "string"
                  ? detail
                  : fallback;
            setStatus({ state: "error", error: msg });
            toast.error(msg);
        }
    };

    return (
        <div data-testid={CONTACT.page} className="bg-background">
            {/* HERO */}
            <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 border-b border-border">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
                    <div className="md:col-span-7">
                        <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-8">
                            Contact JavaHeat
                        </p>
                        <h1
                            data-testid={CONTACT.heroHeadline}
                            className="font-serif font-light leading-[0.95] tracking-tight text-balance text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                        >
                            Speak with the people
                            <br />
                            <em className="not-italic">behind the fire.</em>
                        </h1>
                    </div>
                    <div className="md:col-span-5">
                        <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light max-w-md">
                            Quotes, samples, B2B partnerships, hospitality and
                            export enquiries. We reply within one business day.
                        </p>
                    </div>
                </div>
            </section>

            {/* SPLIT */}
            <section className="grid grid-cols-1 lg:grid-cols-12">
                {/* LEFT — info panel */}
                <div className="lg:col-span-5 relative bg-[#0A0A0A] text-[#FDFDFD] overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-50 bg-cover bg-center"
                        style={{ backgroundImage: `url(${IMAGES.abstractCharcoal})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/85" />
                    <div className="relative p-8 md:p-16 lg:p-20 h-full flex flex-col gap-12 min-h-[600px]">
                        <Reveal>
                            <p className="text-[11px] uppercase tracking-luxe opacity-60 mb-6">
                                Direct Channels
                            </p>
                            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight">
                                Three ways
                                <br />
                                to reach us.
                            </h2>
                        </Reveal>

                        <div className="mt-auto space-y-10">
                            <Reveal delay={0.05}>
                                <a
                                    data-testid={CONTACT.whatsappLink}
                                    href={buildWhatsAppHref()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-start gap-5"
                                >
                                    <span className="inline-flex h-10 w-10 items-center justify-center bg-[#25D366] text-black">
                                        <Phone className="h-4 w-4" />
                                    </span>
                                    <span>
                                        <p className="text-[10px] uppercase tracking-luxe opacity-60 mb-1">
                                            WhatsApp · Fastest
                                        </p>
                                        <p className="font-serif text-2xl md:text-3xl group-hover:opacity-70 transition-opacity">
                                            {BRAND.phoneDisplay}
                                        </p>
                                    </span>
                                </a>
                            </Reveal>

                            <Reveal delay={0.1}>
                                <a
                                    data-testid={CONTACT.emailLink}
                                    href={buildMailtoHref()}
                                    className="group flex items-start gap-5"
                                >
                                    <span className="inline-flex h-10 w-10 items-center justify-center bg-white text-black">
                                        <Mail className="h-4 w-4" />
                                    </span>
                                    <span>
                                        <p className="text-[10px] uppercase tracking-luxe opacity-60 mb-1">
                                            Email
                                        </p>
                                        <p className="font-serif text-2xl md:text-3xl group-hover:opacity-70 transition-opacity break-all">
                                            {BRAND.email}
                                        </p>
                                    </span>
                                </a>
                            </Reveal>

                            <Reveal delay={0.15}>
                                <div className="flex items-start gap-5">
                                    <span className="inline-flex h-10 w-10 items-center justify-center border border-white/30">
                                        <MapPin className="h-4 w-4" />
                                    </span>
                                    <span>
                                        <p className="text-[10px] uppercase tracking-luxe opacity-60 mb-1">
                                            Headquarters
                                        </p>
                                        <p className="font-serif text-2xl md:text-3xl">
                                            Central Java, Indonesia
                                        </p>
                                    </span>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>

                {/* RIGHT — form */}
                <div className="lg:col-span-7 bg-background">
                    <div className="p-8 md:p-16 lg:p-20 max-w-2xl">
                        <Reveal>
                            <p className="text-[11px] uppercase tracking-luxe text-muted-foreground mb-6">
                                Send a Message
                            </p>
                            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight">
                                Tell us about your fire.
                            </h2>
                        </Reveal>

                        <form
                            data-testid={CONTACT.form}
                            onSubmit={submit}
                            className="mt-12 space-y-8"
                            noValidate
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <Field
                                    label="Full name"
                                    testid={CONTACT.inputName}
                                    value={form.name}
                                    onChange={update("name")}
                                    required
                                />
                                <Field
                                    label="Email"
                                    type="email"
                                    testid={CONTACT.inputEmail}
                                    value={form.email}
                                    onChange={update("email")}
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <Field
                                    label="Company (optional)"
                                    testid={CONTACT.inputCompany}
                                    value={form.company}
                                    onChange={update("company")}
                                />
                                <Field
                                    label="Subject"
                                    testid={CONTACT.inputSubject}
                                    value={form.subject}
                                    onChange={update("subject")}
                                />
                            </div>
                            <Field
                                label="Message"
                                as="textarea"
                                rows={5}
                                testid={CONTACT.inputMessage}
                                value={form.message}
                                onChange={update("message")}
                                required
                            />

                            <motion.button
                                data-testid={CONTACT.submitBtn}
                                type="submit"
                                disabled={status.state === "submitting"}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-5 text-[11px] uppercase tracking-luxe hover:bg-foreground/85 transition-colors disabled:opacity-50"
                            >
                                {status.state === "submitting"
                                    ? "Sending…"
                                    : "Send Message"}
                                <Send className="h-3.5 w-3.5" />
                            </motion.button>

                            {status.state === "success" && (
                                <div
                                    data-testid={CONTACT.successAlert}
                                    className="flex items-start gap-3 border border-foreground/30 p-5"
                                >
                                    <Check className="h-4 w-4 mt-0.5" />
                                    <p className="text-sm leading-relaxed font-light">
                                        Thank you — your message has been
                                        received. The JavaHeat team will reply to
                                        you at {form.email || "your inbox"} shortly.
                                    </p>
                                </div>
                            )}

                            {status.state === "error" && (
                                <div
                                    data-testid={CONTACT.errorAlert}
                                    className="flex items-start gap-3 border border-destructive/40 p-5 text-destructive"
                                >
                                    <AlertCircle className="h-4 w-4 mt-0.5" />
                                    <p className="text-sm leading-relaxed font-light">
                                        {status.error}
                                    </p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

const Field = ({
    label,
    as = "input",
    testid,
    value,
    onChange,
    type = "text",
    rows,
    required,
}) => {
    const baseClasses =
        "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base md:text-lg font-light focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50";
    return (
        <label className="block">
            <span className="text-[10px] uppercase tracking-luxe text-muted-foreground">
                {label}
                {required ? " *" : ""}
            </span>
            {as === "textarea" ? (
                <textarea
                    data-testid={testid}
                    value={value}
                    onChange={onChange}
                    rows={rows || 4}
                    required={required}
                    className={`${baseClasses} resize-none mt-2`}
                />
            ) : (
                <input
                    data-testid={testid}
                    type={type}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className={`${baseClasses} mt-2`}
                />
            )}
        </label>
    );
};

export default Contact;
