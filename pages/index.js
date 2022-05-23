import Awards from '../components/Awards';
import Contact from '../components/Contact';
import Head from 'next/head';
import Hero from '../components/Hero';
import Services from '../components/Services';

export default function Home() {
  return (
    <>
      <Head>
        <title>Samtej Industries</title>
      </Head>
      <Hero />
      <Awards />
      <Services />
      <Contact />
    </>
  );
}
