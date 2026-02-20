import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Business Tools — HPE Technology",
  description: "Free interactive tools to help you choose the right tech stack for your business. Tech Stack Builder, comparison calculators, and more.",
  alternates: { canonical: "https://www.hpe-technology.com/tools" },
};

export default function Tools() {
  return (
    <>
      <section className="article-hero">
        <div className="container">
          <span className="article-tag">Free Tools</span>
          <h1>Business Tech Tools</h1>
          <p style={{ fontSize: "1.1rem", marginTop: "var(--space-md)" }}>
            Interactive tools to help you make better technology decisions for your business.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="card-grid">
            <a href="/tools/tech-stack-calculator" className="card">
              <span className="card-tag">Popular</span>
              <h3>Tech Stack Builder</h3>
              <p>
                Select your business type and get personalized tool recommendations across
                hosting, email, SEO, security, and productivity.
              </p>
              <div className="card-meta">
                <span>Interactive Tool</span>
                <span className="read-more">Try It &rarr;</span>
              </div>
            </a>
            <div className="card" style={{ opacity: 0.6 }}>
              <span className="card-tag">Coming Soon</span>
              <h3>Hosting Cost Calculator</h3>
              <p>
                Calculate your real hosting costs based on traffic, storage needs, and
                required features. Compare plans across providers.
              </p>
              <div className="card-meta">
                <span>Interactive Tool</span>
                <span style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>Coming Soon</span>
              </div>
            </div>
            <div className="card" style={{ opacity: 0.6 }}>
              <span className="card-tag">Coming Soon</span>
              <h3>Email Marketing ROI Calculator</h3>
              <p>
                Estimate the ROI of your email marketing campaigns and compare platform
                costs at different subscriber counts.
              </p>
              <div className="card-meta">
                <span>Interactive Tool</span>
                <span style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
