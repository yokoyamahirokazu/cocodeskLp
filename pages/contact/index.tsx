import { NextPage } from 'next';
import React from 'react';
import styles from '@styles/components/Components.module.css';
import SeoContent from '@components/SeoContent';
import Router from 'next/router';
import Button from '@components/Button';
import Image from 'next/image';

import { useForm } from 'react-hook-form';

const Contact: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const submit = (values) => {
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((res) => {
      if (res.status === 200) {
        Router.push('/contact/thanks');
      }
    });
  };

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
              <form onSubmit={handleSubmit(submit)}>
                <div className={styles.formContentBox}>
                  <label htmlFor="name">
                    お問い合わせ内容<span className={styles.required}>*</span>
                  </label>
                  <input
                    type="radio"
                    name="name"
                    {...register('name', { required: true, maxLength: 80 })}
                  />
                  {errors.name?.type === 'required' && (
                    <p className={styles.errorText}>この質問は必須項目です</p>
                  )}
                  {errors.name?.type === 'maxLength' && (
                    <p className={styles.errorText}>80文字以内で記入してください</p>
                  )}
                </div>
                <div className={styles.formContentBox}>
                  <label htmlFor="name">
                    お名前<span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    {...register('name', { required: true, maxLength: 80 })}
                  />
                  {errors.name?.type === 'required' && (
                    <p className={styles.errorText}>この質問は必須項目です</p>
                  )}
                  {errors.name?.type === 'maxLength' && (
                    <p className={styles.errorText}>80文字以内で記入してください</p>
                  )}
                </div>
                <div className={styles.formContentBox}>
                  <label htmlFor="email">
                    メールアドレス<span className={styles.required}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register('email', {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  {errors.email?.type === 'required' && (
                    <p className={styles.errorText}>この質問は必須項目です</p>
                  )}
                  {errors.email?.type === 'pattern' && (
                    <p className={styles.errorText}>メールアドレスを入力してください</p>
                  )}
                </div>

                <div className={styles.formContentBox}>
                  <label htmlFor="message">
                    メッセージ<span className={styles.required}>*</span>
                  </label>
                  <textarea name="message" {...register('message', { required: true })}></textarea>
                  {errors.message?.type === 'required' && (
                    <p className={styles.errorText}>この質問は必須項目です</p>
                  )}
                </div>
                <Button color="primary" size="default" types="submit">
                  送信する
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
