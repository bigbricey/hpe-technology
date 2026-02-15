import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Comparisons — HPE Technology",
  description: "Head-to-head comparisons of the most popular business tools. Hosting, SEO, email marketing, VPNs, and more — tested and compared with real data.",
  alternates: { canonical: "https://www.hpe-technology.com/comparisons" },
};

const comparisons = [
  { tag: "Hosting", title: "Liquid Web vs SiteGround: Which Is Better for Business?", excerpt: "Enterprise managed hosting vs budget-friendly shared. We tested speed, uptime, and support.", readTime: "11 min", href: "/comparisons/liquid-web-vs-siteground" },
  { tag: "SEO Tools", title: "Semrush vs Ahrefs: The Definitive 2026 Comparison", excerpt: "Two SEO powerhouses compared on keyword research, backlink analysis, content tools, and pricing.", readTime: "14 min", href: "/comparisons/semrush-vs-ahrefs" },
  { tag: "Email Marketing", title: "AWeber vs GetResponse vs ConvertKit: Best Email Platform", excerpt: "Three popular platforms compared on automation, deliverability, templates, and pricing.", readTime: "12 min", href: "/comparisons/aweber-vs-getresponse-vs-convertkit" },
];

export default function Comparisons() {
  return (
    <>
      <section className="article-hero">
        <div className="container">
          <span className="article-tag">Comparisons</span>
          <h1>Head-to-Head Comparisons</h1>
          <p style={{ fontSize: "1.1rem", marginTop: "var(--space-md)" }}>
            Side-by-side breakdowns of the most popular business tools. Data-driven, no
            sponsored rankings, no fluff.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="card-grid">
            {comparisons.map((c) => (
              <a key={c.href} href={c.href} className="card">
                <span className="card-tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <p>{c.excerpt}</p>
                <div className="card-meta">
                  <span>{c.readTime} read</span>
                  <span className="read-more">Read More &rarr;</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
