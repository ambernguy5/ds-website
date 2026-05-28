const PILLS = [
  'Integrated Evidence Generation',
  'Precision Medicine',
  'Biomarker Strategy',
  'Direct-to-Patient',
  'Longevity Science',
  'Medical Affairs',
]

export default function Bio() {
  return (
    <section id="about" style={s.section}>
      {/* Header row */}
      <div style={s.header}>
        <p style={s.eyebrow}>About Dillon</p>
        <h2 style={s.heading}>
          Leading consultant in Integrated Evidence Generation Planning.
        </h2>
      </div>

      {/* Two-column body */}
      <div style={s.body}>
        {/* Sidebar */}
        <div style={s.sidebar}>
          <p style={s.sideLabel}>Focus Areas</p>
          <div style={s.pills}>
            {PILLS.map(p => <span key={p} style={s.pill}>{p}</span>)}
          </div>
          <div style={s.affiliation}>
            <p style={s.sideLabel}>Affiliation</p>
            <p style={s.affiliationName}>Princeton Biopartners</p>
            <a href="mailto:dshokar@princetonbp.com" style={s.email}>dshokar@princetonbp.com</a>
          </div>
        </div>

        {/* Main text */}
        <div style={s.main}>
          {[
            'Dillon Shokar is a leading biopharmaceutical consultant specialising in integrated evidence generation — the discipline of combining clinical, real-world, and economic data to build the evidence base that gets drugs approved, reimbursed, and adopted.',
            'Through Princeton Biopartners and EVEXA, Dillon advises life sciences organisations navigating three structural shifts reshaping healthcare: the rise of AI-powered longevity applications, the maturation of biomarker-driven precision medicine, and the emergence of direct-to-patient distribution models.',
            'His work sits at the intersection of clinical strategy, market access, and investment analysis — helping organisations understand not just what the evidence says, but what it means for commercial outcomes.',
          ].map((para, i) => (
            <p key={i} style={{ ...s.para, ...(i < 2 ? { marginBottom: 22 } : {}) }}>{para}</p>
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
    color: 'var(--orange)', fontWeight: 500, marginBottom: 8,
  },
  heading: {
    fontFamily: 'var(--serif)', fontSize: 'clamp(24px, 2.8vw, 34px)',
    fontWeight: 400, color: 'var(--green)', lineHeight: 1.2,
  },
  body: {
    display: 'grid', gridTemplateColumns: '1fr 1.8fr',
  },
  sidebar: {
    padding: '40px 36px 52px 56px',
    borderRight: '0.5px solid var(--border)',
  },
  sideLabel: {
    fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
    color: 'var(--muted)', marginBottom: 16, fontWeight: 400,
  },
  pills: { display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 },
  pill: {
    fontSize: 11, border: '0.5px solid var(--green)',
    color: 'var(--green)', padding: '5px 12px',
    letterSpacing: '0.05em', textTransform: 'uppercase',
  },
  affiliation: { marginTop: 4 },
  affiliationName: { fontSize: 14, color: 'var(--green)', fontWeight: 400, marginBottom: 6 },
  email: { fontSize: 12, color: 'var(--muted)', fontWeight: 300 },
  main: { padding: '40px 56px 52px 48px' },
  para: {
    fontSize: 15, lineHeight: 1.85, color: 'var(--body)',
    fontWeight: 300, maxWidth: 560,
  },
}
