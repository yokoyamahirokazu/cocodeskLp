import Head from 'next/head';
import { config } from '@site.config';

interface Props {
  pageTitle?: string;
  pageDescription?: string;
  pageUrl?: string;
  ogpImg?: string;
  noIndex?: string;
}

const SeoContent = ({ pageTitle, pageDescription, pageUrl, ogpImg, noIndex }: Props) => {
  const defaultTitle = 'CocoDeskオンライン相談サービス';
  const defaultDescription =
    'CocoDeskオンライン相談サービスでは、不動産賃貸相談や占い、保険の相談などをブースの中で受けていただくことができます。予約利用だけでなくふらっと立ち寄ることもできます。';
  const defaultPageUrl = config.baseUrl;
  const defaultOgpImg = `${config.baseUrl}/images/og_image.png`;

  const title = pageTitle ? `${pageTitle} | CocoDeskオンライン相談サービス` : defaultTitle;
  const description = pageDescription ? pageDescription : defaultDescription;
  const url = pageUrl ? `${defaultPageUrl}${pageUrl}` : defaultPageUrl;
  const imgUrl = ogpImg ? ogpImg : defaultOgpImg;

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex" />}
      <meta name="robots" content="noindex" />
    </Head>
  );
};

export default SeoContent;
