import styles from '@styles/components/Components.module.css';
import Image from 'next/image';
import Button from '@components/Button';

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
    <section id="service" className={styles.bg_primary_05}>
      <div className={styles.section_inner}>
        <h2>
          利用いただけるサービス
          <span className={styles.subtitle}>1つのブースで多数のサービスを取り扱っております。</span>
        </h2>
        <div className={styles.flex_wrapper}>
          {props.articles.map((service) => {
            return (
              <div key={service.id} className={styles.flex_box_half}>
                <div className={styles.box_white}>
                  <h3 className={styles.service_title}>
                    {service.paid ? <span className={styles.paid}>有料</span> : <span>無料</span>}
                    {service.title}
                  </h3>
                  <div className={styles.box_white_txt}>
                    <p>{service.body}</p>
                    <div className={styles.logo_wrapper}>
                      <div className={styles.logo_box_wrapper}>
                        <h4>提供サービス</h4>
                        <div className={styles.logo_box}>
                          <div className={styles.img_box_C}>
                            {service.serviceLogo && (
                              <Image
                                src={service.serviceLogo.url}
                                layout={'fill'}
                                objectFit={'contain'}
                                alt={service.serviceName && service.serviceName}
                              />
                            )}
                          </div>
                          <p>{service.serviceName && service.serviceName}</p>
                        </div>
                      </div>
                      {service.managementName && (
                        <div className={styles.logo_box_wrapper}>
                          <h4>運営企業</h4>
                          <div className={styles.logo_box}>
                            {service.managementLogo && (
                              <div className={styles.img_box_C}>
                                <Image
                                  src={service.managementLogo.url}
                                  layout={'fill'}
                                  objectFit={'contain'}
                                  alt={service.managementName && service.managementName}
                                />
                              </div>
                            )}
                            <p>{service.managementName}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.btn_wrapper}>
          <p>サービスについて、詳しくは予約サイトをご覧ください</p>
          <Button
            color="primary"
            size="default"
            linkTo="https://www.lss-box-reservation.com/service-guide"
          >
            サービスを詳しく見る
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Service;
