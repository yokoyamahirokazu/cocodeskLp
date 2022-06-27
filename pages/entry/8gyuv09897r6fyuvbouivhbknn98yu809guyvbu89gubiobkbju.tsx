import { NextPage } from 'next';
import React from 'react';
import styles from '@styles/components/Company.module.css';
import ContactSection from '@components/ContactSection';
import SeoContent from '@components/SeoContent';

const EntryIndex: NextPage = () => {
  return (
    <>
      <SeoContent
        pageTitle="CocoDeskオンラインサービス キャンペーン"
        pageDescription="CocoDeskオンラインサービス キャンペーンのページです。"
        noIndex="noindex"
      />
      <div className={styles.companyContent}>
        <div className={styles.companyArticle}>
          <section className={styles.rule}>
            <div style={{ margin: '0 0 48px' }}>
              <h1>CocoDeskオンラインサービス キャンペーン</h1>
              <h2>エントリー方法</h2>
              <p>
                以下のメールアドレスをクリックいただき、CocoDesk無償利用申請をお願いします。先着100名の方にCocoDeskの利用が1時間無料になります。
              </p>
              <p>
                <a href="mailto:dge-fb-oss-riyou@fujifilm.com?subject=【CocoDeskオンライン相談サービス】 アンケート(体験後) キャンペーン応募&amp;body=体験後アンケートに回答いただきありがとうございます。%0D%0A下記のご注意をご確認の上、こちらのメールに必要事項(★)をご記入してメール送信ください。%0D%0A先着100名様のご予約が無償となります。%0D%0A%0D%0A[ご注意]%1D%0A・オンライン相談サービスのアンケートに回答した方のみがエントリー可能です。%0D%0A・CocoDeskに登録したメールアドレスから本エントリーメールを送信してください。%0D%0A・申請する予約は以下であることを確認してください。%0D%0A　　 (1) 7/1~7/31の間の予約であること%0D%0A　　 (2) 1時間以内の予約であること%0D%0A※ 申請は1回のみ。申請した予約をキャンセルした場合でも2回目の申請は無効になります。%0D%0A%0D%0A[CocoDesk無償利用申請]%0D%0A以下を記入し、メール送付して申請してください。%0D%0A★お名前：%0D%0A　★無償対象となる1時間以内の予約：　2022/7/xx   xx:xx　~　xx:xx%0D%0A★予約したブース名：%0D%0A">
                  dge-fb-oss-riyou@fujifilm.com
                </a>
              </p>
              <h2>エントリー対象予約期間</h2>
              <p>2022年7月1日（金）～2022年7月31日（日）</p>
              <p>
                ※１予約あたり1時間を超えたご予約は対象外となります（例えば10:00~11:15など一度の利用で1時間を超えるご予約は対象になりません）
              </p>
              <h2>注意事項</h2>
              <ul>
                <li>オンライン相談サービスのアンケートに回答した方のみがエントリー可能です。</li>
                <li>CocoDeskに登録したメールアドレスから本エントリーメールを送信してください。</li>
              </ul>
              <p>
                ※ 申請は1回のみ。申請した予約をキャンセルした場合でも2回目の申請は無効になります。
              </p>
              <p>CocoDesk会員ではない方はこちらから登録が可能です。</p>
              <p>
                <a
                  href="https://www.fujifilm.com/fb/solution/menu/cocodesk/regist-login"
                  target="_blank"
                >
                  https://www.fujifilm.com/fb/solution/menu/cocodesk/regist-login
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

export default EntryIndex;
