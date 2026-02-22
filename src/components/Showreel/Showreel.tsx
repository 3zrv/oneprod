import { useScrollReveal } from '../../hooks/useScrollReveal.ts'
import styles from './Showreel.module.css'

export default function Showreel() {
  const labelRef = useScrollReveal<HTMLDivElement>()
  const containerRef = useScrollReveal<HTMLDivElement>(80)

  return (
    <section className={styles.showreel} id="reel">
      <div className={`${styles.label} reveal`} ref={labelRef}>
        Showreel 2025
      </div>
      <div className={`${styles.container} hoverable reveal`} ref={containerRef}>
        <div className={styles.visual}>
          <button className={styles.playButton}>
            <div className={styles.playIcon} />
          </button>
        </div>
        <div className={styles.info}>
          <span>03:12</span>
          <span>|</span>
          <span>4K HDR</span>
          <span>|</span>
          <span>Dolby Atmos</span>
        </div>
      </div>
    </section>
  )
}
