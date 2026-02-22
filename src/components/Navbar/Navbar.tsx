import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        ONE<span>.</span> PRODUCTION
      </div>
      <ul className={styles.links}>
        <li><a href="#work" className="hoverable">Work</a></li>
        <li><a href="#services" className="hoverable">Services</a></li>
        <li><a href="#reel" className="hoverable">Reel</a></li>
        <li><a href="#contact" className="hoverable">Contact</a></li>
      </ul>
    </nav>
  )
}
