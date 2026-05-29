import { useId } from 'react'

/* The Lateralus doorway mark from the brand guidelines, rendered as a
   filled golden-glow frame with chamfered inner corners. */
export function DoorMark({ size = 34, glow = false, style }) {
  const id = useId().replace(/:/g, '')
  const gid = `door-${id}`
  const filterId = `door-glow-${id}`
  return (
    <svg
      width={size}
      height={size * 1.42}
      viewBox="0 0 100 142"
      fill="none"
      style={{
        filter: glow ? 'drop-shadow(0 0 10px rgba(249,156,28,0.7))' : 'none',
        ...style,
      }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gid} x1="18%" y1="8%" x2="86%" y2="92%">
          <stop offset="0%" stopColor="#fdf7ee" />
          <stop offset="18%" stopColor="#ffd79b" />
          <stop offset="52%" stopColor="#f99c1c" />
          <stop offset="84%" stopColor="#93500f" />
          <stop offset="100%" stopColor="#260600" />
        </linearGradient>
        <filter id={filterId} x="-60%" y="-45%" width="220%" height="190%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0.98  0 0.72 0 0 0.42  0 0 0.2 0 0.05  0 0 0 0.65 0"
            result="glow"
          />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        fill={`url(#${gid})`}
        filter={glow ? `url(#${filterId})` : undefined}
        fillRule="evenodd"
        clipRule="evenodd"
        d="
          M20 12H80V130H20V12Z
          M27 24L35 32V110L27 118H73L65 110V32L73 24H27Z
        "
      />
    </svg>
  )
}

/* Seed of life — 6 circles around 1. Used as the small emblem under ENTER. */
export function SeedOfLife({ size = 30, stroke = 'rgba(249,156,28,0.85)', strokeWidth = 1 }) {
  const r = 11
  const cx = 25
  const cy = 25
  const petals = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) }
  })
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" aria-hidden="true">
      <circle cx={cx} cy={cy} r={r} stroke={stroke} strokeWidth={strokeWidth} />
      {petals.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={r} stroke={stroke} strokeWidth={strokeWidth} />
      ))}
    </svg>
  )
}

/* Flower of life — larger overlapping-circle lattice for the faint backdrop motif. */
export function FlowerOfLife({ size = 520, stroke = 'rgba(249,156,28,0.16)', strokeWidth = 0.8 }) {
  const r = 40
  const cx = 130
  const cy = 130
  const ring1 = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) }
  })
  const ring2 = []
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i
    ring2.push({ x: cx + 2 * r * Math.cos(a), y: cy + 2 * r * Math.sin(a) })
    const a2 = (Math.PI / 3) * i + Math.PI / 6
    ring2.push({ x: cx + Math.sqrt(3) * r * Math.cos(a2), y: cy + Math.sqrt(3) * r * Math.sin(a2) })
  }
  const all = [{ x: cx, y: cy }, ...ring1, ...ring2]
  return (
    <svg width={size} height={size} viewBox="0 0 260 260" fill="none" aria-hidden="true">
      {all.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={r} stroke={stroke} strokeWidth={strokeWidth} />
      ))}
      <circle cx={cx} cy={cy} r={r * 3} stroke={stroke} strokeWidth={strokeWidth} />
    </svg>
  )
}

/* Small symbol set used on the left rail of the definition section. */
export function GlyphSeed({ size = 22 }) {
  return <SeedOfLife size={size} stroke="rgba(253,247,238,0.5)" strokeWidth={1} />
}

export function GlyphGrid({ size = 22 }) {
  const dots = []
  for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) dots.push({ x: 5 + c * 6.5, y: 5 + r * 6.5 })
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" aria-hidden="true">
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r="1.1" fill="rgba(253,247,238,0.5)" />
      ))}
    </svg>
  )
}

export function GlyphStar({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" stroke="rgba(253,247,238,0.5)" strokeWidth="1" aria-hidden="true">
      <line x1="15" y1="3" x2="15" y2="27" />
      <line x1="3" y1="15" x2="27" y2="15" />
      <line x1="6.5" y1="6.5" x2="23.5" y2="23.5" />
      <line x1="23.5" y1="6.5" x2="6.5" y2="23.5" />
    </svg>
  )
}

export function GlyphRing({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" aria-hidden="true">
      <circle cx="15" cy="15" r="11" stroke="rgba(253,247,238,0.5)" strokeWidth="1" fill="none" />
    </svg>
  )
}

/* Card emblems for the ecosystem section */
export function EmblemStrategia({ size = 38 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <circle cx="20" cy="20" r="17" />
      <circle cx="20" cy="20" r="6" />
      <path d="M20 3 L20 14 M20 26 L20 37 M3 20 L14 20 M26 20 L37 20" />
      <path d="M8 8 L14.5 14.5 M25.5 25.5 L32 32 M32 8 L25.5 14.5 M14.5 25.5 L8 32" opacity="0.5" />
    </svg>
  )
}

export function EmblemPartners({ size = 38 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <circle cx="20" cy="20" r="17" />
      <circle cx="14" cy="17" r="4" />
      <circle cx="26" cy="17" r="4" />
      <path d="M9 31 C9 24 13 22 14 22 M31 31 C31 24 27 22 26 22 M17 31 C17 25 20 24 20 24 C20 24 23 25 23 31" />
    </svg>
  )
}
