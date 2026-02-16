"use client";

import { useState, FormEvent } from "react";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Independent Tech Reviews Since 2004</div>
            <h1>
              Find the Right <span className="highlight">Tech Stack</span> for
              Your Business
            </h1>
            <p>
              Unbiased comparisons, in-depth reviews, and expert recommendations
              for hosting, SaaS tools, AI platforms, and cybersecurity. No
              sponsored rankings — just data.
            </p>
            <div className="hero-buttons">
              <a href="#stack-builder" className="btn btn-primary">
                Build Your Stack &darr;
              </a>
              <a href="/comparisons" className="btn btn-secondary">
                Browse Comparisons
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1px",
              background: "var(--border)",
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
            }}
          >
            {[
              { num: "50+", label: "In-Depth Reviews" },
              { num: "2,900+", label: "Backlinks" },
              { num: "20+", label: "Years Online" },
              { num: "0", label: "Sponsored Rankings" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: "var(--bg-secondary)",
                  padding: "var(--space-xl) var(--space-lg)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "var(--accent)",
                    lineHeight: 1,
                    marginBottom: "4px",
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: "0.72rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "var(--text-muted)",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Calculator */}
      <section id="stack-builder">
        <div className="container">
          <div className="tool-section featured">
            <div className="section-header">
              <span className="section-label">Free Tool</span>
              <h2>Tech Stack Builder</h2>
              <p>
                Select your business type and we&apos;ll recommend the best tools
                for hosting, email, SEO, security, and productivity — with honest
                reviews of each.
              </p>
            </div>
            <TechStackCalculator />
          </div>
        </div>
      </section>

      {/* Latest Comparisons */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Head-to-Head</span>
            <h2>Latest Comparisons</h2>
            <p>
              Side-by-side breakdowns of the most popular business tools. Data-driven,
              no fluff.
            </p>
          </div>
          <div className="card-grid">
            <Card
              tag="Hosting"
              title="Liquid Web vs SiteGround: Which Is Better for Business?"
              excerpt="Enterprise managed hosting vs budget-friendly shared. We tested speed, uptime, and support to find the winner."
              readTime="11 min"
              href="/comparisons/liquid-web-vs-siteground"
            />
            <Card
              tag="SEO Tools"
              title="Semrush vs Ahrefs: The Definitive 2026 Comparison"
              excerpt="Two SEO powerhouses go head-to-head. We compare keyword research, backlink analysis, content tools, and pricing."
              readTime="14 min"
              href="/comparisons/semrush-vs-ahrefs"
            />
            <Card
              tag="Email"
              title="AWeber vs GetResponse vs ConvertKit: Best Email Platform"
              excerpt="Three popular email marketing platforms compared on automation, deliverability, templates, and pricing for small businesses."
              readTime="12 min"
              href="/comparisons/aweber-vs-getresponse-vs-convertkit"
            />
          </div>
        </div>
      </section>

      {/* Best-of Roundups */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Best Of 2026</span>
            <h2>Top Picks by Category</h2>
            <p>
              Our editors tested dozens of tools in each category. These are the ones
              worth your money.
            </p>
          </div>
          <div className="card-grid">
            <Card
              tag="Web Hosting"
              title="Best Web Hosting for Small Business (2026)"
              excerpt="We tested 15 hosts on speed, uptime, support, and value. From shared hosting to managed VPS, here are our picks."
              readTime="15 min"
              href="/reviews/best-web-hosting"
            />
            <Card
              tag="VPN"
              title="Best VPNs for Business: Speed, Security & Value"
              excerpt="NordVPN, Surfshark, ExpressVPN, and more tested for speed, no-log policies, and enterprise features."
              readTime="10 min"
              href="/reviews/best-vpn"
            />
            <Card
              tag="AI Tools"
              title="Best AI Tools for Business in 2026"
              excerpt="From AI writing assistants to code generation to customer service bots — the tools actually worth adopting."
              readTime="13 min"
              href="/ai/best-ai-tools"
            />
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="section-label">AI Directory</span>
            <h2>AI Tools &amp; Platforms</h2>
            <p>
              The AI landscape moves fast. We track the tools that matter for
              businesses — with honest assessments, not hype.
            </p>
          </div>
          <div className="card-grid">
            <Card
              tag="AI Writing"
              title="Best AI Writing Tools: Claude vs ChatGPT vs Gemini"
              excerpt="We put the top AI assistants through real business tasks — emails, reports, code, and creative work. Clear winner emerges."
              readTime="12 min"
              href="/ai/claude-vs-chatgpt-vs-gemini"
            />
            <Card
              tag="AI Coding"
              title="Best AI Code Assistants for Developers (2026)"
              excerpt="GitHub Copilot, Cursor, Claude Code, and more — tested on real codebases. Which one actually saves you time?"
              readTime="11 min"
              href="/ai/best-ai-code-assistants"
            />
            <Card
              tag="AI Marketing"
              title="AI Marketing Tools That Actually Work"
              excerpt="Cut through the noise. These AI tools for SEO, content, social media, and email marketing deliver real ROI."
              readTime="10 min"
              href="/ai/ai-marketing-tools"
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container">
          <span className="section-label">Weekly Intel</span>
          <h2>
            Stay Ahead of the <span style={{ color: "var(--accent)" }}>Stack</span>
          </h2>
          <p>
            One email per week: new tool reviews, deal alerts, and tech stack
            recommendations. No spam.
          </p>
          <NewsletterForm />
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center" }}>
        <div className="container">
          <h2>
            Ready to Upgrade Your{" "}
            <span style={{ color: "var(--accent)" }}>Tech Stack</span>?
          </h2>
          <p style={{ margin: "0 auto var(--space-xl)" }}>
            Use our free Tech Stack Builder to get personalized recommendations,
            or dive into our comparison library.
          </p>
          <div style={{ display: "flex", gap: "var(--space-md)", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#stack-builder" className="btn btn-primary">
              Build Your Stack
            </a>
            <a href="/comparisons" className="btn btn-secondary">
              All Comparisons
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/* ===== TECH STACK CALCULATOR ===== */
type StackRec = {
  category: string;
  name: string;
  desc: string;
  link: string;
  price: string;
};

const stacks: Record<string, StackRec[]> = {
  freelancer: [
    { category: "Hosting", name: "SiteGround", desc: "Fast, reliable shared hosting with great support", link: "/reviews/best-web-hosting#siteground", price: "From $2.99/mo" },
    { category: "Email Marketing", name: "ConvertKit", desc: "Built for creators. Simple automation, great deliverability", link: "/comparisons/aweber-vs-getresponse-vs-convertkit#convertkit", price: "Free up to 1,000 subs" },
    { category: "SEO", name: "Semrush", desc: "All-in-one SEO toolkit — keyword research, site audit, rank tracking", link: "/comparisons/semrush-vs-ahrefs", price: "From $139/mo" },
    { category: "VPN", name: "Surfshark", desc: "Unlimited devices, strong privacy, great value", link: "/reviews/best-vpn#surfshark", price: "From $2.49/mo" },
    { category: "AI Assistant", name: "Claude", desc: "Best for long-form writing, analysis, and code", link: "/ai/claude-vs-chatgpt-vs-gemini#claude", price: "Free / $20/mo Pro" },
  ],
  agency: [
    { category: "Hosting", name: "Liquid Web", desc: "Managed VPS with 100% uptime SLA. Enterprise-grade.", link: "/reviews/best-web-hosting#liquid-web", price: "From $15/mo" },
    { category: "Email Marketing", name: "GetResponse", desc: "Advanced automation, landing pages, webinars built in", link: "/comparisons/aweber-vs-getresponse-vs-convertkit#getresponse", price: "From $19/mo" },
    { category: "SEO", name: "Semrush", desc: "All-in-one SEO toolkit with agency-level features", link: "/comparisons/semrush-vs-ahrefs", price: "From $139/mo" },
    { category: "VPN", name: "NordVPN", desc: "Top security, dedicated IPs, business features", link: "/reviews/best-vpn#nordvpn", price: "From $3.59/mo" },
    { category: "Project Management", name: "Monday.com", desc: "Visual project management with automation and integrations", link: "/reviews/best-project-management", price: "Free / $9/seat/mo" },
  ],
  ecommerce: [
    { category: "Hosting", name: "Liquid Web", desc: "WooCommerce-optimized managed hosting", link: "/reviews/best-web-hosting#liquid-web", price: "From $15/mo" },
    { category: "Email Marketing", name: "AWeber", desc: "Ecommerce-ready with purchase tagging and abandoned cart", link: "/comparisons/aweber-vs-getresponse-vs-convertkit#aweber", price: "Free up to 500 subs" },
    { category: "SEO", name: "Semrush", desc: "Product keyword research and competitor analysis", link: "/comparisons/semrush-vs-ahrefs", price: "From $139/mo" },
    { category: "VPN", name: "NordVPN", desc: "Secure payment processing and customer data", link: "/reviews/best-vpn#nordvpn", price: "From $3.59/mo" },
    { category: "AI Assistant", name: "ChatGPT", desc: "Product descriptions, customer service, data analysis", link: "/ai/claude-vs-chatgpt-vs-gemini#chatgpt", price: "Free / $20/mo Plus" },
  ],
  startup: [
    { category: "Hosting", name: "SiteGround", desc: "Start cheap, scale up. Great for early-stage.", link: "/reviews/best-web-hosting#siteground", price: "From $2.99/mo" },
    { category: "Email Marketing", name: "ConvertKit", desc: "Free tier for first 1,000 subscribers", link: "/comparisons/aweber-vs-getresponse-vs-convertkit#convertkit", price: "Free up to 1,000 subs" },
    { category: "CRM", name: "HubSpot", desc: "Free CRM with marketing, sales, and service tools", link: "/reviews/best-crm", price: "Free / $20/mo Starter" },
    { category: "VPN", name: "Surfshark", desc: "Unlimited devices for the whole team", link: "/reviews/best-vpn#surfshark", price: "From $2.49/mo" },
    { category: "AI Assistant", name: "Claude", desc: "Best for strategy docs, code, and analysis", link: "/ai/claude-vs-chatgpt-vs-gemini#claude", price: "Free / $20/mo Pro" },
  ],
};

function TechStackCalculator() {
  const [bizType, setBizType] = useState("");
  const [results, setResults] = useState<StackRec[] | null>(null);
  const [showError, setShowError] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!bizType) {
      setShowError(true);
      return;
    }
    setShowError(false);
    setResults(stacks[bizType] || null);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="tool-form">
          <div className="form-group">
            <label htmlFor="biz-type">What type of business are you?</label>
            <select
              id="biz-type"
              value={bizType}
              onChange={(e) => {
                setBizType(e.target.value);
                setResults(null);
                setShowError(false);
              }}
            >
              <option value="">Select your business type...</option>
              <option value="freelancer">Freelancer / Solo Creator</option>
              <option value="agency">Agency / Consultancy</option>
              <option value="ecommerce">E-commerce / Online Store</option>
              <option value="startup">Startup / Small Business</option>
            </select>
            {showError && (
              <p style={{ color: "#ef4444", fontSize: "0.82rem", marginTop: "var(--space-sm)" }}>
                Please select a business type first.
              </p>
            )}
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "var(--space-xl)" }}>
          <button type="submit" className="btn btn-primary">
            Get My Recommendations
          </button>
        </div>
      </form>

      {results && (
        <div className="stack-results">
          <h3 style={{ marginBottom: "var(--space-sm)", fontSize: "1.2rem" }}>
            Your Recommended Stack
          </h3>
          <p style={{ marginBottom: "var(--space-lg)", fontSize: "0.85rem" }}>
            Based on your business type, here are our top picks in each category.
            Click any tool to read our full review.
          </p>
          {results.map((r) => (
            <a href={r.link} key={r.category} className="stack-item" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="stack-item-info">
                <span className="stack-category">{r.category}</span>
                <span className="stack-name">{r.name}</span>
                <span className="stack-desc">{r.desc}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
                <span style={{ fontSize: "0.82rem", color: "var(--accent)", fontWeight: 600 }}>
                  {r.price}
                </span>
                <span className="table-btn">Read Review</span>
              </div>
            </a>
          ))}
          <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "var(--space-md)" }}>
            Some links are affiliate links. We may earn a commission at no extra cost to you.
            Our recommendations are based on independent testing.
          </p>
        </div>
      )}
    </>
  );
}

/* ===== CARD COMPONENT ===== */
function Card({
  tag,
  title,
  excerpt,
  readTime,
  href,
}: {
  tag: string;
  title: string;
  excerpt: string;
  readTime: string;
  href: string;
}) {
  return (
    <a href={href} className="card">
      <span className="card-tag">{tag}</span>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <div className="card-meta">
        <span>{readTime} read</span>
        <span className="read-more">Read More &rarr;</span>
      </div>
    </a>
  );
}

/* ===== NEWSLETTER FORM ===== */
function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/bigbricey@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          _subject: "New HPE Technology subscriber!",
          _template: "table",
        }),
      });
      if (res.ok) { setStatus("success"); setEmail(""); }
      else { setStatus("error"); }
    } catch { setStatus("error"); }
  }

  if (status === "success") {
    return <div className="newsletter-success">You&apos;re in! Weekly tech intel coming your way.</div>;
  }

  return (
    <>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email address"
        />
        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Joining..." : "Subscribe Free"}
        </button>
      </form>
      {status === "error" && (
        <div style={{ color: "var(--red)", fontSize: "0.82rem", marginTop: "var(--space-sm)" }}>
          Something went wrong. Try again.
        </div>
      )}
      <div className="newsletter-note">No spam. Unsubscribe anytime.</div>
    </>
  );
}
