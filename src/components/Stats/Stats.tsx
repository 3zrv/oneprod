import { useScrollReveal } from '../../hooks/useScrollReveal.ts'
import styles from './Stats.module.css'

const stats = [
  { value: '180', suffix: '+', label: 'Projects Delivered' },
  { value: '14', suffix: '', label: 'Awards Won' },
  { value: '8', suffix: '', label: 'Countries' },
  { value: '2', suffix: 'B', label: 'Total Views' },
]

function StatItem({ value, suffix, label, delay }: { value: string; suffix: string; label: string; delay: number }) {
  const ref = useScrollReveal<HTMLDivElement>(delay)
  return (
    <div className={`${styles.item} reveal`} ref={ref}>
      <div className={styles.number}>
        {value}
        {suffix && <span>{suffix}</span>}
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <div className={styles.stats}>
      {stats.map((stat, i) => (
        <StatItem key={stat.label} {...stat} delay={i * 80} />
      ))}
    </div>
  )
}
