import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3>Seattle Outdoor Living</h3>
          <p>Creating beautiful outdoor spaces since 2005. We specialize in high-quality fencing solutions for your home and property.</p>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
        <div className={styles.column}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/fencing">Fencing Services</Link></li>
            <li><Link href="/gallery">Project Gallery</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Fencing Types</h4>
          <ul>
            <li><Link href="/fencing/wood">Wood Fences</Link></li>
            <li><Link href="/fencing/vinyl">Vinyl Fences</Link></li>
            <li><Link href="/fencing/chain-link">Chain Link Fences</Link></li>
            <li><Link href="/fencing/ornamental">Ornamental Fences</Link></li>
            <li><Link href="/fencing/custom">Custom Fencing Solutions</Link></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Contact Us</h4>
          <p>123 Fencing St,<br />Seattle, WA 98101</p>
          <p>Phone: (206) 555-0123</p>
          <p>Email: info@seattleoutdoorliving.com</p>
          <p>Mon-Fri: 8am - 6pm<br />Sat: 10am - 4pm</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; 2023 Seattle Outdoor Living. All rights reserved.</p>
        <p><Link href="/privacy-policy">Privacy Policy</Link> | <Link href="/terms-of-service">Terms of Service</Link></p>
      </div>
    </footer>
  )
}