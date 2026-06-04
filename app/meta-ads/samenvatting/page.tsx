import PresentationNav from "../../_components/PresentationNav";
import { PageHero, SectionTitle, SimpleStatCard, Callout, DarkTable, PriorityCard, GoalCard, CYAN, RED, YELLOW, DARK } from "../../_components/ReportComponents";

export default function MetaAdsSamenvatting() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f4f5f7", minHeight: "100vh" }}>
      <PresentationNav channel="Meta Ads" color={CYAN} basePath="/meta-ads" />

      <PageHero
        channel="Meta Ads"
        title="Samenvatting"
        subtitle="Kern van de analyse en aanbevelingen op één pagina"
        stats={[
          { label: "Omzet ROAS", value: "15,74×", accent: "cyan" },
          { label: "POAS", value: "9,46×", accent: "yellow" },
          { label: "Totaal Spend", value: "€115k", accent: "white" },
          { label: "CPA", value: "€17,78", accent: "cyan" },
        ]}
      />

      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "8px 28px 60px" }}>

        <SectionTitle>Accountprestaties (sept 2023 – mei 2026)</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 24 }}>
          <SimpleStatCard label="Omzet ROAS" value="15,74×" sub="Totale periode" />
          <SimpleStatCard label="Totaal spend" value="€115k" sub="Totale periode" />
          <SimpleStatCard label="POAS" value="9,46×" sub="aug 2024 – mei 2026" />
          <SimpleStatCard label="CPA" value="€17,78" sub="kosten per aankoop" />
        </div>

        <Callout>
          Het account presteert ruim boven de minimale ROAS-doelstelling van 6× voor Nederland. De POAS-tracking via Conversions API is een geavanceerde implementatie die de meeste concurrenten niet hebben en die optimalisatie op winstgevendheid mogelijk maakt.
        </Callout>

        <SectionTitle>Top campagnes</SectionTitle>
        <DarkTable
          headers={["Campagnetype", "ROAS", "POAS", "Beoordeling"]}
          rows={[
            ["RTG USP 2026", "69,6×", "40,93×", <span key="a" style={{ background: "#f0fdf4", color: "#16a34a", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>Uitzonderlijk sterk</span>],
            ["StoreTraffic (showroom)", "35,6×", "20,25×", <span key="b" style={{ background: "#f0fdf4", color: "#16a34a", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>Zeer sterk</span>],
            ["Retargeting RTG ROAS", "12,7×", "7,11×", <span key="c" style={{ background: "#f0fdf4", color: "#16a34a", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>Sterk</span>],
            ["Advantage+ Shopping", "14,8×", "8,18×", <span key="d" style={{ background: "#f0fdf4", color: "#16a34a", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>Solide</span>],
            ["Qvisits (branding)", "0,76×", "—", <span key="e" style={{ background: "#fef9e7", color: "#b45309", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>Bewust brandingdoel</span>],
          ]}
        />

        <SectionTitle accent={YELLOW}>3 directe prioriteiten</SectionTitle>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 8 }}>
          <PriorityCard num="01" color={RED} title="Pixel koppelen aan catalogus (DPA's)" desc="Grootste technische gemiste kans. Verwachte retargeting ROAS stijgt van 29× naar 35–45×. Lage inspanning, maximale impact." />
          <PriorityCard num="02" color={CYAN} title="Budgetverschuiving op basis van POAS" desc="65+ vrouwen krijgen 22% van budget op 3,10× POAS. 55–64 mannen presteren op 31,10× op slechts 5,8% budget. Verschuiving -20% → ROAS stijgt direct." />
          <PriorityCard num="03" color={YELLOW} title="Event match quality verbeteren (q_visit)" desc="Score nu 4,9/10, doel 7+. Betere kwaliteit verbetert doelgroepoptimalisatie van Qvisits-campagnes significant." />
        </div>

        <SectionTitle accent={YELLOW}>Groeidoelstellingen</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          <GoalCard label="Blended ROAS NL" now="16,36×" goal="≥20× (fase 3)" />
          <GoalCard label="POAS" now="9,46×" goal="≥13× (fase 3)" />
          <GoalCard label="CPA webshop" now="€17,18" goal="≤€15 (fase 3)" />
        </div>

      </div>
    </div>
  );
}
