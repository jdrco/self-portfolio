import Layout from '../components/Layout';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jared Drueco</title>
        <meta
          name="description"
          content="Hi, I'm Jared! I'm a software engineering student at the University of Alberta. Explore my portfolio website to see my experience, projects, and to learn more about my skills in software development and problem-solving."
        />
        <link rel="icon" href="/red48.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
