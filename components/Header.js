import Image from 'next/image'
import styles from '../styles/Header.module.css'

export default function Header({ heroImage, showHero = true }) {
  if (!showHero) return null;

  return (
    <header className={styles.header}>
      <div className={styles.heroImageWrapper}>
        <Image
          src={heroImage}
          alt="Seattle Outdoor Living Hero Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      <div className={styles.heroContent}>
        <h1>Seattle Outdoor Living</h1>
        <p>Creating beautiful outdoor spaces since 2005</p>
      </div>
    </header>
  )
}