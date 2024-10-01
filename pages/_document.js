import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const csp = `
      default-src 'self';
      script-src 'self' 'unsafe-eval' https://maps.googleapis.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' data: https: blob:;
      font-src 'self' https://fonts.gstatic.com;
      connect-src 'self' https://379pj43m47.execute-api.us-west-2.amazonaws.com https://maps.googleapis.com https://clientstream.launchdarkly.com;
      frame-src 'self' https://www.google.com;
    `.replace(/\s{2,}/g, ' ').trim();

    return (
      <Html>
        <Head>
          {process.env.NEXT_PUBLIC_ENABLE_CSP === 'true' && (
            <meta
              httpEquiv="Content-Security-Policy"
              content={csp}
            />
          )}
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