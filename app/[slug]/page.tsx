import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { PhoneLink } from "@/components/phone-link";
import {
  PEX_PAGES,
  buildFaqs,
  buildH1,
  buildIntroParagraph,
  buildKeywordSentence,
  buildMeta,
  buildSchemas,
  getAreaLabel,
  getCityPagesForLinking,
  getCrossServiceLinksForCity,
  getLocationFacts,
  getPexPageBySlug,
  getPillarToCityLinks,
  getRelevantPillarPage,
  parseArea,
} from "@/lib/pex-data";
import { EMERGENCY_PHONE_DISPLAY } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type GuidanceBlock = {
  title: string;
  body: string;
};

function buildGuidanceBlocks(areaLabel: string): GuidanceBlock[] {
  return [
    {
      title: "Inspection Goals",
      body: `In ${areaLabel}, inspections should confirm pipe condition, leak history, and whether replacement is best completed in one phase or staged work blocks.`,
    },
    {
      title: "Installation Planning",
      body: "A clear plan should include access points, expected shutoff windows, pressure-testing steps, and how the team will keep key fixtures available whenever possible.",
    },
    {
      title: "Restoration Coordination",
      body: "After new lines are installed, patching and paint should be coordinated early so the home returns to normal quickly and no unfinished areas are left open.",
    },
  ];
}

function buildWorkstreamSteps(areaLabel: string, pageType: string): GuidanceBlock[] {
  return [
    {
      title: "1. Confirm Site Conditions",
      body: `A local review in ${areaLabel} verifies access constraints, pipe routes, and any high-risk areas that need priority handling.`,
    },
    {
      title: "2. Finalize Scope And Schedule",
      body: `The ${pageType.toLowerCase()} plan is translated into a practical schedule with preparation steps, in-home protections, and clear timing milestones.`,
    },
    {
      title: "3. Execute, Test, And Restore",
      body: "Installation is completed with pressure checks, fixture reconnection, and a restoration handoff so final finishing work is not delayed.",
    },
  ];
}

const PREP_CHECKLIST = [
  "Clear access to utility rooms, mechanical spaces, and areas where pipes are visible.",
  "Move fragile items away from walls or ceilings where access may be required.",
  "List any rooms where water shutoff timing must be coordinated carefully.",
  "Keep a simple note of past leaks or previous repair areas to review during inspection.",
] as const;

const COST_FACTORS = [
  "How many fixtures and branch lines need to be transitioned.",
  "Complexity of access behind finishes and around structural elements.",
  "Whether the project is completed in one phase or scheduled in stages.",
  "Scope of patching, repainting, and final cleanup after plumbing work.",
] as const;

const AFTERCARE_POINTS = [
  "Review shutoff valve locations and recommended maintenance intervals.",
  "Confirm where pressure tests were performed and what was verified.",
  "Ask for a clean list of completed work areas for future reference.",
  "Schedule any remaining finishing work so the property is fully closed out.",
] as const;

export async function generateStaticParams() {
  return PEX_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPexPageBySlug(slug);
  return page ? buildMeta(page) : {};
}

function buildRelatedLocationPages(currentSlug: string, pageType: string) {
  const sameType = PEX_PAGES.filter((item) => item.pageType === pageType && item.slug !== currentSlug);
  const fallback = PEX_PAGES.filter((item) => item.slug !== currentSlug);

  const uniqueFrom = (items: Array<(typeof PEX_PAGES)[number]>) => {
    const seen = new Set<string>();
    const result: Array<(typeof PEX_PAGES)[number]> = [];

    for (const item of items) {
      const label = item.targetArea === "Canada (National)" ? "Canada" : item.targetArea;
      if (seen.has(label)) {
        continue;
      }
      seen.add(label);
      result.push(item);
      if (result.length === 6) {
        break;
      }
    }

    return result;
  };

  const primary = uniqueFrom(sameType);
  if (primary.length >= 4) {
    return primary;
  }

  return uniqueFrom([...primary, ...fallback]).slice(0, 6);
}

export default async function PexLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getPexPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const areaLabel = getAreaLabel(page.targetArea);
  const areaInfo = parseArea(page.targetArea);
  const pageH1 = buildH1(page);
  const introParagraph = buildIntroParagraph(page);
  const faqs = buildFaqs(page);
  const relatedPages = buildRelatedLocationPages(page.slug, page.pageType);
  const keywordSentence = buildKeywordSentence(page);
  const guidanceBlocks = buildGuidanceBlocks(areaLabel);
  const workstreamSteps = buildWorkstreamSteps(areaLabel, page.pageType);
  const locationFacts = getLocationFacts(page);
  const relevantPillar = getRelevantPillarPage(page);
  const cityLinkTargets = getCityPagesForLinking(page, 5);
  const crossServiceLinks = getCrossServiceLinksForCity(page, 4);
  const pillarCityLinks = page.pageType === "Service Pillar" ? getPillarToCityLinks(page) : [];
  const shouldShowSupportLinks = ["Cost Guide", "Symptom Page", "Near Me Page"].includes(page.pageType);
  const shouldShowGeneralRelated = !shouldShowSupportLinks;

  return (
    <main className="ppp-main">
      <JsonLd data={buildSchemas(page)} />

      <section className="ppp-page-hero">
        <div className="ppp-container ppp-hero-centered">
          <div className="ppp-hero-max">
            <div className="ppp-meta-row">
              <span>{areaLabel}</span>
              <span>{page.pageType}</span>
              <span>{page.searchIntent}</span>
            </div>
            <h1 className="ppp-display ppp-page-title">{pageH1}</h1>
            <p className="ppp-lead">{introParagraph}</p>
            <div className="ppp-actions">
              <PhoneLink className="ppp-btn ppp-btn-solid" location={page.slug} pageTier="landing">
                {page.ctaStrategy}
              </PhoneLink>
              <Link href="/services" className="ppp-btn ppp-btn-outline">
                Browse More Locations
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ppp-section">
        <div className="ppp-container ppp-breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/services">Services</Link>
          <span>/</span>
          <span>{pageH1}</span>
        </div>
      </section>

      <section className="ppp-section">
        <div className="ppp-container ppp-story-grid">
          <article className="ppp-story-card">
            <p className="ppp-eyebrow">What Homeowners Ask First</p>
            <p className="ppp-keyword-line">{keywordSentence}</p>
          </article>

          <article className="ppp-story-card">
            <p className="ppp-eyebrow">What To Expect During Work</p>
            <ul className="ppp-list">
              <li>Map shutoff windows and protect occupied areas before any repipe cuts begin.</li>
              <li>Confirm fixture-by-fixture transition from legacy lines to modern piping with pressure testing.</li>
              <li>Coordinate restoration scope so patching and paint are scheduled immediately after install.</li>
            </ul>
          </article>
        </div>
      </section>

      {locationFacts.length > 1 ? (
        <section className="ppp-section">
          <div className="ppp-container ppp-long-panel">
            <div>
              <p className="ppp-eyebrow">Local Facts</p>
              <h2 className="ppp-title">Area-specific context for planning in {areaLabel}.</h2>
            </div>
            <ul className="ppp-bullets">
              {locationFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="ppp-section">
        <div className="ppp-container">
          <div className="ppp-heading-row">
            <div>
              <p className="ppp-eyebrow">Before Work Begins</p>
              <h2 className="ppp-title">What a strong replacement plan should include.</h2>
            </div>
            <p className="ppp-copy">
              The goal is to reduce uncertainty before work begins, so scheduling, access, and restoration expectations are clear from day one.
            </p>
          </div>
          <div className="ppp-edu-grid">
            {guidanceBlocks.map((block) => (
              <article key={block.title} className="ppp-edu-card">
                <h3>{block.title}</h3>
                <p>{block.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ppp-section">
        <div className="ppp-container ppp-steps-shell">
          <div className="ppp-heading-row">
            <div>
              <p className="ppp-eyebrow">Your Step-By-Step Plan</p>
              <h2 className="ppp-title">From first call to finished restoration.</h2>
            </div>
          </div>
          <div className="ppp-step-grid">
            {workstreamSteps.map((step) => (
              <article key={step.title} className="ppp-step-card">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ppp-section">
        <div className="ppp-container ppp-long-panel">
          <div>
            <p className="ppp-eyebrow">Before Installation</p>
            <h2 className="ppp-title">Simple prep steps that protect your home.</h2>
          </div>
          <ul className="ppp-bullets">
            {PREP_CHECKLIST.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ppp-section">
        <div className="ppp-container ppp-story-grid">
          <article className="ppp-story-card">
            <p className="ppp-eyebrow">Pricing Context</p>
            <h3>What usually affects final project pricing.</h3>
            <ul className="ppp-list">
              {COST_FACTORS.map((factor) => (
                <li key={factor}>{factor}</li>
              ))}
            </ul>
          </article>
          <article className="ppp-story-card">
            <p className="ppp-eyebrow">Aftercare</p>
            <h3>What to confirm after installation is complete.</h3>
            <ul className="ppp-list">
              {AFTERCARE_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {areaInfo.kind === "city" ? (
        <section className="ppp-section">
          <div className="ppp-container ppp-related-wrap">
            <div>
              <p className="ppp-eyebrow">City Service Links</p>
              <h2 className="ppp-title">Compare related services in {areaInfo.city}.</h2>
            </div>
            <div className="ppp-related-links ppp-location-grid">
              {relevantPillar ? (
                <Link href={`/${relevantPillar.slug}`}>{buildH1(relevantPillar)}</Link>
              ) : null}
              {crossServiceLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.anchor}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {shouldShowSupportLinks ? (
        <section className="ppp-section">
          <div className="ppp-container ppp-related-wrap">
            <div>
              <p className="ppp-eyebrow">Recommended Next Links</p>
              <h2 className="ppp-title">Continue to the most relevant service paths.</h2>
            </div>
            <div className="ppp-related-links ppp-location-grid">
              {relevantPillar ? <Link href={`/${relevantPillar.slug}`}>{buildH1(relevantPillar)}</Link> : null}
              {cityLinkTargets.slice(0, 4).map((item) => (
                <Link key={item.slug} href={`/${item.slug}`}>
                  {buildH1(item)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {page.pageType === "Service Pillar" && pillarCityLinks.length > 0 ? (
        <section className="ppp-section">
          <div className="ppp-container ppp-related-wrap">
            <div>
              <p className="ppp-eyebrow">City Coverage</p>
              <h2 className="ppp-title">Find this service in every supported city.</h2>
            </div>
            <div className="ppp-related-links ppp-location-grid">
              {pillarCityLinks.map((item) => (
                <Link key={item.slug} href={`/${item.slug}`}>
                  {buildH1(item)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="ppp-section">
        <div className="ppp-container ppp-faq-shell">
          <header>
            <p className="ppp-eyebrow">FAQs</p>
            <h2 className="ppp-title">Common questions for {areaLabel} visitors.</h2>
          </header>
          <div className="ppp-faq-grid">
            {faqs.map((faq) => (
              <article key={faq.question} className="ppp-faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {shouldShowGeneralRelated ? (
        <section className="ppp-section">
          <div className="ppp-container ppp-related-wrap">
            <div>
              <p className="ppp-eyebrow">More Locations To Explore</p>
              <h2 className="ppp-title">View other service locations.</h2>
            </div>
            <div className="ppp-related-links ppp-location-grid">
              {relatedPages.map((item) => (
                <Link key={item.slug} href={`/${item.slug}`}>
                  {buildH1(item)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="ppp-section">
        <div className="ppp-container ppp-cta-panel">
          <h2>{page.ctaStrategy}</h2>
          <p>Call with your city, pipe symptoms, and timeline goals to start triage quickly.</p>
          <PhoneLink className="ppp-btn ppp-btn-solid" location={`${page.slug}-bottom`} pageTier="landing">
            Call {EMERGENCY_PHONE_DISPLAY}
          </PhoneLink>
          <p className="ppp-canonical">Serving {areaLabel}</p>
        </div>
      </section>
    </main>
  );
}
