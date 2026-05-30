import { useState } from 'react'
import Reveal from './Reveal.jsx'
import './Contact.css'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setStatus('Contact endpoint pending. Details were not sent.')
  }

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <Reveal className="contact__copy">
          <span className="eyebrow">Contact</span>
          <h2>Start a <span className="contact__accent">conversation.</span></h2>
          <p>
            For partnerships, strategic opportunities and group enquiries, leave
            the essentials and we will direct the conversation to the right team.
          </p>

          <div className="contact__routes" aria-label="Contact routes">
            <a href="#about">Group</a>
            <a href="#ecosystem">Ecosystem</a>
            <a href="#leadership">Leadership</a>
            <a href="#contact">Contact</a>
          </div>
        </Reveal>

        <Reveal className="contact__panel" delay={0.12}>
          <form className="contact__form" aria-label="Contact form" onSubmit={handleSubmit}>
            <label>
              <span>Name</span>
              <input name="name" autoComplete="name" />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" />
            </label>
            <label>
              <span>Company</span>
              <input name="company" autoComplete="organization" />
            </label>
            <label className="contact__message">
              <span>Message</span>
              <textarea name="message" rows="5" />
            </label>
            <button className="contact__button" type="submit">
              Submit enquiry
            </button>
            {status ? <p className="contact__status" role="status">{status}</p> : null}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
