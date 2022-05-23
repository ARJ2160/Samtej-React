import '../styles/globals.css';
import 'aos/dist/aos.css';

import Aos from 'aos';
import Head from 'next/head';
import Layout from '../components/Layout.jsx';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <>
      <Layout>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
          <meta itemProp='name' content='Samtej Industries' />
          <meta name='author' content='Samtej Industries' />
          <meta name='copyright' content='Samtej Industries' />
          <meta name='robots' content='index, follow' />
          <meta name='language' content='en-us' />
          <meta
            itemProp='image'
            content='https://ik.imagekit.io/36athv2v82c8/brand_logo_9GaKgVjDxY.webp?updatedAt=1635853812981'
          />
          <meta
            name='keywords'
            content='samtej heat press sublimation, fusing, lamination, card making, laminator, motorized card cutter, die cutting, id card cutter, pvc card cutter, automatic card cutter, T-shirt printing machine, Samtej Industries Llp, Pune'
          />
          <meta
            itemProp='description'
            content='Card Fusing Machine, ID Card Printing Machine & Card Making Machine Manufacturer offered by Samtej Industries Llp from Pune, Maharashtra, India'
          />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1'
          />
          <meta
            name='theme-color'
            media='(prefers-color-scheme: light)'
            content='white'
          />
          <meta
            name='theme-color'
            media='(prefers-color-scheme: dark)'
            content='black'
          />
          <meta property='og:type' content='website' />;
          <meta property='og:url' content='https://samtejllp.com/' />
          <meta property='og:site_name' content='Samtej Industries' />
          <meta property='og:title' content='Samtej Industries' />
          <meta
            property='og:image'
            content='https://ik.imagekit.io/36athv2v82c8/brand_logo_9GaKgVjDxY.webp?updatedAt=1635853812981'
          />
          <meta
            property='og:image:url'
            content='https://ik.imagekit.io/36athv2v82c8/brand_logo_9GaKgVjDxY.webp?updatedAt=1635853812981'
          />
          <meta
            property='og:description'
            content='Card Fusing Machine, ID Card Printing Machine & Card Making Machine Manufacturer offered by Samtej Industries Llp from Pune, Maharashtra, India'
          />
          <link
            rel='shortcut icon'
            href='https://ik.imagekit.io/36athv2v82c8/logo_67NOY6puGB.webp?updatedAt=1638894652358'
            type='image/x-icon'
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
