import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <div id={'portal'} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
