import Reveal from './Reveal.jsx'
import './GlobalPresence.css'

const REGIONS = [
  'Australia',
  'Singapore',
  'United Arab Emirates',
  'United States',
  'United Kingdom',
  'Europe',
  'Southeast Asia',
]

/* Minimalist reach statement between the ecosystem and the people. */
export default function GlobalPresence() {
  return (
    <section className="presence" id="presence">
      <Reveal className="presence__inner">
        <div className="presence__lead">
          <span className="eyebrow">Global Presence</span>
          <h2 className="presence__title">
            <span>Built from Australia.</span>
            <span className="presence__accent">Operating across the world.</span>
          </h2>
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
