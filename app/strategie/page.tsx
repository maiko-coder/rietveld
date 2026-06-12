import {
  PageHero,
  SectionTitle,
  Callout,
  DarkTable,
  PriorityCard,
  ReportContainer,
  Grid3,
  CYAN,
  RED,
  YELLOW,
  DARK,
} from "../_components/ReportComponents";

function BodyText({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.8, margin: "0 0 16px" }}>{children}</p>;
}

function PhaseCard({ title, items, color }: { title: string; items: string[]; color: string }) {
  return (
    <div style={{ background: "white", borderRadius: 12, padding: "22px 24px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", borderLeft: `4px solid ${color}` }}>
      <h3 style={{ fontSize: 15, fontWeight: 700, color: DARK, margin: "0 0 14px", lineHeight: 1.4 }}>{title}</h3>
      <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map((item) => (
          <li key={item} style={{ fontSize: 13.5, color: "#4b5563", lineHeight: 1.65 }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function StrategiePage() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f4f5f7", minHeight: "100vh" }}>
      <PageHero
        channel="Strategie"
        title="Omnichannel strategie"
        subtitle="Van losse kanalen naar één klantreis waarin inspiratie, overweging, koop en herhaling elkaar versterken"
        stats={[
          { label: "Google Ads ROAS", value: "5,87", accent: "cyan" },
          { label: "Meta ROAS", value: "16,4×", accent: "yellow" },
          { label: "Pinterest ROAS", value: "15,6×", accent: "cyan" },
          { label: "E-mail aandeel", value: "0 → 18%", accent: "yellow" },
        ]}
      />

      <ReportContainer style={{ maxWidth: 960, margin: "0 auto" }}>
        <SectionTitle>1. Waar we staan en waar we heen willen</SectionTitle>
        <BodyText>
          Rietveld Licht heeft de afgelopen jaren stevig gebouwd aan losse kanalen die elk goed presteren. Google Ads groeide naar 2,1 miljoen euro (ad-spend) en 12,5 miljoen euro omzet. Meta draait een ROAS van 15,7 en stuurt al op winst via POAS. Pinterest leverde in een eerste test van 3.000 euro al een ROAS van 15,6. De website staat technisch sterk met een health score van 92 op 100. Toch valt er qua omnichannel genoeg te verbeteren. De andere kanalen zouden naast SEA ook veel meer omzet kunnen genereren.
        </BodyText>
        <BodyText>
          De kracht zit nu nog in de afzonderlijke kanalen. De volgende stap is samenhang. Een klant ziet Rietveld niet als vijf losse advertenties, maar als één merk. Iemand vindt inspiratie op Pinterest, ziet een lamp terug via Meta, zoekt later gericht op Google en koopt na een e-mail.
        </BodyText>
        <Callout>
          Dit plan brengt de vijf kanalen onder één strategie. Het doel is niet meer budget in elk kanaal, maar een klantreis waarin de kanalen elkaar versterken. Dat verhoogt het rendement van alles wat al draait en opent drie concrete groeikansen: het premiumsegment in Google Ads, dynamische retargeting op Meta, en e-mailmarketing als kanaal dat de hele reis aan elkaar knoopt.
        </Callout>

        <SectionTitle accent={YELLOW}>De drie grootste kansen</SectionTitle>
        <DarkTable
          headers={["Kans", "Wat het oplevert", "Kanaal"]}
          rows={[
            ["Premiumsegment €400+ opschalen", "12 tot 13 keer ROAS, nu vrijwel onbenut", "Google Ads"],
            ["Dynamische productadvertenties", "Retargeting van 29 naar 35 tot 45 keer ROAS", "Meta"],
            ["E-mailmarketing als verbindingslaag", "Van 0 naar 30% aandeel in online omzet", "E-mailmarketing"],
          ]}
        />

        <SectionTitle>2. De visie op omnichannel</SectionTitle>
        <BodyText>
          Omnichannel betekent niet dat je overal aanwezig bent. Het betekent dat elk kanaal een rol speelt in dezelfde reis en dat ze data en momentum aan elkaar doorgeven. Drie principes sturen deze aanpak.
        </BodyText>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 8 }}>
          <PriorityCard
            num="01"
            color={CYAN}
            title="Eén klantprofiel, niet vijf kanaal silo's"
            desc="Data uit de webshop, de winkel en de advertenties voeden hetzelfde profiel. Wie op Pinterest een hanglamp bekeek, is op Meta geen onbekende meer. Wie in de winkel kocht, krijgt online geen advertentie voor wat al thuis hangt. Het profiel staat centraal, niet de productcategorie."
          />
          <PriorityCard
            num="02"
            color={YELLOW}
            title="Elk kanaal heeft een eigen taak in de reis"
            desc="Inspiratie, overweging, koop en herhaling vragen om verschillende kanalen. Pinterest en Meta wekken de wens. Google Ads vangt de koopintentie. De website moet van elk bezoek een bestelling maken. E-mailmarketing houdt het contact warm tussen aankopen door of na afloop van een aankoop."
          />
          <PriorityCard
            num="03"
            color="#16a34a"
            title="Sturen op winst, niet alleen op omzet"
            desc="Rietveld meet al de werkelijke brutowinst per transactie via POAS. Dat is een voorsprong die de meeste verlichtingszaken niet hebben. Daarmee kun je budget verschuiven naar wat echt verdient, niet naar wat de hoogste omzet toont. Een doelgroep met 68% marge is meer waard dan een met hoog volume en dunne marge."
          />
        </div>

        <SectionTitle>3. Hoe de kanalen samenwerken</SectionTitle>
        <BodyText>
          De klantreis loopt van inspiratie naar herhaalaankoop. Elk kanaal pakt het moment waarin het het sterkst is en geeft de klant door aan de volgende fase.
        </BodyText>
        <DarkTable
          headers={["Fase", "Kanalen", "Rol in de reis"]}
          rows={[
            ["Inspiratie", "Pinterest, Meta (prospecting)", "De wens wekken voordat iemand een product zoekt. Sfeer en interieur, niet de losse lamp."],
            ["Overweging", "Meta (retargeting), Pinterest", "Bezoekers terughalen met het product dat ze bekeken. Vertrouwen opbouwen."],
            ["Koop", "Google Ads, website", "De koopintentie vangen op zoekwoorden en de bezoeker naar de bestelling leiden."],
            ["Herhaling", "E-mailmarketing", "Het contact warm houden tussen en na aankopen en alle kanalen aan elkaar verbinden."],
          ]}
        />
        <Callout color={YELLOW}>
          De website ligt onder de hele funnel. Elke procentpunt hogere conversie op de site verhoogt automatisch het rendement van elk betaald kanaal. SEO en CRO zijn daarom geen los kanaal, maar de bodem waarop de rest staat.
        </Callout>

        <SectionTitle>4. E-mailmarketing</SectionTitle>
        <BodyText>
          E-mailmarketing verdient een aparte plek in dit plan, omdat het de lijm tussen de kanalen is. Elk signaal uit een ander kanaal kan een passend e-mailmoment starten. Zo wordt losse reclame een doorlopend gesprek.
        </BodyText>
        <DarkTable
          headers={["Kanaal", "Signaal", "E-mailrespons"]}
          rows={[
            ["Webshop", "Verlaten winkelwagen, productbezoek", "Winkelwagenflow, prijsdaling-melding, post-aankoop"],
            ["Fysieke winkel", "Kassaregistratie, adviesgesprek", "Post-aankoopflow, follow-up op het advies"],
            ["Meta", "Klik op advertentie of Lead Ad", "Welkomstflow, retargeting voor wie niet kocht"],
            ["Google Ads", "Klik gevolgd door inschrijving", "Welkomstflow met focus op de productcategorie"],
            ["Klantenservice", "Vraag of klacht via chat", "Follow-up en tevredenheidscheck"],
          ]}
        />

        <SectionTitle accent={YELLOW}>5. De gefaseerde aanpak</SectionTitle>
        <BodyText>
          De volgorde is bewust. Eerst de quick wins die direct rendement opleveren en weinig risico dragen. Daarna de structurele groei. Tot slot opschalen en internationaal uitbreiden.
        </BodyText>
        <Grid3 style={{ marginBottom: 8 }}>
          <PhaseCard
            color={RED}
            title="Fase 1 · maand 0 tot 3 · fundament en quick wins"
            items={[
              "Google Ads: locatietargeting corrigeren, ROAS op Bestsellers en Sale, splitsen per apparaat.",
              "Meta: pixel koppelen aan de catalogus, doelgroep budget verschuiven naar hoge marge.",
              "Pinterest: catalogus campagne always-on, tracking en feed controleren.",
              "Website: alt-teksten, hreflang en structured data, plus de drie zekere CRO-acties.",
              "E-mailmarketing: platform kiezen en koppelen, welkomst- en winkelwagen flow live.",
            ]}
          />
          <PhaseCard
            color={CYAN}
            title="Fase 2 · maand 3 tot 6 · structurele groei"
            items={[
              "Google Ads: PMax splitsen per producttype, premiumsegment €400+ lanceren.",
              "Meta: dynamische productadvertenties live, Lead Ads naar e-mail, België uitrollen.",
              "Pinterest: overweging- en conversielaag erbij, lookalikes op de eerste kopers.",
              "E-mailmarketing: post-aankoop- en win-backflow, opt-in zichtbaar op de webshop.",
            ]}
          />
          <PhaseCard
            color="#16a34a"
            title="Fase 3 · maand 6 tot 12 · opschalen en internationaal"
            items={[
              "Google Ads: POAS-bidding op winstmarge, regionale targeting testen.",
              "Meta: Advantage+ opschalen, Duitsland uitrollen (Lumidora).",
              "Pinterest: budget verhogen zolang de ROAS standhoudt.",
              "E-mailmarketing: micro-automations en seizoenscampagnes, koppelen aan winkeldata.",
            ]}
          />
        </Grid3>

        <SectionTitle>6. Doelstellingen en KPI&apos;s</SectionTitle>
        <BodyText>
          De kanalen sturen op eigen cijfers, maar binnen één gezamenlijk doel: meer omzet uit dezelfde klant, tegen een gezond rendement.
        </BodyText>
        <DarkTable
          headers={["Kanaal", "Nu", "Doel 12 mnd", "Richting"]}
          rows={[
            ["Google Ads ROAS", "5,87", "6,2 – 6,5", "Scherper"],
            ["Meta blended ROAS (NL)", "16,4", "≥ 18", "Omhoog"],
            ["Meta POAS", "9,5", "≥ 11", "Winststuring"],
            ["Pinterest ROAS", "15,6 (test)", "9 – 11 op volume", "Opschalen"],
            ["Website conversieratio", "2,41%", "2,6 – 2,8%", "Omhoog"],
            ["Aandeel e-mail in online omzet", "0%", "> 18%", "Opbouwen"],
          ]}
        />
        <BodyText>
          Deze cijfers zijn een richting, geen belofte. We sturen dagelijks bij op wat de data laat zien. Het premiumsegment en de internationale uitrol kunnen sneller of langzamer gaan, afhankelijk van de eerste resultaten.
        </BodyText>

        <SectionTitle accent={YELLOW}>7. Woeler · een 2-0 voorsprong in de woonbranche</SectionTitle>
        <Callout>
          Waar veel bureaus afzonderlijke kanalen optimaliseren, optimaliseert Woeler de volledige klantreis. Door woonbranche kennis, AI-gedreven inzichten en performance marketing samen te brengen creëren we een geïntegreerde omnichannelstrategie waarin ieder kanaal dezelfde doelstelling ondersteunt.
        </Callout>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            "Alles onder één dak: website, SEO, Google Ads, Meta, Pinterest en e-mail, stuurbaar vanuit één bureau.",
            "Tien jaar ervaring in de branche, wij weten wat werkt.",
            "Eigen AI-tools voor Google en Meta die kleine taken automatiseren, zodat ons team op strategie en kwaliteit kan sturen. Maar ook een databron van al onze woongerelateerde klanten. Zo kunnen wij veranderingen in de markt herkennen zoals (woon)trends en veranderend zoek- en koopgedrag. Ontwikkelingen die we dan ook direct kunnen doorvoeren om andere kanalen in de marketingmix.",
            "Premium Pinterest Partner, met branche data, benchmarks en vroege toegang tot nieuwe functies.",
          ].map((item) => (
            <div
              key={item.slice(0, 40)}
              style={{
                background: "white",
                borderRadius: 10,
                padding: "14px 18px",
                fontSize: 13.5,
                color: "#374151",
                lineHeight: 1.7,
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: CYAN, flexShrink: 0, marginTop: 7 }} />
              {item}
            </div>
          ))}
        </div>
      </ReportContainer>
    </div>
  );
}
