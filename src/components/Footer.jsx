const COLS = [
  {
    title: 'Navigate',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Expertise', href: '#pillars' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Research',
    links: [
      { label: 'Precision Medicine', href: 'https://www.dillonshokar.com/blog/categories/precision-medicine-investments' },
      { label: 'Longevity Science & AI', href: 'https://www.dillonshokar.com/blog/categories/longevity-science-ai' },
      { label: 'Direct-to-Patient', href: 'https://www.dillonshokar.com/blog/categories/direct-to-patient-healthcare' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'dshokar@princetonbp.com', href: 'mailto:dshokar@princetonbp.com' },
      { label: 'Princeton Biopartners ↗', href: 'https://www.princetonbiopartners.com' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dillon-shokar/' },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={s.footer}>
      <div style={s.top}>
        <div>
          <p style={s.brand}>Dillon Shokar</p>
          <p style={s.tagline}>
            Critical analysis at the frontier of biopharmaceutical strategy and healthcare investment.
          </p>
        </div>
        {COLS.map(col => (
          <div key={col.title}>
            <p style={s.colTitle}>{col.title}</p>
            {col.links.map(link => (
              <a key={link.label} href={link.href} style={s.colLink}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div style={s.bottom}>
        <p style={s.copy}>© {new Date().getFullYear()} Dillon Shokar · Princeton Biopartners</p>
        <div style={s.legal}>
          <a href="#" style={s.legalLink}>Privacy</a>
          <a href="#" style={s.legalLink}>Terms</a>
        </div>
      </div>
    </footer>
  )
}

const s = {
  footer: { background: 'var(--green-deep)', padding: '68px 56px 36px' },
  top: {
    display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 44,
    marginBottom: 48, paddingBottom: 44,
    borderBottom: '0.5px solid rgba(247,244,239,0.07)',
  },
  brand: {
    fontFamily: 'var(--serif)', fontSize: 19, fontWeight: 400,
    color: 'var(--cream)', marginBottom: 4,
  },
  subBrand: {
    fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
    color: 'var(--orange)', fontWeight: 500, marginBottom: 14,
  },
  tagline: {
    fontSize: 13, color: 'rgba(247,244,239,0.3)',
    lineHeight: 1.75, fontWeight: 300, maxWidth: 220,
  },
  colTitle: {
    fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
    color: 'var(--orange)', marginBottom: 18, fontWeight: 500,
  },
  colLink: {
    display: 'block', fontSize: 13, color: 'rgba(247,244,239,0.35)',
    marginBottom: 12, fontWeight: 300, textDecoration: 'none',
    transition: 'color 0.2s',
  },
  bottom: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  copy: { fontSize: 11, color: 'rgba(247,244,239,0.18)', letterSpacing: '0.04em' },
  legal: { display: 'flex', gap: 20 },
  legalLink: {
    fontSize: 11, color: 'rgba(247,244,239,0.22)', textDecoration: 'underline',
    textUnderlineOffset: 3, letterSpacing: '0.06em', textTransform: 'uppercase',
  },
}
