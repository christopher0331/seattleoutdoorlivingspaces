import Head from 'next/head'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import FeaturedWork from '../components/FeaturedWork'
import FencingFAQ from '../components/FencingFAQ'
import CallToAction from '../components/CallToAction'
import LocationsMap from '../components/LocationsMap'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import SvgComponent from '../components/SvgComponent'

export default function Home() {
  const schema = {
    "@context": "http://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Seattle Outdoor Living",
        "url": "https://seattleoutdoorliving.com",
        "logo": "/logo.png", // Replace with actual path to your logo
        "description": "Seattle Outdoor Living specializes in creating beautiful outdoor spaces, offering high-quality fencing solutions for homes and properties in Seattle and surrounding areas since 2005.",
        "telephone": "+1234567890", // Replace with actual phone number
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "450 Alaskan Way",
          "addressLocality": "Seattle",
          "addressRegion": "WA",
          "postalCode": "98104",
          "addressCountry": "US"
        },
        "areaServed": [
          "Seattle, WA",
          "Bellevue, WA",
          "Kirkland, WA",
          "Redmond, WA",
          "Sammamish, WA",
          "Issaquah, WA",
          "Renton, WA",
          "Mercer Island, WA",
          "Bothell, WA",
          "Edmonds, WA",
          "Shoreline, WA",
          "Woodinville, WA",
          "Burien",
          "Newcastle, WA",
          "Kenmore, WA",
          "Maple Valley, WA"
        ],
        "hasMap": "https://www.google.com/maps/place/450+Alaskan+Way,+Seattle,+WA+98104"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Seattle Outdoor Living - Expert Fencing Contractors in Seattle</title>
        <meta name="description" content="Seattle's premier fencing contractors serving Downtown, West Seattle, Queen Anne, SeaTac, Ballard, and Green Lake areas. Quality fences for all terrains and needs." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <main className={styles.main}>
        <WhyChooseUs />
        <Testimonials />
        <FencingFAQ />
        <CallToAction />
        <FeaturedWork />
        <LocationsMap />
        <div className={styles.callToActionMargin}>
          <CallToAction />
        </div>
        <div className={styles.svgComponentWrapper}>
          <SvgComponent />
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      heroImage: "https://imagedelivery.net/OHVtjf602XdHccCnziCADA/564989bf-964c-45c3-2ec6-deeeb9dd2800/public",
      showHero: true
    }
  }
}