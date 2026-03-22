import { useEffect, useState } from 'react';

/**
 * Subtle radial glow following the pointer (cyberpunk accent).
 */
export function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] hidden md:block opacity-50"
      aria-hidden
      style={{
        background: `radial-gradient(520px circle at ${pos.x}px ${pos.y}px, hsl(187 100% 50% / 0.07), hsl(271 91% 65% / 0.03) 35%, transparent 55%)`,
      }}
    />
  );
}
