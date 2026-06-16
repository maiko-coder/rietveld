import PresentationNav from "../../_components/PresentationNav";
import { SectionTitle, GoalCard, Callout, DarkTable, ReportContainer, CYAN, YELLOW, DARK } from "../../_components/ReportComponents";

const PINTEREST_RED = "#E60023";

export default function PinterestAdsDoelstellingen() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f4f5f7", minHeight: "100vh" }}>
      <PresentationNav channel="Pinterest Ads" color={PINTEREST_RED} basePath="/pinterest-ads" />

      <div className="report-cover" style={{ background: "linear-gradient(135deg, #bd081c 0%, #e60023 100%)", color: "white" }}>
        <div className="report-cover-inner">
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.6, marginBottom: 12 }}>
            Pinterest Ads Analyse · Rietveld Licht &amp; Wonen · Juni 2026
          </div>
          <h1 style={{ fontSize: 42, fontWeight: 700, lineHeight: 1.1, marginBottom: 16 }}>Doelstellingen</h1>
          <p style={{ fontSize: 16, opacity: 0.75, maxWidth: 520, lineHeight: 1.6, marginBottom: 48 }}>
            Van testcampagne naar structurele inzet op €5.000 per maand
          </p>
          <div className="report-cover-stats">
            {[
              { l: "Test ROAS", v: "15,65×" },
              { l: "Streef ROAS", v: "9–11×" },
              { l: "Maandbudget", v: "€5.000" },
              { l: "Benchmark", v: "8–10×" },
            ].map((m) => (
              <div key={m.l}>
                <div style={{ fontSize: 11, opacity: 0.55, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>{m.l}</div>
                <div style={{ fontSize: 24, fontWeight: 700 }}>{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ReportContainer>

        {/* Hero callout */}
        <SectionTitle>Hoofddoelstelling</SectionTitle>
        <div className="report-feature-card" style={{
          background: DARK,
          borderRadius: 14,
          padding: "28px 32px",
          marginBottom: 8,
          borderLeft: `4px solid ${PINTEREST_RED}`,
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", right: -40, top: -40, width: 200, height: 200, borderRadius: "50%", background: `${CYAN}12`, pointerEvents: "none" }} />
          <div style={{ fontSize: 11, color: PINTEREST_RED, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: 10 }}>Doelstelling</div>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "white", marginBottom: 10, lineHeight: 1.2 }}>Van test naar vaste inzet op €5.000 per maand</h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, margin: 0, maxWidth: 680 }}>
            Eerste campagne: €46.944 omzet en 172 kopers op €3.000. Vervolg: drie lagen (20/30/50) op €5.000 per maand. Budget verder omhoog als ROAS en omzet dat toelaten.
          </p>
          <div style={{ display: "flex", gap: 32, marginTop: 24, flexWrap: "wrap" as const }}>
            {[
              { label: "Test (huidige basis)", value: "€3.000", sub: "Catalogus · 15,65× ROAS", accent: "rgba(255,255,255,0.4)" },
              { label: "Nieuw plan", value: "€5.000/mnd", sub: "20/30/50 verdeling", accent: YELLOW },
              { label: "Streef ROAS", value: "9–11×", sub: "Benchmark: 8–10×", accent: CYAN },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.35)", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 24, fontWeight: 800, color: s.accent }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 3 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ROAS doelen */}
        <SectionTitle accent={YELLOW}>ROAS-doelen per laag</SectionTitle>
        <DarkTable
          headers={["Campagnelaag", "Budget", "Aandeel", "Streef ROAS", "Benadering"]}
          rows={[
            ["Catalogus Sales (Performance+)", "€2.500/mnd", "50%",
              <span key="c" style={{ color: CYAN, fontWeight: 800, fontFamily: "monospace" }}>9–11×</span>,
              "50/50 Prospecting/Retargeting"],
            ["Conversie (retargeting)", "€1.500/mnd", "30%",
              <span key="v" style={{ color: YELLOW, fontWeight: 800, fontFamily: "monospace" }}>12–15×</span>,
              "Sitebezoek, winkelmand, Actalike"],
            ["Overweging (bereik)", "€1.000/mnd", "20%",
              <span key="o" style={{ color: "#9ca3af", fontWeight: 600, fontFamily: "monospace" }}>Branding</span>,
              "CPC, sfeerbeelden, interieur"],
          ]}
        />

        {/* Uitrol fases */}
        <SectionTitle>Plan van aanpak - 2 fases</SectionTitle>
        <div className="report-grid-2" style={{ marginBottom: 8 }}>
          {[
            {
              fase: "Fase 1",
              color: PINTEREST_RED,
              items: [
                { title: "Catalogus live", desc: "Performance+ Catalogue Sales always-on; productfeed; Prospecting/Retargeting 50/50." },
                { title: "Account & tracking", desc: "Check Pinterest tag, checkout events en feed; Conversions API waar nodig voor betere attributie." },
              ],
            },
            {
              fase: "Fase 2",
              color: CYAN,
              items: [
                { title: "Overwegingslaag", desc: "Consideration live (20% budget): sfeer- en interieurcontent voor het assortiment." },
                { title: "Conversie & doelgroepen", desc: "Conversielaag: retargeting + Actalike op de 172 checkoutklanten uit de test." },
              ],
            },
          ].map((f) => (
            <div key={f.fase} style={{ background: "white", borderRadius: 12, padding: "20px 22px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", borderTop: `3px solid ${f.color}` }}>
              <div style={{ fontSize: 11, color: f.color, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: 16 }}>{f.fase}</div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 14 }}>
                {f.items.map((item) => (
                  <div key={item.title} style={{ display: "flex", gap: 12 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: f.color, flexShrink: 0, marginTop: 5 }} />
                    <div>
                      <div style={{ fontSize: 13.5, fontWeight: 700, color: DARK, marginBottom: 3 }}>{item.title}</div>
                      <div style={{ fontSize: 12.5, color: "#6b7280", lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: "white", borderRadius: 12, padding: "16px 22px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", borderLeft: `4px solid ${YELLOW}`, marginBottom: 8, display: "flex", gap: 12 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: YELLOW, flexShrink: 0, marginTop: 5 }} />
          <div>
            <div style={{ fontSize: 13.5, fontWeight: 700, color: DARK, marginBottom: 3 }}>Doorlopend - Optimalisatie & rapportage</div>
            <div style={{ fontSize: 12.5, color: "#6b7280", lineHeight: 1.6 }}>ROAS, budget en creatives per laag bijhouden, bijsturen op accountdata, maandelijks rapporteren aan Rietveld Licht.</div>
          </div>
        </div>

        {/* KPI doelen */}
        <SectionTitle accent={YELLOW}>Doelen over 6 maanden</SectionTitle>
        <div className="report-grid-3" style={{ marginBottom: 16 }}>
          <GoalCard label="Account ROAS (blended)" now="15,65× (test)" goal="9–11×" />
          <GoalCard label="Maandbudget" now="€3.000 (test)" goal="€5.000/mnd" />
          <GoalCard label="Maandomzet (streef)" now="€46.944 (test)" goal="€45–55k/mnd" />
        </div>

        <Callout>
          De streef-ROAS van 9–11× ligt bewust lager dan de testcampagne (15,65×): bij een groter en gestructureerd budget met prospecting, overweging én conversie is een blended ROAS van 9–11× realistisch en boven de e-commerce benchmark van 8–10×. Budget wordt opgeschaald zodra ROAS en omzetdata dat onderbouwen.
        </Callout>

      </ReportContainer>
    </div>
  );
}
