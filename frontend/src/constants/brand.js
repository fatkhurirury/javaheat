// Centralised brand constants for JavaHeat
export const BRAND = {
    name: "JavaHeat",
    tagline: "The first eco-friendly graded charcoal.",
    shortTagline: "Eco-friendly. Graded. Engineered in Java.",
    product: "Plus Value",
    productLong: "Plus Value Graded Charcoal",
    email: "info@javaheat.com",
    phoneRaw: "6281228446702",
    phoneDisplay: "+62 812-2844-6702",
    whatsappMsg: "Hello JavaHeat, I am interested in your Plus Value graded charcoal. Could you share more details?",
    logoUrl:
        "https://customer-assets.emergentagent.com/job_e04965c3-8ed4-4715-8caa-bc017e530dd1/artifacts/pw124b40_Logo.png",
};

export const buildWhatsAppHref = (msg) => {
    const text = encodeURIComponent(msg || BRAND.whatsappMsg);
    return `https://wa.me/${BRAND.phoneRaw}?text=${text}`;
};

export const buildMailtoHref = (subject, body) => {
    const params = new URLSearchParams();
    if (subject) params.set("subject", subject);
    if (body) params.set("body", body);
    const qs = params.toString();
    return `mailto:${BRAND.email}${qs ? `?${qs}` : ""}`;
};

export const IMAGES = {
    heroCube:
        "https://static.prod-images.emergentagent.com/jobs/e04965c3-8ed4-4715-8caa-bc017e530dd1/images/1f32cace87bffba9134d6f8be5fb20d5f9b56096ce9999c0d926c016e08bc7a0.png",
    aboutBg:
        "https://static.prod-images.emergentagent.com/jobs/e04965c3-8ed4-4715-8caa-bc017e530dd1/images/cfc5d7e4db65d98a5dd7d6e61c08a2d779dc0a0d2fe432b0db34b3fbd8154e2b.png",
    abstractCharcoal:
        "https://static.prod-images.emergentagent.com/jobs/e04965c3-8ed4-4715-8caa-bc017e530dd1/images/4546a48b51d14310efd4ea3388d1ee9be875a288c14757674ac787778ae32539.png",
    embers: "https://images.pexels.com/photos/33011264/pexels-photo-33011264.jpeg",
    darkTexture: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
};
