export default function NoiseOverlay() {
  return (
    <>
      <svg className="hidden">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch" />
        </filter>
      </svg>
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1000,
          pointerEvents: "none",
          opacity: 0.04,
          filter: "url(#noise)",
          mixBlendMode: "overlay",
        }}
      />
    </>
  )
}
