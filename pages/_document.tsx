import Document, { Html, Head, Main, NextScript } from "next/document";
import Navbar from "../components/Navbar";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/BigCarslon-Regular.ttf"
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
        <Navbar />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
