import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PhoneLink } from "@/components/phone-link";
import { EMERGENCY_PHONE_DISPLAY, absoluteUrl } from "@/lib/seo";

const CONTACT_FAQS = [
  {
    question: "What should I prepare before calling for poly b replacement Canada help?",
    answer:
      "Have your city, symptom summary, and any known leak history ready. Even simple details help intake route your call and speed up inspection planning.",
  },
  {
    question: "Can I call if I do not yet know whether full repipe is required?",
    answer:
      "Yes. Most calls start with uncertainty, and intake can help identify whether you need urgent response, deeper inspection, or phased replacement planning.",
  },
  {
    question: "How quickly can scheduling discussions begin after I call?",
    answer:
      "Scheduling discussions usually begin during the initial call, with availability guidance based on location, urgency, and service demand in your area.",
  },
] as const;

export const metadata: Metadata = {
  title: "poly b replacement Canada contact help | Pex Pipe Pros",
  description:
    "poly b replacement Canada contact support connects you to local intake, scope review, and scheduling guidance. Call 1-888-702-2090 to start planning now.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Contact", item: absoluteUrl("/contact") },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: CONTACT_FAQS.map((faq) => ({
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
        <div className="ppp-container ppp-contact-panel">
          <p className="ppp-eyebrow">Contact</p>
          <h1>Poly B Replacement Canada contact support for fast local scheduling.</h1>
          <p>
            If you are dealing with active symptoms or planning a proactive replacement, calling is the fastest way to align your next step.
            Intake can help clarify urgency, identify the best local service path, and explain what details matter most before booking an
            inspection. Even if you are early in the process, a brief call can save time and reduce uncertainty by focusing on the scope
            factors that most affect scheduling, disruption, and final execution planning. The goal is to give you a clear next action before
            small issues escalate into larger repair and restoration costs.
          </p>
          <PhoneLink className="ppp-contact-phone" location="contact-page" pageTier="contact">
            {EMERGENCY_PHONE_DISPLAY}
          </PhoneLink>
        </div>
      </section>

      <section className="ppp-section">
        <div className="ppp-container ppp-breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Contact</span>
        </div>
      </section>

      <section className="ppp-section">
        <div className="ppp-container ppp-faq-shell">
          <header>
            <p className="ppp-eyebrow">FAQs</p>
            <h2 className="ppp-title">Questions about calling and scheduling.</h2>
          </header>
          <div className="ppp-faq-grid">
            {CONTACT_FAQS.map((faq) => (
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
