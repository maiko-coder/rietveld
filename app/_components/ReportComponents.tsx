export const CYAN = "#00adef";
export const YELLOW = "#fecb09";
export const DARK = "#262626";
export const RED = "#ed1c23";

export function ReportContainer({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <div className="report-container" style={style}>{children}</div>;
}

export function Grid4({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <div className="report-grid-4" style={style}>{children}</div>;
}

export function Grid3({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <div className="report-grid-3" style={style}>{children}</div>;
}

export function Grid2({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <div className="report-grid-2" style={style}>{children}</div>;
}

export function StatCard({ label, value, delta, positive }: { label: string; value: string; delta: string; positive: boolean }) {
  return (
    <div style={{ background: "white", borderRadius: 12, padding: "20px 22px", borderTop: `3px solid ${CYAN}`, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
      <div style={{ fontSize: 10.5, color: "#9ca3af", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: 8 }}>{label}</div>
      <div style={{ fontSize: 28, fontWeight: 800, color: DARK, marginBottom: 6, lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 12, fontWeight: 600, color: positive ? "#16a34a" : "#ef4444", display: "flex", alignItems: "center", gap: 4 }}>
        <span>{positive ? "↑" : "↓"}</span>{delta}
      </div>
    </div>
  );
}

export function SimpleStatCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div style={{ background: "white", borderRadius: 12, padding: "20px 22px", borderTop: `3px solid ${CYAN}`, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
      <div style={{ fontSize: 10.5, color: "#9ca3af", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: 8 }}>{label}</div>
      <div style={{ fontSize: 26, fontWeight: 800, color: DARK, marginBottom: 4, lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 11.5, color: "#9ca3af" }}>{sub}</div>
    </div>
  );
}

export function SectionTitle({ children, accent = CYAN }: { children: React.ReactNode; accent?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, marginTop: 44 }}>
      <div style={{ width: 4, height: 22, background: accent, borderRadius: 2, flexShrink: 0 }} />
      <h2 style={{ fontSize: 17, fontWeight: 700, color: DARK, margin: 0 }}>{children}</h2>
    </div>
  );
}

export function Callout({ children, color = CYAN }: { children: React.ReactNode; color?: string }) {
  return (
    <div style={{ background: `${color}0f`, border: `1px solid ${color}30`, borderLeft: `4px solid ${color}`, borderRadius: 10, padding: "16px 20px", marginBottom: 8 }}>
      <p style={{ fontSize: 14, color: color === CYAN ? "#0d6e9a" : "#374151", lineHeight: 1.75, fontWeight: 500, margin: 0 }}>{children}</p>
    </div>
  );
}

export function PriorityCard({ num, title, desc, color }: { num: string; title: string; desc: string; color: string }) {
  return (
    <div style={{ background: "white", borderRadius: 12, padding: "20px 22px", display: "flex", gap: 18, alignItems: "flex-start", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", borderLeft: `4px solid ${color}` }}>
      <div style={{ width: 36, height: 36, borderRadius: 8, background: color, color: "white", fontSize: 14, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{num}</div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 700, color: DARK, marginBottom: 5 }}>{title}</div>
        <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65 }}>{desc}</div>
      </div>
    </div>
  );
}

export function GoalCard({ label, now, goal }: { label: string; now: string; goal: string }) {
  return (
    <div style={{ background: DARK, borderRadius: 12, padding: "22px", textAlign: "center" as const, boxShadow: "0 1px 4px rgba(0,0,0,0.1)" }}>
      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: 10, fontWeight: 600 }}>{label}</div>
      <div style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", marginBottom: 8 }}>Nu: {now}</div>
      <div style={{ fontSize: 26, fontWeight: 800, color: YELLOW }}>{goal}</div>
    </div>
  );
}

export function DarkTable({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="report-table-wrap" style={{ background: "white", borderRadius: 12, boxShadow: "0 1px 4px rgba(0,0,0,0.06)", marginBottom: 8 }}>
      <table style={{ width: "100%", borderCollapse: "collapse" as const, fontSize: 13 }}>
        <thead>
          <tr style={{ background: DARK }}>
            {headers.map((h) => (
              <th key={h} style={{ padding: "11px 16px", textAlign: "left" as const, fontWeight: 600, color: "rgba(255,255,255,0.7)", fontSize: 11.5, letterSpacing: "0.05em", textTransform: "uppercase" as const }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #f3f4f6" }}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: "12px 16px", color: j === 0 ? DARK : "#374151", fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PageHero({ channel, title, subtitle, stats }: {
  channel: string;
  title: string;
  subtitle: string;
  stats: { label: string; value: string; accent: "cyan" | "yellow" | "white" }[];
}) {
  const accentColor = { cyan: CYAN, yellow: YELLOW, white: "rgba(255,255,255,0.4)" };
  return (
    <div className="page-hero">
      <div style={{ position: "absolute", right: -80, top: -80, width: 360, height: 360, borderRadius: "50%", background: `radial-gradient(circle, ${CYAN}18 0%, transparent 70%)`, pointerEvents: "none" }} />
      <div className="page-hero-inner">
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `${CYAN}20`, border: `1px solid ${CYAN}40`, borderRadius: 20, padding: "4px 12px", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: CYAN, marginBottom: 16 }}>
          {channel} · Rietveld Licht &amp; Wonen
        </div>
        <h1 style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.1, marginBottom: 10 }}>{title}</h1>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", marginBottom: 36 }}>{subtitle}</p>
        <div className="page-hero-stats">
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.35)", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: 5 }}>{s.label}</div>
              <div style={{ fontSize: 30, fontWeight: 800, color: accentColor[s.accent] }}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${RED} 0%, ${YELLOW} 33%, ${CYAN} 66%, ${DARK} 100%)` }} />
    </div>
  );
}
