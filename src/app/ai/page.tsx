import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tools Directory — HPE Technology",
  description: "Honest reviews and comparisons of AI tools for business. Writing assistants, code copilots, marketing AI, and more — tested with real use cases.",
  alternates: { canonical: "https://www.hpe-technology.com/ai" },
};

const articles = [
  { tag: "Guide", title: "Best AI Tools for Business in 2026", excerpt: "From writing assistants to code generation to customer service — the tools worth adopting.", readTime: "13 min", href: "/ai/best-ai-tools" },
  { tag: "Comparison", title: "Claude vs ChatGPT vs Gemini: Which AI Wins?", excerpt: "We tested all three on real business tasks. Writing, coding, analysis, and more.", readTime: "12 min", href: "/ai/claude-vs-chatgpt-vs-gemini" },
  { tag: "Development", title: "Best AI Code Assistants for Developers (2026)", excerpt: "GitHub Copilot, Cursor, Claude Code — tested on real codebases. Which saves the most time?", readTime: "11 min", href: "/ai/best-ai-code-assistants" },
  { tag: "Marketing", title: "AI Marketing Tools That Actually Work", excerpt: "SEO, content, social, email — AI tools that deliver real ROI, not just hype.", readTime: "10 min", href: "/ai/ai-marketing-tools" },
];

export default function AITools() {
  return (
    <>
      <section className="article-hero">
        <div className="container">
          <span className="article-tag">AI Directory</span>
          <h1>AI Tools &amp; Platforms</h1>
          <p style={{ fontSize: "1.1rem", marginTop: "var(--space-md)" }}>
            The AI landscape moves fast. We cut through the hype and test the tools that
            actually matter for businesses.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="card-grid">
            {articles.map((a) => (
              <a key={a.href} href={a.href} className="card">
                <span className="card-tag">{a.tag}</span>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
                <div className="card-meta">
                  <span>{a.readTime} read</span>
                  <span className="read-more">Read More &rarr;</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
