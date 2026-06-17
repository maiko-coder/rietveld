import PresentationNav from "../../_components/PresentationNav";

const COLOR = "#2563EB";

export default function GoogleAdsJaaranalyse() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f9fafb", minHeight: "100vh" }}>
      <PresentationNav channel="Google Ads" color={COLOR} basePath="/google-ads" />

      <div className="report-cover" style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)", color: "white" }}>
        <div className="report-cover-inner">
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.6, marginBottom: 12 }}>
            Google Ads Analyse · Rietveld Licht & Wonen · Juni 2026
          </div>
          <h1 style={{ fontSize: 42, fontWeight: 700, lineHeight: 1.1, marginBottom: 16, maxWidth: 560 }}>Kosten &amp; resultaten<br />Jaaranalyse</h1>
          <p style={{ fontSize: 16, opacity: 0.75, maxWidth: 520, lineHeight: 1.6, marginBottom: 48 }}>
            Jaar-op-jaar vergelijking, campagneprestaties, maandtrends en provincieanalyse · mei 2025 – mei 2026
          </p>
          <div className="report-cover-stats">
            {[
              { l: "Spend", v: "€2,1M/jaar" },
              { l: "Omzet", v: "€12,5M/jaar" },
              { l: "Account ROAS", v: "5,87" },
              { l: "YoY spend", v: "+66,5%" },
            ].map((m) => (
              <div key={m.l}>
                <div style={{ fontSize: 11, opacity: 0.55, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>{m.l}</div>
                <div style={{ fontSize: 24, fontWeight: 700 }}>{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="report-container--960 google-ads-jaaranalyse-body">
        <iframe
          src="/reports/google-ads-jaaranalyse.html"
          title="Google Ads - Kosten & resultaten (jaaranalyse)"
        />
      </div>
    </div>
  );
}
