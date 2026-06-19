"use client";
import { CYAN, YELLOW } from "../../_components/ReportComponents";

export default function SneakPeekPage() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f4f5f7", minHeight: "100vh" }}>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #262626 100%)", color: "white", padding: "56px 32px 48px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <span style={{ background: YELLOW, color: "#1a1a1a", fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 20 }}>
              Sneak peek
            </span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Meta Ads · StoreTraffic
            </span>
          </div>
          <h1 style={{ fontSize: 38, fontWeight: 700, lineHeight: 1.15, margin: "0 0 14px", letterSpacing: "-0.01em" }}>
            Showroom advertentie<br />
            <span style={{ color: CYAN }}>in de maak</span>
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 560, margin: 0 }}>
            Een eerste blik op de richting voor de nieuwe StoreTraffic-campagne. Sfeer, beleving en de showroom als hoofdrolspeler, zo trekken we meer bezoekers naar de winkel.
          </p>
        </div>
      </div>

      {/* Video + context */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "48px 32px 64px" }}>

        {/* Video player */}
        <div style={{
          background: "#1a1a1a",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
          marginBottom: 40,
        }}>
          <video
            controls
            autoPlay
            muted
            loop
            playsInline
            style={{ width: "100%", display: "block", maxHeight: 520, objectFit: "contain" }}
          >
            <source src="/rietveld-sneak-peek.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Context cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 32 }}>
          {[
            { label: "Campagnetype", value: "StoreTraffic", icon: "📍" },
            { label: "Doel", value: "Showroombezoek", icon: "🏬" },
            { label: "Bewezen ROAS", value: "35,65×", icon: "📈" },
          ].map((c) => (
            <div key={c.label} style={{ background: "white", borderRadius: 12, padding: "20px 22px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{c.icon}</div>
              <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9ca3af", marginBottom: 4 }}>{c.label}</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#111827" }}>{c.value}</div>
            </div>
          ))}
        </div>

        {/* Toelichting */}
        <div style={{ background: "white", borderRadius: 12, padding: "28px 32px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", borderLeft: `4px solid ${CYAN}` }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: CYAN, marginBottom: 12 }}>Waarom deze aanpak</div>
          <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.8, margin: "0 0 12px" }}>
            De vorige StoreTraffic-campagne realiseerde een ROAS van 35,65x op €24.309 spend. De showroom is het grootste onderscheidende voordeel van Rietveld Licht. Toch wordt de beleving nu nauwelijks zichtbaar gemaakt in de advertenties.
          </p>
          <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.8, margin: 0 }}>
            De nieuwe campagne brengt de sfeer van de showroom naar buiten: ingerichte kamers, verlichting aan, een omgeving waar mensen de lamp in de praktijk zien. Gecombineerd met een heldere CTA stuurt dit de juiste doelgroep (55+, lokaal) actief richting de winkel.
          </p>
        </div>

      </div>
    </div>
  );
}
