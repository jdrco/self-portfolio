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
              Currently, studying software engineering at
              the University of Alberta."
        />
        <link rel="shortcut icon" href="/bear.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
