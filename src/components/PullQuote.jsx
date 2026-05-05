export default function PullQuote() {
  return (
    <section style={s.section}>
      <div style={s.line} />
      <blockquote style={s.quote}>
        "The next era of drug development will be won by those who understand how evidence, data, and patient access intersect."
      </blockquote>
      <p style={s.attr}>Dillon Shokar</p>
      <div style={s.line} />
    </section>
  )
}

const s = {
  section: {
    padding: '88px 48px',
    textAlign: 'center',
    background: 'var(--cream)',
    borderTop: '0.5px solid var(--border)',
    borderBottom: '0.5px solid var(--border)',
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24,
  },
  line: { width: 1, height: 40, background: 'var(--orange)', opacity: 0.55 },
  quote: {
    fontFamily: 'var(--serif)',
    fontSize: 'clamp(20px, 2.5vw, 27px)',
    fontWeight: 400, fontStyle: 'italic',
    lineHeight: 1.55, color: 'var(--green)',
    maxWidth: 660,
  },
  attr: {
    fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase',
    color: 'var(--orange)', fontWeight: 500,
  },
}
