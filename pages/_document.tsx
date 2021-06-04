import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/BigCaslon-Regular.ttf"
            as="font"
            type="font/ttf"
          />
          <link
            rel="preload"
            href="/fonts/HelveticaNeue-Light.ttf"
            as="font"
            type="font/ttf"
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
