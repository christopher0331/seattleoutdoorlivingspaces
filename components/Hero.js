import styles from '../styles/Hero.module.css'

export default function Hero({ title, subtitle, backgroundImage }) {
  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.heroContent}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}