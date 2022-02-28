import Link from 'next/link';
import styles from '@styles/components/Header.module.css';
import Button from '@components/Button';
import TopButton from '@components/TopButton';
import DrawerMenu from '@components/DrawerMenu';
import { Link as Scroll } from 'react-scroll';
import { useRouter } from 'next/router';
import React, { useCallback, useState, useEffect } from 'react';
import Image from 'next/image';

export const Header: React.FC = () => {
  const router = useRouter();

  const navItem = [
    { url: 'about', name: '当サービスについて' },
    { url: 'features', name: '特徴・機能' },
    { url: 'service', name: '利用いただけるサービス' },
    { url: 'howto', name: '利用方法' },
    { url: 'booth', name: '設置場所' },
  ];
  const [isHeaderShown, setIsHeaderClass] = useState(true);
  const [lastPosition, setLastPosition] = useState(0);
  const headerHeight = 0;

  const scrollEvent = useCallback(() => {
    const offset = window.pageYOffset;

    if (offset > headerHeight) {
      setIsHeaderClass(false);
    } else {
      setIsHeaderClass(true);
    }

    setLastPosition(offset);
  }, [lastPosition]);

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);

    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, [scrollEvent]);

  return (
    <>
      <header
        className={isHeaderShown == true ? styles.header : `${styles.headerFixed} ${styles.header}`}
      >
        {router.pathname != '/' && (
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <div className={styles.logoImg}>
                  <Image
                    src="/images/cocodeskOssLogo.svg"
                    alt="遠隔接客サービスRURA"
                    layout={'fill'}
                    objectFit={'contain'}
                  />
                </div>
              </a>
            </Link>
          </div>
        )}
        <nav className={styles.header_nav}>
          <ul>
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
          </ul>
        </nav>

        <Button color="primary" size="small" linkTo="#">
          ご予約はこちら
        </Button>
        <Button fill="outline" color="primary" size="small" linkTo="/contact" as="/contact">
          お問い合わせ
        </Button>
        <DrawerMenu />
      </header>
      <TopButton />
    </>
  );
};
