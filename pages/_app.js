import Layout from '../components/Layout';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jared Drueco | Home</title>
        <meta name="keywords" content="Jared, Drueco" />
        <meta
          name="description"
          content="Hi, I'm Jared!
              Currently, I'm in my third year of software engineering at
              the University of Alberta as a co-op student."
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
