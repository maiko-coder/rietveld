const videos = [
  { src: "/content/housespecials-ai-reel.mp4", label: "Housespecials AI Reel" },
  { src: "/content/inboedelhuis-ai-tiktok.mp4", label: "Inboedelhuis AI TikTok", muted: true },
  { src: "/content/vogels-keukens-kasten.mp4", label: "Vogels Keukens en Kasten" },
  { src: "/content/keukenboetiek-woning.mp4", label: "Keukenboetiek Woning" },
  { src: "/content/landgoed-de-woldberg.mp4", label: "Landgoed de Woldberg" },
  { src: "/content/title-video.mp4", label: "AI Video" },
];

export default function AIGeneratedPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      {/* Hero */}
      <div style={{ background: "#262626", padding: "48px 32px 40px", borderBottom: "3px solid #00adef" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(0,173,239,0.15)",
              border: "1px solid rgba(0,173,239,0.3)",
              borderRadius: 20,
              padding: "4px 14px",
              fontSize: 11,
              fontWeight: 700,
              color: "#00adef",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00adef", display: "inline-block" }} />
              AI-Generated
            </span>
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: "white", margin: "0 0 16px", lineHeight: 1.2 }}>
            AI-Generated Content
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", maxWidth: 700, margin: 0, lineHeight: 1.6 }}>
            Hieronder vinden jullie een aantal voorbeelden van video&apos;s die wij met behulp van AI hebben gecreëerd,
            waarbij statische foto&apos;s zijn omgezet in bewegende beelden.
          </p>
        </div>
      </div>

      {/* Video grid */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 32px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 28,
        }}>
          {videos.map((video) => (
            <div
              key={video.src}
              style={{
                background: "white",
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <video
                src={video.src}
                controls
                playsInline
                muted={video.muted}
                style={{ width: "100%", display: "block", background: "#000", maxHeight: 480 }}
              />
              <div style={{ padding: "14px 18px" }}>
                <p style={{ margin: 0, fontSize: 13.5, fontWeight: 600, color: "#262626" }}>{video.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
