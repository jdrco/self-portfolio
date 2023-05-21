import Layout from '../components/Layout';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Jared Drueco</title>
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
    </div>
  );
}

export default MyApp;
