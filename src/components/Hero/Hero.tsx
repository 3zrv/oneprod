import { useEffect, useState } from 'react'
import { useParallax } from '../../hooks/useParallax.ts'
import styles from './Hero.module.css'

interface HeroProps {
  siteVisible: boolean
}

export default function Hero({ siteVisible }: HeroProps) {
  const contentRef = useParallax<HTMLDivElement>()
  const [linesRevealed, setLinesRevealed] = useState(false)
  const [bottomRevealed, setBottomRevealed] = useState(false)

  useEffect(() => {
    if (!siteVisible) return

    const lineTimeout = setTimeout(() => setLinesRevealed(true), 600)
    const bottomTimeout = setTimeout(() => setBottomRevealed(true), 1200)

    return () => {
      clearTimeout(lineTimeout)
      clearTimeout(bottomTimeout)
    }
  }, [siteVisible])

  const lines = [
    { text: 'We produce', delay: 0 },
    { text: '<em>stories</em> that', delay: 150 },
    { text: 'hit the mark', delay: 300 },
  ]

  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.content} ref={contentRef}>
        <div className={styles.eyebrow}>Film / Media / Digital Production</div>
        <h1 className={styles.title}>
          {lines.map((line, i) => (
            <span className={styles.line} key={i}>
              <span
                className={`${styles.lineInner} ${linesRevealed ? styles.lineRevealed : ''}`}
                style={{ transitionDelay: `${line.delay}ms` }}
                dangerouslySetInnerHTML={{ __html: line.text }}
              />
            </span>
          ))}
        </h1>
        <div className={`${styles.bottom} ${bottomRevealed ? styles.bottomRevealed : ''}`}>
          <p className={styles.description}>
            Award-winning media production house specializing in commercial films, brand storytelling,
            and digital content that captivates audiences across the MENA region and beyond.
          </p>
          <div className={styles.scroll}>
            <div className={styles.scrollLine} />
            Scroll to explore
          </div>
        </div>
      </div>
    </section>
  )
}
