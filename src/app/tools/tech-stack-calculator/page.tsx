"use client";

import { useState } from "react";

type StackOption = {
    category: string;
    name: string;
    desc: string;
    vendor: string;
};

const STACK_DATA: Record<string, StackOption[]> = {
    freelancer: [
        { category: "Web Hosting", name: "Bluehost", desc: "Best for simple, affordable portfolios.", vendor: "bluehost" },
        { category: "Email Marketing", name: "ConvertKit", desc: "Built specifically for creators and freelancers.", vendor: "convertkit" },
        { category: "Security / VPN", name: "NordVPN", desc: "Essential protection for remote coffee shop work.", vendor: "nordvpn" },
        { category: "Productivity", name: "Notion", desc: "All-in-one workspace for client notes & docs.", vendor: "notion" },
    ],
    agency: [
        { category: "Web Hosting", name: "WP Engine", desc: "High-performance managed WordPress hosting for clients.", vendor: "wp-engine" },
        { category: "CRM", name: "HubSpot", desc: "Enterprise-grade pipeline management for closing deals.", vendor: "hubspot" },
        { category: "Project Management", name: "Monday.com", desc: "Visual task tracking for the whole team.", vendor: "mondaycom" },
        { category: "Security / VPN", name: "Surfshark", desc: "Unlimited device protection for your agency staff.", vendor: "surfshark" },
    ],
    ecommerce: [
        { category: "Web Hosting", name: "Liquid Web", desc: "High-tier dedicated servers for heavy WooCommerce traffic.", vendor: "liquid-web" },
        { category: "Email Marketing", name: "GetResponse", desc: "Powerful e-commerce automation and funnels.", vendor: "getresponse" },
        { category: "SEO Tool", name: "Ahrefs", desc: "Industry-leading keyword research to beat competitors.", vendor: "ahrefs" },
        { category: "CRM / Sales", name: "Salesforce", desc: "Robust customer data tracking.", vendor: "salesce" },
    ],
    startup: [
        { category: "Web Hosting", name: "Hostinger", desc: "Incredibly fast cloud hosting on a budget.", vendor: "hostinger" },
        { category: "SEO / Growth", name: "Semrush", desc: "Suite for driving organic SaaS growth.", vendor: "semrush" },
        { category: "Productivity", name: "ClickUp", desc: "The 'one app to replace them all' for agile startups.", vendor: "clickup" },
        { category: "Security / VPN", name: "CyberGhost", desc: "Privacy compliance for early-stage companies.", vendor: "cyberghost" },
    ],
};

export default function TechStackCalculator() {
    const [businessType, setBusinessType] = useState<string>("freelancer");
    const [showStack, setShowStack] = useState(false);

    const activeStack = STACK_DATA[businessType];

    return (
        <div className="container" style={{ padding: "var(--space-3xl) var(--space-lg)" }}>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <h1 style={{ marginBottom: "var(--space-md)" }}>
                    The <span className="accent">Tech Stack</span> Calculator
                </h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "var(--space-2xl)" }}>
                    Stop guessing which software tools you need. Select your business model below, and we'll instantly generate the optimal tech stack for your specific requirements.
                </p>

                <div className="tool-section featured">
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "var(--text-secondary)", marginBottom: "var(--space-sm)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        Select Your Business Type
                    </label>
                    <select
                        value={businessType}
                        onChange={(e) => {
                            setBusinessType(e.target.value);
                            setShowStack(false);
                        }}
                        style={{
                            width: "100%",
                            padding: "16px",
                            background: "var(--bg-primary)",
                            border: "1px solid var(--border)",
                            borderRadius: "var(--radius-md)",
                            color: "var(--text-primary)",
                            fontSize: "1rem",
                            marginBottom: "var(--space-xl)",
                            cursor: "pointer"
                        }}
                    >
                        <option value="freelancer">Solo Freelancer / Creator</option>
                        <option value="agency">Digital Agency / B2B Services</option>
                        <option value="ecommerce">E-commerce / Online Store</option>
                        <option value="startup">Tech Startup / SaaS</option>
                    </select>

                    <button
                        className="btn btn-primary"
                        style={{ width: "100%", justifyContent: "center", padding: "16px" }}
                        onClick={() => setShowStack(true)}
                    >
                        Generate My Tech Stack ⚡
                    </button>
                </div>

                {showStack && (
                    <div style={{ marginTop: "var(--space-3xl)", animation: "fadeIn 0.5s ease-out" }}>
                        <h2 style={{ marginBottom: "var(--space-md)", fontSize: "1.5rem" }}>
                            Your Recommended Setup
                        </h2>
                        <p style={{ marginBottom: "var(--space-xl)" }}>
                            Based on your selection, here are the industry-standard tools we recommend prioritizing.
                        </p>

                        <div className="stack-results">
                            {activeStack.map((item) => (
                                <div key={item.vendor} className="stack-item">
                                    <div className="stack-item-info">
                                        <span className="stack-category">{item.category}</span>
                                        <span className="stack-name">{item.name}</span>
                                        <span className="stack-desc">{item.desc}</span>
                                    </div>
                                    <a
                                        href={`/out/${item.vendor}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-secondary"
                                    >
                                        View Official Site →
                                    </a>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: "var(--space-2xl)", padding: "var(--space-lg)", background: "rgba(6, 182, 212, 0.05)", border: "1px solid rgba(6, 182, 212, 0.15)", borderRadius: "var(--radius-md)", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                            <strong>Note:</strong> We may earn an affiliate commission if you purchase through our links, allowing us to keep this calculator free. This does not impact our recommendations.
                        </div>
                    </div>
                )}
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
        </div>
    );
}
