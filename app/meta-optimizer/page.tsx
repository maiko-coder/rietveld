import ToolScreenshotCarousel from "../_components/ToolScreenshotCarousel";

const CYAN = "#00adef";
const YELLOW = "#fecb09";
const DARK = "#262626";
const RED = "#ed1c23";

const SLIDES = [
  {
    src: "/meta-optimizer/01-dashboard.png",
    title: "Dashboard",
    desc: "Metrics en budgetvoorspellingen per Meta Ads account.",
  },
  {
    src: "/meta-optimizer/02-account-health.png",
    title: "Account Health",
    desc: "Alerts, optimalisatiesuggesties en A/B-testideeën op basis van accountdata.",
  },
  {
    src: "/meta-optimizer/03-account-analyse.png",
    title: "Account Analyse",
    desc: "Diepgaande statistieken en breakdowns per platform en apparaat.",
  },
  {
    src: "/meta-optimizer/04-performance-trends.png",
    title: "Performance Trends",
    desc: "Dagelijks verloop van uitgaven, impressies, klikken, conversies en ROAS.",
  },
  {
    src: "/meta-optimizer/05-plaatsingen-creatives.png",
    title: "Plaatsingen & Creatives",
    desc: "Welke plaatsingen presteren het best en hoe doen je creatives het.",
  },
  {
    src: "/meta-optimizer/06-strategie.png",
    title: "AI Strategie",
    desc: "KPI-overzicht met AI-analyse op maat per account en periode.",
  },
  {
    src: "/meta-optimizer/07-doelgroep-analyse.png",
    title: "Doelgroep Analyse",
    desc: "Insights per leeftijd, regio, geslacht, apparaat en plaatsing.",
  },
];

const FEATURES = [
  "Dashboard met budgetvoorspelling en metrics per periode",
  "Account health check met optimalisatie- en testideeën",
  "Doelgroep-, plaatsings- en performance-analyse",
  "AI-strategie op basis van accountdata",
];

export default function MetaOptimizerPage() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f3f4f6", minHeight: "100vh" }}>
      <div className="page-hero">
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -80,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${CYAN}15 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        <div className="page-hero-inner">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: `${CYAN}20`,
              border: `1px solid ${CYAN}40`,
              borderRadius: 20,
              padding: "4px 12px",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: CYAN,
              marginBottom: 16,
            }}
          >
            AI Tool · Woeler
          </div>
          <h1 style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.1, margin: "0 0 12px" }}>Meta AI Tool</h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", maxWidth: 560, margin: 0 }}>
            Eigen AI-platform voor Meta Ads: van dashboard en account health tot doelgroep-analyse, plaatsingen en strategie.
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: `linear-gradient(90deg, ${RED} 0%, ${YELLOW} 33%, ${CYAN} 66%, ${DARK} 100%)`,
          }}
        />
      </div>

      <div className="report-container report-container--960">
        <div
          style={{
            background: `${CYAN}0f`,
            border: `1px solid ${CYAN}30`,
            borderLeft: `4px solid ${CYAN}`,
            borderRadius: 10,
            padding: "16px 20px",
            marginBottom: 28,
          }}
        >
          <p style={{ fontSize: 14, color: "#0d6e9a", lineHeight: 1.75, fontWeight: 600, margin: 0 }}>
            We laten de Meta AI Tool live zien tijdens onze presentatie. Onderstaande screenshots geven een indruk van de belangrijkste onderdelen.
          </p>
        </div>

        <div className="report-grid-2" style={{ marginBottom: 32, gap: 12 }}>
          {FEATURES.map((f) => (
            <div
              key={f}
              style={{
                background: "white",
                borderRadius: 10,
                padding: "14px 18px",
                fontSize: 13,
                color: "#374151",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: CYAN, flexShrink: 0 }} />
              {f}
            </div>
          ))}
        </div>

        <ToolScreenshotCarousel slides={SLIDES} />
      </div>
    </div>
  );
}
