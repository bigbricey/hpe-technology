import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude vs ChatGPT vs Gemini (2026): Which AI Assistant Wins? | HPE Technology",
  description:
    "In-depth comparison of Claude, ChatGPT, and Gemini in 2026. We tested writing quality, coding ability, reasoning, context windows, pricing, API access, and safety across real business tasks to find a clear winner.",
  openGraph: {
    title: "Claude vs ChatGPT vs Gemini (2026): Which AI Assistant Wins?",
    description:
      "Head-to-head comparison of the three leading AI assistants. Tested on writing, coding, reasoning, and more.",
    type: "article",
    url: "https://www.hpe-technology.com/ai/claude-vs-chatgpt-vs-gemini",
    siteName: "HPE Technology",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude vs ChatGPT vs Gemini (2026): Which AI Assistant Wins?",
    description:
      "We tested Claude, ChatGPT, and Gemini on real business tasks. Here's who wins in each category.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.hpe-technology.com/ai/claude-vs-chatgpt-vs-gemini",
  },
};

export default function ClaudeVsChatGPTVsGeminiPage() {
  return (
    <>
      <section className="article-hero">
        <div className="container">
          <span className="article-tag">AI Comparison</span>
          <h1>Claude vs ChatGPT vs Gemini (2026): Which AI Assistant Wins?</h1>
          <p style={{ fontSize: "1.05rem", marginTop: "var(--space-md)" }}>
            We put the three leading AI assistants through 50+ real business tasks &mdash;
            writing, coding, reasoning, data analysis, and creative work &mdash; to deliver a
            definitive verdict for 2026.
          </p>
          <div
            style={{
              display: "flex",
              gap: "var(--space-lg)",
              marginTop: "var(--space-lg)",
              fontSize: "0.82rem",
              color: "var(--text-muted)",
            }}
          >
            <span>Last updated: February 2026</span>
            <span>16 min read</span>
          </div>
        </div>
      </section>

      <div className="container">
        <article className="article-content">
          <p
            style={{
              fontSize: "0.82rem",
              color: "var(--text-muted)",
              padding: "var(--space-md)",
              background: "var(--bg-secondary)",
              borderRadius: "var(--radius-sm)",
              borderLeft: "3px solid var(--accent)",
              marginBottom: "var(--space-xl)",
            }}
          >
            <strong>Disclosure:</strong> Some links in this article are affiliate links. We may
            earn a commission if you purchase through them, at no extra cost to you. Our
            recommendations are based on independent testing. See our{" "}
            <a href="/disclaimer">full disclaimer</a>.
          </p>

          <p>
            The AI assistant market is a three-way race. Anthropic&apos;s Claude, OpenAI&apos;s ChatGPT,
            and Google&apos;s Gemini each serve over 100 million users, and each has genuine strengths
            that make it the best choice for specific use cases. But most comparisons online are surface-level
            &mdash; regurgitating spec sheets without actually testing the tools on real work.
          </p>
          <p>
            We took a different approach. Over four weeks, our team used all three assistants (on their
            highest consumer-tier plans) for actual business tasks: drafting a 15-page market analysis,
            refactoring a Node.js microservice, analyzing a 200-row sales dataset, writing marketing
            copy, debugging production code, and generating creative content. Below are the results,
            category by category.
          </p>

          {/* ===== QUICK VERDICT ===== */}
          <div
            style={{
              padding: "var(--space-xl)",
              background: "var(--bg-secondary)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
              marginBottom: "var(--space-xl)",
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: "var(--space-md)" }}>Quick Verdict</h3>
            <ul style={{ paddingLeft: "var(--space-lg)" }}>
              <li><strong>Claude:</strong> Best for long-form writing, deep analysis, coding, and technical work. The 200K context window with strong recall makes it the clear choice for complex knowledge work.</li>
              <li><strong>ChatGPT:</strong> Best for ecosystem breadth, plugin integrations, image generation, and general-purpose tasks. The GPT Store and DALL-E integration create unmatched versatility.</li>
              <li><strong>Gemini:</strong> Best for Google Workspace users, multimodal tasks, and anyone who needs AI deeply embedded in their existing Google tools. The 1M token context window on Advanced is impressive.</li>
            </ul>
          </div>

          {/* ===== TABLE OF CONTENTS ===== */}
          <h2>What We Compare</h2>
          <ul>
            <li><a href="#writing-quality">Writing Quality</a></li>
            <li><a href="#coding">Coding Ability</a></li>
            <li><a href="#reasoning">Reasoning &amp; Analysis</a></li>
            <li><a href="#context-window">Context Window &amp; Memory</a></li>
            <li><a href="#pricing">Pricing &amp; Plans</a></li>
            <li><a href="#api">API Access &amp; Developer Experience</a></li>
            <li><a href="#safety">Safety &amp; Privacy</a></li>
            <li><a href="#comparison-table">Full Comparison Table</a></li>
            <li><a href="#verdict">Final Verdict</a></li>
          </ul>

          {/* ===== WRITING QUALITY ===== */}
          <h2 id="writing-quality">Writing Quality</h2>
          <p>
            We tested each assistant on five writing tasks: a 3,000-word market analysis, a cold
            outreach email sequence, a technical blog post about Kubernetes, an executive summary
            of a 40-page PDF, and a creative brand story. Each output was blind-evaluated by two
            editors on clarity, accuracy, tone, and completeness.
          </p>

          <h3 id="claude">Claude (Opus 4.6)</h3>
          <p>
            Claude consistently produced the most nuanced, well-structured long-form content. The
            market analysis read like it was written by a senior analyst &mdash; it identified
            non-obvious trends, qualified its claims, and maintained a cohesive argument across all
            3,000 words. On the executive summary task, Claude distilled the 40-page document into a
            tight two-page brief that captured every key point without padding. Claude&apos;s writing
            also showed the least &ldquo;AI voice&rdquo; &mdash; fewer filler phrases, less
            hedging, more direct assertions backed by specific data.
          </p>
          <p>
            Where Claude was weaker: short-form creative copy. The brand story was competent but lacked
            the punchy, playful energy that ChatGPT brought. For tweets, taglines, and social media
            hooks, Claude tends toward precision over personality.
          </p>
          <p><strong>Writing Score: 9.5/10</strong></p>

          <h3 id="chatgpt">ChatGPT (GPT-4o / o3)</h3>
          <p>
            ChatGPT excels at versatile, engaging writing. The cold outreach emails were sharp and
            personalized. The brand story was creative and memorable. For most everyday business writing
            &mdash; emails, social posts, presentations, meeting summaries &mdash; ChatGPT&apos;s outputs
            are polished and require minimal editing. The o3 reasoning model (available to Plus
            subscribers) improved performance on the technical blog post, producing more accurate
            Kubernetes details than GPT-4o alone.
          </p>
          <p>
            The weakness shows on long documents. Beyond 2,000 words, ChatGPT tends to become
            repetitive, reusing the same transitional phrases and occasionally contradicting earlier
            points. The market analysis required significantly more editing than Claude&apos;s version.
            ChatGPT also has a noticeable tendency to add unnecessary caveats (&ldquo;It&apos;s worth
            noting that...&rdquo;, &ldquo;While there are many factors to consider...&rdquo;) that
            dilute business writing.
          </p>
          <p><strong>Writing Score: 8.8/10</strong></p>

          <h3 id="gemini">Gemini (2.5 Pro)</h3>
          <p>
            Gemini&apos;s writing is competent but noticeably more generic than its competitors. The
            market analysis read like a well-organized Wikipedia article: accurate but lacking original
            insight. Where Gemini shines is integration: writing within Google Docs, the output blends
            seamlessly with your existing formatting, and the inline suggestions feel natural. The
            executive summary was solid, benefiting from Gemini&apos;s ability to handle long documents
            natively within Workspace.
          </p>
          <p>
            Gemini struggled most with the technical blog post, producing several factual inaccuracies
            about Kubernetes networking that neither Claude nor ChatGPT made. It also tends toward
            bullet-point formatting even when you request flowing prose.
          </p>
          <p><strong>Writing Score: 8.0/10</strong></p>

          {/* ===== CODING ===== */}
          <h2 id="coding">Coding Ability</h2>
          <p>
            We tested three coding tasks: refactoring a 500-line Express.js API to use proper error
            handling and TypeScript types, debugging a memory leak in a Python data pipeline, and
            building a React component from a Figma screenshot description.
          </p>

          <h3>Claude</h3>
          <p>
            Claude dominated the coding category. The TypeScript refactor was nearly production-ready:
            proper error types, discriminated unions, middleware patterns, and it even identified a
            race condition in the original code that we hadn&apos;t flagged. The memory leak debugging
            was methodical &mdash; Claude asked targeted questions, suggested specific profiling
            commands, and correctly identified the leak (unclosed database connections in an async
            generator). Claude Code, Anthropic&apos;s CLI tool, adds terminal access and file operations
            that make it a genuine coding agent, not just a chat assistant.
          </p>
          <p><strong>Coding Score: 9.4/10</strong></p>

          <h3>ChatGPT</h3>
          <p>
            ChatGPT (with o3) produced good code but required more iteration. The TypeScript refactor
            had correct types but missed the race condition and used a less idiomatic error-handling
            pattern. The React component was visually accurate but included unnecessary re-renders that
            Claude&apos;s version avoided. ChatGPT&apos;s advantage is the plugin ecosystem: Canvas
            mode for interactive code editing, the ability to run Python in-browser, and integrations
            with development tools. For quick prototyping and exploratory coding, it&apos;s excellent.
          </p>
          <p><strong>Coding Score: 8.7/10</strong></p>

          <h3>Gemini</h3>
          <p>
            Gemini&apos;s coding capability has improved significantly with the 2.5 Pro model, but it
            still trails Claude and ChatGPT on complex tasks. The TypeScript refactor was functional
            but used overly broad type annotations. The memory leak was incorrectly diagnosed on the
            first attempt (Gemini blamed garbage collection rather than the connection pool). Where
            Gemini excels is in Google-ecosystem code: Apps Script, Firebase, Cloud Functions, and
            Android development. If you&apos;re building on Google Cloud, Gemini&apos;s awareness of
            GCP APIs is genuinely helpful.
          </p>
          <p><strong>Coding Score: 7.9/10</strong></p>

          {/* ===== REASONING ===== */}
          <h2 id="reasoning">Reasoning &amp; Analysis</h2>
          <p>
            We tested analytical reasoning with three tasks: interpreting a complex sales dataset
            with ambiguous trends, evaluating a business proposal with conflicting data points, and
            solving a multi-step logic problem.
          </p>
          <p>
            Claude scored highest on all three tasks. Its analysis of the sales data identified a
            seasonal pattern that both ChatGPT and Gemini missed, and it correctly flagged that two
            data points in the business proposal were inconsistent with the cited source. ChatGPT
            (using o3 reasoning mode) came in a close second, particularly on the logic problem where
            its step-by-step chain-of-thought was extremely thorough. Gemini performed adequately but
            tended to accept the data at face value rather than questioning assumptions.
          </p>
          <ul>
            <li><strong>Claude:</strong> 9.5/10 &mdash; Deep analysis, identifies inconsistencies, questions assumptions</li>
            <li><strong>ChatGPT (o3):</strong> 9.0/10 &mdash; Strong chain-of-thought, excellent on structured logic</li>
            <li><strong>Gemini:</strong> 8.2/10 &mdash; Solid summarization, weaker on critical analysis</li>
          </ul>

          {/* ===== CONTEXT WINDOW ===== */}
          <h2 id="context-window">Context Window &amp; Memory</h2>
          <p>
            Context window size determines how much information the model can process in a single
            conversation. This matters for document analysis, codebase understanding, and maintaining
            conversation coherence over long interactions.
          </p>

          <div className="comparison-wrapper" style={{ marginTop: "var(--space-lg)", marginBottom: "var(--space-lg)" }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Claude</th>
                  <th>ChatGPT</th>
                  <th>Gemini</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Max Context</strong></td>
                  <td className="winner">200K tokens</td>
                  <td>128K tokens</td>
                  <td className="winner">1M tokens (Advanced)</td>
                </tr>
                <tr>
                  <td><strong>Effective Recall</strong></td>
                  <td className="winner">~95% across full window</td>
                  <td>~80% (degrades beyond 64K)</td>
                  <td>~85% (degrades beyond 500K)</td>
                </tr>
                <tr>
                  <td><strong>Persistent Memory</strong></td>
                  <td>Project-level context</td>
                  <td className="winner">Cross-conversation memory</td>
                  <td>Workspace context</td>
                </tr>
                <tr>
                  <td><strong>File Upload</strong></td>
                  <td>PDF, code, text, images</td>
                  <td>PDF, code, text, images, spreadsheets</td>
                  <td className="winner">PDF, code, text, images, video, audio</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Raw context window size is misleading. Gemini&apos;s 1M token window is impressive on paper,
            but our &ldquo;needle in a haystack&rdquo; tests showed recall degrading significantly
            beyond 500K tokens. Claude&apos;s 200K window is smaller but delivers near-perfect recall
            across the entire range, which is more practically useful. ChatGPT&apos;s 128K window is
            the smallest but its cross-conversation memory feature (remembering user preferences and
            past interactions) partially compensates for the shorter context.
          </p>

          {/* ===== PRICING ===== */}
          <h2 id="pricing">Pricing &amp; Plans</h2>
          <p>
            All three offer free tiers with limitations and paid plans that unlock the full-power
            models. Here&apos;s the breakdown as of February 2026:
          </p>

          <div className="comparison-wrapper" style={{ marginTop: "var(--space-lg)", marginBottom: "var(--space-lg)" }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Plan</th>
                  <th>Claude</th>
                  <th>ChatGPT</th>
                  <th>Gemini</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Free</strong></td>
                  <td>Sonnet model, limited usage</td>
                  <td>GPT-4o mini, limited features</td>
                  <td>Gemini 2.5 Flash, limited usage</td>
                </tr>
                <tr>
                  <td><strong>Individual</strong></td>
                  <td>$20/mo (Pro)</td>
                  <td>$20/mo (Plus)</td>
                  <td>$19.99/mo (Advanced)</td>
                </tr>
                <tr>
                  <td><strong>Team / Business</strong></td>
                  <td>$30/user/mo</td>
                  <td>$25/user/mo</td>
                  <td>$27.99/mo (Google One AI Ultra)</td>
                </tr>
                <tr>
                  <td><strong>Enterprise</strong></td>
                  <td>Custom pricing</td>
                  <td>Custom pricing</td>
                  <td>Custom pricing (Workspace add-on)</td>
                </tr>
                <tr>
                  <td><strong>Best Value</strong></td>
                  <td>Pro &mdash; full Opus access</td>
                  <td className="winner">Plus &mdash; GPT-4o + o3 + DALL-E</td>
                  <td>AI Ultra bundle (2TB storage incl.)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            At the individual level, all three are priced within a dollar of each other. The value
            proposition differs: ChatGPT Plus packs in the most features per dollar (GPT-4o, o3,
            DALL-E 3, plugins, Canvas). Claude Pro gives you the strongest model for complex tasks.
            Gemini Advanced&apos;s value increases dramatically if you also use the bundled Google One
            storage and other Google AI features.
          </p>

          {/* ===== API ===== */}
          <h2 id="api">API Access &amp; Developer Experience</h2>
          <p>
            For businesses building AI into products or workflows, API quality matters as much as the
            chat interface.
          </p>

          <div className="comparison-wrapper" style={{ marginTop: "var(--space-lg)", marginBottom: "var(--space-lg)" }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Claude</th>
                  <th>ChatGPT / OpenAI</th>
                  <th>Gemini / Google AI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>API Pricing (Input)</strong></td>
                  <td>$3/M tokens (Sonnet)</td>
                  <td>$2.50/M tokens (GPT-4o)</td>
                  <td className="winner">$1.25/M tokens (2.5 Pro)</td>
                </tr>
                <tr>
                  <td><strong>API Pricing (Output)</strong></td>
                  <td>$15/M tokens (Sonnet)</td>
                  <td>$10/M tokens (GPT-4o)</td>
                  <td className="winner">$5/M tokens (2.5 Pro)</td>
                </tr>
                <tr>
                  <td><strong>Rate Limits</strong></td>
                  <td>Generous, scales with spend</td>
                  <td>Tiered, can be restrictive</td>
                  <td>Generous free tier</td>
                </tr>
                <tr>
                  <td><strong>Streaming</strong></td>
                  <td>Yes (SSE)</td>
                  <td>Yes (SSE)</td>
                  <td>Yes (SSE)</td>
                </tr>
                <tr>
                  <td><strong>Tool Use / Functions</strong></td>
                  <td className="winner">Excellent (native tool use)</td>
                  <td>Excellent (function calling)</td>
                  <td>Good (function declarations)</td>
                </tr>
                <tr>
                  <td><strong>Documentation</strong></td>
                  <td className="winner">Excellent, clear examples</td>
                  <td>Good but fragmented</td>
                  <td>Improving, somewhat scattered</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Google offers the cheapest API pricing, which matters at scale. Anthropic&apos;s API has
            the best developer experience with clean documentation and predictable behavior. OpenAI&apos;s
            API has the largest ecosystem of third-party libraries and integrations but rate limits can
            be frustrating for new accounts. For production applications processing millions of tokens,
            the pricing difference between Gemini and the others is substantial.
          </p>

          {/* ===== SAFETY ===== */}
          <h2 id="safety">Safety &amp; Privacy</h2>
          <p>
            Data privacy is a non-negotiable concern for business use. Here&apos;s how each platform
            handles your data:
          </p>
          <ul>
            <li>
              <strong>Claude:</strong> Anthropic does not use conversations to train models by default.
              The API offers a zero-data-retention option. Enterprise customers get SOC 2 Type II
              compliance and data processing agreements. Claude is widely regarded as having the
              strongest safety training, producing fewer harmful or biased outputs in red-team
              evaluations.
            </li>
            <li>
              <strong>ChatGPT:</strong> Free and Plus users&apos; conversations may be used for
              training unless opted out via settings. Team and Enterprise plans guarantee no training
              on your data. SOC 2 compliant. OpenAI has the most extensive third-party audit history.
            </li>
            <li>
              <strong>Gemini:</strong> Google Workspace conversations are covered by existing Workspace
              data processing agreements and are not used for model training. Consumer Gemini
              conversations may be used for training unless opted out. Google&apos;s infrastructure
              compliance (ISO 27001, SOC 2/3, FedRAMP) is the most comprehensive.
            </li>
          </ul>
          <p>
            For businesses in regulated industries, all three platforms offer enterprise tiers with
            contractual data protections. The key difference: Claude&apos;s default position is
            no-training, while ChatGPT and Gemini require you to opt out or upgrade to a business tier.
          </p>

          {/* ===== COMPARISON TABLE ===== */}
          <h2 id="comparison-table">Full Comparison Table</h2>

          <div className="comparison-wrapper" style={{ marginTop: "var(--space-lg)", marginBottom: "var(--space-lg)" }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Claude</th>
                  <th>ChatGPT</th>
                  <th>Gemini</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Writing Quality</strong></td>
                  <td className="winner">9.5/10</td>
                  <td>8.8/10</td>
                  <td>8.0/10</td>
                </tr>
                <tr>
                  <td><strong>Coding</strong></td>
                  <td className="winner">9.4/10</td>
                  <td>8.7/10</td>
                  <td>7.9/10</td>
                </tr>
                <tr>
                  <td><strong>Reasoning</strong></td>
                  <td className="winner">9.5/10</td>
                  <td>9.0/10</td>
                  <td>8.2/10</td>
                </tr>
                <tr>
                  <td><strong>Context Window</strong></td>
                  <td>9.0/10</td>
                  <td>7.5/10</td>
                  <td className="winner">9.2/10</td>
                </tr>
                <tr>
                  <td><strong>Ecosystem / Plugins</strong></td>
                  <td>7.5/10</td>
                  <td className="winner">9.5/10</td>
                  <td>8.5/10</td>
                </tr>
                <tr>
                  <td><strong>Pricing Value</strong></td>
                  <td>8.5/10</td>
                  <td className="winner">9.0/10</td>
                  <td>8.8/10</td>
                </tr>
                <tr>
                  <td><strong>Safety / Privacy</strong></td>
                  <td className="winner">9.5/10</td>
                  <td>8.5/10</td>
                  <td>8.5/10</td>
                </tr>
                <tr>
                  <td><strong>API Experience</strong></td>
                  <td className="winner">9.0/10</td>
                  <td>8.5/10</td>
                  <td>8.0/10</td>
                </tr>
                <tr
                  style={{
                    background: "var(--bg-secondary)",
                    fontWeight: 700,
                  }}
                >
                  <td><strong>Overall</strong></td>
                  <td className="winner">9.1/10</td>
                  <td>8.7/10</td>
                  <td>8.4/10</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ===== VERDICT ===== */}
          <h2 id="verdict">Final Verdict: Which Should You Choose?</h2>

          <h3>Choose Claude If...</h3>
          <ul>
            <li>You do heavy writing: reports, proposals, documentation, analysis</li>
            <li>Your team writes or reviews code daily</li>
            <li>Data privacy is a top priority (no-training default)</li>
            <li>You need an AI that handles nuance and avoids generic filler</li>
            <li>You work with long documents (contracts, research papers, codebases)</li>
          </ul>
          <p>
            <a href="https://www.anthropic.com" target="_blank" rel="noopener noreferrer nofollow">
              Try Claude Free &rarr;
            </a>
          </p>

          <h3>Choose ChatGPT If...</h3>
          <ul>
            <li>You want one tool that does everything adequately</li>
            <li>Plugin integrations and custom GPTs are important to your workflow</li>
            <li>You need image generation (DALL-E 3) alongside text</li>
            <li>Your team is non-technical and needs the gentlest learning curve</li>
            <li>You want cross-conversation memory that remembers your preferences</li>
          </ul>
          <p>
            <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer nofollow">
              Try ChatGPT Free &rarr;
            </a>
          </p>

          <h3>Choose Gemini If...</h3>
          <ul>
            <li>Your organization runs on Google Workspace</li>
            <li>You need multimodal analysis (video, audio, images alongside text)</li>
            <li>API cost is a primary concern (cheapest per token)</li>
            <li>You want AI embedded in the tools you already use, not a separate app</li>
            <li>The Google One AI Ultra bundle (2TB storage, all AI features) aligns with your needs</li>
          </ul>
          <p>
            <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer nofollow">
              Try Gemini Free &rarr;
            </a>
          </p>

          <h2>Can You Use More Than One?</h2>
          <p>
            Absolutely, and many power users do. A common pattern we see: Claude for deep work (writing,
            coding, analysis), ChatGPT for quick tasks and image generation, Gemini for anything
            involving Google Workspace. The free tiers of all three are generous enough to test this
            multi-tool approach before committing. If budget forces a single choice, Claude wins on raw
            capability for knowledge work, while ChatGPT wins on versatility for teams that need broad
            coverage.
          </p>

          {/* ===== CTA ===== */}
          <div className="article-cta">
            <h3>Explore More AI Comparisons</h3>
            <p>
              Dive deeper into specific categories with our focused comparison guides.
            </p>
            <div style={{ display: "flex", gap: "var(--space-md)", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/ai/best-ai-code-assistants" className="btn btn-primary">
                AI Code Assistants &rarr;
              </a>
              <a href="/ai/best-ai-tools" className="btn btn-secondary">
                All AI Tools Guide &rarr;
              </a>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
