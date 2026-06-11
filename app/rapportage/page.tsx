const REPORT_URL = "https://datastudio.google.com/u/4/reporting/b90fa4bf-f791-4123-9be9-0c1c5fff3184/page/VgD";
const EMBED_URL = "https://lookerstudio.google.com/embed/reporting/b90fa4bf-f791-4123-9be9-0c1c5fff3184/page/VgD";

export default function RapportagePage() {
  return (
    <div style={{ height: "calc(100vh - 96px)", display: "flex", flexDirection: "column", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div style={{ background: "white", borderBottom: "1px solid #e5e7eb", padding: "10px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: "#262626" }}>Live rapportage · Looker Studio</span>
        <a
          href={REPORT_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 12.5, fontWeight: 600, color: "#00adef", display: "inline-flex", alignItems: "center", gap: 5 }}
        >
          Open in nieuw tabblad
          <svg viewBox="0 0 16 16" width="11" height="11" fill="none">
            <path d="M6 3h7v7M13 3L7 9" stroke="#00adef" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
      <iframe
        src={EMBED_URL}
        style={{ flex: 1, width: "100%", border: "none", display: "block" }}
        title="Rietveld rapportage - Looker Studio"
        allowFullScreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      />
    </div>
  );
}
