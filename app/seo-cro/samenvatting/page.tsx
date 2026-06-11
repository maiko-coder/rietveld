import PresentationNav from "../../_components/PresentationNav";
import { PageHero, SectionTitle, SimpleStatCard, Callout, DarkTable, PriorityCard, GoalCard, CYAN, RED, YELLOW } from "../../_components/ReportComponents";

export default function SeoCroSamenvatting() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f4f5f7", minHeight: "100vh" }}>
      <PresentationNav channel="SEO / CRO" color={CYAN} basePath="/seo-cro" />

      <PageHero
        channel="SEO / CRO"
        title="Samenvatting"
        subtitle="Wat goed staat en waar de winst zit"
        stats={[
          { label: "Health Score", value: "92/100", accent: "cyan" },
          { label: "Conversieratio", value: "2,41%", accent: "yellow" },
          { label: "Mobiel aandeel", value: "69%", accent: "white" },
          { label: "CRO potentieel", value: "Hoog", accent: "cyan" },
        ]}
      />

      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "8px 28px 60px" }}>

        <SectionTitle>Uitgangspositie</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 24 }}>
          <SimpleStatCard label="Health Score" value="92/100" sub="Technisch sterk" />
          <SimpleStatCard label="Huidige conv.rate" value="2,41%" sub="Sitebreed" />
          <SimpleStatCard label="Mobiel conv.rate" value="2,26%" sub="69% van verkeer" />
          <SimpleStatCard label="Desktop conv.rate" value="3,12%" sub="31% van verkeer" />
        </div>

        <Callout>
          De techniek staat goed, daar hoeven we weinig aan te doen. De winst zit in structured data en content. En elke procent extra conversie maakt álle betaalde kanalen automatisch winstgevender. Daarom pakken we CRO direct mee.
        </Callout>

        <SectionTitle>SEO - top prioriteiten</SectionTitle>
        <DarkTable
          headers={["Actie", "Impact", "Inspanning", "Effect"]}
          rows={[
            ["Product + Offer schema (2.340 productpagina's)", <span key="a" style={{ background: "#fef2f2", color: "#dc2626", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>Zeer hoog</span>, "Middel", "+3–8% CTR productpagina's"],
            ["FAQ + Breadcrumb schema", <span key="b" style={{ background: "#fef2f2", color: "#dc2626", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>Hoog</span>, "Laag", "+2–5% CTR sitebreed"],
            ["Alt-teksten (989 pagina's)", <span key="c" style={{ background: "#fef2f2", color: "#dc2626", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>Hoog</span>, "Middel", "+2–4% via Google Afbeeldingen"],
            ["Hreflang fixes (424 pagina's)", <span key="d" style={{ background: "#fef9e7", color: "#b45309", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>Hoog</span>, "Middel", "Internationaal verlies stoppen"],
            ["Categorieteksten uitbreiden", <span key="e" style={{ background: "#fef9e7", color: "#b45309", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>Hoog</span>, "Hoog", "+3–8% organisch na 4–6 mnd"],
            ["2 SEO-blogs per maand", <span key="f" style={{ background: "#f3f4f6", color: "#6b7280", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>Middel</span>, "Hoog", "Effect na 6–12 maanden"],
          ]}
        />

        <SectionTitle accent={YELLOW}>CRO - top prioriteiten</SectionTitle>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 8 }}>
          <PriorityCard num="01" color="#16a34a" title="Review score prominenter (9,4 / 24.450 reviews)" desc="Uitzonderlijk sterk social proof - nu statisch en nauwelijks zichtbaar op het beslissingsmoment. Reviewslider homepage + badge bij checkout." />
          <PriorityCard num="02" color="#16a34a" title="Mobiel menu + USP-balk verbeteren" desc="69% verkeer is mobiel maar converteert 27% slechter dan desktop. Transparant menu en hoge USP-balk zijn aantoonbare frictie. Lage inspanning." />
          <PriorityCard num="03" color={CYAN} title="Winkelwagen sticky op desktop" desc="Verdwijnt nu bij scrollen - gemiste kans op het moment dat iemand klaar is om te kopen. Technisch eenvoudig." />
          <PriorityCard num="04" color={YELLOW} title="Klarna / Afterpay integreren" desc="Gemiddelde orderwaarde €183–246 - spreid betalen verlaagt aankoopdrempel. Eerst checkout-uitvaldata analyseren voor beslissing." />
        </div>

        <SectionTitle accent={YELLOW}>Verwachte resultaten (3–6 maanden)</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          <GoalCard label="Organisch verkeer" now="basis" goal="+5–10%" />
          <GoalCard label="Conversieratio doel" now="2,41%" goal="2,6–2,8%" />
          <GoalCard label="ROAS-effect (indirect)" now="-" goal="+0,1–0,2×" />
        </div>

      </div>
    </div>
  );
}
