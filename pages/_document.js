import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="zh">
        <Head>
          <link
            rel="shortcut icon"
            type="image/png"
            sizes="196x196"
            href="icons/favicon-196.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="apple-touch-icon" href="icons/apple-icon-180.png" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta
            content="/static/favicons/browserconfig.xml"
            name="msapplication-config"
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
