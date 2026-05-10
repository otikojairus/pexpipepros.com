import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PhoneLink } from "@/components/phone-link";
import { EMERGENCY_PHONE_DISPLAY, absoluteUrl } from "@/lib/seo";

const PRIVACY_FAQS = [
  {
    question: "What information is collected for poly b replacement Canada service requests?",
    answer:
      "We collect only the information needed to coordinate service, such as location details, contact information, and a brief description of the issue.",
  },
  {
    question: "Is personal information sold to third parties?",
    answer:
      "No. Personal information is not sold. Data is used only for service coordination, communication, and improving site usefulness.",
  },
  {
    question: "Why might call or page analytics be used?",
    answer:
      "Analytics can help identify which pages are most helpful so content and routing can be improved for future visitors.",
  },
] as const;

export const metadata: Metadata = {
  title: "poly b replacement Canada privacy policy | Pex Pipe Pros",
  description:
    "poly b replacement Canada privacy details explain how contact and service-request information is handled. Call 1-888-702-2090 for service coordination support.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Privacy Policy", item: absoluteUrl("/privacy-policy") },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: PRIVACY_FAQS.map((faq) => ({
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
          <h1>Poly B Replacement Canada privacy policy for service communication data.</h1>
          <p>
            This privacy policy explains how information is handled when visitors request Poly B replacement and repipe support. We keep
            data collection limited to what is required for communication, service coordination, and relevant follow-up. In most cases,
            this includes contact details, service location, and a short summary of the plumbing concern. The intent is to make response
            routing efficient while avoiding unnecessary information capture and preserving a clear, practical communication process. We aim
            to keep policy language understandable so visitors can quickly see what is collected and why.
          </p>
          <p>
            Personal information is not sold. If analytics tools are used, they are used to improve user experience, identify helpful pages,
            and reduce friction in routing calls to the correct service path.
          </p>
          <PhoneLink className="ppp-btn ppp-btn-solid" location="privacy-hero" pageTier="privacy">
            Call {EMERGENCY_PHONE_DISPLAY}
          </PhoneLink>
        </div>
      </section>

      <section className="ppp-section">
        <div className="ppp-container ppp-breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Privacy Policy</span>
        </div>
      </section>

      <section className="ppp-section">
        <div className="ppp-container ppp-faq-shell">
          <header>
            <p className="ppp-eyebrow">FAQs</p>
            <h2 className="ppp-title">Privacy questions visitors often ask.</h2>
          </header>
          <div className="ppp-faq-grid">
            {PRIVACY_FAQS.map((faq) => (
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
