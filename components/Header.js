import Image from 'next/image'
import Navbar from './navbar';
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
        <Navbar />
      </div>
      <div className={styles.heroContent}>
        <h1>GreenView Solutions</h1>
        <p>Transforming outdoor spaces into breathtaking sanctuaries since 20015</p>
      </div>
    </header>
  )
}