import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Speed Optimization: How to Make Your Site Load in Under 2 Seconds — HPE Technology",
  description:
    "A practical guide to making your website load in under 2 seconds. Image optimization, hosting, CDN, caching, code optimization — with measurable steps and tools.",
  openGraph: {
    title: "Website Speed Optimization: Load Your Site in Under 2 Seconds",
    description:
      "Every second of load time costs you conversions. Learn the exact steps to get your website under 2 seconds — from hosting to code optimization.",
    type: "article",
    url: "https://www.hpe-technology.com/guides/website-speed-optimization",
  },
  alternates: { canonical: "https://www.hpe-technology.com/guides/website-speed-optimization" },
};

export default function WebsiteSpeedOptimization() {
  return (
    <>
      <section className="article-hero">
        <div className="container">
          <span className="article-tag">Performance Guide</span>
          <h1>Website Speed Optimization: How to Make Your Site Load in Under 2 Seconds</h1>
          <p>
            A one-second delay in page load time reduces conversions by 7%. A three-second delay
            loses 53% of mobile visitors. Google uses page speed as a ranking factor. Speed
            isn&apos;t a nice-to-have — it directly impacts your revenue, SEO rankings, and
            user experience. This guide covers every optimization that matters, in order of
            impact.
          </p>
          <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "var(--space-md)" }}>
            <strong>Affiliate Disclosure:</strong> Some links on this page are affiliate links. We earn
            a commission if you purchase through our links, at no extra cost to you.
          </p>
        </div>
      </section>

      <div className="container">
        <article className="article-content">

          <h2>Why Speed Matters More Than You Think</h2>

          <h3>Speed and SEO</h3>
          <p>
            Google has used page speed as a ranking factor since 2010 for desktop and 2018 for
            mobile. In 2021, Core Web Vitals became an official ranking signal. The three metrics
            that matter:
          </p>
          <ul>
            <li>
              <strong>Largest Contentful Paint (LCP):</strong> How fast the main content loads.
              Target: under 2.5 seconds. Ideal: under 1.5 seconds.
            </li>
            <li>
              <strong>Interaction to Next Paint (INP):</strong> How fast the page responds to
              user interaction. Target: under 200 milliseconds.
            </li>
            <li>
              <strong>Cumulative Layout Shift (CLS):</strong> How much the page layout jumps
              around during loading. Target: under 0.1.
            </li>
          </ul>
          <p>
            Sites that pass all three Core Web Vitals get a measurable ranking boost. Google has
            confirmed this repeatedly. In competitive niches, this can mean the difference between
            page 1 and page 2.
          </p>

          <h3>Speed and Conversions</h3>
          <p>
            The data on speed and conversions is overwhelming and consistent across industries:
          </p>
          <ul>
            <li>Walmart found that for every 1 second of improvement, conversions increased by 2%</li>
            <li>Amazon calculated that a 100ms delay costs them 1% of revenue</li>
            <li>Pinterest reduced perceived wait times by 40% and increased search engine traffic by 15%</li>
            <li>BBC found they lost 10% of users for every additional second of load time</li>
          </ul>
          <p>
            If your site makes $10,000/month and loads in 5 seconds instead of 2, you&apos;re
            leaving $2,000-3,000/month on the table. Speed optimization has one of the highest
            ROIs of any marketing investment.
          </p>

          <h2>Step 1: Measure Your Current Speed</h2>
          <p>
            Before optimizing anything, you need a baseline. Use these free tools to measure
            your current performance:
          </p>
          <ul>
            <li>
              <strong>Google PageSpeed Insights</strong> (pagespeed.web.dev) — the gold standard.
              Shows your Core Web Vitals from real user data and lab tests. Gives specific
              optimization recommendations. Use this first.
            </li>
            <li>
              <strong>GTmetrix</strong> (gtmetrix.com) — detailed waterfall charts showing
              exactly what loads, when, and how long each resource takes. Best for identifying
              specific bottlenecks.
            </li>
            <li>
              <strong>WebPageTest</strong> (webpagetest.org) — test from different locations
              and connection speeds. Great for understanding the experience of users in
              different regions.
            </li>
          </ul>
          <p>
            Run your homepage and your two highest-traffic pages through all three tools. Write
            down your scores. You&apos;ll use these as your baseline to measure improvement.
          </p>

          <h3>What Good Scores Look Like</h3>
          <ul>
            <li><strong>PageSpeed Insights:</strong> 90+ mobile, 95+ desktop</li>
            <li><strong>LCP:</strong> Under 2.5 seconds (ideally under 1.5)</li>
            <li><strong>INP:</strong> Under 200ms</li>
            <li><strong>CLS:</strong> Under 0.1</li>
            <li><strong>Total page weight:</strong> Under 1.5 MB</li>
            <li><strong>HTTP requests:</strong> Under 50</li>
            <li><strong>Time to First Byte (TTFB):</strong> Under 200ms</li>
          </ul>

          <h2>Step 2: Fix Your Hosting (Biggest Single Impact)</h2>
          <p>
            No amount of optimization can fix slow hosting. If your server takes 800ms to
            respond before it even starts sending your page, you&apos;ve already burned half
            your budget. Your Time to First Byte (TTFB) should be under 200ms — if it&apos;s
            over 500ms, your hosting is the bottleneck.
          </p>

          <h3>Hosting Types and Performance</h3>
          <ul>
            <li>
              <strong>Shared hosting ($3-10/mo):</strong> Your site shares a server with
              hundreds of other sites. When one of them gets a traffic spike, everyone slows
              down. TTFB typically 400-800ms. Fine for personal blogs. Not acceptable for
              business sites.
            </li>
            <li>
              <strong>Managed WordPress hosting ($15-50/mo):</strong> Optimized specifically for
              WordPress with built-in caching, CDN, and server-level optimization. TTFB
              typically 100-300ms. The sweet spot for most small businesses.
            </li>
            <li>
              <strong>VPS hosting ($15-80/mo):</strong> Your own virtual server with dedicated
              resources. Nobody else&apos;s traffic affects you. TTFB typically 100-200ms.
              Requires some technical knowledge to manage.
            </li>
            <li>
              <strong>Cloud hosting ($20-200/mo):</strong> Scales automatically with traffic.
              TTFB typically 50-150ms. Best for sites with unpredictable traffic patterns.
            </li>
          </ul>

          <div className="callout">
            <h3>Our Hosting Recommendations for Speed</h3>
            <ul>
              <li>
                <strong>Best Overall:</strong>{" "}
                <a href="/out/liquid-web" rel="noopener noreferrer nofollow" target="_blank">Liquid Web</a>{" "}
                — managed VPS with 100% uptime SLA, LiteSpeed web server, built-in caching.
                TTFB consistently under 150ms in our tests. Starts at $15/mo.
              </li>
              <li>
                <strong>Best for WordPress:</strong>{" "}
                <a href="/out/wp-engine" rel="noopener noreferrer nofollow" target="_blank">WP Engine</a>{" "}
                — the fastest managed WordPress hosting we&apos;ve tested. EverCache technology,
                global CDN included, automatic PHP updates. TTFB under 200ms. Starts at $20/mo.
              </li>
              <li>
                <strong>Best Budget:</strong>{" "}
                <a href="/out/hostinger" rel="noopener noreferrer nofollow" target="_blank">Hostinger</a>{" "}
                — LiteSpeed servers, built-in object caching, surprisingly fast for the price.
                TTFB under 300ms. Starts at $2.99/mo. Best value in web hosting.
              </li>
            </ul>
            <p><a href="/reviews/best-web-hosting">Read our full hosting comparison with speed benchmarks →</a></p>
          </div>

          <h2>Step 3: Optimize Your Images (Second Biggest Impact)</h2>
          <p>
            Images typically account for 50-80% of a page&apos;s total weight. A single
            unoptimized hero image can be 3-5 MB — larger than everything else on the page
            combined. Image optimization is often the single fastest way to cut page load time
            in half.
          </p>

          <h3>Format Selection</h3>
          <ul>
            <li>
              <strong>WebP:</strong> The standard for web images in 2026. 25-35% smaller than
              JPEG at equivalent quality. Supported by all modern browsers (97%+ global support).
              Use this as your default format.
            </li>
            <li>
              <strong>AVIF:</strong> 30-50% smaller than WebP but slower to encode and not
              universally supported yet (90% browser support). Use as a progressive enhancement
              with WebP fallback.
            </li>
            <li>
              <strong>SVG:</strong> For logos, icons, and illustrations. Infinitely scalable,
              tiny file sizes. Never use PNG for simple graphics that could be SVG.
            </li>
            <li>
              <strong>JPEG:</strong> Still fine for photographs where browser support for WebP
              is a concern. Use quality setting 80-85% — the difference between 85% and 100%
              is invisible to the eye but 50%+ smaller in file size.
            </li>
          </ul>

          <h3>Sizing and Responsive Images</h3>
          <p>
            The most common image mistake: uploading a 4000x3000 pixel photo straight from your
            camera when it&apos;s displayed at 800x600 on screen. The browser downloads the full
            image and then scales it down — wasting bandwidth and slowing load time.
          </p>
          <ul>
            <li>
              <strong>Resize to display dimensions:</strong> If an image appears at 800px wide,
              serve an image that&apos;s 800px wide (or 1600px for retina/2x screens).
            </li>
            <li>
              <strong>Use responsive images:</strong> The HTML &lt;picture&gt; element and
              srcset attribute let you serve different image sizes to different screen sizes.
              Mobile users get a 400px image, desktop users get an 800px image.
            </li>
            <li>
              <strong>Target file sizes:</strong> Hero images under 200 KB. Thumbnails under
              30 KB. Total images per page under 500 KB.
            </li>
          </ul>

          <h3>Lazy Loading</h3>
          <p>
            Images below the fold (not visible without scrolling) don&apos;t need to load
            immediately. The native HTML loading=&quot;lazy&quot; attribute tells the browser to
            only download these images when the user scrolls near them. This can cut initial
            page weight by 40-60% on image-heavy pages.
          </p>
          <p>
            Important: do NOT lazy-load your hero image or any above-the-fold images. These
            need to load immediately for a good LCP score. Only lazy-load images that are
            below the initial viewport.
          </p>

          <h3>Image Optimization Tools</h3>
          <ul>
            <li><strong>Squoosh</strong> (squoosh.app) — free, browser-based, visual comparison of compression levels</li>
            <li><strong>ShortPixel</strong> — WordPress plugin that auto-converts and compresses on upload</li>
            <li><strong>Cloudinary</strong> — CDN-based image optimization, auto-format and auto-quality</li>
            <li><strong>Next.js Image component</strong> — automatic optimization if you&apos;re using Next.js</li>
          </ul>

          <h2>Step 4: Implement a CDN (Content Delivery Network)</h2>
          <p>
            A CDN stores copies of your website on servers around the world. When someone visits
            your site, they get served from the nearest server instead of your origin server. A
            user in Tokyo gets your site from a Tokyo server, not from your US-based hosting.
          </p>
          <p>
            Impact: a CDN typically reduces load times by 40-60% for users far from your server.
            Even for local traffic, CDNs improve performance because they&apos;re optimized for
            delivering static content.
          </p>

          <h3>CDN Options</h3>
          <ul>
            <li>
              <strong>Cloudflare (Free tier):</strong> The easiest CDN to set up. Free plan
              includes CDN, DDoS protection, and basic optimization. Takes 10 minutes to
              activate. This should be your default choice.
            </li>
            <li>
              <strong>Cloudflare Pro ($20/mo):</strong> Adds image optimization, Polish
              (automatic image compression), and better analytics.
            </li>
            <li>
              <strong>BunnyCDN ($1/mo+):</strong> Pay-per-use pricing. Cheapest option for
              sites with moderate traffic. Excellent performance.
            </li>
            <li>
              <strong>Included CDNs:</strong> Both{" "}
              <a href="/out/wp-engine" rel="noopener noreferrer nofollow" target="_blank">WP Engine</a> and{" "}
              <a href="/out/liquid-web" rel="noopener noreferrer nofollow" target="_blank">Liquid Web</a>{" "}
              include CDN functionality in their hosting plans.
            </li>
          </ul>

          <h2>Step 5: Enable Caching</h2>
          <p>
            Caching stores copies of your pages so the server doesn&apos;t rebuild them from
            scratch on every visit. Without caching, every page view triggers database queries,
            PHP processing, and HTML generation. With caching, most visitors get a pre-built
            page served instantly.
          </p>

          <h3>Browser Caching</h3>
          <p>
            Set proper cache headers so returning visitors don&apos;t re-download resources
            they already have. CSS, JavaScript, images, and fonts should have long cache
            lifetimes (1 year) with cache-busting filenames that change when the file changes.
          </p>

          <h3>Page Caching</h3>
          <p>
            Store the fully-rendered HTML of each page. Instead of running PHP and database
            queries on every visit, serve the cached HTML file directly. This alone can reduce
            server response time from 500ms to 50ms.
          </p>
          <ul>
            <li><strong>WordPress:</strong> WP Super Cache (free, simple), W3 Total Cache (free, advanced), WP Rocket (paid, best overall)</li>
            <li><strong>Server-level:</strong> LiteSpeed Cache (if your host uses LiteSpeed), Varnish, Redis</li>
            <li><strong>Next.js / static sites:</strong> Built-in static generation — pages are pre-rendered at build time</li>
          </ul>

          <h3>Object Caching</h3>
          <p>
            For dynamic sites (WordPress, e-commerce), object caching stores database query
            results in memory (Redis or Memcached). Instead of querying the database every time
            a page loads, the server reads from fast in-memory cache. This is especially impactful
            for sites with complex queries — product catalogs, membership sites, forums.
          </p>

          <h2>Step 6: Optimize Your Code</h2>

          <h3>Minify CSS and JavaScript</h3>
          <p>
            Minification removes whitespace, comments, and shortens variable names without
            changing functionality. A 100 KB CSS file might become 60 KB after minification.
            Every modern build tool handles this automatically (Webpack, Vite, Next.js). If
            you&apos;re on WordPress, caching plugins like WP Rocket include minification.
          </p>

          <h3>Remove Unused CSS</h3>
          <p>
            Most websites load CSS for every page element site-wide, even though each page only
            uses 10-30% of it. Tools like PurgeCSS analyze your HTML and remove unused CSS rules.
            This can reduce CSS file sizes by 70-90%.
          </p>

          <h3>Defer Non-Critical JavaScript</h3>
          <p>
            JavaScript that isn&apos;t needed for the initial page render should be deferred.
            The defer and async attributes on script tags tell the browser to download JavaScript
            without blocking page rendering. This is one of the most impactful changes for LCP
            and INP scores.
          </p>
          <p>
            Common culprits: analytics scripts, chat widgets, social media embeds, and
            third-party tracking pixels. All of these can be deferred without affecting user
            experience.
          </p>

          <h3>Reduce Third-Party Scripts</h3>
          <p>
            Every third-party script (analytics, chat, ads, tracking pixels) adds HTTP requests,
            JavaScript execution time, and potential blocking. Audit your third-party scripts
            and ask: &quot;Is this script worth the performance cost?&quot;
          </p>
          <ul>
            <li>Google Analytics 4: ~45 KB, moderate impact. Worth keeping. Load it asynchronously.</li>
            <li>Facebook Pixel: ~60 KB, moderate impact. Keep if you run Facebook ads. Defer loading.</li>
            <li>Live chat widgets: 200-500 KB, significant impact. Load only after user scrolls or after 5 seconds.</li>
            <li>Social share buttons: 100-300 KB, often not worth it. Use simple HTML link buttons instead.</li>
          </ul>

          <h2>Step 7: Font Optimization</h2>
          <p>
            Custom fonts are a hidden performance killer. A single Google Font can add 100-400 KB
            and multiple HTTP requests. Fonts also cause layout shift (CLS) when they load and
            replace the fallback font.
          </p>
          <ul>
            <li>
              <strong>Limit font families:</strong> Use 1-2 font families maximum. Each family
              with multiple weights (400, 500, 600, 700) adds to the download size.
            </li>
            <li>
              <strong>Use font-display: swap:</strong> Shows a fallback font immediately while
              the custom font loads. Prevents invisible text during loading.
            </li>
            <li>
              <strong>Self-host fonts:</strong> Instead of loading from Google Fonts CDN, host
              the font files on your own server. This eliminates the DNS lookup and connection
              to Google&apos;s servers.
            </li>
            <li>
              <strong>Subset fonts:</strong> If you only use Latin characters, don&apos;t load
              the full Unicode font. Subsetting can reduce font file size by 70-90%.
            </li>
            <li>
              <strong>Use system fonts:</strong> The fastest font is the one already on the
              user&apos;s device. System font stacks (San Francisco on Apple, Segoe UI on
              Windows) look professional and load instantly.
            </li>
          </ul>

          <h2>Speed Optimization Checklist</h2>
          <p>Here&apos;s your action plan, ordered by impact:</p>
          <ol>
            <li>Measure current speed with PageSpeed Insights (baseline)</li>
            <li>Upgrade hosting if TTFB is over 300ms</li>
            <li>Compress and resize all images, convert to WebP</li>
            <li>Add lazy loading to below-the-fold images</li>
            <li>Enable a CDN (Cloudflare free is fine)</li>
            <li>Enable page caching (server-level or plugin)</li>
            <li>Minify CSS and JavaScript</li>
            <li>Defer non-critical JavaScript</li>
            <li>Audit and remove unused third-party scripts</li>
            <li>Optimize fonts (self-host, subset, limit families)</li>
            <li>Enable browser caching with proper cache headers</li>
            <li>Re-measure with PageSpeed Insights (compare to baseline)</li>
          </ol>
          <p>
            Most sites can go from a 40-60 PageSpeed score to 85-95 by implementing steps 1-6.
            The remaining optimizations are incremental but worthwhile for competitive niches.
          </p>

          <div className="callout">
            <h3>Fast Hosting Picks</h3>
            <ul>
              <li><a href="/out/liquid-web" rel="noopener noreferrer nofollow" target="_blank">Liquid Web</a> — fastest TTFB in our tests, 100% uptime SLA</li>
              <li><a href="/out/wp-engine" rel="noopener noreferrer nofollow" target="_blank">WP Engine</a> — fastest managed WordPress, CDN included</li>
              <li><a href="/out/hostinger" rel="noopener noreferrer nofollow" target="_blank">Hostinger</a> — fastest budget hosting, LiteSpeed servers</li>
            </ul>
            <p><a href="/reviews/best-web-hosting">Read our full hosting comparison with speed benchmarks →</a></p>
          </div>

          <h2>The Bottom Line</h2>
          <p>
            Website speed optimization isn&apos;t a one-time project — it&apos;s an ongoing
            practice. Every new image, plugin, or third-party script can degrade performance.
            Check your PageSpeed scores monthly and address any regressions quickly.
          </p>
          <p>
            The biggest wins come from hosting and images. If you do nothing else, upgrade to
            quality hosting and compress your images. Those two changes alone can cut your load
            time by 50-70%.
          </p>
          <p>
            A fast site doesn&apos;t just rank better and convert more — it feels professional.
            Users trust fast sites more than slow ones. Your competitors who load in 1.5 seconds
            are taking customers from you while your site loads in 4.
          </p>
          <p>
            Fix your speed. Measure the results. Watch your rankings and revenue climb.
          </p>

          <h2>Related Guides</h2>
          <ul>
            <li><a href="/reviews/best-web-hosting">Best Web Hosting for Small Business (2026)</a></li>
            <li><a href="/comparisons/liquid-web-vs-siteground">Liquid Web vs SiteGround Comparison</a></li>
            <li><a href="/guides/best-tech-stack-small-business-2026">Best Tech Stack for Small Business</a></li>
          </ul>
        </article>
      </div>
    </>
  );
}
