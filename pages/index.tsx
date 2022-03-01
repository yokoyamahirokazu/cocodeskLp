import { NextPage } from 'next';
import { Hero, Service, Booth, About, Features, Howto, Operation } from '@components';

import ContactSection from '@components/ContactSection';
import SeoContent from '@components/SeoContent';
import { client } from 'framework/client';

interface serviceItems {
  id?: string;
  title?: string;
  paid?: string;
  body?: string;
  serviceName: string;
  managementName: string;
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
