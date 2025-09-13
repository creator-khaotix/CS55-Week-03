// Import the Link component from Next.js for client-side navigation
import Link from 'next/link';
// Import the Head component from Next.js for managing document head elements
import Head from 'next/head';
// Import the Layout component and siteTitle constant from the layout component
import Layout, { siteTitle } from '../components/layout';
// Import CSS module styles for utility classes
import utilStyles from '../styles/utils.module.css';
 
// Define the default export function component named Home
export default function Home() {
  // Return the JSX structure for the home page
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