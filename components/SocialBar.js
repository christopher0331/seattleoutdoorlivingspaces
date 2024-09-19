import { useState, useEffect } from 'react'
import { FaFacebookF, FaInstagram, FaGoogle, FaChevronDown } from 'react-icons/fa'
import styles from '../styles/SocialBar.module.css'

export default function SocialBar() {
  const [isSocialOpen, setSocialOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 798)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleSocial = (e) => {
    e.preventDefault()
    setSocialOpen(!isSocialOpen)
  }

  return (
    <div className={styles.socialBar}>
      <div className={styles.contactLinks}>
        <a href="tel:+1234567890">📞 (123) 456-7890</a>
        <a href="mailto:info@example.com">✉️ info@example.com</a>
      </div>
      <div className={`${styles.socialIcons} ${isSocialOpen ? styles.open : ''}`}>
        {isMobile ? (
          <>
            <button 
              className={`${styles.socialMediaButton} ${isSocialOpen ? styles.open : ''}`} 
              onClick={toggleSocial}
            >
              Social Media
              <FaChevronDown className={styles.arrow} />
            </button>
            <div className={styles.socialDropdown}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /> Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a>
              <a href="https://google.com" target="_blank" rel="noopener noreferrer"><FaGoogle /> Google</a>
            </div>
          </>
        ) : (
          <>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer"><FaGoogle /></a>
          </>
        )}
      </div>
    </div>
  )
}