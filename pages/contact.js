import Head from 'next/head'
import ContactForm from '../components/ContactForm'
import Testimonials from '../components/Testimonials'
import styles from '../styles/Contact.module.css'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Seattle Outdoor Living</title>
        <meta name="description" content="Get in touch with Seattle Outdoor Living for all your fencing needs. We serve Seattle and surrounding areas." />
      </Head>

      <main className={styles.pageContainer}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarSection}>
            <h2 className={styles.sidebarTitle}>Financing Options Available!</h2>
            <ul className={styles.sidebarList}>
              <li>Get an Instant Decision</li>
              <li>Prequalify With No Impact to Your Credit</li>
              <li>Financing Packages Up to $75,000</li>
            </ul>
          </div>

          <div className={styles.sidebarSection}>
            <h2 className={styles.sidebarTitle}>What to expect from Seattle Outdoor Living</h2>
            <ul className={styles.sidebarList}>
              <li>Top Rated Customer Service</li>
              <li>Professional Team</li>
              <li>Licensed, Bonded & Insured</li>
              <li>Industry Best Warranty</li>
              <li>GVS Fence Quality</li>
              <li>GVS Fence Selection</li>
            </ul>
          </div>
        </aside>
        <div className={styles.mainContent}>
          <h1 className={styles.title}>Contact Us</h1>
          <div className={styles.formBackground}>
            <ContactForm />
          </div>
        </div>
      </main>
      <div className={styles.testimonialWrapper}>
        <Testimonials />
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  return {
    props: {
      heroImage: "https://imagedelivery.net/OHVtjf602XdHccCnziCADA/564989bf-964c-45c3-2ec6-deeeb9dd2800/public",
      showHero: true
    }
  }
}