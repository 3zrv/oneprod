import { useScrollReveal } from '../../hooks/useScrollReveal.ts'
import styles from './CTA.module.css'

export default function CTA() {
  const titleRef = useScrollReveal<HTMLHeadingElement>()
  const btnRef = useScrollReveal<HTMLAnchorElement>(80)

  return (
    <section className={styles.cta} id="contact">
      <h2 className={`${styles.title} reveal`} ref={titleRef}>
        Let's create<br />something <em>iconic</em>
      </h2>
      <a
        href="mailto:hello@oneproduction.co"
        className={`${styles.btn} hoverable reveal`}
        ref={btnRef}
      >
        <span>Start a Project</span>
      </a>
    </section>
  )
}
