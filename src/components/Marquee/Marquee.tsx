import styles from './Marquee.module.css'

const items = [
  'Brand Films', 'Commercials', 'Music Videos', 'Documentary',
  'Social Content', 'Live Events', 'Post Production', 'Photography',
]

export default function Marquee() {
  const renderItems = () =>
    items.flatMap((item, i) => [
      <span key={`item-${i}`}>{item}</span>,
      <span key={`sep-${i}`} className={styles.accent}>&#x2726;</span>,
    ])

  return (
    <div className={styles.section}>
      <div className={styles.track}>
        {renderItems()}
        {renderItems()}
      </div>
    </div>
  )
}
