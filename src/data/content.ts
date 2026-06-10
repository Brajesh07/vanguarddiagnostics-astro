import { siteData } from "./site";
import { quickLinks, milestoneTimeline, awards, pictureBook } from "./home";

/**
 * SHARED INTERFACES
 */

export interface Metadata {
  title: string;
  description?: string;
}

export interface TeamMember {
  id?: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  hasPopup?: boolean;
  extraBio?: string;
}

export interface AboutSection {
  title: string;
  titleAlign?: "left" | "center" | "right";
  titleImg?: {
    src: string;
    alt: string;
  };
  paragraphs?: string[];
  bullets?: string[];
  footerParagraphs?: string[];
  image: {
    src: string;
    alt: string;
  };
  button?: {
    text: string;
    triggerId: string;
  };
}

export interface ProductCategory {
  name: string;
  icon: string;
  href: string;
}

export interface QualityInsight {
  title: string;
  body: string;
  image: string;
}

export interface FormField {
  label: string;
  type: string;
  id: string;
}

/**
 * CONTENT EXPORTS
 */

export const homeContent = {
  metadata: {
    title: "Vanguard Diagnostics India | Advance Diagnostics",
    description:
      "Vanguard Diagnostics aims to better healthcare in India and emerging markets by developing, manufacturing & marketing high quality diagnostic products",
  },
  hero: {
    slides: [
      {
        bg: "/images/homepage/banner.jpg",
        productImg: "/images/homepage/banner-img-part.png",
        vanguardLogo: "/images/homepage/vanguard-diagnostics.png",
        launchBadge: "/launch.png",
        title: "Typhoid RT-PCR Test",
        subtitle: "Fulfilling the Unmet Need",
        description:
          "First-of-its-kind Patented* RT-PCR Test for the detection of Salmonelia typhi & paratyphi in human blood",
        cta: {
          text: "Read More",
          href: "/products-solutions/typhoid-rt-pcr",
        },
      },
      {
        video: "/images/homepage/big-banner-video.mp4",
        poster: "/images/homepage/biggbanner-video-thumbnail.jpeg",
      },
    ],
  },
  about: {
    title: "Vanguard Diagnostics",
    subtitle: "About Us",
    definitionTitle: "/vanguard/ noun:",
    definitionBody:
      "Vanguard: A creative group active in innovation and application of new concepts & technologies in a given field.",
    p1: "Diagnostics is amongst the most crucial elements of healthcare delivery today and it's imperative to ensure that it is accessible and affordable for all those who need it the most.",
    p2: "Vanguard Diagnostics aims to contribute to better healthcare in India and emerging markets by developing, manufacturing, and marketing high quality diagnostic products at affordable prices.",
    cta: {
      text: "Read More",
      href: "/about-us",
    },
    youtubeId: "zEeRN0iMGng",
    awardsSection: {
      title: "Excellence in Scaling-up of Manufacturing of Covid-19 Demand",
      image: "/images/vanguard/awards/home-mid-image-3.jpg",
      youtubeId: "UFgxiaMOj4E",
    },
    cards: [
      {
        id: "Vision",
        title: "Our Vision >>",
        image: "/images/vanguard/cards/our-vision-home-4.jpg",
        popupHeading: `Our <br> <span class="text-black">Vision</span>`,
        popupPara: `<p>Our vision at Vanguard Diagnostics is to make India increasingly self-reliant in the <em>in-vitro</em> diagnostics domain.</p>`,
      },
      {
        id: "Mission",
        title: "Our Mission >>",
        image: "/images/vanguard/cards/our-mission-home-4.jpg",
        popupHeading: `Our <br> <span class="text-black">Mission</span>`,
        popupPara: `<p>To develop, manufacture & market diagnostic products that stand for Responsibility & Reliability. <br/><br/> We intend to be the first-choice partner, of all non-manufacturing companies based in India and the sub-continent.</p>`,
      },
      {
        id: "Team",
        title: "Our Team >>",
        image: "/images/vanguard/cards/our-team-home-4.jpg",
        tall: true,
        href: "/about-us",
      },
    ],
  },
  milestones: {
    title: "Our Milestones",
    icon: "/images/vanguard/nav-icons/milestone-icon-3.png",
    p1: "With our major focus on delivering top-notch quality diagnostic products, we have been able to win numerous prestigious awards and international recognition.",
    p2: "Vanguard Diagnostics (P) Limited pioneered the introduction of Rapid Card Typhoid Antigen Detection Test in India to facilitate early, effortless, and accurate diagnosis of Typhoid fever.",
    p3: "We have an exclusive tie-up with Diagon-Hungary for the marketing of Hematology controls in India / Nepal / Bhutan.",
    timeline: milestoneTimeline,
  },
  diagon: {
    logo: "/images/vanguard/diagon/Diagon-Vanguard-1024x195.jpg",
    banner: "/images/vanguard/diagon/Diagon-Vanguard-banner-1-1024x423.jpg",
    title: "Diagon, Hungary & Vanguard Diagnostics, India",
    subtitle:
      "Bringing world class coagulation solutions for all types of laboratories in India",
  },
  awards: awards,
  pictureBook: {
    title: "Picture Book",
    icon: "/images/vanguard/nav-icons/picture-book-icon-2.png",
    items: pictureBook,
  },
  quickLinks: quickLinks,
} as const;

export const aboutContent = {
  metadata: {
    title: "Vanguard Diagnostics - Quality Diagnostic Products",
  },
  hero: {
    banner: "/images/vanguard/about/aboutus-banner-1.webp",
    icon: "/images/vanguard/about/vanguard-diagnostics-site-icon.png",
    title: "About Vanguard Diagnostics",
    definition:
      "/vanguard/ noun: Vanguard: A creative group active in innovation and application of new concepts and technologies in a given field.",
    p1: "Diagnostics is amongst the most crucial elements of healthcare delivery today and it's imperative to ensure that it is accessible and affordable for all those who need it the most.",
    p2: "Vanguard Diagnostics aims to contribute to better healthcare in India and emerging markets by developing, manufacturing and marketing high quality diagnostic products at affordable prices.",
    cta: {
      text: "Read More",
      href: "/about-us",
    },
  },
  philosophy: {
    title: "Our Team",
    icon: "/images/vanguard/about/team-icon-2.png",
  },
  team: [
    {
      id: "veena-kohli",
      name: "Veena Kohli",
      role: "CEO / Founder",
      image: "/images/vanguard/about/Veena-Kohli.jpg",
      bio: "<span class='text-primary font-medium'>Veena Kohli</span> is an alumnus of the All India Institute of Medical Sciences, New Delhi. She has 30+ years of experience in the domains of Medical Diagnostics, Life Sciences, Chemicals and Animal Health Care. During the course, she had the opportunity to develop rare skill and expertise encompassing the entire value chain of Product & Business, starting from R&D, Manufacturing, Quality, Supply Chain, Product Management and Technical Services to Business Management – Domestic & Global.<br/><br/><strong>Global business leadership</strong><br/><br/>In her earlier avatar, Ms. Kohli was the Vice President and Head of the Global Diagnostics Business Unit at Avantor Performance Materials, a US based Diagnostics and Fine Chemicals organization. She was responsible for business strategy formulation, product road map, driving business",
      hasPopup: true,
      extraBio:
        "She was responsible for business strategy formulation, product road map, driving business partnerships & technology and the global PL.<br/><br/>She successfully led a team of 130+ professionals from sales, service, marketing & R&D spread across the US, Europe, Asia and Mexico for four years. She grew the Diagnostics business of RFCL (formerly Ranbaxy) in India by 322% in three years through organic and inorganic endeavors.<br/><br/>The business grew to be among the top 5 domestic diagnostics manufacturers in India. Successfully integrated two acquired Biomed businesses (Wipro & Godrej) while leading the Diagnostics business in India.",
    },
    {
      id: "rp-tiwari",
      name: "Dr. R.P. Tiwari",
      role: "Director Technical",
      image: "/images/vanguard/about/Dr-RP-Tiwari.jpg",
      bio: "<span class='text-primary font-medium'>Dr. R.P. Tiwari</span> holds a doctorate degree in Biotechnology from Barkatullah University, Bhopal, MP, India and has been awarded with American, European, Indian patents and World Intellectual Property Copyright from the World Intellectual Property Organization on his PhD work on a diagnostic kit for detecting pulmonary and extra-pulmonary tuberculosis.<br/><br/>The fundamental research work done by Dr. Tiwari during his PhD has been appreciated and funded by the Department of Biotechnology, Ministry of Science & Technology, Govt. of India for developing the TB screen test for the detection and diagnosis of M. Tuberculosis. He has worked as a scientific advisor cum external collaborator in the above research program for the development of a diagnostic kit for early and rapid detection of pulmonary and extra-pulmonary tuberculosis and for its evaluation in health centers. He has guided more than 15 post",
      hasPopup: true,
      extraBio:
        "He has guided more than 15 post graduate students for research programs and 5 PhD students for accomplishing their research work in diversified fields of biological sciences.<br/><br/>Dr. Tiwari has published numerous research papers and articles in national and international peer-reviewed journals and co-authored several books. One of his books entitled “HIV and AIDS: Basic elements and priorities”, published by Springer, Netherlands has been rated five stars by global reviewers and listed among the top 10 on the section of Acquired Immuno-Deficiency Syndrome and HIV in eleventh edition of medical faculty library by the World Health Organization in 2007. During the tenure of his research experience in leading pharmaceuticals/biotechnology industries in India and abroad, he has been the co-inventor of twelve industrial patents and has discovered various novel molecules for the development of new products.<br/><br/>Additionally, Dr. Tiwari has been appointed as an advisory board member in AKS University, Satna, M.P., member of Biotech Task Force, PHD Chamber of Commerce & Industry, Govt. of India and Editorial Board Member of International Journal of Pharmacy and Pharmaceutical Sciences.",
    },
    {
      name: "Anil K Virmani",
      role: "Director Sales",
      image: "/images/vanguard/about/Anil-K-Virmani.jpg",
      bio: "<span class='text-primary font-medium'>Anil K Virmani</span> is an experienced business professional with over 36 years of experience in spearheading strategies and business development. He has been a high-performing professional, meeting ambitious customer acquisitions both in the Government and Private sectors.<br/><br/>He has been responsible for developing and implementing business strategies to achieve organizational objectives on a sustained basis.<br/><br/>Anil has a special acumen for identifying, nurturing and growing key talent in the organization and commercial accounts.<br/><br/>Before becoming a part of the Vanguard Diagnostics, Anil had held several senior roles at Avantor Performance Materials India Ltd., RFCL & Godrej Industries Limited.",
    },
    {
      name: "Rahul Thakur",
      role: "Director Sales",
      image: "/images/vanguard/about/Rahul-Thakur.jpg",
      bio: "<span class='text-primary font-medium'>Rahul Thakur</span> has a Masters in Business Administration and 16+ years of successful sales experience, consistently meeting and exceeding targets.<br/><br/>He has a natural and outstanding flair for effective team management and customer engagement.<br/><br/>Rahul has demonstrable experience in developing client-focused, differentiated and achievable solutions. He has been responsible for developing and executing key growth sales strategies, tactics and action plans required to achieve financial targets.<br/><br/>Rahul has successfully managed senior sales and commercial roles throughout his career.",
    },
    {
      name: "Vinod Kumar",
      role: "Director Corporate Affairs",
      image: "/images/vanguard/about/Vinod-Kumar.jpg",
      bio: "An alumnus of IIT-Delhi, <span class='text-primary font-medium'>Vinod Kumar</span> holds 38 years of work experience in senior management positions with the longest at BHEL – a Maharatna company, largest engineering enterprise with a product portfolio of nearly 200 and an enviable record of profit making without a break for more than 30 years.<br/><br/>His areas of expertise include Corporate Affairs, Marketing and Project Development, Project Engineering, System Design and Integration, Erection & Commissioning of plants.<br/><br/>Currently he is CEO, Atal Incubation Centre supported by NITI Aayog, Govt of India under the Atal Innovation Mission, to support start ups in Health Tech, Agri Tech, Renewable Energy and Clean Mobility.",
    },
  ] as TeamMember[],
  model: {
    title: "Our Model",
    bullets: [
      "Our model aims at serving as the development and manufacturing arm for the non-manufacturing companies in India thereby reducing the need for import and giving an impetus to the ‘Make in India’ initiative.",
      "With a manufacturing capacity of 1.5 million liters per annum, we are the youngest and one of the largest manufacturers of Hematology Reagents in India. Hematology is our flagship product line having capacity of 1.5 Million liters per year in a single shift and contributes to ~68% of our topline revenue.",
      "We have been able to convert over 200 containers worth of import from China pertaining to Hematology reagents to a viable Indian solution, by providing domestically developed and manufactured products to our customers. Thus making a small contribution to the ‘Make in India’ initiative.",
    ],
  },
  sections: [
    {
      title: `<em>in-vitro</em> <span class="text-primary">Diagnostics</span> Industry today in India`,
      paragraphs: [
        `<em>in-vitro</em> Diagnostics (IVD) is a part of the healthcare industry with a market size of ~$1.3 Bn. The Indian IVD industry is estimated to have recorded a year-on-year growth of more than 30% during the calendar year 2020, which is close to double the rate at which the industry had grown in the past decade. This is attributable primarily to an unprecedented surge in the demand for Covid -19 related products during this period.`,
        `Additionally, the disease burden of India has come to resemble that of the West, with more and more Indians suffering from lifestyle related diseases like Diabetes mellitus, Cardiovascular disease and Cancer. It is seven times more expensive to diagnose, treat or monitor a lifestyle related disease as compared to an infectious disease. Hematology, Clinical Chemistry and Immunology segments constitute more than 80% of the total diagnostics market.`,
      ],
      image: {
        src: "/images/vanguard/about/Vanguard-Diagnostics-Lab-2.jpg",
        alt: "Vanguard diagnostics lab",
      },
      button: {
        text: "Read More",
        triggerId: "ivd-industry",
      },
    },
    {
      title: `Our <span class="text-primary">Niche</span>`,
      titleAlign: "center",
      titleImg: {
        src: "/images/vanguard/about/our-niche-icon-1.png",
        alt: "Our Niche Icon",
      },
      paragraphs: [
        "We position ourselves as the manufacturing arm and first choice partner with a ‘Make in India’ initiative for all non-manufacturing companies in India and the sub-continent.",
        "We offer an unmatched development lead time taking only 4 weeks to develop a customized product for our customers based on our in-depth knowledge of R&D, manufacturing and quality systems.",
        "With a manufacturing capacity of 1.5 million litres of reagents per annum, we are the youngest and one of the largest manufacturers of Hematology Reagents in India.",
        "Vanguard Diagnostics also runs its Training Academy. The only diagnostics company offering this service.",
      ],
      image: {
        src: "/images/vanguard/about/Vanguard-Diagnostics-Lab-2.jpg",
        alt: "Vanguard diagnostics lab",
      },
    },
    {
      title: `<span class="text-primary">Quality</span>`,
      titleAlign: "center",
      titleImg: {
        src: "/images/vanguard/about/quality-icon-1.png",
        alt: "Quality Icon",
      },
      paragraphs: ["We follow the most stringent quality norms:"],
      bullets: [
        "Post Market Surveillance twice a year",
        "Accelerated Stability Studies",
        "Real Time Stability Studies",
      ],
      image: {
        src: "/images/vanguard/about/Vanguard-Diagnostics-Lab-2.jpg",
        alt: "Vanguard diagnostics quality",
      },
      footerParagraphs: [
        "We also have an internal benchmark to resolve quality complaints / queries satisfactorily within 48 hours.",
      ],
    },
  ] as AboutSection[],
  ivdIndustry: {
    popup: {
      title: "in-vitro Diagnostics Industry Today In India",
      bg: "/images/homepage/home-popup-bg-2.jpg",
      paragraphs: [
        "These companies constitute 15% of the total number of players, however, they hold more than 50% of the total market share owing to their high end and high priced automated analyzers and reagents. Their products dominate the Tier 1 pathology laboratories and hospitals of our country.",
        "The highest percentage is that of local importers and distributors of instruments and reagents, constituting 45% of the total players.",
        "The margins of such entities have been significantly impacted by the depreciation of the Rupee by over 50% during the past five years.",
        "This along with the complexity of obtaining import licenses and high import duty on reagents has highlighted an unmet need for a dedicated and experienced diagnostics group that could develop and manufacture reagents in customized formats while ensuring the highest level of quality and stable pricing.",
      ],
    },
  },
  servingBanner:
    "/images/vanguard/about/about-vanguarddiagnostics-serving-1.webp",
} as const;

export const productsContent = {
  metadata: {
    title: "Products & Solutions | Vanguard Diagnostics",
    description:
      "At Vanguard Diagnostics, we strive to enrich our portfolio continuously.",
  },
  hero: {
    video: "/images/vanguard/products-solutions/product-hero.mp4",
  },
  intro: {
    title: "Products Manufactured by Vanguard Diagnostics",
    description:
      "At Vanguard Diagnostics, we strive to enrich our portfolio continuously.",
    image:
      "/images/vanguard/products-solutions/vanguard-diagnostics-product-image-1.jpg",
    bullets: [
      "Our flagship product line is Hematology wherein we offer a complete solution to the customer constituting reagents, controls, calibrators and an analyzer.",
      "We have developed, manufactured and marketed reagents over 20 models of Hematology analyzers, in a short span of five years.",
      "We assign value sheets for Hematology Controls on analyzers that do not have one. This was an unmet need of the market which is being fulfilled by Vanguard.",
    ],
  },
  categories: [
    {
      name: "Hematology Reagents",
      icon: `/images/vanguard/products-solutions/product-hematology-reagents-icon.jpg`,
      href: "/products-solutions/hematology-reagents",
    },
    {
      name: "Hematology Controls",
      icon: `/images/vanguard/products-solutions/product-hematology-controls-icon.jpg`,
      href: "/products-solutions/hematology-controls",
    },
    {
      name: "Biochemistry Reagents",
      icon: `/images/vanguard/products-solutions/product-clinical-chemistry-icon.jpg`,
      href: "/products-solutions/biochemistry-reagents",
    },
    {
      name: "Immunology Diagnostic Tests",
      icon: `/images/vanguard/products-solutions/product-immunology-icon.jpg`,
      href: "/products-solutions/immunology-diagnostic-tests",
    },
    {
      name: "Covid-19",
      icon: `/images/vanguard/products-solutions/product-Covid-19-icon.jpg`,
      href: "/products-solutions/covid-19",
    },
    {
      name: "Training",
      icon: `/images/vanguard/products-solutions/product-training-icon.jpg`,
      href: "/products-solutions/training",
    },
    {
      name: "Typhoid RT PCR",
      icon: `/images/vanguard/products-solutions/product-hematology-reagents-icon.jpg`,
      href: "/products-solutions/typhoid-rt-pcr",
    },
  ] as ProductCategory[],
  covid19: {
    title: "Covid-19",
    image: "/images/vanguard/products-solutions/Covid-19-1.jpg",
    p1: "The Covid-19 pandemic has put the technical and scientific abilities of the Indian in-vitro Diagnostics (IVD) industry to the test, since March, 2020. The industry has responded to the need of the hour swiftly, scientifically, strongly and successfully.",
    p2: "Since the month of March this year, the market started buzzing with the launch of novel Indian products for the detection of Covid-19. Today there are more than 30 Indian IVD companies that have introduced indigenous kits based on the Gold Standard, RT PCR technology and over 15 companies who have developed the antibody detection tests for Covid-19.",
    cta: {
      text: "Read More",
      href: "/products-solutions/covid-19",
    },
  },
  dengueElisa: {
    title: "Microwell ELISA for the detection of Dengue Antigen NS1",
    image: "/images/vanguard/products-solutions/recent-product-3.png",
    intro:
      "Vanguard Diagnostics is one of the few Indian manufacturers of this product.",
    bullets: [
      "Reliable results in just two hours.",
      "Simple, two step procedure.",
      "Value for money.",
      "Benchmarked against World's Best Product.",
    ],
  },
  flowCytometry: {
    title: "Flow Cytometry",
    subtitle: "We are the only Indian company to offer domestic reagents for",
    location: "In India",
    bg: "/images/vanguard/products-solutions/product-bg-2.jpg",
    image: "/images/vanguard/products-solutions/Flow-Cytometry-img-2.png",
  },
  quote: {
    text: "We Provide Customized Solutions To Our Customers & Forge Long Term & Stable Business Relationships.",
    icon1: "/images/vanguard/products-solutions/quote-1.png",
    icon2: "/images/vanguard/products-solutions/quote-2.png",
    bg: "/images/vanguard/products-solutions/product-bg-2.jpg",
  },
  manufacturing: {
    title: "Manufacturing",
    subtitle:
      "Click on the videos below for a glimpse of our manufacturing capability",
    images: Array.from(
      { length: 13 },
      (_, i) =>
        `/images/vanguard/products-solutions/manufacturing-${i + 1}.jpg`,
    ),
  },
} as const;

export const manufacturingContent = {
  metadata: {
    title: "One of Its Kind – Vanguard Diagnostic Reagents Manufacturing",
    description:
      "Vanguard excels in crafting diagnostic reagents at Okhla, New Delhi unit, specialising in Hematology, Clinical Chemistry, and Immunology segments.",
  },
  hero: {
    video: "/images/vanguard/manufacturing/Manufacturing-banner.mp4",
    backgroundImage: "/images/vanguard/manufacturing/manufacturing-bg-1.png",
    sloganTeal1: "Capacity to manufacture",
    sloganBlack: "1.5 million liters",
    sloganTeal2: "of reagents per year",
    capacity:
      "Annual Capacity to Manufacture : <span class='text-[#827f7f]'>7 Million Liters</span>",
    title: "One of Its Kind – Vanguard's Diagnostic Reagents Manufacturing",
    description:
      "Vanguard has an in-house Diagnostic Reagents Manufacturing unit based in Okhla, New Delhi. We are focused towards the development of top-notch in-vitro Diagnostic Reagents and products across the <span class='text-primary'>Hematology</span>, Clinical Chemistry, and <span class='text-primary'>Immunology segments</span>. Vanguard is an undisputed leader in <span class='text-primary'>Immunology Diagnostics</span> & advance clinical <span class='text-primary'>Diagnostic Reagents</span> manufacturers list. We are equipped with a formidable development team and high production capacity. We have a state-of-the-art automated Hematology <span class='font-bold'>Diagnostic Reagents</span> plant, with an annual capacity of producing 1.5 Million Litres of <span class='font-bold'>Diagnostic Reagents</span> per year",
  },
  expandingHorizons: {
    title: "Expanding Horizons for Diagnostic Reagents Manufacturering",
    paragraphs: [
      "Vanguard Diagnostics has already doubled the area of its diagnostic reagents manufacturing facility during FY19 in order to meet the increasing production demand for production. Future plans are to build a dedicated area for molecular diagnostics products development and manufacturing. We have also obtained the license to manufacture critical products like HIV, HBsAg and HCV.",
      "We leverage the technical expertise of the team to come up with innovative and customised clinical reagent manufacturing solutions for our customers.",
      "We have introduced world's most stable and reliable Hematology Controls in India. This will enable all sizes of Indian labs to produce results comparable in reliability with International labs.",
      "We target to automate operations so that we could work with a small team of efficient people.",
    ],
    image: "/images/vanguard/manufacturing/7.jpg",
  },
  technology: {
    title:
      "Technology Adoption <span class='text-primary'>for Advanced Diagnostic Reagents Production</span>",
    bullets: [
      "Vanguard Diagnostics has adopted the Enzyme Linked Immuno Sorbent Assay (ELISA) technology, to develop and successfully launch a test for the detection of Dengue NS1 antigen.",
      "Vanguard Diagnostics is one of the few indigenous manufacturers of this clinic reagents test.",
      "This has facilitated a significant reduction in the cost of the test.",
      "Vanguard Diagnostics developed it's first sterile in the form of Viral Transport Medium.",
    ],
  },
  certifications: {
    title: "Our <span class='text-primary'>Certifications</span>",
    topIcon: "/images/vanguard/manufacturing/certification-icon-1.png",
    items: [
      {
        name: "13485:<span class='text-primary'>2016</span>",
        icon: "/images/vanguard/manufacturing/iso-icon-2.jpg",
      },
      {
        name: "9001:<span class='text-primary'>2015</span>",
        icon: "/images/vanguard/manufacturing/iso-icon-2.jpg",
      },
      {
        name: "14001:<span class='text-primary'>2015</span>",
        icon: "/images/vanguard/manufacturing/iso-icon-2.jpg",
      },
      { icon: "/images/vanguard/manufacturing/certification-icon-7.png" },
    ],
    banner: {
      image: "/images/vanguard/manufacturing/certification-1.png",
    },
  },
  process: {
    image: "/images/vanguard/manufacturing/manufacturing-img-2-2.jpg",
    tiles: [
      "Hematology Manufacturing",
      "Reagent Filtration System",
      "ELISA Microplate Coating",
      "Rapid Card Tests Coating",
    ],
  },
} as const;

export const qualityContent = {
  metadata: {
    title: "Quality | Vanguard Diagnostics",
    description:
      "At Vanguard Diagnostics, our Quality Management System ensures that every batch of our product passes through a rigorous quality check, before being released",
  },
  intro: {
    icon: "/images/vanguard/quality/quality-icon-1.png",
    title: "Quality",
    description:
      "At Vanguard Diagnostics, our Quality Management System ensures that every batch of our product passes through a rigorous quality check, before being released in the market.",
    image: "/images/vanguard/quality/quality-banner-2.jpg",
    checks: [
      "Every incoming RM & PM is tested against a standard testing procedure.",
      "Only those complying with laid down specifications are used in manufacturing.",
      "Bulk / in-process checks are carried out on every batch produced.",
      "Final performance evaluations are carried out on every batch produced.",
      "100% shop-floor checks.",
    ],
  },
  norms: {
    title: "We follow stringent quality norms, for consistency in performance",
    items: [
      "Stringent quality norms for incoming raw materials & packaging materials.",
      "Stringent in process and final performance checks before transferring stocks to approved finished goods stores for sale.",
      "File and control samples maintained till 3 months post expiry for all the batches produced.",
      "Accelerated stability studies conducted on all the batches.",
      "Real time stability studies conducted on all the batches.",
      "Post marketing surveillance conducted during the peak summer/rainy season.",
    ],
  },
  insights: [
    {
      title: "Accelerated stability",
      body: "studies at 37C/45C / high humidity to ascertain performance under stressful conditions",
      image: "/images/vanguard/quality/quality-footer-1.jpg",
    },
    {
      title: "Real time stability",
      body: "studies to ascertain performance under real field conditions.",
      image: "/images/vanguard/quality/quality-footer-2.jpg",
    },
    {
      title: "Post marketing",
      body: "surveillance to ascertain performance during stressful weather conditions.",
      image: "/images/vanguard/quality/quality-footer-3.jpg",
    },
  ] as QualityInsight[],
} as const;

export const careerContent = {
  metadata: {
    title: "Career | Vanguard Diagnostics",
    description:
      "Vanguard Diagnostics is a manufacturing and marketing organization based at New Delhi. Our niche lies in our talented and passionate team.",
  },
  hero: {
    image: "/images/vanguard/career/career-banner-1.webp",
    alt: "Join Our Mission — Career at Vanguard Diagnostics",
  },
  application: {
    p1: "<strong>Vanguard Diagnostics</strong><br />is a manufacturing and marketing organization based at New Delhi.<br />Our niche lies in our talented and passionate team.",
    p2: "We are seeking great people to join our company on its journey towards excellence.<br />To apply for an opportunity in Vanguard Diagnostics, fill in the Form and Submit.<br />We will revert to you within two weeks.",
    icon: "/images/vanguard/career/certification-icon-5.jpg",
    fields: [
      { label: "Name", type: "text", id: "name" },
      { label: "Email", type: "email", id: "email" },
      { label: "Phone", type: "tel", id: "phone" },
      { label: "Address", type: "text", id: "address" },
      { label: "City", type: "text", id: "city" },
      { label: "State", type: "text", id: "state" },
      { label: "Pin Code", type: "text", id: "pin-code" },
      { label: "Department", type: "text", id: "department" },
    ] as FormField[],
  },
  openings: {
    title: "Current Open Positions",
    items: [
      "Manager Finance & Accounts",
      "Zonal Manager Sales & Service for the Coagulation/ Hemostasis range",
      "Quality Executive",
      "Production Manager",
    ],
  },
} as const;

export const contactContent = {
  hero: {
    image: "/images/vanguard/contact/contact-banner-1.jpg",
    title: "Contact Us",
  },
  getInTouch: {
    icon: "/images/vanguard/contact/get-in-touch-icon-2.jpg",
    title: "Get In Touch",
    form: {
      nameLabel: "Your name",
      emailLabel: "Email",
      phoneLabel: "Phone",
      messageLabel: "Your Message",
      buttonText: "Send Message",
    },
  },
  addressSection: {
    icon: "/images/vanguard/contact/location-icon-2.jpg",
    title: "Postal Address",
    divider: "/images/vanguard/contact/hr-line-2.jpg",
    address: siteData.address,
    phone: siteData.phoneMobile,
    phoneLink: siteData.phoneMobileLink,
    email: siteData.email,
    emailLink: siteData.emailLink,
    mapUrl: siteData.mapUrl,
  },
} as const;

export const specificProductsContent = {
  hematologyReagents: {
    title: "Hematology Reagents | 100% Reliable | Vanguard",
    description:
      "Vanguard Diagnostics excels in diagnostics, offering precise and reliable Hematology Reagents for effective blood analysis and disorder detection.",
    intro: {
      title: "Hematology Reagents",
      icon: "/images/homepage/quality-icon-1.png",
      paragraphs: [
        'Vanguard Diagnostics is a renowned entity in the diagnostic sector, offering a wide selection of <strong class="font-semibold text-black">Hematology Reagents</strong> – a key component for any lab focusing on blood analysis and associated disorders. These reagents are used to determine conditions like anemia, leukemia, and infections; our reagents stand out due to their precision and reliability.',
        'Quality is paramount at Vanguard Diagnostics, which is why our <strong class="font-semibold text-black">Hematology Reagents</strong> are produced under strict quality control protocols. Meeting and often surpassing industry standards, they offer consistent results that <a href="/contact-us" class="text-primary hover:underline">healthcare providers</a> can rely on.',
        "Compatible with various Hematology Analyzers, our reagents provide flexibility to cater to the specific needs of labs of all sizes. Our dedication lies in aiding healthcare professionals in diagnosing and managing blood diseases accurately.",
        '<a href="/contact-us" class="text-primary hover:underline">Rely on Vanguard Diagnostics for</a> reagents that guarantee dependable performance and contribute to improved patient care.',
      ],
    },
    threePart: {
      title: "3 Part – Hematology Reagents",
      description:
        "3 Part Differential Reagents under Vanguard Brand/ OEM/ Third Party arrangements for leading models",
      image:
        "/images/vanguard/products-solutions/3-Part-Hematology-Reagents-2.png",
      items: [
        "Mindray 3 part analyzers",
        "Prokan 3 part analyzer",
        "Sysmex KX 21 pocH-100 i",
        "Urit 3 part analyzer",
        "Rayto 3 part analyzer",
        "Nihon Kohden 3 part analyzers",
        "Horiba ABX Micros 60",
        "Reagents for any other 3 PD analyzer",
      ],
    },
    fivePart: {
      title: "5 Part – Hematology Reagents",
      description:
        '5 Part differential reagents with Vanguard brand name, under license from <a href="http://www.diagon.com/en/home/" class="text-primary hover:underline">Diagon, Hungary</a>.',
      image:
        "/images/vanguard/products-solutions/5-Part-Hematology-Reagents-3.png",
      items: [
        { instrument: "Mindray", models: "Models : 5000/5150, 5300, 5800" },
        { instrument: "Sysmex", models: "Models : XS 800 i, XS 1000 i" },
      ],
    },
    ifus: [
      {
        label: "Diluent-A",
        href: "/pdfs/Diluent-A-IFU.pdf",
      },
      {
        label: "Diluent-G",
        href: "/pdfs/IFU-Diluent-G.pdf",
      },
      {
        label: "Diluent-M",
        href: "/pdfs/Diluent-M-IFU.pdf",
      },
      {
        label: "Diluent -NK",
        href: "/pdfs/Diluent-NK-IFU.pdf",
      },
      {
        label: "Diluent- P",
        href: "/pdfs/Diluent-P_IFU.pdf",
      },
      {
        label: "Diluent S",
        href: "/pdfs/Diluent-S-IFU.pdf",
      },
      {
        label: "Diluent-U",
        href: "/pdfs/Diluent-U_IFU.pdf",
      },
      {
        label: "Lyse A",
        href: "/pdfs/Lyse-A-IFU.pdf",
      },
      {
        label: "Lyse-G",
        href: "/pdfs/IFU-Lyse-G.pdf",
      },
      {
        label: "Lyse -M",
        href: "/pdfs/Lyse-M-IFU.pdf",
      },
      {
        label: "Lyse- NK",
        href: "/pdfs/Lyse-NK-IFU.pdf",
      },
      {
        label: "Lyse P",
        href: "/pdfs/Lyse-P_IFU.pdf",
      },
      {
        label: "Lyse S",
        href: "/pdfs/Lyse-S.pdf",
      },
      {
        label: "Rinse-M",
        href: "/pdfs/Rinse-M-IFU.pdf",
      },
      {
        label: "Cleaner",
        href: "/pdfs/IFU-Cleaner.pdf",
      },
      {
        label: "Cleaner A",
        href: "/pdfs/RinseCleaner-A-IFU.pdf",
      },
      {
        label: "Cleaner NK",
        href: "/pdfs/Cleaner-NK-IFU.pdf",
      },
      {
        label: "Cleaner P",
        href: "/pdfs/Cleaner-P_IFU.pdf",
      },
      {
        label: "Cleaner S",
        href: "/pdfs/Cleaner-S-IFU.pdf",
      },
      {
        label: "EZ Cleaner - M",
        href: "/pdfs/EZ-Cleaner-M-IFU.pdf",
      },
      {
        label: "Probe Cleaner",
        href: "/pdfs/IFU-Probe-Cleaner.pdf",
      },
      {
        label: "Probe Cleaner - M",
        href: "/pdfs/Probe-Cleaner-M-IFU.pdf",
      },
    ],
    technicalReports: [
      {
        label: "Hematology Reagents",
        href: "/pdfs/Technical-file-Compatable-Hematology-reagent-1.pdf",
      },
      {
        label: "3 Part Reagents",
        href: "/pdfs/FLORA-GREECE-3-PART-SKM_95825062410350.pdf",
      },
      {
        label: "3 Part Reagents",
        href: "/pdfs/VOILA-GREECE-3-PART-SKM_95825062712180.pdf",
      },
      {
        label: "5 Part Reagents",
        href: "/pdfs/FLORA-GREECE-5-PART-SKM_95825062410440.pdf",
      },
      {
        label: "5 Part Reagents",
        href: "/pdfs/VOILA-GREECE-5-Part-SKM_95825062712190.pdf",
      },
    ],
  },
  hematologyControls: {
    title: "Vanguard Diagnostics, with Diagon, leads Hematology Controls",
    description:
      "Vanguard Diagnostics, in partnership with Diagon, excels in quality control with precise 3-part and 5-part Hematology Controls for accurate blood counts",
    hero: {
      video:
        "/images/vanguard/products-solutions/vanguarddiagnostics-product-page-banner.mp4",
    },
    intro: {
      title: "Hematology Controls",
      icon: "/images/homepage/quality-icon-1.png",
      image:
        "/images/vanguard/hematology-controls-products-1.jpg",
      paragraphs: [
        'Vanguard Diagnostics, in partnership with Diagon of Hungary, offers exceptional 3-part and 5-part <strong class="text-[#222222] font-bold">Hematology Controls</strong>, positioning us as leaders in quality control. Diagon is one of only two manufacturers of <strong class="text-[#222222] font-bold">Hematology Controls</strong> globally. Our joint efforts have revolutionized the field with controls boasting unprecedented shelf lives and open vial stabilities. This advancement enables labs of all sizes in India to achieve highly reliable results comparable to international standards.',
        'Vanguard Diagnostics’ dedication to quality control in hematology is evident through our 3-part controls, now with an extended six-month shelf life, surpassing competitors’ three-month offering. Likewise, our 5-part controls offer a significant advantage with a four-month shelf life, compared to competitors’ two months. These achievements establish Vanguard Diagnostics as a reputable leader, delivering premium <strong class="text-[#222222] font-bold">Hematology Controls</strong> to clinical labs worldwide.',
        "Hematology, a branch of medicine concerned with the study of blood, its diseases, and the involved organs and tissues, demands precise and accurate results for optimal patient care. Central to achieving this precision in laboratories are hematology controls.",
      ],
    },
    ifus: [
      { label: "D Check D", href: "/pdfs/D-Check-D.pdf" },
      { label: "D check 5Diff", href: "/pdfs/D-check-5Diff.pdf" },
    ],
  },
  biochemistryReagents: {
    title: "Reliable Biochemistry Reagents | Vanguard Diagnostics",
    description:
      "Exceptional Quality & Accuracy: Vanguard Diagnostics' Biochemistry Reagents for Reliable Laboratory Diagnostic Results.",
  },
  immunologyDiagnosticTests: {
    title: "Immunology Diagnostic Tests | Vanguard Diagnostics",
    description:
      "Rapid Immunology Diagnostics Tests for Malaria, Dengue, Typhoid in the Antigen, Antibody & Combo Formats. Vanguard Diagnostics",
  },
  covid19: {
    title: "Leading COVID Test Kit Manufacturer | Vanguard Diagnostics",
    description:
      "Vanguard Diagnostics: Leading COVID Test Kit Manufacturer for healthcare providers. Explore our innovative solutions for comprehensive disease control.",
  },
  typhoidRtPcr: {
    title: "First Typhoid RT PCR Kit | VANSCAN | New Gold Standard",
    description:
      "Introducing VANSCAN Typhoid RT PCR Test kit, the first-ever patented technology-based Typhoid RT PCR kit by Vanguard Diagnostics.",
  },
} as const;
