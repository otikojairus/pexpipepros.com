import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PhoneLink } from "@/components/phone-link";
import { EMERGENCY_PHONE_DISPLAY, absoluteUrl } from "@/lib/seo";

const TERMS_FAQS = [
  {
    question: "What does the poly b replacement Canada service information cover?",
    answer:
      "It covers guidance and service coordination support related to inspection, replacement planning, scheduling, and local routing pathways.",
  },
  {
    question: "Are service timelines and pricing guaranteed on this website?",
    answer:
      "No. Actual timing and pricing depend on location, access conditions, project complexity, and crew availability at the time of scheduling.",
  },
  {
    question: "What should users do in immediate safety emergencies?",
    answer:
      "If there is a direct safety threat, users should contact emergency services first before requesting plumbing coordination support.",
  },
] as const;

export const metadata: Metadata = {
  title: "poly b replacement Canada terms of service | Pex Pipe Pros",
  description:
    "poly b replacement Canada terms explain scheduling conditions, scope guidance limits, and service expectations. Call 1-888-702-2090 for direct intake support.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Terms Of Service", item: absoluteUrl("/terms-of-service") },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: TERMS_FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <main className="ppp-main">
      <JsonLd data={schema} />
      <section className="ppp-section">
        <div className="ppp-container ppp-prose">
          <h1>Poly B Replacement Canada terms of service for scheduling and scope guidance.</h1>
          <p>
            These terms explain how site information and service coordination support are provided. Content is intended to help homeowners
            understand next steps, compare scope options, and prepare for inspection planning. Final execution details, including start dates,
            duration, and pricing, depend on project-specific conditions. By using this website, visitors agree that recommendations are
            informational and that final service logistics are confirmed during direct intake and on-site assessment. This helps set clear
            expectations before scheduling commitments are made and work plans are finalized.
          </p>
          <p>
            Users are responsible for accurate location details and safe site access. If immediate safety risk exists, emergency services should
            be contacted before requesting non-emergency coordination.
          </p>
          <PhoneLink className="ppp-btn ppp-btn-solid" location="terms-hero" pageTier="terms">
            Call {EMERGENCY_PHONE_DISPLAY}
          </PhoneLink>
        </div>
      </section>

      <section className="ppp-section">
        <div className="ppp-container ppp-breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Terms Of Service</span>
        </div>
      </section>

      <section className="ppp-section">
        <div className="ppp-container ppp-faq-shell">
          <header>
            <p className="ppp-eyebrow">FAQs</p>
            <h2 className="ppp-title">Terms questions visitors often ask.</h2>
          </header>
          <div className="ppp-faq-grid">
            {TERMS_FAQS.map((faq) => (
              <article key={faq.question} className="ppp-faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
