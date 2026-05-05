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
        <p style={s.eyebrow}>ThesisRx Investment Themes</p>
        <h2 style={s.title}>
          Three structural shifts<br />redefining healthcare.
        </h2>
      </div>
      <div style={s.grid}>
        {PILLARS.map((p, i) => (
          <div
            key={p.num}
            style={{
              ...s.pillar,
              ...(i < PILLARS.length - 1 ? { borderRight: '0.5px solid rgba(247,244,239,0.08)' } : {})
            }}
          >
            <span style={s.num}>{p.num}</span>
            <h3 style={s.pillarTitle}>{p.title}</h3>
            <p style={s.pillarBody}>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const s = {
  section: {
    background: 'var(--green)',
    borderTop: '0.5px solid rgba(247,244,239,0.08)',
  },
  header: {
    padding: '56px 56px 32px',
    borderBottom: '0.5px solid rgba(247,244,239,0.08)',
    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32,
  },
  eyebrow: {
    fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase',
    color: 'var(--orange)', fontWeight: 500, flexShrink: 0,
  },
  title: {
    fontFamily: 'var(--serif)', fontSize: 'clamp(22px, 2.5vw, 30px)',
    fontWeight: 400, color: 'var(--cream)', lineHeight: 1.25, textAlign: 'right',
  },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' },
  pillar: { padding: '44px 40px 56px 56px' },
  num: {
    fontFamily: 'var(--serif)', fontSize: 32, fontWeight: 400,
    color: 'var(--orange)', display: 'block', marginBottom: 18,
  },
  pillarTitle: {
    fontSize: 14, fontWeight: 500, color: 'var(--cream)',
    marginBottom: 14, letterSpacing: '0.02em', lineHeight: 1.4,
  },
  pillarBody: {
    fontSize: 13, color: 'rgba(247,244,239,0.42)',
    lineHeight: 1.75, fontWeight: 300,
  },
}
