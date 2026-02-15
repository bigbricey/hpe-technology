import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "HPE Technology — Independent Tech Reviews & Comparisons",
  description:
    "Unbiased reviews, head-to-head comparisons, and expert guides for business software, hosting, AI tools, and cybersecurity. Find the right tech stack for your business.",
  keywords: [
    "tech reviews",
    "software comparisons",
    "best web hosting",
    "SaaS tools",
    "AI tools",
    "business software",
    "VPN comparison",
    "email marketing tools",
    "SEO tools",
  ],
  openGraph: {
    title: "HPE Technology — Independent Tech Reviews & Comparisons",
    description:
      "Head-to-head comparisons and expert reviews of business software, hosting, AI tools, and more.",
    type: "website",
    url: "https://www.hpe-technology.com",
    siteName: "HPE Technology",
  },
  twitter: {
    card: "summary_large_image",
    title: "HPE Technology — Independent Tech Reviews & Comparisons",
    description:
      "Unbiased tech reviews and comparisons for businesses.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.hpe-technology.com" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "HPE Technology",
  url: "https://www.hpe-technology.com",
  description:
    "Independent tech reviews, software comparisons, and expert guides for businesses.",
  publisher: {
    "@type": "Organization",
    name: "HPE Technology",
    url: "https://www.hpe-technology.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PLACEHOLDER');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <header>
          <nav className="nav">
            <div className="nav-inner">
              <a href="/" className="nav-logo">
                HPE <span className="accent">Technology</span>
              </a>
              <ul className="nav-links">
                <li><a href="/reviews">Reviews</a></li>
                <li><a href="/comparisons">Comparisons</a></li>
                <li><a href="/tools">Tools</a></li>
                <li><a href="/ai">AI Tools</a></li>
                <li><a href="/about">About</a></li>
              </ul>
              <MobileMenuButton />
            </div>
          </nav>
        </header>

        <main id="main-content">{children}</main>

        <footer className="footer">
          <div className="footer-inner">
            <div>
              &copy; {new Date().getFullYear()} HPE Technology. Independent reviews &amp; comparisons.
            </div>
            <ul className="footer-links">
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="/disclaimer">Disclaimer</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}

function MobileMenuButton() {
  return (
    <>
      <input type="checkbox" id="mobile-menu-toggle" className="mobile-menu-checkbox" aria-label="Toggle navigation menu" />
      <label htmlFor="mobile-menu-toggle" className="hamburger" aria-label="Menu">
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </label>
      <div className="mobile-menu-overlay">
        <ul className="mobile-menu-links">
          <li><a href="/reviews">Reviews</a></li>
          <li><a href="/comparisons">Comparisons</a></li>
          <li><a href="/tools">Tools</a></li>
          <li><a href="/ai">AI Tools</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </>
  );
}
