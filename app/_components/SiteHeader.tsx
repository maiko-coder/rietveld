"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Google Ads", href: "/google-ads/samenvatting" },
  { label: "Meta Ads", href: "/meta-ads/samenvatting" },
  { label: "SEO / CRO", href: "/seo-cro/samenvatting" },
  { label: "Marketing Automation", href: "/marketing-automation/samenvatting" },
];

export default function SiteHeader() {
  const path = usePathname();

  const active = (href: string) => {
    if (href === "/") return path === "/";
    return path.startsWith(href.split("/").slice(0, 2).join("/"));
  };

  return (
    <header style={{ background: "#262626", boxShadow: "0 1px 0 rgba(255,255,255,0.06)", position: "sticky", top: 0, zIndex: 100 }}>
      {/* Top bar — branding */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "14px 32px", display: "flex", alignItems: "center", gap: 20, maxWidth: 1200, margin: "0 auto" }}>
        {/* Rietveld logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <img src="/rietveld-logo.svg" alt="Rietveld" style={{ height: 36, width: "auto" }} />
        </Link>

        {/* Divider */}
        <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.15)" }} />

        {/* Woeler logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <img src="/woeler-logo.png" alt="Woeler" style={{ height: 28, width: "auto", filter: "brightness(0) invert(1)" }} />
        </Link>

        <div style={{ flex: 1 }} />

        <span style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)",
        }}>
          Marketing Rapportages · 2026
        </span>
      </div>

      {/* Nav bar — cyan Rietveld accent */}
      <nav style={{ background: "#00adef" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", height: 44 }}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "inline-flex",
                alignItems: "center",
                height: "100%",
                padding: "0 16px",
                fontSize: 13,
                fontWeight: active(item.href) ? 700 : 500,
                color: "white",
                background: active(item.href) ? "rgba(0,0,0,0.18)" : "transparent",
                borderBottom: active(item.href) ? "3px solid #fecb09" : "3px solid transparent",
                transition: "background 0.15s",
                whiteSpace: "nowrap",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
