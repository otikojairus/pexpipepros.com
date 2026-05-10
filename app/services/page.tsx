import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PhoneLink } from "@/components/phone-link";
import { PAGE_TYPES, PEX_PAGES, getPagesByType } from "@/lib/pex-data";
import { EMERGENCY_PHONE_DISPLAY, SITE_NAME, absoluteUrl } from "@/lib/seo";

const CALL_PREP = [
  "Your city and postal code.",
  "Any current leaks, pressure drops, or recent pipe failures.",
  "Whether the home is occupied and if shutoff windows are limited.",
  "Preferred timing for inspection and installation planning.",
] as const;

const SERVICE_EXPECTATIONS = [
  {
    title: "Inspection First",
    body: "Every project starts with a clear view of pipe condition, access points, and fixture layout so replacement scope is accurate before work is booked.",
  },
  {
    title: "Scope Transparency",
    body: "You should receive a clear explanation of what is included: repipe work areas, shutoff timing, testing standards, and expected restoration steps.",
  },
  {
    title: "Scheduling Clarity",
    body: "Good planning includes realistic start dates, disruption windows, and a straightforward path from active work to finished restoration.",
  },
] as const;

const SERVICES_FAQS = [
  {
    question: "How do I choose the right poly b replacement city page for my property?",
    answer:
      "Start with your city or province listing, then choose the page that matches your service need. If you are unsure, call and describe your symptoms so intake can route you correctly.",
  },
  {
    question: "Are service pages useful if I am still comparing repair versus full repipe?",
    answer:
      "Yes. The service pages are designed to help you compare options, understand likely scope drivers, and prepare the details needed for an accurate inspection recommendation.",
  },
  {
    question: "Can I call first even before choosing a location page?",
    answer:
      "Absolutely. Phone intake can help identify the best local page and the fastest next step based on your area, urgency, and current plumbing symptoms.",
  },
] as const;

function getUniqueLocationsForType(pageType: string) {
  const pages = getPagesByType(pageType);
  const seen = new Set<string>();
  return pages.filter((page) => {
    const location = page.targetArea === "Canada (National)" ? "Canada" : page.targetArea;
    if (seen.has(location)) {
      return false;
    }
    seen.add(location);
    return true;
  });
}

export const metadata: Metadata = {
  title: "poly b replacement Canada local service | Pex Pipe Pros",
  description:
    "poly b replacement Canada service locations help you compare city pages, pricing context, and scheduling pathways. Call 1-888-702-2090 to route your inspection.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: `poly b replacement Canada local service | ${SITE_NAME}`,
    description:
      "poly b replacement Canada: licensed repipe planning, clear pricing factors, and dependable local scheduling support. Call 1-888-702-2090 today.",
    url: absoluteUrl("/services"),
    type: "website",
    siteName: SITE_NAME,
  },
};

export default function ServicesPage() {
  const nationalGuides = PEX_PAGES.filter((page) => page.targetArea === "Canada (National)");
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SERVICES_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="ppp-main">
      <JsonLd data={[breadcrumbSchema, faqSchema]} />

      <section className="ppp-index-hero">
        <div className="ppp-container ppp-hero-centered">
          <div className="ppp-hero-max">
            <p className="ppp-eyebrow">Service Locations</p>
            <h1 className="ppp-display">Poly B Replacement Canada services by city, province, and project type.</h1>
            <p className="ppp-lead">
              Use this directory to find the most relevant service page for your property and timeline. Whether you are dealing with an active leak,
              early warning signs, or proactive replacement planning, each section helps you move from uncertainty to a practical next step. You can
              review local options, compare project pathways, and call for direct intake support to secure an inspection schedule that fits your area.
              If you are balancing urgency with budget planning, this page gives you a fast way to prioritize the right location and service track.
            </p>
            <div className="ppp-actions">
              <PhoneLink className="ppp-btn ppp-btn-solid" location="services-hero" pageTier="services">
                Call {EMERGENCY_PHONE_DISPLAY}
              </PhoneLink>
            </div>
          </div>
        </div>
      </section>

      <section className="ppp-section">
        <div className="ppp-container ppp-breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Services</span>
        </div>
      </section>

      <section className="ppp-section">
        <div className="ppp-container ppp-index-stack">
          {PAGE_TYPES.map((pageType) => {
            const items = getUniqueLocationsForType(pageType);
            return (
              <article key={pageType} className="ppp-index-row">
                <header>
                  <p className="ppp-eyebrow">Choose Your Location</p>
                  <h2>{pageType}</h2>
                </header>

                <div className="ppp-index-links ppp-location-grid">
                  {items.map((page) => (
                    <Link key={page.slug} href={`/${page.slug}`}>{page.primaryKeyword}</Link>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="ppp-section">
        <div className="ppp-container ppp-related-wrap">
          <div>
            <p className="ppp-eyebrow">National Guides</p>
            <h2 className="ppp-title">Compare Canada-wide service and education pages.</h2>
          </div>
          <div className="ppp-related-links ppp-location-grid">
            {nationalGuides.map((page) => (
              <Link key={page.slug} href={`/${page.slug}`}>
                {page.primaryKeyword}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ppp-section">
        <div className="ppp-container">
          <div className="ppp-heading-row">
            <div>
              <p className="ppp-eyebrow">Before You Call</p>
              <h2 className="ppp-title">A short prep list helps speed up scheduling.</h2>
            </div>
            <p className="ppp-copy">
              Having a few details ready allows your call to move quickly from intake to the right local service recommendation.
            </p>
          </div>
          <ul className="ppp-bullets ppp-bullets-panel">
            {CALL_PREP.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ppp-section">
        <div className="ppp-container ppp-edu-grid">
          {SERVICE_EXPECTATIONS.map((item) => (
            <article key={item.title} className="ppp-edu-card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ppp-section">
        <div className="ppp-container ppp-faq-shell">
          <header>
            <p className="ppp-eyebrow">FAQs</p>
            <h2 className="ppp-title">Questions about choosing the right service location.</h2>
          </header>
          <div className="ppp-faq-grid">
            {SERVICES_FAQS.map((faq) => (
              <article key={faq.question} className="ppp-faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ppp-section">
        <div className="ppp-container ppp-cta-panel">
          <h2>Need a quick recommendation for your property?</h2>
          <p>Tell us your location and what you are seeing, and we will guide you to the right service path.</p>
          <PhoneLink className="ppp-btn ppp-btn-solid" location="services-bottom" pageTier="services">
            Call {EMERGENCY_PHONE_DISPLAY}
          </PhoneLink>
        </div>
      </section>
    </main>
  );
}
