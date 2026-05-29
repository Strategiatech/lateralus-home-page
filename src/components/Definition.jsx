import Wordmark from './Wordmark.jsx'
import Reveal from './Reveal.jsx'
import { FlowerOfLife, GlyphSeed, GlyphGrid, GlyphStar, GlyphRing } from './icons.jsx'
import './Definition.css'

export default function Definition() {
  return (
    <section className="definition" id="about">
      <div className="definition__motif">
        <FlowerOfLife size={520} />
      </div>

      <div className="definition__inner">
        <div className="definition__rail">
          <GlyphSeed />
          <GlyphGrid />
          <GlyphStar />
          <GlyphRing />
        </div>

        <Reveal className="definition__left">
          <Wordmark as="h2" className="definition__word" />
          <div className="definition__phon">
            <span className="syll">lat·er·al·us</span>
            <span className="ipa">/&#716;lat&#601;&#712;r&#257;l&#601;s/</span>
          </div>
          <div className="definition__pos">noun</div>
          <div className="definition__hr" />
          <div className="definition__sense">
            <span className="definition__num">1.</span>
            <p>
              The power of lateral intelligence — the ability to connect people,
              systems, and ideas in parallel to create compounded advantage.
            </p>
          </div>
        </Reveal>

        <div className="definition__divider" />

        <Reveal className="definition__body" delay={0.12}>
          <p>
            Lateralus represents the power of lateral intelligence — the ability to
            think beyond traditional boundaries and connect people, systems, and
            ideas in parallel to create better outcomes.
          </p>
          <p>
            At its core, Lateralus is built on the belief that the greatest
            advantage comes not from isolated expertise, but from interconnected
            thinking. By bringing together human capability, technology,
            intelligence, and execution, we create systems that compound value over
            time.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
