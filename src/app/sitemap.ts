import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.hpe-technology.com";
  const now = new Date().toISOString();

  return [
    // Homepage
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },

    // Index pages
    { url: `${base}/comparisons`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/reviews`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/ai`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/tools`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Comparison articles
    { url: `${base}/comparisons/liquid-web-vs-siteground`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/comparisons/semrush-vs-ahrefs`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/comparisons/aweber-vs-getresponse-vs-convertkit`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Review roundups
    { url: `${base}/reviews/best-web-hosting`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/reviews/best-vpn`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/reviews/best-project-management`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/reviews/best-crm`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // AI tools
    { url: `${base}/ai/best-ai-tools`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/ai/claude-vs-chatgpt-vs-gemini`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/ai/best-ai-code-assistants`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/ai/ai-marketing-tools`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Supporting pages
    { url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
