import React, { useState } from "react";

// ── AvatarWidget — "standing on the page" style ──────────────────────────────
// Uses Google's <model-viewer> web component (loaded via CDN in index.html)
// • No box / card — fully transparent background
// • Rotate only on click+drag (no auto-rotate)
// • Fixed height — cannot be resized by the user
// • Subtle foot shadow so it looks grounded
export function AvatarWidget() {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return (
      <button
        id="avatar-show-btn"
        onClick={() => setVisible(true)}
        title="Show Avatar"
        style={{
          position: "fixed",
          bottom: "16px",
          right: "16px",
          zIndex: 50,
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          fontSize: "20px",
          background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
          boxShadow: "0 0 16px rgba(99,102,241,0.6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        🧔🏻‍♂️
      </button>
    );
  }

  return (
    <div
      id="avatar-widget"
      style={{
        position: "fixed",
        bottom: "0px",          /* flush to the bottom edge */
        right: "32px",
        zIndex: 50,
        width: "220px",
        height: "460px",        /* fixed — cannot be changed */
        pointerEvents: "auto",
        userSelect: "none",
      }}
    >
      {/* Hide button — small, top-right of the avatar area */}
      <button
        id="avatar-hide-btn"
        onClick={() => setVisible(false)}
        title="Hide avatar"
        style={{
          position: "absolute",
          top: "8px",
          right: "4px",
          zIndex: 51,
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          border: "1px solid rgba(99,102,241,0.35)",
          background: "rgba(10,18,40,0.55)",
          backdropFilter: "blur(6px)",
          color: "rgba(203,213,225,0.7)",
          fontSize: "10px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: 1,
          padding: 0,
        }}
      >
        ✕
      </button>

      {/* Foot shadow — makes avatar look grounded */}
      <div
        style={{
          position: "absolute",
          bottom: "0px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90px",
          height: "14px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.35) 0%, transparent 70%)",
          filter: "blur(4px)",
          pointerEvents: "none",
        }}
      />

      {/* model-viewer — fully transparent, no box */}
      {/* @ts-ignore */}
      <model-viewer
        id="avatar-model-viewer"
        src="/avatars/model5.glb"
        alt="3D avatar standing on the page"
        camera-controls                   /* drag to rotate */
        disable-zoom                      /* no scroll-zoom */
        disable-pan                       /* no panning */
        autoplay                          /* play the GLB's built-in animation */
        interaction-prompt="none"         /* no "click to interact" tooltip */
        camera-orbit="0deg 85deg 2.2m"    /* front view, slightly above ground */
        min-camera-orbit="auto 60deg auto"
        max-camera-orbit="auto 100deg auto"
        shadow-intensity="0"
        exposure="1.3"
        environment-image="neutral"
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",      /* no background */
          "--poster-color": "transparent",
          "--progress-bar-color": "rgba(99,102,241,0.5)",
          "--progress-bar-height": "2px",
        }}
      />

      <style>{`
        /* Force the internal canvas background to be transparent */
        #avatar-model-viewer {
          --background-color: transparent;
        }
        #avatar-model-viewer::part(default-progress-bar) {
          display: none;
        }
      `}</style>
    </div>
  );
}
