import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import PullQuote from './components/PullQuote'
import Bio from './components/Bio'
import Stats from './components/Stats'
import Research from './components/Research'
import Pillars from './components/Pillars'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 63 }}>
        <Hero />
        <PullQuote />
        <Bio />
        <Stats />
        <Research />
        <Pillars />
      </main>
      <Footer />
    </>
  )
}
