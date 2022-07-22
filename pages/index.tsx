import { NextPage } from 'next';
import { Hero, Service, Booth, About, Features, Howto, Operation } from '@components';

import ContactSection from '@components/ContactSection';
import SeoContent from '@components/SeoContent';
import { client } from 'framework/client';

interface serviceItems {
  id?: string;
  title?: string;
  paid?: string;
  bodyHtml?: string;
  serviceName: string;
  managementName: string;
  privacyUrl: string;
  serviceLogo?: {
    url: string;
  };
  managementLogo?: {
    url: string;
  };
}
interface boothItems {
  id?: string;
  title?: string;
  access?: string;
  image?: {
    url: string;
  };
}

type IndexProps = {
  serviceItem: serviceItems[];
  boothItem: boothItems[];
};

const Index: NextPage<IndexProps> = (props) => {
  return (
    <>
      <SeoContent />
      <Hero />
      <div
        style={{
          boxSizing: 'content-box',
          margin: '32px auto',
          padding: '0 4vw',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontWeight: 'bold',
            fontSize: '16px',
            color: '#00859b',
            textAlign: 'left',
            display: 'inline-block',
            margin: '0 auto',
            border: 'solid 2px #00859b',
            padding: '16px 20px',
            borderRadius: '4px',
          }}
        >
          CocoDeskオンライン相談サービスの実証実験は7月末をもって終了とさせて頂きます。
          <br />
          ご利用有り難うございました。
        </p>
      </div>
      <About />
      <Features />
      <ContactSection />
      <Service articles={props.serviceItem} />
      <Howto />
      <ContactSection />
      <Booth articles={props.boothItem} />
      <Operation />
      <ContactSection />
    </>
  );
};

export async function getStaticProps() {
  const serviceData = await client.get({ endpoint: 'service' });
  const boothData = await client.get({ endpoint: 'booth' });

  return {
    props: {
      serviceItem: serviceData.contents,
      boothItem: boothData.contents,
    },
  };
}

export default Index;
