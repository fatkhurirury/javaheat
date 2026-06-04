// JavaHeat test IDs — kebab-case, descriptive, unique
export const NAV = {
    container: "site-nav",
    logo: "site-nav-logo",
    linkHome: "site-nav-link-home",
    linkAbout: "site-nav-link-about",
    linkProducts: "site-nav-link-products",
    linkContact: "site-nav-link-contact",
    whatsappCta: "site-nav-whatsapp-cta",
    mobileToggle: "site-nav-mobile-toggle",
    mobileSheet: "site-nav-mobile-sheet",
};

export const HOME = {
    page: "home-page",
    heroHeadline: "home-hero-headline",
    heroCtaWhatsapp: "home-hero-whatsapp-cta",
    heroCtaExplore: "home-hero-explore-cta",
    gradingSystemSection: "home-grading-system-section",
    gradingCriterion: (slug) => `home-grading-criterion-${slug}`,
    productSection: "home-product-section",
    productCard: "home-product-card",
    benefitsSection: "home-benefits-section",
    benefitCard: (slug) => `home-benefit-${slug}`,
    gradingSection: "home-grading-section",
    sustainabilitySection: "home-sustainability-section",
    ctaFooterBlock: "home-cta-footer-block",
    seeAllGradesCta: "home-see-all-grades-cta",
};

export const ABOUT = {
    page: "about-page",
    heroHeadline: "about-hero-headline",
    storySection: "about-story-section",
    pillarsSection: "about-pillars-section",
    pillarCard: (slug) => `about-pillar-${slug}`,
    statSection: "about-stat-section",
    statValue: (slug) => `about-stat-value-${slug}`,
};

export const CONTACT = {
    page: "contact-page",
    heroHeadline: "contact-hero-headline",
    form: "contact-form",
    inputName: "contact-form-name",
    inputEmail: "contact-form-email",
    inputCompany: "contact-form-company",
    inputSubject: "contact-form-subject",
    inputMessage: "contact-form-message",
    submitBtn: "contact-form-submit",
    successAlert: "contact-form-success",
    errorAlert: "contact-form-error",
    whatsappLink: "contact-whatsapp-link",
    emailLink: "contact-email-link",
};

export const PRODUCTS = {
    page: "products-page",
    heroHeadline: "products-hero-headline",
    gradingSystemSection: "products-grading-system-section",
    gradingCriterion: (slug) => `products-grading-criterion-${slug}`,
    gradeSection: (slug) => `products-grade-${slug}`,
    gradeDownload: (slug) => `products-grade-${slug}-download`,
    gradeWhatsapp: (slug) => `products-grade-${slug}-whatsapp`,
    comparisonTable: "products-comparison-table",
    comparisonRow: (slug) => `products-comparison-row-${slug}`,
};

export const FAB = {
    whatsapp: "floating-whatsapp-fab",
};

export const FOOTER = {
    container: "site-footer",
    emailLink: "site-footer-email",
    whatsappLink: "site-footer-whatsapp",
};
