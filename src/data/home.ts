import { images } from "./images";

export const navLinks = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about-us" },
  {
    text: "Products & Solutions",
    href: "/products-solutions",
  },
  {
    text: "Manufacturing",
    href: "/diagnostic-reagents-manufacturers",
  },
  { text: "Quality", href: "/quality" },
  { text: "News & Webinars", href: "#" },
  {
    text: "Blogs & Resources",
    href: "#",
  },
  { text: "Career", href: "/career" },
  { text: "Contact Us", href: "/contact-us" },
];

export const quickLinks = [
  {
    label: "Our Vision",
    href: "#Vision",
    icon: images.navIcons.mission,
  },
  {
    label: "Our Mission",
    href: "#Mission",
    icon: images.navIcons.vision,
  },
  {
    label: "Our Team",
    href: "#Team",
    icon: images.navIcons.team,
  },
  {
    label: "Our Milestones",
    href: "#Milestones",
    icon: images.navIcons.milestone,
  },
  {
    label: "Awards & Accreditations",
    href: "#Awards",
    icon: images.navIcons.awards,
  },
  {
    label: "Picture Book",
    href: "#PictureBook",
    icon: images.navIcons.pictureBook,
  },
];

export const milestoneTimeline = [
  {
    date: "2015 Jul",
    title: "Vanguard Diagnostics Foundation Day",
    image: images.milestones.foundation2015,
  },
  {
    date: "2016 Sep",
    title: "Tie up with Diagon-Hungary",
    image: images.milestones.diagon2016,
  },
  {
    date: "2017 Feb",
    title: "First presence at MedLab, Dubai",
    image: images.milestones.medlab2017,
  },
  {
    date: "2018 Mar",
    title: "Best IVD Manufacturing Company - Medgate Today",
    image: images.milestones.bestIvd2018,
  },
  {
    date: "2018 May",
    title:
      "CEO featured in top 500 leaders in Asia - PricewaterhouseCoopers survey",
    image: images.milestones.pwc2018,
  },
  {
    date: "2018 Jun",
    title: "ET Now featured top under 5 crore Emerging SME, Building India",
    image: images.milestones.etnow2018,
  },
  {
    date: "2019 Nov",
    title: "Best Entrepreneur Award 2019",
    image: images.milestones.entrepreneur2019,
  },
  {
    date: "2020 Jan",
    title: "FICCI Healthcare Excellence Award 2020",
    image: images.milestones.ficci2020,
  },
  {
    date: "2020 Apr",
    title: "ICMR Validated & Approved COVID-19 Kits",
    image: images.milestones.icmr2020,
  },
  {
    date: "2020 Aug",
    title: "BIRAC COVID-19 Research Grant",
    image: images.milestones.birac2020,
  },
  {
    date: "2020 Dec",
    title: "Collaboration with DRDO for specialized diagnostics",
    image: images.milestones.drdo2020,
  },
  {
    date: "2021 May",
    title: "Diagon-Vanguard 5th Anniversary",
    image: images.milestones.diagonVanguard2021,
  },
];

export const milestones = milestoneTimeline.map((m) => m.image);

export const awards = images.awards;

export const pictureBook = images.pictureBook;
