import { NextPage } from 'next';
import React from 'react';
import styles from '@styles/components/Company.module.css';
import ContactSection from '@components/ContactSection';
import SeoContent from '@components/SeoContent';

const EntryIndex: NextPage = () => {
  return (
    <>
      <SeoContent
        pageTitle="CocoDeskオンライン相談サービス 体験前アンケートに回答いただきありがとうございます。"
        pageDescription="CocoDeskオンライン相談サービス 体験前アンケートに回答いただきありがとうございます。のページです。"
        noIndex="noindex"
      />
      <div className={styles.companyContent}>
        <div className={styles.companyArticle}>
          <section className={styles.rule}>
            <div style={{ margin: '0 0 48px' }}>
              <h1>CocoDeskオンライン相談サービス</h1>
              <p>CocoDeskオンライン相談サービス 体験前アンケートに回答いただきありがとうございます。</p>
              <h2>エントリー方法</h2>
              <p>
                以下のメールアドレスをクリックいただき、CocoDesk利用日時等、必要事項を記載いただきCocoDesk無料利用申請のメールを送付ください。<br/>申請いただいた時点でエントリー完了となり、先着100名の方にCocoDeskの利用が1時間無料になります。</p>
              <p>
                <a href="mailto:dge-fb-oss-enq@fujifilm.com?subject=%E3%80%90CocoDesk%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E7%9B%B8%E8%AB%87%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%80%91%20%E3%82%A2%E3%83%B3%E3%82%B1%E3%83%BC%E3%83%88(%E4%BD%93%E9%A8%93%E5%89%8D)%20%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%9A%E3%83%BC%E3%83%B3%E5%BF%9C%E5%8B%9F&amp;body=%0A%5BCocoDesk%E7%84%A1%E6%96%99%E5%88%A9%E7%94%A8%E7%94%B3%E8%AB%8B%5D%0D%0A%E4%BB%A5%E4%B8%8B%E3%82%92%E8%A8%98%E5%85%A5%E3%81%97%E3%80%81%E3%83%A1%E3%83%BC%E3%83%AB%E9%80%81%E4%BB%98%E3%81%97%E3%81%A6%E7%94%B3%E8%AB%8B%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%0D%0A%E2%98%85%E3%81%8A%E5%90%8D%E5%89%8D%EF%BC%9A%E3%80%80%0D%0A%E2%98%85%E7%84%A1%E6%96%99%E5%AF%BE%E8%B1%A1%E3%81%A8%E3%81%AA%E3%82%8B1%E6%99%82%E9%96%93%E4%BB%A5%E5%86%85%E3%81%AE%E4%BA%88%E7%B4%84%EF%BC%9A%E3%80%802022%2F7%2Fxx%20xx%3Axx%E3%80%80~%E3%80%80xx%3Axx%0D%0A%E2%98%85%E4%BA%88%E7%B4%84%E3%81%97%E3%81%9F%E3%83%96%E3%83%BC%E3%82%B9%E5%90%8D%EF%BC%9A%0D%0A">
                  dge-fb-oss-enq@fujifilm.com
                </a><br/><br/>
                ※現時点でCocoDesk利用日時が未定の場合、本ページのブックマークいただき、決まり次第申請をお願いします。
              </p>
              <h2>エントリー対象予約期間</h2>
              <p>2022年7月1日（金）～2022年7月31日（日）★エントリーメール必着★<br/>
              ※１予約あたり1時間を超えたご予約は対象外となります（例： 10:00~11:15のご予約は対象になりません）
              </p>
              <h2>注意事項</h2>
              <ul>
                <li>オンライン相談サービスのアンケートに回答した方のみがエントリー可能です。</li>
                <li>CocoDeskに登録したメールアドレスから本エントリーメールを送信してください。</li>
              </ul>
              <p>
              ※ 申請は1回のみ。申請した予約をキャンセルした場合でも2回目の申請は無効になります。
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
