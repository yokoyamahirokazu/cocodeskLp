import styles from '@styles/components/Components.module.css';
import Image from 'next/image';
import Button from '@components/Button';
import Link from 'next/link';

interface Article {
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
        <div className={styles.service_content}>
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
                      <div dangerouslySetInnerHTML={{ __html: service.bodyHtml }} />
                      <div className={styles.logo_wrapper}>
                        <div className={styles.logo_box_wrapper}>
                          <h4 className={styles.headline_line}>
                            <span>提供サービス</span>
                          </h4>
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
                            <p>
                              {service.serviceName && service.serviceName}
                              {service.id === 'fwxrfuva6' && (
                                <>
                                  <br />
                                  弁護士法人Adire法律事務所（第一東京弁護士会所属）
                                </>
                              )}
                            </p>
                          </div>
                        </div>
                        {service.managementName && (
                          <div className={styles.logo_box_wrapper}>
                            <h4 className={styles.headline_line}>
                              <span>運営企業</span>
                            </h4>
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
                      {service.privacyUrl && (
                        <div style={{ margin: '16px 0 0 ' }}>
                          <p className={styles.small}>
                            <Link href={service.privacyUrl}>
                              <a target="_brank">プライバシーポリシーはこちら</a>
                            </Link>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.box_border}>
            <h3>各サービスの営業時間について</h3>
            <p>
              各サービスの営業時間は、ご利用いただくブース、曜日によって異なります。
              <br />
              詳しくは下記「各サービスの営業時間はこちら」よりご確認ください。
            </p>
            <Button
              color="primary"
              size="default"
              linkTo="https://www.lss-box-reservation.com/service-guide"
            >
              各サービスの営業時間はこちら
            </Button>
          </div>
          {/* <div className={styles.btn_wrapper}>
            <p>サービスについて、詳しくは予約サイトをご覧ください</p>
            <Button
              color="primary"
              size="default"
              linkTo="https://www.lss-box-reservation.com/service-guide"
            >
              サービスを詳しく見る
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Service;
