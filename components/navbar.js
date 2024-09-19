import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FaFacebookF, FaInstagram, FaGoogle, FaChevronDown } from 'react-icons/fa'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isFencingOpen, setIsFencingOpen] = useState(false)
  const [isSocialOpen, setSocialOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isNavbarVisible, setNavbarVisible] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 798)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    
    const handleRouteChange = () => {
      setIsFencingOpen(false)
      setIsSidebarOpen(false)
      setSocialOpen(false)
    }
    
    router.events.on('routeChangeStart', handleRouteChange)
    
    let lastScrollY = window.pageYOffset
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.pageYOffset
          setNavbarVisible(currentScrollY <= lastScrollY || currentScrollY < 50)
          lastScrollY = currentScrollY
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
    setSocialOpen(false)
  }

  const toggleFencing = (e) => {
    e.preventDefault()
    setIsFencingOpen(!isFencingOpen)
  }

  const toggleSocial = (e) => {
    e.preventDefault()
    setSocialOpen(!isSocialOpen)
    setIsSidebarOpen(false)
  }

  return (
    <div className={`${styles.navbarWrapper} ${!isNavbarVisible ? styles.hidden : ''}`}>
      <div className={styles.contactInfo}>
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
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">Seattle Outdoor Living</Link>
        </div>
        <div className={`${styles.navItems} ${isSidebarOpen ? styles.open : ''}`}>
          <div className={styles.navItem}><Link href="/">Home</Link></div>
          <div className={`${styles.dropdown} ${isFencingOpen ? styles.open : ''}`}>
            <button className={styles.dropbtn} onClick={toggleFencing}>
              Fencing
              <i className={`${styles.arrow} ${isFencingOpen ? styles.up : ''}`}></i>
            </button>
            <div className={styles.dropdownContent}>
              <Link href="/fencing/wood">Wood Fences</Link>
              <Link href="/fencing/vinyl">Vinyl Fences</Link>
              <Link href="/fencing/decorative-iron">Decorative Iron</Link>
              <Link href="/fencing/composite">Composite Fences</Link>
            </div>
          </div>
          <div className={styles.navItem}><Link href="/contact">Contact</Link></div>
          <div className={styles.navItem}><Link href="/gallery">Gallery</Link></div>
          <div className={styles.navItem}><Link href="/forms">Forms</Link></div>
          <div className={styles.navItem}><Link href="/news">News</Link></div>
        </div>
        {isMobile && (
          <button 
            className={`${styles.hamburger} ${isSidebarOpen ? styles.open : ''}`} 
            onClick={toggleSidebar}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
      </nav>
    </div>
  )
}