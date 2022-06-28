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
                <a href="mailto:dge-fb-oss-enq@fujifilm.com">dge-fb-oss-enq@fujifilm.com</a>
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
            </div>
          </section>
        </div>
      </div>
      <ContactSection />
    </>
  );
};

export default EntryIndex;
