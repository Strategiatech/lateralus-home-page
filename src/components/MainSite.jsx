import { motion } from 'framer-motion'
import Definition from './Definition.jsx'
import Ecosystem from './Ecosystem.jsx'
import Leadership from './Leadership.jsx'
import Contact from './Contact.jsx'
import markSandLogo from '../assets/logos/LATERALUS_MARK_SAND.svg'
import wordmarkSandLogo from '../assets/logos/LATERALUS_WORDMARK_SAND.svg'
import './MainSite.css'

export default function MainSite({ onHome }) {
  const homeHref =
    typeof window === 'undefined'
      ? '/'
      : `${window.location.pathname}${window.location.search}`

  function handleHome(event) {
    event.preventDefault()
    onHome?.()
  }

  return (
    <motion.div
      className="site"
      initial={{ opacity: 0, scale: 1.012, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
    >
      <header className="site__header">
        <a className="site__brand" href={homeHref} aria-label="Return to Lateralus doorway" onClick={handleHome}>
          <img className="site__brand-mark" src={markSandLogo} alt="" aria-hidden="true" />
          <img className="site__brand-name" src={wordmarkSandLogo} alt="Lateralus" />
        </a>
        <nav className="site__nav">
          <a href="#about">Definition</a>
          <a href="#ecosystem">Ecosystem</a>
          <a href="#leadership">Leadership</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <Definition />
        <Ecosystem />
        <Leadership />
        <Contact />
      </main>

      <footer className="site__footer">
        <div className="site__footer-inner">
          <div className="site__footer-main">
            <div className="site__footer-intro">
              <a className="site__brand site__footer-brand" href={homeHref} aria-label="Return to Lateralus doorway" onClick={handleHome}>
                <img className="site__brand-mark site__brand-mark--footer" src={markSandLogo} alt="" aria-hidden="true" />
                <img className="site__brand-name site__brand-name--footer" src={wordmarkSandLogo} alt="Lateralus" />
              </a>
              <p className="site__footer-desc">
                An investment and holding group. Building and backing the
                companies that open new doors.
              </p>
            </div>

            <nav className="site__footer-nav" aria-label="Group">
              <h2 className="site__footer-title">Group</h2>
              <a className="site__footer-link" href="#about">About</a>
              <a className="site__footer-link" href="#leadership">Team</a>
              <a className="site__footer-link" href="#ecosystem">Companies</a>
              <a className="site__footer-link" href="#contact">Contact</a>
            </nav>

            <nav className="site__footer-nav" aria-label="Companies">
              <h2 className="site__footer-title">Companies</h2>
              <a className="site__footer-link" href="https://strategiatech.io" target="_blank" rel="noopener noreferrer">
                Strategia
              </a>
              <a className="site__footer-link" href="https://c-suitepartners.com" target="_blank" rel="noopener noreferrer">
                C-Suite Partners
              </a>
            </nav>
          </div>

          <div className="site__footer-bottom">
            <span>© 2026 Lateralus Group. All rights reserved.</span>
            <span>A symbol of transition and opportunity.</span>
          </div>
        </div>
      </footer>
    </motion.div>
  )
}
