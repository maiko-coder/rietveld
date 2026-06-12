import { CYAN, YELLOW, DARK, RED } from "../../_components/ReportComponents";

export default function ManoirPage() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f3f4f6", minHeight: "100vh" }}>

      {/* Hero */}
      <div className="case-hero">
        <div style={{ position: "absolute", right: -100, top: -100, width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${CYAN}15 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: -60, bottom: -60, width: 280, height: 280, borderRadius: "50%", background: `radial-gradient(circle, ${YELLOW}10 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div className="case-hero-inner">
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `${CYAN}20`, border: `1px solid ${CYAN}40`, borderRadius: 20, padding: "4px 12px", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: CYAN, marginBottom: 16 }}>
            Case Study · Manoir
          </div>
          <h1 style={{ fontSize: 42, fontWeight: 800, lineHeight: 1.1, marginBottom: 12, margin: "0 0 12px" }}>
            Woeler goes America!
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", marginBottom: 44, maxWidth: 560 }}>
            Hoe Woeler Manoir hielp groeien in omzet en zichtbaarheid op de Amerikaanse markt.
          </p>

          {/* Key metrics */}
          <div className="case-hero-stats">
            <div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Gemiddelde orderwaarde</div>
              <div style={{ fontSize: 44, fontWeight: 900, color: YELLOW, lineHeight: 1 }}>+24%</div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Maandelijkse omzet</div>
              <div style={{ fontSize: 44, fontWeight: 900, color: CYAN, lineHeight: 1 }}>+1000%</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>Sinds start samenwerking</div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Omzetgroei (1 jaar)</div>
              <div style={{ fontSize: 44, fontWeight: 900, color: "white", lineHeight: 1 }}>5×</div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${RED} 0%, ${YELLOW} 33%, ${CYAN} 66%, ${DARK} 100%)` }} />
      </div>

      {/* Content */}
      <div className="case-content">

        {/* About Manoir */}
        <div className="report-grid-2" style={{ gap: 24, marginBottom: 40 }}>
          <div style={{ background: "white", borderRadius: 14, padding: "32px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", borderTop: `3px solid ${CYAN}` }}>
            <div style={{ fontSize: 10.5, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12, fontWeight: 600 }}>Over Manoir</div>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: DARK, marginBottom: 14, margin: "0 0 14px" }}>Franse elegantie met karakter</h2>
            <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.75, margin: 0 }}>
              Manoir is een meubel- en interieurmerk uit Boston, opgericht door Elizabeth Jones in 2015. Geïnspireerd door klassiek Frans en Europees design lanceerde het merk op Bastille Day 2017 de iconische Villecerf Mirror, gevolgd door een succesvolle pop-up store in Bow Market in 2018.
            </p>
            <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.75, margin: "12px 0 0" }}>
              Vandaag ontwerpt Manoir duurzame collecties met handmatige afwerkingen. De naam verwijst naar het Franse "manoir" (landhuis), en de collectie voelt als een unieke vondst van een Franse markt.
            </p>
          </div>

          <div style={{ background: "white", borderRadius: 14, padding: "32px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", borderTop: `3px solid ${YELLOW}` }}>
            <div style={{ fontSize: 10.5, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12, fontWeight: 600 }}>Tijdlijn</div>
            {[
              { year: "2015", event: "Oprichting door Elizabeth Jones in Boston" },
              { year: "2017", event: "Lancering iconische Villecerf Mirror op Bastille Day" },
              { year: "2018", event: "Succesvolle pop-up store in Bow Market" },
              { year: "2023", event: "Start samenwerking met Woeler" },
              { year: "2024", event: "5× omzetgroei bereikt in één jaar" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 16, marginBottom: i < 4 ? 16 : 0 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: CYAN, flexShrink: 0, marginTop: 5 }} />
                  {i < 4 && <div style={{ width: 2, height: "calc(100% + 12px)", background: `${CYAN}30`, marginTop: 2 }} />}
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: CYAN, letterSpacing: "0.05em" }}>{item.year}</div>
                  <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.5 }}>{item.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Elizabeth */}
        <div style={{ background: DARK, borderRadius: 14, padding: "36px 40px", marginBottom: 40, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: -40, top: -40, width: 200, height: 200, borderRadius: "50%", background: `radial-gradient(circle, ${CYAN}12 0%, transparent 70%)` }} />
          <div style={{ fontSize: 64, color: `${CYAN}40`, fontFamily: "Georgia, serif", lineHeight: 0.6, marginBottom: 20, display: "block" }}>"</div>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.8, fontStyle: "italic", margin: "0 0 24px", maxWidth: 720, position: "relative" }}>
            As the founder of Manoir, I can honestly say Woeler has been an exceptional partner. They helped us scale our revenue 5× in just one year through smart Meta and Google advertising, and I truly appreciate how closely they listen, collaborate, and challenge us with thoughtful feedback.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${CYAN}25`, border: `2px solid ${CYAN}50`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700, color: CYAN }}>E</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "white" }}>Elizabeth Jones</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>Founder, Manoir · Boston</div>
            </div>
          </div>
        </div>

        {/* Aanpak sectietitel */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div style={{ width: 4, height: 22, background: CYAN, borderRadius: 2, flexShrink: 0 }} />
          <h2 style={{ fontSize: 18, fontWeight: 700, color: DARK, margin: 0 }}>Aanpak & Resultaten</h2>
        </div>

        <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.8, marginBottom: 28, maxWidth: 760 }}>
          Voor het online succes van Manoir zetten we Google Ads en Meta Ads in. Met Meta richten we ons op de best presterende regio's in de VS; in Google sturen we op zoekwoorden en doelgroepen met hoge koopintentie. Door slim in te spelen op Amerikaanse feestdagen - o.a. 4th of July en Labor Day - draaien we sterke sale-campagnes.
        </p>

        {/* Kanalen grid */}
        <div className="report-grid-2" style={{ gap: 20, marginBottom: 40 }}>
          {/* Meta Ads */}
          <div style={{ background: "white", borderRadius: 14, padding: "28px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", borderLeft: `4px solid #1877f2` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "#1877f220", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#1877f2">
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                </svg>
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: DARK }}>Meta Ads</div>
            </div>
            <p style={{ fontSize: 13, color: "#4b5563", lineHeight: 1.7, margin: "0 0 16px" }}>
              Ingezet gedurende de gehele customer journey: prospecting voor merkbekendheid en directe aankopen. Creatives sluiten aan op de stijl en behoeftes van de doelgroep.
            </p>
            {[
              "Segmentatie per regio in de VS",
              "Prospecting + retargeting strategie",
              "Feestdagencampagnes (4th of July, Labor Day)",
              "Advantage+ Shopping opschalen",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 6 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#1877f2", flexShrink: 0, marginTop: 6 }} />
                <span style={{ fontSize: 12.5, color: "#6b7280" }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Google Ads */}
          <div style={{ background: "white", borderRadius: 14, padding: "28px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", borderLeft: `4px solid #4285f4` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "#4285f420", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#4285f4" strokeWidth="2" fill="none" />
                  <path d="M12 7v5l3 3" stroke="#4285f4" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: DARK }}>Google Ads</div>
            </div>
            <p style={{ fontSize: 13, color: "#4b5563", lineHeight: 1.7, margin: "0 0 16px" }}>
              Complementair aan Meta: gericht op mensen die actief zoeken naar meubels en de Franse interieurstijl. Verfijning op koopintentie voor maximale ROAS.
            </p>
            {[
              "Zoekwoorden met hoge koopintentie",
              "Non-brand vs. brand campagnes",
              "Segmentatie: generiek / product / merk",
              "High-intent doelgroepen targeten",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 6 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#4285f4", flexShrink: 0, marginTop: 6 }} />
                <span style={{ fontSize: 12.5, color: "#6b7280" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* De Gouden Combinatie */}
        <div style={{ background: `linear-gradient(135deg, ${DARK} 0%, #1a1a2e 100%)`, borderRadius: 14, padding: "36px", marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{ width: 28, height: 28, borderRadius: 6, background: YELLOW, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 16 16" width="14" height="14" fill={DARK}>
                <path d="M8 1l1.9 3.8 4.1.6-3 2.9.7 4.1L8 10.5 4.3 12.4l.7-4.1L2 5.4l4.1-.6L8 1z" />
              </svg>
            </div>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "white", margin: 0 }}>De Gouden Combinatie</h2>
          </div>
          <div className="report-grid-2" style={{ gap: 20 }}>
            <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: "20px 22px", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: CYAN, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Meta · Inspireren</div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: 0 }}>
                Meta Ads inzetten voor de gehele customer journey - van merkbekendheid (prospecting) tot directe aankopen. Creatives perfect afgestemd op de Frans-geïnspireerde stijl.
              </p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: "20px 22px", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: YELLOW, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Google · Converteren</div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: 0 }}>
                Google Ads complementair voor mensen die actief zoeken naar meubels. Verfijning op koopintentie koppelt inspiratie aan conversie en maximaliseert bereik én ROAS.
              </p>
            </div>
          </div>
        </div>

        {/* Lange termijn */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div style={{ width: 4, height: 22, background: YELLOW, borderRadius: 2, flexShrink: 0 }} />
          <h2 style={{ fontSize: 18, fontWeight: 700, color: DARK, margin: 0 }}>Samenwerking op lange termijn</h2>
        </div>

        <div style={{ background: "white", borderRadius: 14, padding: "28px 32px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", marginBottom: 40, borderTop: `3px solid ${YELLOW}` }}>
          <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.8, margin: 0 }}>
            Manoir blijft de collectie uitbreiden. De focus: de Amerikaanse consument verder bekendmaken met de Frans-geïnspireerde meubels en de webshop omzet structureel laten groeien. Het grote marktpotentieel in de VS biedt ruime kansen om verder op te schalen.
          </p>
        </div>

        {/* Quote Sarah */}
        <div style={{ background: "white", borderRadius: 14, padding: "32px 36px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", borderLeft: `4px solid ${CYAN}`, marginBottom: 40 }}>
          <div style={{ fontSize: 48, color: `${CYAN}30`, fontFamily: "Georgia, serif", lineHeight: 0.6, marginBottom: 16 }}>"</div>
          <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.8, fontStyle: "italic", margin: "0 0 20px", maxWidth: 700 }}>
            De Amerikaanse consument verschilt sterk van de doelgroepen waar ik eerder mee werkte, en juist dat maakt het uitdagend en leerzaam. Des te mooier dat de samenwerking zo succesvol is! De cijfers spreken voor zich. Deze groei creëert ruimte om verder uit te breiden en op te schalen.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 38, height: 38, borderRadius: "50%", background: `${CYAN}15`, border: `2px solid ${CYAN}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700, color: CYAN }}>S</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: DARK }}>Sarah</div>
              <div style={{ fontSize: 12, color: "#9ca3af" }}>Strateeg bij Woeler</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
