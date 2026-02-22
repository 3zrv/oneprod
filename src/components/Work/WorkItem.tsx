import { useScrollReveal } from '../../hooks/useScrollReveal.ts'
import styles from './Work.module.css'

interface WorkItemProps {
  number: string
  category: string
  name: string
  client: string
  delay: number
}

export default function WorkItem({ number, category, name, client, delay }: WorkItemProps) {
  const ref = useScrollReveal<HTMLDivElement>(delay)

  return (
    <div className={`${styles.item} hoverable reveal`} ref={ref}>
      <div className={styles.number}>{number}</div>
      <div className={styles.thumb}>
        <div className={styles.thumbInner} />
      </div>
      <div className={styles.overlay} />
      <div className={styles.meta}>
        <div className={styles.category}>{category}</div>
        <div className={styles.name}>{name}</div>
        <div className={styles.client}>{client}</div>
      </div>
    </div>
  )
}
