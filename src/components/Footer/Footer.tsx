import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.brand}>ONE<span>.</span> PRODUCTION</div>
        <div className={styles.tagline}>
          Media production studio founded by The Scorpion &amp; The Sniper. Precision storytelling since day one.
        </div>
      </div>
      <div className={styles.col}>
        <h4>Navigate</h4>
        <a href="#work" className="hoverable">Work</a>
        <a href="#services" className="hoverable">Services</a>
        <a href="#reel" className="hoverable">Showreel</a>
        <a href="#" className="hoverable">About</a>
      </div>
      <div className={styles.col}>
        <h4>Social</h4>
        <a href="#" className="hoverable">Instagram</a>
        <a href="#" className="hoverable">YouTube</a>
        <a href="#" className="hoverable">Behance</a>
        <a href="#" className="hoverable">LinkedIn</a>
      </div>
      <div className={styles.col}>
        <h4>Contact</h4>
        <a href="mailto:hello@oneproduction.co" className="hoverable">hello@oneproduction.co</a>
        <a href="#" className="hoverable">MENA Region</a>
      </div>
      <div className={styles.bottom}>
        <span>&copy; 2025 ONE PRODUCTION. All rights reserved.</span>
        <span>Built with precision</span>
      </div>
    </footer>
  )
}
