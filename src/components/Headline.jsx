import Reveal from './Reveal.jsx'
import './Headline.css'

/* First section after the doorway — the brand promise, centered, image-1 look. */
export default function Headline() {
  return (
    <section className="headline" id="intro">
      <Reveal className="headline__inner">
        <h1 className="headline__title">
          <span>Lateral intelligence.</span>
          <span>Parallel execution.</span>
          <span className="headline__accent">One ecosystem.</span>
        </h1>
        <p className="headline__sub">
          Lateralus is an operating group building a connected portfolio across
          talent, technology, intelligence, and influence.
        </p>
        <span className="headline__rule" aria-hidden="true" />
      </Reveal>
    </section>
  )
}
