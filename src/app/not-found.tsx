import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found — HPE Technology",
  description: "The page you're looking for doesn't exist. Browse our tech reviews and comparisons.",
};

export default function NotFound() {
  return (
    <section style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "var(--nav-height)" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: 540 }}>
        <p style={{ fontSize: "5rem", fontWeight: 800, color: "var(--accent)", lineHeight: 1, marginBottom: "var(--space-md)" }}>
          404
        </p>
        <h1 style={{ fontSize: "1.5rem", marginBottom: "var(--space-md)" }}>
          Page Not Found
        </h1>
        <p style={{ color: "var(--text-secondary)", marginBottom: "var(--space-xl)" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Try one of the links below.
        </p>
        <div style={{ display: "flex", gap: "var(--space-md)", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/" className="btn btn-primary">Go Home</a>
          <a href="/reviews" className="btn btn-secondary">Reviews</a>
          <a href="/comparisons" className="btn btn-secondary">Comparisons</a>
          <a href="/ai" className="btn btn-secondary">AI Tools</a>
        </div>
      </div>
    </section>
  );
}
