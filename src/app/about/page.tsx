import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About HPE Technology — Independent Tech Reviews Since 2004",
  description: "HPE Technology provides unbiased, data-driven reviews and comparisons of business software, hosting, AI tools, and cybersecurity solutions.",
  alternates: { canonical: "https://www.hpe-technology.com/about" },
};

export default function About() {
  return (
    <>
      <section className="article-hero">
        <div className="container">
          <span className="article-tag">About Us</span>
          <h1>Independent Tech Reviews Since 2004</h1>
          <p style={{ fontSize: "1.1rem", marginTop: "var(--space-md)" }}>
            We help businesses find the right technology — without the sponsored rankings,
            hidden agendas, or affiliate-first recommendations that plague the review industry.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="article-content">
            <h2>Our Mission</h2>
            <p>
              The tech review space is broken. Most &quot;comparison&quot; sites rank products based on
              who pays the highest affiliate commission, not which product is actually best.
              We do things differently.
            </p>
            <p>
              HPE Technology has been a trusted name in the technology space since 2004. We
              provide genuinely independent reviews, head-to-head comparisons, and expert
              recommendations for the tools that power modern businesses.
            </p>

            <h2>How We Review</h2>
            <p>Every product we review goes through a rigorous evaluation process:</p>
            <ul>
              <li><strong>Hands-on testing:</strong> We sign up, pay for, and use every product we review. No secondhand opinions.</li>
              <li><strong>Real-world scenarios:</strong> We test products in actual business contexts — not sterile lab environments.</li>
              <li><strong>Data-driven:</strong> We measure performance metrics like uptime, speed, deliverability, and response times with actual data.</li>
              <li><strong>Regular updates:</strong> Tech changes fast. We re-test and update our reviews to keep recommendations current.</li>
            </ul>

            <h2>Our Revenue Model</h2>
            <p>
              Transparency matters. Here&apos;s how we keep the lights on:
            </p>
            <p>
              Some links on this site are affiliate links. When you sign up for a product through
              our link, we may earn a commission at no extra cost to you. This is how we fund
              our testing and reviews.
            </p>
            <p>
              <strong>Important:</strong> Affiliate commissions never influence our rankings or
              recommendations. We&apos;ve recommended free tools over paid alternatives many times,
              and we&apos;ve given negative reviews to high-commission products that didn&apos;t perform.
              Our credibility is worth more than any single commission.
            </p>

            <h2>What We Cover</h2>
            <ul>
              <li><strong>Web Hosting:</strong> Shared, VPS, managed, and cloud hosting for businesses of all sizes</li>
              <li><strong>SEO & Marketing Tools:</strong> Keyword research, rank tracking, content optimization, and analytics</li>
              <li><strong>Email Marketing:</strong> Automation platforms, deliverability testing, and list management</li>
              <li><strong>AI Tools:</strong> Writing assistants, code copilots, marketing AI, and business automation</li>
              <li><strong>Cybersecurity:</strong> VPNs, password managers, endpoint protection, and privacy tools</li>
              <li><strong>Business Software:</strong> CRM, project management, communication, and productivity tools</li>
            </ul>

            <h2>Contact</h2>
            <p>
              Have a question, suggestion, or want to report an error in one of our reviews?
              Reach out at <a href="/contact">our contact page</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
