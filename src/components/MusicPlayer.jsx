import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ── Royalty-free lofi track (Pixabay — free for any use) ──────────────────────
// Replace this URL with your own track if desired.
const MUSIC_URL =
  '/audio/Shrish Das and the New AI Baseline.mp3'
/** Tiny animated equalizer — three bars that bounce when playing */
function EqualizerBars() {
  const bars = [
    { height: [4, 14, 6, 18, 8],  delay: 0 },
    { height: [10, 6, 20, 8, 14], delay: 0.18 },
    { height: [16, 8, 4, 18, 10], delay: 0.09 },
  ];

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: '2px',
        height: '16px',
      }}
    >
      {bars.map((bar, i) => (
        <motion.span
          key={i}
          style={{
            width: '3px',
            borderRadius: '2px',
            background: 'hsl(187 100% 50%)',
            boxShadow: '0 0 6px hsl(187 100% 50% / 0.7)',
            display: 'block',
          }}
          animate={{ height: bar.height.map((h) => `${h}px`) }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: bar.delay,
          }}
        />
      ))}
    </div>
  );
}

/** Returns true when the viewport is at least 768 px wide (tablet / laptop). */
function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : true
  );

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const handler = (e) => setIsLarge(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return isLarge;
}

export function MusicPlayer({ variant = 'navbar' }) {
  const isLargeScreen = useIsLargeScreen();
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showVolume, setShowVolume] = useState(false);
  const audioRef = useRef(null);
  const volumeRef = useRef(null);
  const isNavbar = variant === 'navbar';

  /* ── Audio lifecycle ─────────────────────────────────────────────────────── */
  useEffect(() => {
    if (!isLargeScreen) return; // don't load audio on mobile
    const audio = new Audio(MUSIC_URL);
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLargeScreen]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setPlaying((p) => !p);
  };

  /* ── Close volume slider when clicking outside ───────────────────────────── */
  useEffect(() => {
    if (!showVolume) return;
    const handler = (e) => {
      if (volumeRef.current && !volumeRef.current.contains(e.target)) {
        setShowVolume(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [showVolume]);

  const btnClass = isNavbar
    ? 'p-2.5 rounded-full text-foreground/90 bg-card/30 border border-cyan-500/20 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:text-neon-cyan hover:bg-cyan-500/10 hover:border-cyan-400/40 hover:shadow-[0_0_18px_hsl(187_100%_50%/0.35)]'
    : 'fixed bottom-6 right-20 z-50 p-3 rounded-full bg-card/70 backdrop-blur-xl border border-cyan-500/30 shadow-neon-sm hover:shadow-neon-md hover:border-cyan-400/50 transition-all duration-300 ease-out';

  // Hide entirely on mobile/small screens
  if (!isLargeScreen) return null;

  return (
    <div ref={volumeRef} style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
      {/* Main play/pause button */}
      <motion.button
        id="music-player-btn"
        type="button"
        aria-label={playing ? 'Pause background music' : 'Play background music'}
        onClick={toggle}
        onContextMenu={(e) => { e.preventDefault(); setShowVolume((v) => !v); }}
        title={playing ? 'Pause music (right-click for volume)' : 'Play music (right-click for volume)'}
        className={btnClass}
        whileHover={{ scale: isNavbar ? 1.12 : 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {playing ? (
          <EqualizerBars />
        ) : (
          /* Simple music-note SVG */
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={isNavbar ? 20 : 24}
            height={isNavbar ? 20 : 24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        )}
      </motion.button>

      {/* Volume slider — appears on right-click */}
      <AnimatePresence>
        {showVolume && (
          <motion.div
            id="music-volume-panel"
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 10px)',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 100,
              background: 'rgba(10,18,40,0.88)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(99,255,255,0.18)',
              borderRadius: '12px',
              padding: '10px 14px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              minWidth: '120px',
              boxShadow: '0 0 24px rgba(0,230,255,0.15)',
            }}
          >
            <span style={{ fontSize: '10px', color: 'rgba(203,213,225,0.7)', letterSpacing: '0.05em', userSelect: 'none' }}>
              VOLUME
            </span>
            <input
              id="music-volume-slider"
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              style={{
                width: '90px',
                accentColor: 'hsl(187 100% 50%)',
                cursor: 'pointer',
              }}
              aria-label="Music volume"
            />
            <span style={{ fontSize: '10px', color: 'hsl(187 100% 70%)', userSelect: 'none' }}>
              {Math.round(volume * 100)}%
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
