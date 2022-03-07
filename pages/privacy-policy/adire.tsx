import { NextPage } from 'next';
import React from 'react';
import styles from '@styles/components/Company.module.css';
import SeoContent from '@components/SeoContent';

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'simple',
    },
  };
};

const PrivacyPolicyAdire: NextPage = () => {
  return (
    <>
      <SeoContent
        pageTitle="プライバシーポリシー"
        pageDescription="プライバシーポリシーページです。"
      />

      <div className={styles.companyContent}>
        <div className={styles.companyArticle}>
          <div className={styles.simpleContent}>
            <section>
              <h1 style={{ margin: '0 0 16px' }}>プライバシーポリシー</h1>
              <p>（個室型ワークスペース「CocoDesk」によるオンライン相談サービスの利用者用）</p>
            </section>
            <section>
              <div>
                <p>
                  アディーレ法律事務所（弁護士法人アディーレ法律事務所及び弁護士法人AdIre法律事務所が営む組合たる事業体。以下「当事務所」といいます。）は、「個人情報保護方針」に従い、ご本人の個人情報を次のとおり取り扱います。
                  <br />
                  個室型ワークスペース「CocoDesk」によるオンライン相談サービス（以下「本オンラインサービス」といいます。）は、富士フイルムビジネスイノベーション株式会社が東京地下鉄株式会社と共創し提供している個室型ワークスペース「CocoDesk」とタイムリープ株式会社のオンライン接客システム「RURA」を組み合わせたものであり、本オンラインサービスを利用した法律相談の予約に関しては、当事務所が共同して実証実験を行います。
                  <br />
                  本オンラインサービスを利用するには、当事務所が本ポリシーに従って個人情報を取り扱うことにあらかじめ同意していただく必要があります。本ポリシーに事前に同意いただけないときは、本オンラインサービスはご利用できません。
                </p>
                <h2>
                  <span className={styles.subtitle}>（個人情報の利用目的）</span>第１条
                </h2>
                <p>
                  ご本人の個人情報は、次に掲げる目的で取得し、利用いたします。通知した目的の範囲を超えて利用することはありません。
                  <br />
                  ⑴法律相談業務の遂行のため
                  <br />
                  ⑵受任事件における訴訟、交渉、その他事件に関連する法律事務の遂行のため <br />
                  ⑶顧問業務の遂行のため ⑷ご本人への連絡及び情報提供のため <br />
                  ⑸ご本人を識別できない状態の統計データを作成し、広報活動、組織の管理、構築に活用し、商品・サービスの品質向上を図るため
                  <br />
                  ⑹本オンラインサービスの実証実験、提供、維持管理、保護、分析、改善、構築及びマーケティングに必要な執務、これらに付随する執務並びに個人を識別できない形式に加工した統計的データ作成のため
                </p>
                <h2>
                  <span className={styles.subtitle}>（個人情報の第三者提供・共同利用）</span>第２条
                </h2>
                <p>
                  当事務所は、次の各号いずれかに当たる場合を除き、取得した個人情報を、あらかじめご本人の同意を得ることなく、第三者に提供いたしません。
                  <br />
                  ⑴法令に基づく場合 <br />
                  ⑵人の生命、身体又は財産の保護のために必要がある場合であって、ご本人の同意を得ることが困難であるとき
                  <br />
                  ⑶公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、ご本人の同意を得ることが困難であるとき
                  <br />
                  ⑷国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ご本人の同意を得ることによって当該事務の遂行に支障を及ぼすおそれがあるとき
                </p>
                <h2>
                  <span className={styles.subtitle}>（個人情報の委託）</span>第３条
                </h2>
                <p>
                  当事務所は、利用目的の達成に必要な範囲において、業務の全部又は一部を外部に委託することがあります。この場合、個人情報の適切な取扱いが認められる委託先を選定し、個人情報の適正管理・機密保持に必要な事項を契約等に取り入れ、漏えい防止等、適切な管理にあたります。
                </p>
                <h2>
                  <span className={styles.subtitle}>（個人情報の開示・訂正等）</span>第４条
                </h2>
                <p>
                  ご本人からの利用目的の通知、個人情報の開示、内容の訂正、追加又は削除、利用の停止、消去及び第三者への提供の停止を希望される場合は、下記の窓口にて承っております。
                </p>
                <h2>
                  <span className={styles.subtitle}>（個人情報を与えることの任意性）</span>第５条
                </h2>
                <p>
                  ご本人の判断により個人情報の提供を拒否することができますが、必要な項目をご提供いただけない場合、本オンラインサービスをご利用いただけないほか、第１条に規定する利用目的を達成できない場合があります。
                </p>
                <p>
                  <br /> <br />
                  弁護士法人ＡｄＩｒｅ法律事務所 弁護士法人アディーレ法律事務所
                  <br />
                  責任者 個人情報保護管理者 <br />
                  個人情報に関する相談窓口
                  <br />
                  MAIL：privacy@adire.jp <br />
                  TEL：03-5950-0268 <br />
                  FAX：03-5950-0269（個人情報に関する相談のみの窓口）
                  <br />
                  ※無料法律相談ご希望の方は別途案内しております番号へお願いします。 <br />
                  郵送：〒170-6033 東京都豊島区東池袋3-1-1　サンシャイン60
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyAdire;
