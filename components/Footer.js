import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.companyInfo}>
            <h3>Seattle Outdoor Living!</h3>
            <p>Creating beautiful outdoor spaces since 2005. We specialize in high-quality fencing solutions for your home and property.</p>
            <div className={styles.socialIcons}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>
          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/fencing">Fencing Services</Link></li>
                <li><Link href="/gallery">Project Gallery</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className={styles.linkColumn}>
              <h4>Fencing Types</h4>
              <ul>
                <li><Link href="/fencing/wood">Wood Fences</Link></li>
                <li><Link href="/fencing/vinyl">Vinyl Fences</Link></li>
                <li><Link href="/fencing/chain-link">Chain Link Fences</Link></li>
                <li><Link href="/fencing/ornamental">Ornamental Fences</Link></li>
              </ul>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <h4>Contact Us</h4>
            <ul>
              <li>
                <FaMapMarkerAlt aria-hidden="true" />
                <span>450 Alaskan Way S, Seattle, WA 98104</span>
              </li>
              <li>
                <FaPhone aria-hidden="true" />
                <a href="tel:+12062474308">(206) 247-4308</a>
              </li>
              <li>
                <FaEnvelope aria-hidden="true" />
                <a href="mailto:chris@greenviewsolutions.net">chris@greenviewsolutions.net</a>
              </li>
              <li>
                <FaClock aria-hidden="true" />
                <span>Mon-Fri: 8am - 6pm<br />Sat: 10am - 4pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Seattle Outdoor Living. All rights reserved.</p>
        <p><Link href="/privacy-policy">Privacy Policy</Link> | <Link href="/terms-of-service">Terms of Service</Link></p>
      </div>
    </footer>
  )
}
