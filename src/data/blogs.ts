export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  category: string;
  author: string;
  excerpt: string;
  link: string;
  image?: string;
}

export interface ArchiveEntry {
  label: string;
  link: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "understanding-4th-generation-hiv-tests",
    title: "Understanding 4th Generation HIV Tests: How They Work and Why They Matter",
    date: "2025-06-01",
    dateLabel: "June 2025",
    category: "Blogs",
    author: "admin",
    excerpt:
      "When it comes to HIV screening, early detection can significantly improve outcomes, limit transmission, and support timely care. That's why the 4th generation HIV test has become the standard in many diagnostic settings. Unlike older tests that only detect antibodies, this newer generation identifies both HIV antibodies and the p24 antigen, allowing detection in the earliest stages of infection.",
    link: "/blogs/understanding-4th-generation-hiv-tests",
    image: "/images/vanguard/blogs/ChatGPT-Image-Jun-30-2025-02_45_55-PM-300x200.png",
  },
  {
    slug: "handle-typhoid-threat",
    title: "Time to Tame Typhoid: Strategies to Handle Typhoid Threat",
    date: "2024-01-10",
    dateLabel: "January 2024",
    category: "Blogs",
    author: "admin",
    excerpt:
      "In a world where health is paramount, understanding and tackling threats to handle typhoid is essential towards a safer, healthier global community. Typhoid, caused by Salmonella typhi and paratyphi, poses a significant health risk, particularly in regions with limited access to clean water and sanitation. However, with advancements in medical science and diagnostics, the outlook is improving.",
    link: "/blogs/handle-typhoid-threat",
    image: "/images/vanguard/blogs/default_image.png",
  },
  {
    slug: "advancements-in-typhoid-detection",
    title: "Advancements in Typhoid Detection",
    date: "2023-10-05",
    dateLabel: "October 2023",
    category: "Blogs",
    author: "admin",
    excerpt:
      "Advancements in typhoid detection have significantly improved the accuracy, speed, and accessibility of diagnostic methods. These advancements are critical for early and accurate diagnosis, enabling timely treatment and control of typhoid outbreaks. Notable advances include Molecular Diagnostics (PCR), next-generation rapid tests, and AI-assisted interpretation of results.",
    link: "/blogs/advancements-in-typhoid-detection",
    image: "/images/vanguard/blogs/default_image.png",
  },
  {
    slug: "3-part-and-5-part-hematology-controls",
    title: "What are 3-Part and 5-Part Hematology Controls",
    date: "2023-06-15",
    dateLabel: "June 2023",
    category: "Blogs",
    author: "admin",
    excerpt:
      "Hematology controls play a crucial role in ensuring the accuracy and precision of blood cell counting instruments. The terms '3-part' and '5-part' refer to the number of white blood cell differentials that are monitored by these controls. Understanding the difference helps labs select the right quality control material for their analyzers.",
    link: "/blogs/3-part-and-5-part-hematology-controls",
    image: "/images/vanguard/blogs/default_image.png",
  },
  {
    slug: "human-serum-calibrators",
    title: "Human Serum Calibrators vs Simple Standards: Unveiling the Distinction",
    date: "2023-06-01",
    dateLabel: "June 2023",
    category: "Blogs",
    author: "admin",
    excerpt:
      "In the intricate landscape of diagnostic testing, precision and accuracy are paramount. A crucial factor influencing the reliability of diagnostic assays is the calibration process. Among the calibration materials used, human serum calibrators stand out for their biological similarity to patient samples, offering superior performance compared to simple synthetic standards.",
    link: "/blogs/human-serum-calibrators",
    image: "/images/vanguard/blogs/default_image.png",
  },
  {
    slug: "reagents-in-molecular-diagnostics",
    title: "Biochemistry Reagents in Molecular Diagnostics",
    date: "2023-06-01",
    dateLabel: "June 2023",
    category: "Blogs",
    author: "admin",
    excerpt:
      "Reagents in molecular diagnostics play a crucial role in various laboratory experiments and analysis. They are substances or compounds used to detect, measure, or produce other substances in biological reactions. Key examples include DNA Polymerase, restriction enzymes, hybridization probes, and fluorescent dyes used in PCR and sequencing workflows.",
    link: "/blogs/reagents-in-molecular-diagnostics",
    image: "/images/vanguard/blogs/Biochemistry-Reagents-Molecular-Diagnostics-still-300x300.jpg",
  },
  {
    slug: "diagnostic-challenges-of-typhoid-fever",
    title: "Diagnostic Challenges of Typhoid Fever",
    date: "2023-06-01",
    dateLabel: "June 2023",
    category: "Blogs",
    author: "admin",
    excerpt:
      "Typhoid fever, caused by the bacterium Salmonella typhi, has been a persistent global health challenge for centuries. Despite advances in medical science, this infectious disease continues to pose diagnostic challenges that hinder timely treatment and prevention of its spread. Key hurdles include limited lab infrastructure, cross-reactivity of serological tests, and delayed culture results.",
    link: "/blogs/diagnostic-challenges-of-typhoid-fever",
    image: "/images/vanguard/blogs/default_image.png",
  },
  {
    slug: "automated-hematology-analyzer",
    title: "Automated Hematology Analyzer",
    date: "2023-06-01",
    dateLabel: "June 2023",
    category: "Blogs",
    author: "admin",
    excerpt:
      "Automated Hematology Analyzers, also known as hematology cell counters, are sophisticated laboratory instruments that play a vital role in diagnosing and monitoring various blood-related disorders. These automated machines have transformed the field of hematology by providing accurate complete blood count (CBC) results rapidly, reducing manual errors and improving diagnostic throughput.",
    link: "/blogs/automated-hematology-analyzer",
    image: "/images/vanguard/blogs/Hematology-Analyzers-300x300.webp",
  },
  {
    slug: "Automated Hematology Analyser",
    title: "Automated Hematology Analyser",
    date: "2023-06-01",
    dateLabel: "June 2023",
    category: "Blogs",
    author: "admin",
    excerpt: "Automated Hematology Analyzers, also known as hematology cell counters, are sophisticated laboratory instruments that play a vital role in diagnosing and monitoring various blood-related disorders. These automated machines have transformed the field of hematology by providing accurate complete blood count (CBC) results rapidly, reducing manual errors and improving diagnostic throughput.",
    link: "/blogs/automated-hematology-analyser",
    image: "/images/vanguard/blogs/default_image.png",
  }
];

export const recentPosts: { title: string; link: string }[] = blogPosts
  .slice(0, 5)
  .map((p) => ({ title: p.title, link: p.link }));

export const archives: ArchiveEntry[] = [
  { label: "June 2025", link: "#" },
  { label: "January 2024", link: "#" },
  { label: "October 2023", link: "#" },
  { label: "June 2023", link: "#" },
];

export const categories: { label: string; link: string }[] = [
  { label: "Blogs", link: "/blogs" },
];

