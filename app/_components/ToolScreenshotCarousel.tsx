"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

export type ToolSlide = {
  src: string;
  title: string;
  desc: string;
};

export default function ToolScreenshotCarousel({ slides }: { slides: ToolSlide[] }) {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [zoom, setZoom] = useState(1);
  const touchStart = useRef<number | null>(null);
  const touchDelta = useRef(0);

  const total = slides.length;
  const slide = slides[index];

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
    <>
      <div className="adoptimizer-carousel">
        <div className="adoptimizer-carousel-header">
          <div>
            <h2 style={{ fontSize: 17, fontWeight: 700, color: "#262626", margin: "0 0 4px" }}>{slide.title}</h2>
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
          {slides.map((s, i) => (
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
    </>
  );
}
