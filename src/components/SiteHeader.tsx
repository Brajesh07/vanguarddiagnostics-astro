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

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

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
          <nav className="hidden items-center gap-5 lg:flex">
            {navLinks.map((link) => {
              if (link.submenu) {
                const isActive = link.internal
                  ? link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href ||
                      pathname.startsWith(link.href + "/")
                  : false;

                return (
                  <div className="group relative" key={link.text}>
                    {link.internal ? (
                      <a
                        className={`flex items-center gap-1 py-2 text-[15px] font-normal transition-colors whitespace-nowrap ${isActive ? "text-primary" : "text-black hover:text-primary"}`}
                        href={link.href}
                      >
                        {link.text}
                        <svg
                          className="h-4 w-4 transition-transform group-hover:rotate-180"
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
                      </a>
                    ) : (
                      <button className="flex items-center gap-1 py-2 text-[15px] font-normal text-black hover:text-primary whitespace-nowrap">
                        {link.text}
                        <svg
                          className="h-4 w-4 transition-transform group-hover:rotate-180"
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
                    )}
                    <div className="invisible absolute left-0 top-full z-50 min-w-[200px] translate-y-2 bg-white p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {link.submenu.map((sub) => {
                        if (sub.internal) {
                          return (
                            <a
                              className="block px-4 py-2 text-[15px] font-normal text-black hover:bg-[#f3f5f6] hover:text-primary"
                              href={sub.href}
                              key={sub.text}
                            >
                              {sub.text}
                            </a>
                          );
                        }
                        return (
                          <a
                            className="block px-4 py-2 text-[15px] font-normal text-black hover:bg-[#f3f5f6] hover:text-primary"
                            href={sub.href}
                            key={sub.text}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {sub.text}
                          </a>
                        );
                      })}
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
            className="flex flex-col items-center justify-center gap-1.5 p-1 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-6 bg-foreground transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile nav drawer ── */}
      {mobileOpen && (
        <nav className="border-b border-border bg-white lg:hidden">
          <ul className="mx-auto w-full max-w-[1200px] px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.text}>
                {link.internal ? (
                  <a
                    className="block py-2.5 text-[15px] text-foreground hover:text-primary"
                    href={link.href}
                  >
                    {link.text}
                  </a>
                ) : (
                  <a
                    className="block py-2.5 text-[15px] text-foreground hover:text-primary"
                    href={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link.text}
                  </a>
                )}
                {link.submenu && (
                  <ul className="ml-4 border-l border-border pb-1">
                    {link.submenu.map((sub) =>
                      sub.internal ? (
                        <li key={sub.text}>
                          <a
                            className="block py-2 text-[14px] text-muted-foreground hover:text-primary"
                            href={sub.href}
                          >
                            {sub.text}
                          </a>
                        </li>
                      ) : (
                        <li key={sub.text}>
                          <a
                            className="block py-2 text-[14px] text-muted-foreground hover:text-primary"
                            href={sub.href}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {sub.text}
                          </a>
                        </li>
                      ),
                    )}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
