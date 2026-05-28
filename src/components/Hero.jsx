import { useState } from 'react'
import headshot from '../assets/ds-headshot.jpg'
export default function Hero() {
  const [hover, setHover] = useState(false)

  return (
    <section style={s.section}>
      {/* Left: headshot */}
      <div style={s.photoPane}>
        <div style={s.photoFrame}>
          <img src={headshot} alt="Dillon Shokar" style={s.photo} />
        </div>
      </div>

      {/* Right: text */}
      <div style={s.content}>
        <p style={s.eyebrow}>Biopharmaceutical Consultant</p>
        <h1 style={s.h1}>Turning evidence<br />into strategy.</h1>
        <p style={s.lead}>
          Leading consultant in integrated evidence generation for the biopharmaceutical industry.
        </p>
        <p style={s.body}>
          Co-Founder & CEO of Princeton Biopartners. Thought leadership and specialization in biopharmaceutical evidence generation strategy, including real-world evidence, late-phase clinical development, and health economics and outcomes research.
        </p>
        <div style={s.btns}>
          <span
            style={{ ...s.btnPrimary, ...(hover ? s.btnHover : {}) }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Read Research
          </span>
          <span
            style={s.btnGhost}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            About Dillon
          </span>
        </div>
      </div>
    </section>
  )
}

const s = {
  section: {
    display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '100vh', paddingTop: 0,
  },
  photoPane: {
    background: 'var(--green-mid)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    minHeight: 600,
  },
  photoFrame: {
    width: '60%', aspectRatio: '3 / 4',
    border: '3px solid var(--orange)',
    outline: '1px solid rgba(247,244,239,0.15)',
    outlineOffset: 8,
    overflow: 'hidden',
  },
  photoInner: {
    position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
    width: '70%', height: '88%',
    background: 'linear-gradient(180deg, var(--green-light) 0%, var(--green) 100%)',
    clipPath: 'ellipse(50% 100% at 50% 100%)',
    display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: 24,
  },
  photo: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' },
  photoLabel: {
    fontSize: 10, color: 'rgba(247,244,239,0.2)', letterSpacing: '0.1em', textTransform: 'uppercase',
  },
  photoOverlay: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(to top, rgba(28,58,40,0.5) 0%, transparent 60%)',
  },
  content: {
    background: 'var(--green)',
    display: 'flex', flexDirection: 'column', justifyContent: 'center',
    padding: '80px 56px 64px 52px',
  },
  eyebrow: {
    fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase',
    color: 'var(--orange)', marginBottom: 22, fontWeight: 500,
  },
  h1: {
    fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 3.5vw, 48px)',
    fontWeight: 400, lineHeight: 1.1, color: 'var(--cream)', marginBottom: 22,
  },
  lead: {
    fontSize: 15, lineHeight: 1.8, color: 'rgba(247,244,239,0.7)',
    fontWeight: 300, maxWidth: 380, marginBottom: 16,
  },
  body: {
    fontSize: 14, lineHeight: 1.8, color: 'rgba(247,244,239,0.45)',
    fontWeight: 300, maxWidth: 380, marginBottom: 40,
  },
  btns: { display: 'flex', gap: 20, alignItems: 'center' },
  btnPrimary: {
    background: 'var(--orange)', color: 'var(--cream)',
    fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
    padding: '13px 28px', fontWeight: 500, cursor: 'pointer',
    transition: 'opacity 0.2s',
  },
  btnHover: { opacity: 0.85 },
  btnGhost: {
    fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
    color: 'rgba(247,244,239,0.35)', textDecoration: 'underline',
    textUnderlineOffset: 4, cursor: 'pointer',
  },
}
