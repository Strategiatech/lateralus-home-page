import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Landing from './components/Landing.jsx'
import MainSite from './components/MainSite.jsx'

export default function App() {
  const [entered, setEntered] = useState(() => Boolean(window.location.hash))
  const entryScrollTimers = useRef([])

  function clearEntryScrollTimers() {
    entryScrollTimers.current.forEach((timer) => window.clearTimeout(timer))
    entryScrollTimers.current = []
  }

  function alignEntryView() {
    const about = document.getElementById('about')

    if (!about) return

    const target =
      window.scrollY +
      about.getBoundingClientRect().top -
      window.innerHeight * 0.58

    window.scrollTo({
      top: Math.max(0, target),
      behavior: 'auto',
    })
  }

  function scheduleEntryAlignment() {
    clearEntryScrollTimers()

    entryScrollTimers.current = [160, 420, 760].map((delay) =>
      window.setTimeout(alignEntryView, delay)
    )
  }

  function enterSite() {
    const shouldAlignEntryView = !window.location.hash

    setEntered(true)

    if (shouldAlignEntryView) {
      scheduleEntryAlignment()
    }
  }

  useEffect(() => {
    function syncHashEntry() {
      if (window.location.hash) {
        clearEntryScrollTimers()
        setEntered(true)
      }
    }

    window.addEventListener('hashchange', syncHashEntry)
    return () => {
      window.removeEventListener('hashchange', syncHashEntry)
      clearEntryScrollTimers()
    }
  }, [])

  function returnToLanding() {
    clearEntryScrollTimers()
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
    window.scrollTo({ top: 0, behavior: 'auto' })
    setEntered(false)
  }

  return (
    <>
      <div className="grain" />

      {entered && <MainSite onHome={returnToLanding} />}

      <AnimatePresence>
        {!entered && (
          <motion.div
            key="landing"
            exit={{ opacity: 0, scale: 1.025, filter: 'blur(6px)' }}
            transition={{ duration: 0.24, ease: 'linear' }}
            style={{ position: 'fixed', inset: 0, zIndex: 100, overflow: 'hidden' }}
          >
            <Landing onEnter={enterSite} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
