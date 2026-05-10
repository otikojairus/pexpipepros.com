import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PhoneLink } from "@/components/phone-link";
import { EMERGENCY_PHONE_DISPLAY, EMERGENCY_PHONE_E164, SITE_NAME, absoluteUrl } from "@/lib/seo";

const ABOUT_FAQS = [
  {
    question: "How does Pex Pipe Pros support poly b replacement Canada planning?",
    answer:
      "We focus on practical guidance, local service pathways, and clear call intake so homeowners can move from early concern to a structured replacement plan quickly.",
  },
  {
    question: "Is this site designed for both urgent and planned repipe decisions?",
    answer:
      "Yes. The content supports urgent response moments and proactive planning scenarios, with clear next steps for inspection, scheduling, and scope comparison.",
  },
  {
    question: "Can I call even if I am still gathering details about my home?",
    answer:
      "Absolutely. Intake can start with basic symptoms and location, then help you identify what additional details are useful before finalizing an inspection window.",
  },
] as const;

export const metadata: Metadata = {
  title: "poly b replacement Canada about service | Pex Pipe Pros",
  description:
    "poly b replacement Canada guidance explains intake flow, inspection routing, and practical planning steps. Call 1-888-702-2090 to discuss your next move.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
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
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "About", item: absoluteUrl("/about") },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: ABOUT_FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <main className="ppp-main">
      <JsonLd data={schema} />
      <section className="ppp-page-hero">
        <div className="ppp-container ppp-hero-centered">
          <div className="ppp-hero-max">
          <div className="ppp-meta-row">
            <span>About</span>
            <span>Canada-wide</span>
          </div>
          <h1 className="ppp-display ppp-page-title">Poly B Replacement Canada guidance built for real homeowner decisions.</h1>
          <p className="ppp-lead">
            Pex Pipe Pros exists to reduce confusion during high-stakes piping decisions. Homeowners often need clear direction fast,
            especially when leak risk, scheduling pressure, and budget concerns overlap. Our approach is to translate technical repipe
            planning into practical next steps that can be acted on immediately. From first call intake through service-page navigation,
            the goal is to help you compare options confidently, avoid unnecessary delays, and protect your property with a structured plan.
            Every section is designed to reduce guesswork so families can make safer decisions under pressure.
          </p>
          <div className="ppp-actions">
            <PhoneLink className="ppp-btn ppp-btn-solid" location="about-hero" pageTier="about">
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
          <span>About</span>
        </div>
      </section>

      <section className="ppp-section">
        <div className="ppp-container ppp-prose">
          <p>
            We focus on inspection readiness, realistic scheduling, phased replacement options, and restoration planning. Instead of broad
            generic advice, content is organized around local access realities and the decisions homeowners actually face before work starts.
          </p>
          <p>
            If you are unsure whether your situation calls for immediate intervention or planned replacement, call and start with what you
            already know. A short intake conversation can quickly point you to the right service path.
          </p>
        </div>
      </section>

      <section className="ppp-section">
        <div className="ppp-container ppp-faq-shell">
          <header>
            <p className="ppp-eyebrow">FAQs</p>
            <h2 className="ppp-title">Common questions about how we work.</h2>
          </header>
          <div className="ppp-faq-grid">
            {ABOUT_FAQS.map((faq) => (
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
          <h2>Speak with a repipe intake specialist.</h2>
          <PhoneLink className="ppp-btn ppp-btn-solid" location="about-bottom" pageTier="about">
            Call {EMERGENCY_PHONE_DISPLAY}
          </PhoneLink>
        </div>
      </section>
    </main>
  );
}
