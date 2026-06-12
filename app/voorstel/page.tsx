const CYAN = "#00adef";
const YELLOW = "#fecb09";
const DARK = "#262626";
const RED = "#ed1c23";

const COMMITMENTS = [
  "Elke week een update met onze projectleiders",
  "Elke maand is er minimaal 1 lid van het projectteam een dagdeel op locatie",
  "Elk half jaar vindt er op locatie een uitgebreide evaluatie plaats met minimaal 50% van het projectteam",
  "Wij hebben veel ervaring met Bol, Admarkt, social media content en copywriting.",
];

const SERVICES = [
  {
    name: "SEA",
    budget: "€2,2–2,4M ad spend (jaarbasis)",
    fee: "€7.500",
    hours: "70–80 uur",
    note: null,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <circle cx="11" cy="11" r="8" stroke={CYAN} strokeWidth="2" />
        <path d="M21 21l-4.35-4.35" stroke={CYAN} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Meta",
    budget: "€90–110K media budget",
    fee: "€2.000",
    hours: "18–22 uur",
    note: null,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill={CYAN}>
        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    budget: "Minimaal €60K media budget",
    fee: "€1.000 – €2.000",
    hours: "9–11 uur",
    note: (
      <>
        <p>De fee is afhankelijk van het budget. Wij raden minimaal een 60K ad spend aan.</p>
        <p>De gecommuniceerde uren (9–11 per maand) gelden bij 60K ad spend.</p>
        <p>Bij voldoende succes zouden we dit graag verder opschalen.</p>
        <p><strong>Let op!</strong> Vanwege ons premium partnership met Pinterest betaalt Rietveld 50K bij een ad spend van 60K.</p>
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill={CYAN}>
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.78 1.26-5.33 1.26-5.33s-.32-.64-.32-1.59c0-1.49.87-2.61 1.94-2.61.92 0 1.36.69 1.36 1.51 0 .92-.59 2.3-.89 3.58-.25 1.07.53 1.94 1.58 1.94 1.9 0 3.36-2 3.36-4.89 0-2.56-1.84-4.35-4.47-4.35-3.04 0-4.83 2.28-4.83 4.64 0 .92.35 1.9.79 2.44.09.1.1.2.07.3-.08.33-.26 1.07-.3 1.22-.05.2-.16.24-.36.14-1.34-.62-2.18-2.58-2.18-4.15 0-3.38 2.46-6.49 7.09-6.49 3.72 0 6.61 2.65 6.61 6.19 0 3.7-2.33 6.67-5.57 6.67-1.08 0-2.1-.56-2.45-1.23l-.67 2.55c-.24.93-.89 2.1-1.33 2.81A10 10 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "SEO / GEO",
    budget: null,
    fee: "€2.500",
    hours: "22–26 uur",
    note: null,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={CYAN} strokeWidth="2">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
        <path d="M8 11h6M11 8v6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Marketing Automation",
    budget: null,
    fee: "€3.000",
    hours: "25–30 uur",
    note: null,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={CYAN} strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <path d="M17.5 14v3M14 17.5h7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Project- en contacturen",
    budget: "Overleg intern & extern",
    fee: "€1.500 – €2.000",
    hours: "14–22 uur",
    note: "Na 2 maanden vastleggen.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={CYAN} strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Admarkt, Bol & Criteo",
    budget: null,
    fee: "Nader te bepalen",
    hours: "Nader te bepalen",
    note: null,
    dimmed: true,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={CYAN} strokeWidth="2">
        <path d="M12 3v18M3 12h18" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function VoorstelPage() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f3f4f6", minHeight: "100vh" }}>

      <div className="voorstel-hero">
        <div style={{ position: "absolute", right: -80, top: -80, width: 360, height: 360, borderRadius: "50%", background: `radial-gradient(circle, ${CYAN}15 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div className="voorstel-hero-inner">
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `${YELLOW}20`, border: `1px solid ${YELLOW}40`, borderRadius: 20, padding: "4px 12px", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: YELLOW, marginBottom: 16 }}>
            Voorstel · Rietveld Licht & Wonen
          </div>
          <h1 style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.1, margin: "0 0 12px" }}>Maandelijkse samenwerking</h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", maxWidth: 540, margin: "0 0 36px" }}>
            Een volledig marketingteam voor alle kanalen - met vaste maandelijkse fees, transparante uren en geen verrassingen.
          </p>

          <div className="voorstel-hero-stats">
            <div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Totale fee per maand</div>
              <div style={{ fontSize: 44, fontWeight: 900, color: YELLOW, lineHeight: 1 }} className="voorstel-hero-stat-value">€19.000</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 6 }}>€17.500 bij minimale fee&apos;s</div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Uren per maand</div>
              <div style={{ fontSize: 44, fontWeight: 900, color: CYAN, lineHeight: 1 }} className="voorstel-hero-stat-value">158–191</div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Kanalen</div>
              <div style={{ fontSize: 44, fontWeight: 900, color: "white", lineHeight: 1 }} className="voorstel-hero-stat-value">7</div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${RED} 0%, ${YELLOW} 33%, ${CYAN} 66%, ${DARK} 100%)` }} />
      </div>

      <div className="voorstel-content">
        <div className="voorstel-section-header">
          <div style={{ width: 4, height: 22, background: CYAN, borderRadius: 2 }} />
          <h2 style={{ fontSize: 18, fontWeight: 700, color: DARK, margin: 0 }}>Opbouw per kanaal</h2>
        </div>

        <div className="voorstel-table-header">
          <div>Kanaal</div>
          <div>Budget</div>
          <div>Fee per maand</div>
          <div>Uren per maand</div>
        </div>

        <div className="voorstel-services">
          {SERVICES.map((s) => (
            <div key={s.name} style={{ background: "white", borderRadius: 14, boxShadow: "0 1px 4px rgba(0,0,0,0.06)", overflow: "hidden", opacity: s.dimmed ? 0.72 : 1 }}>
              <div className="voorstel-service-card">
                <div className="voorstel-service-name">
                  <div style={{ width: 42, height: 42, borderRadius: 10, background: `${CYAN}12`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {s.icon}
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: DARK }}>{s.name}</div>
                </div>

                <div className="voorstel-service-fields">
                  <div className="voorstel-service-field">
                    <div className="voorstel-field-label voorstel-field-label--mobile">Budget</div>
                    <div className="voorstel-field-value" style={{ color: s.budget ? "#374151" : "#c4c9d0" }}>{s.budget ?? "n.v.t."}</div>
                  </div>

                  <div className="voorstel-service-field">
                    <div className="voorstel-field-label voorstel-field-label--mobile">Fee per maand</div>
                    <div className="voorstel-field-value voorstel-field-value--fee">{s.fee}</div>
                  </div>

                  <div className="voorstel-service-field">
                    <div className="voorstel-field-label voorstel-field-label--mobile">Uren per maand</div>
                    <div className="voorstel-field-value">{s.hours}</div>
                  </div>
                </div>
              </div>

              {s.note && (
                <div className="voorstel-service-note" style={{ background: `${YELLOW}12`, border: `1px solid ${YELLOW}40`, borderLeft: `4px solid ${YELLOW}`, color: "#6b5a10" }}>
                  {s.note}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="voorstel-total">
          <div className="voorstel-total-title">Totaal per maand</div>
          <div className="voorstel-service-field">
            <div className="voorstel-field-label voorstel-field-label--dark voorstel-field-label--mobile">Media budget</div>
            <div className="voorstel-field-value voorstel-field-value--dark">€2,2–2,4M SEA + €90–110K Meta + min. €60K Pinterest</div>
          </div>
          <div className="voorstel-service-field">
            <div className="voorstel-field-label voorstel-field-label--dark voorstel-field-label--mobile">Fee</div>
            <div className="voorstel-field-value voorstel-field-value--total-fee">€17.500 – €19.000</div>
          </div>
          <div className="voorstel-service-field">
            <div className="voorstel-field-label voorstel-field-label--dark voorstel-field-label--mobile">Uren</div>
            <div className="voorstel-field-value voorstel-field-value--total-hours">158–191</div>
          </div>
        </div>

        <div className="voorstel-commitments">
          <div className="voorstel-commitments-title">Wat je van ons mag verwachten</div>
          <ul className="voorstel-commitments-list">
            {COMMITMENTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <p style={{ fontSize: 12, color: "#9ca3af", marginTop: 20, textAlign: "center" }}>
          Alle bedragen zijn exclusief btw. Mediabudgetten worden rechtstreeks aan de platformen betaald.
        </p>
      </div>
    </div>
  );
}
