"use client";
import Link from "next/link";

const CYAN = "#00adef";
const YELLOW = "#fecb09";
const DARK = "#262626";
const RED = "#ed1c23";

const CASES = [
  {
    href: "/cases/mhk",
    label: "Case Study · MHK",
    title: "Van pitch naar internationale groeipartner",
    subtitle: "Europa's grootste inkooporganisatie in de keuken- en interieurbranche",
    description:
      "Wat acht jaar geleden begon met een pitch voor REDDY Keukens, groeide uit tot een internationaal schaalbaar marketingmodel. Woeler is vandaag de officiële online marketingpartner van MHK Nederland: zes franchiseformules in Nederland en België, ruim 250 ondernemers, aangestuurd met een omnichannel strategie en eigen AI-oplossingen.",
    stats: [
      { label: "Samenwerking", value: "8 jaar" },
      { label: "Ondernemers", value: "250+" },
      { label: "Bezoekersgroei (uitschieter)", value: "+848%" },
    ],
    tags: ["Omnichannel", "AI", "Franchise", "Internationaal"],
    accent: CYAN,
  },
  {
    href: "/cases/manoir",
    label: "Case Study · Manoir",
    title: "Woeler goes America!",
    subtitle: "Meubel- en interieurmerk uit Boston",
    description:
      "Manoir is een Frans-geïnspireerd meubelmerk opgericht door Elizabeth Jones. Via een combinatie van Meta Ads en Google Ads heeft Woeler de maandelijkse omzet met meer dan 1000% laten groeien - en de gemiddelde orderwaarde met 24% verhoogd.",
    stats: [
      { label: "Gemiddelde orderwaarde", value: "+24%" },
      { label: "Maandelijkse omzet", value: "+1000%" },
      { label: "Omzetgroei in 1 jaar", value: "5×" },
    ],
    tags: ["Meta Ads", "Google Ads", "VS-markt"],
    accent: CYAN,
  },
  {
    href: "/cases/dakvoordeelshop",
    label: "Case Study · Dakvoordeelshop",
    title: "Duurzame omzetgroei met behoud van rendement",
    subtitle: "Specialist in EPDM & dakbedekking",
    description:
      "Dakvoordeelshop is een gevestigde webshop voor EPDM, dakbedekking en accessoires. Door productsegmentatie, feed-optimalisatie en gefaseerde budgetverhogingen groeide de omzet fors - terwijl de ROAS stabiel bleef tussen de 5 en 6.",
    stats: [
      { label: "Omzetgroei maart (YoY)", value: "+47%" },
      { label: "Omzetgroei april (YoY)", value: "+24%" },
      { label: "ROAS", value: "5–6×" },
    ],
    tags: ["Google Ads", "E-commerce", "Seizoensstrategie"],
    accent: YELLOW,
  },
];

export default function CasesPage() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f3f4f6", minHeight: "100vh" }}>

      {/* Hero */}
      <div style={{ background: DARK, color: "white", padding: "52px 32px 48px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -80, top: -80, width: 360, height: 360, borderRadius: "50%", background: `radial-gradient(circle, ${CYAN}15 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1040, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `${CYAN}20`, border: `1px solid ${CYAN}40`, borderRadius: 20, padding: "4px 12px", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: CYAN, marginBottom: 16 }}>
            Cases · Rietveld Licht & Wonen
          </div>
          <h1 style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.1, margin: "0 0 12px" }}>Succescases</h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", maxWidth: 520, margin: 0 }}>
            Een selectie van klanten waarbij Woeler aantoonbaar heeft bijgedragen aan groei in omzet, zichtbaarheid en rendement.
          </p>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${RED} 0%, ${YELLOW} 33%, ${CYAN} 66%, ${DARK} 100%)` }} />
      </div>

      {/* Cases */}
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "44px 32px 64px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {CASES.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              style={{ textDecoration: "none", display: "block" }}
            >
              <div
                style={{
                  background: "white",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  borderTop: `4px solid ${c.accent}`,
                  transition: "box-shadow 0.15s, transform 0.15s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px rgba(0,0,0,0.1)`;
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div style={{ padding: "32px 36px", display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "start" }}>

                  {/* Left: content */}
                  <div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `${c.accent}15`, border: `1px solid ${c.accent}30`, borderRadius: 20, padding: "3px 10px", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: c.accent === CYAN ? "#0d6e9a" : "#7a5f0a", marginBottom: 14 }}>
                      {c.label}
                    </div>
                    <h2 style={{ fontSize: 24, fontWeight: 800, color: DARK, margin: "0 0 4px", lineHeight: 1.2 }}>{c.title}</h2>
                    <div style={{ fontSize: 13, color: "#9ca3af", marginBottom: 16, fontWeight: 500 }}>{c.subtitle}</div>
                    <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.8, margin: "0 0 20px", maxWidth: 560 }}>{c.description}</p>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {c.tags.map((tag) => (
                        <span key={tag} style={{ fontSize: 11.5, fontWeight: 600, padding: "4px 10px", borderRadius: 6, background: "#f3f4f6", color: "#6b7280" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: stats */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 160 }}>
                    {c.stats.map((s) => (
                      <div
                        key={s.label}
                        style={{ background: "#f9fafb", borderRadius: 10, padding: "14px 18px", textAlign: "right", borderRight: `3px solid ${c.accent}` }}
                      >
                        <div style={{ fontSize: 22, fontWeight: 900, color: DARK, lineHeight: 1 }}>{s.value}</div>
                        <div style={{ fontSize: 10.5, color: "#9ca3af", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
                      </div>
                    ))}
                    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 4 }}>
                      <span style={{ fontSize: 12.5, fontWeight: 600, color: c.accent, display: "flex", alignItems: "center", gap: 4 }}>
                        Bekijk case
                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke={c.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
