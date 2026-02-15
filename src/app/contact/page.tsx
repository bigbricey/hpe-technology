import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — HPE Technology",
  description: "Get in touch with the HPE Technology team. Questions, corrections, partnership inquiries, and feedback welcome.",
  alternates: { canonical: "https://www.hpe-technology.com/contact" },
};

export default function Contact() {
  return (
    <>
      <section className="article-hero">
        <div className="container">
          <span className="article-tag">Contact</span>
          <h1>Get in Touch</h1>
          <p style={{ fontSize: "1.1rem", marginTop: "var(--space-md)" }}>
            Questions about a review? Found an error? Want to suggest a product for us to test?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="article-content">
            <h2>Email Us</h2>
            <p>
              The fastest way to reach us is by email:
            </p>
            <p>
              <a href="mailto:hello@hpe-technology.com" style={{ fontSize: "1.1rem", fontWeight: 600 }}>
                hello@hpe-technology.com
              </a>
            </p>

            <h2>What We Can Help With</h2>
            <ul>
              <li><strong>Review corrections:</strong> If we got something wrong, tell us. We&apos;ll verify and update.</li>
              <li><strong>Product suggestions:</strong> Want us to review a specific tool? Let us know.</li>
              <li><strong>General questions:</strong> Need help choosing between two products? Ask away.</li>
              <li><strong>Partnership inquiries:</strong> We&apos;re selective but open to working with quality tech companies.</li>
            </ul>

            <h2>Response Time</h2>
            <p>
              We aim to respond to all emails within 48 hours. For urgent corrections to
              published reviews, we prioritize faster turnaround.
            </p>

            <div style={{
              marginTop: "var(--space-xl)",
              padding: "var(--space-xl)",
              background: "var(--bg-secondary)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
            }}>
              <h3 style={{ marginBottom: "var(--space-md)" }}>A Note on PR Pitches</h3>
              <p style={{ fontSize: "0.88rem" }}>
                We receive many requests to review products or publish sponsored content.
                We only review products we believe are genuinely useful for our readers,
                and we never publish sponsored reviews. Our editorial independence is
                non-negotiable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
