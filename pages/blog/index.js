import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData } from '../../utils/markdownParser';
import styles from '../../styles/Blog.module.css';

export default function Blog({ allPostsData }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = allPostsData.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>GreenView Solutions - News</title>
        <meta name="description" content="Latest news and articles from GreenView Solutions" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Latest News</h1>

        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        <div className={styles.grid}>
          {filteredPosts.map(({ id, date, title, excerpt, author, coverImage }) => (
            <Link href={`/blog/${id}`} key={id}>
              <a className={styles.card}>
                <div className={styles.imageContainer}>
                  <Image
                    src={coverImage || `https://source.unsplash.com/random/800x600?${title.split(' ').join(',')}`}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className={styles.cardContent}>
                  <h2>{title}</h2>
                  <p className={styles.excerpt}>{excerpt}</p>
                  <div className={styles.meta}>
                    <span className={styles.author}>{author}</span>
                    <span className={styles.date}>{new Date(date).toLocaleDateString()}</span>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}