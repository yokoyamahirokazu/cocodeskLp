import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <script
            type="text/javascript"
            src="//typesquare.com/3/tsst/script/ja/typesquare.js?5e12e48e78a442a4bc1d24ade90393a3"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
