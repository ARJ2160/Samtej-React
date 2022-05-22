import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

          <meta name="robots" content="index, follow" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Samtej Insutries LLP" />
          {/* <meta
            name="description"
            content="samtej t-shirt printing machine, heat press sublimation, fusing, lamination, card making, laminator, motorized card cutter, die cutting, id card cutter, pvc card cutter, automatic card cutter"
          /> */}
          <meta
            name="description"
            content="The company was founded in 2006 and rebranded as Samtej Industries LLP in 2020 to provide customers with Smart Card solutions."
          />
          <meta property="og:title" content="Samtej Industries" />
          <meta property="og:site_name" content="Samtej Industries" />
          <meta
            property="og:description"
            content="The company was founded in 2006 and rebranded as Samtej Industries LLP in 2020 to provide customers with Smart Card solutions."
          />
          <meta property="og:type" content="page" />
          <meta
            property="og:image"
            content="https://ik.imagekit.io/36athv2v82c8/brand_logo_9GaKgVjDxY.webp?updatedAt=1635853812981"
          />
          <meta property="og:url" content="https://samtejllp.com/" />
          <link
            rel="shortcut icon"
            href="https://ik.imagekit.io/36athv2v82c8/logo_67NOY6puGB.webp?updatedAt=1638894652358"
            type="image/x-icon"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
