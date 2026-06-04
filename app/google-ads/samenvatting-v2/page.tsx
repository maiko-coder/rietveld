import Link from "next/link";

const CYAN = "#00adef";
const YELLOW = "#fecb09";
const DARK = "#262626";
const RED = "#ed1c23";

function StatCard({
  label, value, delta, positive,
}: { label: string; value: string; delta: string; positive: boolean }) {
  return (
    <div style={{
      background: "white",
      borderRadius: 12,
      padding: "20px 22px",
      borderTop: `3px solid ${CYAN}`,
      boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
    }}>
      <div style={{ fontSize: 10.5, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>{label}</div>
      <div style={{ fontSize: 28, fontWeight: 800, color: DARK, marginBottom: 6, lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 12, fontWeight: 600, color: positive ? "#16a34a" : "#ef4444", display: "flex", alignItems: "center", gap: 4 }}>
        <span>{positive ? "↑" : "↓"}</span>
        {delta}
      </div>
    </div>
  );
}

function SectionTitle({ children, accent = CYAN }: { children: React.ReactNode; accent?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, marginTop: 44 }}>
      <div style={{ width: 4, height: 22, background: accent, borderRadius: 2, flexShrink: 0 }} />
      <h2 style={{ fontSize: 17, fontWeight: 700, color: DARK, margin: 0 }}>{children}</h2>
    </div>
  );
}

function PriorityCard({
  num, title, desc, color,
}: { num: string; title: string; desc: string; color: string }) {
  return (
    <div style={{
      background: "white",
      borderRadius: 12,
      padding: "20px 22px",
      display: "flex",
      gap: 18,
      alignItems: "flex-start",
      boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
      borderLeft: `4px solid ${color}`,
    }}>
      <div style={{
        width: 36, height: 36, borderRadius: 8,
        background: color, color: "white",
        fontSize: 14, fontWeight: 800,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>
        {num}
      </div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 700, color: DARK, marginBottom: 5 }}>{title}</div>
        <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65 }}>{desc}</div>
      </div>
    </div>
  );
}

function GoalCard({ label, now, goal }: { label: string; now: string; goal: string }) {
  return (
    <div style={{
      background: DARK,
      borderRadius: 12,
      padding: "22px",
      textAlign: "center",
      boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
    }}>
      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10, fontWeight: 600 }}>{label}</div>
      <div style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", marginBottom: 8 }}>Nu: {now}</div>
      <div style={{ fontSize: 26, fontWeight: 800, color: YELLOW }}>{goal}</div>
    </div>
  );
}

export default function GoogleAdsSamenvattingV2() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f4f5f7", minHeight: "100vh" }}>

      {/* Sub-nav — tabbladen */}
      <div style={{ background: "white", borderBottom: "1px solid #e5e7eb", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 28px", display: "flex", alignItems: "center", height: 50 }}>
          <Link href="/" style={{ fontSize: 12.5, color: "#9ca3af", marginRight: 8 }}>← Overzicht</Link>
          <span style={{ color: "#d1d5db", marginRight: 8 }}>›</span>
          <span style={{ fontSize: 12.5, color: CYAN, fontWeight: 600 }}>Google Ads</span>
          <div style={{ flex: 1 }} />
          {[
            { label: "Samenvatting", href: "/google-ads/samenvatting-v2", active: true },
            { label: "Compleet", href: "/google-ads/compleet", active: false },
            { label: "Doelstellingen", href: "/google-ads/doelstellingen", active: false },
          ].map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              style={{
                padding: "6px 16px",
                fontSize: 13,
                fontWeight: tab.active ? 700 : 400,
                color: tab.active ? CYAN : "#6b7280",
                background: tab.active ? `${CYAN}12` : "transparent",
                borderRadius: 6,
                borderBottom: tab.active ? `2px solid ${CYAN}` : "2px solid transparent",
              }}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Hero */}
      <div style={{
        background: DARK,
        color: "white",
        padding: "52px 32px 44px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background accent circle */}
        <div style={{
          position: "absolute", right: -80, top: -80,
          width: 360, height: 360, borderRadius: "50%",
          background: `radial-gradient(circle, ${CYAN}18 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1040, margin: "0 auto", position: "relative" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: `${CYAN}20`, border: `1px solid ${CYAN}40`,
            borderRadius: 20, padding: "4px 12px",
            fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
            textTransform: "uppercase", color: CYAN, marginBottom: 16,
          }}>
            Google Ads · Rietveld Licht &amp; Wonen
          </div>
          <h1 style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.1, marginBottom: 10 }}>
            Samenvatting
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", marginBottom: 36 }}>
            Overzicht van accountprestaties en prioriteiten
          </p>

          <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
            {[
              { label: "Account ROAS", value: "5,87", accent: CYAN },
              { label: "Spend huidig jaar", value: "€2,1M", accent: YELLOW },
              { label: "Omzet", value: "€12,5M", accent: CYAN },
              { label: "CPA", value: "€31,85", accent: "rgba(255,255,255,0.4)" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 5 }}>{s.label}</div>
                <div style={{ fontSize: 30, fontWeight: 800, color: s.accent }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Rietveld colour stripe */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${RED} 0%, ${YELLOW} 33%, ${CYAN} 66%, ${DARK} 100%)` }} />
      </div>

      {/* Body */}
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "8px 28px 60px" }}>

        {/* KPI cards */}
        <SectionTitle>Accountprestaties op een rij</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 24 }}>
          <StatCard label="Spend (huidig jaar)" value="€2,1M" delta="+67% t.o.v. vorig jaar" positive={true} />
          <StatCard label="Omzet" value="€12,5M" delta="+52% t.o.v. vorig jaar" positive={true} />
          <StatCard label="Account ROAS" value="5,87" delta="Was 6,43 vorig jaar" positive={false} />
          <StatCard label="CPA" value="€31,85" delta="Was €26 vorig jaar" positive={false} />
        </div>

        {/* Conclusie callout */}
        <div style={{
          background: `${CYAN}0f`,
          border: `1px solid ${CYAN}30`,
          borderLeft: `4px solid ${CYAN}`,
          borderRadius: 10,
          padding: "16px 20px",
          marginBottom: 8,
        }}>
          <p style={{ fontSize: 14, color: "#0d6e9a", lineHeight: 1.75, fontWeight: 500, margin: 0 }}>
            Het account is het afgelopen jaar fors gegroeid. De ROAS-daling van 6,43 naar 5,87 is een normaal patroon bij opschalen. Er is concrete ruimte om de structuur scherper te maken en de efficiëntie te verhogen.
          </p>
        </div>

        {/* Campagne tabel */}
        <SectionTitle>Campagnes — huidige prestaties</SectionTitle>
        <div style={{ background: "white", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", marginBottom: 8 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ background: DARK }}>
                {["Campagne", "ROAS Nu", "Doel", "Prioriteit"].map((h) => (
                  <th key={h} style={{ padding: "11px 16px", textAlign: "left", fontWeight: 600, color: "rgba(255,255,255,0.7)", fontSize: 11.5, letterSpacing: "0.05em", textTransform: "uppercase" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Wolves / Sheep", now: "~5,2", goal: "5,5+", prio: "Medium", bg: "#fef9e7", tc: "#b45309", border: YELLOW },
                { name: "Bestsellers", now: "3,88", goal: "4,5–5,0", prio: "Hoog", bg: "#fef2f2", tc: "#dc2626", border: RED },
                { name: "Sale", now: "3,44", goal: "4,0+", prio: "Hoog", bg: "#fef2f2", tc: "#dc2626", border: RED },
                { name: "Premium €400+ (nieuw)", now: "12–13×", goal: "8,0+ (op €75–100k)", prio: "Kans", bg: "#f0fdf4", tc: "#16a34a", border: "#16a34a" },
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #f3f4f6" }}>
                  <td style={{ padding: "12px 16px", color: DARK, fontWeight: 600 }}>{row.name}</td>
                  <td style={{ padding: "12px 16px", color: "#374151", fontWeight: 700, fontFamily: "monospace", fontSize: 14 }}>{row.now}</td>
                  <td style={{ padding: "12px 16px", color: CYAN, fontWeight: 700, fontFamily: "monospace", fontSize: 14 }}>{row.goal}</td>
                  <td style={{ padding: "12px 16px" }}>
                    <span style={{ background: row.bg, color: row.tc, fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20, border: `1px solid ${row.border}30` }}>
                      {row.prio}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Top 3 prioriteiten */}
        <SectionTitle accent={YELLOW}>Top 3 prioriteiten</SectionTitle>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 8 }}>
          <PriorityCard
            num="01"
            color={RED}
            title="tROAS instellen op Bestsellers & Sale"
            desc="€420k spend op campagnes zonder doelstelling — tROAS instellen verwacht ROAS van ~3,6 naar 4,0–4,5 te brengen"
          />
          <PriorityCard
            num="02"
            color="#16a34a"
            title="Premium €400+ campagne opschalen"
            desc="Segment haalt 12–13× ROAS op €12k spend. Opschalen naar €75–100k levert +€350–500k extra omzet op"
          />
          <PriorityCard
            num="03"
            color={CYAN}
            title="PMax splitsen op producttype"
            desc="Spots, inbouwlampen en tafellampen concurreren nu met hanglampen — splitsing geeft elk type eigen budget en doel"
          />
        </div>

        {/* Doel over 6 maanden */}
        <SectionTitle accent={YELLOW}>Doel over 6 maanden</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 40 }}>
          <GoalCard label="Account ROAS" now="5,87" goal="6,3 – 6,5" />
          <GoalCard label="CPA" now="€31,85" goal="€27 – 29" />
          <GoalCard label="Omzetgroei" now="basis" goal="+8 – 12%" />
        </div>

        {/* Version notice */}
        <div style={{
          background: `${YELLOW}18`, border: `1px solid ${YELLOW}50`,
          borderRadius: 8, padding: "10px 16px",
          fontSize: 12, color: "#92620a",
          display: "flex", alignItems: "center", gap: 8,
        }}>
          <span>⚡</span>
          Dit is de <strong>nieuwe Rietveld-stijl</strong> versie. De huidige versie staat op{" "}
          <Link href="/google-ads/samenvatting" style={{ color: "#00adef", fontWeight: 600 }}>/google-ads/samenvatting</Link>.
        </div>
      </div>
    </div>
  );
}
