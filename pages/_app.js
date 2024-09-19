import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout heroImage={pageProps.heroImage} showHero={pageProps.showHero}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp