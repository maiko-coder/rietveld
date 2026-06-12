import ToolScreenshotCarousel from "../_components/ToolScreenshotCarousel";

const CYAN = "#00adef";
const YELLOW = "#fecb09";
const DARK = "#262626";
const RED = "#ed1c23";

const SLIDES = [
  {
    src: "/adoptimizer/01-account-overview.png",
    title: "Account overview",
    desc: "Persoonlijk dashboard met openstaande werkzaamheden per account.",
  },
  {
    src: "/adoptimizer/02-health-check.png",
    title: "Account health check",
    desc: "Automatische signalering van budget- en campagne-aandachtspunten.",
  },
  {
    src: "/adoptimizer/03-budget-check.png",
    title: "Account budget check",
    desc: "Metrics en budgetvoorspellingen per account en periode.",
  },
  {
    src: "/adoptimizer/04-ai-strategie.png",
    title: "AI Strategie",
    desc: "Biedstrategie per campagne, doel vs. werkelijk en AI-suggesties.",
  },
  {
    src: "/adoptimizer/08-zoekterm-analyse.png",
    title: "AI Zoekterm Analyse",
    desc: "AI-detectie van irrelevante zoektermen met potentiële besparing per campagne.",
  },
  {
    src: "/adoptimizer/05-shopping.png",
    title: "Shopping & campagnes",
    desc: "Campagne-overzicht met productstatistieken en AI-analyse per segment.",
  },
  {
    src: "/adoptimizer/06-feed-optimizer.png",
    title: "Feed Optimizer",
    desc: "Producttitels optimaliseren met AI en exporteren naar Google Shopping.",
  },
  {
    src: "/adoptimizer/07-product-overlap.png",
    title: "Product Overlap",
    desc: "Producten die in meerdere campagnes actief zijn, met kosten- en ROAS-verdeling.",
  },
];

const FEATURES = [
  "Account health check en budget monitoring",
  "AI zoekterm-analyse en strategie-adviezen",
  "Shopping feed optimalisatie en product overlap",
  "Campagne-overzichten met AI-automatiseringen",
];

export default function AdOptimizerPage() {
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
          <h1 style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.1, margin: "0 0 12px" }}>AdOptimizer</h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", maxWidth: 560, margin: 0 }}>
            Eigen AI-platform voor Google Ads: van account health tot zoekterm-analyse, feed optimalisatie en shopping inzichten.
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
            We laten AdOptimizer live zien tijdens onze presentatie. Onderstaande screenshots geven een indruk van de belangrijkste onderdelen.
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
      </div>

      <div className="tool-screenshot-section">
        <ToolScreenshotCarousel slides={SLIDES} />
      </div>
    </div>
  );
}
