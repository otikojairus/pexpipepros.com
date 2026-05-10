"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PhoneLink } from "@/components/phone-link";
import { SiteLogo } from "@/components/site-logo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/#priority", label: "Priority" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteNavbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const className = "ppp-scroll-lock";
    document.documentElement.classList.toggle(className, isDrawerOpen);
    document.body.classList.toggle(className, isDrawerOpen);

    return () => {
      document.documentElement.classList.remove(className);
      document.body.classList.remove(className);
    };
  }, [isDrawerOpen]);

  return (
    <>
      <header className="ppp-navbar">
        <div className="ppp-container ppp-navbar-row">
          <SiteLogo />
          <nav className="ppp-nav-links" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="ppp-nav-link">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="ppp-nav-call">
            <PhoneLink className="ppp-btn ppp-btn-outline" location="navbar" pageTier="global">
              Call Now
            </PhoneLink>
          </div>
          <button
            type="button"
            className="ppp-menu-btn"
            aria-label="Open navigation menu"
            aria-expanded={isDrawerOpen}
            onClick={() => setIsDrawerOpen((open) => !open)}
          >
            Menu
          </button>
        </div>
      </header>

      <div className={`ppp-drawer ${isDrawerOpen ? "is-open" : ""}`} aria-hidden={!isDrawerOpen}>
        <button type="button" className="ppp-drawer-scrim" aria-label="Close menu" onClick={() => setIsDrawerOpen(false)} />
        <div className="ppp-drawer-panel">
          <div className="ppp-drawer-head">
            <SiteLogo />
            <button type="button" className="ppp-close-btn" aria-label="Close menu" onClick={() => setIsDrawerOpen(false)}>
              Close
            </button>
          </div>
          <nav className="ppp-mobile-nav" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="ppp-mobile-link" onClick={() => setIsDrawerOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>
          <PhoneLink className="ppp-btn ppp-btn-solid" location="mobile-drawer" pageTier="global">
            Call 1-888-702-2090
          </PhoneLink>
        </div>
      </div>
    </>
  );
}
