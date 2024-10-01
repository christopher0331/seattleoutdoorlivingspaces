import Head from 'next/head';
import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../utils/markdownParser';
import styles from '../../styles/BlogPost.module.css';

export default function BlogPost({ postData }) {
  return (
    <Layout heroImage={postData.heroImage || postData.coverImage} showHero={true}>
      <Head>
        <title>{postData.title} | GreenView Solutions</title>
        <meta name="description" content={postData.excerpt} />
      </Head>

      <article className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>{postData.title}</h1>
          <div className={styles.meta}>
            <span className={styles.date}>{postData.date}</span>
            <span className={styles.author}>By {postData.author}</span>
          </div>
        </header>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  };
}