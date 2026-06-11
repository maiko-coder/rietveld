import PresentationNav from "../../_components/PresentationNav";
import { PageHero, SectionTitle, StatCard, Callout, DarkTable, PriorityCard, GoalCard, CYAN, RED, YELLOW } from "../../_components/ReportComponents";

export default function GoogleAdsSamenvatting() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f4f5f7", minHeight: "100vh" }}>
      <PresentationNav channel="Google Ads" color={CYAN} basePath="/google-ads" />

      <PageHero
        channel="Google Ads"
        title="Samenvatting"
        subtitle="Hoe het account ervoor staat en wat we als eerste oppakken"
        stats={[
          { label: "Account ROAS", value: "5,87", accent: "cyan" },
          { label: "Spend huidig jaar", value: "€2,1M", accent: "yellow" },
          { label: "Omzet", value: "€12,5M", accent: "cyan" },
          { label: "CPA", value: "€31,85", accent: "white" },
        ]}
      />

      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "8px 28px 60px" }}>

        <SectionTitle>Accountprestaties op een rij</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 24 }}>
          <StatCard label="Spend (huidig jaar)" value="€2,1M" delta="+67% t.o.v. vorig jaar" positive={true} />
          <StatCard label="Omzet" value="€12,5M" delta="+52% t.o.v. vorig jaar" positive={true} />
          <StatCard label="Account ROAS" value="5,87" delta="Was 6,43 vorig jaar" positive={false} />
          <StatCard label="CPA" value="€31,85" delta="Was €26 vorig jaar" positive={false} />
        </div>

        <Callout>
          Het account groeit hard, en dat mag wat ROAS kosten: de daling van 6,43 naar 5,87 hoort bij opschalen. Die efficiëntie halen we terug. De structuur kan scherper, en daar beginnen we mee.
        </Callout>

        <SectionTitle>Campagnes - huidige prestaties</SectionTitle>
        <DarkTable
          headers={["Campagne", "ROAS Nu", "Doel", "Prioriteit"]}
          rows={[
            ["Wolves / Sheep", "~5,2", "5,5+", <span key="a" style={{ background: "#fef9e7", color: "#b45309", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>Medium</span>],
            ["Bestsellers", "3,88", "4,5–5,0", <span key="b" style={{ background: "#fef2f2", color: "#dc2626", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>Hoog</span>],
            ["Sale", "3,44", "4,0+", <span key="c" style={{ background: "#fef2f2", color: "#dc2626", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>Hoog</span>],
            ["Premium €400+ (nieuw)", "12–13×", "8,0+ (op €75–100k)", <span key="d" style={{ background: "#f0fdf4", color: "#16a34a", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>Kans</span>],
          ]}
        />

        <SectionTitle accent={YELLOW}>Top 3 prioriteiten</SectionTitle>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 8 }}>
          <PriorityCard num="01" color={RED} title="tROAS instellen op Bestsellers & Sale" desc="€420k spend op campagnes zonder doelstelling - tROAS instellen verwacht ROAS van ~3,6 naar 4,0–4,5 te brengen" />
          <PriorityCard num="02" color="#16a34a" title="Premium €400+ campagne opschalen" desc="Segment haalt 12–13× ROAS op €12k spend. Opschalen naar €75–100k levert +€350–500k extra omzet op" />
          <PriorityCard num="03" color={CYAN} title="PMax splitsen op producttype" desc="Spots, inbouwlampen en tafellampen concurreren nu met hanglampen - splitsing geeft elk type eigen budget en doel" />
        </div>

        <SectionTitle accent={YELLOW}>Doel over 6 maanden</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          <GoalCard label="Account ROAS" now="5,87" goal="6,3 – 6,5" />
          <GoalCard label="CPA" now="€31,85" goal="€27 – 29" />
          <GoalCard label="Omzetgroei" now="basis" goal="+8 – 12%" />
        </div>

      </div>
    </div>
  );
}
