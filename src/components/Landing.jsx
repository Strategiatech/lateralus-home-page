import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { SeedOfLife } from './icons.jsx'
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

  const openState = hot || opening
  const portalTransition = opening
    ? { duration: 0.62, ease: [0.65, 0, 0.2, 1] }
    : { duration: 1.25, ease: [0.22, 1, 0.36, 1] }

  const fade = opening ? { opacity: 0, transition: { duration: 0.6, ease: 'easeOut' } } : { opacity: 1 }
  const sceneReveal = {
    opacity: openState ? 1 : 0,
    clipPath: openState ? 'inset(0% 0% 0% 0%)' : 'inset(0% 49% 0% 49%)',
    scale: openState ? 1.025 : 1,
  }
  const voidReveal = {
    opacity: openState ? 0.08 : 1,
  }
  const apertureReveal = {
    opacity: openState ? 0.72 : 0,
    scaleX: openState ? 1 : 0.025,
  }

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
          <div className="doorway__threshold">
            <motion.div className="door-scene" aria-hidden="true" animate={sceneReveal} transition={portalTransition} />
            <motion.div className="doorway__void" aria-hidden="true" animate={voidReveal} transition={portalTransition} />
            <motion.span className="doorway__aperture" aria-hidden="true" animate={apertureReveal} transition={portalTransition} />
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
          <span className="landing__enter-tick" />
          <SeedOfLife size={26} />
        </motion.button>
      </div>
    </div>
  )
}
