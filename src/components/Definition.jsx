import Wordmark from './Wordmark.jsx'
import Reveal from './Reveal.jsx'
import { FlowerOfLife } from './icons.jsx'
import './Definition.css'

export default function Definition() {
  return (
    <section className="definition" id="about">
      <div className="definition__motif">
        <FlowerOfLife size={520} />
      </div>

      <div className="definition__inner">
        <Reveal className="definition__body">
          <h3 className="definition__body-title">The Operating Group</h3>
          <div className="definition__hr" />
          <p>
            Lateralus is an operating group built around C-Suite Partners and
            Strategia, connecting executive search, leadership advisory and
            AI-powered workforce intelligence into one symbiotic ecosystem.
          </p>
          <p>
            Lateralus is also the group’s investment, capital and strategy
            vehicle — attracting and deploying the resources that grow both
            businesses, and setting the direction that connects them.
          </p>
          <p>
            The group is led by founders, CEOs and operators with proven
            experience building, scaling and commercialising businesses across
            international markets.
          </p>
          <p>
            Lateralus is designed to create advantage through people, technology,
            data, relationships and execution.
          </p>
        </Reveal>

        <div className="definition__divider" />

        <Reveal className="definition__left" delay={0.12}>
          <Wordmark as="h2" className="definition__word" />
          <div className="definition__phon">
            <span className="syll">lat·er·al·us</span>
            <span className="ipa">/&#716;lat&#601;&#712;r&#257;l&#601;s/</span>
          </div>
          <div className="definition__pos">noun</div>
          <div className="definition__hr" />
          <div className="definition__sense">
            <p>
              The power of lateral intelligence — the ability to connect people,
              systems, and ideas in parallel to create compounded advantage.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
