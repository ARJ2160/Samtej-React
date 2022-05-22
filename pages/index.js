import Awards from '../components/Awards';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Head from 'next/head';
import Hero from '../components/Hero';
import Navbar from '../components/HeroNavbar';
import Services from '../components/Services';

export default function Home() {
  return (
    <>
      <Head>
        <title>Samtej Industries</title>
      </Head>
      <Navbar />
      <Hero />
      <Awards />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
