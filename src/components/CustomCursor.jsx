import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName?.toLowerCase() === 'a' ||
        target.tagName?.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList?.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-[1] hidden md:block opacity-50 transition-opacity duration-300"
        aria-hidden
        style={{
          background: `radial-gradient(520px circle at ${pos.x}px ${pos.y}px, hsl(187 100% 50% / 0.07), hsl(271 91% 65% / 0.03) 35%, transparent 55%)`,
        }}
      />

      <div
        className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
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
    </>
  );
}
