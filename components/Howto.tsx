import styles from '@styles/components/Components.module.css';
import Image from 'next/image';
import Button from '@components/Button';

export const Howto: React.FC = () => {
  return (
    <section id="howto">
      <div className={styles.section_inner}>
        <h2>利用方法</h2>
        <div className={styles.howto}>
          <div className={styles.howto_1}>
            <h3>
              予約せずに利用する場合
              <span className={styles.subtitle}>
                ブースに設置してあるタブレットを操作することでご利用いただけます。
              </span>
            </h3>
            <div className={styles.flex_wrapper}>
              <div className={styles.flex_box_half}>
                <div className={styles.box_light}>
                  <div className={styles.img_box_B}>
                    <Image
                      src="/images/howto_use_1.png"
                      alt="利用するサービスをタップ"
                      layout={'fill'}
                      objectFit={'contain'}
                    />
                  </div>
                  <div className={styles.box_white_txt}>
                    <h4>
                      <span>1</span>利用するサービスをタップ
                    </h4>
                  </div>
                </div>
              </div>
              <div className={styles.flex_box_half}>
                <div className={styles.box_light}>
                  <div className={styles.img_box_B}>
                    <Image
                      src="/images/howto_use_2.png"
                      alt="簡単な質問に回答"
                      layout={'fill'}
                      objectFit={'contain'}
                    />
                  </div>
                  <div className={styles.box_white_txt}>
                    <h4>
                      <span>2</span>簡単な質問に回答
                    </h4>
                  </div>
                </div>
              </div>
              <div className={styles.flex_box_half}>
                <div className={styles.box_light}>
                  <div className={styles.img_box_B}>
                    <Image
                      src="/images/howto_use_3.png"
                      alt="ドアが解錠したら入室"
                      layout={'fill'}
                      objectFit={'contain'}
                    />
                  </div>
                  <div className={styles.box_white_txt}>
                    <h4>
                      <span>3</span>ドアが解錠したら入室
                    </h4>
                  </div>
                </div>
              </div>
              <div className={styles.flex_box_half}>
                <div className={styles.box_light}>
                  <div className={styles.img_box_B}>
                    <Image
                      src="/images/howto_use_4.png"
                      alt="ご利用開始"
                      layout={'fill'}
                      objectFit={'contain'}
                    />
                  </div>
                  <div className={styles.box_white_txt}>
                    <h4>
                      <span>4</span>ご利用開始
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.howto_2}>
            <h3>予約して利用する場合</h3>
            <div className={styles.flex_wrapper}>
              <div className={styles.flex_box_third}>
                <div className={styles.box_light}>
                  <div className={styles.img_box_B}>
                    <Image
                      src="/images/howto_use_5.png"
                      alt="予約サイトにて予約"
                      layout={'fill'}
                      objectFit={'contain'}
                    />
                  </div>
                  <div className={styles.box_white_txt}>
                    <h4>
                      <span>1</span>予約サイトにて予約
                    </h4>
                  </div>
                </div>
              </div>
              <div className={styles.flex_box_third}>
                <div className={styles.box_light}>
                  <div className={styles.img_box_B}>
                    <Image
                      src="/images/howto_use_6.png"
                      alt="メールで予約番号が届く"
                      layout={'fill'}
                      objectFit={'contain'}
                    />
                  </div>
                  <div className={styles.box_white_txt}>
                    <h4>
                      <span>2</span>メールで予約番号が届く
                    </h4>
                  </div>
                </div>
              </div>
              <div className={styles.flex_box_third}>
                <div className={styles.box_light}>
                  <div className={styles.img_box_B}>
                    <Image
                      src="/images/howto_use_7.png"
                      alt="ブースにて予約番号を入力"
                      layout={'fill'}
                      objectFit={'contain'}
                    />
                  </div>
                  <div className={styles.box_white_txt}>
                    <h4>
                      <span>3</span>ブースにて予約番号を入力
                    </h4>
                  </div>
                </div>
              </div>
              <div className={styles.flex_box_third}>
                <div className={styles.box_light}>
                  <div className={styles.img_box_B}>
                    <Image
                      src="/images/howto_use_3.png"
                      alt="ドアが解錠したら入室"
                      layout={'fill'}
                      objectFit={'contain'}
                    />
                  </div>
                  <div className={styles.box_white_txt}>
                    <h4>
                      <span>4</span>ドアが解錠したら入室
                    </h4>
                  </div>
                </div>
              </div>
              <div className={styles.flex_box_third}>
                <div className={styles.box_light}>
                  <div className={styles.img_box_B}>
                    <Image
                      src="/images/howto_use_4.png"
                      alt="ご利用開始"
                      layout={'fill'}
                      objectFit={'contain'}
                    />
                  </div>
                  <div className={styles.box_white_txt}>
                    <h4>
                      <span>5</span>ご利用開始
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.btn_wrapper}>
          <p>利用方法に関して、詳しくは予約サイトをご覧ください</p>
          <Button
            color="primary"
            size="default"
            linkTo="https://www.lss-box-reservation.com/how-to-use"
          >
            利用方法を詳しく見る
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Howto;
