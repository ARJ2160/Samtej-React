import '../styles/globals.css';
import 'aos/dist/aos.css';

import Aos from 'aos';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
