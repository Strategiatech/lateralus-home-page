import Reveal from './Reveal.jsx'
import './GlobalPresence.css'

const REGIONS = [
  'Australasia',
  'Southeast Asia',
  'The Gulf',
  'North America',
  'United Kingdom',
  'Europe',
]

/* Minimalist reach statement between the ecosystem and the people. */
export default function GlobalPresence() {
  return (
    <section className="presence" id="presence">
      <Reveal className="presence__inner">
        <div className="presence__lead">
          <span className="eyebrow">Global Presence</span>
          <h2 className="presence__title">
            <span>Operating across the world’s</span>
            <span className="presence__accent">growth markets.</span>
          </h2>
          <p className="presence__copy">
            Connecting leadership, technology and influence across international
            markets.
          </p>
        </div>
        <ul className="presence__regions">
          {REGIONS.map((region) => (
            <li key={region}>{region}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
