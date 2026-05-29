import Reveal from './Reveal.jsx'
import { SeedOfLife } from './icons.jsx'
import michaelMurrayPhoto from '../assets/leadership/michael-murray.png'
import jamesScottPhoto from '../assets/leadership/james-scott.png'
import davidTaylorPhoto from '../assets/leadership/david-taylor.png'
import './Leadership.css'

const PEOPLE = [
  { name: 'Michael Murray', role: 'Executive Chairman', photo: michaelMurrayPhoto, position: '52% 50%' },
  { name: 'James Scott', role: 'Chief Executive Officer', photo: jamesScottPhoto, position: '50% 48%' },
  { name: 'David Taylor', role: 'Managing Director', photo: davidTaylorPhoto, position: '50% 48%' },
]

export default function Leadership() {
  return (
    <section className="leadership" id="leadership">
      <div className="leadership__head">
        <span className="eyebrow">The People Behind Lateralus</span>
        <h2 className="leadership__title">Leadership</h2>
      </div>

      <div className="leadership__grid">
        {PEOPLE.map((p, i) => (
          <Reveal key={p.name} className="leadership__item" delay={i * 0.12}>
            <article className="person">
              <div className="person__frame">
                <div className="person__well">
                  {p.photo ? (
                    <img src={p.photo} alt={p.name} style={{ objectPosition: p.position }} />
                  ) : (
                    <div className="person__placeholder">
                      <span className="person__initial">{p.name[0]}</span>
                      <SeedOfLife size={22} stroke="rgba(249,156,28,0.34)" />
                      <span className="person__pending">Portrait forthcoming</span>
                    </div>
                  )}
                </div>
              </div>
              <h3 className="person__name">{p.name}</h3>
              <div className="person__role">{p.role}</div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
