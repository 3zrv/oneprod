import { useScrollReveal } from '../../hooks/useScrollReveal.ts'
import WorkItem from './WorkItem.tsx'
import styles from './Work.module.css'

const projects = [
  { number: '001', category: 'Commercial', name: 'Desert Mirage', client: 'Luxury Brand Campaign' },
  { number: '002', category: 'Music Video', name: 'Neon Pulse', client: 'Universal Music MENA' },
  { number: '003', category: 'Documentary', name: 'Roots & Rhythm', client: 'Regional Feature Film' },
]

export default function Work() {
  const headerRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className={styles.work} id="work">
      <div className={`${styles.header} reveal`} ref={headerRef}>
        <h2 className={styles.title}>Selected <em>work</em></h2>
        <a href="#" className={`${styles.viewAll} hoverable`}>View Archive</a>
      </div>
      <div className={styles.grid}>
        {projects.map((project, i) => (
          <WorkItem key={project.number} {...project} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}
