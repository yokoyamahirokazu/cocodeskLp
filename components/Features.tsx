import styles from '@styles/components/Components.module.css';
import Image from 'next/image';

export const Features: React.FC = () => {
  return (
    <section id="features">
      <div className={styles.section_inner}>
        <h2>特徴・機能</h2>

        <div className={styles.flex_wrapper}>
          <div className={styles.flex_box_third}>
            <div className={styles.box_white}>
              <div className={styles.img_box_B}>
                <Image
                  src="/images/features_1.png"
                  alt="簡単な操作"
                  layout={'fill'}
                  objectFit={'cover'}
                />
              </div>
              <div className={styles.box_white_txt}>
                <h3>簡単な操作</h3>
                <p>ブースは簡単なディスプレイ操作だけで利用可能です。</p>
              </div>
            </div>
          </div>
          <div className={styles.flex_box_third}>
            <div className={styles.box_white}>
              <div className={styles.img_box_B}>
                <Image
                  src="/images/features_2.png"
                  alt="予約機能"
                  layout={'fill'}
                  objectFit={'cover'}
                />
              </div>
              <div className={styles.box_white_txt}>
                <h3>予約機能</h3>
                <p>
                  予約サイトにて予約して利用することもできます。お好みのブース設置場所、サービス、日時を選択できます。
                </p>
              </div>
            </div>
          </div>
          <div className={styles.flex_box_third}>
            <div className={styles.box_white}>
              <div className={styles.img_box_B}>
                <Image
                  src="/images/features_3.png"
                  alt="快適な利用空間"
                  layout={'fill'}
                  objectFit={'cover'}
                />
              </div>
              <div className={styles.box_white_txt}>
                <h3>快適な利用空間</h3>
                <p>
                  快適性や利便性、セキュリティ、感染抑制への対策に至るまで、こだわって開発されたワークブース「ココデスク」を使用。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
