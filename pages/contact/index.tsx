import { NextPage } from 'next';
import React from 'react';
import styles from '@styles/components/Components.module.css';
import SeoContent from '@components/SeoContent';

import Image from 'next/image';
import HubspotForm from 'react-hubspot-form';

const Contact: NextPage = () => {
  return (
    <>
      <SeoContent
        pageTitle="お問い合わせ"
        pageDescription="CocoDeskオンライン相談サービスのお問い合わせページ。"
      />
      <div className={styles.contactPageFlex}>
        <div className={styles.contactPageFlexLeft}>
          <div className={styles.contactPageFlexInner}>
            <div className={styles.contactLogo}>
              <Image
                src="/images/cocodeskOssLogoVertical.svg"
                alt="CocoDeskオンライン相談サービスロゴ"
                layout={'fill'}
                objectFit={'contain'}
              />
            </div>
            <p>
              必須項目を入力の上、フォームの送信をお願いします。
              担当者が内容を確認の上、折り返し連絡させていただきます。
            </p>
          </div>
        </div>
        <div className={styles.contactPageFlexRight}>
          <div className={styles.contactPageFlexInner}>
            <div className={styles.contactContent}>
              <p className={styles.contact_warning}>
                <span>*</span>は必須項目
              </p>
              <HubspotForm
                portalId="21136941"
                formId="231bf4c0-33f8-4a32-9c7d-7cc4f917134e"
                loading={<div>Loading...</div>}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
