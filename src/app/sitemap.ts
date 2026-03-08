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

    // Guides
    { url: `${base}/guides/best-tech-stack-small-business-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/guides/vpn-for-remote-work`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/guides/ai-tools-save-time-small-business`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/guides/crm-buying-guide-small-business`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/guides/website-speed-optimization`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/guides/semrush-vs-ahrefs-freelance-seo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/guides/hubspot-vs-zoho-crm-small-business`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // Additional reviews
    { url: `${base}/reviews/best-laptop-small-business`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/reviews/best-standing-desk`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Tools
    { url: `${base}/tools/tech-stack-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Supporting pages
    { url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
