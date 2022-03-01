import styles from '@styles/components/Footer.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Link as Scroll } from 'react-scroll';

export const Footer: React.FC = () => {
  const router = useRouter();
  const navItem = [
    { url: 'about', name: '当サービスについて' },
    { url: 'features', name: '特徴・機能' },
    { url: 'service', name: '利用いただけるサービス' },
    { url: 'howto', name: '利用方法' },
    { url: 'booth', name: '設置場所' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_inner}>
        <div className={styles.footer_flex}>
          <div className={styles.footer_logo}>
            <Image
              src="/images/cocodeskOssLogoVerticalWhite.svg"
              alt="CocoDeskオンライン相談サービスロゴ"
              width="180"
              height="141"
              priority
            />
          </div>
          <div className={styles.footer_content}>
            <ul className={styles.footer_nav}>
              {router.pathname == '/' ? (
                <>
                  {navItem.map((navContent) => (
                    <li key={navContent.name}>
                      <Scroll to={navContent.url} smooth={true} duration={600}>
                        {navContent.name}
                      </Scroll>
                    </li>
                  ))}
                </>
              ) : (
                <>
                  {navItem.map((navContent) => (
                    <li key={navContent.name}>
                      <Link href="/" as={`/#${navContent.url}`}>
                        {navContent.name}
                      </Link>
                    </li>
                  ))}
                </>
              )}
              <li>
                <Link href="/contact" as="/contact">
                  <a>お問い合わせ</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" as="/privacy-policy">
                  <a>プライバシーポリシー</a>
                </Link>
              </li>
              <li>
                <Link href="https://www.lss-box-reservation.com/home">
                  <a>予約サイト</a>
                </Link>
              </li>
            </ul>
            <p className={styles.footerCopyRight}>© タイムリープ株式会社</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
