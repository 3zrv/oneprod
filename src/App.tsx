import { useState } from 'react'
import Cursor from './components/Cursor/Cursor.tsx'
import Intro from './components/Intro/Intro.tsx'
import Navbar from './components/Navbar/Navbar.tsx'
import Hero from './components/Hero/Hero.tsx'
import Marquee from './components/Marquee/Marquee.tsx'
import Showreel from './components/Showreel/Showreel.tsx'
import Work from './components/Work/Work.tsx'
import Services from './components/Services/Services.tsx'
import Stats from './components/Stats/Stats.tsx'
import CTA from './components/CTA/CTA.tsx'
import Footer from './components/Footer/Footer.tsx'
import './styles/animations.css'

export default function App() {
  const [introActive, setIntroActive] = useState(true)

  return (
    <>
      <Cursor />
      <Intro active={introActive} onEnter={() => setIntroActive(false)} />

      <div
        style={{
          opacity: introActive ? 0 : 1,
          transition: 'opacity .8s ease .3s',
        }}
      >
        <Navbar />
        <Hero siteVisible={!introActive} />
        <Marquee />
        <Showreel />
        <Work />
        <Services />
        <Stats />
        <CTA />
        <Footer />
      </div>
    </>
  )
}
