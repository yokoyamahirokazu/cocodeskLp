import styles from '@styles/components/Components.module.css';
import Image from 'next/image';

export const Operation: React.FC = () => {
  return (
    <section id="operation">
      <div className={styles.section_inner}>
        <h2>運営企業</h2>

        <div className={styles.flex_wrapper}>
          <div className={styles.flex_box_half}>
            <div className={styles.operation_logo}>
              <Image
                src="/images/logo_fujifilm.png"
                alt="富士フイルムビジネスイノベーション株式会社"
                width="200"
                height="34"
              />
            </div>
            <p>富士フイルムビジネスイノベーション株式会社</p>
            <div style={{ margin: '16px 0 0' }}>
              <p className={styles.small}>
                本社所在地
                <br />
                〒107-0052
                <br />
                東京都港区赤坂九丁目7番3号
                <br /> https://www.fujifilm.com/fb/
              </p>
            </div>
            <div className={styles.operation_service_logo}>
              <Image
                src="/images/logo_cocodesk.png"
                alt="富士フイルムビジネスイノベーション株式会社"
                width="140"
                height="56"
              />
            </div>
            <p className={styles.small}>
              「CocoDesk」は富士フイルムビジネスイノベーション株式会社の登録商標です。
              <br />
              https://www.fujifilm.com/fb/solution/menu/cocodesk
            </p>
          </div>
          <div className={styles.flex_box_half}>
            <div className={styles.operation_logo}>
              <Image
                src="/images/logo_timeleap.svg"
                alt="タイムリープ株式会社"
                width="120"
                height="88"
              />
            </div>
            <p>タイムリープ株式会社</p>
            <div style={{ margin: '16px 0 0' }}>
              <p className={styles.small}>
                所在地
                <br />
                〒101-0032
                <br />
                東京都千代田区岩本町1-9-1 アイアンビルヂング3F
                <br />
                https://timeleap.co.jp/
              </p>
            </div>
            <div className={styles.operation_service_logo}>
              <Image
                src="/images/rura_logo_blue.svg"
                alt="富士フイルムビジネスイノベーション株式会社"
                width="140"
                height="31"
              />
            </div>
            <p className={styles.small}>
              当サービスは、タイムリープ株式会社が提供する「遠隔接客サービス
              RURA」を使用しています。
              <br />
              https://timeleap-rura.com/
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Operation;
