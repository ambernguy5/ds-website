import { useState } from 'react'

const POSTS = [
  {
    tag: 'Press Release',
    title: "Princeton Biopartners' Evexa Named Among Top Evidence Generation Software Platforms of 2026 by Life Sciences Review",
    date: 'May 14, 2026',
    read: 'PRNewswire',
    url: 'https://www.prnewswire.com/news-releases/princeton-biopartners-evexa-named-among-top-evidence-generation-software-platforms-of-2026-by-life-sciences-review-302771824.html',
    bg: '#1a2e20',
  },
  {
    tag: 'Direct-to-Patient',
    title: 'Direct-to-Patient Pharma Models: A Strategic and Regulatory Appraisal of Risks, Opportunities, and the Critical Role of Medical Affairs',
    date: 'Oct 3, 2025',
    read: '8 min read',
    url: 'https://www.dillonshokar.com/post/direct-to-patient-pharma-models-a-strategic-and-regulatory-appraisal-of-risks-opportunities-and-t',
    bg: '#254733',
  },
  {
    tag: 'Longevity Science & AI',
    title: 'GLP‑1, SGLT2 and AI in Longevity: Where the Real Value Lies',
    date: 'Jun 8, 2025',
    read: '4 min read',
    url: 'https://www.dillonshokar.com/post/glp-1-sglt2-and-ai-in-longevity-where-the-real-value-lies',
    bg: '#1C3A28',
  },
  {
    tag: 'Precision Medicine',
    title: 'The End of Empiricism: Merck Bets Big on Biomarker-Led Oncology',
    date: 'May 13, 2025',
    read: '5 min read',
    url: 'https://www.dillonshokar.com/post/test-post-2',
    bg: '#2E5040',
  },
]

export default function Research() {
  return (
    <section id="research" style={s.section}>
      <div style={s.header}>
        <div>
          <p style={s.eyebrow}>Research</p>
          <h2 style={s.title}>Research & Analysis</h2>
          <p style={s.subtitle}>
            Critical analysis and thought leadership on the forces shaping the future of healthcare.
          </p>
        </div>
        <a href="https://www.dillonshokar.com" target="_blank" rel="noopener noreferrer" style={s.viewAll}>
          All Posts ↗
        </a>
      </div>
      <div style={s.body}>
        <div style={s.grid}>
          {POSTS.map(post => <PostCard key={post.url} post={post} />)}
        </div>
      </div>
    </section>
  )
}

function PostCard({ post }) {
  const [hover, setHover] = useState(false)
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ ...s.card, ...(hover ? s.cardHover : {}) }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={{ ...s.cardImg, background: post.bg }}>
        <span style={s.tag}>{post.tag}</span>
      </div>
      <div style={s.cardBody}>
        <p style={s.cardTitle}>{post.title}</p>
        <p style={s.cardMeta}>{post.date} · {post.read}</p>
        <span style={s.readLink}>Read →</span>
      </div>
    </a>
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
    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
  },
  eyebrow: {
    fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
    color: 'var(--orange)', fontWeight: 500, marginBottom: 8,
  },
  title: {
    fontFamily: 'var(--serif)', fontSize: 'clamp(24px, 2.8vw, 34px)',
    fontWeight: 400, color: 'var(--green)', lineHeight: 1.2, marginBottom: 10,
  },
  subtitle: {
    fontSize: 13, color: 'var(--muted)', fontWeight: 300, maxWidth: 460,
  },
  viewAll: {
    fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
    color: 'var(--orange)', textDecoration: 'underline',
    textUnderlineOffset: 4, flexShrink: 0, marginLeft: 24,
  },
  body: {
    padding: '40px 56px 52px',
  },
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 20,
  },
  card: {
    background: '#fff', border: '0.5px solid var(--border)',
    textDecoration: 'none', display: 'block',
    transition: 'transform 0.2s, border-color 0.2s',
  },
  cardHover: {
    transform: 'translateY(-3px)',
    borderColor: 'var(--orange)',
  },
  cardImg: {
    height: 150, display: 'flex',
    alignItems: 'flex-start', padding: 12,
  },
  tag: {
    fontSize: 9, letterSpacing: '0.09em', textTransform: 'uppercase',
    background: 'var(--orange)', color: '#fff', padding: '4px 9px', fontWeight: 500,
  },
  cardBody: { padding: '18px 18px 22px' },
  cardTitle: {
    fontFamily: 'var(--serif)', fontSize: 14, color: 'var(--green)',
    lineHeight: 1.45, marginBottom: 10, fontWeight: 400,
  },
  cardMeta: { fontSize: 11, color: 'var(--muted)', fontWeight: 300, marginBottom: 12 },
  readLink: {
    fontSize: 11, color: 'var(--orange)', letterSpacing: '0.06em',
    textTransform: 'uppercase', textDecoration: 'underline', textUnderlineOffset: 3,
  },
}
