import Link from 'next/link'
import styles from '../styles/CTASection.module.css'

export default function CTASection({ title, description, buttonText, buttonLink }) {
  return (
    <section className={styles.ctaSection}>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href={buttonLink}>
        <a className={styles.ctaButton}>{buttonText}</a>
      </Link>
    </section>
  )
}