// ── Edit these values to update the credentials bar ──────────────────────────
const STATS = [
  { num: '12+',  label: 'Years in biopharmaceuticals' },
  { num: '40+',  label: 'Organisations advised'       },
  { num: '3',    label: 'ThesisRx research pillars'   },
]
// ─────────────────────────────────────────────────────────────────────────────

export default function Stats() {
  return (
    <section style={s.section}>
      {STATS.map((stat, i) => (
        <div key={stat.label} style={{
          ...s.item,
          ...(i < STATS.length - 1 ? { borderRight: '0.5px solid rgba(247,244,239,0.1)' } : {})
        }}>
          <span style={s.num}>{stat.num}</span>
          <span style={s.label}>{stat.label}</span>
        </div>
      ))}
    </section>
  )
}

const s = {
  section: {
    background: 'var(--green)',
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
    borderTop: '0.5px solid var(--border)',
  },
  item: {
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    padding: '60px 36px', gap: 12,
  },
  num: {
    fontFamily: 'var(--serif)', fontSize: 'clamp(40px, 5vw, 52px)',
    fontWeight: 400, color: 'var(--orange)', lineHeight: 1,
  },
  label: {
    fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
    color: 'rgba(247,244,239,0.4)', fontWeight: 400, textAlign: 'center',
  },
}
