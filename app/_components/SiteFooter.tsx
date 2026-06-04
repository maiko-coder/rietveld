export default function SiteFooter() {
  return (
    <footer style={{
      background: "#262626",
      borderTop: "3px solid #00adef",
      padding: "24px 32px",
      marginTop: 64,
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", margin: 0 }}>
          Vertrouwelijk · Rietveld Licht &amp; Wonen · Opgesteld door Woeler
        </p>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", margin: 0 }}>
          © {new Date().getFullYear()} Woeler
        </p>
      </div>
    </footer>
  );
}
