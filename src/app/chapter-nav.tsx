"use client";

import { useEffect, useState, type MouseEvent } from "react";

type Entry = { id: string; label: string };

export function ChapterNav({ entries, showIndex = true }: { entries: Entry[]; showIndex?: boolean }) {
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const sections = entries.map(({ id }) => document.getElementById(id));
    let frame = 0;
    const update = () => {
      frame = 0;
      let current = -1;
      sections.forEach((section, index) => {
        if (section && section.getBoundingClientRect().top <= window.innerHeight * 0.36) current = index;
      });
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [entries]);
  const progress = (active + 1) / entries.length;

  function revealIndex(event: MouseEvent<HTMLAnchorElement>) {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const index = document.getElementById("cau-chuyen");
    if (index instanceof HTMLDetailsElement) index.open = true;
  }

  return (
    <nav className="chapter-nav" aria-label="Điều hướng câu chuyện">
      <div className="wrap chapter-nav-inner">
        {showIndex && <a href="#cau-chuyen" onClick={revealIndex}>Mục lục</a>}
        <div className="chapter-links">
          {entries.map(({ id, label }, index) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === index ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </div>
        <a className="chapter-write" href="#loi-ke">Bưu thiếp</a>
      </div>
      <div className="chapter-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
    </nav>
  );
}
