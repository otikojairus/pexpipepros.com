import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PhoneLink } from "@/components/phone-link";
import { PAGE_TYPES, getTopPriorityPages } from "@/lib/pex-data";
import { EMERGENCY_PHONE_DISPLAY, EMERGENCY_PHONE_E164, SITE_NAME, absoluteUrl } from "@/lib/seo";

const INTRO_POINTS = [
  "Identify whether the property still has Poly B lines and where they run.",
  "Scope a staged or full repipe plan with transparent shutdown windows.",
  "Replace vulnerable runs with PEX and map restoration before work starts.",
] as const;

const READINESS_BLOCKS = [
  {
    title: "Signs Replacement Should Not Wait",
    body: "Recurring pinhole leaks, brittle fitting points, pressure swings, and previous patchwork repairs are common signals that spot fixes may no longer be the safest plan.",
  },
  {
    title: "What To Gather Before Calling",
    body: "Have your property address, home age, known leak history, and any photos of exposed piping ready. This helps route your call and speed up inspection booking.",
  },
  {
    title: "How Scheduling Usually Works",
    body: "Most homes begin with an inspection visit, then move to a written scope and a scheduled installation window with clear shutdown and restoration expectations.",
  },
] as const;

const TIMELINE_NOTES = [
  "Pipe accessibility behind finished walls or ceilings.",
  "Number of bathrooms, fixtures, and appliance tie-ins.",
  "Need for staged work in occupied homes with limited shutoff windows.",
  "Drywall and paint restoration scope after new piping is installed.",
] as const;

const HOME_FAQS = [
  {
    question: "How quickly can poly b replacement Canada inspections be scheduled?",
    answer:
      "Call triage can begin immediately, and scheduling depends on your city, project size, and current crew availability. Early intake usually helps secure faster inspection windows.",
  },
  {
    question: "What is reviewed first during a repipe planning call?",
    answer:
      "The first review usually covers leak history, visible pipe condition, home occupancy needs, and whether phased work may be better than a single full shutoff window.",
  },
  {
    question: "Can restoration and plumbing work be coordinated as one plan?",
    answer:
      "Yes. Strong planning includes both repipe execution and post-install patch/paint timing so your property is fully closed out after testing is complete.",
  },
] as const;

export const metadata: Metadata = {
  title: "poly b replacement Canada licensed service | Pex Pipe Pros",
  description:
    "poly b replacement Canada guidance helps homeowners compare scope, timing, and local scheduling options. Call 1-888-702-2090 for fast inspection intake support.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `poly b replacement Canada licensed service | ${SITE_NAME}`,
    description:
      "poly b replacement Canada guidance helps homeowners compare scope, timing, and local scheduling options. Call 1-888-702-2090 for fast inspection intake support.",
    url: absoluteUrl("/"),
    type: "website",
    siteName: SITE_NAME,
    images: [absoluteUrl("/pexpipepros-logo.webp")],
  },
};

export default function HomePage() {
  const topPages = getTopPriorityPages(10);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: absoluteUrl("/"),
      logo: absoluteUrl("/pexpipepros-logo.webp"),
      telephone: EMERGENCY_PHONE_E164,
      areaServed: "CA",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: HOME_FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <main className="ppp-main">
      <JsonLd data={schema} />

      <section className="ppp-home-hero">
        <div className="ppp-container ppp-hero-centered">
          <div className="ppp-hero-max">
            <p className="ppp-eyebrow">Canada-Wide Poly B to PEX Resource</p>
            <h1 className="ppp-display">Poly B Replacement Canada planning for safer, cleaner repipe decisions.</h1>
            <p className="ppp-lead">
              Homeowners dealing with aging lines need quick clarity before a small leak turns into structural disruption. This page is built
              to help you decide what to do first, how to prepare for inspection, and how to compare full replacement versus staged work
              without guessing. You can review location-specific service links, understand what changes pricing, and book a call to secure
              a practical schedule that protects your home and reduces avoidable downtime. It is designed so you can move from concern to
              an action plan in one visit, with clear options for immediate support and longer-term replacement planning.
            </p>
            <div className="ppp-actions">
              <PhoneLink className="ppp-btn ppp-btn-solid" location="homepage-hero" pageTier="home">
                Call {EMERGENCY_PHONE_DISPLAY}
              </PhoneLink>
              <Link href="/services" className="ppp-btn ppp-btn-outline">
                Browse All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ppp-section">
        <div className="ppp-container ppp-breadcrumbs">
          <span>Home</span>
        </div>
      </section>

      <section className="ppp-process-band">
        <div className="ppp-container ppp-process-grid">
          {INTRO_POINTS.map((point, index) => (
            <article key={point} className="ppp-process-card">
              <span>0{index + 1}</span>
              <p>{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ppp-section">
        <div className="ppp-container">
          <div className="ppp-heading-row">
            <div>
              <p className="ppp-eyebrow">Start Here</p>
              <h2 className="ppp-title">Choose the path that matches your situation.</h2>
            </div>
            <p className="ppp-copy">
              Whether you need early research, cost expectations, or city-specific support, we help you pick the right next page quickly.
            </p>
          </div>

          <div className="ppp-type-grid">
            {PAGE_TYPES.map((type) => (
              <article key={type} className="ppp-type-card">
                <h3>{type}</h3>
                <p>Find the closest location and open the matching service page.</p>
                <Link href="/services">Browse Locations</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="priority" className="ppp-section ppp-priority-section">
        <div className="ppp-container ppp-heading-row">
          <div>
            <p className="ppp-eyebrow">Popular Locations</p>
            <h2 className="ppp-title">Jump straight to a nearby service page.</h2>
          </div>
          <p className="ppp-copy">Choose your area and get location-specific replacement guidance right away.</p>
        </div>

        <div className="ppp-container ppp-priority-grid ppp-location-grid">
          {topPages.map((page) => (
            <Link key={page.slug} href={`/${page.slug}`} className="ppp-priority-link">
              <span>{page.primaryKeyword}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="ppp-section">
        <div className="ppp-container">
          <div className="ppp-heading-row">
            <div>
              <p className="ppp-eyebrow">Plan With Confidence</p>
              <h2 className="ppp-title">Make the next decision with less uncertainty.</h2>
            </div>
            <p className="ppp-copy">
              A strong plan starts with what is known today and what should be verified during inspection so there are no surprises mid-project.
            </p>
          </div>
          <div className="ppp-edu-grid">
            {READINESS_BLOCKS.map((block) => (
              <article key={block.title} className="ppp-edu-card">
                <h3>{block.title}</h3>
                <p>{block.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ppp-section">
        <div className="ppp-container ppp-long-panel">
          <div>
            <p className="ppp-eyebrow">Project Timeline</p>
            <h2 className="ppp-title">What usually affects installation duration.</h2>
            <p className="ppp-copy">
              Every property is different, but these factors usually shape scope, disruption level, and total time from inspection to completed restoration.
            </p>
          </div>
          <ul className="ppp-bullets">
            {TIMELINE_NOTES.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ppp-section">
        <div className="ppp-container ppp-faq-shell">
          <header>
            <p className="ppp-eyebrow">FAQs</p>
            <h2 className="ppp-title">Common questions about Poly B replacement in Canada.</h2>
          </header>
          <div className="ppp-faq-grid">
            {HOME_FAQS.map((faq) => (
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
          <h2>Need help scoping a Poly B to PEX project now?</h2>
          <p>Use one call to discuss urgency, property access, and the fastest path to an inspection window.</p>
          <PhoneLink className="ppp-btn ppp-btn-solid" location="homepage-bottom" pageTier="home">
            Call {EMERGENCY_PHONE_DISPLAY}
          </PhoneLink>
        </div>
      </section>
    </main>
  );
}
