const PILLARS = [
  {
    num: '01',
    title: 'Longevity Science & AI',
    body: 'AI-powered consumer health applications aimed at extending healthspan and redefining how preventive care is personalised, monitored, and delivered.',
  },
  {
    num: '02',
    title: 'Precision Medicine',
    body: 'Biomarker-driven drug development and the integrated evidence infrastructure required to make precision approaches commercially and regulatorily viable.',
  },
  {
    num: '03',
    title: 'Direct-to-Patient',
    body: 'Emerging distribution models that bypass traditional channels — and the strategic and regulatory implications for pharma manufacturers and medical affairs teams.',
  },
]

export default function Pillars() {
  return (
    <section id="pillars" style={s.section}>
      <div style={s.header}>
        <p style={s.eyebrow}>Expertise</p>
        <h2 style={s.title}>
          Three structural shifts redefining healthcare.
        </h2>
      </div>
      <div style={s.body}>
        <div style={s.grid}>
          {PILLARS.map((p, i) => (
            <div
              key={p.num}
              style={{
                ...s.pillar,
                ...(i < PILLARS.length - 1 ? { borderRight: '0.5px solid var(--border)' } : {})
              }}
            >
              <span style={s.num}>{p.num}</span>
              <h3 style={s.pillarTitle}>{p.title}</h3>
              <p style={s.pillarBody}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const s = {
  section: {
    background: 'var(--cream)',
    borderTop: '0.5px solid var(--border)',
  },
  header: {
    padding: '52px 56px 32px',
    borderBottom: '0.5px solid var(--border)',
    display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
    gap: 16,
  },
  eyebrow: {
    fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
    color: 'var(--orange)', fontWeight: 500, marginBottom: 0,
  },
  title: {
    fontFamily: 'var(--serif)', fontSize: 'clamp(24px, 2.8vw, 34px)',
    fontWeight: 400, color: 'var(--green)', lineHeight: 1.2,
  },
  body: {
    padding: '40px 56px 52px',
  },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 },
  pillar: { padding: '0 40px 0 0', marginRight: 40 },
  num: {
    fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 400,
    color: 'var(--orange)', display: 'block', marginBottom: 16,
  },
  pillarTitle: {
    fontSize: 14, fontWeight: 500, color: 'var(--green)',
    marginBottom: 12, letterSpacing: '0.02em', lineHeight: 1.4,
  },
  pillarBody: {
    fontSize: 13, color: 'var(--body)',
    lineHeight: 1.75, fontWeight: 300,
  },
}
