import { CYAN, YELLOW, DARK, RED } from "../../_components/ReportComponents";

export default function DakvoordeelshopPage() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f3f4f6", minHeight: "100vh" }}>

      {/* Hero */}
      <div style={{ background: DARK, color: "white", padding: "56px 32px 52px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -100, top: -100, width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${CYAN}15 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: -60, bottom: -60, width: 280, height: 280, borderRadius: "50%", background: `radial-gradient(circle, ${YELLOW}10 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1040, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `${CYAN}20`, border: `1px solid ${CYAN}40`, borderRadius: 20, padding: "4px 12px", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: CYAN, marginBottom: 16 }}>
            Case Study · Dakvoordeelshop
          </div>
          <h1 style={{ fontSize: 42, fontWeight: 800, lineHeight: 1.1, margin: "0 0 12px" }}>
            Duurzame omzetgroei<br />met behoud van rendement
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", marginBottom: 44, maxWidth: 560 }}>
            Hoe gecontroleerd opschalen via Google Ads leidde tot structurele omzetgroei - zonder de ROAS onder druk te zetten.
          </p>

          {/* Key metrics */}
          <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Omzetgroei maart (YoY)</div>
              <div style={{ fontSize: 44, fontWeight: 900, color: YELLOW, lineHeight: 1 }}>+47%</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>€99k → €146k</div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Omzetgroei april (YoY)</div>
              <div style={{ fontSize: 44, fontWeight: 900, color: CYAN, lineHeight: 1 }}>+24%</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>€168k → €209k</div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>ROAS</div>
              <div style={{ fontSize: 44, fontWeight: 900, color: "white", lineHeight: 1 }}>5–6×</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>Stabiel ondanks groei</div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${RED} 0%, ${YELLOW} 33%, ${CYAN} 66%, ${DARK} 100%)` }} />
      </div>

      {/* Content */}
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "44px 32px 64px" }}>

        {/* Over + Cijfers grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 40 }}>
          <div style={{ background: "white", borderRadius: 14, padding: "32px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", borderTop: `3px solid ${CYAN}` }}>
            <div style={{ fontSize: 10.5, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12, fontWeight: 600 }}>Over Dakvoordeelshop</div>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: DARK, margin: "0 0 14px" }}>Gevestigde speler in dakbedekking</h2>
            <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.75, margin: 0 }}>
              Dakvoordeelshop is gespecialiseerd in EPDM, dakbedekking en bijbehorende accessoires voor zowel particulieren als professionals. Met een sterk assortiment en een focus op kwaliteit heeft het bedrijf zich ontwikkeld tot een gevestigde speler binnen de Nederlandse markt.
            </p>
            <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.75, margin: "12px 0 0" }}>
              De combinatie van losse producten en complete dakpakketten zorgt voor een aantrekkelijk aanbod met gezonde marges en een efficiënte logistieke afhandeling.
            </p>
          </div>

          <div style={{ background: "white", borderRadius: 14, padding: "32px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", borderTop: `3px solid ${YELLOW}` }}>
            <div style={{ fontSize: 10.5, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20, fontWeight: 600 }}>Resultaten op een rij</div>
            {[
              { period: "Maart YoY", from: "€99.000", to: "€146.000", pct: "+47%", color: YELLOW },
              { period: "April YoY", from: "€168.000", to: "€209.000", pct: "+24%", color: CYAN },
            ].map((row, i) => (
              <div key={i} style={{ marginBottom: i === 0 ? 20 : 0 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>{row.period}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ fontSize: 15, color: "#6b7280" }}>{row.from}</div>
                  <svg viewBox="0 0 24 8" width="32" height="10" fill="none">
                    <path d="M0 4h20M16 1l4 3-4 3" stroke={row.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div style={{ fontSize: 18, fontWeight: 800, color: DARK }}>{row.to}</div>
                  <div style={{ marginLeft: 4, fontSize: 13, fontWeight: 700, color: row.color, background: `${row.color}15`, borderRadius: 20, padding: "2px 10px" }}>{row.pct}</div>
                </div>
                {i === 0 && <div style={{ height: 1, background: "#f3f4f6", margin: "16px 0 0" }} />}
              </div>
            ))}
            <div style={{ marginTop: 20, padding: "14px 18px", background: "#f9fafb", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ fontSize: 13, color: "#6b7280" }}>ROAS (stabiel)</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: DARK }}>5 – 6×</div>
            </div>
          </div>
        </div>

        {/* Aanpak sectie */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div style={{ width: 4, height: 22, background: CYAN, borderRadius: 2, flexShrink: 0 }} />
          <h2 style={{ fontSize: 18, fontWeight: 700, color: DARK, margin: 0 }}>Aanpak & Resultaten</h2>
        </div>

        <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.8, marginBottom: 28, maxWidth: 760 }}>
          Voor het online succes van Dakvoordeelshop zetten we voornamelijk Google Ads in. De campagnes zijn gericht op zoekopdrachten met een hoge koopintentie rondom EPDM, dakbedekking en aanverwante producten. Door slim gebruik te maken van productsegmentatie, feed-optimalisatie en gerichte budgetverdeling krijgen de best presterende producten meer zichtbaarheid en budget.
        </p>

        {/* Google Ads aanpakkaart */}
        <div style={{ background: "white", borderRadius: 14, padding: "28px 32px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", marginBottom: 40, borderLeft: `4px solid #4285f4` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: "#4285f420", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                <circle cx="11" cy="11" r="8" stroke="#4285f4" strokeWidth="2" />
                <path d="M21 21l-4.35-4.35" stroke="#4285f4" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: DARK }}>Google Ads</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { title: "Hoge koopintentie", desc: "Campagnes gericht op EPDM, dakbedekking en aanverwante producten met bewezen conversiepotentieel." },
              { title: "Productsegmentatie", desc: "Best presterende producten krijgen meer zichtbaarheid en budget op basis van actuele prestaties." },
              { title: "Feed-optimalisatie", desc: "Gestructureerde productfeed zorgt voor maximale relevantie in Shopping-campagnes." },
              { title: "Seizoensbudget", desc: "Budgetten worden continu afgestemd op de actuele vraag; opschalen in groeiseizoenen." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#f9fafb", borderRadius: 10, padding: "16px 18px" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: DARK, marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: 12.5, color: "#6b7280", lineHeight: 1.65 }}>{item.desc}</div>
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
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            {[
              { label: "Data", color: CYAN, desc: "Actief sturen op producten en zoekwoorden met de hoogste commerciële waarde. Winstgevende groepen krijgen meer aandacht." },
              { label: "Strategie", color: YELLOW, desc: "Gefaseerde budgetverhogingen houden het algoritme stabiel. Groei zonder dat de ROAS onder druk komt." },
              { label: "Gecontroleerde groei", color: "white", desc: "Stap voor stap opschalen: structureel hogere omzet met behoud van rendement als resultaat." },
            ].map((item, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: "20px 22px", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: item.color, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>{item.label}</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Samenwerking op lange termijn */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div style={{ width: 4, height: 22, background: YELLOW, borderRadius: 2, flexShrink: 0 }} />
          <h2 style={{ fontSize: 18, fontWeight: 700, color: DARK, margin: 0 }}>Samenwerking op lange termijn</h2>
        </div>

        <div style={{ background: "white", borderRadius: 14, padding: "28px 32px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", marginBottom: 40, borderTop: `3px solid ${YELLOW}` }}>
          <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.8, margin: "0 0 16px" }}>
            De kracht van deze samenwerking zit in de combinatie van vertrouwen, transparantie en een gezamenlijke focus op rendement. Door regelmatig te sparren over campagnes, productprestaties en webshopverbeteringen blijven we kansen identificeren zonder onnodige risico's te nemen.
          </p>
          <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.8, margin: 0 }}>
            Seizoensinvloeden spelen binnen deze markt een belangrijke rol. Daarom worden budgetten en campagnes voortdurend afgestemd op de actuele vraag. In groeiperiodes schalen we gecontroleerd op, terwijl we in rustigere periodes extra aandacht besteden aan efficiëntie en rendement.
          </p>
        </div>

        {/* Quote Geert */}
        <div style={{ background: "white", borderRadius: 14, padding: "32px 36px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", borderLeft: `4px solid ${CYAN}` }}>
          <div style={{ fontSize: 48, color: `${CYAN}30`, fontFamily: "Georgia, serif", lineHeight: 0.6, marginBottom: 16 }}>"</div>
          <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.8, fontStyle: "italic", margin: "0 0 20px", maxWidth: 740 }}>
            Wat deze klant bijzonder maakt, is dat er veel vertrouwen is in het proces. Daardoor kunnen we ons volledig richten op wat echt belangrijk is: duurzame groei realiseren zonder het rendement uit het oog te verliezen. De resultaten laten zien dat gecontroleerd opschalen vaak effectiever is dan snelle, agressieve groei. Juist door stap voor stap te werken, hebben we de omzet fors kunnen laten groeien terwijl de ROAS stabiel bleef.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 38, height: 38, borderRadius: "50%", background: `${CYAN}15`, border: `2px solid ${CYAN}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700, color: CYAN }}>G</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: DARK }}>Geert</div>
              <div style={{ fontSize: 12, color: "#9ca3af" }}>Strateeg bij Woeler</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
