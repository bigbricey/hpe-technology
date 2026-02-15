import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer — HPE Technology",
  description: "Affiliate disclosure and disclaimer for hpe-technology.com.",
  alternates: { canonical: "https://www.hpe-technology.com/disclaimer" },
};

export default function Disclaimer() {
  return (
    <section className="legal-page">
      <div className="container">
        <h1>Disclaimer &amp; Affiliate Disclosure</h1>
        <p><em>Last updated: February 2026</em></p>

        <h2>Affiliate Disclosure</h2>
        <p>
          HPE Technology participates in affiliate marketing programs. This means that when
          you click on certain links on this site and make a purchase or sign up for a service,
          we may receive a commission at no additional cost to you.
        </p>
        <p>
          Our affiliate partnerships include but are not limited to programs offered by:
          web hosting companies, SEO and marketing tools, email marketing platforms,
          VPN providers, project management software, CRM platforms, and AI tool providers.
        </p>

        <h2>Editorial Independence</h2>
        <p>
          Affiliate commissions do not influence our editorial content, rankings, or
          recommendations. We have recommended free alternatives over paid products,
          and we have given negative reviews to high-commission products that did not
          meet our standards.
        </p>
        <p>
          Our reviews are based on independent testing, research, and analysis. Products
          are evaluated on their merits — features, performance, pricing, support quality,
          and value for money.
        </p>

        <h2>Not Hewlett Packard Enterprise</h2>
        <p>
          HPE Technology is an independent technology review and comparison website.
          We are <strong>not affiliated with, endorsed by, or connected to Hewlett Packard
          Enterprise (HPE) or any of its subsidiaries</strong>. Any similarity in naming is
          coincidental. &quot;HPE Technology&quot; refers solely to this independent publication.
        </p>

        <h2>Accuracy</h2>
        <p>
          We make every effort to ensure the accuracy of our reviews and comparisons.
          However, product features, pricing, and availability change frequently. We
          recommend verifying current details on the official product websites before
          making a purchase decision.
        </p>
        <p>
          If you find an error in any of our content, please{" "}
          <a href="/contact">contact us</a> and we will correct it promptly.
        </p>

        <h2>No Professional Advice</h2>
        <p>
          The content on this website is for informational purposes only. It does not
          constitute professional IT, business, financial, or legal advice. Always
          consult with qualified professionals for decisions specific to your situation.
        </p>
      </div>
    </section>
  );
}
