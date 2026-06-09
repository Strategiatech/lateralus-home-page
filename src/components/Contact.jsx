import { useState } from 'react'
import Reveal from './Reveal.jsx'
import './Contact.css'

// Public endpoint of the Lateralus contact Logic App (Consumption) in the
// lateralus-prod subscription. It emails info@lateralusgroup.ai via the
// Office 365 Outlook connector (authorised as info@). Safe to expose
// client-side — same model as any form-backend endpoint; abuse is limited by
// the honeypot and the fact it only ever mails info@.
const CONTACT_ENDPOINT =
  'https://prod-29.australiaeast.logic.azure.com:443/workflows/27e18d9bd87541c59a644a0a3b8eb1e9/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=lsG173e1vC3AM0VZBgaglmQUs8xVaLvvrD_zE82dOWM'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    // Honeypot: humans never see/fill this. If set, silently accept (no send).
    if (data.company_website) {
      setStatus('success')
      form.reset()
      return
    }

    setStatus('sending')
    try {
      // no-cors: the Logic App HTTP trigger returns no CORS headers, so we
      // can't read its response — but the POST still reaches it. text/plain
      // keeps it a "simple request" (no preflight). We treat a resolved
      // fetch as success and only surface an error on a network failure.
      await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: JSON.stringify({
          name: data.name || '',
          email: data.email || '',
          title: data.title || '',
          phone: data.phone || '',
          company: data.company || '',
          message: data.message || '',
        }),
      })
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
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
              <input name="name" autoComplete="name" required />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              <span>Company</span>
              <input name="company" autoComplete="organization" required />
            </label>
            <label>
              <span>Title</span>
              <input name="title" autoComplete="organization-title" required />
            </label>
            <label className="contact__phone">
              <span>Phone number <small>Optional</small></span>
              <input name="phone" type="tel" autoComplete="tel" />
            </label>
            <label className="contact__message">
              <span>Message</span>
              <textarea name="message" rows="5" required />
            </label>

            {/* Honeypot — hidden from humans, traps bots */}
            <input
              type="text"
              name="company_website"
              className="contact__hp"
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
            />

            <button className="contact__button" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Submit enquiry'}
            </button>

            {status === 'success' ? (
              <p className="contact__status contact__status--ok" role="status">
                Thank you — your enquiry is on its way. We&rsquo;ll be in touch shortly.
              </p>
            ) : null}
            {status === 'error' ? (
              <p className="contact__status contact__status--err" role="status">
                Something went wrong sending your enquiry. Please email{' '}
                <a href="mailto:info@lateralusgroup.ai">info@lateralusgroup.ai</a> directly.
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
