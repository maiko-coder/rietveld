"use client";
import { useState } from "react";
import Image from "next/image";

const CYAN = "#00adef";
const YELLOW = "#fecb09";
const DARK = "#262626";
const RED = "#ed1c23";

const TEAM = [
  {
    id: "sarah",
    name: "Sarah Voogd",
    orgRole: "Meta",
    functie: "Teamlead / Senior allround marketeer",
    lead: true,
    photo: "/team/sarah.webp",
    details: [
      { label: "Relevante expertise en specialisaties", value: "Meta, GA4/Data Studio, Strategie" },
      { label: "Aantal jaren ervaring", value: "4 jaar" },
      { label: "Verantwoordelijkheid binnen projectteam", value: "Meta, Rapportage" },
      { label: "Beschikbaarheid per week", value: "5–10 uur" },
    ],
  },
  {
    id: "maiko",
    name: "Maiko Groot",
    orgRole: "SEA",
    functie: "Senior allround marketeer",
    lead: true,
    photo: "/team/maiko.webp",
    details: [
      { label: "Relevante expertise en specialisaties", value: "SEA, SEO/GEO, AI, GA4/Data Studio, Strategie, CRO" },
      { label: "Aantal jaren ervaring", value: "10+ jaar" },
      { label: "Verantwoordelijkheid binnen projectteam", value: "SEA, Rapportage" },
      { label: "Beschikbaarheid per week", value: "15–20 uur" },
    ],
  },
  {
    id: "kelly",
    name: "Kelly Aalberse",
    orgRole: "Marketing automation",
    functie: "Teamlead / Senior allround marketeer",
    lead: false,
    photo: "/team/kelly.webp",
    details: [
      { label: "Relevante expertise en specialisaties", value: "Marketing automation, SEO/GEO, Meta" },
      { label: "Aantal jaren ervaring", value: "10+ jaar" },
      { label: "Verantwoordelijkheid binnen projectteam", value: "Marketing automation" },
      { label: "Beschikbaarheid per week", value: "5 uur" },
    ],
  },
  {
    id: "lorenzo",
    name: "Lorenzo Fioraliso",
    orgRole: "SEO/GEO",
    functie: "Senior allround marketeer",
    lead: false,
    photo: "/team/lorenzo.webp",
    details: [
      { label: "Relevante expertise en specialisaties", value: "SEO/GEO, SEA, Marketing automation, Meta" },
      { label: "Aantal jaren ervaring", value: "8 jaar" },
      { label: "Verantwoordelijkheid binnen projectteam", value: "SEO/GEO" },
      { label: "Beschikbaarheid per maand", value: "15 uur" },
    ],
  },
  {
    id: "isa",
    name: "Isa van Leijden",
    orgRole: "Pinterest",
    functie: "Senior social specialist",
    lead: false,
    photo: "/team/isa.webp",
    details: [
      { label: "Relevante expertise en specialisaties", value: "Pinterest ads, Meta ads" },
      { label: "Aantal jaren ervaring", value: "4 jaar" },
      { label: "Verantwoordelijkheid binnen projectteam", value: "Pinterest" },
      { label: "Beschikbaarheid per maand", value: "10–15 uur" },
    ],
  },
  {
    id: "geert",
    name: "Geert Groot",
    orgRole: "SEA specialist",
    functie: "Externe SEA specialist",
    lead: false,
    staff: true,
    photo: "/team/geert.webp",
    details: [
      { label: "Relevante expertise en specialisaties", value: "Google Ads, GA4, GTM, Search Console, AI & campagnebeheer" },
      { label: "Aantal jaren ervaring", value: "15+ jaar" },
      { label: "Verantwoordelijkheid binnen projectteam", value: "SEA" },
      { label: "Beschikbaarheid per week", value: "5–10 uur" },
    ],
  },
  {
    id: "moran",
    name: "Moran Roelfs",
    orgRole: "Accountmanager",
    functie: "Marketing strateeg",
    lead: false,
    staff: true,
    photo: "/team/moran.webp",
    details: [
      {
        label: "Rol",
        value:
          "Als primair aanspreekpunt voor Rietveld draagt Moran de eindverantwoordelijkheid voor de algehele klanttevredenheid. In nauwe samenwerking met Maiko en Sarah zorgt hij voor optimale synergie en communicatie tussen het projectteam en Rietveld.",
      },
    ],
  },
];

const sarah = TEAM[0];
const maiko = TEAM[1];
const specialists = TEAM.slice(2, 5); // kelly, lorenzo, isa
const moran = TEAM[6];
const geert = TEAM[5];

function OrgNode({
  member,
  active,
  onClick,
  width = 130,
  dashed = false,
}: {
  member: (typeof TEAM)[0];
  active: boolean;
  onClick: () => void;
  width?: number;
  dashed?: boolean;
}) {
  const visible = active;
  return (
    <div
      onClick={onClick}
      style={{
        width,
        background: visible ? "white" : "#eceff3",
        border: `2px ${dashed ? "dashed" : "solid"} ${visible ? "#e5e7eb" : "#d1d5db"}`,
        borderRadius: 12,
        padding: "12px 8px 10px",
        textAlign: "center",
        cursor: "pointer",
        transition: "background 0.15s, border-color 0.15s, box-shadow 0.15s, opacity 0.15s",
        boxShadow: visible ? "0 1px 4px rgba(0,0,0,0.06)" : "none",
        opacity: visible ? 1 : 0.82,
        flexShrink: 0,
      }}
    >
      <div style={{ width: 52, height: 52, borderRadius: "50%", overflow: "hidden", margin: "0 auto 8px", border: `2px solid ${visible ? "#e5e7eb" : "#d1d5db"}` }}>
        <Image src={member.photo} alt={member.name} width={52} height={52} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
      </div>
      <div style={{ fontSize: 11.5, fontWeight: 700, color: visible ? DARK : "#9ca3af", lineHeight: 1.3 }}>{member.name}</div>
      <div style={{ fontSize: 10, color: visible ? "#9ca3af" : "#b0b5bc", marginTop: 2 }}>{member.orgRole}</div>
      {member.lead && (
        <div style={{ marginTop: 6, display: "inline-block", fontSize: 9, fontWeight: 700, padding: "2px 7px", borderRadius: 20, background: `${CYAN}20`, color: CYAN, letterSpacing: "0.3px", textTransform: "uppercase" }}>
          Projectleider
        </div>
      )}
    </div>
  );
}

function ProfileCard({ member, onClose }: { member: (typeof TEAM)[0]; onClose: () => void }) {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid #e5e7eb",
        borderRadius: 16,
        padding: "24px",
        width: 440,
        maxWidth: "100%",
        boxSizing: "border-box",
        animation: "fadeIn 0.25s ease",
        position: "relative",
        flexShrink: 0,
      }}
    >
      <button
        onClick={onClose}
        style={{ position: "absolute", top: 14, right: 14, background: "none", border: "none", cursor: "pointer", color: "#9ca3af", fontSize: 18, lineHeight: 1, padding: 4 }}
        aria-label="Sluit"
      >
        ×
      </button>

      {/* Top */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
        <div style={{ width: 72, height: 72, borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: `2px solid ${CYAN}30` }}>
          <Image src={member.photo} alt={member.name} width={72} height={72} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <h3 style={{ fontSize: 17, fontWeight: 700, color: DARK, margin: 0 }}>{member.name}</h3>
            {member.lead && (
              <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${CYAN}15`, color: CYAN, textTransform: "uppercase", letterSpacing: "0.06em" }}>Projectleider</span>
            )}
          </div>
          <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 4 }}>
            <span style={{ display: "block", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.05em", color: "#c4c9d0", marginBottom: 1 }}>Functie binnen Woeler:</span>
            {member.functie}
          </div>
        </div>
      </div>

      <div style={{ height: 1, background: "#f3f4f6", marginBottom: 16 }} />

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {member.details.map((d, i) => (
          <div key={i}>
            <div style={{ fontSize: 10.5, fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 3 }}>{d.label}</div>
            <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.6 }}>{d.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TeamPage() {
  const [open, setOpen] = useState<Set<string>>(() => new Set(TEAM.map((m) => m.id)));

  const toggle = (id: string) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const visibleProfiles = TEAM.filter((m) => open.has(m.id));

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f3f4f6", minHeight: "100vh" }}>

      {/* Hero */}
      <div style={{ background: DARK, color: "white", padding: "52px 32px 48px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -80, top: -80, width: 360, height: 360, borderRadius: "50%", background: `radial-gradient(circle, ${CYAN}15 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1040, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `${CYAN}20`, border: `1px solid ${CYAN}40`, borderRadius: 20, padding: "4px 12px", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: CYAN, marginBottom: 16 }}>
            Projectteam · Rietveld Licht & Wonen
          </div>
          <h1 style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.1, margin: "0 0 12px" }}>Projectteam</h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", maxWidth: 520, margin: 0 }}>
            Dit team is specifiek voor dit project samengesteld. Ieder lid brengt aantoonbare expertise mee in zijn of haar vakgebied en werkt nauw samen onder leiding van Sarah en Maiko.
          </p>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${RED} 0%, ${YELLOW} 33%, ${CYAN} 66%, ${DARK} 100%)` }} />
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "44px 32px 64px" }}>

        {/* Profiles header */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: DARK, margin: "0 0 6px" }}>Teamprofielen</h2>
          <p style={{ fontSize: 13, color: "#9ca3af", margin: 0 }}>Klik op een teamlid in het organogram om een profiel te openen of sluiten.</p>
        </div>

        {/* Organogram */}
        {/*
          Vaste breedte 604px, gecentreerd. Posities (vanaf links):
          Moran 0–118 · Sarah 146–286 (center 216) · Maiko 318–458 (center 388) · Geert 486–604
          Specialisten (3×128 + 2×16 = 416, offset 94): centers op 158 / 302 / 446
        */}
        <div style={{ marginBottom: 32, overflowX: "auto" }}>
          <div style={{ width: 604, margin: "0 auto" }}>

            {/* Row 1: Moran - Sarah - Maiko - Geert, allemaal verbonden */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <OrgNode member={moran} active={open.has("moran")} onClick={() => toggle("moran")} width={118} dashed />
              <div style={{ width: 28, height: 2, background: "#d1d5db", flexShrink: 0 }} />
              <OrgNode member={sarah} active={open.has("sarah")} onClick={() => toggle("sarah")} width={140} />
              <div style={{ width: 32, height: 2, background: "#d1d5db", flexShrink: 0 }} />
              <OrgNode member={maiko} active={open.has("maiko")} onClick={() => toggle("maiko")} width={140} />
              <div style={{ width: 28, height: 2, background: "#d1d5db", flexShrink: 0 }} />
              <OrgNode member={geert} active={open.has("geert")} onClick={() => toggle("geert")} width={118} dashed />
            </div>

            {/* Verbindingen naar specialisten */}
            <div style={{ position: "relative", height: 40 }}>
              {/* verticaal vanaf Sarah */}
              <div style={{ position: "absolute", left: 215, top: 0, width: 2, height: 20, background: "#d1d5db" }} />
              {/* verticaal vanaf Maiko */}
              <div style={{ position: "absolute", left: 387, top: 0, width: 2, height: 20, background: "#d1d5db" }} />
              {/* horizontale balk over de drie specialisten-centers */}
              <div style={{ position: "absolute", left: 157, top: 20, width: 290, height: 2, background: "#d1d5db" }} />
              {/* drie verticale lijnen omlaag naar Kelly / Lorenzo / Isa */}
              <div style={{ position: "absolute", left: 157, top: 20, width: 2, height: 20, background: "#d1d5db" }} />
              <div style={{ position: "absolute", left: 301, top: 20, width: 2, height: 20, background: "#d1d5db" }} />
              <div style={{ position: "absolute", left: 445, top: 20, width: 2, height: 20, background: "#d1d5db" }} />
            </div>

            {/* Row 2: Specialists - alleen naar boven verbonden */}
            <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
              {specialists.map((m) => (
                <OrgNode key={m.id} member={m} active={open.has(m.id)} onClick={() => toggle(m.id)} width={128} />
              ))}
            </div>
          </div>
        </div>

        {/* Profile cards */}
        {visibleProfiles.length > 0 && (
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", marginBottom: 24 }}>
            {visibleProfiles.map((m) => (
              <ProfileCard key={m.id} member={m} onClose={() => toggle(m.id)} />
            ))}
          </div>
        )}

      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
