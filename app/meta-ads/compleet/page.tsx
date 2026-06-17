import PresentationNav from "../../_components/PresentationNav";

const COLOR = "#1877F2";

export default function MetaAdsCompleet() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f9fafb", minHeight: "100vh" }}>
      <PresentationNav channel="Meta Ads" color={COLOR} basePath="/meta-ads" />

      <div className="report-cover" style={{ background: "linear-gradient(135deg, #1558b0 0%, #1877f2 100%)", color: "white" }}>
        <div className="report-cover-inner">
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.6, marginBottom: 12 }}>Meta Ads Analyse · Rietveld Licht B.V. · Juni 2026</div>
          <h1 style={{ fontSize: 42, fontWeight: 700, lineHeight: 1.1, marginBottom: 16 }}>Meta Ads<br />Complete Presentatie</h1>
          <p style={{ fontSize: 16, opacity: 0.75, maxWidth: 520, lineHeight: 1.6, marginBottom: 48 }}>Huidige positie · Kansen · Strategie · Doelstellingen · Sept 2023 – juni 2026</p>
          <div className="report-cover-stats">
            {[{ l: "Omzet ROAS", v: "15,80x" }, { l: "Totaal aankopen", v: "6.765" }, { l: "Conversiewaarde", v: "€1,88M" }, { l: "Gem. CPA", v: "€17,58" }].map((m) => (
              <div key={m.l}>
                <div style={{ fontSize: 11, opacity: 0.55, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>{m.l}</div>
                <div style={{ fontSize: 24, fontWeight: 700 }}>{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="report-container--960 meta-ads-analyse-body">
        <iframe
          src="/reports/meta-ads-analyse.html"
          title="Meta Ads Analyse — Rietveld Licht B.V."
        />
      </div>
    </div>
  );
}
