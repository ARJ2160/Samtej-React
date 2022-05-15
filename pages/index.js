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
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='robots' content='index, follow' />
        <meta name='theme-color' content='#000000' />
        <meta name='description' content='Samtej Insutries LLP' />
        <meta
          name='description'
          content='samtej t-shirt printing machine, heat press sublimation, fusing, lamination, card making, laminator, motorized card cutter, die cutting, id card cutter, pvc card cutter, automatic card cutter'
        />
        <meta property='og:title' content='Samtej Industries' />
        <meta property='og:site_name' content='Samtej Industries' />
        <meta
          property='og:description'
          content='Simplifying Card Manufacturing'
        />
        <meta property='og:type' content='page' />
        <meta
          property='og:image'
          content='https://ik.imagekit.io/36athv2v82c8/brand_logo_9GaKgVjDxY.webp?updatedAt=1635853812981'
        />
        <meta property='og:url' content='https://samtejllp.com/' />

        <meta httpEquiv='x-dns-prefetch-control' content='on' />
        <meta httpEquiv='x-xss-protection' content='1; mode=block' />
        <meta httpEquiv='x-content-type-options' content='nosniff' />
        <meta httpEquiv='referrer' content='no-referrer' />
        <meta httpEquiv='cache-control' content='no-cache' />
        <meta httpEquiv='pragma' content='no-cache' />
        <meta httpEquiv='expires' content='0' />

        <link
          rel='shortcut icon'
          href='https://ik.imagekit.io/36athv2v82c8/logo_67NOY6puGB.webp?updatedAt=1638894652358'
          type='image/x-icon'
        />

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

// prevent clickjacking
