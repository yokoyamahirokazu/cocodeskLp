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
                <a href="mailto:dge-fb-oss-riyou@fujifilm.com?subject=%E3%80%90CocoDesk%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E7%9B%B8%E8%AB%87%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%80%91%20%E3%82%A2%E3%83%B3%E3%82%B1%E3%83%BC%E3%83%88(%E4%BD%93%E9%A8%93%E5%BE%8C)%20%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%9A%E3%83%BC%E3%83%B3%E5%BF%9C%E5%8B%9F&body=%E4%BD%93%E9%A8%93%E5%BE%8C%E3%82%A2%E3%83%B3%E3%82%B1%E3%83%BC%E3%83%88%E3%81%AB%E5%9B%9E%E7%AD%94%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8D%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%0D%0A%E4%B8%8B%E8%A8%98%E3%81%AE%E3%81%94%E6%B3%A8%E6%84%8F%E3%82%92%E3%81%94%E7%A2%BA%E8%AA%8D%E3%81%AE%E4%B8%8A%E3%80%81%E3%81%93%E3%81%A1%E3%82%89%E3%81%AE%E3%83%A1%E3%83%BC%E3%83%AB%E3%81%AB%E5%BF%85%E8%A6%81%E4%BA%8B%E9%A0%85(%E2%98%85)%E3%82%92%E3%81%94%E8%A8%98%E5%85%A5%E3%81%97%E3%81%A6%E3%83%A1%E3%83%BC%E3%83%AB%E9%80%81%E4%BF%A1%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%0D%0A%0D%0A%E5%85%88%E7%9D%80100%E5%90%8D%E6%A7%98%E3%81%AE1%E6%99%82%E9%96%93%E5%88%86%E3%81%AE%E3%81%94%E4%BA%88%E7%B4%84%E3%81%8C%E7%84%A1%E5%84%9F%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%0D%0A%0D%0A%5B%E3%81%94%E6%B3%A8%E6%84%8F%5D%0D%0A%E3%83%BB%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E7%9B%B8%E8%AB%87%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%81%AE%E3%82%A2%E3%83%B3%E3%82%B1%E3%83%BC%E3%83%88%E3%81%AB%E5%9B%9E%E7%AD%94%E3%81%97%E3%81%9F%E6%96%B9%E3%81%AE%E3%81%BF%E3%81%8C%E3%82%A8%E3%83%B3%E3%83%88%E3%83%AA%E3%83%BC%E5%8F%AF%E8%83%BD%E3%81%A7%E3%81%99%E3%80%82%0D%0A%E3%83%BBCocoDesk%E3%81%AB%E7%99%BB%E9%8C%B2%E3%81%97%E3%81%9F%E3%83%A1%E3%83%BC%E3%83%AB%E3%82%A2%E3%83%89%E3%83%AC%E3%82%B9%E3%81%8B%E3%82%89%E6%9C%AC%E3%82%A8%E3%83%B3%E3%83%88%E3%83%AA%E3%83%BC%E3%83%A1%E3%83%BC%E3%83%AB%E3%82%92%E9%80%81%E4%BF%A1%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%0D%0A%E3%83%BB%E7%94%B3%E8%AB%8B%E3%81%99%E3%82%8B%E4%BA%88%E7%B4%84%E3%81%AF%E4%BB%A5%E4%B8%8B%E3%81%A7%E3%81%82%E3%82%8B%E3%81%93%E3%81%A8%E3%82%92%E7%A2%BA%E8%AA%8D%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%0D%0A(1)%207%2F1~7%2F31%E3%81%AE%E9%96%93%E3%81%AE%E4%BA%88%E7%B4%84%E3%81%A7%E3%81%82%E3%82%8B%E3%81%93%E3%81%A8%0D%0A(2)%201%E6%99%82%E9%96%93%E4%BB%A5%E5%86%85%E3%81%AE%E4%BA%88%E7%B4%84%E3%81%A7%E3%81%82%E3%82%8B%E3%81%93%E3%81%A8%0D%0A%E2%80%BB%20%E7%94%B3%E8%AB%8B%E3%81%AF1%E5%9B%9E%E3%81%AE%E3%81%BF%E3%80%82%E7%94%B3%E8%AB%8B%E3%81%97%E3%81%9F%E4%BA%88%E7%B4%84%E3%82%92%E3%82%AD%E3%83%A3%E3%83%B3%E3%82%BB%E3%83%AB%E3%81%97%E3%81%9F%E5%A0%B4%E5%90%88%E3%81%A7%E3%82%822%E5%9B%9E%E7%9B%AE%E3%81%AE%E7%94%B3%E8%AB%8B%E3%81%AF%E7%84%A1%E5%8A%B9%E3%81%AB%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%0D%0A%0D%0A%5BCocoDesk%E7%84%A1%E5%84%9F%E5%88%A9%E7%94%A8%E7%94%B3%E8%AB%8B%5D%0D%0A%E4%BB%A5%E4%B8%8B%E3%82%92%E8%A8%98%E5%85%A5%E3%81%97%E3%80%81%E3%83%A1%E3%83%BC%E3%83%AB%E9%80%81%E4%BB%98%E3%81%97%E3%81%A6%E7%94%B3%E8%AB%8B%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%0D%0A%E2%98%85%E3%81%8A%E5%90%8D%E5%89%8D%EF%BC%9A%0D%0A%E2%98%85%E7%84%A1%E5%84%9F%E5%AF%BE%E8%B1%A1%E3%81%A8%E3%81%AA%E3%82%8B1%E6%99%82%E9%96%93%E4%BB%A5%E5%86%85%E3%81%AE%E4%BA%88%E7%B4%84%EF%BC%9A%E3%80%802022%2F7%2Fxx%20xx%3Axx%E3%80%80~%E3%80%80xx%3Axx%0D%0A%E2%98%85%E4%BA%88%E7%B4%84%E3%81%97%E3%81%9F%E3%83%96%E3%83%BC%E3%82%B9%E5%90%8D%EF%BC%9A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A">
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
