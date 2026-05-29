import { useId } from 'react'

/* C-SUITE PARTNERS: a receding archway corridor in dark stone with a gold threshold. */
export function ArtPartners() {
  const id = useId().replace(/:/g, '')
  const arches = [0, 1, 2, 3, 4]
  return (
    <svg className="card__art" viewBox="0 0 600 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id={`v-${id}`} cx="50%" cy="58%" r="40%">
          <stop offset="0%" stopColor="#f9a52a" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#7a3f0a" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#0c0b0a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`s-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#211f1c" />
          <stop offset="100%" stopColor="#0c0b0a" />
        </linearGradient>
      </defs>
      <rect width="600" height="420" fill={`url(#s-${id})`} />
      {/* the warm light at the end of the corridor */}
      <rect width="600" height="420" fill={`url(#v-${id})`} />
      {arches.map((i) => {
        const inset = i * 46
        const x = 120 + inset
        const y = 60 + inset * 0.7
        const w = 600 - x * 2
        const h = 420 - y - inset * 0.4
        return (
          <path
            key={i}
            d={`M${x} ${420} L${x} ${y + 70} Q${x} ${y} ${x + w / 2} ${y} Q${x + w} ${y} ${x + w} ${y + 70} L${x + w} 420`}
            fill="none"
            stroke="rgba(249,156,28,0.16)"
            strokeWidth={1}
            style={{ opacity: 0.4 + i * 0.12 }}
          />
        )
      })}
    </svg>
  )
}
