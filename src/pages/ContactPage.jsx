import { useState } from 'react'
import SectionIntro from '../components/SectionIntro'
import { contacts } from '../data/portfolio'

const whatsappNumber = '5544920047139'

function ContactIcon({ type }) {
  if (type === 'LinkedIn') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 8.98H3.56V20h3.38V8.98ZM5.25 4a1.96 1.96 0 1 0 0 3.92A1.96 1.96 0 0 0 5.25 4Zm14.68 9.72c0-3.28-1.75-4.8-4.08-4.8-1.88 0-2.72 1.04-3.19 1.77V8.98H9.43V20h3.37v-5.45c0-1.44.27-2.84 2.06-2.84 1.76 0 1.79 1.65 1.79 2.93V20h3.37l-.09-6.28Z" />
      </svg>
    )
  }

  if (type === 'GitHub') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49v-1.74c-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.71 0 0 .84-.28 2.75 1.05A9.29 9.29 0 0 1 12 6.99c.85 0 1.7.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.15 10.15 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
      </svg>
    )
  }

  if (type === 'WhatsApp') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Zm-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26C2.16 6.44 6.6 2 12.05 2c2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 7c0 5.45-4.44 9.88-9.88 9.88ZM20.46 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.48-8.41Z"
        />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 6.75h16v10.5H4V6.75Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m5 8 7 5 7-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ContactPage({ t }) {
  const contact = t.contact
  const [deliveryMethod, setDeliveryMethod] = useState('email')
  const isWhatsApp = deliveryMethod === 'whatsapp'

  const handleContactSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const fullName = String(formData.get('fullName') ?? '').trim()
    const contactInfo = String(formData.get('contactInfo') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()
    const subject = contact.emailSubject
    const body = [
      contact.emailGreeting,
      '',
      contact.emailIntro,
      '',
      message,
      '',
      contact.emailClosing,
      fullName,
      contactInfo,
    ].join('\n')

    if (isWhatsApp) {
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(body)}`

      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
      return
    }

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=joseluizaranaalmeida@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.open(gmailUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="contact-page">
      <SectionIntro
        eyebrow={contact.eyebrow}
        title={contact.title}
      >
        {contact.intro}
      </SectionIntro>

      <div className="contact-layout">
        <div className="contact-aside">
          <div className="contact-aside-heading">
            <span>{contact.asideEyebrow}</span>
            <h2>{contact.asideTitle}</h2>
            <p>{contact.asideText}</p>
          </div>

          <div className="contact-grid">
            {contacts.map((contact) => (
              <a
                className="contact-card"
                href={contact.href}
                key={contact.label}
                target={contact.label === 'Email' ? undefined : '_blank'}
                rel={contact.label === 'Email' ? undefined : 'noreferrer'}
              >
                <span className="contact-icon">
                  <ContactIcon type={contact.label} />
                </span>
                <span>
                  <strong>{contact.label}</strong>
                  <small>{contact.value}</small>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-form-card">
          <div className="contact-form-heading">
            <div className="contact-form-heading-top">
              <span>{contact.formEyebrow}</span>
              <div className="contact-channel-toggle" aria-label={contact.formEyebrow}>
                <button
                  className={!isWhatsApp ? 'active' : undefined}
                  type="button"
                  onClick={() => setDeliveryMethod('email')}
                >
                  {contact.sendByEmail}
                </button>
                <button
                  className={isWhatsApp ? 'active' : undefined}
                  type="button"
                  onClick={() => setDeliveryMethod('whatsapp')}
                >
                  {contact.sendByWhatsApp}
                </button>
              </div>
            </div>
            <h2>{contact.formTitle}</h2>
            <p>{contact.formText}</p>
          </div>

          <form className="contact-form" onSubmit={handleContactSubmit}>
            <label>
              <span>{contact.fullName}</span>
              <input name="fullName" type="text" autoComplete="name" required />
            </label>

            <label>
              <span>{isWhatsApp ? contact.phone : contact.email}</span>
              <input
                name="contactInfo"
                type={isWhatsApp ? 'tel' : 'email'}
                autoComplete={isWhatsApp ? 'tel' : 'email'}
                required
              />
            </label>

            <label className="message-field">
              <span>{contact.message}</span>
              <textarea name="message" rows="6" required />
            </label>

            <button type="submit">
              {isWhatsApp ? contact.submitWhatsApp : contact.submitEmail}
              <span aria-hidden="true">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
