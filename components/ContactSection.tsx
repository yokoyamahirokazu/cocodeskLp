import Image from 'next/image';
import styles from '@styles/components/Components.module.css';
import Button from '@components/Button';

const ContactSection: React.FC = () => {
  return (
    <section className={styles.bg_primary_shade}>
      <div className={styles.section_inner}>
        <div className={styles.contact_flex}>
          <div className={styles.contact_img}>
            <div className={styles.img_box_D}>
              <Image
                src="/images/cocodesk_illust.png"
                alt="遠隔接客サービスRURA"
                layout={'fill'}
                objectFit={'contain'}
              />
            </div>
          </div>
          <div className={styles.contact_txt}>
            <div className={styles.contact_logo}>
              <Image
                src="/images/cocodeskOssLogoHorizontal.svg"
                alt="遠隔接客サービスRURA"
                layout={'fill'}
                objectFit={'contain'}
              />
            </div>
            <p>
              ボックス型プライベート空間で
              <br />
              遠隔地にいる専門家にいつでも気軽にご相談
            </p>
            <Button color="white" size="default" linkTo="https://www.lss-box-reservation.com/home">
              ご予約はこちら
            </Button>
            <Button color="white" fill="outline" size="default" linkTo="/contact" as="/contact">
              お問い合わせ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
