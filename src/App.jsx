import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Landing from './components/Landing.jsx'
import MainSite from './components/MainSite.jsx'

export default function App() {
  const [entered, setEntered] = useState(() => Boolean(window.location.hash))

  function enterSite() {
    setEntered(true)
  }

  useEffect(() => {
    function syncHashEntry() {
      if (window.location.hash) {
        setEntered(true)
      }
    }

    window.addEventListener('hashchange', syncHashEntry)
    return () => window.removeEventListener('hashchange', syncHashEntry)
  }, [])

  function returnToLanding() {
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
            exit={{ opacity: 0, scale: 1.06, filter: 'blur(14px)' }}
            transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'fixed', inset: 0, zIndex: 100, overflow: 'hidden' }}
          >
            <Landing onEnter={enterSite} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
