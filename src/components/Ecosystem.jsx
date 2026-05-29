import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { ArtPartners } from './CardArt.jsx'
import strategiaLogo from '../assets/ecosystem/strategia-inline-glow.png'
import csuiteLogo from '../assets/ecosystem/csuite-logo-reverse.svg'
import './Ecosystem.css'

const CARDS = [
  {
    key: 'strategia',
    name: 'Strategia',
    role: 'AI Driven Workforce Intelligence',
    description:
      'Predict performance before it lands. Strategia is a multi-module workforce intelligence platform for HR, Talent, and Executive teams, built on structured scientific frameworks to automate 80% of recruitment and compound every hire into the engine that finds the next one.',
    href: 'https://strategiatech.io',
    external: true,
    logo: strategiaLogo,
  },
  {
    key: 'csuite',
    name: 'C-Suite Partners',
    role: 'Executive Search & Leadership Advisory',
    description:
      'Executive search and leadership advisory. C-Suite Partners connects organisations with the senior leaders who shape their next chapter, and advises on building teams that last.',
    href: 'https://c-suitepartners.com',
    external: true,
    logo: csuiteLogo,
    Art: ArtPartners,
  },
]

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M3 8h9M8 4l4 4-4 4" />
    </svg>
  )
}

export default function Ecosystem() {
  return (
    <section className="ecosystem" id="ecosystem">
      <Reveal className="ecosystem__head">
        <span className="line" />
        <span className="eyebrow">The Lateralus Ecosystem</span>
        <span className="line" />
      </Reveal>

      <div className="ecosystem__grid">
        {CARDS.map((c, i) => (
          <Reveal key={c.key} delay={i * 0.1}>
            <motion.a
              className={`card card--${c.key}`}
              href={c.href}
              target={c.external ? '_blank' : undefined}
              rel={c.external ? 'noopener noreferrer' : undefined}
              whileTap={{ scale: 0.99 }}
              aria-label={`${c.name} — ${c.role}`}
            >
              <div className="card__visual">
                {c.Art ? <c.Art /> : null}
                <div className="card__logo-wrap">
                  <img className={`card__logo card__logo--${c.key}`} src={c.logo} alt={c.name} />
                </div>
              </div>

              <div className="card__content">
                <div>
                  <div className="card__role">{c.role}</div>
                  <h3 className="card__name">{c.name}</h3>
                  <p className="card__description">{c.description}</p>
                </div>
                <span className="card__arrow"><Arrow /></span>
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
