import Head from 'next/head';
import Navbar from './navbar';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';

export default function Layout({ children, heroImage, showHero = true }) {
  return (
    <>
      <Head>
        <title>Seattle Outdoor Living</title>
        <meta name="description" content="Seattle's premier outdoor living solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {showHero && <Header heroImage={heroImage} />}
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </>
  );
}