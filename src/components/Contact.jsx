import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', org: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = e => {
    e.preventDefault()
    // Wire to Formspree: replace action URL below
    // fetch('https://formspree.io/f/YOUR_ID', { method:'POST', body: JSON.stringify(form) ... })
    setSent(true)
  }

  return (
    <section id="contact" style={s.section}>
      <div style={s.inner}>
        <div style={s.left}>
          <p style={s.eyebrow}>Get in Touch</p>
          <h2 style={s.heading}>Work with Dillon.</h2>
          <p style={s.body}>
            Whether you're looking for a strategic advisor in integrated evidence generation,
            a thought partner on a market access challenge, or want to discuss
            the ThesisRx research — Dillon's team responds within 48 hours.
          </p>
          <a href="mailto:dshokar@princetonbp.com" style={s.emailLink}>
            dshokar@princetonbp.com
          </a>
        </div>
        <div style={s.right}>
          {sent ? (
            <p style={s.thanks}>Thank you — Dillon's team will be in touch shortly.</p>
          ) : (
            <form onSubmit={submit} style={s.form}>
              <div style={s.row}>
                <input name="name" placeholder="Your name" value={form.name} onChange={handle} style={s.input} required />
                <input name="email" type="email" placeholder="Email address" value={form.email} onChange={handle} style={s.input} required />
              </div>
              <input name="org" placeholder="Organisation (optional)" value={form.org} onChange={handle} style={{ ...s.input, width: '100%' }} />
              <textarea name="message" placeholder="How can Dillon help?" value={form.message} onChange={handle} style={s.textarea} rows={5} required />
              <button type="submit" style={s.submit}>Send Message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

const s = {
  section: {
    background: 'var(--stone)',
    borderTop: '0.5px solid var(--border)',
    padding: '88px 56px',
  },
  inner: {
    display: 'grid', gridTemplateColumns: '1fr 1.4fr',
    gap: 80, alignItems: 'start', maxWidth: 1100,
  },
  left: {},
  eyebrow: {
    fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase',
    color: 'var(--orange)', fontWeight: 500, marginBottom: 14,
  },
  heading: {
    fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3.5vw, 42px)',
    fontWeight: 400, color: 'var(--green)', lineHeight: 1.15, marginBottom: 22,
  },
  body: {
    fontSize: 14, lineHeight: 1.8, color: '#666', fontWeight: 300, marginBottom: 24,
  },
  emailLink: {
    fontSize: 13, color: 'var(--orange)', textDecoration: 'underline',
    textUnderlineOffset: 4, fontWeight: 400,
  },
  right: {},
  form: { display: 'flex', flexDirection: 'column', gap: 14 },
  row: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 },
  input: {
    background: 'var(--cream)', border: '0.5px solid var(--border)',
    padding: '13px 16px', fontSize: 14, color: 'var(--green)',
    fontFamily: 'var(--sans)', outline: 'none',
  },
  textarea: {
    background: 'var(--cream)', border: '0.5px solid var(--border)',
    padding: '13px 16px', fontSize: 14, color: 'var(--green)',
    fontFamily: 'var(--sans)', outline: 'none', resize: 'vertical',
  },
  submit: {
    background: 'var(--green)', color: 'var(--cream)', border: 'none',
    padding: '14px 32px', fontSize: 11, letterSpacing: '0.1em',
    textTransform: 'uppercase', fontWeight: 500, cursor: 'pointer',
    fontFamily: 'var(--sans)', alignSelf: 'flex-start',
    transition: 'background 0.2s',
  },
  thanks: {
    fontFamily: 'var(--serif)', fontSize: 22,
    fontStyle: 'italic', color: 'var(--green)', paddingTop: 40,
  },
}
