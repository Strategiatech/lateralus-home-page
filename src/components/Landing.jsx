import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import doorClosedTransparent from '../assets/landing/door-closed-transparent.png'
import './Landing.css'

export default function Landing({ onEnter }) {
  const [hot, setHot] = useState(false)
  const [opening, setOpening] = useState(false)

  const enter = useCallback(() => {
    if (opening) return
    setOpening(true)
    setHot(false)
    window.setTimeout(() => onEnter?.(), 420)
  }, [opening, onEnter])

  const onKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      enter()
    }
  }

  const portalTransition = opening
    ? { duration: 0.62, ease: [0.65, 0, 0.2, 1] }
    : { duration: 1.25, ease: [0.22, 1, 0.36, 1] }

  const fade = opening ? { opacity: 0, transition: { duration: 0.6, ease: 'easeOut' } } : { opacity: 1 }
  // The interior scene sits permanently behind the doors at full size; opening the
  // panels simply uncovers it, rather than the scene expanding/fading in.
  const sceneReveal = { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', scale: 1 }
  const voidReveal = { opacity: 0.08 }
  const apertureReveal = { opacity: 0.72, scaleX: 1 }

  return (
    <div className={`landing ${hot ? 'is-hot' : ''} ${opening ? 'is-opening' : ''}`}>
      <div className="landing__halo" />
      <div className="landing__floor" />
      <div className="landing__pool" />

      <div className="landing__cluster">
        <button
          type="button"
          className="doorway"
          aria-label="Enter Lateralus"
          onMouseEnter={() => setHot(true)}
          onMouseLeave={() => setHot(false)}
          onFocus={() => setHot(true)}
          onBlur={() => setHot(false)}
          onClick={enter}
          onKeyDown={onKey}
        >
          <span className="doorway__glow" aria-hidden="true" />
          <img className="doorway__frame" src={doorClosedTransparent} alt="" aria-hidden="true" />
          <span className="doorway__gold-line" aria-hidden="true" />
          <span className="doorway__spill" aria-hidden="true" />
          <div className="doorway__threshold">
            <motion.div className="door-scene" aria-hidden="true" animate={sceneReveal} transition={portalTransition} />
            <motion.div className="doorway__void" aria-hidden="true" animate={voidReveal} transition={portalTransition} />
            <motion.span className="doorway__aperture" aria-hidden="true" animate={apertureReveal} transition={portalTransition} />
            <span className="doorway__panel doorway__panel--left" aria-hidden="true" />
            <span className="doorway__panel doorway__panel--right" aria-hidden="true" />
          </div>
          <div className="doorway__lintel" />
        </button>

        <motion.button
          type="button"
          className="landing__enter"
          animate={fade}
          onClick={enter}
          onMouseEnter={() => setHot(true)}
          onMouseLeave={() => setHot(false)}
          aria-label="Enter"
        >
          <span>ENTER</span>
        </motion.button>
      </div>
    </div>
  )
}
