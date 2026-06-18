export interface WebinarItem {
  date: string;
  title: string;
  link: string;
  /** YouTube video ID – used to build thumbnail; undefined for Drive/other links */
  youtubeId?: string;
}

export interface NewsItem {
  date: string;
  publication: string;
  link: string;
  /** Name of the logo image stored in /images/news/ */
  logo: string;
}

export const webinars: WebinarItem[] = [
  {
    date: "March 2024",
    title: "Advancing Diagnostics – Evolution in Hematopathology: Webinar Series Ep.1",
    link: "https://www.youtube.com/watch?v=-8pVVGXxmlQ",
    youtubeId: "-8pVVGXxmlQ",
  },
  {
    date: "Feb 2023",
    title: "Leading the Way in Medical Science",
    link: "https://www.youtube.com/watch?v=jGqsdN1kcXc",
    youtubeId: "jGqsdN1kcXc",
  },
  {
    date: "July 2023",
    title: "Time to Tame Typhoid: Webinar Series Ep.1",
    link: "https://www.youtube.com/watch?v=I4DB6yb4yEI",
    youtubeId: "I4DB6yb4yEI",
  },
  {
    date: "August 2023",
    title: "Time to Tame Typhoid: Webinar Series Ep.2",
    link: "https://www.youtube.com/watch?v=Is4gfXqSnoY",
    youtubeId: "Is4gfXqSnoY",
  },
  {
    date: "October 2023",
    title: "Time to Tame Typhoid: Webinar Series Ep.3",
    link: "https://www.youtube.com/watch?v=DiPWMMgqKJk",
    youtubeId: "DiPWMMgqKJk",
  },
  {
    date: "Mar 2021",
    title: "Global Bio-India 2021",
    link: "https://drive.google.com/file/d/1J1Nkb45pV32BdqEQzOaPBbU2dp6YesIy/view",
  },
  {
    date: "Feb 2021",
    title: "BBB Webinar",
    link: "https://drive.google.com/file/d/1URrahB2mMWea1vQWZFOBEvu-UdOVjw1m/view?ts=603cc953",
  },
  {
    date: "Dec 2020",
    title: "IMDI Conference, IVD Webinar – Innovation and Indigenization Stick",
    link: "https://youtu.be/l8TYcyC5cos",
    youtubeId: "l8TYcyC5cos",
  },
  {
    date: "Nov 2020",
    title: "Medgate Today Coffee Table Book",
    link: "https://www.youtube.com/watch?v=ylNnUMw_aas",
    youtubeId: "ylNnUMw_aas",
  },
  {
    date: "Nov 2020",
    title: "FICCI Inaugural Session",
    link: "https://youtu.be/1veXFku8vak",
    youtubeId: "1veXFku8vak",
  },
  {
    date: "Nov 2020",
    title: "FICCI – Global Healthcare and Hygiene Expo",
    link: "https://www.youtube.com/watch?v=pWmMMnuLmog",
    youtubeId: "pWmMMnuLmog",
  },
  {
    date: "Sep 2020",
    title: "World Health E-expo Day 1",
    link: "https://www.youtube.com/watch?v=i2MPhNrzRh4",
    youtubeId: "i2MPhNrzRh4",
  },
  {
    date: "Sep 2020",
    title: "World Health E-expo Day 2",
    link: "https://www.youtube.com/watch?v=A9AyZfRMaFM",
    youtubeId: "A9AyZfRMaFM",
  },
];

export const newsItems: NewsItem[] = [
  {
    date: "May 2021",
    publication: "Press Information Bureau",
    link: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1720604",
    logo: "Press-Bureau-of-India.webp",
  },
  {
    date: "May 2021",
    publication: "Defense Institute Of Physiology & Allied Science",
    link: "https://youtu.be/sQePJgEQXQ0",
    logo: "DIPAS.webp",
  },
  {
    date: "May 2021",
    publication: "Zee News",
    link: "https://zeenews.india.com/hindi/india/drdo-develops-dipcovan-antibody-detection-kit/904839",
    logo: "Zee-News.webp",
  },
  {
    date: "May 2021",
    publication: "Forbes India",
    link: "/pdfs/forbes-news.pdf",
    logo: "Forbes-India-300x126.webp",
  },
  {
    date: "Apr 2021",
    publication: "Medgate Today",
    link: "https://medgatetoday.com/previous-issues/",
    logo: "Medgate-today.webp",
  },
  {
    date: "Mar 2021",
    publication: "Biospectrum News",
    link: "https://www.biospectrumindia.com/news/66/15010/admi-announces-new-leadership-team.html",
    logo: "BioSpectrum.webp",
  },
  {
    date: "Mar 2021",
    publication: "Voice of Healthcare",
    link: "https://voiceofhealthcare.org/idealleader.php?id=1140",
    logo: "VOTT.webp",
  },
  {
    date: "Sep 2020",
    publication: "Asian Healthcare & Hospital Management",
    link: "https://www.asianhhm.com/pressreleases/medical-device-innovation-summit-india-is-poised-to-be-manufacturing-hub",
    logo: "Asian-Hospital-Healthcare.webp",
  },
  {
    date: "Sep 2020",
    publication: "Medisource Asia",
    link: "http://www.medisourceasia.com/industrynews/2020/in09-20/in09_2020_8.htm",
    logo: "medisourceasia.webp",
  },
  {
    date: "Sep 2020",
    publication: "Pharmabiz.com",
    link: "http://www.pharmabiz.com/PrintArticle.aspx?aid=130880&sid=2",
    logo: "Pharmabiz.webp",
  },
  {
    date: "Sep 2020",
    publication: "Express Healthcare",
    link: "https://www.expresshealthcare.in/news/medical-device-innovation-summit-india-is-poised-to-be-a-manufacturing-hub-for-medical-equipments-and-devices/424532/",
    logo: "Express-Healthcare.webp",
  },
  {
    date: "Sep 2020",
    publication: "Assocham",
    link: "https://www.assocham.org/newsdetail.php?id=7392",
    logo: "ASSOCHAM.webp",
  },
  {
    date: "May 2020",
    publication: "The Print",
    link: "https://theprint.in/health/private-indian-firms-who-got-govt-approval-to-make-antibody-tests-hit-a-hurdle-the-govt/422647/",
    logo: "The-Print.webp",
  },
  {
    date: "Apr 2020",
    publication: "Forbes India",
    link: "https://www.forbes.com/sites/anuraghunathan/2020/04/16/india-ramps-up-coronavirus-testing-approves-slew-of-local-and-foreign-makers/",
    logo: "Forbes.webp",
  },
  {
    date: "Apr 2020",
    publication: "Indian Express",
    link: "https://indianexpress.com/article/business/economy/lack-of-crucial-components-delay-in-overseas-regulatory-nods-hinder-progress-on-testing-kits-6359756/",
    logo: "The-Indian-Express.webp",
  },
  {
    date: "Apr 2020",
    publication: "Hindustan Times",
    link: "https://www.hindustantimes.com/india-news/two-firms-begin-production-of-antibody-rapid-test-kits-in-india/story-zSj1RKKKFKwKAKTl7VlifJ.html",
    logo: "Hindustantimes-300x126.webp",
  },
  {
    date: "Feb 2018",
    publication: "Pharmabiz.com",
    link: "http://www.pharmabiz.com/NewsDetails.aspx?aid=107310&sid=1",
    logo: "Pharmabiz (1).webp",
  },
  {
    date: "2018",
    publication: "Dun & Bradstreet",
    link: "https://www.dnb.co.in/events/sme-awards/Publications/2018.pdf",
    logo: "dun-and-bradstreet.webp",
  },
];
