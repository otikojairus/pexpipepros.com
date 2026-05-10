import type { Metadata } from "next";
import { SITE_NAME, absoluteUrl, trimMetaDescription } from "@/lib/seo";

export type PexPage = {
  id: number;
  title: string;
  slug: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  targetArea: string;
  pageType: string;
  searchIntent: string;
  monthlyVolume: number;
  keywordDifficulty: number;
  cpc: number;
  priority: string;
  ctaStrategy: string;
};

export const PEX_PAGES = [
  {
    "id": 1,
    "title": "Poly B Replacement Canada - Licensed Plumbers for Poly B Pipe Removal",
    "slug": "poly-b-replacement",
    "primaryKeyword": "poly b replacement",
    "secondaryKeywords": [
      "poly b pipe replacement",
      "polybutylene pipe replacement",
      "poly b piping replacement",
      "replace poly b plumbing canada"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Service Pillar",
    "searchIntent": "Transactional",
    "monthlyVolume": 350,
    "keywordDifficulty": 0,
    "cpc": 200.0,
    "priority": "\ud83d\udd34 Top Priority",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 2,
    "title": "Poly B to PEX Conversion - Full Home Repipe by Certified Plumbers",
    "slug": "poly-b-to-pex-conversion",
    "primaryKeyword": "poly b to pex",
    "secondaryKeywords": [
      "poly b to pex repiping",
      "polybutylene to pex conversion",
      "repipe poly b to pex",
      "poly b to pex upgrade canada"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Service Pillar",
    "searchIntent": "Transactional",
    "monthlyVolume": 90,
    "keywordDifficulty": 0,
    "cpc": 30.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 3,
    "title": "PEX Piping Installation Canada - New PEX Pipe Install for Canadian Homes",
    "slug": "pex-piping-installation",
    "primaryKeyword": "pex piping installation",
    "secondaryKeywords": [
      "pex pipe installation canada",
      "pex pipe install",
      "pex plumbing install",
      "pex piping install cost"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Service Pillar",
    "searchIntent": "Transactional",
    "monthlyVolume": 30,
    "keywordDifficulty": 0,
    "cpc": 0.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 4,
    "title": "Polybutylene Pipe Replacement - Complete Guide for Canadian Homeowners",
    "slug": "polybutylene-pipe-replacement",
    "primaryKeyword": "polybutylene pipe replacement",
    "secondaryKeywords": [
      "polybutylene plumbing replacement",
      "replace polybutylene plumbing",
      "polybutylene pipe replacement cost",
      "polybutylene plumbing canada"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Service Pillar",
    "searchIntent": "Transactional",
    "monthlyVolume": 50,
    "keywordDifficulty": 2,
    "cpc": 250.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 5,
    "title": "Certified Poly B Replacement Plumbers - Find Licensed Specialists Near You",
    "slug": "certified-poly-b-replacement-plumbers",
    "primaryKeyword": "certified poly b replacement plumbers",
    "secondaryKeywords": [
      "poly b replacement services",
      "licensed poly b plumber",
      "poly b replacement specialists canada"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Service Pillar",
    "searchIntent": "Transactional",
    "monthlyVolume": 30,
    "keywordDifficulty": 0,
    "cpc": 200.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 6,
    "title": "Poly B Replacement Cost Canada - 2025 Full Pricing Guide",
    "slug": "poly-b-replacement-cost",
    "primaryKeyword": "poly b replacement cost",
    "secondaryKeywords": [
      "poly b plumbing replacement cost",
      "how much does it cost to replace poly b plumbing",
      "poly b pipe replacement cost",
      "cost to replace poly b plumbing",
      "polybutylene pipe replacement cost"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Cost Guide",
    "searchIntent": "Informational",
    "monthlyVolume": 600,
    "keywordDifficulty": 0,
    "cpc": 170.0,
    "priority": "\ud83d\udd34 Top Priority",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 7,
    "title": "How Much Does It Cost to Replace Poly B Plumbing? Full Price Breakdown",
    "slug": "how-much-to-replace-poly-b-plumbing",
    "primaryKeyword": "how much does it cost to replace poly b plumbing",
    "secondaryKeywords": [
      "how much to replace poly b plumbing",
      "average cost poly b replacement",
      "poly b piping replacement cost",
      "cost to replace polybutylene plumbing"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Cost Guide",
    "searchIntent": "Informational",
    "monthlyVolume": 250,
    "keywordDifficulty": 0,
    "cpc": 140.0,
    "priority": "\ud83d\udd34 Top Priority",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 8,
    "title": "Poly B Replacement Cost Calgary - 2025 Calgary Pricing Guide",
    "slug": "poly-b-replacement-cost-calgary",
    "primaryKeyword": "poly b replacement cost calgary",
    "secondaryKeywords": [
      "poly b replacement calgary cost",
      "calgary poly b replacement cost",
      "poly b plumbing replacement cost calgary"
    ],
    "targetArea": "Calgary, AB",
    "pageType": "Cost Guide",
    "searchIntent": "Informational",
    "monthlyVolume": 350,
    "keywordDifficulty": 0,
    "cpc": 450.0,
    "priority": "\ud83d\udd34 Top Priority",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 9,
    "title": "Poly B Replacement Cost Edmonton - Edmonton 2025 Pricing Guide",
    "slug": "poly-b-replacement-cost-edmonton",
    "primaryKeyword": "poly b plumbing replacement cost edmonton",
    "secondaryKeywords": [
      "poly b replacement edmonton cost",
      "edmonton poly b replacement cost",
      "poly b pipe replacement cost edmonton"
    ],
    "targetArea": "Edmonton, AB",
    "pageType": "Cost Guide",
    "searchIntent": "Informational",
    "monthlyVolume": 50,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 10,
    "title": "Poly B Replacement Cost Vancouver - Vancouver 2025 Pricing Guide",
    "slug": "poly-b-replacement-cost-vancouver",
    "primaryKeyword": "poly b pipe replacement cost vancouver",
    "secondaryKeywords": [
      "poly b replacement vancouver cost",
      "vancouver poly b replacement cost",
      "poly b pipe replacement cost bc"
    ],
    "targetArea": "Vancouver, BC",
    "pageType": "Cost Guide",
    "searchIntent": "Informational",
    "monthlyVolume": 30,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "\ud83d\udd34 Top Priority",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 11,
    "title": "What Is Poly B Plumbing? The Complete Canadian Homeowner Guide",
    "slug": "what-is-poly-b-plumbing",
    "primaryKeyword": "poly b plumbing",
    "secondaryKeywords": [
      "what is poly b plumbing",
      "poly-b plumbing",
      "polybutylene plumbing",
      "poly b pipe",
      "what does poly b plumbing look like"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Symptom Page",
    "searchIntent": "Informational",
    "monthlyVolume": 3200,
    "keywordDifficulty": 1,
    "cpc": 160.0,
    "priority": "\ud83d\udd34 Top Priority",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 12,
    "title": "Is Poly B Plumbing Bad? Risks, Failure Rates & When to Replace",
    "slug": "is-poly-b-plumbing-bad",
    "primaryKeyword": "is poly b plumbing bad",
    "secondaryKeywords": [
      "why is poly b plumbing bad",
      "poly b plumbing problems",
      "poly b pipe failure",
      "problems with poly b plumbing"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Symptom Page",
    "searchIntent": "Informational",
    "monthlyVolume": 600,
    "keywordDifficulty": 0,
    "cpc": 120.0,
    "priority": "\ud83d\udd34 Top Priority",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 13,
    "title": "How to Identify Poly B Plumbing - Signs & What to Look For",
    "slug": "how-to-identify-poly-b-plumbing",
    "primaryKeyword": "how to identify poly b plumbing",
    "secondaryKeywords": [
      "how to tell if you have poly b plumbing",
      "what does poly b plumbing look like",
      "poly b pipe identification",
      "what color is poly b plumbing"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Symptom Page",
    "searchIntent": "Informational",
    "monthlyVolume": 370,
    "keywordDifficulty": 0,
    "cpc": 120.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 14,
    "title": "Poly B Plumbing & Home Insurance - What Canadian Insurers Require",
    "slug": "poly-b-plumbing-insurance",
    "primaryKeyword": "poly b plumbing insurance",
    "secondaryKeywords": [
      "poly b piping insurance",
      "poly b home insurance canada",
      "home insurance polybutylene plumbing",
      "poly b insurance bc",
      "poly b insurance alberta",
      "td insurance poly b"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Symptom Page",
    "searchIntent": "Informational",
    "monthlyVolume": 300,
    "keywordDifficulty": 0,
    "cpc": 250.0,
    "priority": "\ud83d\udd34 Top Priority",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 15,
    "title": "Poly B Replacement Grant Canada - Government Rebates & Funding Programs",
    "slug": "poly-b-replacement-grant",
    "primaryKeyword": "poly b replacement grant",
    "secondaryKeywords": [
      "poly b replacement rebate canada",
      "government rebate poly b plumbing",
      "poly b grant bc",
      "poly b plumbing subsidy"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Symptom Page",
    "searchIntent": "Informational",
    "monthlyVolume": 80,
    "keywordDifficulty": 0,
    "cpc": 0.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 16,
    "title": "How Long Does Poly B Plumbing Last? Lifespan & Replacement Timeline",
    "slug": "how-long-does-poly-b-plumbing-last",
    "primaryKeyword": "how long does poly b plumbing last",
    "secondaryKeywords": [
      "poly b pipe lifespan",
      "when was poly b plumbing used",
      "poly b plumbing years",
      "when was poly b banned canada"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Symptom Page",
    "searchIntent": "Informational",
    "monthlyVolume": 30,
    "keywordDifficulty": 0,
    "cpc": 120.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 17,
    "title": "Poly B vs PEX Plumbing - Which Is Better for Your Canadian Home?",
    "slug": "poly-b-vs-pex-plumbing",
    "primaryKeyword": "poly b plumbing vs pex",
    "secondaryKeywords": [
      "poly b vs pex pipe",
      "polybutylene vs pex",
      "pex plumbing vs polybutylene",
      "poly b to pex upgrade benefits"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Symptom Page",
    "searchIntent": "Informational",
    "monthlyVolume": 60,
    "keywordDifficulty": 0,
    "cpc": 0.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 18,
    "title": "Poly B Replacement Near Me - Find Certified Poly B Plumbers",
    "slug": "poly-b-replacement-near-me",
    "primaryKeyword": "poly b replacement near me",
    "secondaryKeywords": [
      "poly b pipe replacement near me",
      "poly b plumber near me",
      "polybutylene pipe replacement near me",
      "certified poly b replacement plumbers"
    ],
    "targetArea": "Canada (National)",
    "pageType": "Near Me Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 80,
    "keywordDifficulty": 0,
    "cpc": 200.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 19,
    "title": "Poly B Replacement British Columbia - Licensed BC Plumbers",
    "slug": "poly-b-replacement-bc",
    "primaryKeyword": "poly b plumbing bc",
    "secondaryKeywords": [
      "poly b replacement bc",
      "poly b pipe replacement bc",
      "polybutylene pipe replacement bc",
      "poly b insurance bc"
    ],
    "targetArea": "British Columbia",
    "pageType": "Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 150,
    "keywordDifficulty": 0,
    "cpc": 190.0,
    "priority": "\ud83d\udd34 Top Priority",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 20,
    "title": "Poly B Replacement Alberta - Certified Poly B Plumbers Across AB",
    "slug": "poly-b-replacement-alberta",
    "primaryKeyword": "poly b plumbing alberta",
    "secondaryKeywords": [
      "poly b replacement alberta",
      "poly b plumbing replacement alberta",
      "poly b pipe replacement alberta",
      "poly b insurance alberta"
    ],
    "targetArea": "Alberta",
    "pageType": "Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 60,
    "keywordDifficulty": 1,
    "cpc": 250.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 21,
    "title": "Poly B Replacement Ontario - Licensed Ontario Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-ontario",
    "primaryKeyword": "poly b plumbing ontario",
    "secondaryKeywords": [
      "poly b replacement ontario",
      "poly b pipe replacement ontario",
      "polybutylene pipe replacement ontario"
    ],
    "targetArea": "Ontario",
    "pageType": "Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 30,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 22,
    "title": "Poly B Replacement Quebec - Remplacement Poly B au Qu\u00e9bec",
    "slug": "poly-b-replacement-quebec",
    "primaryKeyword": "poly b replacement quebec",
    "secondaryKeywords": [
      "poly b plumbing quebec",
      "polybutylene pipe replacement quebec",
      "poly b pipe replacement quebec",
      "remplacement poly b quebec"
    ],
    "targetArea": "Quebec",
    "pageType": "Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 20,
    "keywordDifficulty": 0,
    "cpc": 240.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 23,
    "title": "Poly B Replacement Saskatchewan - SK Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-saskatchewan",
    "primaryKeyword": "poly b replacement saskatchewan",
    "secondaryKeywords": [
      "poly b pipe replacement sk",
      "polybutylene pipe replacement saskatchewan",
      "poly b plumber sk"
    ],
    "targetArea": "Saskatchewan",
    "pageType": "Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 15,
    "keywordDifficulty": 0,
    "cpc": 220.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 24,
    "title": "Poly B Replacement Manitoba - MB Poly B Pipe Replacement Specialists",
    "slug": "poly-b-replacement-manitoba",
    "primaryKeyword": "poly b replacement manitoba",
    "secondaryKeywords": [
      "poly b pipe replacement mb",
      "polybutylene pipe replacement manitoba",
      "poly b plumber mb"
    ],
    "targetArea": "Manitoba",
    "pageType": "Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 15,
    "keywordDifficulty": 0,
    "cpc": 220.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 25,
    "title": "Poly B Replacement Nova Scotia - NS Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-nova-scotia",
    "primaryKeyword": "poly b replacement nova scotia",
    "secondaryKeywords": [
      "poly b pipe replacement ns",
      "polybutylene pipe replacement nova scotia",
      "poly b plumber nova scotia"
    ],
    "targetArea": "Nova Scotia",
    "pageType": "Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 210.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 26,
    "title": "Poly B Replacement New Brunswick - NB Poly B Pipe Plumbing",
    "slug": "poly-b-replacement-new-brunswick",
    "primaryKeyword": "poly b replacement new brunswick",
    "secondaryKeywords": [
      "poly b pipe replacement nb",
      "polybutylene pipe replacement new brunswick",
      "poly b plumber new brunswick"
    ],
    "targetArea": "New Brunswick",
    "pageType": "Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 200.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 27,
    "title": "Poly B Replacement Vancouver - #1 Vancouver Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-vancouver",
    "primaryKeyword": "poly b replacement vancouver",
    "secondaryKeywords": [
      "poly b pipe replacement vancouver",
      "poly b to pex repiping vancouver",
      "polybutylene pipe replacement vancouver"
    ],
    "targetArea": "Vancouver, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 100,
    "keywordDifficulty": 0,
    "cpc": 450.0,
    "priority": "\ud83d\udd34 Top Priority",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 28,
    "title": "Poly B Replacement Surrey - Certified Poly B Plumbers Serving Surrey BC",
    "slug": "poly-b-replacement-surrey",
    "primaryKeyword": "poly b replacement surrey",
    "secondaryKeywords": [
      "poly b pipe replacement surrey",
      "polybutylene pipe replacement surrey",
      "poly b plumber surrey bc"
    ],
    "targetArea": "Surrey, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 90,
    "keywordDifficulty": 0,
    "cpc": 420.0,
    "priority": "\ud83d\udd34 Top Priority",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 29,
    "title": "Poly B Replacement Burnaby - Burnaby Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-burnaby",
    "primaryKeyword": "poly b pipe replacement burnaby",
    "secondaryKeywords": [
      "poly b replacement burnaby",
      "poly b to pex repiping burnaby",
      "polybutylene pipe replacement burnaby"
    ],
    "targetArea": "Burnaby, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 80,
    "keywordDifficulty": 0,
    "cpc": 420.0,
    "priority": "\ud83d\udd34 Top Priority",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 30,
    "title": "Poly B Replacement Coquitlam - Coquitlam Poly B Plumbing Experts",
    "slug": "poly-b-replacement-coquitlam",
    "primaryKeyword": "poly b pipe replacement coquitlam",
    "secondaryKeywords": [
      "poly b replacement coquitlam",
      "polybutylene pipe replacement coquitlam",
      "poly b plumber coquitlam bc"
    ],
    "targetArea": "Coquitlam, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 50,
    "keywordDifficulty": 0,
    "cpc": 380.0,
    "priority": "\ud83d\udd34 Top Priority",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 31,
    "title": "Poly B Replacement Port Coquitlam - Port Coquitlam Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-port-coquitlam",
    "primaryKeyword": "poly b replacement port coquitlam",
    "secondaryKeywords": [
      "poly b pipe replacement port coquitlam",
      "polybutylene pipe replacement port coquitlam"
    ],
    "targetArea": "Port Coquitlam, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 20,
    "keywordDifficulty": 0,
    "cpc": 360.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 32,
    "title": "Poly B Replacement North Vancouver - North Van Poly B Specialists",
    "slug": "poly-b-replacement-north-vancouver",
    "primaryKeyword": "poly b pipe replacement north vancouver",
    "secondaryKeywords": [
      "poly b replacement north vancouver",
      "poly b plumbing north vancouver",
      "polybutylene pipe replacement north van"
    ],
    "targetArea": "North Vancouver, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 50,
    "keywordDifficulty": 0,
    "cpc": 420.0,
    "priority": "\ud83d\udd34 Top Priority",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 33,
    "title": "Poly B Replacement West Vancouver - West Van Poly B Pipe Plumbing",
    "slug": "poly-b-replacement-west-vancouver",
    "primaryKeyword": "poly b replacement west vancouver",
    "secondaryKeywords": [
      "poly b pipe replacement west vancouver",
      "polybutylene pipe replacement west vancouver"
    ],
    "targetArea": "West Vancouver, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 20,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 34,
    "title": "Poly B Replacement Richmond BC - Richmond Poly B Plumbing Replacement",
    "slug": "poly-b-replacement-richmond",
    "primaryKeyword": "poly b replacement richmond bc",
    "secondaryKeywords": [
      "poly b pipe replacement richmond",
      "polybutylene pipe replacement richmond",
      "poly b plumber richmond bc"
    ],
    "targetArea": "Richmond, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 40,
    "keywordDifficulty": 0,
    "cpc": 390.0,
    "priority": "\ud83d\udd34 Top Priority",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 35,
    "title": "Poly B Replacement New Westminster - New West Poly B Plumbers",
    "slug": "poly-b-replacement-new-westminster",
    "primaryKeyword": "poly b replacement new westminster",
    "secondaryKeywords": [
      "polybutylene pipe replacement new westminster",
      "poly b pipe replacement new westminster"
    ],
    "targetArea": "New Westminster, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 30,
    "keywordDifficulty": 0,
    "cpc": 370.0,
    "priority": "\ud83d\udd34 Top Priority",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 36,
    "title": "Poly B Replacement Langley - Langley Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-langley",
    "primaryKeyword": "poly b pipe replacement langley",
    "secondaryKeywords": [
      "poly b replacement langley",
      "polybutylene plumbing replacement langley",
      "poly b plumber langley bc"
    ],
    "targetArea": "Langley, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 30,
    "keywordDifficulty": 0,
    "cpc": 360.0,
    "priority": "\ud83d\udd34 Top Priority",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 37,
    "title": "Poly B Replacement Abbotsford - Abbotsford Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-abbotsford",
    "primaryKeyword": "poly b pipe replacement abbotsford",
    "secondaryKeywords": [
      "poly b replacement abbotsford",
      "polybutylene pipe replacement abbotsford"
    ],
    "targetArea": "Abbotsford, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 20,
    "keywordDifficulty": 0,
    "cpc": 320.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 38,
    "title": "Poly B Replacement Maple Ridge - Maple Ridge Poly B Plumbing Experts",
    "slug": "poly-b-replacement-maple-ridge",
    "primaryKeyword": "poly b replacement maple ridge",
    "secondaryKeywords": [
      "poly b pipe replacement maple ridge",
      "polybutylene pipe replacement maple ridge"
    ],
    "targetArea": "Maple Ridge, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 20,
    "keywordDifficulty": 0,
    "cpc": 310.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 39,
    "title": "Poly B Replacement Delta BC - Delta Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-delta",
    "primaryKeyword": "poly b replacement delta bc",
    "secondaryKeywords": [
      "poly b pipe replacement delta",
      "polybutylene pipe replacement delta bc"
    ],
    "targetArea": "Delta, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 15,
    "keywordDifficulty": 0,
    "cpc": 330.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 40,
    "title": "Poly B Replacement Mission BC - Mission Poly B Plumbing Experts",
    "slug": "poly-b-replacement-mission",
    "primaryKeyword": "poly b pipe replacement mission",
    "secondaryKeywords": [
      "poly b replacement mission bc",
      "polybutylene pipe replacement mission"
    ],
    "targetArea": "Mission, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 15,
    "keywordDifficulty": 0,
    "cpc": 290.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 41,
    "title": "Poly B Replacement White Rock - White Rock Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-white-rock",
    "primaryKeyword": "poly b replacement white rock",
    "secondaryKeywords": [
      "poly b pipe replacement white rock",
      "polybutylene pipe replacement white rock"
    ],
    "targetArea": "White Rock, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 15,
    "keywordDifficulty": 0,
    "cpc": 310.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 42,
    "title": "Poly B Replacement Port Moody - Port Moody Poly B Plumbing",
    "slug": "poly-b-replacement-port-moody",
    "primaryKeyword": "poly b replacement port moody",
    "secondaryKeywords": [
      "poly b pipe replacement port moody",
      "polybutylene pipe replacement port moody"
    ],
    "targetArea": "Port Moody, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 290.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 43,
    "title": "Poly B Replacement Pitt Meadows - Pitt Meadows Poly B Pipe Replacement",
    "slug": "poly-b-replacement-pitt-meadows",
    "primaryKeyword": "poly b replacement pitt meadows",
    "secondaryKeywords": [
      "poly b pipe replacement pitt meadows",
      "polybutylene pipe replacement pitt meadows"
    ],
    "targetArea": "Pitt Meadows, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 270.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 44,
    "title": "Poly B Replacement Tsawwassen - Tsawwassen Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-tsawwassen",
    "primaryKeyword": "poly b replacement tsawwassen",
    "secondaryKeywords": [
      "poly b pipe replacement tsawwassen",
      "polybutylene pipe replacement tsawwassen"
    ],
    "targetArea": "Tsawwassen, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 260.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 45,
    "title": "Poly B Replacement Aldergrove BC - Aldergrove Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-aldergrove",
    "primaryKeyword": "poly b replacement aldergrove bc",
    "secondaryKeywords": [
      "poly b pipe replacement aldergrove",
      "polybutylene pipe replacement aldergrove bc"
    ],
    "targetArea": "Aldergrove, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 260.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 46,
    "title": "Poly B Replacement Cloverdale BC - Cloverdale Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-cloverdale",
    "primaryKeyword": "poly b replacement cloverdale bc",
    "secondaryKeywords": [
      "poly b pipe replacement cloverdale",
      "polybutylene pipe replacement cloverdale bc"
    ],
    "targetArea": "Cloverdale, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 255.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 47,
    "title": "Poly B Replacement Victoria BC - Victoria Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-victoria",
    "primaryKeyword": "poly b replacement victoria bc",
    "secondaryKeywords": [
      "poly b pipe replacement victoria",
      "polybutylene pipe replacement victoria"
    ],
    "targetArea": "Victoria, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 30,
    "keywordDifficulty": 0,
    "cpc": 320.0,
    "priority": "\ud83d\udd34 Top Priority",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 48,
    "title": "Poly B Replacement Saanich BC - Saanich Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-saanich",
    "primaryKeyword": "poly b replacement saanich bc",
    "secondaryKeywords": [
      "poly b pipe replacement saanich",
      "polybutylene pipe replacement saanich bc"
    ],
    "targetArea": "Saanich, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 15,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 49,
    "title": "Poly B Replacement Langford BC - Langford Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-langford",
    "primaryKeyword": "poly b replacement langford bc",
    "secondaryKeywords": [
      "poly b pipe replacement langford",
      "polybutylene pipe replacement langford bc"
    ],
    "targetArea": "Langford, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 290.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 50,
    "title": "Poly B Replacement Nanaimo - Nanaimo Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-nanaimo",
    "primaryKeyword": "poly b replacement nanaimo",
    "secondaryKeywords": [
      "poly b pipe replacement nanaimo",
      "polybutylene pipe replacement nanaimo"
    ],
    "targetArea": "Nanaimo, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 40,
    "keywordDifficulty": 0,
    "cpc": 310.0,
    "priority": "\ud83d\udd34 Top Priority",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 51,
    "title": "Poly B Replacement Courtenay BC - Courtenay Poly B Plumbing",
    "slug": "poly-b-replacement-courtenay",
    "primaryKeyword": "poly b pipe replacement courtenay",
    "secondaryKeywords": [
      "poly b replacement courtenay",
      "polybutylene pipe replacement courtenay bc"
    ],
    "targetArea": "Courtenay, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 270.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 52,
    "title": "Poly B Replacement Comox BC - Comox Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-comox",
    "primaryKeyword": "poly b pipe replacement comox",
    "secondaryKeywords": [
      "poly b replacement comox",
      "polybutylene pipe replacement comox bc"
    ],
    "targetArea": "Comox, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 260.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 53,
    "title": "Poly B Replacement Campbell River - Campbell River Poly B Plumbers",
    "slug": "poly-b-replacement-campbell-river",
    "primaryKeyword": "poly b pipe replacement campbell river",
    "secondaryKeywords": [
      "poly b replacement campbell river",
      "polybutylene pipe replacement campbell river bc"
    ],
    "targetArea": "Campbell River, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 260.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 54,
    "title": "Poly B Replacement Duncan BC - Duncan Poly B Pipe Replacement",
    "slug": "poly-b-replacement-duncan",
    "primaryKeyword": "poly b replacement duncan bc",
    "secondaryKeywords": [
      "poly b pipe replacement duncan",
      "polybutylene pipe replacement duncan bc"
    ],
    "targetArea": "Duncan, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 250.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 55,
    "title": "Poly B Replacement Parksville BC - Parksville Poly B Plumbers",
    "slug": "poly-b-replacement-parksville",
    "primaryKeyword": "poly b replacement parksville bc",
    "secondaryKeywords": [
      "poly b pipe replacement parksville",
      "polybutylene pipe replacement parksville bc"
    ],
    "targetArea": "Parksville, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 240.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 56,
    "title": "Poly B Replacement Sidney BC - Sidney Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-sidney",
    "primaryKeyword": "poly b replacement sidney bc",
    "secondaryKeywords": [
      "poly b pipe replacement sidney",
      "polybutylene pipe replacement sidney bc"
    ],
    "targetArea": "Sidney, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 240.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 57,
    "title": "Poly B Replacement Port Alberni BC - Port Alberni Poly B Plumbers",
    "slug": "poly-b-replacement-port-alberni",
    "primaryKeyword": "poly b replacement port alberni bc",
    "secondaryKeywords": [
      "poly b pipe replacement port alberni",
      "polybutylene pipe replacement port alberni bc"
    ],
    "targetArea": "Port Alberni, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 235.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 58,
    "title": "Poly B Replacement Kelowna - Kelowna Poly B Pipe Replacement Experts",
    "slug": "poly-b-replacement-kelowna",
    "primaryKeyword": "poly b replacement kelowna",
    "secondaryKeywords": [
      "poly b pipe replacement kelowna",
      "polybutylene pipe replacement kelowna"
    ],
    "targetArea": "Kelowna, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 20,
    "keywordDifficulty": 0,
    "cpc": 280.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 59,
    "title": "Poly B Replacement West Kelowna - West Kelowna Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-west-kelowna",
    "primaryKeyword": "poly b replacement west kelowna",
    "secondaryKeywords": [
      "poly b pipe replacement west kelowna",
      "polybutylene pipe replacement west kelowna"
    ],
    "targetArea": "West Kelowna, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 260.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 60,
    "title": "Poly B Replacement Penticton - Penticton Poly B Pipe Replacement",
    "slug": "poly-b-replacement-penticton",
    "primaryKeyword": "poly b replacement penticton",
    "secondaryKeywords": [
      "poly b pipe replacement penticton",
      "polybutylene pipe replacement penticton"
    ],
    "targetArea": "Penticton, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 250.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 61,
    "title": "Poly B Replacement Vernon BC - Vernon Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-vernon",
    "primaryKeyword": "poly b replacement vernon bc",
    "secondaryKeywords": [
      "poly b pipe replacement vernon",
      "polybutylene pipe replacement vernon bc"
    ],
    "targetArea": "Vernon, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 240.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 62,
    "title": "Poly B Replacement Kamloops - Kamloops Poly B Plumbing Experts",
    "slug": "poly-b-replacement-kamloops",
    "primaryKeyword": "poly b replacement kamloops",
    "secondaryKeywords": [
      "poly b pipe replacement kamloops",
      "polybutylene pipe replacement kamloops"
    ],
    "targetArea": "Kamloops, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 20,
    "keywordDifficulty": 0,
    "cpc": 265.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 63,
    "title": "Poly B Replacement Chilliwack - Chilliwack Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-chilliwack",
    "primaryKeyword": "poly b replacement chilliwack",
    "secondaryKeywords": [
      "poly b pipe replacement chilliwack",
      "polybutylene pipe replacement chilliwack"
    ],
    "targetArea": "Chilliwack, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 15,
    "keywordDifficulty": 0,
    "cpc": 255.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 64,
    "title": "Poly B Replacement Prince George - Prince George Poly B Plumbing",
    "slug": "poly-b-replacement-prince-george",
    "primaryKeyword": "poly b replacement prince george",
    "secondaryKeywords": [
      "poly b pipe replacement prince george",
      "polybutylene pipe replacement prince george bc"
    ],
    "targetArea": "Prince George, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 230.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 65,
    "title": "Poly B Replacement Cranbrook BC - Cranbrook Poly B Pipe Replacement",
    "slug": "poly-b-replacement-cranbrook",
    "primaryKeyword": "poly b replacement cranbrook bc",
    "secondaryKeywords": [
      "poly b pipe replacement cranbrook",
      "polybutylene pipe replacement cranbrook bc"
    ],
    "targetArea": "Cranbrook, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 220.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 66,
    "title": "Poly B Replacement Nelson BC - Nelson Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-nelson",
    "primaryKeyword": "poly b replacement nelson bc",
    "secondaryKeywords": [
      "poly b pipe replacement nelson",
      "polybutylene pipe replacement nelson bc"
    ],
    "targetArea": "Nelson, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 215.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 67,
    "title": "Poly B Replacement Trail BC - Trail Poly B Pipe Replacement",
    "slug": "poly-b-replacement-trail",
    "primaryKeyword": "poly b replacement trail bc",
    "secondaryKeywords": [
      "poly b pipe replacement trail",
      "polybutylene pipe replacement trail bc"
    ],
    "targetArea": "Trail, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 210.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 68,
    "title": "Poly B Replacement Fort St. John BC - Fort St. John Poly B Plumbers",
    "slug": "poly-b-replacement-fort-st-john",
    "primaryKeyword": "poly b replacement fort st john bc",
    "secondaryKeywords": [
      "poly b pipe replacement fort st john",
      "polybutylene pipe replacement fort st john bc"
    ],
    "targetArea": "Fort St. John, BC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 210.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 69,
    "title": "Poly B Replacement Calgary - Calgary's #1 Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-calgary",
    "primaryKeyword": "poly b replacement calgary",
    "secondaryKeywords": [
      "poly b replacement cost calgary",
      "calgary poly b replacement",
      "poly b plumbing calgary",
      "poly b pipe replacement calgary"
    ],
    "targetArea": "Calgary, AB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 650,
    "keywordDifficulty": 0,
    "cpc": 500.0,
    "priority": "\ud83d\udd34 Top Priority",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 70,
    "title": "Poly B Replacement Airdrie - Airdrie Poly B Pipe Replacement Specialists",
    "slug": "poly-b-replacement-airdrie",
    "primaryKeyword": "poly b replacement airdrie",
    "secondaryKeywords": [
      "poly b pipe replacement airdrie",
      "polybutylene pipe replacement airdrie"
    ],
    "targetArea": "Airdrie, AB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 20,
    "keywordDifficulty": 0,
    "cpc": 380.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 71,
    "title": "Poly B Replacement Okotoks - Okotoks Poly B Plumbing Experts",
    "slug": "poly-b-replacement-okotoks",
    "primaryKeyword": "poly b replacement okotoks",
    "secondaryKeywords": [
      "poly b pipe replacement okotoks",
      "polybutylene pipe replacement okotoks"
    ],
    "targetArea": "Okotoks, AB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 360.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 72,
    "title": "Poly B Replacement Cochrane AB - Cochrane Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-cochrane",
    "primaryKeyword": "poly b replacement cochrane ab",
    "secondaryKeywords": [
      "poly b pipe replacement cochrane",
      "polybutylene pipe replacement cochrane ab"
    ],
    "targetArea": "Cochrane, AB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 340.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 73,
    "title": "Poly B Replacement Chestermere - Chestermere Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-chestermere",
    "primaryKeyword": "poly b replacement chestermere",
    "secondaryKeywords": [
      "poly b pipe replacement chestermere",
      "polybutylene pipe replacement chestermere"
    ],
    "targetArea": "Chestermere, AB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 340.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 74,
    "title": "Poly B Replacement High River AB - High River Poly B Plumbers",
    "slug": "poly-b-replacement-high-river",
    "primaryKeyword": "poly b replacement high river ab",
    "secondaryKeywords": [
      "poly b pipe replacement high river",
      "polybutylene pipe replacement high river ab"
    ],
    "targetArea": "High River, AB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 310.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 75,
    "title": "Poly B Replacement Lethbridge - Lethbridge Poly B Plumbing Experts",
    "slug": "poly-b-replacement-lethbridge",
    "primaryKeyword": "poly b replacement lethbridge",
    "secondaryKeywords": [
      "poly b pipe replacement lethbridge",
      "polybutylene pipe replacement lethbridge"
    ],
    "targetArea": "Lethbridge, AB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 20,
    "keywordDifficulty": 0,
    "cpc": 310.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 76,
    "title": "Poly B Replacement Medicine Hat - Medicine Hat Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-medicine-hat",
    "primaryKeyword": "poly b replacement medicine hat",
    "secondaryKeywords": [
      "poly b pipe replacement medicine hat",
      "polybutylene pipe replacement medicine hat"
    ],
    "targetArea": "Medicine Hat, AB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 290.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 77,
    "title": "Poly B Replacement Red Deer - Red Deer Poly B Pipe Plumbing Specialists",
    "slug": "poly-b-replacement-red-deer",
    "primaryKeyword": "poly b replacement red deer",
    "secondaryKeywords": [
      "poly b pipe replacement red deer",
      "polybutylene pipe replacement red deer"
    ],
    "targetArea": "Red Deer, AB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 30,
    "keywordDifficulty": 0,
    "cpc": 320.0,
    "priority": "\ud83d\udd34 Top Priority",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 78,
    "title": "Poly B Replacement Canmore - Canmore Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-canmore",
    "primaryKeyword": "poly b replacement canmore",
    "secondaryKeywords": [
      "poly b pipe replacement canmore",
      "polybutylene pipe replacement canmore"
    ],
    "targetArea": "Canmore, AB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 250.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 79,
    "title": "Poly B Replacement Edmonton - Edmonton Poly B Pipe Plumbing Specialists",
    "slug": "poly-b-replacement-edmonton",
    "primaryKeyword": "poly b replacement edmonton",
    "secondaryKeywords": [
      "poly b plumbing replacement cost edmonton",
      "poly b pipe replacement edmonton",
      "polybutylene pipe replacement edmonton"
    ],
    "targetArea": "Edmonton, AB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 90,
    "keywordDifficulty": 0,
    "cpc": 350.0,
    "priority": "\ud83d\udd34 Top Priority",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 80,
    "title": "Poly B Replacement St. Albert - St. Albert Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-st-albert",
    "primaryKeyword": "poly b replacement st albert",
    "secondaryKeywords": [
      "poly b pipe replacement st albert",
      "polybutylene pipe replacement st albert"
    ],
    "targetArea": "St. Albert, AB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 15,
    "keywordDifficulty": 0,
    "cpc": 290.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 81,
    "title": "Poly B Replacement Sherwood Park - Sherwood Park Poly B Plumbers",
    "slug": "poly-b-replacement-sherwood-park",
    "primaryKeyword": "poly b replacement sherwood park",
    "secondaryKeywords": [
      "poly b pipe replacement sherwood park",
      "polybutylene pipe replacement sherwood park"
    ],
    "targetArea": "Sherwood Park, AB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 15,
    "keywordDifficulty": 0,
    "cpc": 290.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 82,
    "title": "Poly B Replacement Spruce Grove - Spruce Grove Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-spruce-grove",
    "primaryKeyword": "poly b replacement spruce grove",
    "secondaryKeywords": [
      "poly b pipe replacement spruce grove",
      "polybutylene pipe replacement spruce grove"
    ],
    "targetArea": "Spruce Grove, AB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 270.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 83,
    "title": "Poly B Replacement Leduc - Leduc Poly B Plumbing Experts",
    "slug": "poly-b-replacement-leduc",
    "primaryKeyword": "poly b replacement leduc",
    "secondaryKeywords": [
      "poly b pipe replacement leduc",
      "polybutylene pipe replacement leduc"
    ],
    "targetArea": "Leduc, AB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 260.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 84,
    "title": "Poly B Replacement Beaumont AB - Beaumont Poly B Pipe Replacement",
    "slug": "poly-b-replacement-beaumont",
    "primaryKeyword": "poly b replacement beaumont ab",
    "secondaryKeywords": [
      "poly b pipe replacement beaumont",
      "polybutylene pipe replacement beaumont ab"
    ],
    "targetArea": "Beaumont, AB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 250.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 85,
    "title": "Poly B Replacement Wetaskiwin - Wetaskiwin Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-wetaskiwin",
    "primaryKeyword": "poly b replacement wetaskiwin",
    "secondaryKeywords": [
      "poly b pipe replacement wetaskiwin",
      "polybutylene pipe replacement wetaskiwin ab"
    ],
    "targetArea": "Wetaskiwin, AB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 240.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 86,
    "title": "Poly B Replacement Grande Prairie - Grande Prairie Poly B Plumbers",
    "slug": "poly-b-replacement-grande-prairie",
    "primaryKeyword": "poly b replacement grande prairie",
    "secondaryKeywords": [
      "poly b pipe replacement grande prairie",
      "polybutylene pipe replacement grande prairie"
    ],
    "targetArea": "Grande Prairie, AB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 240.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 87,
    "title": "Poly B Replacement Fort McMurray - Fort Mac Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-fort-mcmurray",
    "primaryKeyword": "poly b replacement fort mcmurray",
    "secondaryKeywords": [
      "poly b pipe replacement fort mcmurray",
      "polybutylene pipe replacement fort mcmurray"
    ],
    "targetArea": "Fort McMurray, AB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 230.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 88,
    "title": "Poly B Replacement Cold Lake AB - Cold Lake Poly B Plumbing",
    "slug": "poly-b-replacement-cold-lake",
    "primaryKeyword": "poly b replacement cold lake ab",
    "secondaryKeywords": [
      "poly b pipe replacement cold lake",
      "polybutylene pipe replacement cold lake ab"
    ],
    "targetArea": "Cold Lake, AB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 220.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 89,
    "title": "Poly B Replacement Toronto - Toronto Poly B Pipe Plumbing Specialists",
    "slug": "poly-b-replacement-toronto",
    "primaryKeyword": "poly b replacement toronto",
    "secondaryKeywords": [
      "poly b pipe replacement toronto",
      "polybutylene pipe replacement toronto",
      "poly b plumbing toronto"
    ],
    "targetArea": "Toronto, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 40,
    "keywordDifficulty": 0,
    "cpc": 380.0,
    "priority": "\ud83d\udd34 Top Priority",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 90,
    "title": "Poly B Replacement Mississauga - Mississauga Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-mississauga",
    "primaryKeyword": "poly b replacement mississauga",
    "secondaryKeywords": [
      "poly b pipe replacement mississauga",
      "polybutylene pipe replacement mississauga"
    ],
    "targetArea": "Mississauga, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 20,
    "keywordDifficulty": 0,
    "cpc": 340.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 91,
    "title": "Poly B Replacement Brampton - Brampton Poly B Pipe Plumbing Specialists",
    "slug": "poly-b-replacement-brampton",
    "primaryKeyword": "poly b replacement brampton",
    "secondaryKeywords": [
      "poly b pipe replacement brampton",
      "polybutylene pipe replacement brampton"
    ],
    "targetArea": "Brampton, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 15,
    "keywordDifficulty": 0,
    "cpc": 320.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 92,
    "title": "Poly B Replacement Markham - Markham Poly B Plumbing Experts",
    "slug": "poly-b-replacement-markham",
    "primaryKeyword": "poly b replacement markham",
    "secondaryKeywords": [
      "poly b pipe replacement markham",
      "polybutylene pipe replacement markham"
    ],
    "targetArea": "Markham, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 15,
    "keywordDifficulty": 0,
    "cpc": 310.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 93,
    "title": "Poly B Replacement Vaughan - Vaughan Poly B Pipe Replacement",
    "slug": "poly-b-replacement-vaughan",
    "primaryKeyword": "poly b replacement vaughan",
    "secondaryKeywords": [
      "poly b pipe replacement vaughan",
      "polybutylene pipe replacement vaughan"
    ],
    "targetArea": "Vaughan, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 15,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 94,
    "title": "Poly B Replacement Richmond Hill - Richmond Hill Poly B Plumbers",
    "slug": "poly-b-replacement-richmond-hill",
    "primaryKeyword": "poly b replacement richmond hill",
    "secondaryKeywords": [
      "poly b pipe replacement richmond hill",
      "polybutylene pipe replacement richmond hill on"
    ],
    "targetArea": "Richmond Hill, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 15,
    "keywordDifficulty": 0,
    "cpc": 305.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 95,
    "title": "Poly B Replacement Newmarket - Newmarket Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-newmarket",
    "primaryKeyword": "poly b replacement newmarket",
    "secondaryKeywords": [
      "poly b pipe replacement newmarket",
      "polybutylene pipe replacement newmarket on"
    ],
    "targetArea": "Newmarket, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 285.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 96,
    "title": "Poly B Replacement Aurora - Aurora Poly B Pipe Replacement",
    "slug": "poly-b-replacement-aurora",
    "primaryKeyword": "poly b replacement aurora on",
    "secondaryKeywords": [
      "poly b pipe replacement aurora",
      "polybutylene pipe replacement aurora ontario"
    ],
    "targetArea": "Aurora, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 275.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 97,
    "title": "Poly B Replacement Oakville - Oakville Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-oakville",
    "primaryKeyword": "poly b replacement oakville",
    "secondaryKeywords": [
      "poly b pipe replacement oakville",
      "polybutylene pipe replacement oakville"
    ],
    "targetArea": "Oakville, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 15,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 98,
    "title": "Poly B Replacement Burlington - Burlington Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-burlington",
    "primaryKeyword": "poly b replacement burlington",
    "secondaryKeywords": [
      "poly b pipe replacement burlington",
      "polybutylene pipe replacement burlington"
    ],
    "targetArea": "Burlington, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 290.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 99,
    "title": "Poly B Replacement Milton - Milton Poly B Plumbing Experts",
    "slug": "poly-b-replacement-milton",
    "primaryKeyword": "poly b replacement milton on",
    "secondaryKeywords": [
      "poly b pipe replacement milton",
      "polybutylene pipe replacement milton ontario"
    ],
    "targetArea": "Milton, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 275.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 100,
    "title": "Poly B Replacement Ajax - Ajax Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-ajax",
    "primaryKeyword": "poly b replacement ajax on",
    "secondaryKeywords": [
      "poly b pipe replacement ajax",
      "polybutylene pipe replacement ajax ontario"
    ],
    "targetArea": "Ajax, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 265.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 101,
    "title": "Poly B Replacement Pickering - Pickering Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-pickering",
    "primaryKeyword": "poly b replacement pickering on",
    "secondaryKeywords": [
      "poly b pipe replacement pickering",
      "polybutylene pipe replacement pickering ontario"
    ],
    "targetArea": "Pickering, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 265.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 102,
    "title": "Poly B Replacement Whitby - Whitby Poly B Plumbing Experts",
    "slug": "poly-b-replacement-whitby",
    "primaryKeyword": "poly b replacement whitby on",
    "secondaryKeywords": [
      "poly b pipe replacement whitby",
      "polybutylene pipe replacement whitby ontario"
    ],
    "targetArea": "Whitby, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 260.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 103,
    "title": "Poly B Replacement Oshawa - Oshawa Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-oshawa",
    "primaryKeyword": "poly b replacement oshawa",
    "secondaryKeywords": [
      "poly b pipe replacement oshawa",
      "polybutylene pipe replacement oshawa"
    ],
    "targetArea": "Oshawa, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 270.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 104,
    "title": "Poly B Replacement Hamilton - Hamilton Poly B Pipe Plumbing Experts",
    "slug": "poly-b-replacement-hamilton",
    "primaryKeyword": "poly b replacement hamilton",
    "secondaryKeywords": [
      "poly b pipe replacement hamilton",
      "polybutylene pipe replacement hamilton"
    ],
    "targetArea": "Hamilton, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 15,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 105,
    "title": "Poly B Replacement St. Catharines - St. Catharines Poly B Plumbing",
    "slug": "poly-b-replacement-st-catharines",
    "primaryKeyword": "poly b replacement st catharines",
    "secondaryKeywords": [
      "poly b pipe replacement st catharines",
      "polybutylene pipe replacement st catharines on"
    ],
    "targetArea": "St. Catharines, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 270.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 106,
    "title": "Poly B Replacement Niagara Falls - Niagara Falls Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-niagara-falls",
    "primaryKeyword": "poly b replacement niagara falls on",
    "secondaryKeywords": [
      "poly b pipe replacement niagara falls",
      "polybutylene pipe replacement niagara falls ontario"
    ],
    "targetArea": "Niagara Falls, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 265.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 107,
    "title": "Poly B Replacement Kitchener - Kitchener Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-kitchener",
    "primaryKeyword": "poly b replacement kitchener",
    "secondaryKeywords": [
      "poly b pipe replacement kitchener",
      "polybutylene pipe replacement kitchener"
    ],
    "targetArea": "Kitchener, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 280.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 108,
    "title": "Poly B Replacement Waterloo - Waterloo Poly B Pipe Replacement",
    "slug": "poly-b-replacement-waterloo",
    "primaryKeyword": "poly b replacement waterloo",
    "secondaryKeywords": [
      "poly b pipe replacement waterloo",
      "polybutylene pipe replacement waterloo"
    ],
    "targetArea": "Waterloo, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 270.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 109,
    "title": "Poly B Replacement Cambridge - Cambridge Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-cambridge",
    "primaryKeyword": "poly b replacement cambridge on",
    "secondaryKeywords": [
      "poly b pipe replacement cambridge",
      "polybutylene pipe replacement cambridge ontario"
    ],
    "targetArea": "Cambridge, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 265.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 110,
    "title": "Poly B Replacement Guelph - Guelph Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-guelph",
    "primaryKeyword": "poly b replacement guelph",
    "secondaryKeywords": [
      "poly b pipe replacement guelph",
      "polybutylene pipe replacement guelph"
    ],
    "targetArea": "Guelph, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 265.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 111,
    "title": "Poly B Replacement London Ontario - London ON Poly B Plumbing",
    "slug": "poly-b-replacement-london-ontario",
    "primaryKeyword": "poly b replacement london ontario",
    "secondaryKeywords": [
      "poly b pipe replacement london on",
      "polybutylene pipe replacement london ontario"
    ],
    "targetArea": "London, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 15,
    "keywordDifficulty": 0,
    "cpc": 285.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 112,
    "title": "Poly B Replacement Windsor Ontario - Windsor Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-windsor",
    "primaryKeyword": "poly b replacement windsor ontario",
    "secondaryKeywords": [
      "poly b pipe replacement windsor",
      "polybutylene pipe replacement windsor on"
    ],
    "targetArea": "Windsor, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 260.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 113,
    "title": "Poly B Replacement Sarnia - Sarnia Poly B Plumbing Experts",
    "slug": "poly-b-replacement-sarnia",
    "primaryKeyword": "poly b replacement sarnia on",
    "secondaryKeywords": [
      "poly b pipe replacement sarnia",
      "polybutylene pipe replacement sarnia ontario"
    ],
    "targetArea": "Sarnia, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 245.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 114,
    "title": "Poly B Replacement Ottawa - Ottawa Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-ottawa",
    "primaryKeyword": "poly b replacement ottawa",
    "secondaryKeywords": [
      "poly b pipe replacement ottawa",
      "polybutylene pipe replacement ottawa",
      "poly b plumbing ottawa"
    ],
    "targetArea": "Ottawa, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 30,
    "keywordDifficulty": 0,
    "cpc": 340.0,
    "priority": "\ud83d\udd34 Top Priority",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 115,
    "title": "Poly B Replacement Kanata - Kanata Poly B Pipe Plumbing Specialists",
    "slug": "poly-b-replacement-kanata",
    "primaryKeyword": "poly b replacement kanata on",
    "secondaryKeywords": [
      "poly b pipe replacement kanata",
      "polybutylene pipe replacement kanata ottawa"
    ],
    "targetArea": "Kanata, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 300.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 116,
    "title": "Poly B Replacement Barrie - Barrie Poly B Plumbing Experts",
    "slug": "poly-b-replacement-barrie",
    "primaryKeyword": "poly b replacement barrie",
    "secondaryKeywords": [
      "poly b pipe replacement barrie",
      "polybutylene pipe replacement barrie"
    ],
    "targetArea": "Barrie, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 265.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 117,
    "title": "Poly B Replacement Kingston Ontario - Kingston Poly B Pipe Replacement",
    "slug": "poly-b-replacement-kingston",
    "primaryKeyword": "poly b replacement kingston ontario",
    "secondaryKeywords": [
      "poly b pipe replacement kingston",
      "polybutylene pipe replacement kingston on"
    ],
    "targetArea": "Kingston, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 255.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 118,
    "title": "Poly B Replacement Orillia - Orillia Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-orillia",
    "primaryKeyword": "poly b plumbing orillia",
    "secondaryKeywords": [
      "poly b replacement orillia",
      "poly b pipe replacement orillia",
      "polybutylene pipe replacement orillia"
    ],
    "targetArea": "Orillia, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 400.0,
    "priority": "\ud83d\udd34 Top Priority",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 119,
    "title": "Poly B Replacement Peterborough - Peterborough Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-peterborough",
    "primaryKeyword": "poly b replacement peterborough",
    "secondaryKeywords": [
      "poly b pipe replacement peterborough",
      "polybutylene pipe replacement peterborough"
    ],
    "targetArea": "Peterborough, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 260.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 120,
    "title": "Poly B Replacement Belleville - Belleville Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-belleville",
    "primaryKeyword": "poly b replacement belleville on",
    "secondaryKeywords": [
      "poly b pipe replacement belleville",
      "polybutylene pipe replacement belleville ontario"
    ],
    "targetArea": "Belleville, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 245.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 121,
    "title": "Poly B Replacement Sudbury - Sudbury Poly B Plumbing Experts",
    "slug": "poly-b-replacement-sudbury",
    "primaryKeyword": "poly b replacement sudbury",
    "secondaryKeywords": [
      "poly b pipe replacement sudbury",
      "polybutylene pipe replacement sudbury"
    ],
    "targetArea": "Sudbury, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 245.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 122,
    "title": "Poly B Replacement Thunder Bay - Thunder Bay Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-thunder-bay",
    "primaryKeyword": "poly b replacement thunder bay",
    "secondaryKeywords": [
      "poly b pipe replacement thunder bay",
      "polybutylene pipe replacement thunder bay"
    ],
    "targetArea": "Thunder Bay, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 235.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 123,
    "title": "Poly B Replacement Sault Ste. Marie - SSM Poly B Plumbing",
    "slug": "poly-b-replacement-sault-ste-marie",
    "primaryKeyword": "poly b replacement sault ste marie on",
    "secondaryKeywords": [
      "poly b pipe replacement sault ste marie",
      "polybutylene pipe replacement sault ste marie"
    ],
    "targetArea": "Sault Ste. Marie, ON",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 230.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 124,
    "title": "Poly B Replacement Montreal - Montreal Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-montreal",
    "primaryKeyword": "poly b replacement montreal",
    "secondaryKeywords": [
      "poly b pipe replacement montreal",
      "polybutylene pipe replacement montreal",
      "poly b plumbing montreal qc"
    ],
    "targetArea": "Montreal, QC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 30,
    "keywordDifficulty": 0,
    "cpc": 320.0,
    "priority": "\ud83d\udd34 Top Priority",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 125,
    "title": "Poly B Replacement Laval - Laval Poly B Pipe Plumbing Specialists",
    "slug": "poly-b-replacement-laval",
    "primaryKeyword": "poly b replacement laval qc",
    "secondaryKeywords": [
      "poly b pipe replacement laval",
      "polybutylene pipe replacement laval qc"
    ],
    "targetArea": "Laval, QC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 15,
    "keywordDifficulty": 0,
    "cpc": 280.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 126,
    "title": "Poly B Replacement Longueuil - Longueuil Poly B Plumbing Experts",
    "slug": "poly-b-replacement-longueuil",
    "primaryKeyword": "poly b replacement longueuil qc",
    "secondaryKeywords": [
      "poly b pipe replacement longueuil",
      "polybutylene pipe replacement longueuil qc"
    ],
    "targetArea": "Longueuil, QC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 265.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 127,
    "title": "Poly B Replacement Brossard - Brossard Poly B Pipe Replacement",
    "slug": "poly-b-replacement-brossard",
    "primaryKeyword": "poly b replacement brossard qc",
    "secondaryKeywords": [
      "poly b pipe replacement brossard",
      "polybutylene pipe replacement brossard qc"
    ],
    "targetArea": "Brossard, QC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 255.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 128,
    "title": "Poly B Replacement Gatineau - Gatineau Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-gatineau",
    "primaryKeyword": "poly b replacement gatineau",
    "secondaryKeywords": [
      "poly b pipe replacement gatineau",
      "polybutylene pipe replacement gatineau qc",
      "poly b plumbing ottawa gatineau"
    ],
    "targetArea": "Gatineau, QC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 15,
    "keywordDifficulty": 0,
    "cpc": 270.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 129,
    "title": "Poly B Replacement Quebec City - Quebec City Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-quebec-city",
    "primaryKeyword": "poly b replacement quebec city",
    "secondaryKeywords": [
      "poly b pipe replacement quebec city",
      "polybutylene pipe replacement quebec city qc"
    ],
    "targetArea": "Quebec City, QC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 15,
    "keywordDifficulty": 0,
    "cpc": 265.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 130,
    "title": "Poly B Replacement L\u00e9vis - L\u00e9vis Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-levis",
    "primaryKeyword": "poly b replacement levis qc",
    "secondaryKeywords": [
      "poly b pipe replacement levis",
      "polybutylene pipe replacement levis qc"
    ],
    "targetArea": "L\u00e9vis, QC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 245.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 131,
    "title": "Poly B Replacement Sherbrooke - Sherbrooke Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-sherbrooke",
    "primaryKeyword": "poly b replacement sherbrooke qc",
    "secondaryKeywords": [
      "poly b pipe replacement sherbrooke",
      "polybutylene pipe replacement sherbrooke qc"
    ],
    "targetArea": "Sherbrooke, QC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 240.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 132,
    "title": "Poly B Replacement Saguenay - Saguenay Poly B Plumbing Experts",
    "slug": "poly-b-replacement-saguenay",
    "primaryKeyword": "poly b replacement saguenay qc",
    "secondaryKeywords": [
      "poly b pipe replacement saguenay",
      "polybutylene pipe replacement saguenay qc"
    ],
    "targetArea": "Saguenay, QC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 225.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 133,
    "title": "Poly B Replacement Trois-Rivi\u00e8res - Trois-Rivi\u00e8res Poly B Pipe Replacement",
    "slug": "poly-b-replacement-trois-rivieres",
    "primaryKeyword": "poly b replacement trois rivieres qc",
    "secondaryKeywords": [
      "poly b pipe replacement trois rivieres",
      "polybutylene pipe replacement trois-rivieres"
    ],
    "targetArea": "Trois-Rivi\u00e8res, QC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 220.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 134,
    "title": "Poly B Replacement Repentigny - Repentigny Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-repentigny",
    "primaryKeyword": "poly b replacement repentigny qc",
    "secondaryKeywords": [
      "poly b pipe replacement repentigny",
      "polybutylene pipe replacement repentigny qc"
    ],
    "targetArea": "Repentigny, QC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 215.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 135,
    "title": "Poly B Replacement Terrebonne - Terrebonne Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-terrebonne",
    "primaryKeyword": "poly b replacement terrebonne qc",
    "secondaryKeywords": [
      "poly b pipe replacement terrebonne",
      "polybutylene pipe replacement terrebonne qc"
    ],
    "targetArea": "Terrebonne, QC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 215.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 136,
    "title": "Poly B Replacement Blainville - Blainville Poly B Plumbing Experts",
    "slug": "poly-b-replacement-blainville",
    "primaryKeyword": "poly b replacement blainville qc",
    "secondaryKeywords": [
      "poly b pipe replacement blainville",
      "polybutylene pipe replacement blainville qc"
    ],
    "targetArea": "Blainville, QC",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 210.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 137,
    "title": "Poly B Replacement Saskatoon - Saskatoon Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-saskatoon",
    "primaryKeyword": "poly b replacement saskatoon",
    "secondaryKeywords": [
      "poly b pipe replacement saskatoon",
      "polybutylene pipe replacement saskatoon"
    ],
    "targetArea": "Saskatoon, SK",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 15,
    "keywordDifficulty": 0,
    "cpc": 240.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 138,
    "title": "Poly B Replacement Regina - Regina Poly B Pipe Plumbing Experts",
    "slug": "poly-b-replacement-regina",
    "primaryKeyword": "poly b replacement regina",
    "secondaryKeywords": [
      "poly b pipe replacement regina",
      "polybutylene pipe replacement regina"
    ],
    "targetArea": "Regina, SK",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 225.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 139,
    "title": "Poly B Replacement Prince Albert SK - Prince Albert Poly B Plumbers",
    "slug": "poly-b-replacement-prince-albert",
    "primaryKeyword": "poly b replacement prince albert sk",
    "secondaryKeywords": [
      "poly b pipe replacement prince albert",
      "polybutylene pipe replacement prince albert sk"
    ],
    "targetArea": "Prince Albert, SK",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 210.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 140,
    "title": "Poly B Replacement Moose Jaw - Moose Jaw Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-moose-jaw",
    "primaryKeyword": "poly b replacement moose jaw",
    "secondaryKeywords": [
      "poly b pipe replacement moose jaw",
      "polybutylene pipe replacement moose jaw sk"
    ],
    "targetArea": "Moose Jaw, SK",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 210.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 141,
    "title": "Poly B Replacement Swift Current - Swift Current Poly B Plumbing",
    "slug": "poly-b-replacement-swift-current",
    "primaryKeyword": "poly b replacement swift current sk",
    "secondaryKeywords": [
      "poly b pipe replacement swift current",
      "polybutylene pipe replacement swift current sk"
    ],
    "targetArea": "Swift Current, SK",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 200.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 142,
    "title": "Poly B Replacement Yorkton - Yorkton Poly B Pipe Replacement",
    "slug": "poly-b-replacement-yorkton",
    "primaryKeyword": "poly b replacement yorkton sk",
    "secondaryKeywords": [
      "poly b pipe replacement yorkton",
      "polybutylene pipe replacement yorkton sk"
    ],
    "targetArea": "Yorkton, SK",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 195.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 143,
    "title": "Poly B Replacement Winnipeg - Winnipeg Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-winnipeg",
    "primaryKeyword": "poly b replacement winnipeg",
    "secondaryKeywords": [
      "poly b pipe replacement winnipeg",
      "polybutylene pipe replacement winnipeg"
    ],
    "targetArea": "Winnipeg, MB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 20,
    "keywordDifficulty": 0,
    "cpc": 270.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 144,
    "title": "Poly B Replacement Brandon MB - Brandon Poly B Plumbing Experts",
    "slug": "poly-b-replacement-brandon",
    "primaryKeyword": "poly b replacement brandon mb",
    "secondaryKeywords": [
      "poly b pipe replacement brandon",
      "polybutylene pipe replacement brandon mb"
    ],
    "targetArea": "Brandon, MB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 230.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 145,
    "title": "Poly B Replacement Steinbach MB - Steinbach Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-steinbach",
    "primaryKeyword": "poly b replacement steinbach mb",
    "secondaryKeywords": [
      "poly b pipe replacement steinbach",
      "polybutylene pipe replacement steinbach mb"
    ],
    "targetArea": "Steinbach, MB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 210.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 146,
    "title": "Poly B Replacement Portage la Prairie - Portage la Prairie Poly B Plumbing",
    "slug": "poly-b-replacement-portage-la-prairie",
    "primaryKeyword": "poly b replacement portage la prairie mb",
    "secondaryKeywords": [
      "poly b pipe replacement portage la prairie",
      "polybutylene pipe replacement portage la prairie"
    ],
    "targetArea": "Portage la Prairie, MB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 200.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 147,
    "title": "Poly B Replacement Thompson MB - Thompson Poly B Pipe Replacement",
    "slug": "poly-b-replacement-thompson",
    "primaryKeyword": "poly b replacement thompson mb",
    "secondaryKeywords": [
      "poly b pipe replacement thompson",
      "polybutylene pipe replacement thompson mb"
    ],
    "targetArea": "Thompson, MB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 195.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 148,
    "title": "Poly B Replacement Halifax - Halifax Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-halifax",
    "primaryKeyword": "poly b replacement halifax",
    "secondaryKeywords": [
      "poly b pipe replacement halifax",
      "polybutylene pipe replacement halifax ns"
    ],
    "targetArea": "Halifax, NS",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 15,
    "keywordDifficulty": 0,
    "cpc": 240.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 149,
    "title": "Poly B Replacement Dartmouth - Dartmouth NS Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-dartmouth",
    "primaryKeyword": "poly b replacement dartmouth ns",
    "secondaryKeywords": [
      "poly b pipe replacement dartmouth",
      "polybutylene pipe replacement dartmouth ns"
    ],
    "targetArea": "Dartmouth, NS",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 220.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 150,
    "title": "Poly B Replacement Sydney NS - Sydney Nova Scotia Poly B Plumbers",
    "slug": "poly-b-replacement-sydney-ns",
    "primaryKeyword": "poly b replacement sydney ns",
    "secondaryKeywords": [
      "poly b pipe replacement sydney nova scotia",
      "polybutylene pipe replacement sydney ns"
    ],
    "targetArea": "Sydney, NS",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 210.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 151,
    "title": "Poly B Replacement Truro NS - Truro Nova Scotia Poly B Plumbing",
    "slug": "poly-b-replacement-truro",
    "primaryKeyword": "poly b replacement truro ns",
    "secondaryKeywords": [
      "poly b pipe replacement truro",
      "polybutylene pipe replacement truro ns"
    ],
    "targetArea": "Truro, NS",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 205.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 152,
    "title": "Poly B Replacement Moncton - Moncton NB Poly B Plumbing Experts",
    "slug": "poly-b-replacement-moncton",
    "primaryKeyword": "poly b replacement moncton",
    "secondaryKeywords": [
      "poly b pipe replacement moncton",
      "polybutylene pipe replacement moncton nb"
    ],
    "targetArea": "Moncton, NB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 215.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 153,
    "title": "Poly B Replacement Fredericton - Fredericton Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-fredericton",
    "primaryKeyword": "poly b replacement fredericton",
    "secondaryKeywords": [
      "poly b pipe replacement fredericton",
      "polybutylene pipe replacement fredericton nb"
    ],
    "targetArea": "Fredericton, NB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 210.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 154,
    "title": "Poly B Replacement Saint John NB - Saint John Poly B Plumbing",
    "slug": "poly-b-replacement-saint-john-nb",
    "primaryKeyword": "poly b replacement saint john nb",
    "secondaryKeywords": [
      "poly b pipe replacement saint john",
      "polybutylene pipe replacement saint john nb"
    ],
    "targetArea": "Saint John, NB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 205.0,
    "priority": "\ud83d\udfe0 High",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 155,
    "title": "Poly B Replacement Dieppe NB - Dieppe Poly B Plumbing Specialists",
    "slug": "poly-b-replacement-dieppe",
    "primaryKeyword": "poly b replacement dieppe nb",
    "secondaryKeywords": [
      "poly b pipe replacement dieppe",
      "polybutylene pipe replacement dieppe nb"
    ],
    "targetArea": "Dieppe, NB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 200.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 156,
    "title": "Poly B Replacement Miramichi - Miramichi NB Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-miramichi",
    "primaryKeyword": "poly b replacement miramichi nb",
    "secondaryKeywords": [
      "poly b pipe replacement miramichi",
      "polybutylene pipe replacement miramichi nb"
    ],
    "targetArea": "Miramichi, NB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 195.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 157,
    "title": "Poly B Replacement Bathurst NB - Bathurst Poly B Plumbing Experts",
    "slug": "poly-b-replacement-bathurst-nb",
    "primaryKeyword": "poly b replacement bathurst nb",
    "secondaryKeywords": [
      "poly b pipe replacement bathurst",
      "polybutylene pipe replacement bathurst nb"
    ],
    "targetArea": "Bathurst, NB",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 190.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 158,
    "title": "Poly B Replacement Charlottetown - Charlottetown PEI Poly B Plumbers",
    "slug": "poly-b-replacement-charlottetown",
    "primaryKeyword": "poly b replacement charlottetown",
    "secondaryKeywords": [
      "poly b pipe replacement charlottetown",
      "polybutylene pipe replacement charlottetown pei"
    ],
    "targetArea": "Charlottetown, PEI",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 200.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 159,
    "title": "Poly B Replacement Summerside PEI - Summerside Poly B Plumbing",
    "slug": "poly-b-replacement-summerside",
    "primaryKeyword": "poly b replacement summerside pei",
    "secondaryKeywords": [
      "poly b pipe replacement summerside",
      "polybutylene pipe replacement summerside pei"
    ],
    "targetArea": "Summerside, PEI",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 190.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 160,
    "title": "Poly B Replacement St. John's NL - St. John's Newfoundland Poly B Plumbers",
    "slug": "poly-b-replacement-st-johns-nl",
    "primaryKeyword": "poly b replacement st johns nl",
    "secondaryKeywords": [
      "poly b pipe replacement st johns",
      "polybutylene pipe replacement st johns newfoundland"
    ],
    "targetArea": "St. John's, NL",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 200.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 161,
    "title": "Poly B Replacement Corner Brook NL - Corner Brook Poly B Plumbing",
    "slug": "poly-b-replacement-corner-brook",
    "primaryKeyword": "poly b replacement corner brook nl",
    "secondaryKeywords": [
      "poly b pipe replacement corner brook",
      "polybutylene pipe replacement corner brook nl"
    ],
    "targetArea": "Corner Brook, NL",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 185.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  },
  {
    "id": 162,
    "title": "Poly B Replacement Mount Pearl NL - Mount Pearl Poly B Pipe Plumbers",
    "slug": "poly-b-replacement-mount-pearl",
    "primaryKeyword": "poly b replacement mount pearl nl",
    "secondaryKeywords": [
      "poly b pipe replacement mount pearl",
      "polybutylene pipe replacement mount pearl nl"
    ],
    "targetArea": "Mount Pearl, NL",
    "pageType": "City Service Page",
    "searchIntent": "Transactional",
    "monthlyVolume": 10,
    "keywordDifficulty": 0,
    "cpc": 190.0,
    "priority": "\ud83d\udfe1 Medium",
    "ctaStrategy": "Call 1-888-702-2090"
  }
] as const satisfies PexPage[];

export const PAGE_TYPES = Array.from(new Set(PEX_PAGES.map((page) => page.pageType)));
export const TARGET_AREAS = Array.from(new Set(PEX_PAGES.map((page) => page.targetArea)));

const priorityWeight: Record<string, number> = {
  "\ud83d\udd34 Top Priority": 4,
  "\ud83d\udfe0 High": 3,
  "\ud83d\udfe1 Medium": 2,
  "\ud83d\udfe2 Lower": 1,
};

export function getPexPageBySlug(slug: string) {
  return PEX_PAGES.find((page) => page.slug === slug);
}

export function getPagesByType(pageType: string) {
  return PEX_PAGES.filter((page) => page.pageType === pageType);
}

export function getPagesByArea(targetArea: string) {
  return PEX_PAGES.filter((page) => page.targetArea === targetArea);
}

export function getTopPriorityPages(limit = 8) {
  return [...PEX_PAGES]
    .sort((a, b) => (priorityWeight[b.priority] ?? 0) - (priorityWeight[a.priority] ?? 0) || b.monthlyVolume - a.monthlyVolume)
    .slice(0, limit);
}

export function getRelatedPages(page: PexPage, limit = 6) {
  const sameArea = PEX_PAGES.filter((item) => item.targetArea === page.targetArea && item.slug !== page.slug);
  const sameType = PEX_PAGES.filter((item) => item.pageType === page.pageType && item.slug !== page.slug);
  const merged = [...sameArea, ...sameType].filter(
    (item, index, arr) => arr.findIndex((candidate) => candidate.slug === item.slug) === index,
  );
  return merged.slice(0, limit);
}

export function buildCanonicalPath(slug: string) {
  return `/${slug}`;
}

type AreaInfo = {
  kind: "national" | "province" | "city";
  city?: string;
  province?: string;
  label: string;
};

const CLIMATE_BY_PROVINCE: Record<string, string> = {
  BC: "mild wet seasons and mountain-influenced rainfall patterns",
  AB: "cold winter snaps, chinook swings, and freeze-thaw pressure on older lines",
  SK: "long freeze seasons and significant winter ground movement",
  MB: "deep winter frost and short shoulder seasons with rapid temperature shifts",
  ON: "freeze-thaw cycles and seasonal moisture changes across mixed soil conditions",
  QC: "cold winters, spring thaw, and moisture movement that can stress aging piping",
  NS: "Atlantic humidity, coastal rain, and seasonal temperature swings",
  NB: "coastal-inland weather variation and winter freezing conditions",
  NL: "coastal wind exposure, moisture, and extended cold-season freezing conditions",
  default: "seasonal temperature swings and weather-driven stress on aging plumbing systems",
};

const LANDMARK_STYLE_BY_PROVINCE: Record<string, string> = {
  BC: "major bridge corridors and town-centre redevelopment zones",
  AB: "rapid-growth suburbs and high-traffic commercial corridors",
  SK: "older central districts and expanding residential edges",
  MB: "mixed-density urban cores and surrounding suburban developments",
  ON: "historic neighbourhood blocks and fast-growing suburban communities",
  QC: "dense urban sectors and established residential boroughs",
  NS: "coastal neighbourhoods and inland residential corridors",
  NB: "river-adjacent districts and suburban expansion areas",
  NL: "coastal communities and built-up central service corridors",
  default: "busy civic corridors and older residential pockets",
};

const PILLAR_SLUGS = [
  "poly-b-replacement",
  "poly-b-to-pex-conversion",
  "pex-piping-installation",
  "polybutylene-pipe-replacement",
  "certified-poly-b-replacement-plumbers",
] as const;

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function trimToWordBoundary(input: string, max: number) {
  if (input.length <= max) {
    return input;
  }

  const words = input.split(" ");
  while (words.join(" ").length > max && words.length > 1) {
    words.pop();
  }

  const joined = words.join(" ").trim();
  if (joined.length <= max) {
    return joined;
  }

  return input.slice(0, max).trim();
}

function titleCase(input: string) {
  return input
    .split(" ")
    .map((word) => (word ? `${word[0].toUpperCase()}${word.slice(1)}` : word))
    .join(" ");
}

export function parseArea(targetArea: string): AreaInfo {
  if (targetArea === "Canada (National)") {
    return {
      kind: "national",
      label: "Canada",
    };
  }

  if (targetArea.includes(",")) {
    const [city, province] = targetArea.split(",").map((item) => item.trim());
    return {
      kind: "city",
      city,
      province,
      label: `${city}, ${province}`,
    };
  }

  return {
    kind: "province",
    label: targetArea,
  };
}

function locationToken(page: PexPage) {
  const area = parseArea(page.targetArea);
  if (area.kind === "city") {
    return area.city ?? area.label;
  }
  return area.label;
}

function keywordToPillarSlug(keyword: string) {
  const key = keyword.toLowerCase();
  if (key.includes("to pex")) {
    return "poly-b-to-pex-conversion";
  }
  if (key.includes("pex piping installation") || key.includes("pex pipe install") || key.includes("pex plumbing install")) {
    return "pex-piping-installation";
  }
  if (key.includes("polybutylene")) {
    return "polybutylene-pipe-replacement";
  }
  if (key.includes("certified poly b") || key.includes("near me")) {
    return "certified-poly-b-replacement-plumbers";
  }
  return "poly-b-replacement";
}

export function getRelevantPillarPage(page: PexPage) {
  const slug = keywordToPillarSlug(page.primaryKeyword);
  return PEX_PAGES.find((item) => item.slug === slug) ?? PEX_PAGES.find((item) => item.slug === "poly-b-replacement");
}

export function getCityPages() {
  return PEX_PAGES.filter((page) => page.pageType === "City Service Page");
}

export function getCityPagesForProvince(province: string, limit = 5) {
  return getCityPages().filter((page) => parseArea(page.targetArea).province === province).slice(0, limit);
}

export function getCityPagesForLinking(page: PexPage, limit = 5) {
  const area = parseArea(page.targetArea);
  if (area.kind === "city" && area.province) {
    const sameProvince = getCityPagesForProvince(area.province, limit + 2).filter((item) => item.slug !== page.slug);
    if (sameProvince.length >= 2) {
      return sameProvince.slice(0, limit);
    }
  }

  return getCityPages().filter((item) => item.slug !== page.slug).slice(0, limit);
}

export function getCrossServiceLinksForCity(page: PexPage, limit = 4) {
  const area = parseArea(page.targetArea);
  if (area.kind !== "city" || !area.city) {
    return [];
  }

  return PEX_PAGES
    .filter((item) => PILLAR_SLUGS.includes(item.slug as (typeof PILLAR_SLUGS)[number]))
    .slice(0, limit)
    .map((pillar) => ({
      href: `/${pillar.slug}`,
      anchor: `${titleCase(pillar.primaryKeyword)} ${area.city}`,
    }));
}

export function getPillarToCityLinks(pillar: PexPage) {
  void pillar;
  return getCityPages();
}

export function getLocationFacts(page: PexPage) {
  if (page.pageType !== "City Service Page") {
    return [];
  }

  const area = parseArea(page.targetArea);
  if (area.kind !== "city" || !area.city) {
    return [];
  }

  const province = area.province ?? "default";
  const climate = CLIMATE_BY_PROVINCE[province] ?? CLIMATE_BY_PROVINCE.default;
  const landmarkStyle = LANDMARK_STYLE_BY_PROVINCE[province] ?? LANDMARK_STYLE_BY_PROVINCE.default;

  return [
    `${area.city} includes older neighbourhood pockets near the core and newer suburban builds, so access planning can vary significantly from block to block.`,
    `In ${area.city}, homes around ${landmarkStyle} often require carefully timed shutoff windows to reduce disruption during occupied hours.`,
    `${area.city} serves a broad residential population mix, from established family streets to multi-unit housing, which can change fixture counts and restoration scope.`,
    `${area.city} experiences ${climate}, so repipe planning should account for seasonal scheduling and freeze-related risk windows.`,
  ];
}

export function buildSeoTitle(page: PexPage) {
  const brandSuffix = " | Pex Pipe Pros";
  const location = locationToken(page).replace(/[^a-zA-Z0-9\\s-]/g, "").replace(/\\s+/g, " ").trim();
  let keyword = page.primaryKeyword.trim();
  const includeLocation = !keyword.toLowerCase().includes(location.toLowerCase());
  const locationSuffix = includeLocation ? ` ${location}` : "";

  let title = `${keyword}${locationSuffix}${brandSuffix}`.replace(/\s+/g, " ").trim();
  if (title.length > 60) {
    const allowedKeywordLength = 60 - brandSuffix.length - locationSuffix.length;
    keyword = trimToWordBoundary(keyword, Math.max(18, allowedKeywordLength));
    title = `${keyword}${locationSuffix}${brandSuffix}`.replace(/\s+/g, " ").trim();
  }

  if (title.length < 50) {
    const fill = parseArea(page.targetArea).kind === "national" ? " licensed service" : " local service";
    title = `${keyword}${locationSuffix}${fill}${brandSuffix}`.replace(/\s+/g, " ").trim();
  }

  if (title.length > 60) {
    const allowedKeywordLength = 60 - brandSuffix.length - locationSuffix.length;
    keyword = trimToWordBoundary(keyword, Math.max(18, allowedKeywordLength));
    title = `${keyword}${locationSuffix}${brandSuffix}`.replace(/\s+/g, " ").trim();
  }

  if (title.length < 50) {
    title = `${keyword}${locationSuffix} repipe${brandSuffix}`.replace(/\s+/g, " ").trim();
  }

  return title;
}

export function buildMetaDescription(page: PexPage) {
  const location = locationToken(page).replace(/[^a-zA-Z0-9\\s-]/g, "").replace(/\\s+/g, " ").trim();
  const opener = `${page.primaryKeyword} ${location}: `;
  let body = "licensed repipe planning, clear pricing factors, and dependable local scheduling support. Call 1-888-702-2090 today.";
  let meta = `${opener}${body}`.replace(/\s+/g, " ").trim();

  if (meta.length > 160) {
    const allowed = 160 - opener.length;
    body = trimToWordBoundary(body, allowed - 1);
    meta = `${opener}${body}`.replace(/\s+/g, " ").trim();
  }

  if (meta.length < 150) {
    meta = `${meta} Get your inspection and scope options now.`.replace(/\s+/g, " ").trim();
  }

  if (meta.length > 160) {
    meta = trimToWordBoundary(meta, 160);
  }

  return trimMetaDescription(meta, 160);
}

export function buildMeta(page: PexPage): Metadata {
  const description = buildMetaDescription(page);
  return {
    title: buildSeoTitle(page),
    description,
    alternates: { canonical: buildCanonicalPath(page.slug) },
    openGraph: {
      title: buildSeoTitle(page),
      description,
      url: absoluteUrl(buildCanonicalPath(page.slug)),
      type: "website",
      siteName: SITE_NAME,
      images: [absoluteUrl("/pexpipepros-logo.webp")],
    },
    robots: { index: true, follow: true },
  };
}

export function getAreaLabel(area: string) {
  return area === "Canada (National)" ? "National" : area;
}

export function buildH1(page: PexPage) {
  const area = locationToken(page);
  return `${titleCase(page.primaryKeyword)} in ${area}`;
}

export function buildIntroParagraph(page: PexPage) {
  const area = locationToken(page);
  const priceHint = page.cpc > 0 ? `Typical lead-cost benchmarks around ${formatMoney(page.cpc)} help frame budgeting expectations, but site conditions still determine final project scope.` : "Budget planning is still best confirmed during inspection because access complexity and fixture count can change total scope.";

  return `${titleCase(page.primaryKeyword)} requests in ${area} are usually driven by homeowners who need fast clarity before minor plumbing risk becomes a disruptive repair event. This page explains how local scheduling, access planning, and phased installation decisions are typically handled so you can compare options with confidence. You will find practical guidance on timing, disruption control, restoration planning, and what to prepare before inspection day. ${priceHint} If your timeline is tight, call early so intake can route the right crew and secure the best available window.`;
}

export function buildKeywordSentence(page: PexPage) {
  const extras = page.secondaryKeywords.length > 0
    ? ` It also helps people compare ${page.secondaryKeywords.join(", ")} before booking.`
    : "";
  return `Homeowners researching ${page.primaryKeyword} usually want clear scope, realistic timing, and licensed installation standards.${extras}`;
}

export function buildFaqs(page: PexPage) {
  const area = locationToken(page);
  const keyword = page.primaryKeyword;
  const scopeHint = page.pageType.toLowerCase();

  return [
    {
      question: `How soon can ${keyword} service be arranged in ${area}?`,
      answer: `Availability changes by season and crew demand, but call triage can usually begin immediately so your ${scopeHint} request is routed to the appropriate licensed team.`,
    },
    {
      question: `What usually changes pricing for ${keyword} work in ${area}?`,
      answer: `Final pricing depends on home size, fixture count, pipe-run accessibility, restoration scope, and whether staged shutoff scheduling is required to reduce disruption.`,
    },
    {
      question: `Can ${keyword} projects in ${area} be scheduled with less disruption?`,
      answer: `Yes. Most projects are planned with phased windows, room-by-room protection, and clear restoration handoff steps so occupied households can manage downtime more predictably.`,
    },
    {
      question: `When is urgent follow-up recommended for ${keyword} concerns in ${area}?`,
      answer: `If symptoms are active, worsening, or causing repeated leaks, same-day or next-available assessment is recommended so escalation risk is managed early and safely.`,
    },
  ];
}

export function buildSchemas(page: PexPage) {
  const description = buildMetaDescription(page);
  const faqs = buildFaqs(page);
  const canonical = absoluteUrl(buildCanonicalPath(page.slug));
  const areaInfo = parseArea(page.targetArea);

  const schemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
        { "@type": "ListItem", position: 3, name: buildH1(page), item: canonical },
      ],
    },
  ];

  if (page.pageType === "City Service Page" || areaInfo.kind === "city") {
    schemas.push(
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: `${SITE_NAME} - ${page.targetArea}`,
        description,
        url: canonical,
        image: absoluteUrl("/pexpipepros-logo.webp"),
        areaServed: page.targetArea,
        priceRange: "$$",
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: page.pageType,
        provider: { "@type": "Organization", name: SITE_NAME },
        areaServed: page.targetArea,
        serviceType: "Residential repiping service",
      },
    );
  }

  return schemas;
}
