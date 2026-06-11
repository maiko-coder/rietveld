import PresentationNav from "../../_components/PresentationNav";
import { PageHero, SectionTitle, Callout, GoalCard, CYAN, RED, YELLOW, DARK } from "../../_components/ReportComponents";

export default function MarketingAutomationSamenvatting() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f4f5f7", minHeight: "100vh" }}>
      <PresentationNav channel="Marketing Automation" color={CYAN} basePath="/marketing-automation" />

      <PageHero
        channel="Marketing Automation"
        title="Samenvatting"
        subtitle="Vier flows die zichzelf terugverdienen"
        stats={[
          { label: "Flows te starten", value: "4", accent: "cyan" },
          { label: "Eerste 60 dagen", value: "2 flows", accent: "yellow" },
          { label: "E-mail aandeel doel", value: "22%", accent: "cyan" },
          { label: "Omzetpotentieel", value: "Hoog", accent: "white" },
        ]}
      />

      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "8px 28px 60px" }}>

        <SectionTitle>Vier kernflows</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14, marginBottom: 8 }}>
          {[
            { num: "01", title: "Welkomst & Onboarding", priority: "Start", pColor: RED, desc: "3 e-mails over 7 dagen. Direct → Dag 3 (inspiratie) → Dag 7 (aanbod met vervaldatum).", items: ["Vertrouwen opbouwen vóór producten tonen", "Klikgedrag meten om klantinteresse te bepalen", "Eerste aankoop stimuleren via urgentie-aanbod"] },
            { num: "02", title: "Verlaten Winkelwagen", priority: "Start", pColor: RED, desc: "3 e-mails over 48 uur. 60min → 24u → 48u.", items: ["Herinnering zonder korting (60 min)", "Hulp aanbieden + alternatieven (24u)", "Gratis bezorging of €10 korting (48u - laatste kans)"] },
            { num: "03", title: "Post-aankoop & Loyaliteit", priority: "Jaar 1", pColor: YELLOW, desc: "4 e-mails over 30 dagen. Direct → Dag 3 → Dag 14 → Dag 30.", items: ["Bevestiging + installatie-tips (retourkans verlagen)", "Review uitnodiging (dag 14 - optimale timing)", "Cross-sell op basis van aankoopcategorie (dag 30)"] },
            { num: "04", title: "Win-back", priority: "Jaar 1", pColor: YELLOW, desc: "3 e-mails over 28 dagen bij inactiviteit >90 dagen.", items: ["Inspiratie zonder druk (dag 0)", "Concreet aanbod 15% korting (dag 14)", "Laatste kans of uitschrijven (dag 28 - lijstkwaliteit)"] },
          ].map((f) => (
            <div key={f.num} style={{ background: "white", borderRadius: 12, padding: "20px 22px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", borderLeft: `4px solid ${f.pColor}` }}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: f.pColor, color: "white", fontSize: 14, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{f.num}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: DARK, marginBottom: 4 }}>{f.title}</div>
                  <span style={{ background: `${f.pColor}20`, color: f.pColor, fontSize: 11, fontWeight: 700, padding: "2px 9px", borderRadius: 20 }}>Prioriteit: {f.priority}</span>
                </div>
              </div>
              <div style={{ fontSize: 12.5, color: CYAN, fontWeight: 600, marginBottom: 8 }}>{f.desc}</div>
              <ul style={{ paddingLeft: 16, margin: 0 }}>
                {f.items.map((item) => <li key={item} style={{ fontSize: 12, color: "#6b7280", marginBottom: 3, lineHeight: 1.55 }}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <SectionTitle accent={YELLOW}>3 strategische principes</SectionTitle>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 8 }}>
          {[
            { title: "Automation boven campagnes", desc: "Flows draaien 24/7 en zijn altijd relevant. Nieuwsbrieven zijn eenmalig en generisch. Elke investering in automation betaalt zich terug zolang het platform draait.", color: CYAN },
            { title: "Segmentatie als voorwaarde voor relevantie", desc: "Eén bericht aan de hele lijst is een gemiste kans. Zelfs een simpele tweedeling (nieuwe vs. terugkerende klanten) verdubbelt de effectiviteit.", color: CYAN },
            { title: "Consistente meting en bijsturing", desc: "Een e-mailprogramma dat niet gemeten wordt, verbetert niet. Plan de maandelijkse KPI-review als vaste afspraak en handel op de uitkomsten.", color: CYAN },
          ].map((p, i) => (
            <div key={i} style={{ background: "white", borderRadius: 12, padding: "18px 22px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", borderLeft: `4px solid ${p.color}`, display: "flex", gap: 14 }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: CYAN, color: "white", fontSize: 12, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: DARK, marginBottom: 4 }}>{p.title}</div>
                <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65 }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <SectionTitle>KPI-targets (12 maanden)</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 8 }}>
          {[
            { l: "Openrate nieuwsbrief", v: "32%" },
            { l: "Click-through rate", v: "5%" },
            { l: "Winkelwagen conv.", v: "11%" },
            { l: "E-mail aandeel omzet", v: "22%" },
          ].map((k) => (
            <GoalCard key={k.l} label={k.l} now="-" goal={k.v} />
          ))}
        </div>

        <SectionTitle accent={RED}>Eerste 60 dagen - begin hier</SectionTitle>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            "E-mailplatform kiezen en koppelen aan webshop - zonder dit kan niets starten",
            "Welkomstflow live zetten - elke nieuwe abonnee verdient een goede eerste indruk",
            "Verlaten winkelwagen flow activeren - snelste directe ROI-generator binnen e-mail",
            "Exit-intent pop-up live op webshop + medewerkers instrueren in winkel",
            "Bestaande e-maillijst importeren en opschonen",
          ].map((item, i) => (
            <div key={i} style={{ background: "white", borderRadius: 10, padding: "13px 18px", display: "flex", gap: 14, alignItems: "flex-start", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", borderLeft: `3px solid ${i < 3 ? RED : YELLOW}` }}>
              <div style={{ width: 26, height: 26, borderRadius: 6, background: i < 3 ? RED : YELLOW, color: "white", fontSize: 12, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</div>
              <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.6, paddingTop: 2 }}>{item}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
