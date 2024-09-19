import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/Fencing.module.css'

export default function FencingType() {
  const router = useRouter()
  const { type } = router.query

  return (
    <>
      <Head>
        <title>{`${type} Fencing - Seattle Outdoor Living`}</title>
        <meta name="description" content={`Learn about our ${type} fencing options in Seattle.`} />
      </Head>
      <div className={styles.container}>
        <h1>{type} Fencing</h1>
        {/* Add your fencing type specific content here */}
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const paths = [
    { params: { type: 'wood' } },
    { params: { type: 'vinyl' } },
    { params: { type: 'chain-link' } },
    { params: { type: 'ornamental' } },
  ]
  return { paths, fallback: false }
}

export async function getStaticProps() {
  return {
    props: {
      heroImage: "https://imagedelivery.net/OHVtjf602XdHccCnziCADA/564989bf-964c-45c3-2ec6-deeeb9dd2800/public",
      showHero: true,
    },
  };
}