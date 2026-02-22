import { useEffect, useCallback, useState } from 'react'
import styles from './Intro.module.css'
import AngledTextCanvas from './AngledTextCanvas.tsx'
import ScorpionIcon from './ScorpionIcon.tsx'
import SniperIcon from './SniperIcon.tsx'

interface IntroProps {
  active: boolean
  onEnter: () => void
}

export default function Intro({ active, onEnter }: IntroProps) {
  const [phase, setPhase] = useState<'text' | 'icons' | 'exit'>('text')

  const handleEnter = useCallback(() => {
    if (active) onEnter()
  }, [active, onEnter])

  useEffect(() => {
    if (!active) return
    const t1 = setTimeout(() => setPhase('icons'), 3000)
    const t2 = setTimeout(() => setPhase('exit'), 5500)
    const t3 = setTimeout(() => onEnter(), 6000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [active, onEnter])

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.key === 'Enter' || e.key === ' ') && active) {
        handleEnter()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [active, handleEnter])

  return (
    <div
      className={`${styles.intro} ${!active ? styles.hidden : ''} ${phase === 'exit' ? styles.exiting : ''}`}
      onClick={handleEnter}
    >
      <AngledTextCanvas active={active && phase === 'text'} />

      <div className={`${styles.brandOverlay} ${phase === 'text' ? styles.brandVisible : styles.brandHidden}`}>
        <div className={styles.brandName}>ONE PRODUCTION</div>
      </div>

      <div className={`${styles.iconsStage} ${phase === 'icons' || phase === 'exit' ? styles.iconsVisible : ''}`}>
        <div className={styles.scorpionWrap}>
          <ScorpionIcon />
          <a className={styles.label} href="https://www.instagram.com/scorpion_ready" target="_blank" rel="noopener noreferrer">@scorpion_ready</a>
        </div>
        <div className={styles.sniperWrap}>
          <SniperIcon firing={phase === 'icons' || phase === 'exit'} />
          <a className={styles.label} href="https://www.instagram.com/ahmedabdelwahed007" target="_blank" rel="noopener noreferrer">@ahmedabdelwahed007</a>
        </div>
      </div>

      <div className={`${styles.bottomBrand} ${phase === 'icons' || phase === 'exit' ? styles.bottomVisible : ''}`}>
        <div className={styles.studioName}>ONE. PRODUCTION</div>
        <div className={styles.studioSub}>Media Production Studio</div>
      </div>
    </div>
  )
}
