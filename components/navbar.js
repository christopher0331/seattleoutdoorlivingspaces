import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FaChevronDown, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isFencingOpen, setIsFencingOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50) // Adjust threshold as needed
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleRouteChange = () => {
      setIsFencingOpen(false)
      setIsSidebarOpen(false)
    }
    
    router.events.on('routeChangeStart', handleRouteChange)
    
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const toggleFencing = (e) => {
    e.preventDefault()
    setIsFencingOpen(!isFencingOpen)
  }

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.logo} ${isScrolled ? styles.logoHidden : ''}`}>
        <Link href="/home">
          <Image src="https://imagedelivery.net/OHVtjf602XdHccCnziCADA/e17c9569-a336-4893-bf7b-260b2789d400/gvsLogoClear" alt="Seattle Outdoor Living" width={150} height={150} />
        </Link>
      </div>
      <div className={`${styles.navItems} ${isSidebarOpen ? styles.open : ''}`}>
        <div className={styles.navItem}><Link href="/">Home</Link></div>
        <div className={`${styles.dropdown} ${isFencingOpen ? styles.open : ''}`}>
          <button className={styles.dropbtn} onClick={toggleFencing}>
            Fencing
            <FaChevronDown className={styles.arrow} />
          </button>
          <div className={styles.dropdownContent}>
            <Link href="/fencing/wood">Wood Fences</Link>
            <Link href="/fencing/vinyl">Vinyl Fences</Link>
          </div>
        </div>
        <div className={styles.navItem}><Link href="/contact">Contact Us</Link></div>
        <div className={styles.navItem}><Link href="/forms">Forms</Link></div>
        <div className={styles.navItem}><Link href="/gallery">Gallery</Link></div>
        <div className={styles.navItem}><Link href="/blog">Blog</Link></div>
      </div>
      <div className={styles.socialIcons}>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
      {isMobile && (
        <button 
          className={`${styles.hamburger} ${isSidebarOpen ? styles.open : ''}`} 
          onClick={toggleSidebar}
          aria-label="Toggle Navigation"
          aria-expanded={isSidebarOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}
    </nav>
  )
}