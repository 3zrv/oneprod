import { useEffect, useCallback } from 'react'
import styles from './Intro.module.css'
import FireCanvas from './FireCanvas.tsx'
import ScorpionIcon from './ScorpionIcon.tsx'
import SniperIcon from './SniperIcon.tsx'

interface IntroProps {
  active: boolean
  onEnter: () => void
}

export default function Intro({ active, onEnter }: IntroProps) {
  const handleEnter = useCallback(() => {
    if (active) onEnter()
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (active) onEnter()
    }, 10000)
    return () => clearTimeout(timeout)
  }, [active, onEnter])

  return (
    <div
      className={`${styles.intro} ${!active ? styles.hidden : ''}`}
      onClick={handleEnter}
    >
      <FireCanvas active={active} />

      <div className={styles.stage}>
        <div className={`${styles.ownerCard} ${styles.left}`}>
          <div className={styles.frame}>
            <div className={styles.cornerBl} />
            <div className={styles.cornerBr} />
            <div className={styles.iconWrap}>
              <ScorpionIcon />
            </div>
          </div>
          <div className={styles.username}>scorpion_ready</div>
          <div className={styles.title}>Co-Founder</div>
        </div>

        <div className={styles.center}>
          <div className={styles.xLine} />
          <div className={styles.vs}>&amp;</div>
          <div className={styles.xLine} />
        </div>

        <div className={`${styles.ownerCard} ${styles.right}`}>
          <div className={styles.frame}>
            <div className={styles.cornerBl} />
            <div className={styles.cornerBr} />
            <div className={styles.iconWrap}>
              <SniperIcon />
            </div>
          </div>
          <div className={styles.username}>ahmedabdelwahed007</div>
          <div className={styles.title}>Co-Founder</div>
        </div>
      </div>

      <div className={styles.brand}>
        <div className={styles.brandName}>ONE. PRODUCTION</div>
        <div className={styles.brandSub}>Media Production Studio</div>
      </div>

      <button
        className={`${styles.enter} hoverable`}
        onClick={(e) => {
          e.stopPropagation()
          handleEnter()
        }}
      >
        [ Press Enter ]
      </button>
    </div>
  )
}
