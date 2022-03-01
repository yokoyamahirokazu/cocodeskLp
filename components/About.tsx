import styles from '@styles/components/Components.module.css';
import Image from 'next/image';

export const About: React.FC = () => {
  return (
    <section id="about" className={styles.bg_primary_three_quarter}>
      <div className={styles.section_inner}>
        <h2>CocoDesk オンライン相談サービスとは？</h2>
        <p className={styles.about_lead}>
          駅ナカや商業施設で展開する「CocoDesk」というワークブースを活用し、遠隔地にいる専門家（サービス担当者）にオンラインで相談できるサービスです。
          <br />
          通勤や通学、お買い物の際に、いつでも手軽に利用でき、予約での利用も可能です。
          <br />
          また、さまざまな事業者のサービスを1つのブースで利用できるのも特徴です。
        </p>
        <div className={styles.flex_wrapper}>
          <div className={styles.flex_box_half}>
            <div className={styles.box_white}>
              <div className={styles.img_box_A}>
                <Image
                  src="/images/about_1.png"
                  alt="ワークブースを活用"
                  layout={'fill'}
                  objectFit={'cover'}
                />
              </div>
              <div className={styles.box_white_txt}>
                <h3>ワークブースを活用</h3>
                <p>
                  CocoDeskオンライン相談サービスは、CocoDesk（ココデスク）というワークブースを活用しています。
                </p>
              </div>
            </div>
          </div>
          <div className={styles.flex_box_half}>
            <div className={styles.box_white}>
              <div className={styles.img_box_A}>
                <Image
                  src="/images/about_2.png"
                  alt="オンラインで相談"
                  layout={'fill'}
                  objectFit={'cover'}
                />
              </div>
              <div className={styles.box_white_txt}>
                <h3>オンラインで相談</h3>
                <p>
                  Cブース内で遠隔地にいる専門家（サービス担当者）にディスプレイ越しに相談できます。
                </p>
              </div>
            </div>
          </div>
          <div className={styles.flex_box_half}>
            <div className={styles.box_white}>
              <div className={styles.img_box_A}>
                <Image
                  src="/images/about_3.png"
                  alt="駅ナカ、商業施設等に設置"
                  layout={'fill'}
                  objectFit={'cover'}
                />
              </div>
              <div className={styles.box_white_txt}>
                <h3>駅ナカ、商業施設等に設置</h3>
                <p>駅ナカや商業施設などに設置しているので、いつでも手軽に利用できます。</p>
              </div>
            </div>
          </div>
          <div className={styles.flex_box_half}>
            <div className={styles.box_white}>
              <div className={styles.img_box_A}>
                <Image
                  src="/images/about_4.png"
                  alt="多数のサービス"
                  layout={'fill'}
                  objectFit={'cover'}
                />
              </div>
              <div className={styles.box_white_txt}>
                <h3>多数のサービス</h3>
                <p>1つのブースで多数のサービスを利用できます。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
