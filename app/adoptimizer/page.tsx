"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

const CYAN = "#00adef";
const YELLOW = "#fecb09";
const DARK = "#262626";
const RED = "#ed1c23";

const SLIDES = [
  {
    src: "/adoptimizer/01-account-overview.png",
    title: "Account overview",
    desc: "Persoonlijk dashboard met openstaande werkzaamheden per account.",
  },
  {
    src: "/adoptimizer/02-health-check.png",
    title: "Account health check",
    desc: "Automatische signalering van budget- en campagne-aandachtspunten.",
  },
  {
    src: "/adoptimizer/03-budget-check.png",
    title: "Account budget check",
    desc: "Metrics en budgetvoorspellingen per account en periode.",
  },
  {
    src: "/adoptimizer/04-ai-strategie.png",
    title: "AI Strategie",
    desc: "Biedstrategie per campagne, doel vs. werkelijk en AI-suggesties.",
  },
  {
    src: "/adoptimizer/08-zoekterm-analyse.png",
    title: "AI Zoekterm Analyse",
    desc: "AI-detectie van irrelevante zoektermen met potentiële besparing per campagne.",
  },
  {
    src: "/adoptimizer/05-shopping.png",
    title: "Shopping & campagnes",
    desc: "Campagne-overzicht met productstatistieken en AI-analyse per segment.",
  },
  {
    src: "/adoptimizer/06-feed-optimizer.png",
    title: "Feed Optimizer",
    desc: "Producttitels optimaliseren met AI en exporteren naar Google Shopping.",
  },
  {
    src: "/adoptimizer/07-product-overlap.png",
    title: "Product Overlap",
    desc: "Producten die in meerdere campagnes actief zijn, met kosten- en ROAS-verdeling.",
  },
];

const FEATURES = [
  "Account health check en budget monitoring",
  "AI zoekterm-analyse en strategie-adviezen",
  "Shopping feed optimalisatie en product overlap",
  "Campagne-overzichten met AI-automatiseringen",
];

export default function AdOptimizerPage() {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [zoom, setZoom] = useState(1);
  const touchStart = useRef<number | null>(null);
  const touchDelta = useRef(0);

  const total = SLIDES.length;
  const slide = SLIDES[index];

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + total) % total);
    },
    [total],
  );

  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, prev, next]);

  useEffect(() => {
    setZoom(1);
  }, [index, lightbox]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
    touchDelta.current = 0;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    touchDelta.current = e.touches[0].clientX - touchStart.current;
  };

  const onTouchEnd = () => {
    if (touchStart.current === null) return;
    if (touchDelta.current > 50) prev();
    else if (touchDelta.current < -50) next();
    touchStart.current = null;
    touchDelta.current = 0;
  };

  const openLightbox = () => {
    setZoom(1);
    setLightbox(true);
  };

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f3f4f6", minHeight: "100vh" }}>
      <div className="page-hero">
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -80,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${CYAN}15 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        <div className="page-hero-inner">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: `${CYAN}20`,
              border: `1px solid ${CYAN}40`,
              borderRadius: 20,
              padding: "4px 12px",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: CYAN,
              marginBottom: 16,
            }}
          >
            AI Tool · Woeler
          </div>
          <h1 style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.1, margin: "0 0 12px" }}>AdOptimizer</h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", maxWidth: 560, margin: 0 }}>
            Eigen AI-platform voor Google Ads: van account health tot zoekterm-analyse, feed optimalisatie en shopping inzichten.
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: `linear-gradient(90deg, ${RED} 0%, ${YELLOW} 33%, ${CYAN} 66%, ${DARK} 100%)`,
          }}
        />
      </div>

      <div className="report-container report-container--960">
        <div
          style={{
            background: `${CYAN}0f`,
            border: `1px solid ${CYAN}30`,
            borderLeft: `4px solid ${CYAN}`,
            borderRadius: 10,
            padding: "16px 20px",
            marginBottom: 28,
          }}
        >
          <p style={{ fontSize: 14, color: "#0d6e9a", lineHeight: 1.75, fontWeight: 600, margin: 0 }}>
            We laten AdOptimizer live zien tijdens onze presentatie. Onderstaande screenshots geven een indruk van de belangrijkste onderdelen.
          </p>
        </div>

        <div className="report-grid-2" style={{ marginBottom: 32, gap: 12 }}>
          {FEATURES.map((f) => (
            <div
              key={f}
              style={{
                background: "white",
                borderRadius: 10,
                padding: "14px 18px",
                fontSize: 13,
                color: "#374151",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: CYAN, flexShrink: 0 }} />
              {f}
            </div>
          ))}
        </div>

        <div className="adoptimizer-carousel">
          <div className="adoptimizer-carousel-header">
            <div>
              <h2 style={{ fontSize: 17, fontWeight: 700, color: DARK, margin: "0 0 4px" }}>{slide.title}</h2>
              <p style={{ fontSize: 13, color: "#9ca3af", margin: 0 }}>{slide.desc}</p>
            </div>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#9ca3af", whiteSpace: "nowrap" }}>
              {index + 1} / {total}
            </span>
          </div>

          <div
            className="adoptimizer-carousel-frame"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <button type="button" className="adoptimizer-carousel-btn adoptimizer-carousel-btn--prev" onClick={prev} aria-label="Vorige">
              ‹
            </button>

            <button type="button" className="adoptimizer-carousel-slide" onClick={openLightbox} aria-label="Vergroot afbeelding">
              <Image
                src={slide.src}
                alt={slide.title}
                width={1400}
                height={900}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority={index === 0}
              />
              <span className="adoptimizer-carousel-zoom-hint">Tik om te vergroten</span>
            </button>

            <button type="button" className="adoptimizer-carousel-btn adoptimizer-carousel-btn--next" onClick={next} aria-label="Volgende">
              ›
            </button>
          </div>

          <div className="adoptimizer-carousel-dots">
            {SLIDES.map((s, i) => (
              <button
                key={s.src}
                type="button"
                className={`adoptimizer-carousel-dot${i === index ? " adoptimizer-carousel-dot--active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={s.title}
              />
            ))}
          </div>
        </div>
      </div>

      {lightbox && (
        <div className="adoptimizer-lightbox" role="dialog" aria-modal="true" aria-label={slide.title}>
          <div className="adoptimizer-lightbox-toolbar">
            <span style={{ fontSize: 14, fontWeight: 600, color: "white" }}>{slide.title}</span>
            <div className="adoptimizer-lightbox-controls">
              <button type="button" onClick={() => setZoom((z) => Math.max(1, z - 0.25))} aria-label="Uitzoomen">
                −
              </button>
              <span>{Math.round(zoom * 100)}%</span>
              <button type="button" onClick={() => setZoom((z) => Math.min(3, z + 0.25))} aria-label="Inzoomen">
                +
              </button>
              <button type="button" className="adoptimizer-lightbox-close" onClick={() => setLightbox(false)} aria-label="Sluiten">
                ×
              </button>
            </div>
          </div>

          <div className="adoptimizer-lightbox-scroll">
            <Image
              src={slide.src}
              alt={slide.title}
              width={1400}
              height={900}
              style={{ width: "auto", height: "auto", maxWidth: "none", transform: `scale(${zoom})`, transformOrigin: "top center" }}
            />
          </div>

          <div className="adoptimizer-lightbox-nav">
            <button type="button" onClick={prev} aria-label="Vorige">
              ‹ Vorige
            </button>
            <button type="button" onClick={next} aria-label="Volgende">
              Volgende ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
