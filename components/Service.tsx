// import styles from '@styles/components/Components.module.css';
import Image from 'next/image';
// import { ReactElement } from 'react';

interface Article {
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
type ServiceProps = {
  articles: Article[];
};

export const Service: React.FC<ServiceProps> = (props) => {
  return (
    <section>
      {props.articles.map((service) => {
        return (
          <div key={service.id}>
            <h3>{service.title}</h3>
            {service.paid ? '有料' : '無料'}
            {service.body}
            {service.serviceLogo && (
              <Image src={service.serviceLogo.url} width="100" height="100" />
            )}
            {service.serviceName && service.serviceName}
            {service.managementLogo && (
              <Image src={service.managementLogo.url} width="100" height="100" />
            )}
            {service.managementName && service.managementName}
          </div>
        );
      })}
    </section>
  );
};

export default Service;
