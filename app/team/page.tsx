"use client";
import { useState } from "react";

const CYAN = "#00adef";
const YELLOW = "#fecb09";
const DARK = "#262626";
const RED = "#ed1c23";

const TEAM = [
  {
    id: "sarah",
    name: "Sarah Voogd",
    role: "Meta · Projectleider",
    functie: "Teamlead / Senior allround marketeer",
    initials: "SV",
    color: CYAN,
    lead: true,
    details: [
      { label: "Relevante expertise", value: "Meta, GA4/Looker Studio, Strategie" },
      { label: "Ervaring", value: "4 jaar" },
      { label: "Verantwoordelijkheid", value: "Meta, Rapportage" },
      { label: "Beschikbaarheid", value: "5–10 uur per week" },
      { label: "Aanwezig op kantoor", value: "Maandelijks aanwezig" },
    ],
  },
  {
    id: "maiko",
    name: "Maiko Groot",
    role: "SEA · Projectleider",
    functie: "Senior allround marketeer",
    initials: "MG",
    color: CYAN,
    lead: true,
    details: [
      { label: "Relevante expertise", value: "SEA, SEO/GEO, AI, GA4/Looker Studio, Strategie, CRO" },
      { label: "Ervaring", value: "10+ jaar" },
      { label: "Verantwoordelijkheid", value: "SEA, Rapportage" },
      { label: "Beschikbaarheid", value: "15–20 uur per week" },
      { label: "Aanwezig op kantoor", value: "Maandelijks aanwezig" },
    ],
  },
  {
    id: "kelly",
    name: "Kelly Aalberse",
    role: "Marketing automation",
    functie: "Teamlead / Senior allround marketeer",
    initials: "KA",
    color: "#8b5cf6",
    lead: false,
    details: [
      { label: "Relevante expertise", value: "Marketing automation, SEO/GEO, Meta" },
      { label: "Ervaring", value: "10+ jaar" },
      { label: "Verantwoordelijkheid", value: "Marketing automation" },
      { label: "Beschikbaarheid", value: "5 uur per week" },
      { label: "Aanwezig op kantoor", value: "Halfjaarlijks voor uitgebreide evaluatie" },
    ],
  },
  {
    id: "lorenzo",
    name: "Lorenzo Fioraliso",
    role: "SEO / GEO",
    functie: "Senior allround marketeer",
    initials: "LF",
    color: "#10b981",
    lead: false,
    details: [
      { label: "Relevante expertise", value: "SEO/GEO, SEA, Marketing automation, Meta" },
      { label: "Ervaring", value: "8 jaar" },
      { label: "Verantwoordelijkheid", value: "SEO/GEO" },
      { label: "Beschikbaarheid", value: "15 uur per maand" },
      { label: "Aanwezig op kantoor", value: "Halfjaarlijks voor uitgebreide evaluatie" },
    ],
  },
  {
    id: "isa",
    name: "Isa van Leijden",
    role: "Pinterest",
    functie: "Senior social specialist",
    initials: "IL",
    color: "#e60023",
    lead: false,
    details: [
      { label: "Relevante expertise", value: "Pinterest ads, Meta ads" },
      { label: "Ervaring", value: "4 jaar" },
      { label: "Verantwoordelijkheid", value: "Pinterest" },
      { label: "Beschikbaarheid", value: "10–15 uur per maand" },
      { label: "Aanwezig op kantoor", value: "Halfjaarlijks voor uitgebreide evaluatie" },
    ],
  },
  {
    id: "geert",
    name: "Geert Groot",
    role: "SEA klankbord",
    functie: "Externe SEA specialist",
    initials: "GG",
    color: YELLOW,
    lead: false,
    staff: true,
    details: [
      { label: "Relevante expertise", value: "Google Ads, GA4, GTM, Search Console, AI & campagnebeheer" },
      { label: "Ervaring", value: "15+ jaar" },
      { label: "Verantwoordelijkheid", value: "Klankbord SEA" },
      { label: "Beschikbaarheid", value: "5–10 uur per week" },
      { label: "Aanwezig op kantoor", value: "Op verzoek beschikbaar" },
    ],
  },
  {
    id: "moran",
    name: "Moran Roelfs",
    role: "Accountmanager",
    functie: "Marketing strateeg",
    initials: "MR",
    color: "#f97316",
    lead: false,
    staff: true,
    details: [
      {
        label: "Rol",
        value:
          "Als primair aanspreekpunt voor Rietveld draagt Moran de eindverantwoordelijkheid voor de algehele klanttevredenheid. In nauwe samenwerking met Maiko en Sarah zorgt hij voor optimale synergie en communicatie tussen het projectteam en Rietveld.",
      },
    ],
  },
];

function Avatar({ initials, color, size = 52 }: { initials: string; color: string; size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `${color}20`,
        border: `2px solid ${color}50`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size * 0.32,
        fontWeight: 700,
        color,
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
  );
}

export default function TeamPage() {
  const [active, setActive] = useState<string | null>("sarah");

  const activeProfile = TEAM.find((m) => m.id === active);

  const leads = TEAM.filter((m) => m.lead);
  const specialists = TEAM.filter((m) => !m.lead && !m.staff);
  const staff = TEAM.filter((m) => m.staff);

  const OrgNode = ({ member, size = "md" }: { member: (typeof TEAM)[0]; size?: "sm" | "md" }) => {
    const isActive = active === member.id;
    const w = size === "sm" ? 110 : 130;
    return (
      <div
        onClick={() => setActive(isActive ? null : member.id)}
        style={{
          width: w,
          background: isActive ? DARK : "white",
          border: `2px solid ${isActive ? member.color : "#e5e7eb"}`,
          borderRadius: 12,
          padding: "12px 10px 10px",
          textAlign: "center",
          cursor: "pointer",
          transition: "all 0.15s",
          boxShadow: isActive ? `0 4px 18px ${member.color}30` : "0 1px 4px rgba(0,0,0,0.06)",
          borderStyle: member.staff ? "dashed" : "solid",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
          <Avatar initials={member.initials} color={member.color} size={44} />
        </div>
        <div style={{ fontSize: 11.5, fontWeight: 700, color: isActive ? "white" : DARK, lineHeight: 1.3 }}>{member.name}</div>
        <div style={{ fontSize: 10, color: isActive ? "rgba(255,255,255,0.55)" : "#9ca3af", marginTop: 3 }}>{member.role}</div>
        {member.lead && (
          <div style={{ marginTop: 6, display: "inline-block", fontSize: 9, fontWeight: 700, padding: "2px 7px", borderRadius: 20, background: `${CYAN}20`, color: CYAN, letterSpacing: "0.3px", textTransform: "uppercase" }}>
            Projectleider
          </div>
        )}
        {member.staff && (
          <div style={{ marginTop: 6, display: "inline-block", fontSize: 9, fontWeight: 700, padding: "2px 7px", borderRadius: 20, background: `${YELLOW}20`, color: "#92710a", letterSpacing: "0.3px", textTransform: "uppercase", border: `1px dashed ${YELLOW}80` }}>
            Klankbord
          </div>
        )}
      </div>
    );
  };

  const Connector = ({ horizontal }: { horizontal?: boolean }) =>
    horizontal ? (
      <div style={{ width: 32, height: 2, background: "#d1d5db", flexShrink: 0 }} />
    ) : (
      <div style={{ width: 2, height: 24, background: "#d1d5db", margin: "0 auto" }} />
    );

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

      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "44px 32px 64px" }}>

        {/* Organogram */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
          <div style={{ width: 4, height: 22, background: CYAN, borderRadius: 2 }} />
          <h2 style={{ fontSize: 18, fontWeight: 700, color: DARK, margin: 0 }}>Organogram</h2>
          <span style={{ fontSize: 12, color: "#9ca3af", marginLeft: 4 }}>Klik op een teamlid voor het profiel</span>
        </div>

        <div style={{ background: "white", borderRadius: 16, padding: "36px 32px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", marginBottom: 40 }}>

          {/* Row 1: Staff + Leads */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 0, marginBottom: 0 }}>
            {/* Moran left */}
            <OrgNode member={staff[1]} size="sm" />
            <Connector horizontal />
            {/* Sarah */}
            <OrgNode member={leads[0]} />
            {/* Spacer between leads */}
            <div style={{ width: 32 }} />
            {/* Maiko */}
            <OrgNode member={leads[1]} />
            <Connector horizontal />
            {/* Geert right */}
            <OrgNode member={staff[0]} size="sm" />
          </div>

          {/* Vertical lines from leads down */}
          <div style={{ display: "flex", justifyContent: "center", gap: 0 }}>
            <div style={{ width: 110 + 32, flexShrink: 0 }} />
            <div style={{ width: 130, display: "flex", justifyContent: "center" }}>
              <div style={{ width: 2, height: 20, background: "#d1d5db" }} />
            </div>
            <div style={{ width: 32, flexShrink: 0 }} />
            <div style={{ width: 130, display: "flex", justifyContent: "center" }}>
              <div style={{ width: 2, height: 20, background: "#d1d5db" }} />
            </div>
            <div style={{ width: 110 + 32, flexShrink: 0 }} />
          </div>

          {/* Horizontal connector across specialists */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 0 }}>
            <div style={{ width: 110 + 32 + 65 + 16, flexShrink: 0 }} />
            <div style={{ height: 2, background: "#d1d5db", width: 130 + 32 + 130 - 32 }} />
          </div>

          {/* Vertical drops to specialists */}
          <div style={{ display: "flex", justifyContent: "center", gap: 0, marginBottom: 0 }}>
            <div style={{ width: 110 + 32 + 65 + 16, flexShrink: 0 }} />
            {specialists.map((_, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 140 + (i < specialists.length - 1 ? 18 : 0), flexShrink: 0 }}>
                <div style={{ width: 2, height: 18, background: "#d1d5db" }} />
              </div>
            ))}
          </div>

          {/* Row 2: Specialists */}
          <div style={{ display: "flex", justifyContent: "center", gap: 18 }}>
            <div style={{ width: 110 + 32 + 65 + 16, flexShrink: 0 }} />
            {specialists.map((m) => (
              <OrgNode key={m.id} member={m} size="sm" />
            ))}
          </div>
        </div>

        {/* Profile detail */}
        {activeProfile && (
          <div style={{ background: "white", borderRadius: 16, padding: "32px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", marginBottom: 40, borderTop: `3px solid ${activeProfile.color}`, animation: "fadeIn 0.2s ease" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 24 }}>
              <Avatar initials={activeProfile.initials} color={activeProfile.color} size={72} />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: DARK, margin: 0 }}>{activeProfile.name}</h3>
                  {activeProfile.lead && (
                    <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${CYAN}15`, color: CYAN, textTransform: "uppercase", letterSpacing: "0.08em" }}>Projectleider</span>
                  )}
                  {activeProfile.staff && (
                    <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${YELLOW}15`, color: "#92710a", textTransform: "uppercase", letterSpacing: "0.08em", border: `1px dashed ${YELLOW}80` }}>Klankbord</span>
                  )}
                </div>
                <div style={{ fontSize: 13, color: activeProfile.color, fontWeight: 600, marginTop: 4 }}>{activeProfile.role}</div>
                <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 2 }}>Functie bij Woeler: {activeProfile.functie}</div>
              </div>
            </div>
            <div style={{ height: 1, background: "#f3f4f6", marginBottom: 20 }} />
            <div style={{ display: "grid", gridTemplateColumns: activeProfile.details.length === 1 ? "1fr" : "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
              {activeProfile.details.map((d, i) => (
                <div key={i}>
                  <div style={{ fontSize: 10.5, fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 5 }}>{d.label}</div>
                  <div style={{ fontSize: 13.5, color: "#374151", lineHeight: 1.6 }}>{d.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Team grid */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
          <div style={{ width: 4, height: 22, background: YELLOW, borderRadius: 2 }} />
          <h2 style={{ fontSize: 18, fontWeight: 700, color: DARK, margin: 0 }}>Teamprofielen</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 16 }}>
          {TEAM.map((member) => {
            const isActive = active === member.id;
            return (
              <div
                key={member.id}
                onClick={() => setActive(isActive ? null : member.id)}
                style={{
                  background: "white",
                  borderRadius: 14,
                  padding: "20px 22px",
                  boxShadow: isActive ? `0 4px 16px ${member.color}25` : "0 1px 4px rgba(0,0,0,0.06)",
                  border: `2px solid ${isActive ? member.color : "transparent"}`,
                  cursor: "pointer",
                  transition: "all 0.15s",
                  borderTop: isActive ? `2px solid ${member.color}` : `3px solid ${member.color}`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                  <Avatar initials={member.initials} color={member.color} size={48} />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: DARK }}>{member.name}</div>
                    <div style={{ fontSize: 12, color: member.color, fontWeight: 600, marginTop: 2 }}>{member.role}</div>
                    <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 1 }}>{member.functie}</div>
                  </div>
                </div>
                <div style={{ height: 1, background: "#f3f4f6", marginBottom: 12 }} />
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {member.details.slice(0, 2).map((d, i) => (
                    <div key={i} style={{ background: "#f9fafb", borderRadius: 6, padding: "5px 10px" }}>
                      <div style={{ fontSize: 9.5, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em" }}>{d.label}</div>
                      <div style={{ fontSize: 11.5, color: "#374151", fontWeight: 500, marginTop: 1 }}>{d.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
