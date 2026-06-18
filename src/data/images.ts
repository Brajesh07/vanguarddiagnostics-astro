/**
 * Centralized image path registry.
 * All paths point to WebP files in /public/images/.
 * Import this module wherever you need a consistent image path.
 */
export const images = {
  // ── Site-wide ──────────────────────────────────────────────
  logo: "/images/vanguard/logo.webp",
  favicon: "/images/vanguard/favicon.webp",
  bulletIcon: "/images/vanguard/shared/bullets-1.webp",
  ogImage: "/images/og-image.webp",
  heroPoster: "/images/hero-poster.webp",

  // ── Hero / Homepage ────────────────────────────────────────
  heroBanner: "/images/homepage/banner.webp",
  heroBannerPart: "/images/homepage/banner-img-part.webp",
  heroLogo: "/images/homepage/vanguard-diagnostics.webp",
  heroVideoThumbnail: "/images/homepage/biggbanner-video-thumbnail.webp",
  homePopupBg: "/images/homepage/home-popup-bg-2.webp",

  // ── Quick Links / Nav Icons ────────────────────────────────
  navIcons: {
    mission: "/images/vanguard/nav-icons/mission-icon.webp",
    vision: "/images/vanguard/nav-icons/vision-icon-1.webp",
    team: "/images/vanguard/nav-icons/team-icon-3.webp",
    milestone: "/images/vanguard/nav-icons/milestone-icon-3.webp",
    awards: "/images/vanguard/nav-icons/awards-icon-2.webp",
    pictureBook: "/images/vanguard/nav-icons/picture-book-icon-2.webp",
  },

  // ── About ──────────────────────────────────────────────────
  about: {
    banner: "/images/vanguard/about/aboutus-banner-1.webp",
    siteIcon: "/images/vanguard/about/vanguard-diagnostics-site-icon.webp",
    teamIcon: "/images/vanguard/about/team-icon-2.webp",
    nicheIcon: "/images/vanguard/about/our-niche-icon-1.webp",
    qualityIcon: "/images/vanguard/about/quality-icon-1.webp",
    labOne:"/images/vanguard/about/Vanguard-Diagnostics-Lab-1.webp",
    labTwo: "/images/vanguard/about/Vanguard-Diagnostics-Lab-2.webp",
    LabThree: "/images/vanguard/about/Vanguard-Diagnostics-Lab-3.webp",
    servingBanner: "/images/vanguard/about/about-vanguarddiagnostics-serving-1.webp",
    bg: "/images/vanguard/about/about-us-bg-1.webp",
    team: {
      veenaKohli: "/images/vanguard/about/Veena-Kohli.webp",
      drRpTiwari: "/images/vanguard/about/Dr-RP-Tiwari.webp",
      anilVirmani: "/images/vanguard/about/Anil-K-Virmani.webp",
      rahulThakur: "/images/vanguard/about/Rahul-Thakur.webp",
      vinodKumar: "/images/vanguard/about/Vinod-Kumar.webp",
    },
  },

  // ── Cards (About section on homepage) ──────────────────────
  cards: {
    vision: "/images/vanguard/cards/our-vision-home-4.webp",
    mission: "/images/vanguard/cards/our-mission-home-4.webp",
    team: "/images/vanguard/cards/our-team-home-4.webp",
  },

  // ── Awards (About section on homepage) ─────────────────────
  awardsHome: "/images/vanguard/awards/home-mid-image-3.webp",

  // ── Milestones ─────────────────────────────────────────────
  milestones: {
    foundation2015: "/images/homepage/milestone-foundation-day-2015-1.webp",
    diagon2016: "/images/homepage/milestone-diagon-2016-1.webp",
    medlab2017: "/images/homepage/milestone-medlab-dubai-2017-1.webp",
    bestIvd2018: "/images/homepage/milestone-best-ivd-2018-1.webp",
    pwc2018: "/images/homepage/milestone-pwc-2018-1.webp",
    etnow2018: "/images/homepage/milestone-etnow-2018-1.webp",
    entrepreneur2019: "/images/homepage/milestone-best-entrepreneur-award-2019-1.webp",
    ficci2020: "/images/homepage/milestone-ficci-2020-1.webp",
    icmr2020: "/images/homepage/milestone-icmr-2020-1.webp",
    birac2020: "/images/homepage/milestone-birac-2020-1.webp",
    drdo2020: "/images/homepage/milestone-drdo-1.webp",
    diagonVanguard2021: "/images/homepage/milestone-diagon-vanguard-2021-1.webp",
  },

  // ── Awards Carousel ────────────────────────────────────────
  awardsIcon: "/images/homepage/awards-icon-2.webp",
  awards: [
    "/images/homepage/awards-1.webp",
    "/images/homepage/awards-2.webp",
    "/images/homepage/awards-3.webp",
    "/images/homepage/awards-4.webp",
    "/images/homepage/awards-5.webp",
    "/images/homepage/awards-6.webp",
    "/images/homepage/awards-7.webp",
  ] as const,

  // ── Picture Book ───────────────────────────────────────────
  pictureBook: [
    "/images/homepage/Vanguard-Picture-Book-1.webp",
    "/images/homepage/Vanguard-Picture-Book-2.webp",
    "/images/homepage/Vanguard-Picture-Book-3.webp",
    "/images/homepage/Vanguard-Picture-Book-5.webp",
    "/images/homepage/Vanguard-Picture-Book-6.webp",
    "/images/homepage/Vanguard-Picture-Book-7.webp",
    "/images/homepage/Vanguard-Picture-Book-8.webp",
    "/images/homepage/Vanguard-Picture-Book-9.webp",
    "/images/homepage/Vanguard-Picture-Book-10.webp",
    "/images/homepage/Vanguard-Picture-Book-11.webp",
    "/images/homepage/Vanguard-Picture-Book-12.webp",
    "/images/homepage/Vanguard-Picture-Book-13.webp",
    "/images/homepage/Vanguard-Picture-Book-14.webp",
  ] as const,

  // ── Diagon ─────────────────────────────────────────────────
  diagon: {
    logo: "/images/vanguard/diagon/Diagon-Vanguard-1024x195.webp",
    banner: "/images/vanguard/diagon/Diagon-Vanguard-banner-1-1024x423.webp",
  },

  // ── Quality ────────────────────────────────────────────────
  quality: {
    icon: "/images/vanguard/quality/quality-icon-1.webp",
    banner: "/images/vanguard/quality/quality-banner-2.webp",
    footer1: "/images/vanguard/quality/quality-footer-1.webp",
    footer2: "/images/vanguard/quality/quality-footer-2.webp",
    footer3: "/images/vanguard/quality/quality-footer-3.webp",
  },

  // ── Career ─────────────────────────────────────────────────
  career: {
    banner: "/images/vanguard/career/career-banner-1.webp",
    icon: "/images/vanguard/career/certification-icon-5.webp",
  },

  // ── Contact ────────────────────────────────────────────────
  contact: {
    banner: "/images/vanguard/contact/contact-banner-1.webp",
    getInTouchIcon: "/images/vanguard/contact/get-in-touch-icon-2.webp",
    locationIcon: "/images/vanguard/contact/location-icon-2.webp",
    hrLine: "/images/vanguard/contact/hr-line-2.webp",
  },

  // ── Manufacturing ──────────────────────────────────────────
  manufacturing: {
    bg: "/images/vanguard/manufacturing/manufacturing-bg-1.webp",
    image: "/images/vanguard/products-solutions/manufacturing-4.webp",
    img2: "/images/vanguard/manufacturing/manufacturing-img-2-2.webp",
    topIcon: "/images/vanguard/manufacturing/certification-icon-1.webp",
    isoIcon: "/images/vanguard/manufacturing/iso-icon-2.webp",
    certIcon7: "/images/vanguard/manufacturing/certification-icon-7.webp",
    certBanner: "/images/vanguard/manufacturing/certification-1.webp",
    siteIcon: "/images/vanguard/manufacturing/vanguard-diagnostics-site-icon.webp",
  },

  // ── Products & Solutions ───────────────────────────────────
  products: {
    heroImage: "/images/vanguard/products-solutions/vanguard-diagnostics-product-image-1.webp",
    recentProduct: "/images/vanguard/products-solutions/recent-product-3.webp",
    flowCytometryBg: "/images/vanguard/products-solutions/product-bg-2.webp",
    flowCytometryImg: "/images/vanguard/products-solutions/Flow-Cytometry-img-2.webp",
    quoteIcon1: "/images/vanguard/products-solutions/quote-1.webp",
    quoteIcon2: "/images/vanguard/products-solutions/quote-2.webp",
    categoryIcons: {
      hematologyReagents: "/images/vanguard/products-solutions/product-hematology-reagents-icon.webp",
      hematologyControls: "/images/vanguard/products-solutions/product-hematology-controls-icon.webp",
      biochemistry: "/images/vanguard/products-solutions/product-clinical-chemistry-icon.webp",
      immunology: "/images/vanguard/products-solutions/product-immunology-icon.webp",
      covid19: "/images/vanguard/products-solutions/product-Covid-19-icon.webp",
      training: "/images/vanguard/products-solutions/product-training-icon.webp",
    },
    manufacturing: Array.from(
      { length: 13 },
      (_, i) => `/images/vanguard/products-solutions/manufacturing-${i + 1}.webp`,
    ) as string[],
  },

  // ── Training ───────────────────────────────────────────────
  training: {
    bannerTop: "/images/vanguard/products-solutions/training-banner-top.webp",
    banner3: "/images/vanguard/products-solutions/training-banner-3.webp",
    academy: "/images/vanguard/products-solutions/training-academy.webp",
    academy1: "/images/vanguard/products-solutions/training-academy-1.webp",
    capsules: "/images/vanguard/products-solutions/Training-Capsules.webp",
    model: "/images/vanguard/products-solutions/Training-Model.webp",
    model1: "/images/vanguard/products-solutions/Training-Model-1.webp",
    performanceIndicators: "/images/vanguard/products-solutions/Performance-Indicators.webp",
    performanceIndicators1: "/images/vanguard/products-solutions/Performance-Indicators-1.webp",
    performanceIndicatorsBanner: "/images/vanguard/products-solutions/Performance-Indicators-banner-1.webp",
    programs150: "/images/vanguard/products-solutions/Training-Programs-150x150.webp",
    programs1: "/images/vanguard/products-solutions/Training-Programs-1.webp",
    programsBenefits: "/images/vanguard/products-solutions/Training-Programs-Benefits-1.webp",
    benefitSelling: "/images/vanguard/products-solutions/Product-Benefit-Selling-1.webp",
    technicalHandsOn: "/images/vanguard/products-solutions/Technical-hands-on-training-1.webp",
    softSkills: "/images/vanguard/products-solutions/Soft-skills-development-1.webp",
    artOfSelling: "/images/vanguard/products-solutions/The-art-of-selling-1.webp",
    financeNonFinance: "/images/vanguard/products-solutions/Finance-for-non-finance-1.webp",
    logistics: "/images/vanguard/products-solutions/Logistics-1.webp",
    bg2: "/images/vanguard/products-solutions/training-bg-2.webp",
    channelDistributorManagement: "/images/vanguard/products-solutions/Channel-distributor-management-1.webp",
  },

  // ── Hematology Controls ────────────────────────────────────
  hematologyControls: {
    productIcon: "/images/vanguard/uploads/product-hematology-controls-icon-2.webp",
    controls3: "/images/vanguard/uploads/hematology-controls-3.webp",
    controls4: "/images/vanguard/uploads/hematology-controls-4.webp",
    dCheckD: "/images/vanguard/hematology/D-Check-D.webp",
    dCheckDPlus: "/images/vanguard/hematology/D-Check-D-Plus.webp",
    dCheck5Diff: "/images/vanguard/hematology/D-Check-5Diff.webp",
    dCheck5DiffPlus: "/images/vanguard/hematology/D-Check-5Diff-Plus.webp",
    openVial5: "/images/vanguard/hematology/5-Open-Vial-Stability.webp",
    openVial6: "/images/vanguard/hematology/6-Open-Vial-Stability.webp",
  },

  // ── Immunology ─────────────────────────────────────────────
  immunology: {
    productIcon: "/images/vanguard/uploads/product-immunology-icon-2.webp",
    pic1: "/images/vanguard/products-solutions/Immunology-pic-1.webp",
    pic2: "/images/vanguard/products-solutions/Immunology-pic-2.webp",
  },

  // ── Biochemistry ───────────────────────────────────────────
  biochemistry: {
    productIcon: "/images/vanguard/product-clinical-chemistry-icon-2.webp",
    newImgModels: "/images/vanguard/products-solutions/new-img-open-models.webp",
  },

  // ── Covid-19 ───────────────────────────────────────────────
  covid19: {
    banner: "/images/vanguard/products-solutions/covid-19-banner-1.webp",
    businessApproach: "/images/vanguard/products-solutions/business-approach-1.webp",
    viralTransport: "/images/vanguard/products-solutions/Viral-Transport-Medium-banner-1.webp",
    viralLysis: "/images/vanguard/products-solutions/Viral-Lysis-Transport-Medium-2.webp",
    technicalCollab: "/images/vanguard/products-solutions/Technical-collaboration-2.webp",
    antibodyTest: "/images/vanguard/products-solutions/Antibody-Test-for-IgM-1.webp",
  },

  // ── Typhoid ────────────────────────────────────────────────
  typhoid: {
    topBanner: "/images/vanguard/hematology/typhoid-top-banner-new-2.webp",
    testing1: "/images/vanguard/hematology/Typhoid-Testing-1.webp",
    testing2: "/images/vanguard/hematology/Typhoid-Testing-2.webp",
  },

  // ── Specific Products ──────────────────────────────────────
  specificProducts: {
    qualityIcon: "/images/homepage/quality-icon-1.webp",
    hematologyProducts: "/images/vanguard/hematology-controls-products-1.webp",
    hemaReagents3Part: "/images/vanguard/products-solutions/3-Part-Hematology-Reagents-2.webp",
    hemaReagents5Part: "/images/vanguard/products-solutions/5-Part-Hematology-Reagents-3.webp",
  },

  // ── Blogs ──────────────────────────────────────────────────
  blogs: {
    default: "/images/vanguard/blogs/default_image.webp",
    hivTest: "/images/vanguard/blogs/ChatGPT-Image-Jun-30-2025-02_45_55-PM-300x200.webp",
    biochemistryReagents: "/images/vanguard/blogs/Biochemistry-Reagents-Molecular-Diagnostics-still-300x300.webp",
    hematologyAnalyzers: "/images/vanguard/blogs/Hematology-Analyzers-300x300.webp",
    typhoidTest: "/images/vanguard/blogs/Typhoid-Testing-2.webp",
  },

  // ── Product page video ─────────────────────────────────────
  productPageBannerVideo: "/images/vanguard/products-solutions/vanguarddiagnostics-product-page-banner.mp4",

  // ── News ───────────────────────────────────────────────────
  news: {
    banner: "/images/news/news-banner-1.webp",
  },

  // ── Hematology (shared) ────────────────────────────────────
  hematology: {
    products: "/images/vanguard/hematology-controls-products-1.webp",
  },
} as const;
