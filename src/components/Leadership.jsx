import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { SeedOfLife } from './icons.jsx'
import michaelMurrayPhoto from '../assets/leadership/michael-murray.png'
import jamesScottPhoto from '../assets/leadership/james-scott.png'
import davidTaylorPhoto from '../assets/leadership/david-taylor.png'
import './Leadership.css'

const PEOPLE = [
  {
    name: 'Michael Murray',
    role: 'Founder & Executive Chairman',
    photo: michaelMurrayPhoto,
    position: '52% 50%',
    bio: [
      'Michael Murray is the Founder and Executive Chairman of Lateralus, the group behind C-Suite Partners, Strategia and In The Boardroom.',
      "Michael brings more than 20 years of experience across executive search, banking and finance, Big 4 consulting, global recruitment and leadership advisory. He built C-Suite Partners into a global executive search firm, launched In The Boardroom as a media platform showcasing senior executives around the world, and founded Strategia as the AI-powered workforce intelligence platform at the centre of the group's technology strategy.",
      'Through Lateralus, Michael connects leadership advisory, workforce intelligence and executive media into one operating ecosystem designed to compound through relationships, intelligence, execution and global market access.',
    ],
  },
  {
    name: 'James Scott',
    role: 'Group Chief Executive Officer',
    photo: jamesScottPhoto,
    position: '50% 48%',
    bio: [
      'James Scott is Group Chief Executive Officer of Lateralus, leading international growth, operating execution and commercial scale across C-Suite Partners and Strategia.',
      'James brings more than 20 years of experience building and scaling workforce, talent and technology-enabled businesses across Australia, New Zealand, the UK, North America and Southeast Asia. He has operated as CEO across complex regulated markets, leading businesses where people, systems, technology and commercial performance need to move together.',
      "At Lateralus, James is focused on scaling the group internationally, strengthening operating discipline and bringing Strategia's workforce intelligence platform to market with enterprise credibility.",
    ],
  },
  {
    name: 'David Taylor',
    role: 'Group Managing Director',
    photo: davidTaylorPhoto,
    position: '50% 48%',
    bio: [
      "David Taylor is Group Managing Director of Lateralus, supporting international growth, enterprise delivery and operating execution across the group's core markets.",
      'David brings more than 25 years of experience scaling workforce, managed services and technology-enabled businesses across the Middle East, UK, Europe, APAC and Africa. His career includes senior leadership roles with Randstad, Adecco and Impellam Group, alongside deep experience supporting healthcare and workforce transformation across complex international environments.',
      'At Lateralus, David focuses on regional growth, enterprise partnerships, and the practical application of technology and AI across workforce systems. His strength is turning strategy, people, systems and technology into commercial outcomes across multiple markets.',
    ],
  },
]

function Person({ person, delay }) {
  const [expanded, setExpanded] = useState(false)
  const [intro, ...rest] = person.bio
  const hasMore = rest.length > 0

  return (
    <Reveal className="leadership__item" delay={delay}>
      <article className="person">
        <div className="person__frame">
          <div className="person__well">
            {person.photo ? (
              <img src={person.photo} alt={person.name} style={{ objectPosition: person.position }} />
            ) : (
              <div className="person__placeholder">
                <span className="person__initial">{person.name[0]}</span>
                <SeedOfLife size={22} stroke="rgba(249,156,28,0.34)" />
                <span className="person__pending">Portrait forthcoming</span>
              </div>
            )}
          </div>
        </div>
        <h3 className="person__name">{person.name}</h3>
        <div className="person__role">{person.role}</div>
        <div className="person__bio">
          <p>{intro}</p>
          {expanded && rest.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        {hasMore && (
          <button
            type="button"
            className="person__more"
            aria-expanded={expanded}
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? 'Read less' : 'Read more'}
          </button>
        )}
      </article>
    </Reveal>
  )
}

export default function Leadership() {
  return (
    <section className="leadership" id="leadership">
      <div className="leadership__head">
        <span className="eyebrow">The People Behind Lateralus</span>
        <h2 className="leadership__title">Leadership</h2>
      </div>

      <div className="leadership__grid">
        {PEOPLE.map((p, i) => (
          <Person key={p.name} person={p} delay={i * 0.12} />
        ))}
      </div>
    </section>
  )
}
