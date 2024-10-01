import Image from 'next/image'
import styles from '../styles/FenceTypeCard.module.css'

export default function FenceTypeCard({ title, description, image, benefits = [], onSelect }) {
  return (
    <div className={styles.card} onClick={onSelect}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        {benefits.length > 0 && (
          <ul>
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}