import { useScrollReveal } from '../../hooks/useScrollReveal.ts'
import styles from './Services.module.css'

interface ServiceCardProps {
  number: string
  name: string
  description: string
  delay: number
}

export default function ServiceCard({ number, name, description, delay }: ServiceCardProps) {
  const ref = useScrollReveal<HTMLDivElement>(delay)

  return (
    <div className={`${styles.card} hoverable reveal`} ref={ref}>
      <div className={styles.number}>{number}</div>
      <div className={styles.arrow}>
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.desc}>{description}</div>
    </div>
  )
}
