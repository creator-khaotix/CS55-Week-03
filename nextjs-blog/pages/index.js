import Link from 'next/link';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.centeredContent}>
      <p><Link href="/posts/first-post">[DUMB DUMB DUMB DUMB DUMB]</Link></p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/621LzO0qWnU?si=PH0BuMLvQHePP1LM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </section>
    </Layout>
  );
}