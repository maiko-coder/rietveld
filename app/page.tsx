export default function HomePage() {
  return (
    <div style={{ height: "calc(100vh - 96px)", display: "flex", flexDirection: "column" }}>
      <iframe
        src="/reports/woeler-pitch.html"
        style={{
          flex: 1,
          width: "100%",
          border: "none",
          display: "block",
        }}
        title="Woeler - Rietveld Licht presentatie"
      />
    </div>
  );
}
