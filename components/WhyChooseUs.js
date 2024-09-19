import styles from '../styles/WhyChooseUs.module.css'
import { FaComments, FaAward, FaShieldAlt, FaTools } from 'react-icons/fa'

export default function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUs}>
      <h2>Why Choose Seattle Outdoor Living?</h2>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <FaComments className={styles.icon} />
          <h3>Clear Communication</h3>
          <p>Constantly praised in reviews, we keep you informed throughout the entire process.</p>
        </div>
        <div className={styles.card}>
          <FaAward className={styles.icon} />
          <h3>Top-Notch Quality</h3>
          <p>We leave your property cleaner than we found it—no loose dirt, no trash. We return any subpar materials to ensure a flawless installation.</p>
        </div>
        <div className={styles.card}>
          <FaShieldAlt className={styles.icon} />
          <h3>Iron-Clad Warranty</h3>
          <p>If our workmanship causes a defect, we fix it at no cost. For "Acts of God," we offer discounted repairs. <a href="/warranty">Learn more</a>.</p>
        </div>
        <div className={styles.card}>
          <FaTools className={styles.icon} />
          <h3>Expert Craftsmanship</h3>
          <p>Our expertise ensures the best design for your needs—whether it's shadow box fencing for wind resistance or PostMaster posts for durability.</p>
        </div>
      </div>
    </section>
  )
}