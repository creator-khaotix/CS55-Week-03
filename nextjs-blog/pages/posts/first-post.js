import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
 
export default function FirstPost() {
    return (
      <>
        <Head>
          <title>First Post</title>
        </Head>
        
        <h2>The imbed was in case you didn't get the reference.</h2>
        <h2>
          <Link href="/">← Forgive me if you are Mormon</Link>
        </h2>
      </>
    );
  }