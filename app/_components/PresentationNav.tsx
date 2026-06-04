"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface PresentationNavProps {
  channel: string;
  color: string;
  basePath: string;
}

export default function PresentationNav({ channel, color, basePath }: PresentationNavProps) {
  const path = usePathname();

  const tabs = [
    { label: "Compleet", href: `${basePath}/compleet` },
    { label: "Samenvatting", href: `${basePath}/samenvatting` },
    { label: "Doelstellingen", href: `${basePath}/doelstellingen` },
  ];

  return (
    <nav style={{
      background: "white",
      borderBottom: "1px solid #e5e7eb",
      boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <div style={{
        maxWidth: 1040,
        margin: "0 auto",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        height: 52,
        gap: 6,
      }}>
        <Link href="/" style={{ color: "#9ca3af", fontSize: 13, display: "flex", alignItems: "center", gap: 4, padding: "4px 8px", borderRadius: 6 }}>
          ← Overzicht
        </Link>
        <span style={{ color: "#d1d5db", fontSize: 13 }}>›</span>
        <span style={{ color, fontSize: 13, fontWeight: 600 }}>{channel}</span>
        <div style={{ flex: 1 }} />
        <div style={{ display: "flex", gap: 2 }}>
          {tabs.map((tab) => {
            const isActive = path === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                style={{
                  padding: "6px 16px",
                  fontSize: 13,
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? color : "#6b7280",
                  background: isActive ? `${color}14` : "transparent",
                  borderRadius: 6,
                  borderBottom: isActive ? `2px solid ${color}` : "2px solid transparent",
                }}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
