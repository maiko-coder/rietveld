import PresentationNav from "../../_components/PresentationNav";
import { PageHero, SectionTitle, SimpleStatCard, Callout, DarkTable, PriorityCard, ReportContainer, Grid4, Grid3, CYAN, RED, YELLOW, DARK } from "../../_components/ReportComponents";

const PINTEREST_RED = "#e60023";

export default function PinterestAdsSamenvatting() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f4f5f7", minHeight: "100vh" }}>
      <PresentationNav channel="Pinterest Ads" color={CYAN} basePath="/pinterest-ads" />

      <PageHero
        channel="Pinterest Ads"
        title="Samenvatting"
        subtitle="De eerste testresultaten en het vervolgplan · Account 549760421679"
        stats={[
          { label: "ROAS (test)", value: "15,65×", accent: "cyan" },
          { label: "Omzet test", value: "€46.944", accent: "yellow" },
          { label: "Spend test", value: "€3.000", accent: "white" },
          { label: "Checkouts", value: "172", accent: "cyan" },
        ]}
      />

      <ReportContainer>

        <SectionTitle>Accountprestaties - 4 mrt t/m 1 jun 2026</SectionTitle>
        <Grid4 style={{ marginBottom: 8 }}>
          <SimpleStatCard label="Totaal spend" value="€3.000" sub="Testperiode" />
          <SimpleStatCard label="Omzet (checkout)" value="€46.944" sub="Testperiode" />
          <SimpleStatCard label="ROAS" value="15,65×" sub="Performance+" />
          <SimpleStatCard label="CTR" value="0,63%" sub="557.476 impressies" />
        </Grid4>
        <Grid3 style={{ marginBottom: 24 }}>
          <SimpleStatCard label="Checkouts" value="172" sub="Kopers uit test" />
          <SimpleStatCard label="Clicks (Pin)" value="3.506" sub="Outbound: 3.620" />
          <SimpleStatCard label="Impressies" value="557.476" sub="Kernperiode" />
        </Grid3>

        <Callout>
          Met €3.000 testbudget werd €47k omzet behaald: een ROAS van 15,65×. Retargeting deed het nog beter dan prospecting (18,62× om 13,76×). Met 172 kopers uit de test is direct doorgaan met retargeting en lookalikes mogelijk.
        </Callout>

        <SectionTitle>Prospecting vs. Retargeting</SectionTitle>
        <DarkTable
          headers={["Segment", "Budget", "Aandeel", "ROAS", "CTR"]}
          rows={[
            ["Retargeting", "€923", "30,8%",
              <span key="r-roas" style={{ color: CYAN, fontWeight: 800, fontFamily: "monospace" }}>18,62×</span>,
              "0,81%"],
            ["Prospecting", "€2.034", "67,8%",
              <span key="p-roas" style={{ fontWeight: 700, fontFamily: "monospace" }}>13,76×</span>,
              "0,58%"],
          ]}
        />
        <div style={{ background: `${YELLOW}15`, border: `1px solid ${YELLOW}40`, borderLeft: `4px solid ${YELLOW}`, borderRadius: 10, padding: "14px 18px", marginBottom: 8 }}>
          <p style={{ fontSize: 13.5, color: "#7a5a00", lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
            Retargeting scoort hoger, maar prospecting brengt nieuwe klanten binnen. Daarom verschuift het budget naar 50/50 binnen catalogus, met extra overweging- en conversielagen voor meer bereik.
          </p>
        </div>

        <SectionTitle>Campagnes</SectionTitle>
        <DarkTable
          headers={["Campagne", "Periode", "Status", "Spend", "ROAS"]}
          rows={[
            ["Performance+ Catalogue Sales", "23 mrt – 20 apr 2026",
              <span key="s1" style={{ background: "#f0fdf4", color: "#16a34a", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>Afgerond</span>,
              "€3.000", "15,65×"],
            ["Traffic Clicks M6", "28 apr – 31 jul 2026",
              <span key="s2" style={{ background: "#f3f4f6", color: "#6b7280", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>Niet gestart</span>,
              "€0", "n.v.t."],
          ]}
        />

        <SectionTitle accent={YELLOW}>Top 6 kansen</SectionTitle>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 8 }}>
          <PriorityCard num="01" color={PINTEREST_RED} title="Retargeting & lookalikes direct inzetten" desc="172 checkoutklanten beschikbaar als basis voor retargeting en Actalike-doelgroepen - direct inzetbaar zonder extra testperiode." />
          <PriorityCard num="02" color={CYAN} title="Overwegingscampagne toevoegen (20% budget)" desc="Bereik en herkenbaarheid vóór de shop via sfeer- en interieurcontent. Voedt de catalogus- en conversielaag met meer warm verkeer." />
          <PriorityCard num="03" color={CYAN} title="Conversielaag met retargeting (30% budget)" desc="Sitebezoekers en winkelmandverlaters terugbrengen via Performance+ Conversie met oCPM-bieden. Effect tussen inspiratie en catalogus." />
          <PriorityCard num="04" color={YELLOW} title="Catalogus optimaliseren" desc="Betere titels, beelden, prijzen en categorieën in de feed verbeteren catalogusprestaties. Zwakke SKU's apart aansturen." />
          <PriorityCard num="05" color={YELLOW} title="Performance+ creative & Channable templates" desc="Productfoto's uit de feed omzetten naar pins met sfeer, branding en CTA via Channable. Minder handwerk, consistente uitstraling." />
          <PriorityCard num="06" color={DARK} title="Conversions API implementeren" desc="Betere attributie via server-side tracking - verhoogt datakwaliteit voor algoritme-optimalisatie, vergelijkbaar met de aanpak bij Meta." />
        </div>

        <SectionTitle accent={YELLOW}>Voorgesteld maandbudget - 3-laags structuur</SectionTitle>
        <Grid3>
          {[
            { laag: "Overweging", budget: "€1.000/mnd", pct: "20%", doel: "Bereik & verkeer via sfeerbeelden", color: CYAN },
            { laag: "Conversie", budget: "€1.500/mnd", pct: "30%", doel: "Retargeting sitebezoek & winkelmand", color: YELLOW },
            { laag: "Catalogus Sales", budget: "€2.500/mnd", pct: "50%", doel: "Omzet via Performance+ feed", color: PINTEREST_RED },
          ].map((l) => (
            <div key={l.laag} style={{ background: DARK, borderRadius: 12, padding: "22px", boxShadow: "0 1px 4px rgba(0,0,0,0.1)", borderTop: `3px solid ${l.color}` }}>
              <div style={{ fontSize: 11, color: l.color, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: 8 }}>{l.pct} - {l.laag}</div>
              <div style={{ fontSize: 26, fontWeight: 800, color: YELLOW, marginBottom: 6 }}>{l.budget}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{l.doel}</div>
            </div>
          ))}
        </Grid3>
        <div style={{ textAlign: "center" as const, marginTop: 12, fontSize: 13, color: "#9ca3af" }}>
          Totaal: <strong style={{ color: DARK }}>€5.000/maand</strong> - budget verder omhoog als ROAS en omzet dat toelaten
        </div>

      </ReportContainer>
    </div>
  );
}
