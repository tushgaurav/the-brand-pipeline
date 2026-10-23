"use client";

import { useEffect, useRef } from "react";

export function GooglyEyes() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const eyes = Array.from(root.querySelectorAll<HTMLElement>("[data-eye]"));
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        for (const eye of eyes) {
          const box = eye.getBoundingClientRect();
          const dx = e.clientX - (box.left + box.width / 2);
          const dy = e.clientY - (box.top + box.height / 2);
          const reach = Math.min(1, Math.hypot(dx, dy) / 160) * box.width * 0.24;
          const angle = Math.atan2(dy, dx);
          const pupil = eye.firstElementChild as HTMLElement;
          pupil.style.transform = `translate(${Math.cos(angle) * reach}px, ${Math.sin(angle) * reach}px)`;
        }
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <span ref={ref} aria-hidden="true" className="mx-[0.03em] inline-flex gap-[0.05em] align-[-0.04em]">
      {[0, 1].map((i) => (
        <span
          key={i}
          data-eye
          className="inline-grid size-[0.72em] place-items-center rounded-full border-[0.075em] border-current bg-white"
        >
          <span className="eye-pupil block size-[0.3em] rounded-full bg-ink transition-transform duration-150 ease-out" />
        </span>
      ))}
    </span>
  );
}
