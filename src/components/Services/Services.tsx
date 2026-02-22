import { useScrollReveal } from '../../hooks/useScrollReveal.ts'
import ServiceCard from './ServiceCard.tsx'
import styles from './Services.module.css'

const services = [
  {
    number: '01',
    name: 'Film Production',
    description: 'End-to-end production from creative concept to final delivery. Commercials, brand films, and narrative content.',
  },
  {
    number: '02',
    name: 'Digital Content',
    description: 'Social-first video campaigns, viral content, and platform-native storytelling that drives engagement.',
  },
  {
    number: '03',
    name: 'Post Production',
    description: 'Color grading, VFX, sound design, and editorial finishing in our state-of-the-art suite.',
  },
  {
    number: '04',
    name: 'Live Events',
    description: 'Multi-camera event coverage, live streaming, and experiential content for global audiences.',
  },
]

export default function Services() {
  const labelRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className={styles.services} id="services">
      <div className={`${styles.label} reveal`} ref={labelRef}>
        What we do
      </div>
      <div className={styles.grid}>
        {services.map((service, i) => (
          <ServiceCard key={service.number} {...service} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}
