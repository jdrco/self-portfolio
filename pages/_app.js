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
          content="Hi, I'm Jared! I'm a software engineering student at the University of Alberta. Explore my portfolio website to see my experience, projects, and to learn more about my skills in software development and problem-solving."
        />
        <link rel="icon" href="/bear32.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
