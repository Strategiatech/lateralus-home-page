import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import strategiaLogo from '../assets/ecosystem/strategia-inline-glow.png'
import csuiteLogo from '../assets/ecosystem/csuite-logo-final-reverse.svg'
import csuiteBackground from '../assets/ecosystem/csuite-gradient-overlay.svg'
import './Ecosystem.css'

const CARDS = [
  {
    key: 'strategia',
    name: 'Strategia',
    role: 'AI-Native Workforce Intelligence',
    description: [
      'Strategia is the group’s scalable technology platform, built to help organisations assess people, predict performance and make better workforce decisions at scale.',
      'Built on Microsoft Azure and aligned with Microsoft’s global AI ecosystem, Strategia connects psychometrics, AI interviews, CV intelligence and workforce data into one enterprise decision-support system.',
    ],
    href: 'https://strategiatech.io',
    external: true,
    logo: strategiaLogo,
  },
  {
    key: 'csuite',
    name: 'C-Suite Partners',
    role: 'Executive Search & Leadership Advisory',
    description: [
      'C-Suite Partners is a global executive search and leadership advisory firm working with some of the world’s most prominent healthcare, life sciences and growth organisations.',
      'The firm partners with boards, investors and executive teams to secure senior leaders for complex, high-impact appointments across international markets.',
    ],
    href: 'https://c-suitepartners.com',
    external: true,
    logo: csuiteLogo,
    background: csuiteBackground,
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
                {c.background ? (
                  <img className={`card__background card__background--${c.key}`} src={c.background} alt="" aria-hidden="true" />
                ) : null}
                <div className="card__logo-wrap">
                  <img className={`card__logo card__logo--${c.key}`} src={c.logo} alt={c.name} />
                </div>
              </div>

              <div className="card__content">
                <div>
                  <div className="card__role">{c.role}</div>
                  <h3 className="card__name">{c.name}</h3>
                  {c.description.map((para, idx) => (
                    <p key={idx} className="card__description">{para}</p>
                  ))}
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
