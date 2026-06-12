"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type SubItem = { label: string; href: string };
type NestedItem = { label: string; href: string; sub: SubItem[] };
type NavItem = {
  label: string;
  href: string;
  sub?: SubItem[];
  groups?: NestedItem[];
};

const NAV_ITEMS: NavItem[] = [
  { label: "Over Woeler", href: "/" },
  { label: "Channel Breakdown", href: "/channel-breakdown" },
  {
    label: "Analyses",
    href: "/analyses",
    groups: [
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
    ],
  },
  {
    label: "AI Tools",
    href: "/ai-tools",
    sub: [
      { label: "AdOptimizer", href: "/adoptimizer" },
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
  { label: "Rapportage", href: "https://datastudio.google.com/u/4/reporting/b90fa4bf-f791-4123-9be9-0c1c5fff3184/page/VgD" },
];

export default function SiteHeader() {
  const path = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setMobileSection(null);
  }, [path]);

  const isActive = (href: string) => {
    if (href === "/") return path === "/";
    return path.startsWith(href);
  };

  return (
    <header style={{ background: "#262626", boxShadow: "0 1px 0 rgba(255,255,255,0.06)", position: "sticky", top: 0, zIndex: 100 }}>
      {/* Top bar - branding */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "14px 32px", display: "flex", alignItems: "center", gap: 20, maxWidth: 1200, margin: "0 auto" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <img src="/rietveld-logo.svg" alt="Rietveld" style={{ height: 36, width: "auto" }} />
        </Link>
        <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.15)" }} />
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <img src="/woeler-logo.png" alt="Woeler" style={{ height: 28, width: "auto", filter: "brightness(0) invert(1)" }} />
        </Link>
        <div style={{ flex: 1 }} />
        <span className="hdr-tagline" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
          Marketing Rapportages · 2026
        </span>
      </div>

      {/* Nav bar */}
      <nav style={{ background: "#00adef" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", height: 44 }}>
          <button
            className="nav-burger"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
            style={{
              alignItems: "center",
              gap: 8,
              background: "none",
              border: "none",
              color: "white",
              fontSize: 13,
              fontWeight: 700,
              padding: "0 4px",
              height: 44,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            {mobileOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4 4l10 10M14 4L4 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
            Menu
          </button>
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", height: "100%" }}>
          {NAV_ITEMS.map((item) => {
            const hasGroups = !!item.groups;
            const hasDropdown = (!!item.sub && item.sub.length > 0) || hasGroups;
            const active = hasGroups
              ? item.groups!.some((g) => isActive(g.href))
              : isActive(item.href);
            const isOpen = openMenu === item.href;

            const topHref = hasGroups
              ? item.groups![0].sub[0].href
              : hasDropdown
                ? item.sub![0].href
                : item.href;

            return (
              <div
                key={item.href}
                style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}
                onMouseEnter={() => hasDropdown && setOpenMenu(item.href)}
                onMouseLeave={() => {
                  setOpenMenu(null);
                  setOpenGroup(null);
                }}
              >
                <Link
                  href={topHref}
                  target={topHref.startsWith("http") ? "_blank" : undefined}
                  rel={topHref.startsWith("http") ? "noopener noreferrer" : undefined}
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

                {/* Simple dropdown */}
                {!hasGroups && item.sub && isOpen && (
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
                    {item.sub.map((sub, i) => {
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
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {sub.label}
                        </Link>
                      );
                    })}
                  </div>
                )}

                {/* Nested dropdown (Analyses) */}
                {hasGroups && isOpen && (
                  <div style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    background: "#262626",
                    borderRadius: "0 0 8px 8px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
                    minWidth: 220,
                    zIndex: 200,
                  }}>
                    {item.groups!.map((group, i) => {
                      const groupActive = isActive(group.href);
                      const groupOpen = openGroup === group.href;
                      return (
                        <div
                          key={group.href}
                          style={{ position: "relative" }}
                          onMouseEnter={() => setOpenGroup(group.href)}
                        >
                          <Link
                            href={group.sub[0].href}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: 10,
                              padding: "11px 18px",
                              fontSize: 13,
                              fontWeight: groupActive ? 600 : 400,
                              color: groupActive || groupOpen ? "#00adef" : "rgba(255,255,255,0.8)",
                              background: groupActive || groupOpen ? "rgba(0,173,239,0.1)" : "transparent",
                              borderLeft: groupActive ? "3px solid #00adef" : "3px solid transparent",
                              borderBottom: i < item.groups!.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                            }}
                          >
                            <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                              <span style={{ fontSize: 10, opacity: 0.4, fontFamily: "monospace", letterSpacing: "0.05em" }}>
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              {group.label}
                            </span>
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" style={{ opacity: 0.6 }}>
                              <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </Link>

                          {/* Flyout submenu */}
                          {groupOpen && (
                            <div style={{
                              position: "absolute",
                              top: 0,
                              left: "100%",
                              background: "#2e2e2e",
                              borderRadius: "0 8px 8px 0",
                              boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
                              minWidth: 170,
                              overflow: "hidden",
                              zIndex: 210,
                            }}>
                              {group.sub.map((sub, j) => {
                                const subActive = path === sub.href;
                                return (
                                  <Link
                                    key={sub.href}
                                    href={sub.href}
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
                                      borderBottom: j < group.sub.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                                    }}
                                  >
                                    {sub.label}
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
          </div>
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

      {/* Mobiel menu */}
      {mobileOpen && (
        <div style={{ background: "#262626", borderTop: "1px solid rgba(255,255,255,0.08)", maxHeight: "calc(100vh - 110px)", overflowY: "auto" }}>
          {NAV_ITEMS.map((item) => {
            const hasChildren = (!!item.sub && item.sub.length > 0) || !!item.groups;
            const rowStyle: React.CSSProperties = {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              padding: "13px 20px",
              fontSize: 14,
              fontWeight: 600,
              color: "white",
              background: "none",
              border: "none",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              cursor: "pointer",
              fontFamily: "inherit",
              textAlign: "left" as const,
            };

            if (!hasChildren) {
              const external = item.href.startsWith("http");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  onClick={() => setMobileOpen(false)}
                  style={{ ...rowStyle, color: isActive(item.href) && !external ? "#00adef" : "white" }}
                >
                  {item.label}
                  {external && (
                    <svg viewBox="0 0 16 16" width="11" height="11" fill="none">
                      <path d="M6 3h7v7M13 3L7 9" stroke="rgba(255,255,255,0.5)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>
              );
            }

            const expanded = mobileSection === item.href;
            return (
              <div key={item.href}>
                <button onClick={() => setMobileSection(expanded ? null : item.href)} style={rowStyle}>
                  {item.label}
                  <svg width="12" height="8" viewBox="0 0 10 6" fill="none" style={{ transform: expanded ? "rotate(180deg)" : "none", transition: "transform 0.15s", opacity: 0.6 }}>
                    <path d="M1 1l4 4 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {expanded && item.sub && item.sub.map((sub) => {
                  const external = sub.href.startsWith("http");
                  return (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: "block",
                        padding: "11px 20px 11px 36px",
                        fontSize: 13.5,
                        color: path === sub.href ? "#00adef" : "rgba(255,255,255,0.75)",
                        background: "rgba(0,0,0,0.25)",
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      {sub.label}
                    </Link>
                  );
                })}

                {expanded && item.groups && item.groups.map((group) => (
                  <div key={group.href} style={{ background: "rgba(0,0,0,0.25)" }}>
                    <div style={{ padding: "11px 20px 5px 36px", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: isActive(group.href) ? "#00adef" : "rgba(255,255,255,0.4)" }}>
                      {group.label}
                    </div>
                    {group.sub.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        style={{
                          display: "block",
                          padding: "9px 20px 9px 52px",
                          fontSize: 13.5,
                          color: path === sub.href ? "#00adef" : "rgba(255,255,255,0.75)",
                          borderBottom: "1px solid rgba(255,255,255,0.04)",
                        }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      )}
    </header>
  );
}
