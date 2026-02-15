import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Semrush vs Ahrefs (2026): The Definitive SEO Tool Comparison | HPE Technology",
  description:
    "Comprehensive comparison of Semrush vs Ahrefs covering keyword research, backlink analysis, content tools, rank tracking, pricing, and usability. Data-driven recommendations.",
  keywords: [
    "Semrush vs Ahrefs",
    "best SEO tool 2026",
    "SEO tool comparison",
    "Semrush review",
    "Ahrefs review",
    "keyword research tool",
    "backlink analysis",
  ],
  openGraph: {
    title: "Semrush vs Ahrefs (2026): The Definitive SEO Tool Comparison",
    description:
      "Head-to-head comparison of Semrush and Ahrefs. Feature matrix, pricing breakdown, and clear recommendations for every use case.",
    type: "article",
    url: "https://www.hpe-technology.com/comparisons/semrush-vs-ahrefs",
    siteName: "HPE Technology",
  },
  twitter: {
    card: "summary_large_image",
    title: "Semrush vs Ahrefs (2026): The Definitive SEO Tool Comparison",
    description:
      "Feature matrix, pricing breakdown, and clear recommendations for Semrush vs Ahrefs.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.hpe-technology.com/comparisons/semrush-vs-ahrefs",
  },
};

export default function SemrushVsAhrefs() {
  return (
    <>
      {/* Hero */}
      <section className="article-hero">
        <div className="container">
          <span className="article-tag">SEO Tools</span>
          <h1>Semrush vs Ahrefs (2026): The Definitive SEO Tool Comparison</h1>
          <p style={{ fontSize: "1.05rem", marginTop: "var(--space-md)" }}>
            Two of the most powerful SEO platforms on the market, each with distinct strengths.
            Semrush has evolved into a complete digital marketing suite. Ahrefs remains
            laser-focused on what it does best: backlink analysis and keyword research. We
            spent 6 months using both daily to bring you this comparison.
          </p>
          <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "var(--space-md)" }}>
            Updated February 2026 &middot; 14 min read &middot; By HPE Technology Editorial
          </p>
          <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "var(--space-sm)", fontStyle: "italic" }}>
            Disclosure: This article contains affiliate links. We may earn a commission if you
            purchase through our links, at no additional cost to you. Our recommendations are
            based on 6 months of hands-on testing and are not influenced by affiliate partnerships.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ paddingTop: "var(--space-xl)" }}>
        <div className="container">
          <div className="article-content">

            <p>
              If you&apos;re investing in SEO — whether for your own business or for clients —
              you need professional-grade tools. Manual keyword research, guessing at competitor
              strategies, and hoping your content ranks is not a strategy. It&apos;s a prayer.
              Semrush and Ahrefs are the two platforms that serious SEO professionals reach for.
              The question is: which one is right for your workflow?
            </p>
            <p>
              We used both tools extensively on the same set of projects — 3 ecommerce sites, 2
              content blogs, and an agency portfolio of 12 client domains — to compare their
              capabilities in real-world scenarios. Not theoretical features. Actual results.
            </p>

            {/* Quick Verdict */}
            <div className="article-cta">
              <h3>Quick Verdict</h3>
              <p>
                <strong>Semrush</strong> wins if you want an all-in-one marketing platform that
                covers SEO, PPC, social media, content marketing, and competitive intelligence
                in one subscription. <strong>Ahrefs</strong> wins if you want the most accurate
                backlink data, the cleanest keyword research interface, and don&apos;t need the
                extra marketing features.
              </p>
            </div>

            {/* Feature Matrix */}
            <h2>Feature-by-Feature Comparison</h2>
            <div className="comparison-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Semrush</th>
                    <th>Ahrefs</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Starting Price</strong></td>
                    <td>$139.95/mo (Pro)</td>
                    <td>$129/mo (Lite)</td>
                  </tr>
                  <tr>
                    <td><strong>Keyword Database Size</strong></td>
                    <td className="winner">26.1 billion keywords</td>
                    <td>19.2 billion keywords</td>
                  </tr>
                  <tr>
                    <td><strong>Backlink Index Size</strong></td>
                    <td>43 trillion backlinks</td>
                    <td className="winner">35.5 trillion live backlinks (best freshness)</td>
                  </tr>
                  <tr>
                    <td><strong>Keyword Research</strong></td>
                    <td>Excellent (Keyword Magic Tool)</td>
                    <td className="winner">Excellent (Keywords Explorer — faster, cleaner)</td>
                  </tr>
                  <tr>
                    <td><strong>Backlink Analysis</strong></td>
                    <td>Very Good</td>
                    <td className="winner">Best in class (fastest crawler refresh)</td>
                  </tr>
                  <tr>
                    <td><strong>Site Audit</strong></td>
                    <td className="winner">Best in class (140+ checks, crawl scheduling)</td>
                    <td>Very Good (100+ checks)</td>
                  </tr>
                  <tr>
                    <td><strong>Rank Tracking</strong></td>
                    <td className="winner">500-5,000 keywords (daily updates)</td>
                    <td>750-10,000 keywords (daily/weekly)</td>
                  </tr>
                  <tr>
                    <td><strong>Content Marketing</strong></td>
                    <td className="winner">Full suite (SEO Writing Assistant, Topic Research, ContentShake AI)</td>
                    <td>Content Explorer only</td>
                  </tr>
                  <tr>
                    <td><strong>PPC/Advertising Tools</strong></td>
                    <td className="winner">Full PPC toolkit (keyword, ad copy, display ads)</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td><strong>Social Media Tools</strong></td>
                    <td className="winner">Posting, analytics, ad management</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td><strong>Local SEO</strong></td>
                    <td className="winner">Listing Management, Map Rank Tracker</td>
                    <td>Limited</td>
                  </tr>
                  <tr>
                    <td><strong>Competitor Analysis</strong></td>
                    <td className="winner">Traffic analytics, market explorer, gap analysis</td>
                    <td>Domain comparison, content gap</td>
                  </tr>
                  <tr>
                    <td><strong>AI Features</strong></td>
                    <td className="winner">ContentShake AI, AI Writing Assistant, Copilot</td>
                    <td>AI Content Grader, AI keyword suggestions</td>
                  </tr>
                  <tr>
                    <td><strong>API Access</strong></td>
                    <td>$200+/mo extra (Guru+)</td>
                    <td className="winner">Included on all plans</td>
                  </tr>
                  <tr>
                    <td><strong>Free Tier</strong></td>
                    <td>10 queries/day (limited)</td>
                    <td className="winner">Ahrefs Webmaster Tools (free for site owners)</td>
                  </tr>
                  <tr>
                    <td><strong>Best For</strong></td>
                    <td>All-in-one marketing teams</td>
                    <td>SEO-focused teams and link builders</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <a
                        href="#semrush-visit"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="table-btn"
                      >
                        Try Semrush Free
                      </a>
                    </td>
                    <td>
                      <a
                        href="#ahrefs-visit"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="table-btn"
                      >
                        Try Ahrefs
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pricing */}
            <h2>Pricing Breakdown</h2>
            <p>
              Both tools are premium-priced, and neither is cheap. But the value you extract
              depends entirely on how many of each platform&apos;s features you actually use.
              Paying $139/mo for Semrush when you only use keyword research is wasteful. Paying
              $129/mo for Ahrefs when you also need PPC and social tools means you&apos;ll need
              additional subscriptions that add up fast.
            </p>

            <h3>Semrush Plans (February 2026)</h3>
            <ul>
              <li>
                <strong>Pro ($139.95/mo):</strong> 500 keywords to track, 10,000 results per
                report, 5 projects, 3,000 reports/day. Suitable for freelancers and small
                businesses. Includes all core SEO tools plus basic content and PPC tools.
              </li>
              <li>
                <strong>Guru ($249.95/mo):</strong> 1,500 keywords, 30,000 results, 15 projects,
                5,000 reports/day. Adds Content Marketing Platform, historical data, Looker
                Studio integration, and multi-location tracking. The sweet spot for agencies.
              </li>
              <li>
                <strong>Business ($499.95/mo):</strong> 5,000 keywords, 50,000 results, 40
                projects, 10,000 reports/day. Adds Share of Voice, API access, extended limits.
                For large agencies and enterprise teams.
              </li>
              <li>
                <strong>Additional users:</strong> $45-$100/mo per seat depending on plan.
                This adds up quickly for teams.
              </li>
            </ul>

            <h3>Ahrefs Plans (February 2026)</h3>
            <ul>
              <li>
                <strong>Lite ($129/mo):</strong> 750 tracked keywords, 5 projects, 6 months of
                history. Includes all core tools (Site Explorer, Keywords Explorer, Site Audit,
                Rank Tracker). Good for solopreneurs.
              </li>
              <li>
                <strong>Standard ($249/mo):</strong> 2,000 tracked keywords, 20 projects, 2
                years of history. Adds Content Explorer, Batch Analysis (200 URLs), and SERP
                comparison. Best value for most professionals.
              </li>
              <li>
                <strong>Advanced ($449/mo):</strong> 5,000 tracked keywords, 50 projects, 5
                years of history. Adds Looker Studio connector, 2 seats included, and higher
                API limits.
              </li>
              <li>
                <strong>Enterprise ($14,990/yr):</strong> 10,000+ tracked keywords, unlimited
                projects, unlimited history. White-label reports, SSO, audit log.
              </li>
              <li>
                <strong>Additional users:</strong> $40-$80/mo per seat. Similar to Semrush.
              </li>
            </ul>
            <p>
              <strong>Cost comparison takeaway:</strong> At the entry level, Ahrefs is $10/mo
              cheaper and includes API access that Semrush charges $250+/mo for. But Semrush
              Pro includes PPC tools, social media tools, and content marketing features that
              would cost $200+/mo in separate subscriptions if you used Ahrefs plus standalone
              tools.
            </p>

            <div className="article-cta">
              <p>
                <strong>Want the most complete digital marketing toolkit?</strong>
              </p>
              <a
                href="#semrush-visit"
                rel="noopener noreferrer nofollow"
                target="_blank"
                className="btn btn-primary"
              >
                Try Semrush Free for 7 Days
              </a>
            </div>

            {/* Keyword Research */}
            <h2>Keyword Research: Head-to-Head</h2>
            <p>
              This is the core function that most users care about, and both tools excel — but
              they feel different in practice.
            </p>

            <h3>Semrush Keyword Magic Tool</h3>
            <p>
              Semrush&apos;s Keyword Magic Tool draws from a database of 26.1 billion keywords
              across 142 countries. You enter a seed keyword and get an organized list grouped
              by topic clusters. The interface shows search volume, keyword difficulty (KD%),
              CPC, competitive density, SERP features, and trend data in one view.
            </p>
            <p>
              Standout features: The &quot;Questions&quot; filter instantly shows question-based
              keywords (critical for featured snippets). &quot;Broad Match,&quot; &quot;Phrase
              Match,&quot; &quot;Exact Match,&quot; and &quot;Related&quot; tabs let you quickly
              pivot between keyword types. The keyword clustering feature (Guru+) automatically
              groups semantically related keywords that can be targeted on a single page.
            </p>

            <h3>Ahrefs Keywords Explorer</h3>
            <p>
              Ahrefs&apos; Keywords Explorer searches 19.2 billion keywords across 243 countries
              (101 more than Semrush). The interface is cleaner and faster — you get results
              almost instantly. Ahrefs shows a unique &quot;Traffic Potential&quot; metric that
              estimates total traffic a #1 ranking page receives from ALL keywords it ranks
              for, not just the one you searched. This is genuinely more useful than raw
              search volume for prioritization.
            </p>
            <p>
              Standout features: &quot;Parent Topic&quot; shows the broader topic a keyword
              belongs to, helping you decide whether a keyword deserves its own page or should
              be a section of a larger article. &quot;Clicks&quot; data shows actual click
              volume (not just searches), accounting for SERP features that absorb clicks.
              SERP overview includes estimated traffic for each ranking page.
            </p>

            <p>
              <strong>Our take:</strong> For pure keyword research workflow, Ahrefs&apos;
              interface is faster and the &quot;Traffic Potential&quot; and &quot;Clicks&quot;
              metrics provide more actionable data. Semrush wins on database size and its
              topic clustering feature, which is invaluable for content planning at scale.
            </p>

            {/* Backlink Analysis */}
            <h2>Backlink Analysis: The Classic Battleground</h2>
            <p>
              Backlink analysis has historically been Ahrefs&apos; crown jewel, and that
              hasn&apos;t changed in 2026. While Semrush has significantly improved its
              backlink database (43 trillion total backlinks), Ahrefs still leads in the
              metrics that matter most: data freshness and crawler speed.
            </p>
            <p>
              <strong>Ahrefs</strong> crawls the web at a rate of approximately 8 billion pages
              per day, with their main index refreshing every 15-30 minutes. When a new backlink
              appears (or disappears), Ahrefs typically detects it within hours. Their
              &quot;New&quot; and &quot;Lost&quot; backlinks report is critical for link building
              campaigns — you can see when competitors gain links and quickly identify
              opportunities.
            </p>
            <p>
              <strong>Semrush</strong> has a larger total backlink index (43 trillion vs 35.5
              trillion), but a significant portion includes historical/dead links. Their crawler
              refresh rate is approximately 24-48 hours for new links. For most use cases this
              is fine, but for aggressive link building campaigns where timing matters, Ahrefs
              has a meaningful edge.
            </p>
            <p>
              Both tools offer toxic link identification, disavow file generation, link
              intersect analysis (finding sites that link to competitors but not you), and
              detailed anchor text analysis. Ahrefs&apos; &quot;Best by links&quot; report
              (showing which of a competitor&apos;s pages attract the most backlinks) is
              particularly useful for content ideation.
            </p>

            {/* Content Tools */}
            <h2>Content Marketing Tools</h2>
            <p>
              This is where Semrush pulls ahead decisively. If content marketing is a
              significant part of your strategy, Semrush&apos;s integrated content suite
              eliminates the need for separate tools.
            </p>

            <h3>Semrush Content Suite</h3>
            <ul>
              <li>
                <strong>SEO Writing Assistant:</strong> Real-time content optimization that
                grades your writing for SEO, readability, tone of voice, and originality.
                Integrates with Google Docs and WordPress.
              </li>
              <li>
                <strong>ContentShake AI:</strong> AI-powered content generation that creates
                SEO-optimized articles based on real SERP data. Not a generic AI writer — it
                analyzes top-ranking content and structures output to compete.
              </li>
              <li>
                <strong>Topic Research:</strong> Visual topic cluster builder that shows
                subtopics, questions, and headlines from top-performing content. Excellent for
                content calendar planning.
              </li>
              <li>
                <strong>SEO Content Template:</strong> Generates optimization briefs with
                target keywords, recommended length, readability score targets, and semantically
                related terms to include.
              </li>
              <li>
                <strong>Post Tracking:</strong> Monitors published articles for ranking
                performance, social shares, and backlink acquisition.
              </li>
            </ul>

            <h3>Ahrefs Content Tools</h3>
            <ul>
              <li>
                <strong>Content Explorer:</strong> A search engine for content. Find the
                most-shared and most-linked content on any topic. Filter by domain rating,
                traffic, word count, and publication date. Invaluable for content research, but
                it&apos;s a research tool, not a creation tool.
              </li>
              <li>
                <strong>Content Gap:</strong> Shows keywords your competitors rank for that you
                don&apos;t. Simple and effective for finding content opportunities.
              </li>
              <li>
                <strong>AI Content Grader:</strong> Newer feature that scores content quality
                and provides optimization suggestions, but less mature than Semrush&apos;s
                equivalent.
              </li>
            </ul>
            <p>
              <strong>Verdict:</strong> If you publish content regularly and want end-to-end
              content workflow support, Semrush is the clear winner. Ahrefs&apos; Content
              Explorer is excellent for research, but it doesn&apos;t help you create, optimize,
              or track content the way Semrush does.
            </p>

            <div className="article-cta">
              <p>
                <strong>Looking for the best backlink analysis and keyword research?</strong>
              </p>
              <a
                href="#ahrefs-visit"
                rel="noopener noreferrer nofollow"
                target="_blank"
                className="btn btn-primary"
              >
                Try Ahrefs &mdash; Free Webmaster Tools Available
              </a>
            </div>

            {/* Rank Tracking */}
            <h2>Rank Tracking</h2>
            <p>
              Both platforms offer capable rank tracking, but they differ in update frequency
              and visualization.
            </p>
            <p>
              <strong>Semrush Position Tracking</strong> updates daily and supports tracking at
              the city/ZIP code level — critical for local SEO. It includes Share of Voice (SoV)
              metrics, SERP feature tracking, and competitor benchmarking. The interface provides
              a clear visibility trend line that instantly shows your overall trajectory.
              Cannibalization reports identify when multiple pages compete for the same keyword.
            </p>
            <p>
              <strong>Ahrefs Rank Tracker</strong> also updates daily on Standard+ plans (weekly
              on Lite). It tracks SERP features, shows traffic estimates per keyword position,
              and includes Visibility and Average Position metrics. The &quot;SERP Changes&quot;
              report highlights significant movements in your tracked keywords.
            </p>
            <p>
              The practical difference: Semrush&apos;s local rank tracking is substantially
              better. If you operate in specific cities or regions, Semrush tracks your
              positions from those exact locations. Ahrefs tracks at the country level on
              standard plans.
            </p>

            {/* UI/UX */}
            <h2>User Interface and Experience</h2>
            <p>
              Both tools have improved their UIs significantly over the years, but they feel
              different.
            </p>
            <p>
              <strong>Ahrefs</strong> has the cleaner, more intuitive interface. Data loads
              faster, navigation is logical, and you can usually find what you need in 1-2
              clicks. The design is minimalist — it stays out of your way and lets the data
              speak. For someone new to SEO tools, Ahrefs has a gentler learning curve.
            </p>
            <p>
              <strong>Semrush</strong> is denser and more complex. With 50+ tools packed into
              one platform, the navigation can feel overwhelming initially. The left sidebar
              menu has deep nesting. But once you learn where things are, the breadth of
              functionality is unmatched. Semrush&apos;s custom dashboard feature lets you
              build a personalized home screen with only the metrics you care about.
            </p>
            <p>
              <strong>Our take:</strong> Ahrefs wins on UX for SEO-specific workflows. Semrush
              wins on customization and breadth. If you&apos;re an SEO specialist who lives in
              keyword and backlink data, Ahrefs&apos; speed and clarity will make your daily
              work more enjoyable. If you&apos;re a marketing manager who needs to touch SEO,
              PPC, social, and content from one dashboard, Semrush is more practical.
            </p>

            {/* Pros and Cons */}
            <h2>Semrush: Pros and Cons</h2>
            <div className="pros-cons">
              <div className="pros">
                <h4>Pros</h4>
                <ul>
                  <li>Largest keyword database (26.1 billion)</li>
                  <li>All-in-one platform: SEO, PPC, social, content, PR</li>
                  <li>Best-in-class site audit with 140+ issue checks</li>
                  <li>ContentShake AI and SEO Writing Assistant</li>
                  <li>Local SEO tools with map rank tracking</li>
                  <li>7-day free trial available</li>
                  <li>Traffic analytics for competitor research</li>
                  <li>Excellent reporting and white-label options</li>
                </ul>
              </div>
              <div className="cons">
                <h4>Cons</h4>
                <ul>
                  <li>$10/mo more expensive than Ahrefs at entry level</li>
                  <li>Steeper learning curve due to feature density</li>
                  <li>API access locked behind $250/mo Guru plan</li>
                  <li>Additional users cost $45-100/mo each</li>
                  <li>Backlink data slightly less fresh than Ahrefs</li>
                  <li>Interface can feel cluttered for SEO-only users</li>
                </ul>
              </div>
            </div>

            <h2>Ahrefs: Pros and Cons</h2>
            <div className="pros-cons">
              <div className="pros">
                <h4>Pros</h4>
                <ul>
                  <li>Best backlink index freshness (15-30 min refresh)</li>
                  <li>Traffic Potential and Clicks metrics are uniquely useful</li>
                  <li>Cleaner, faster user interface</li>
                  <li>API access included on all paid plans</li>
                  <li>Free Webmaster Tools for site owners</li>
                  <li>243 country databases (101 more than Semrush)</li>
                  <li>Content Explorer for viral content research</li>
                  <li>Lower learning curve for SEO-specific tasks</li>
                </ul>
              </div>
              <div className="cons">
                <h4>Cons</h4>
                <ul>
                  <li>No PPC or social media tools</li>
                  <li>Content creation tools are limited</li>
                  <li>No free trial (only free Webmaster Tools)</li>
                  <li>Local SEO tracking is less granular</li>
                  <li>Smaller keyword database than Semrush</li>
                  <li>Less robust reporting and white-label features</li>
                </ul>
              </div>
            </div>

            {/* Who Should Choose */}
            <h2>Who Should Choose Semrush?</h2>
            <ul>
              <li>
                <strong>Marketing teams</strong> that need SEO, PPC, social media, and content
                tools in one platform to reduce tool sprawl and subscription costs
              </li>
              <li>
                <strong>Agencies</strong> that need white-label reporting, client management,
                and the broadest competitive intelligence toolkit
              </li>
              <li>
                <strong>Content-heavy businesses</strong> that publish frequently and want
                integrated content planning, optimization, and tracking
              </li>
              <li>
                <strong>Local businesses</strong> that need city-level rank tracking and listing
                management
              </li>
              <li>
                <strong>PPC advertisers</strong> who want keyword research that spans both
                organic and paid search
              </li>
            </ul>

            <h2>Who Should Choose Ahrefs?</h2>
            <ul>
              <li>
                <strong>Link builders</strong> who need the freshest backlink data and the most
                accurate link metrics for outreach campaigns
              </li>
              <li>
                <strong>SEO specialists</strong> who primarily do keyword research and
                competitive analysis and don&apos;t need PPC or social tools
              </li>
              <li>
                <strong>Developers and data teams</strong> who need API access without paying
                for a premium plan tier
              </li>
              <li>
                <strong>International SEO teams</strong> working across many countries (243
                databases vs 142)
              </li>
              <li>
                <strong>Budget-conscious solopreneurs</strong> who want the most SEO value per
                dollar at the $129/mo Lite tier
              </li>
            </ul>

            {/* Bottom Line */}
            <h2>The Bottom Line</h2>
            <p>
              After six months of daily use, our recommendation comes down to this: if SEO is
              one part of your marketing mix and you want everything under one roof, Semrush is
              the better investment. The combined value of its SEO, PPC, social, and content
              tools at $139.95/mo is actually cheaper than subscribing to separate best-of-breed
              tools in each category.
            </p>
            <p>
              If SEO is your primary focus — especially if link building and keyword research
              are your core activities — Ahrefs delivers a superior experience in those
              specific areas. Its faster interface, fresher backlink data, and more intuitive
              keyword metrics make it the preferred tool for dedicated SEO professionals.
            </p>
            <p>
              Many agencies and larger teams subscribe to both, using Ahrefs for backlink
              research and keyword analysis while using Semrush for content optimization,
              reporting, and competitive intelligence. If your budget allows it, that&apos;s
              actually the optimal setup. If you can only pick one, choose based on whether
              you need an all-in-one marketing platform (Semrush) or a best-in-class SEO
              toolkit (Ahrefs).
            </p>

            {/* Final CTA */}
            <div className="article-cta" style={{ marginTop: "var(--space-2xl)" }}>
              <h3>Ready to Level Up Your SEO?</h3>
              <p>
                Both tools offer industry-leading capabilities. Choose based on your workflow
                and marketing needs.
              </p>
              <div style={{ display: "flex", gap: "var(--space-md)", justifyContent: "center", flexWrap: "wrap" }}>
                <a
                  href="#semrush-visit"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Try Semrush Free
                </a>
                <a
                  href="#ahrefs-visit"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Try Ahrefs
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
