import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav style={{
        ...s.nav,
        borderBottom: scrolled ? '0.5px solid rgba(247,244,239,0.12)' : '0.5px solid transparent'
      }}>
        <div style={s.brand}>
          <span style={s.logo}>Dillon Shokar</span>
          <span style={s.subBrand}>ThesisRx</span>
        </div>
        <ul style={s.links} className="nav-desktop">
          {[['about','About'],['research','Research'],['pillars','Expertise'],['contact','Contact']].map(([id,label]) => (
            <li key={id} style={{ listStyle:'none' }}>
              <span style={s.link} onClick={() => scrollTo(id)}>{label}</span>
            </li>
          ))}
          <li style={{ listStyle:'none' }}>
            <a href="https://www.princetonbiopartners.com" target="_blank" rel="noopener noreferrer" style={s.link}>Princeton Biopartners ↗</a>
          </li>
        </ul>
        <a href="mailto:dshokar@princetonbp.com" style={s.cta}>Get in Touch</a>
      </nav>

      {menuOpen && (
        <div style={s.mobileMenu}>
          <button onClick={() => setMenuOpen(false)} style={{ ...s.cta, marginBottom: 32 }}>Close</button>
          {[['about','About'],['research','Research'],['pillars','Expertise'],['contact','Contact']].map(([id,label]) => (
            <span key={id} style={s.mobileLink} onClick={() => scrollTo(id)}>{label}</span>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
        }
      `}</style>
    </>
  )
}

const s = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '18px 56px',
    background: 'rgba(28,58,40,0.97)',
    backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
    transition: 'border-color 0.3s',
  },
  brand: { display: 'flex', alignItems: 'baseline', gap: 14 },
  logo: {
    fontFamily: 'var(--serif)', fontSize: 17, fontWeight: 400,
    color: 'var(--cream)', letterSpacing: '0.02em',
  },
  subBrand: {
    fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
    color: 'var(--orange)', fontWeight: 500,
  },
  links: {
    display: 'flex', gap: 32, listStyle: 'none',
  },
  link: {
    fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
    color: 'rgba(247,244,239,0.5)', cursor: 'pointer', fontWeight: 400,
    transition: 'color 0.2s',
  },
  cta: {
    fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
    color: 'var(--orange)', border: '0.5px solid var(--orange)',
    padding: '9px 22px', fontWeight: 500, cursor: 'pointer',
    transition: 'background 0.2s, color 0.2s',
  },
  mobileMenu: {
    position: 'fixed', inset: 0, background: 'var(--green)',
    zIndex: 99, display: 'flex', flexDirection: 'column',
    justifyContent: 'center', alignItems: 'center', gap: 36,
  },
  mobileLink: {
    fontFamily: 'var(--serif)', fontSize: 30, fontWeight: 400,
    color: 'var(--cream)', cursor: 'pointer',
  },
}
