import styles from '@styles/components/Hero.module.css';
import Image from 'next/image';
import Button from '@components/Button';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_flex}>
        <div className={styles.hero_flex_left}>
          <div className={styles.balloons}>
            <div className={styles.balloon1}>いつでも</div>
            <div className={styles.balloon2}>ココで</div>
            <div className={styles.balloon3}>ご相談</div>
          </div>
          <div className={styles.hero_imgae}>
            <Image
              src="/images/hero_image.png"
              alt="CocoDeskオンライン相談サービスイメージ"
              layout={'fill'}
              objectFit={'contain'}
              priority
            />
          </div>
        </div>
        <div className={styles.hero_flex_right}>
          <div className={styles.hero_logo}>
            <Image
              src="/images/cocodeskOssLogoVertical.svg"
              alt="CocoDeskオンライン相談サービスロゴ"
              layout={'fill'}
              objectFit={'contain'}
              priority
            />
          </div>
          <h1>
            ボックス型プライベート空間で
            <br />
            遠隔地にいる専門家にいつでも気軽にご相談
            <br />
            「CocoDeskオンライン相談サービス」
          </h1>

          <Button color="primary" size="default" linkTo="https://www.lss-box-reservation.com/home">
            ご予約はこちら
          </Button>
          <Button fill="outline" color="primary" size="default" linkTo="/contact" as="/contact">
            お問い合わせ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
