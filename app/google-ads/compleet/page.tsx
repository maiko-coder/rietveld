import PresentationNav from "../../_components/PresentationNav";

const COLOR = "#2563EB";
const COLOR_LIGHT = "#EFF6FF";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", borderBottom: `2px solid ${COLOR}`, paddingBottom: 10, marginBottom: 20, marginTop: 40 }}>{children}</h2>;
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 style={{ fontSize: 15, fontWeight: 600, color: COLOR, marginBottom: 8, marginTop: 24 }}>{children}</h3>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.7, marginBottom: 12 }}>{children}</p>;
}

function Table({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="report-table-wrap" style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, marginBottom: 20 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead>
          <tr style={{ background: "#f9fafb" }}>
            {headers.map((h, i) => (
              <th key={i} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 600, color: "#374151", fontSize: 12, borderBottom: "1px solid #e5e7eb" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#f9fafb" }}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: "10px 14px", color: "#374151", borderBottom: i < rows.length - 1 ? "1px solid #f3f4f6" : "none" }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Callout({ title, items, variant = "blue" }: { title: string; items: string[]; variant?: "blue" | "green" | "amber" | "red" }) {
  const map = {
    blue: { bg: COLOR_LIGHT, border: COLOR, title: "#1d4ed8" },
    green: { bg: "#f0fdf4", border: "#16a34a", title: "#15803d" },
    amber: { bg: "#fffbeb", border: "#f59e0b", title: "#b45309" },
    red: { bg: "#fef2f2", border: "#ef4444", title: "#dc2626" },
  };
  const s = map[variant];
  return (
    <div style={{ background: s.bg, borderLeft: `4px solid ${s.border}`, borderRadius: 8, padding: "14px 18px", marginBottom: 16 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: s.title, marginBottom: 6 }}>{title}</div>
      <ul style={{ margin: 0, paddingLeft: 18 }}>
        {items.map((item, i) => (
          <li key={i} style={{ fontSize: 13, color: "#374151", marginBottom: 4, lineHeight: 1.6 }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Tag({ children, variant = "green" }: { children: React.ReactNode; variant?: "green" | "orange" | "blue" }) {
  const styles = {
    green: { bg: "#e6f9f4", text: "#14433a" },
    orange: { bg: "#fff3e0", text: "#e67e22" },
    blue: { bg: "#eef2ff", text: "#4a5de0" },
  };
  const s = styles[variant];
  return <span style={{ display: "inline-block", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 10, background: s.bg, color: s.text }}>{children}</span>;
}

export default function GoogleAdsCompleet() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f9fafb", minHeight: "100vh" }}>
      <PresentationNav channel="Google Ads" color={COLOR} basePath="/google-ads" />

      {/* Cover */}
      <div className="report-cover" style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)", color: "white" }}>
        <div className="report-cover-inner">
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.6, marginBottom: 12 }}>
            Google Ads Analyse · Rietveld Licht & Wonen · Juni 2026
          </div>
          <h1 style={{ fontSize: 42, fontWeight: 700, lineHeight: 1.1, marginBottom: 16, maxWidth: 560 }}>Google Ads<br />Complete Presentatie</h1>
          <p style={{ fontSize: 16, opacity: 0.75, maxWidth: 520, lineHeight: 1.6, marginBottom: 48 }}>
            Accountanalyse, campagneprestaties, groeikansen en strategische aanbevelingen
          </p>
          <div className="report-cover-stats">
            {[
              { l: "Spend", v: "€2,1M/jaar" },
              { l: "Omzet", v: "€12,5M/jaar" },
              { l: "Account ROAS", v: "5,87" },
              { l: "CPA", v: "€31,85" },
            ].map((m) => (
              <div key={m.l}>
                <div style={{ fontSize: 11, opacity: 0.55, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>{m.l}</div>
                <div style={{ fontSize: 24, fontWeight: 700 }}>{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="report-container--960">

        {/* Sectie 1: Managementsamenvatting */}
        <H2>1. Managementsamenvatting</H2>
        <P>
          Het Google Ads-account van Rietveld Licht presteert goed en is het afgelopen jaar fors gegroeid. De spend steeg van €1,3M naar €2,1M (+67%) en de omzet van €8,2M naar €12,5M (+52%). Het account is daarmee een van de grootste groeimotoren in het digitale kanaalportfolio van Rietveld.
        </P>
        <P>
          De keerzijde van die snelle groei is dat de ROAS licht daalde van 6,43 naar 5,87 en de kosten per bestelling stegen van €26 naar €32. Dit is een normaal patroon bij opschalen - bij een groter advertentiebudget trekt Google automatisch meer nieuwe, koudere doelgroepen aan die lager converteren dan bestaande kopers. Dit geeft aan dat er ruimte is om de structuur scherper te maken.
        </P>
        <Callout
          variant="blue"
          title="Drie kernconclusies"
          items={[
            "Het account groeit sterk maar verliest licht aan efficiëntie - dit is herstelbaar met structuurwijzigingen",
            "Bestsellers en Sale campagnes draaien zonder tROAS-doel - dit kost €420k spend aan efficiëntie",
            "Het €400+ segment behaalt 12–13x ROAS op slechts €12k spend - dit is de grootste onbenutte groeikans",
          ]}
        />

        {/* Sectie 2: Accountoverzicht */}
        <H2>2. Accountoverzicht - groei & efficiëntie</H2>
        <Table
          headers={["Metric", "Vorig jaar", "Huidig jaar", "Verschil"]}
          rows={[
            ["Totale spend", "€1,3M", "€2,1M", "+67%"],
            ["Totale omzet", "€8,2M", "€12,5M", "+52%"],
            ["Account ROAS", "6,43", "5,87", "-8,7%"],
            ["Kosten per bestelling (CPA)", "€26", "€31,85", "+23%"],
            ["PMax overall ROAS", "-", "4,69", "-"],
          ]}
        />
        <P>
          De ROAS-daling en CPA-stijging zijn direct gekoppeld aan de budgetverhoging. Bij opschaling neemt het aandeel prospecting toe, wat de blended ROAS drukt. Dit is inherent aan schaalvergroting - de vraag is of de accountstructuur optimaal is ingericht om het nieuwe budgetniveau efficiënt te verwerken.
        </P>

        {/* Sectie 3: Campagneanalyse */}
        <H2>3. Campagneanalyse</H2>
        <H3>3.1 Wolves / Sheep</H3>
        <P>
          De PMax-campagnes draaien gebundeld op alle producttypen - hanglampen, plafondlampen, spots, inbouwlampen en tafellampen concurreren om hetzelfde budget en hetzelfde doel. Producttypen met een lagere ROAS (bijv. volumes-hanglampen) drukken daarmee de prestaties van efficiëntere categorieën (spots, inbouwlampen: ROAS 5,3–6,5).
        </P>
        <P>Huidig ROAS: ~5,2 · Doel: 5,5+</P>

        <H3>3.2 Bestsellers</H3>
        <P>
          De Bestsellers-campagne draait zonder tROAS-instelling, wat betekent dat Google autonoom biedt op basis van een breed doel. Op €420k+ spend is dit een significante inefficiëntie. Bovendien is de campagne niet opgesplitst op apparaat, waardoor mobiel (vaak lager converterend) hetzelfde bod krijgt als desktop.
        </P>
        <P>Huidig ROAS: 3,88 · Doel: 4,5–5,0</P>

        <H3>3.3 Sale</H3>
        <P>
          De Sale-campagne heeft de laagste ROAS van het account (3,44). Bij kortingsproducten is een lagere ROAS op zichzelf niet problematisch - het hangt af van de winstmarge per product. Zodra POAS-tracking actief is, wordt op winstgevendheid gestuurd in plaats van omzet-ROAS.
        </P>
        <P>Huidig ROAS: 3,44 · Doel: 4,0+ (of POAS-basis zodra marge-data beschikbaar)</P>

        <H3>3.4 Premium €400+ (nieuw te lanceren)</H3>
        <P>
          Het segment producten boven €400 wordt momenteel nauwelijks geadverteerd. Op de €12k spend die dit segment nu ontvangt, realiseert het een ROAS van 12–13x. Dit is het sterkste rendementssignaal in het account - en het is grotendeels onbenut. Bij opschaling naar €75–100k spend is een ROAS van 10+ realistisch.
        </P>
        <P>Huidig ROAS: 12–13x op €12k · Doel: 8,0+ op €75–100k spend (+€350–500k extra omzet)</P>

        {/* Sectie 4: Technische bevindingen */}
        <H2>4. Technische bevindingen</H2>
        <Callout
          variant="red"
          title="Locatietargeting - directe actie vereist"
          items={[
            "Campagnes zijn ingesteld op 'aanwezig in of geïnteresseerd in' in plaats van 'aanwezigheid'",
            "Hierdoor worden advertenties getoond aan gebruikers buiten het doelgebied die interesse tonen - lagere conversiekansen",
            "Corrigeren naar 'Aanwezigheid' verwacht +1–3% efficiëntiewinst direct",
          ]}
        />
        <Callout
          variant="amber"
          title="Biedstrategieën - optimalisatie kans"
          items={[
            "Bestsellers en Sale campagnes draaien zonder tROAS-doel op €420k+ spend",
            "tROAS instellen verwacht ROAS van ~3,6 naar 4,0–4,5 te brengen op deze campagnes",
            "Bestsellers-campagne opsplitsen op apparaat: mobiel en desktop apart sturen",
          ]}
        />

        {/* Sectie 5: Strategie */}
        <H2>5. Strategische aanpak per fase</H2>

        <div className="report-grid-3" style={{ marginBottom: 24 }}>
          {[
            {
              phase: "Fase 1",
              period: "0 – 3 maanden",
              items: ["Locatietargeting corrigeren", "tROAS instellen op Bestsellers & Sale", "Bestsellers opsplitsen op apparaat"],
              goal: "ROAS → 6,0 · CPA → €30",
              color: "#fee2e2",
              tc: "#dc2626",
            },
            {
              phase: "Fase 2",
              period: "3 – 6 maanden",
              items: ["PMax splitsen op producttype", "Premium €400+ campagne lanceren", "Budgetstructuur heralloceren"],
              goal: "ROAS 6,2–6,5 · CPA <€29",
              color: COLOR_LIGHT,
              tc: COLOR,
            },
            {
              phase: "Fase 3",
              period: "6 – 12 maanden",
              items: ["POAS-bidding testen (winstmarge)", "Regionale targeting testen", "Margeklasse-label in feed"],
              goal: "ROAS 6,3–6,8 · Winstoptimalisatie",
              color: "#f0fdf4",
              tc: "#16a34a",
            },
          ].map((f) => (
            <div key={f.phase} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "18px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: f.tc, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 2 }}>{f.phase}</div>
              <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 12 }}>{f.period}</div>
              <ul style={{ paddingLeft: 16, margin: 0, marginBottom: 12 }}>
                {f.items.map((item) => (
                  <li key={item} style={{ fontSize: 12, color: "#374151", marginBottom: 4, lineHeight: 1.5 }}>{item}</li>
                ))}
              </ul>
              <div style={{ background: f.color, color: f.tc, fontSize: 11, fontWeight: 600, padding: "6px 10px", borderRadius: 6 }}>{f.goal}</div>
            </div>
          ))}
        </div>

        {/* Sectie 6: Doelstellingen */}
        <H2>6. Doelstellingen & KPI&apos;s</H2>
        <Table
          headers={["Campagne", "ROAS Nu", "ROAS Doel"]}
          rows={[
            ["Account overall", "5,87", "6,3 – 6,8"],
            ["PMax overall", "4,69", "5,2+"],
            ["Wolves / Sheep", "~5,2", "5,5+"],
            ["Bestsellers", "3,88", "4,5 – 5,0"],
            ["Sale-producten", "3,44", "4,0+"],
            ["Premium €400+ (nieuw)", "12–13x op €12k", "8,0+ op €75–100k"],
          ]}
        />
        <Table
          headers={["KPI", "Huidig", "Doel"]}
          rows={[
            ["Account ROAS", "5,87", "6,5"],
            ["CPA (kosten per bestelling)", "€31,85", "<€28"],
            ["Spend €400+ segment", "€12k/jaar", "€50–75k/jaar"],
            ["ROAS €400+ segment", "12–13 (onbenut)", "10+ op hoger volume"],
            ["Bestsellers ROAS", "3,88", "4,5+"],
            ["Sale ROAS", "3,44", "4,0+"],
          ]}
        />

        {/* Sectie 7: Verwachting */}
        <H2>7. Realistisch verwachting</H2>
        <P>
          De quick wins (instellingen, tROAS-correcties) leveren samen een ROAS-verbetering van circa +0,10–0,15 op accountniveau. De structuurwijzigingen en het premium-segment voegen daar nog eens +0,20–0,35 aan toe. Gecombineerd betekent dat een accountbrede ROAS van 6,2–6,4 realistisch is binnen 6 tot 12 maanden, bij gelijkblijvend of beperkt hoger budget.
        </P>
        <div className="report-grid-3" style={{ marginBottom: 32 }}>
          {[
            { l: "Account ROAS", n: "5,87", g: "6,3 – 6,5" },
            { l: "CPA", n: "€31,85", g: "€27 – 29" },
            { l: "Omzet (zelfde spend)", n: "Basis", g: "+8 – 12%" },
          ].map((k) => (
            <div key={k.l} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "18px", borderTop: `3px solid ${COLOR}`, textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>{k.l}</div>
              <div style={{ fontSize: 13, color: "#9ca3af", marginBottom: 4 }}>Nu: {k.n}</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: COLOR }}>{k.g}</div>
            </div>
          ))}
        </div>

        <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 10, padding: "20px 24px", marginBottom: 48 }}>
          <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.7 }}>
            <strong>Leerperiode na PMax-splitsing:</strong> Direct na een campagnesplitsing is er altijd een leerperiode van 2 tot 4 weken waarin Google opnieuw calibreert. Een tijdelijke ROAS-dip in die periode is normaal en geen reden tot zorg.
          </p>
        </div>

        {/* Sectie 8: Wat valt ons op */}
        <H2>8. Wat valt ons op</H2>
        {[
          {
            title: "Budget groeit sneller dan het rendement",
            body: "Spend steeg +67% YoY, maar de ROAS daalde van 6,43 naar 5,87 en de kosten per bestelling stegen van €26 naar €32. Dit is een normaal gevolg van snel opschalen, maar het geeft aan dat de structuur nog niet volledig meeschaalt met het budget.",
          },
          {
            title: "Bestsellers en Sale presteren ondermaats maar krijgen 20% van het budget",
            body: "De Bestsellers-campagne (ROAS 3,88) en Sale-campagne (ROAS 3,44) scoren ruim onder het accountgemiddelde (5,87). Samen €420.000 spend per jaar zonder dat er een scherp tROAS-doel of budgetlimiet is ingesteld passend bij deze campagnes.",
          },
          {
            title: "Google stuurt budget naar volume, niet naar rendement (binnen de PMax-campagnes)",
            body: "Hanglampen en plafondlampen absorberen samen €810.000 bij een ROAS van ~4,67. Spots, tafellampen en inbouwspots leveren ROAS 5,3–6,5 maar krijgen verhoudingsgewijs veel minder budget. Productgroepen binnen PMax zijn een rapportage-instrument, geen stuurinstrument.",
          },
          {
            title: "Producten boven €400 worden nauwelijks geadverteerd",
            body: "Producten in de prijsklasse €400–800 leveren ROAS 12,45 en €800+ levert ROAS 13,45. Samen krijgen ze slechts €12.072 spend per jaar. Er zit geen prijsklasse-label in de feed, waardoor aparte campagnesturing onmogelijk is.",
          },
          {
            title: `Locatietargeting staat bij sommige campagnes op de verkeerde instelling`,
            body: `Een aantal campagnes staat op "Aanwezigheid of interesse" in plaats van "Aanwezigheid". Hierdoor worden advertenties ook getoond aan mensen die buiten Nederland zijn maar interesse tonen in NL, terwijl Rietveld niet in het buitenland levert.`,
          },
          {
            title: "Bodaanpassingen voor tijdstip en locatie staan ingesteld maar doen niets",
            body: "Met een doel-ROAS biedstrategie negeert Google bodaanpassingen voor advertentieplanning en locaties volledig. Ze staan er wel, waardoor het lijkt alsof er op regio en tijdstip wordt gestuurd, maar dat is niet zo. Enige uitzondering: een -100% apparaatuitsluiting werkt wél.",
          },
          {
            title: "Grote ROAS-verschillen per provincie worden niet benut",
            body: "Zuid-Holland converteert met ROAS 7,2 bijna twee keer zo goed als Friesland (ROAS 4,2). Omdat bodaanpassingen niet werken met tROAS, en conversiewaarderegels nog niet zijn ingesteld, krijgen alle provincies in principe hetzelfde gewicht.",
          },
          {
            title: "Nieuwe en terugkerende klanten worden in het bieden gelijk behandeld",
            body: "Er is geen onderscheid gemaakt in de waarde van een nieuwe klant vs. een bestaande klant. Google biedt voor beide evenveel, terwijl nieuwe klanten structureel meer langetermijnwaarde hebben.",
          },
          {
            title: "Liggende productafbeeldingen in de Shopping-feed",
            body: "Bij een aantal producten staat een liggende (brede) afbeelding in de feed terwijl de productpagina een betere staande versie heeft. Een liggende afbeelding laat het product kleiner verschijnen in Shopping-resultaten, wat de klikratio negatief beïnvloedt.",
          },
          {
            title: "Zes testcampagnes met €76k spend die nog niet zijn geëvalueerd",
            body: "AI Max Test, Broad Match, Smart Bidding Exploration en gerelateerde tests draaien samen voor €76.000. Het is niet duidelijk of de uitkomsten zijn geanalyseerd en of ze structureel blijven of worden afgesloten. Daarnaast staan 24 inactieve conversieacties in het account.",
          },
        ].map((obs, i) => (
          <div key={i} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 8, padding: "14px 18px 14px 54px", marginBottom: 10, position: "relative" }}>
            <div style={{ position: "absolute", left: 16, top: 14, width: 24, height: 24, background: "#fff3e0", color: "#d97706", fontSize: 12, fontWeight: 700, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#111827", marginBottom: 3 }}>{obs.title}</div>
            <div style={{ fontSize: 13, color: "#4b5563", lineHeight: 1.75 }}>{obs.body}</div>
          </div>
        ))}

        {/* Sectie 9: Wat onze suggesties zijn */}
        <H2>9. Wat onze suggesties zijn</H2>
        {[
          {
            groupTitle: "Campagnestructuur",
            items: [
              { title: "Splits PMax op producttype: volume-campagne vs. efficiëntie-campagne", body: "Maak aparte PMax-campagnes voor (1) hanglamp + plafondlamp met een strakker tROAS-doel (~500%) en (2) spots + inbouwspots + tafellampen + kapstokken met eigen budget en tROAS ~600%. Nu verdringt het volume-type structureel de rendementstypen." },
              { title: "Voeg een prijsklasse-label toe aan de feed en lanceer een premium-campagne", body: "Voeg een custom label toe met waarden zoals budget / midden / premium / luxury. Maak daarna een aparte PMax-campagne voor producten €400+ met tROAS ~900–1000%. Huidig: €12k spend bij ROAS 12–13. Dit segment is structureel onderbested." },
              { title: "Voeg ontbrekende feed-labels toe: margeklasse, seizoen, prijsklasse", body: "Een margeklasse-label (hoog/gemiddeld/laag op basis van backend-data) maakt bieden op werkelijke winst mogelijk. Seizoenslabels geven flexibiliteit in budgetverdeling per kwartaal. Beide ontbreken nu volledig." },
              { title: "Maak een dedicated campagne of asset group voor japandi-producten", body: "Japandi-stijlproducten leveren ROAS 5,1–6,5 en de bijbehorende zoekterm groeit sterk. Nu zitten ze verspreid. Een aparte groep geeft betere sturing en sluit aan op de trending vraag." },
            ],
          },
          {
            groupTitle: "Bestsellers & Sale",
            items: [
              { title: "Bestsellers: splits campagne op device", body: "Accountbreed converteert desktop (3,12%) beter dan mobiel (2,26%). Maak aparte campagnes of asset groups voor mobiel en desktop, zodat je voor elk apparaat een passend budget en tROAS-doel kunt instellen in plaats van beide te mixen in één campagne." },
              { title: "Bestsellers + Sale: stel een campagne-specifiek tROAS-doel in", body: "Stel een tROAS in die past bij de werkelijke marges van deze producten, niet het accountgemiddelde van 5,87. Voor Sale geldt: bij -25% korting is een tROAS van 275–300% realistisch en winstgevend. Bestsellers draaien nu zonder scherp doel." },
              { title: "Stel een hard dagbudgetplafond in voor Bestsellers en Sale", body: "Beide campagnes zijn geen core-profit campagnes. Begrens het dagbudget zodat ze de wolves-campagne (ROAS 5,22) niet verdringen." },
            ],
          },
          {
            groupTitle: "Test: POAS-structuur",
            items: [
              { title: `Test met bieden op werkelijke winst (POAS) in plaats van omzet (ROAS)`, body: `De "profit purchase"-conversieactie is al aanwezig in het account. Door deze als stuurdoel te activeren (in plaats van de omzet-ROAS) gaat Google bieden op de werkelijke marge per product. Dat is met name relevant voor Sale en Bestsellers.` },
              { title: "Voeg een margeklasse-label toe aan de feed als voorbereiding", body: "Om POAS structureel toe te passen is een marge_hoog / marge_midden / marge_laag label nodig (vanuit backend/ERP). Dit maakt het mogelijk per margeklasse een eigen campagne te draaien met bijpassend tROAS-doel. Zonder dit label biedt POAS-tracking alleen op productniveau." },
              { title: "Koppel het margeklasse-label aan een High-AOV PMax-bucket voor €400+", body: "Producten boven €400 hebben ROAS 12–13 maar krijgen slechts ~€12k spend. In combinatie met een marge-hoog-label en tROAS 800–1000% kan dit segment gecontroleerd worden opgeschaald. Start met €50–100/dag, evalueer na 3 weken." },
            ],
          },
          {
            groupTitle: "Instellingen: direct aanpassen",
            items: [
              { title: `Locatietargeting corrigeren naar "Aanwezigheid"`, body: `Alle campagnes → Instellingen → Locaties → Locatie-opties → Aanwezigheid. Direct effect: advertenties alleen aan mensen die fysiek in Nederland zijn.` },
              { title: "Verwijder bodaanpassingen voor tijdstip en locatie", body: "Ze werken niet met doel-ROAS en geven een vals gevoel van controle. Verwijder ze en vervang door conversiewaarderegels voor de segmenten die aantoonbaar beter presteren." },
            ],
          },
          {
            groupTitle: "Biedstrategie & targeting",
            items: [
              { title: "Test: regionale targeting Randstad vs. overig (of top 3 provincies)", body: "Er zijn grote ROAS-verschillen per regio (Zuid-Holland 7,2 vs. Friesland 4,2). Test het effect van aparte campagnes of ad groups gericht op de Randstad vs. de rest van Nederland. Zo kun je budget en tROAS per regio onderbouwd sturen." },
              { title: "Test hogere biedingen voor nieuwe klanten", body: `Via "Nieuwe klant"-conversiedoelen in PMax kan Google hogere biedingen doen voor mensen die nog nooit bij Rietveld hebben gekocht. Waardewegingsfactor bijv. 1,4×. Werkt het best in combinatie met Customer Match (klantlijst inladen).` },
            ],
          },
          {
            groupTitle: "Feed & accounthygiëne",
            items: [
              { title: "Vervang liggende productafbeeldingen door de staande versies", body: "Loop de Merchant Center feed door en vervang liggende afbeeldingen via het veld additional_image_link door de betere staande variant die al op de productpagina staat. Minimaal 800×800px, bij voorkeur staand formaat." },
              { title: "Evalueer de 6 testcampagnes en sluit af of schaal op", body: "Analyseer de resultaten van AI Max, Broad Match en Smart Bidding Exploration. Houd de winnaar, stop de rest. Ruim daarna de 24 inactieve conversieacties op." },
            ],
          },
        ].map((group) => (
          <div key={group.groupTitle} style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "#15803d", marginBottom: 10, paddingBottom: 6, borderBottom: "1px solid #c8e8e0" }}>{group.groupTitle}</div>
            {group.items.map((item, i) => (
              <div key={i} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 8, padding: "14px 18px 14px 20px", marginBottom: 8, borderLeft: "3px solid #16a34a" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#111827", marginBottom: 3 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: "#4b5563", lineHeight: 1.75 }}>{item.body}</div>
              </div>
            ))}
          </div>
        ))}

        {/* Sectie 10: Prioritering */}
        <H2>10. Prioritering</H2>
        <Table
          headers={["#", "Actie", "Type", "Impact"]}
          rows={[
            ["1", `Locatietargeting corrigeren naar "Aanwezigheid"`, <Tag variant="green">Instelling</Tag>, "Direct: budgetverspilling stopt"],
            ["2", "Bodaanpassingen locatie + tijdstip verwijderen", <Tag variant="green">Opschonen</Tag>, "Indirect: helderheid in account"],
            ["3", "Bestsellers + Sale: campagne-specifiek tROAS-doel instellen", <Tag variant="orange">PMax</Tag>, "€420k budget beter gestuurd"],
            ["4", "Bestsellers: splits campagne op device", <Tag variant="orange">PMax</Tag>, "Aparte sturing op €229k budget"],
            ["5", "Test: regionale targeting Randstad vs. overig", <Tag variant="blue">Test</Tag>, "Betere regionale efficiëntie"],
            ["6", "Prijsklasse-label toevoegen aan feed + PMax premium-segment", <Tag variant="green">Feed + PMax</Tag>, "€400+ segment vrijwel onbenut"],
            ["7", "PMax opsplitsen op producttype (volume vs. efficiëntie)", <Tag variant="orange">Structuur</Tag>, "Betere budgetallocatie"],
            ["8", "Shopping-afbeeldingen verbeteren via feed", <Tag variant="green">Feed</Tag>, "CTR-verbetering Shopping"],
            ["9", "Test: POAS-structuur activeren + margeklasse-label feed", <Tag variant="blue">Test</Tag>, "Bieden op winst i.p.v. omzet"],
            ["10", "Test: hogere biedingen nieuwe klanten (Customer Match)", <Tag variant="blue">Test</Tag>, "Afhankelijk van klantdata"],
            ["11", "Testcampagnes evalueren + 24 conversieacties opschonen", <Tag variant="green">Opschonen</Tag>, "Helderheid + minder kannibalisatie"],
          ]}
        />

        {/* Jaaranalyse button */}
        <div style={{ paddingTop: 16, paddingBottom: 64, textAlign: "center" }}>
          <a
            href="/google-ads/jaaranalyse"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: COLOR,
              color: "white",
              padding: "14px 28px",
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 2px 8px rgba(37,99,235,0.3)",
            }}
          >
            Bekijk kosten &amp; resultaten (jaaranalyse) →
          </a>
        </div>

      </div>
    </div>
  );
}
