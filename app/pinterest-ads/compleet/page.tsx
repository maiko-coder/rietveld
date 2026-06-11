import PresentationNav from "../../_components/PresentationNav";
import { CYAN } from "../../_components/ReportComponents";

export default function PinterestAdsCompleet() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f4f5f7", minHeight: "100vh" }}>
      <PresentationNav channel="Pinterest Ads" color={CYAN} basePath="/pinterest-ads" />

      <div style={{ padding: "20px 0 0" }}>
        <iframe
          src="/reports/pinterest-analyse.html"
          style={{
            width: "100%",
            height: "calc(100vh - 120px)",
            border: "none",
            display: "block",
          }}
          title="Pinterest Ads - Volledige analyse"
        />
      </div>
    </div>
  );
}
