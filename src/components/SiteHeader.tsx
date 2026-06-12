import { useEffect, useState } from "react";

const navLinks = [
  { text: "Home", href: "/", internal: true },
  { text: "About Us", href: "/about-us", internal: true },
  {
    text: "Products & Solutions",
    href: "/products-solutions",
    internal: true,
    submenu: [
      {
        text: "Products & Solutions",
        href: "/products-solutions",
        internal: true,
      },
      {
        text: "Hematology Reagents",
        href: "/products-solutions/hematology-reagents",
        internal: true,
      },
      {
        text: "Hematology Controls",
        href: "/products-solutions/hematology-controls",
        internal: true,
      },
      {
        text: "Biochemistry Reagents",
        href: "/products-solutions/biochemistry-reagents",
        internal: true,
      },
      {
        text: "Immunology Diagnostic Tests",
        href: "/products-solutions/immunology-diagnostic-tests",
        internal: true,
      },
      {
        text: "Covid-19",
        href: "/products-solutions/covid-19",
        internal: true,
      },
      {
        text: "Training",
        href: "/products-solutions/training",
        internal: true,
      },
      {
        text: "Typhoid RT PCR",
        href: "/products-solutions/typhoid-rt-pcr",
        internal: true,
      },
    ],
  },
  {
    text: "Manufacturing",
    href: "/diagnostic-reagents-manufacturers",
    internal: true,
  },
  { text: "Quality", href: "/quality", internal: true },
  {
    text: "News & Webinars",
    href: "/news",
    internal: true,
    submenu: [
      {
        text: "News & Webinars",
        href: "/news",
        internal: true,
      },
      {
        text: "Webinars",
        href: "/news#webinars",
        internal: true,
      },
      {
        text: "News",
        href: "/news#news",
        internal: true,
      },
      {
        text: "Blogs & Resources",
        href: "/blogs",
        internal: true,
      },
    ],
  },
  { text: "Career", href: "/career", internal: true },
  { text: "Contact Us", href: "/contact-us", internal: true },
];

export default function SiteHeader() {
  const [pathname, setPathname] = useState("/");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // Tracks which mobile accordion submenu is expanded
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // ── Scroll-lock when mobile drawer is open ──
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Reset accordion when drawer closes
      setMobileAccordion(null);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close desktop dropdown on outside click
  useEffect(() => {
    if (!openDropdown) return;
    function handleOutsideClick(e: MouseEvent) {
      const target = e.target as Element;
      if (!target.closest("[data-dropdown]")) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [openDropdown]);

  function toggleDropdown(key: string) {
    setOpenDropdown((prev) => (prev === key ? null : key));
  }

  function toggleMobileAccordion(key: string) {
    setMobileAccordion((prev) => (prev === key ? null : key));
  }

  return (
    <header className="bg-white">
      <div className="border-b border-border">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-4 py-4 md:px-6">
          <a href="/">
            <img
              alt="Vanguard Diagnostics"
              className="max-h-8 w-auto lg:max-h-12"
              src="/images/vanguard/logo.png"
            />
          </a>

          {/* ── Desktop nav ── */}
          <nav className="hidden items-center gap-5 lg:flex">
            {navLinks.map((link) => {
              if (link.submenu) {
                const isActive = link.internal
                  ? link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href ||
                      pathname.startsWith(link.href + "/")
                  : false;

                const isOpen = openDropdown === link.text;

                return (
                  <div
                    className="group relative"
                    key={link.text}
                    data-dropdown=""
                  >
                    <button
                      className={`flex items-center gap-1 py-2 text-[15px] font-normal transition-colors whitespace-nowrap ${isActive ? "text-primary" : "text-black hover:text-primary"}`}
                      onClick={() => toggleDropdown(link.text)}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      type="button"
                    >
                      {link.text}
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : "group-hover:rotate-180"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19 9l-7 7-7-7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        />
                      </svg>
                    </button>
                    <div
                      className={`absolute left-0 top-full z-50 min-w-[200px] bg-white p-2 shadow-lg transition-all duration-150 ${
                        isOpen
                          ? "visible translate-y-0 opacity-100"
                          : "invisible translate-y-2 opacity-0 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
                      }`}
                    >
                      {link.submenu.map((sub) =>
                        sub.internal ? (
                          <a
                            className="block px-4 py-2 text-[15px] font-normal text-black hover:bg-[#f3f5f6] hover:text-primary"
                            href={sub.href}
                            key={sub.text}
                            onClick={() => setOpenDropdown(null)}
                          >
                            {sub.text}
                          </a>
                        ) : (
                          <a
                            className="block px-4 py-2 text-[15px] font-normal text-black hover:bg-[#f3f5f6] hover:text-primary"
                            href={sub.href}
                            key={sub.text}
                            rel="noopener noreferrer"
                            target="_blank"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {sub.text}
                          </a>
                        ),
                      )}
                    </div>
                  </div>
                );
              }

              const isActive = link.internal
                ? link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(link.href + "/")
                : false;

              if (link.internal) {
                return (
                  <a
                    className={`text-[15px] font-normal whitespace-nowrap ${isActive ? "text-primary" : "text-black hover:text-primary"}`}
                    href={link.href}
                    key={link.text}
                  >
                    {link.text}
                  </a>
                );
              }

              return (
                <a
                  className="text-[15px] font-normal text-black hover:text-primary whitespace-nowrap"
                  href={link.href}
                  key={link.text}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.text}
                </a>
              );
            })}
          </nav>

          {/* ── Hamburger (mobile) ── */}
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex flex-col items-center justify-center gap-1.5 p-2 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            type="button"
          >
            <span
              className={`block h-0.5 w-6 bg-foreground transition-transform duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-transform duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile nav drawer (fixed full-screen overlay, scroll-locked) ── */}
      {mobileOpen && (
        <nav
          className="fixed inset-0 top-[65px] z-40 overflow-y-auto bg-white lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="w-full divide-y divide-border px-4 pb-8 pt-2">
            {navLinks.map((link) => {
              const accordionOpen = mobileAccordion === link.text;

              return (
                <li key={link.text}>
                  {link.submenu ? (
                    /* ── Item with submenu: accordion toggle ── */
                    <>
                      <button
                        className="flex w-full items-center justify-between py-3.5 text-[15px] font-medium text-foreground"
                        onClick={() => toggleMobileAccordion(link.text)}
                        aria-expanded={accordionOpen}
                        type="button"
                      >
                        <span>{link.text}</span>
                        <svg
                          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${accordionOpen ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 9l-7 7-7-7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                          />
                        </svg>
                      </button>
                      {/* Submenu: smooth accordion reveal */}
                      <ul
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          accordionOpen
                            ? "max-h-[500px] opacity-100 pb-2"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {link.submenu.map((sub) => (
                          <li key={sub.text}>
                            <a
                              className="flex items-center gap-2 py-2.5 pl-4 text-[14px] text-muted-foreground hover:text-primary"
                              href={sub.href}
                              {...(!sub.internal
                                ? {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                  }
                                : {})}
                              onClick={() => setMobileOpen(false)}
                            >
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                              {sub.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    /* ── Regular nav link ── */
                    <a
                      className="block py-3.5 text-[15px] font-medium text-foreground hover:text-primary"
                      href={link.href}
                      {...(!link.internal
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.text}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
