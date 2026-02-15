import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — HPE Technology",
  description: "Privacy policy for hpe-technology.com. How we collect, use, and protect your information.",
  alternates: { canonical: "https://www.hpe-technology.com/privacy" },
};

export default function Privacy() {
  return (
    <section className="legal-page">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p><em>Last updated: February 2026</em></p>

        <h2>Information We Collect</h2>
        <p>We collect minimal information to provide you with a better experience:</p>
        <ul>
          <li><strong>Analytics data:</strong> We use Google Analytics (GA4) to understand how visitors use our site. This includes pages visited, time on site, device type, and general geographic location. This data is anonymized and aggregated.</li>
          <li><strong>Email addresses:</strong> If you subscribe to our newsletter, we collect your email address. This is voluntary and you can unsubscribe at any time.</li>
          <li><strong>Cookies:</strong> We use essential cookies for site functionality and analytics cookies for Google Analytics. No advertising cookies are used.</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To improve our content and user experience based on analytics data</li>
          <li>To send weekly newsletter emails (if you opted in)</li>
          <li>To respond to your inquiries via our contact page</li>
        </ul>

        <h2>Third-Party Services</h2>
        <ul>
          <li><strong>Google Analytics:</strong> Used for website analytics. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a></li>
          <li><strong>Vercel:</strong> Our hosting provider. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel&apos;s Privacy Policy</a></li>
          <li><strong>Formsubmit.co:</strong> Used for form submissions (newsletter, contact).</li>
        </ul>

        <h2>Affiliate Links</h2>
        <p>
          Our site contains affiliate links to third-party products. When you click these links,
          the destination website may set their own cookies to track the referral. We do not
          control these third-party cookies. Please review the privacy policies of any product
          you sign up for through our links.
        </p>

        <h2>Data Retention</h2>
        <p>
          Analytics data is retained for 14 months (Google Analytics default). Newsletter
          subscriber data is retained until you unsubscribe.
        </p>

        <h2>Your Rights</h2>
        <p>You can:</p>
        <ul>
          <li>Unsubscribe from our newsletter at any time using the link in any email</li>
          <li>Request deletion of your data by emailing hello@hpe-technology.com</li>
          <li>Opt out of Google Analytics using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
        </ul>

        <h2>Contact</h2>
        <p>
          For privacy-related questions, email us at{" "}
          <a href="mailto:hello@hpe-technology.com">hello@hpe-technology.com</a>.
        </p>
      </div>
    </section>
  );
}
