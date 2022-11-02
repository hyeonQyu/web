import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: process.env.preTheme!,
            }}
          />
          <div id={'portal'} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
