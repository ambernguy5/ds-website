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
        </div>

        {/* Desktop links */}
        <ul style={s.links} className="nav-desktop">
          {[['about','About'],['research','Research'],['pillars','Expertise']].map(([id,label]) => (
            <li key={id} style={{ listStyle:'none' }}>
              <span style={s.link} onClick={() => scrollTo(id)}>{label}</span>
            </li>
          ))}
          <li style={{ listStyle:'none' }}>
            <a href="https://www.princetonbiopartners.com" target="_blank" rel="noopener noreferrer" style={s.link}>Princeton Biopartners ↗</a>
          </li>
        </ul>

        <a href="mailto:dshokar@princetonbp.com" style={s.cta} className="nav-desktop">Get in Touch</a>

        {/* Hamburger button — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          style={s.hamburger}
          aria-label="Toggle menu"
        >
          <span style={{ ...s.bar, transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ ...s.bar, opacity: menuOpen ? 0 : 1 }} />
          <span style={{ ...s.bar, transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div className="nav-mobile-dropdown" style={{
        ...s.dropdown,
        maxHeight: menuOpen ? 400 : 0,
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'auto' : 'none',
      }}>
        {[['about','About'],['research','Research'],['pillars','Expertise']].map(([id,label]) => (
          <span key={id} style={s.dropdownLink} onClick={() => scrollTo(id)}>{label}</span>
        ))}
        <a href="https://www.princetonbiopartners.com" target="_blank" rel="noopener noreferrer" style={s.dropdownLink}>
          Princeton Biopartners ↗
        </a>
        <a href="mailto:dshokar@princetonbp.com" style={{ ...s.dropdownLink, color: 'var(--orange)' }}>
          Get in Touch
        </a>
      </div>

      <style>{`
        .nav-hamburger { display: none; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
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
    transition: 'background 0.2s, color 0.2s', textDecoration: 'none',
  },
  hamburger: {
    flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: 4,
  },
  bar: {
    display: 'block', width: 22, height: 1.5,
    background: 'var(--cream)', transition: 'transform 0.25s, opacity 0.25s',
  },
  dropdown: {
    position: 'fixed', top: 57, left: 0, right: 0, zIndex: 99,
    background: 'rgba(28,58,40,0.98)',
    backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
    display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
    padding: '0 32px',
    overflow: 'hidden',
    transition: 'max-height 0.35s ease, opacity 0.25s ease',
    borderBottom: '0.5px solid rgba(247,244,239,0.12)',
  },
  dropdownLink: {
    fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase',
    color: 'rgba(247,244,239,0.75)', cursor: 'pointer', fontWeight: 400,
    padding: '16px 0',
    borderBottom: '0.5px solid rgba(247,244,239,0.08)',
    width: '100%', textDecoration: 'none',
  },
}
