export default function HumanCreatedPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <div style={{ background: "#262626", padding: "48px 32px 40px", borderBottom: "3px solid #fecb09" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(254,203,9,0.15)",
              border: "1px solid rgba(254,203,9,0.3)",
              borderRadius: 20,
              padding: "4px 14px",
              fontSize: 11,
              fontWeight: 700,
              color: "#fecb09",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#fecb09", display: "inline-block" }} />
              Human-Created
            </span>
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: "white", margin: "0 0 16px", lineHeight: 1.2 }}>
            Human-Created Content
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", maxWidth: 700, margin: 0, lineHeight: 1.6 }}>
            Op deze pagina kunnen jullie voorbeelden bekijken van video&apos;s die volledig zijn opgebouwd uit zelfgefilmd
            beeldmateriaal. Hier zien jullie ook dat de Woeler-collega&apos;s zelf wel eens figureren om de
            showroom-ervaring nog duidelijker in beeld te brengen.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 32px" }}>
        {/* Studio Moda – staand formaat, naast KBC */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 28, alignItems: "stretch" }}>
          <div style={{ background: "white", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.06)", display: "flex", flexDirection: "column" }}>
            <video src="/content/studio-moda-igfb.mp4" controls playsInline style={{ width: "100%", flex: 1, display: "block", background: "#000", objectFit: "contain" }} />
          </div>
          {/* KBC Web – liggend formaat, groter */}
          <div style={{ background: "white", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.06)", display: "flex", flexDirection: "column" }}>
            <video src="/content/kbc-web.mov" controls playsInline style={{ width: "100%", flex: 1, display: "block", background: "#000", objectFit: "contain" }} />
          </div>
        </div>

        {/* EKO Europe – liggend header-formaat, volle breedte */}
        <div style={{ marginTop: 28, background: "white", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.06)" }}>
          <video src="/content/eko-europe.mp4" controls playsInline style={{ width: "100%", display: "block", background: "#000" }} />
        </div>
      </div>
    </main>
  );
}
