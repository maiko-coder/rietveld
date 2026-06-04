import Link from "next/link";

const CHANNELS = [
  {
    id: "google-ads",
    label: "Google Ads",
    color: "#2563eb",
    colorLight: "#eff6ff",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="#2563eb" />
        <path d="M4.5 9.5L12 4l7.5 5.5-7.5 11z" fill="none" stroke="#2563eb" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" fill="#2563eb" opacity="0.3" />
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
  },
  {
    id: "meta-ads",
    label: "Meta Ads",
    color: "#1877f2",
    colorLight: "#ebf3ff",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="#1877f2">
        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
      </svg>
    ),
    summary: "Uitzonderlijk sterke accountprestaties over de totale meetperiode (sept 2023 – mei 2026). De retargeting-campagnes leveren ROAS tot 69x. POAS-tracking via Conversions API maakt optimalisatie op werkelijke marge mogelijk — een significante voorsprong op concurrenten.",
    metrics: [
      { label: "Omzet ROAS", value: "15,74x", sub: "Totale periode", trend: "up" },
      { label: "POAS", value: "9,46x", sub: "aug 2024–mei 2026", trend: "up" },
      { label: "Totaal Spend", value: "€115k", sub: "Totale periode", trend: "neutral" },
      { label: "CPA", value: "€17,78", sub: "Per aankoop", trend: "up" },
    ],
    topAction: "Retargeting verder uitbreiden + Advantage+ Shopping opschalen",
  },
  {
    id: "seo-cro",
    label: "SEO / CRO",
    color: "#059669",
    colorLight: "#ecfdf5",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#059669" strokeWidth="1.8">
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
  },
  {
    id: "marketing-automation",
    label: "Marketing Automation",
    color: "#7c3aed",
    colorLight: "#f5f3ff",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#7c3aed" strokeWidth="1.8">
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
  },
];

function TrendIcon({ trend }: { trend: "up" | "neutral" | "down" }) {
  if (trend === "up") return <span style={{ color: "#059669", fontSize: 12, fontWeight: 700 }}>↑</span>;
  if (trend === "down") return <span style={{ color: "#dc2626", fontSize: 12, fontWeight: 700 }}>↓</span>;
  return <span style={{ color: "#9ca3af", fontSize: 12 }}>→</span>;
}

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fb", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg, #262626 0%, #1a1a1a 60%, #0d2233 100%)",
        padding: "72px 32px 64px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative stripe */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #ed1c23 0%, #fecb09 33%, #00adef 66%, #262626 100%)" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#00adef", marginBottom: 14 }}>
            Marketing Intelligence · Woeler × Rietveld
          </div>
          <h1 style={{ fontSize: 48, fontWeight: 800, color: "white", lineHeight: 1.1, marginBottom: 16, maxWidth: 640 }}>
            Kanaaloverzicht<br />
            <span style={{ color: "#00adef" }}>2026</span>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", maxWidth: 520, lineHeight: 1.7, marginBottom: 40 }}>
            Alle marketingrapportages voor Rietveld Licht & Wonen op één plek. Volledige analyses, samenvattingen en doelstellingen per kanaal.
          </p>

          {/* Summary stats strip */}
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            {[
              { label: "Google Ads ROAS", value: "5,87", accent: "#00adef" },
              { label: "Meta Ads ROAS", value: "15,74×", accent: "#fecb09" },
              { label: "Meta POAS", value: "9,46×", accent: "#00adef" },
              { label: "Google Spend", value: "€2,1M", accent: "#fecb09" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 28, fontWeight: 800, color: s.accent }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Channel cards */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 32px 0" }}>
        <h2 style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 24 }}>
          Kanalen
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(520px, 1fr))", gap: 24 }}>
          {CHANNELS.map((ch) => (
            <div key={ch.id} style={{
              background: "white",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 1px 3px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)",
              border: "1px solid #f0f0f0",
              display: "flex",
              flexDirection: "column",
            }}>
              {/* Card header */}
              <div style={{ padding: "24px 28px 20px", borderBottom: "1px solid #f3f4f6" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 16 }}>
                  <div style={{
                    width: 52,
                    height: 52,
                    borderRadius: 12,
                    background: ch.colorLight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    {ch.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: 0, marginBottom: 4 }}>{ch.label}</h3>
                    <div style={{ display: "flex", gap: 6 }}>
                      {["Compleet", "Samenvatting", "Doelstellingen"].map((t) => (
                        <Link
                          key={t}
                          href={`/${ch.id}/${t.toLowerCase()}`}
                          style={{
                            fontSize: 11,
                            fontWeight: 500,
                            padding: "2px 10px",
                            borderRadius: 20,
                            background: ch.colorLight,
                            color: ch.color,
                            border: `1px solid ${ch.color}22`,
                          }}
                        >
                          {t}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: 13.5, color: "#4b5563", lineHeight: 1.75, margin: 0 }}>{ch.summary}</p>
              </div>

              {/* Metrics strip */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderBottom: "1px solid #f3f4f6" }}>
                {ch.metrics.map((m, i) => (
                  <div key={m.label} style={{
                    padding: "14px 16px",
                    borderRight: i < 3 ? "1px solid #f3f4f6" : "none",
                  }}>
                    <div style={{ fontSize: 10.5, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>{m.label}</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#111827", display: "flex", alignItems: "center", gap: 4 }}>
                      {m.value} <TrendIcon trend={m.trend as "up" | "neutral" | "down"} />
                    </div>
                    <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>{m.sub}</div>
                  </div>
                ))}
              </div>

              {/* Top action */}
              <div style={{ padding: "14px 20px", background: "#fafafa", display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: ch.color, flexShrink: 0 }} />
                <span style={{ fontSize: 12.5, color: "#374151", lineHeight: 1.5 }}>
                  <strong style={{ color: ch.color }}>Topprioriteit:</strong> {ch.topAction}
                </span>
                <div style={{ flex: 1 }} />
                <Link href={`/${ch.id}/samenvatting`} style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: ch.color,
                  padding: "6px 14px",
                  borderRadius: 8,
                  background: ch.colorLight,
                  border: `1px solid ${ch.color}22`,
                  whiteSpace: "nowrap",
                }}>
                  Bekijk →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Quick links section */}
        <div style={{ marginTop: 56, marginBottom: 8 }}>
          <h2 style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 20 }}>
            Snelle toegang
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
            {CHANNELS.flatMap((ch) => ["compleet", "samenvatting", "doelstellingen"].map((type) => ({
              label: `${ch.label} · ${type.charAt(0).toUpperCase() + type.slice(1)}`,
              href: `/${ch.id}/${type}`,
              color: ch.color,
              colorLight: ch.colorLight,
            }))).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  padding: "12px 16px",
                  background: "white",
                  border: "1px solid #f0f0f0",
                  borderLeft: `3px solid ${link.color}`,
                  borderRadius: 8,
                  fontSize: 12.5,
                  color: "#374151",
                  fontWeight: 500,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  transition: "box-shadow 0.15s",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
