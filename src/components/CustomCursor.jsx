import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);
  const cursorRef = useRef(null);
  const glowRef = useRef(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const visibleRef = useRef(false);
  const rafId = useRef(null);

  useEffect(() => {
    visibleRef.current = isVisible;
  }, [isVisible]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const updatePointerMode = () => {
      setIsFinePointer(mediaQuery.matches);
    };
    updatePointerMode();
    mediaQuery.addEventListener("change", updatePointerMode);

    return () => {
      mediaQuery.removeEventListener("change", updatePointerMode);
    };
  }, []);

  useEffect(() => {
    if (!isFinePointer) {
      return;
    }

    const interactiveSelector =
      'a, button, [role="button"], input, textarea, select, label, summary, .cursor-pointer, [data-cursor="interactive"]';

    const handlePointerMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!visibleRef.current) {
        currentPos.current = { x: e.clientX, y: e.clientY };
        setIsVisible(true);
        visibleRef.current = true;
      }
    };

    const handlePointerOver = (e) => {
      const target = e.target;
      setIsHovering(Boolean(target?.closest?.(interactiveSelector)));
    };

    const hideCursor = () => {
      setIsVisible(false);
      setIsHovering(false);
      visibleRef.current = false;
    };

    const showCursor = () => {
      setIsVisible(true);
      visibleRef.current = true;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        hideCursor();
      }
    };

    const animate = () => {
      const dx = targetPos.current.x - currentPos.current.x;
      const dy = targetPos.current.y - currentPos.current.y;
      currentPos.current.x += dx * 0.22;
      currentPos.current.y += dy * 0.22;

      const x = currentPos.current.x;
      const y = currentPos.current.y;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(520px circle at ${x}px ${y}px, hsl(187 100% 50% / 0.07), hsl(271 91% 65% / 0.03) 35%, transparent 55%)`;
      }

      rafId.current = window.requestAnimationFrame(animate);
    };

    rafId.current = window.requestAnimationFrame(animate);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerover", handlePointerOver, { passive: true });
    document.addEventListener("mouseleave", hideCursor, { passive: true });
    document.addEventListener("mouseenter", showCursor, { passive: true });
    window.addEventListener("blur", hideCursor, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange, { passive: true });

    return () => {
      if (rafId.current) {
        window.cancelAnimationFrame(rafId.current);
      }
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mouseenter", showCursor);
      window.removeEventListener("blur", hideCursor);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isFinePointer]);

  if (!isFinePointer) {
    return null;
  }

  return createPortal(
    <>
      <div
        ref={glowRef}
        className={`pointer-events-none fixed inset-0 z-[2147483646] hidden md:block transition-opacity duration-300 ${isVisible ? "opacity-50" : "opacity-0"}`}
        aria-hidden
      />

      <div
        ref={cursorRef}
        className={`pointer-events-none fixed top-0 left-0 z-[2147483647] hidden md:block transition-opacity duration-150 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div
          className={`relative transition-all duration-300 ease-out rotate-[22.6deg] ${isHovering ? 'scale-[1.3] drop-shadow-[0_0_12px_hsl(187_100%_50%_/_0.8)]' : 'scale-[1.1] drop-shadow-[0_0_8px_hsl(187_100%_50%_/_0.6)]'}`}
          style={{
            transformOrigin: '3px 3px',
            marginLeft: '-3px',
            marginTop: '-3px',
          }}
        >
          {/* Glassmorphism backdrop matching the arrow shape */}
          <div
            className="absolute inset-0 bg-white/10 backdrop-blur-md pointer-events-none"
            style={{
              clipPath: 'polygon(12.5% 12.5%, 87.5% 43.75%, 56.25% 56.25%, 43.75% 87.5%)',
              width: '24px',
              height: '24px'
            }}
          />

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 3L21 10.5L13.5 13.5L10.5 21L3 3Z"
              stroke="hsl(187, 100%, 50%)"
              strokeWidth="1.5"
              strokeLinejoin="round"
              fill="transparent"
            />
          </svg>
        </div>
      </div>
    </>,
    document.body
  );
}
