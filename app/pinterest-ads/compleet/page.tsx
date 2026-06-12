import PresentationNav from "../../_components/PresentationNav";

const COLOR = "#E60023";

export default function PinterestAdsCompleet() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f9fafb", minHeight: "100vh" }}>
      <PresentationNav channel="Pinterest Ads" color={COLOR} basePath="/pinterest-ads" />

      <div className="report-cover" style={{ background: "linear-gradient(135deg, #bd081c 0%, #e60023 100%)", color: "white" }}>
        <div className="report-cover-inner">
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.6, marginBottom: 12 }}>
            Pinterest Ads Analyse · Rietveld Licht & Wonen · Juni 2026
          </div>
          <h1 style={{ fontSize: 42, fontWeight: 700, lineHeight: 1.1, marginBottom: 16 }}>Pinterest Ads<br />Complete Presentatie</h1>
          <p style={{ fontSize: 16, opacity: 0.75, maxWidth: 520, lineHeight: 1.6, marginBottom: 48 }}>
            Testresultaten, kansen, strategie en plan van aanpak · Account 549760421679 · 4 mrt t/m 1 jun 2026
          </p>
          <div className="report-cover-stats">
            {[
              { l: "ROAS (test)", v: "15,65×" },
              { l: "Omzet (checkout)", v: "€46.944" },
              { l: "Spend (test)", v: "€3.000" },
              { l: "Checkouts", v: "172" },
            ].map((m) => (
              <div key={m.l}>
                <div style={{ fontSize: 11, opacity: 0.55, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>{m.l}</div>
                <div style={{ fontSize: 24, fontWeight: 700 }}>{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <iframe
        src="/reports/pinterest-analyse.html"
        style={{
          width: "100%",
          minHeight: "7200px",
          border: "none",
          display: "block",
        }}
        title="Pinterest Ads - Volledige analyse"
      />
    </div>
  );
}
