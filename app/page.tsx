import Link from "next/link";

const CYAN = "#00adef";
const YELLOW = "#fecb09";
const DARK = "#262626";
const RED = "#ed1c23";

const CHANNELS = [
  {
    id: "google-ads",
    label: "Google Ads",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
        <path d="M21.64 13a1 1 0 0 0-1.05-.24l-2.14.73a5 5 0 0 0-9.1 0l-2.14-.73A1 1 0 0 0 6 14a6 6 0 0 0 11.87 1.35l1.81-.62A1 1 0 0 0 21.64 13z" fill={CYAN} opacity="0.25"/>
        <circle cx="12" cy="9" r="4" stroke={CYAN} strokeWidth="2" fill="none"/>
        <path d="M12 5V3M12 15v2M5 9H3M21 9h-2" stroke={CYAN} strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    summary: "Het account is het afgelopen jaar fors gegroeid: spend steeg van €1,3M naar €2,1M (+67%) en de omzet van €8,2M naar €12,5M (+52%). De accountbrede ROAS staat op 5,87 — licht gedaald als gevolg van de snelle opschaling. Er liggen concrete kansen in campagnestructuur en een onbenut premium-segment boven €400.",
    metrics: [
      { label: "Account ROAS", value: "5,87", sub: "Doel: 6,5", trend: "up" },
      { label: "Spend", value: "€2,1M", sub: "+67% YoY", trend: "up" },
      { label: "Omzet", value: "€12,5M", sub: "+52% YoY", trend: "up" },
      { label: "CPA", value: "€31,85", sub: "Doel: <€28", trend: "neutral" },
    ],
    topAction: "PMax splitsen op producttype + €400+ segment opschalen",
    links: [
      { label: "Samenvatting", href: "/google-ads/samenvatting" },
      { label: "Compleet", href: "/google-ads/compleet" },
      { label: "Doelstellingen", href: "/google-ads/doelstellingen" },
    ],
  },
  {
    id: "meta-ads",
    label: "Meta Ads",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill={CYAN}>
        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
      </svg>
    ),
    summary: "Uitzonderlijk sterke accountprestaties over de totale meetperiode (sept 2023 – mei 2026). De retargeting-campagnes leveren ROAS tot 69x. POAS-tracking via Conversions API maakt optimalisatie op werkelijke marge mogelijk — een significante voorsprong op concurrenten.",
    metrics: [
      { label: "Omzet ROAS", value: "15,74×", sub: "Totale periode", trend: "up" },
      { label: "POAS", value: "9,46×", sub: "aug 2024–mei 2026", trend: "up" },
      { label: "Totaal Spend", value: "€115k", sub: "Totale periode", trend: "neutral" },
      { label: "CPA", value: "€17,78", sub: "Per aankoop", trend: "up" },
    ],
    topAction: "Retargeting verder uitbreiden + Advantage+ Shopping opschalen",
    links: [
      { label: "Samenvatting", href: "/meta-ads/samenvatting" },
      { label: "Compleet", href: "/meta-ads/compleet" },
      { label: "Doelstellingen", href: "/meta-ads/doelstellingen" },
    ],
  },
  {
    id: "seo-cro",
    label: "SEO / CRO",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke={CYAN} strokeWidth="2">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
        <path d="M8 11h6M11 8v6" strokeLinecap="round" />
      </svg>
    ),
    summary: "Solide organische basis met concrete groeikansen. Topposities op branded zoektermen en goede rankings in verlichtingscategorieën. Prioriteit ligt bij technische optimalisaties, contentstrategie voor hoge-marge productcategorieën en conversieratio-verbetering op product- en categoriepagina's.",
    metrics: [
      { label: "Organisch aandeel", value: "Solide", sub: "Branded sterk", trend: "up" },
      { label: "CRO potentieel", value: "Hoog", sub: "Productpagina's", trend: "up" },
      { label: "Technische basis", value: "Goed", sub: "Verbeterpunten", trend: "neutral" },
      { label: "Contentstrategie", value: "Kans", sub: "Hoge-marge cat.", trend: "up" },
    ],
    topAction: "Technische verbeteringen + content voor premium productcategorieën",
    links: [
      { label: "Samenvatting", href: "/seo-cro/samenvatting" },
      { label: "Compleet", href: "/seo-cro/compleet" },
      { label: "Doelstellingen", href: "/seo-cro/doelstellingen" },
    ],
  },
  {
    id: "pinterest-ads",
    label: "Pinterest Ads",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill={CYAN}>
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.64 1.267 1.408 0 .858-.546 2.140-.828 3.330-.236.995.499 1.806 1.476 1.806 1.772 0 3.137-1.868 3.137-4.565 0-2.387-1.715-4.055-4.163-4.055-2.837 0-4.499 2.127-4.499 4.326 0 .857.33 1.776.741 2.278a.3.3 0 0 1 .069.285c-.076.31-.244.995-.276 1.134-.044.183-.145.222-.333.134-1.249-.581-2.030-2.407-2.030-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.220-5.190 6.220-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S17.522 2 12 2z"/>
      </svg>
    ),
    summary: "Eerste Pinterest-campagne (Performance+ Catalogue Sales, €3.000 spend) haalde een ROAS van 15,65×. Retargeting presteert boven prospecting (18,62× vs. 13,76×). Met 172 checkoutklanten zijn retargeting en lookalikes direct inzetbaar. Strategie: 3-laags budget van €5.000/mnd (20% overweging / 30% conversie / 50% catalogus).",
    metrics: [
      { label: "ROAS test", value: "15,65×", sub: "Performance+", trend: "up" },
      { label: "Omzet test", value: "€46.944", sub: "172 checkouts", trend: "up" },
      { label: "Streef ROAS", value: "9–11×", sub: "Nieuw plan", trend: "up" },
      { label: "Maandbudget", value: "€5.000", sub: "20/30/50", trend: "up" },
    ],
    topAction: "3-laags structuur live zetten: catalogus + conversie + overweging",
    links: [
      { label: "Samenvatting", href: "/pinterest-ads/samenvatting" },
      { label: "Compleet", href: "/pinterest-ads/compleet" },
      { label: "Doelstellingen", href: "/pinterest-ads/doelstellingen" },
    ],
  },
  {
    id: "marketing-automation",
    label: "Marketing Automation",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke={CYAN} strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <path d="M17.5 14v3M14 17.5h7" strokeLinecap="round" />
      </svg>
    ),
    summary: "E-mailautomatisering biedt significant groeipotentieel voor Rietveld. Een goed opgezette automationstrategie met welkomstflows, verlaten-winkelmand sequences en heractivatiecampagnes kan direct bijdragen aan omzet met lage incrementele kosten.",
    metrics: [
      { label: "Huidige flows", value: "Beperkt", sub: "Groeipotentieel", trend: "neutral" },
      { label: "Welkomstflow", value: "Kans #1", sub: "Direct impact", trend: "up" },
      { label: "Abandoned cart", value: "Kans #2", sub: "Hoge conversie", trend: "up" },
      { label: "Heractivatie", value: "Kans #3", sub: "Slapende klanten", trend: "up" },
    ],
    topAction: "Welkomstflow + verlaten winkelmand sequence implementeren",
    links: [
      { label: "Samenvatting", href: "/marketing-automation/samenvatting" },
      { label: "Compleet", href: "/marketing-automation/compleet" },
      { label: "Doelstellingen", href: "/marketing-automation/doelstellingen" },
    ],
  },
];

function TrendIcon({ trend }: { trend: "up" | "neutral" | "down" }) {
  if (trend === "up") return <span style={{ color: "#16a34a", fontSize: 11, fontWeight: 700 }}>↑</span>;
  if (trend === "down") return <span style={{ color: "#dc2626", fontSize: 11, fontWeight: 700 }}>↓</span>;
  return <span style={{ color: "#9ca3af", fontSize: 11 }}>→</span>;
}

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f4f5f7", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* Hero */}
      <div style={{
        background: DARK,
        padding: "64px 32px 52px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", right: -100, top: -100,
          width: 400, height: 400, borderRadius: "50%",
          background: `radial-gradient(circle, ${CYAN}15 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${RED} 0%, ${YELLOW} 33%, ${CYAN} 66%, ${DARK} 100%)` }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: CYAN, marginBottom: 14 }}>
            Marketing Intelligence · Woeler × Rietveld
          </div>
          <h1 style={{ fontSize: 46, fontWeight: 800, color: "white", lineHeight: 1.1, marginBottom: 14, maxWidth: 600 }}>
            Kanaaloverzicht <span style={{ color: CYAN }}>2026</span>
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", maxWidth: 500, lineHeight: 1.7, marginBottom: 40 }}>
            Alle marketingrapportages voor Rietveld Licht &amp; Wonen op één plek.
          </p>
          <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
            {[
              { label: "Google Ads ROAS", value: "5,87", accent: CYAN },
              { label: "Meta Ads ROAS", value: "15,74×", accent: YELLOW },
              { label: "Meta POAS", value: "9,46×", accent: CYAN },
              { label: "Google Spend", value: "€2,1M", accent: YELLOW },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 28, fontWeight: 800, color: s.accent }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Channel cards */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "44px 32px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
          <div style={{ width: 3, height: 16, background: CYAN, borderRadius: 2 }} />
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b7280" }}>Kanalen</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(520px, 1fr))", gap: 20 }}>
          {CHANNELS.map((ch) => (
            <div key={ch.id} style={{
              background: "white",
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 1px 3px rgba(0,0,0,0.07), 0 4px 14px rgba(0,0,0,0.04)",
              border: "1px solid #eaecef",
              borderTop: `3px solid ${CYAN}`,
              display: "flex",
              flexDirection: "column",
            }}>
              {/* Card header */}
              <div style={{ padding: "22px 24px 18px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  {/* Icon */}
                  <div style={{
                    width: 46, height: 46, borderRadius: 10,
                    background: `${CYAN}12`,
                    border: `1px solid ${CYAN}25`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    {ch.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: DARK, margin: 0, marginBottom: 6 }}>{ch.label}</h3>
                    <div style={{ display: "flex", gap: 5 }}>
                      {ch.links.map((l) => (
                        <Link key={l.href} href={l.href} style={{
                          fontSize: 11,
                          fontWeight: 600,
                          padding: "2px 9px",
                          borderRadius: 20,
                          background: `${CYAN}10`,
                          color: CYAN,
                          border: `1px solid ${CYAN}30`,
                        }}>
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: 13.5, color: "#4b5563", lineHeight: 1.75, margin: 0 }}>{ch.summary}</p>
              </div>

              {/* Metrics strip */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid #f1f3f5", borderBottom: "1px solid #f1f3f5", background: "#fafbfc" }}>
                {ch.metrics.map((m, i) => (
                  <div key={m.label} style={{
                    padding: "13px 15px",
                    borderRight: i < 3 ? "1px solid #f1f3f5" : "none",
                  }}>
                    <div style={{ fontSize: 10, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 5 }}>{m.label}</div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: DARK, display: "flex", alignItems: "center", gap: 3 }}>
                      {m.value} <TrendIcon trend={m.trend as "up" | "neutral" | "down"} />
                    </div>
                    <div style={{ fontSize: 10.5, color: "#b0b8c1", marginTop: 2 }}>{m.sub}</div>
                  </div>
                ))}
              </div>

              {/* Top action footer */}
              <div style={{ padding: "12px 18px", display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: YELLOW, flexShrink: 0, boxShadow: `0 0 0 2px ${YELLOW}40` }} />
                <span style={{ fontSize: 12.5, color: "#374151", lineHeight: 1.5, flex: 1 }}>
                  <strong style={{ color: DARK }}>Topprioriteit:</strong> {ch.topAction}
                </span>
                <Link href={ch.links[0].href} style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "white",
                  padding: "6px 14px",
                  borderRadius: 7,
                  background: CYAN,
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}>
                  Bekijk →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Quick links */}
        <div style={{ marginTop: 52, marginBottom: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <div style={{ width: 3, height: 16, background: YELLOW, borderRadius: 2 }} />
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b7280" }}>Snelle toegang</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: 8 }}>
            {CHANNELS.flatMap((ch) => ch.links.map((l) => ({
              label: `${ch.label} · ${l.label}`,
              href: l.href,
            }))).map((link) => (
              <Link key={link.href} href={link.href} style={{
                display: "block",
                padding: "11px 15px",
                background: "white",
                border: "1px solid #eaecef",
                borderLeft: `3px solid ${CYAN}`,
                borderRadius: 8,
                fontSize: 12.5,
                color: "#374151",
                fontWeight: 500,
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
