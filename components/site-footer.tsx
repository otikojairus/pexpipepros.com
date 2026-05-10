import Link from "next/link";
import { PhoneLink } from "@/components/phone-link";
import { PAGE_TYPES, PEX_PAGES } from "@/lib/pex-data";
import { EMERGENCY_PHONE_DISPLAY, SITE_NAME } from "@/lib/seo";

export function SiteFooter() {
  const cityPages = PEX_PAGES.filter((page) => page.pageType === "City Service Page").slice(0, 10);

  return (
    <footer className="ppp-footer">
      <div className="ppp-container ppp-footer-grid">
        <div>
          <p className="ppp-footer-title">{SITE_NAME}</p>
          <p className="ppp-footer-copy">
            National and city-level guidance for Poly B replacement, Poly B to PEX conversion, and full-home repiping.
          </p>
          <PhoneLink className="ppp-footer-phone" location="footer" pageTier="global">
            {EMERGENCY_PHONE_DISPLAY}
          </PhoneLink>
        </div>

        <div>
          <h3 className="ppp-footer-title">Page Types</h3>
          <div className="ppp-footer-links">
            {PAGE_TYPES.map((type) => (
              <Link key={type} href="/services" className="ppp-footer-link">
                {type}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="ppp-footer-title">Top Locations</h3>
          <div className="ppp-footer-links ppp-location-grid">
            {cityPages.map((page) => (
              <Link key={page.slug} href="/services" className="ppp-footer-link">
                {page.targetArea.split(",")[0]?.trim() ?? page.targetArea}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="ppp-container ppp-footer-bottom">
        <span>© {new Date().getFullYear()} {SITE_NAME}</span>
        <Link href="/privacy-policy" className="ppp-footer-link">Privacy Policy</Link>
        <Link href="/terms-of-service" className="ppp-footer-link">Terms of Service</Link>
      </div>
    </footer>
  );
}
