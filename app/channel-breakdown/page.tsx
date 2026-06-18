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
    summary: "Google Ads is het afgelopen jaar hard gegroeid: van €1,3M naar €2,1M spend (+67%) en van €8,2M naar €12,5M omzet (+52%). De ROAS zakte licht naar 5,87. Logisch: zo hard opschalen kost altijd wat efficiëntie. Dat wordt teruggehaald met een scherpere structuur. En het premium-segment boven €400 ligt nog vrijwel onbenut.",
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
    summary: "Meta draait sterk. Retargeting levert een ROAS tot 57x en POAS-tracking via de Conversions API stuurt op werkelijke winst in plaats van alleen omzet. Kansen liggen in betere doelgroepverdeling op POAS, verlaging van het awareness-budget (nu 34,8%), consistentere huisstijl in de visuals en meer focus op de showroombeleving in advertenties: een uniek verkoopargument dat nu onderbenut blijft.",
    metrics: [
      { label: "Omzet ROAS", value: "15,80×", sub: "Totale periode", trend: "up" },
      { label: "POAS", value: "8,76×", sub: "aug 2024–juni 2026", trend: "up" },
      { label: "Totaal Spend", value: "€119k", sub: "Totale periode", trend: "neutral" },
      { label: "CPA", value: "€17,58", sub: "Per aankoop", trend: "up" },
    ],
    topAction: "Doelgroepverdeling op POAS + huisstijl in creatives + showroomcontent voor StoreTraffic opschaling",
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
    summary: "De organische basis staat goed: topposities op merknaam en sterke rankings in verlichting. De winst zit nu in structured data, content voor categorieën met hoge marge en betere conversie op product- en categoriepagina's. Elke procent extra conversie maakt álle kanalen winstgevender.",
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
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.78 1.26-5.33 1.26-5.33s-.32-.64-.32-1.59c0-1.49.87-2.61 1.94-2.61.92 0 1.36.69 1.36 1.51 0 .92-.59 2.3-.89 3.58-.25 1.07.53 1.94 1.58 1.94 1.9 0 3.36-2 3.36-4.89 0-2.56-1.84-4.35-4.47-4.35-3.04 0-4.83 2.28-4.83 4.64 0 .92.35 1.9.79 2.44.09.1.1.2.07.3-.08.33-.26 1.07-.3 1.22-.05.2-.16.24-.36.14-1.34-.62-2.18-2.58-2.18-4.15 0-3.38 2.46-6.49 7.09-6.49 3.72 0 6.61 2.65 6.61 6.19 0 3.7-2.33 6.67-5.57 6.67-1.08 0-2.1-.56-2.45-1.23l-.67 2.55c-.24.93-.89 2.1-1.33 2.81A10 10 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    ),
    summary: "De eerste test op Pinterest leverde direct resultaat: €3.000 spend, €47k omzet, een ROAS van 15,65×. Dat smaakt naar meer. Met 172 kopers uit de test is retargeting en lookalikes direct inzetbaar. Het plan: €5.000 per maand, opgebouwd in drie lagen (20% overweging / 30% conversie / 50% catalogus).",
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
    summary: "Hier ligt omzet voor het oprapen. E-mail kost bijna niets en draait 24/7 door. Een welkomstflow en een verlaten-winkelmand reeks verdienen zichzelf direct terug. Daarna bouwen we verder met loyaliteits- en win-back flows.",
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
      <div className="channel-breakdown-hero">
        <div style={{
          position: "absolute", right: -100, top: -100,
          width: 400, height: 400, borderRadius: "50%",
          background: `radial-gradient(circle, ${CYAN}15 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${RED} 0%, ${YELLOW} 33%, ${CYAN} 66%, ${DARK} 100%)` }} />

        <div className="channel-breakdown-hero-inner">
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: CYAN, marginBottom: 14 }}>
            Marketing Intelligence · Woeler × Rietveld
          </div>
          <h1 style={{ fontSize: 46, fontWeight: 800, color: "white", lineHeight: 1.1, marginBottom: 14, maxWidth: 600 }}>
            Kanaaloverzicht <span style={{ color: CYAN }}>2026</span>
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", maxWidth: 500, lineHeight: 1.7, marginBottom: 40 }}>
            Alle marketingrapportages voor Rietveld Licht &amp; Wonen op één plek.
          </p>
          <div className="channel-breakdown-hero-stats">
            {[
              { label: "Google Ads ROAS", value: "5,87", accent: CYAN },
              { label: "Meta Ads ROAS", value: "15,80×", accent: YELLOW },
              { label: "Meta POAS", value: "8,76×", accent: CYAN },
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
      <div className="channel-breakdown-content">
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
          <div style={{ width: 3, height: 16, background: CYAN, borderRadius: 2 }} />
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b7280" }}>Kanalen</span>
        </div>

        <div className="channel-breakdown-grid">
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
                    <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
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
              <div className="channel-breakdown-metrics">
                {ch.metrics.map((m) => (
                  <div key={m.label} className="channel-breakdown-metric">
                    <div style={{ fontSize: 10, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 5 }}>{m.label}</div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: DARK, display: "flex", alignItems: "center", gap: 3 }}>
                      {m.value} <TrendIcon trend={m.trend as "up" | "neutral" | "down"} />
                    </div>
                    <div style={{ fontSize: 10.5, color: "#b0b8c1", marginTop: 2 }}>{m.sub}</div>
                  </div>
                ))}
              </div>

              {/* Top action footer */}
              <div className="channel-breakdown-footer">
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
          <div className="channel-breakdown-quicklinks">
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
