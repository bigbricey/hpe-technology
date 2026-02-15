import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Reviews — HPE Technology",
  description: "In-depth reviews and best-of roundups for business software. Web hosting, VPNs, project management, CRM, and more — independently tested.",
  alternates: { canonical: "https://www.hpe-technology.com/reviews" },
};

const reviews = [
  { tag: "Web Hosting", title: "Best Web Hosting for Small Business (2026)", excerpt: "We tested 15 hosts on speed, uptime, support, and value. From shared hosting to managed VPS.", readTime: "15 min", href: "/reviews/best-web-hosting" },
  { tag: "VPN", title: "Best VPNs for Business: Speed, Security & Value", excerpt: "NordVPN, Surfshark, ExpressVPN, and more tested for speed, no-log policies, and enterprise features.", readTime: "10 min", href: "/reviews/best-vpn" },
  { tag: "Project Management", title: "Best Project Management Tools (2026)", excerpt: "Monday.com, Asana, Trello, ClickUp, and Notion compared for teams of all sizes.", readTime: "12 min", href: "/reviews/best-project-management" },
  { tag: "CRM", title: "Best CRM Software for Small Business (2026)", excerpt: "HubSpot, Salesforce, Pipedrive, and more. Find the CRM that fits your sales workflow.", readTime: "11 min", href: "/reviews/best-crm" },
];

export default function Reviews() {
  return (
    <>
      <section className="article-hero">
        <div className="container">
          <span className="article-tag">Reviews</span>
          <h1>Software Reviews &amp; Roundups</h1>
          <p style={{ fontSize: "1.1rem", marginTop: "var(--space-md)" }}>
            We test dozens of tools in each category so you don&apos;t have to.
            Independent, data-driven reviews for businesses.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="card-grid">
            {reviews.map((r) => (
              <a key={r.href} href={r.href} className="card">
                <span className="card-tag">{r.tag}</span>
                <h3>{r.title}</h3>
                <p>{r.excerpt}</p>
                <div className="card-meta">
                  <span>{r.readTime} read</span>
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
