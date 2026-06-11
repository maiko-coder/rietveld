"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Over Woeler", href: "/" },
  { label: "Channel Breakdown", href: "/channel-breakdown" },
  {
    label: "Google Ads",
    href: "/google-ads",
    sub: [
      { label: "Samenvatting", href: "/google-ads/samenvatting" },
      { label: "Compleet", href: "/google-ads/compleet" },
      { label: "Doelstellingen", href: "/google-ads/doelstellingen" },
    ],
  },
  {
    label: "Meta Ads",
    href: "/meta-ads",
    sub: [
      { label: "Samenvatting", href: "/meta-ads/samenvatting" },
      { label: "Compleet", href: "/meta-ads/compleet" },
      { label: "Doelstellingen", href: "/meta-ads/doelstellingen" },
    ],
  },
  {
    label: "Pinterest Ads",
    href: "/pinterest-ads",
    sub: [
      { label: "Samenvatting", href: "/pinterest-ads/samenvatting" },
      { label: "Compleet", href: "/pinterest-ads/compleet" },
      { label: "Doelstellingen", href: "/pinterest-ads/doelstellingen" },
    ],
  },
  {
    label: "SEO / CRO",
    href: "/seo-cro",
    sub: [
      { label: "Samenvatting", href: "/seo-cro/samenvatting" },
      { label: "Compleet", href: "/seo-cro/compleet" },
      { label: "Doelstellingen", href: "/seo-cro/doelstellingen" },
    ],
  },
  {
    label: "Marketing Automation",
    href: "/marketing-automation",
    sub: [
      { label: "Samenvatting", href: "/marketing-automation/samenvatting" },
      { label: "Compleet", href: "/marketing-automation/compleet" },
      { label: "Doelstellingen", href: "/marketing-automation/doelstellingen" },
    ],
  },
  {
    label: "AI Tools",
    href: "/ai-tools",
    sub: [
      { label: "AdOptimizer", href: "https://adoptimizer.nl" },
      { label: "Meta Optimizer", href: "https://www.meta-optimizer.nl" },
    ],
  },
  {
    label: "Cases",
    href: "/cases",
    sub: [
      { label: "MHK", href: "/cases/mhk" },
      { label: "Dakvoordeelshop", href: "/cases/dakvoordeelshop" },
      { label: "Manoir", href: "/cases/manoir" },
    ],
  },
  { label: "Team", href: "/team" },
  { label: "Rapportage", href: "/rapportage" },
];

export default function SiteHeader() {
  const path = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const isActive = (href: string) => {
    if (href === "/") return path === "/";
    return path.startsWith(href);
  };

  return (
    <header style={{ background: "#262626", boxShadow: "0 1px 0 rgba(255,255,255,0.06)", position: "sticky", top: 0, zIndex: 100 }}>
      {/* Top bar — branding */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "14px 32px", display: "flex", alignItems: "center", gap: 20, maxWidth: 1200, margin: "0 auto" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <img src="/rietveld-logo.svg" alt="Rietveld" style={{ height: 36, width: "auto" }} />
        </Link>
        <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.15)" }} />
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <img src="/woeler-logo.png" alt="Woeler" style={{ height: 28, width: "auto", filter: "brightness(0) invert(1)" }} />
        </Link>
        <div style={{ flex: 1 }} />
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
          Marketing Rapportages · 2026
        </span>
      </div>

      {/* Nav bar */}
      <nav style={{ background: "#00adef" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", height: 44 }}>
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            const hasDropdown = "sub" in item && item.sub;
            const isOpen = openMenu === item.href;

            return (
              <div
                key={item.href}
                style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}
                onMouseEnter={() => hasDropdown && setOpenMenu(item.href)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={hasDropdown ? (item.sub![0].href) : item.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    height: 44,
                    padding: "0 16px",
                    fontSize: 13,
                    fontWeight: active ? 700 : 500,
                    color: "white",
                    background: active ? "rgba(0,0,0,0.18)" : "transparent",
                    borderBottom: active ? "3px solid #fecb09" : "3px solid transparent",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.label}
                  {hasDropdown && (
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ opacity: 0.75, marginTop: 1 }}>
                      <path d="M1 1l4 4 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {hasDropdown && isOpen && (
                  <div style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    background: "#262626",
                    borderRadius: "0 0 8px 8px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
                    minWidth: 180,
                    overflow: "hidden",
                    zIndex: 200,
                  }}>
                    {item.sub!.map((sub, i) => {
                      const subActive = path === sub.href;
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          target={sub.href.startsWith("http") ? "_blank" : undefined}
                          rel={sub.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            padding: "11px 18px",
                            fontSize: 13,
                            fontWeight: subActive ? 600 : 400,
                            color: subActive ? "#00adef" : "rgba(255,255,255,0.8)",
                            background: subActive ? "rgba(0,173,239,0.1)" : "transparent",
                            borderLeft: subActive ? "3px solid #00adef" : "3px solid transparent",
                            borderBottom: i < item.sub!.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                          }}
                        >
                          <span style={{ fontSize: 10, opacity: 0.4, fontFamily: "monospace", letterSpacing: "0.05em" }}>
                            {["01", "02", "03"][i]}
                          </span>
                          {sub.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
          <div style={{ flex: 1 }} />
          <Link
            href="/voorstel"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              height: 30,
              padding: "0 16px",
              fontSize: 12.5,
              fontWeight: 700,
              color: "#262626",
              background: "#fecb09",
              borderRadius: 6,
              whiteSpace: "nowrap",
              letterSpacing: "0.01em",
            }}
          >
            Voorstel
          </Link>
        </div>
      </nav>
    </header>
  );
}
