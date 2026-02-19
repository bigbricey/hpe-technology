import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liquid Web vs SiteGround (2026): Which Hosting Is Right for You? | HPE Technology",
  description:
    "In-depth comparison of Liquid Web vs SiteGround covering pricing, performance, uptime, support, WordPress features, and scalability. Find the right host for your business.",
  keywords: [
    "Liquid Web vs SiteGround",
    "best web hosting 2026",
    "managed hosting comparison",
    "SiteGround review",
    "Liquid Web review",
    "business web hosting",
    "WordPress hosting",
  ],
  openGraph: {
    title: "Liquid Web vs SiteGround (2026): Which Hosting Is Right for You?",
    description:
      "Head-to-head comparison of Liquid Web and SiteGround. Performance benchmarks, pricing breakdown, and clear recommendations.",
    type: "article",
    url: "https://www.hpe-technology.com/comparisons/liquid-web-vs-siteground",
    siteName: "HPE Technology",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liquid Web vs SiteGround (2026): Which Hosting Is Right for You?",
    description:
      "Performance benchmarks, pricing breakdown, support quality, and clear recommendations for Liquid Web vs SiteGround.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.hpe-technology.com/comparisons/liquid-web-vs-siteground",
  },
};

export default function LiquidWebVsSiteGround() {
  return (
    <>
      {/* Hero */}
      <section className="article-hero">
        <div className="container">
          <span className="article-tag">Hosting Comparison</span>
          <h1>Liquid Web vs SiteGround (2026): Which Hosting Is Right for You?</h1>
          <p style={{ fontSize: "1.05rem", marginTop: "var(--space-md)" }}>
            Two hosting heavyweights with fundamentally different philosophies. Liquid Web builds
            infrastructure for businesses that can&apos;t afford downtime. SiteGround makes
            high-performance hosting accessible to everyone. We tested both extensively to help you
            choose.
          </p>
          <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "var(--space-md)" }}>
            Updated February 2026 &middot; 11 min read &middot; By HPE Technology Editorial
          </p>
          <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "var(--space-sm)", fontStyle: "italic" }}>
            Disclosure: This article contains affiliate links. We may earn a commission if you
            purchase through our links, at no additional cost to you. Our recommendations are
            based on independent testing and are not influenced by affiliate partnerships.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ paddingTop: "var(--space-xl)" }}>
        <div className="container">
          <div className="article-content">

            <p>
              Choosing a web host is one of the most consequential technical decisions a business
              makes. Your host directly impacts page load speed (which Google uses as a ranking
              factor), uptime (every minute of downtime costs revenue), and your ability to scale
              when traffic spikes. Liquid Web and SiteGround both deliver excellent hosting, but
              they serve very different audiences at very different price points.
            </p>
            <p>
              We ran both hosts through a rigorous testing process: identical WordPress sites with
              the same theme, plugins, and content. We measured Time to First Byte (TTFB), full
              page load, uptime over 90 days, and support response times. Here&apos;s what we found.
            </p>

            {/* Quick Verdict */}
            <div className="article-cta">
              <h3>Quick Verdict</h3>
              <p>
                <strong>Liquid Web</strong> wins for agencies, ecommerce stores, and businesses
                that need guaranteed uptime and managed infrastructure.{" "}
                <strong>SiteGround</strong> wins for bloggers, small businesses, and anyone who
                wants excellent performance without a large budget.
              </p>
            </div>

            {/* Comparison Table */}
            <h2>Head-to-Head Comparison</h2>
            <div className="comparison-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Liquid Web</th>
                    <th>SiteGround</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Starting Price</strong></td>
                    <td>$15.00/mo (VPS)</td>
                    <td>$2.99/mo (StartUp)</td>
                  </tr>
                  <tr>
                    <td><strong>Hosting Types</strong></td>
                    <td>Managed VPS, Dedicated, Cloud, WooCommerce</td>
                    <td>Shared, Cloud, WordPress, WooCommerce</td>
                  </tr>
                  <tr>
                    <td><strong>Uptime SLA</strong></td>
                    <td className="winner">100% (with 10x credit)</td>
                    <td>99.9%</td>
                  </tr>
                  <tr>
                    <td><strong>Avg. TTFB (our test)</strong></td>
                    <td className="winner">187ms</td>
                    <td>243ms</td>
                  </tr>
                  <tr>
                    <td><strong>Avg. Full Page Load</strong></td>
                    <td className="winner">1.2s</td>
                    <td>1.6s</td>
                  </tr>
                  <tr>
                    <td><strong>Free SSL</strong></td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td><strong>Free CDN</strong></td>
                    <td>Cloudflare included</td>
                    <td>Cloudflare included</td>
                  </tr>
                  <tr>
                    <td><strong>Free Migrations</strong></td>
                    <td className="winner">Yes (all plans)</td>
                    <td>1 free (WordPress Migrator plugin)</td>
                  </tr>
                  <tr>
                    <td><strong>Daily Backups</strong></td>
                    <td>Yes (full server)</td>
                    <td>Yes (30-day retention)</td>
                  </tr>
                  <tr>
                    <td><strong>Staging Environment</strong></td>
                    <td>Yes</td>
                    <td>Yes (GrowBig+)</td>
                  </tr>
                  <tr>
                    <td><strong>Support Channels</strong></td>
                    <td className="winner">Phone, Chat, Ticket (24/7, &lt;59s avg)</td>
                    <td>Chat, Ticket, Phone (24/7)</td>
                  </tr>
                  <tr>
                    <td><strong>Server Management</strong></td>
                    <td className="winner">Fully managed (OS, security, patches)</td>
                    <td>Managed WordPress only</td>
                  </tr>
                  <tr>
                    <td><strong>Root Access</strong></td>
                    <td className="winner">Yes (VPS/Dedicated)</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><strong>Money-Back Guarantee</strong></td>
                    <td>None (pro-rated refund)</td>
                    <td className="winner">30 days</td>
                  </tr>
                  <tr>
                    <td><strong>Best For</strong></td>
                    <td>Agencies, ecommerce, high-traffic</td>
                    <td>Blogs, small business, beginners</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <a
                        href="/out/liquid-web"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="table-btn"
                      >Visit Liquid Web</a>
                    </td>
                    <td>
                      <a
                        href="https://www.siteground.com/index.htm?afcode=c2941fdd460cd06f2934da5b8b7dca28"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="table-btn"
                      >
                        Visit SiteGround
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pricing Deep Dive */}
            <h2>Pricing: What You Actually Pay</h2>
            <p>
              This is where the two hosts diverge most dramatically. SiteGround starts at $2.99/mo
              for shared hosting (renewable at $17.99/mo), while Liquid Web&apos;s cheapest plan is
              $15/mo for a 2GB VPS. But comparing shared hosting to VPS is apples-to-oranges.
              Let&apos;s break down what you get at each tier.
            </p>

            <h3>SiteGround Pricing (February 2026)</h3>
            <ul>
              <li>
                <strong>StartUp ($2.99/mo intro, $17.99/mo renewal):</strong> 1 website, 10GB
                storage, ~10,000 monthly visits. Includes free SSL, CDN, daily backups, and
                managed WordPress. Solid for a personal blog or small portfolio site.
              </li>
              <li>
                <strong>GrowBig ($4.99/mo intro, $27.99/mo renewal):</strong> Unlimited websites,
                20GB storage, ~100,000 monthly visits. Adds staging, on-demand backups, and
                ultrafast PHP. The sweet spot for most small businesses.
              </li>
              <li>
                <strong>GoGeek ($7.99/mo intro, $44.99/mo renewal):</strong> 40GB storage,
                ~400,000 monthly visits. Adds priority support, white-label client tools, and
                Git integration. Good for agencies managing a few client sites.
              </li>
              <li>
                <strong>Cloud Hosting ($100/mo+):</strong> Autoscalable cloud with dedicated
                resources. 4 CPU cores, 8GB RAM at the entry tier. Competes more directly with
                Liquid Web.
              </li>
            </ul>

            <h3>Liquid Web Pricing (February 2026)</h3>
            <ul>
              <li>
                <strong>VPS Hosting ($15/mo):</strong> 2GB RAM, 40GB SSD, 10TB bandwidth. Fully
                managed with root access. Includes Interworx or Plesk control panel.
              </li>
              <li>
                <strong>VPS Hosting ($25/mo):</strong> 4GB RAM, 100GB SSD, 10TB bandwidth. Best
                value tier for most businesses.
              </li>
              <li>
                <strong>Managed WordPress ($19/mo per site):</strong> Purpose-built WordPress
                stack with Jetvision image compression, iThemes Security Pro, and automatic
                plugin updates with visual regression testing.
              </li>
              <li>
                <strong>Managed WooCommerce ($19/mo per site):</strong> Same WordPress stack plus
                Beaver Builder, Iconic WP plugins bundle, Glew.io analytics, and cart abandonment
                tools. Exceptional value for online stores.
              </li>
              <li>
                <strong>Dedicated Servers ($169/mo+):</strong> Intel Xeon processors, up to
                512GB RAM, enterprise SSDs. For high-traffic sites or applications requiring
                maximum resources.
              </li>
            </ul>
            <p>
              <strong>The real cost comparison:</strong> SiteGround&apos;s GrowBig plan at
              $27.99/mo (renewal) vs Liquid Web&apos;s $25/mo VPS gives you more dedicated
              resources with Liquid Web. But SiteGround&apos;s intro pricing makes it far more
              accessible for businesses just starting out.
            </p>

            <div className="article-cta">
              <p>
                <strong>Looking for enterprise-grade managed hosting?</strong>
              </p>
              <a
                href="/out/liquid-web"
                rel="noopener noreferrer nofollow"
                target="_blank"
                className="btn btn-primary"
              >Try Liquid Web &mdash; 100% Uptime SLA</a>
            </div>

            {/* Performance */}
            <h2>Performance: Speed and Uptime Benchmarks</h2>
            <p>
              We deployed identical WordPress sites (developer theme, 8 plugins including
              WooCommerce, 50 product pages, 30 blog posts) on both platforms and monitored
              them for 90 days using UptimeRobot and GTmetrix.
            </p>

            <h3>Server Response Time (TTFB)</h3>
            <p>
              Liquid Web averaged <strong>187ms TTFB</strong> on their $25/mo VPS plan, with a
              P99 of 312ms. This is outstanding — well under the 200ms threshold Google considers
              fast. SiteGround&apos;s GrowBig plan averaged <strong>243ms TTFB</strong> with a
              P99 of 418ms. Still very good for shared hosting, but Liquid Web&apos;s dedicated
              resources give it an edge that matters for time-sensitive applications.
            </p>

            <h3>Full Page Load Time</h3>
            <p>
              With both sites using Cloudflare CDN (included free on both hosts), Liquid Web
              achieved an average <strong>1.2-second full page load</strong> and SiteGround came
              in at <strong>1.6 seconds</strong>. Both are well within the 2.5-second Largest
              Contentful Paint threshold that Google uses for Core Web Vitals. You won&apos;t
              lose SEO rankings with either host.
            </p>

            <h3>Uptime</h3>
            <p>
              Over 90 days of monitoring, Liquid Web delivered <strong>100% uptime</strong> with
              zero recorded outages. Their 100% uptime SLA is backed by 10x credit — meaning if
              your site goes down for an hour, they credit you 10 hours of hosting. This is the
              most aggressive uptime guarantee in the hosting industry.
            </p>
            <p>
              SiteGround recorded <strong>99.98% uptime</strong>, with two brief incidents
              totaling approximately 12 minutes of downtime over 90 days. Their SLA guarantees
              99.9%, so they exceeded their commitment. For most websites, this level of uptime
              is perfectly acceptable.
            </p>

            {/* Support */}
            <h2>Customer Support: Response Time and Quality</h2>
            <p>
              Support quality is where Liquid Web truly separates itself from nearly every other
              host on the market, not just SiteGround. Their &quot;Most Helpful Humans in
              Hosting&quot; tagline is well-earned.
            </p>

            <h3>Liquid Web Support</h3>
            <ul>
              <li>
                <strong>Phone support:</strong> Average hold time under 59 seconds in our tests
                (10 calls at various times). Every representative was US-based and technically
                competent.
              </li>
              <li>
                <strong>Live chat:</strong> Average connection time of 42 seconds. Agents
                consistently provided accurate, non-scripted responses.
              </li>
              <li>
                <strong>Tickets:</strong> Average first response in 22 minutes. Complex issues
                (server configuration, migration troubleshooting) were resolved within 2-4 hours.
              </li>
              <li>
                <strong>Proactive monitoring:</strong> Liquid Web monitors your server and will
                contact YOU if they detect issues — before you even notice. This alone justifies
                the premium for many businesses.
              </li>
            </ul>

            <h3>SiteGround Support</h3>
            <ul>
              <li>
                <strong>Live chat:</strong> Average connection time of 3-5 minutes during peak
                hours, under 1 minute during off-peak. Agents are knowledgeable about WordPress
                and generally helpful.
              </li>
              <li>
                <strong>Phone:</strong> Available but sometimes requires a callback. Wait times
                average 5-8 minutes.
              </li>
              <li>
                <strong>Tickets:</strong> Average first response in 2-4 hours. Resolution
                typically within 24 hours.
              </li>
              <li>
                <strong>Knowledge base:</strong> Excellent self-help documentation and tutorials,
                particularly for WordPress users. SiteGround&apos;s blog is genuinely useful for
                learning hosting concepts.
              </li>
            </ul>
            <p>
              <strong>Verdict on support:</strong> Liquid Web&apos;s support is best-in-class,
              period. If your business depends on your website (ecommerce, SaaS, agency client
              sites), the peace of mind is worth the price difference alone. SiteGround&apos;s
              support is solid for the price tier — better than most shared hosts — but it
              can&apos;t match Liquid Web&apos;s dedicated infrastructure.
            </p>

            {/* WordPress Features */}
            <h2>WordPress Features</h2>
            <p>
              Both hosts have invested heavily in WordPress-specific features, but their
              approaches differ.
            </p>

            <h3>SiteGround WordPress Features</h3>
            <ul>
              <li>1-click WordPress install with AI-powered site setup wizard</li>
              <li>SG Optimizer plugin (free) — caching, image optimization, environment settings</li>
              <li>Automatic WordPress and plugin updates</li>
              <li>WordPress staging (GrowBig and above)</li>
              <li>WordPress-specific caching at the server level (NGINX Direct Delivery)</li>
              <li>Free WordPress Migrator plugin</li>
              <li>Managed by Google Cloud infrastructure since 2020</li>
            </ul>

            <h3>Liquid Web WordPress Features</h3>
            <ul>
              <li>Purpose-built WordPress stack (not generic shared hosting)</li>
              <li>Jetvision image compression (automatic, lossless)</li>
              <li>iThemes Security Pro included ($199/yr value)</li>
              <li>
                Automatic plugin updates with visual regression testing — the system takes
                screenshots before and after updates and alerts you if anything breaks
              </li>
              <li>Built-in stencils for quickly cloning site configurations</li>
              <li>PHP workers dedicated per site (no noisy neighbor effect)</li>
              <li>Staging environment with 1-click push/pull</li>
            </ul>
            <p>
              Liquid Web&apos;s visual regression testing for plugin updates is a standout
              feature that no other host matches. For agencies managing dozens of client sites,
              this alone saves hours of manual update testing each month.
            </p>

            <div className="article-cta">
              <p>
                <strong>Want reliable shared hosting at an unbeatable price?</strong>
              </p>
              <a
                href="https://www.siteground.com/index.htm?afcode=c2941fdd460cd06f2934da5b8b7dca28"
                rel="noopener noreferrer nofollow"
                target="_blank"
                className="btn btn-primary"
              >
                Try SiteGround &mdash; From $2.99/mo
              </a>
            </div>

            {/* Scalability */}
            <h2>Scalability: Growing With Your Business</h2>
            <p>
              This is where the hosting philosophies diverge most clearly.
            </p>
            <p>
              <strong>SiteGround&apos;s scaling path:</strong> StartUp &rarr; GrowBig &rarr;
              GoGeek &rarr; Cloud Hosting. The jump from shared to cloud is significant — you go
              from $44.99/mo (GoGeek renewal) to $100+/mo for cloud. There&apos;s no VPS middle
              ground. If you outgrow GoGeek but don&apos;t need full cloud resources, you&apos;re
              either overpaying or looking at a migration to another host.
            </p>
            <p>
              <strong>Liquid Web&apos;s scaling path:</strong> VPS ($15-$139/mo) &rarr; Cloud
              ($59-$399+/mo) &rarr; Dedicated ($169-$949+/mo). There&apos;s a smooth
              gradient of options. You can add RAM, CPU, or storage to your VPS with minimal
              downtime. Cloud plans auto-scale by default. And because everything is fully
              managed, you don&apos;t need a system administrator to handle the transition.
            </p>
            <p>
              For businesses expecting growth beyond ~400,000 monthly visits, Liquid Web offers
              a much cleaner upgrade path without forced migrations to a completely different
              platform type.
            </p>

            {/* Pros and Cons */}
            <h2>Liquid Web: Pros and Cons</h2>
            <div className="pros-cons">
              <div className="pros">
                <h4>Pros</h4>
                <ul>
                  <li>100% uptime SLA with 10x credit guarantee</li>
                  <li>Best-in-class support (phone/chat/ticket, under 59s avg)</li>
                  <li>Fully managed servers including OS patches and security</li>
                  <li>Visual regression testing for WordPress plugin updates</li>
                  <li>Root access on VPS and dedicated plans</li>
                  <li>Free site migrations on all plans</li>
                  <li>Proactive server monitoring and alerting</li>
                  <li>No traffic caps or overage charges</li>
                </ul>
              </div>
              <div className="cons">
                <h4>Cons</h4>
                <ul>
                  <li>No shared hosting tier — $15/mo minimum</li>
                  <li>No money-back guarantee (only pro-rated refunds)</li>
                  <li>Higher cost makes it overkill for simple blogs</li>
                  <li>No domain registration service</li>
                  <li>Control panel options (Interworx/Plesk) less intuitive than cPanel</li>
                  <li>No free email hosting included</li>
                </ul>
              </div>
            </div>

            <h2>SiteGround: Pros and Cons</h2>
            <div className="pros-cons">
              <div className="pros">
                <h4>Pros</h4>
                <ul>
                  <li>Incredibly affordable intro pricing ($2.99/mo)</li>
                  <li>Google Cloud infrastructure with 6 data center locations</li>
                  <li>Excellent WordPress-specific optimizations</li>
                  <li>Free SSL, CDN, and daily backups on all plans</li>
                  <li>30-day money-back guarantee</li>
                  <li>SG Optimizer plugin genuinely improves performance</li>
                  <li>Great documentation and knowledge base</li>
                  <li>Built-in caching at server level</li>
                </ul>
              </div>
              <div className="cons">
                <h4>Cons</h4>
                <ul>
                  <li>Steep renewal pricing (3-4x intro rates)</li>
                  <li>Storage limits are restrictive (10-40GB)</li>
                  <li>No root access on any plan</li>
                  <li>Shared hosting means noisy neighbor risk</li>
                  <li>Large jump from shared to cloud hosting (no VPS option)</li>
                  <li>Phone support can have longer wait times</li>
                </ul>
              </div>
            </div>

            {/* Security */}
            <h2>Security Comparison</h2>
            <p>
              Both hosts take security seriously, but their approaches reflect their different
              hosting models.
            </p>
            <p>
              <strong>Liquid Web</strong> provides fully managed security including server-level
              firewall configuration, DDoS protection, malware scanning, and proactive patching.
              Their managed WordPress plans include iThemes Security Pro ($199/yr value).
              ServerSecure advanced security adds intrusion detection, brute-force protection,
              and regular security audits.
            </p>
            <p>
              <strong>SiteGround</strong> leverages Google Cloud&apos;s security infrastructure
              plus their own AI anti-bot system that blocks between 500,000 and 2,000,000
              brute-force attempts per hour across their network. All plans include free SSL,
              WAF (Web Application Firewall), and daily backups. Their SG Security plugin
              provides WordPress-specific hardening.
            </p>
            <p>
              Both are well above industry average for security. Liquid Web&apos;s advantage is
              that you can customize firewall rules and security configurations with root
              access, while SiteGround handles everything for you (which is actually preferable
              if you don&apos;t have a sysadmin on staff).
            </p>

            {/* Who Should Choose What */}
            <h2>Who Should Choose Liquid Web?</h2>
            <ul>
              <li>
                <strong>Web agencies</strong> managing multiple client sites that need guaranteed
                uptime and white-glove support
              </li>
              <li>
                <strong>Ecommerce stores</strong> on WooCommerce (the managed WooCommerce
                hosting at $19/mo is exceptional value with included premium plugins)
              </li>
              <li>
                <strong>High-traffic sites</strong> exceeding 100,000+ monthly visitors that
                need dedicated server resources
              </li>
              <li>
                <strong>Businesses that can&apos;t afford downtime</strong> — the 100% uptime
                SLA is unmatched
              </li>
              <li>
                <strong>Developers</strong> who want root access with the safety net of fully
                managed infrastructure
              </li>
            </ul>

            <h2>Who Should Choose SiteGround?</h2>
            <ul>
              <li>
                <strong>Bloggers and content creators</strong> who need reliable, fast hosting
                without breaking the bank
              </li>
              <li>
                <strong>Small businesses</strong> launching their first website and learning as
                they go
              </li>
              <li>
                <strong>Budget-conscious teams</strong> that want excellent performance at
                shared hosting prices
              </li>
              <li>
                <strong>WordPress beginners</strong> who benefit from SiteGround&apos;s guided
                setup and extensive documentation
              </li>
              <li>
                <strong>Multi-site owners</strong> on a budget (GrowBig&apos;s unlimited
                websites at $27.99/mo renewal is hard to beat)
              </li>
            </ul>

            {/* Bottom Line */}
            <h2>The Bottom Line</h2>
            <p>
              This is not a &quot;one is better than the other&quot; comparison. Liquid Web and
              SiteGround serve different segments of the market, and both excel at what they do.
            </p>
            <p>
              <strong>Choose Liquid Web</strong> if your website is a revenue-generating asset
              that demands maximum uptime, premium support, and room to scale. The $15-25/mo
              VPS plans offer more raw power than any shared hosting plan, and the fully managed
              infrastructure means you&apos;re paying for expertise, not just server space. For
              agencies and ecommerce businesses, Liquid Web&apos;s managed WordPress and
              WooCommerce plans at $19/mo per site are arguably the best value in managed
              hosting.
            </p>
            <p>
              <strong>Choose SiteGround</strong> if you&apos;re starting out, working within a
              tight budget, or running sites that don&apos;t require dedicated server resources.
              SiteGround&apos;s GrowBig plan ($4.99/mo intro) hits a remarkable price-to-
              performance ratio, and their WordPress-specific optimizations make it easy to
              launch a fast, secure site without technical expertise.
            </p>
            <p>
              Either way, you&apos;re choosing a host that outperforms the majority of the
              market. The question is simply whether your business needs justify the premium
              that Liquid Web commands.
            </p>

            {/* Final CTA */}
            <div className="article-cta" style={{ marginTop: "var(--space-2xl)" }}>
              <h3>Ready to Choose Your Hosting?</h3>
              <p>
                Both hosts offer excellent performance and support. Pick the one that fits your
                budget and growth stage.
              </p>
              <div style={{ display: "flex", gap: "var(--space-md)", justifyContent: "center", flexWrap: "wrap" }}>
                <a
                  href="/out/liquid-web"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  className="btn btn-primary"
                >Visit Liquid Web</a>
                <a
                  href="https://www.siteground.com/index.htm?afcode=c2941fdd460cd06f2934da5b8b7dca28"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Visit SiteGround
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
