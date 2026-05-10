import { getSiteUrl } from "@/lib/seo";

export function GET() {
  const siteUrl = getSiteUrl().replace(/\/$/, "");
  const crawlerGroups = [
    "*",
    "Googlebot",
    "Googlebot-Image",
    "Googlebot-News",
    "Googlebot-Video",
    "Google-Extended",
    "Bingbot",
    "Applebot",
    "DuckDuckBot",
    "YandexBot",
    "Baiduspider",
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "CCBot",
    "ClaudeBot",
    "anthropic-ai",
    "PerplexityBot",
    "Perplexity-User",
    "Bytespider",
    "AhrefsBot",
    "SemrushBot",
  ];

  const body = [
    ...crawlerGroups.flatMap((agent) => [`User-agent: ${agent}`, "Allow: /", ""]),
    `Host: ${siteUrl}`,
    `Sitemap: ${siteUrl}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
