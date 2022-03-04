import { NextPage } from 'next';
import React from 'react';
import styles from '@styles/components/Company.module.css';
import ContactSection from '@components/ContactSection';
import SeoContent from '@components/SeoContent';

const PrivacyIndex: NextPage = () => {
  return (
    <>
      <SeoContent
        pageTitle="プライバシーポリシー"
        pageDescription="プライバシーポリシーページです。"
      />
      <div className={styles.companyContent}>
        <div className={styles.companyArticle}>
          <section>
            <h1>プライバシーポリシー</h1>
          </section>
          <section>
            <div>
              <p>
                〇〇（以下「当社」といいます）は、当社の提供するサービス（以下総称して「本サービス」といいます）において取得する個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定め、本ポリシーに従うものとします。
              </p>
              <h2>第1条（法令等の遵守）</h2>
              <p>
                当社は、個人情報の保護に関する法律を含む個人情報の保護に関連する法令及びガイドラインを遵守します。
              </p>
              <h2>第2条（個人情報の定義）</h2>
              <p>
                本ポリシーにおいて、「個人情報」とは、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます）、又は個人識別符号が含まれる情報をいいます。
              </p>
              <h2>第3条（利用目的）</h2>
              <p>
                本サービスの提供にかかわる個人情報の具体的な利用目的は以下のとおりです。
                <br />
                <br />
                (1)本サービスの提供、維持、保護及び改善のため
                <br />
                (2)本サービス導入店舗のサービスの提供、維持、保護、分析、改善及びマーケティングのため
                <br />
                (3)本サービス導入店舗の防犯のため
                <br />
                (4)本サービスに関するご案内、お問合せ等への対応のため
                <br />
                (5)本サービスに関する規約等の変更等を通知またはご連絡するため
                <br />
                (6)当社の他のサービスの改善、新サービスの開発等に役立てるため
                <br />
                (7)個人を識別できない形式に加工した統計データを作成するため
                <br />
                (8)その他、上記利用目的に付随する目的のため
              </p>
              <h2>第4条（外部送信、第三者提供等）</h2>
              <p>
                当社は、当社が運営管理するWebサイトの利用状況を把握するためにGoogle
                Analyticsを利用しています。Google
                Analyticsは、クッキーを利用して登録ユーザーの情報を収集します。Google
                Analyticsの利用規約及びGoogleのプライバシーポリシー等については以下をご参照ください。
                <br />
                <br />
                【Google Analyticsの利用規約】
                <br />
                <a
                  href="http://www.google.com/analytics/terms/jp.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://www.google.com/analytics/terms/jp.html
                </a>
                <br />
                【Googleのプライバシーポリシー】
                <br />
                <a href="http://www.google.com/intl/ja/policies/privacy/">
                  http://www.google.com/intl/ja/policies/privacy/
                </a>
                <br />
                【Google Analyticsオプトアウトアドオン】
                <br />
                <a
                  href="https://tools.google.com/dlpage/gaoptout?hl=ja"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://tools.google.com/dlpage/gaoptout?hl=ja
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
      <ContactSection />
    </>
  );
};

export default PrivacyIndex;
