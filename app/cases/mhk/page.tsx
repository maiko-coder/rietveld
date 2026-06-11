import { CYAN, YELLOW, DARK, RED } from "../../_components/ReportComponents";

const RESULTS = [
  { value: "+81%", label: "Meer websitebezoekers via Meta", sub: "Bad & Body & KeukenExpert" },
  { value: "−34%", label: "Lagere Google CPC", sub: "B&B & KeukenExpert" },
  { value: "+848%", label: "Meer websitebezoekers", sub: "Uw Keukenspeciaalzaak" },
  { value: "28.894", label: "Websitebezoekers via Google Ads", sub: "KitchenExpert (België)" },
  { value: "+33%", label: "Meer bereikte personen", sub: "Uw Keukenspeciaalzaak" },
];

export default function MHKPage() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f3f4f6", minHeight: "100vh" }}>

      {/* Hero */}
      <div style={{ background: DARK, color: "white", padding: "56px 32px 52px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -100, top: -100, width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${CYAN}15 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: -60, bottom: -60, width: 280, height: 280, borderRadius: "50%", background: `radial-gradient(circle, ${YELLOW}10 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1040, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `${CYAN}20`, border: `1px solid ${CYAN}40`, borderRadius: 20, padding: "4px 12px", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: CYAN, marginBottom: 16 }}>
            Case Study · MHK
          </div>
          <h1 style={{ fontSize: 42, fontWeight: 800, lineHeight: 1.1, margin: "0 0 12px" }}>
            Van pitch naar<br />internationale groeipartner
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", marginBottom: 44, maxWidth: 580 }}>
            Hoe een pitch voor één formule uitgroeide tot een internationaal schaalbaar marketingmodel voor Europa's grootste inkooporganisatie in de keuken- en interieurbranche.
          </p>

          {/* Key metrics */}
          <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Samenwerking</div>
              <div style={{ fontSize: 44, fontWeight: 900, color: YELLOW, lineHeight: 1 }}>8 jaar</div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Ondernemers</div>
              <div style={{ fontSize: 44, fontWeight: 900, color: CYAN, lineHeight: 1 }}>250+</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>Keuken & interieur</div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Franchiseformules</div>
              <div style={{ fontSize: 44, fontWeight: 900, color: "white", lineHeight: 1 }}>6</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>NL + België</div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${RED} 0%, ${YELLOW} 33%, ${CYAN} 66%, ${DARK} 100%)` }} />
      </div>

      {/* Content */}
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "44px 32px 64px" }}>

        {/* Video */}
        {/* Zodra de video beschikbaar is: vervang dit blok door een <video> tag (lokaal mp4-bestand in /public/cases/)
            of een YouTube/Vimeo iframe-embed. */}
        <div style={{ background: DARK, borderRadius: 14, marginBottom: 40, aspectRatio: "16/9", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12 }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: `${CYAN}25`, border: `2px solid ${CYAN}60`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg viewBox="0 0 24 24" width="26" height="26" fill={CYAN}>
              <path d="M8 5.5v13l11-6.5-11-6.5z" />
            </svg>
          </div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>Video volgt binnenkort</div>
        </div>

        {/* Het verhaal */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div style={{ width: 4, height: 22, background: CYAN, borderRadius: 2 }} />
          <h2 style={{ fontSize: 18, fontWeight: 700, color: DARK, margin: 0 }}>Van pitch naar partnerschap</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 40 }}>
          <div style={{ background: "white", borderRadius: 14, padding: "32px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", borderTop: `3px solid ${CYAN}` }}>
            <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.75, margin: 0 }}>
              Acht jaar geleden werd Woeler uitgenodigd om een pitch te verzorgen voor MHK; één van Europa's grootste inkooporganisaties binnen de keuken- en interieurbranche. De uitdaging: laten zien hoe een slimme combinatie van marketing, technologie en data aangesloten ondernemers kon helpen groeien in een steeds meer digitaal wordende markt.
            </p>
            <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.75, margin: "12px 0 0" }}>
              Wat begon met een opdracht voor REDDY Keukens groeide uit tot een langdurige samenwerking. Door de online resultaten die werden gerealiseerd voor zowel de verschillende formules als individuele ondernemers, werd de samenwerking jaar na jaar verder uitgebreid.
            </p>
          </div>
          <div style={{ background: "white", borderRadius: 14, padding: "32px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", borderTop: `3px solid ${YELLOW}` }}>
            <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.75, margin: 0 }}>
              Vandaag de dag is Woeler de officiële online marketingpartner van MHK Nederland. Vanuit een dedicated team van specialisten beheren en optimaliseren wij alle online platformen voor vier franchiseformules in Nederland en twee formules in België, met daarnaast nog tal van individuele leden.
            </p>
            <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.75, margin: "12px 0 0" }}>
              MHK Nederland vertegenwoordigt ruim 250 keuken- en interieurondernemers en maakt onderdeel uit van de Europese MHK Group, een organisatie die actief is in meerdere landen en samenwerkt met duizenden ondernemers en honderden leveranciers.
            </p>
          </div>
        </div>

        {/* Omnichannel */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div style={{ width: 4, height: 22, background: CYAN, borderRadius: 2 }} />
          <h2 style={{ fontSize: 18, fontWeight: 700, color: DARK, margin: 0 }}>Een omnichannel aanpak die alles verbindt</h2>
        </div>

        <div style={{ background: "white", borderRadius: 14, padding: "28px 32px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", marginBottom: 24 }}>
          <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.8, margin: "0 0 20px" }}>
            Binnen de samenwerking werkt Woeler met een volledig geïntegreerde omnichannel strategie. Landelijke campagnes worden slim gecombineerd met lokale marketingactiviteiten, zodat zowel de franchiseformules als individuele ondernemers optimaal zichtbaar zijn gedurende de volledige klantreis.
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["Websites", "SEO / GEO", "Social media", "Advertising", "Marketing automation", "Leadopvolging"].map((tag) => (
              <span key={tag} style={{ fontSize: 12.5, fontWeight: 600, padding: "6px 14px", borderRadius: 20, background: `${CYAN}12`, color: "#0d6e9a", border: `1px solid ${CYAN}30` }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* AI als motor */}
        <div style={{ background: `linear-gradient(135deg, ${DARK} 0%, #1a1a2e 100%)`, borderRadius: 14, padding: "36px", marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <div style={{ width: 28, height: 28, borderRadius: 6, background: YELLOW, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 16 16" width="14" height="14" fill={DARK}>
                <path d="M8 1l1.9 3.8 4.1.6-3 2.9.7 4.1L8 10.5 4.3 12.4l.7-4.1L2 5.4l4.1-.6L8 1z" />
              </svg>
            </div>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "white", margin: 0 }}>AI als motor achter groei</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.8, margin: 0 }}>
              Om continu voorop te blijven lopen, ontwikkelde Woeler eigen AI-oplossingen die campagnes, zoekgedrag, marktontwikkelingen en conversiedata analyseren. Hierdoor worden trends sneller herkend, succesvolle campagnes sneller opgeschaald en nieuwe kansen eerder benut.
            </p>
            <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.8, margin: 0 }}>
              Deze inzichten worden direct toegepast binnen alle aangesloten formules, waardoor een zelflerend marketingmodel ontstaat dat steeds slimmer en effectiever wordt.
            </p>
          </div>
        </div>

        {/* Resultaten */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div style={{ width: 4, height: 22, background: YELLOW, borderRadius: 2 }} />
          <h2 style={{ fontSize: 18, fontWeight: 700, color: DARK, margin: 0 }}>Een greep uit de resultaten 2024–2025</h2>
          <span style={{ fontSize: 12, color: "#9ca3af" }}>Binnen de franchise labels</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 14, marginBottom: 40 }}>
          {RESULTS.map((r) => (
            <div key={r.label + r.sub} style={{ background: "white", borderRadius: 12, padding: "20px 22px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", borderTop: `3px solid ${CYAN}` }}>
              <div style={{ fontSize: 26, fontWeight: 900, color: DARK, lineHeight: 1, marginBottom: 8 }}>{r.value}</div>
              <div style={{ fontSize: 12.5, color: "#374151", fontWeight: 600, lineHeight: 1.4, marginBottom: 4 }}>{r.label}</div>
              <div style={{ fontSize: 11.5, color: "#9ca3af" }}>{r.sub}</div>
            </div>
          ))}
        </div>

        {/* Internationale erkenning */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div style={{ width: 4, height: 22, background: CYAN, borderRadius: 2 }} />
          <h2 style={{ fontSize: 18, fontWeight: 700, color: DARK, margin: 0 }}>Internationale erkenning</h2>
        </div>

        <div style={{ background: "white", borderRadius: 14, padding: "28px 32px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", borderTop: `3px solid ${YELLOW}` }}>
          <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.8, margin: "0 0 16px" }}>
            De resultaten bleven niet onopgemerkt binnen de internationale MHK Group. De Nederlandse aanpak geldt inmiddels als voorbeeld van hoe omnichannel marketing, automatisering en AI succesvol kunnen worden ingezet binnen de woonbranche.
          </p>
          <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.8, margin: 0 }}>
            Daarom wordt dezelfde strategie inmiddels uitgerold binnen België. Wat begon als een pitch voor één formule is uitgegroeid tot een internationaal schaalbaar marketingmodel dat ondernemers helpt groeien én een blijvende voorsprong geeft op de concurrentie.
          </p>
        </div>

      </div>
    </div>
  );
}
