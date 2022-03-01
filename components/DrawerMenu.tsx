import Link from 'next/link';
import React from 'react';
import styles from '@styles/components/Header.module.css';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { IoIosMenu } from 'react-icons/io';
import { useRouter } from 'next/router';
import { Link as Scroll } from 'react-scroll';
import Image from 'next/image';
import Button from '@components/Button';

const DrawerMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const router = useRouter();

  const navItem = [
    { url: 'about', name: '当サービスについて' },
    { url: 'features', name: '特徴・機能' },
    { url: 'service', name: '利用いただけるサービス' },
    { url: 'howto', name: '利用方法' },
    { url: 'booth', name: '設置場所' },
  ];

  return (
    <>
      <button className={styles.drawerBtn} onClick={toggleDrawer}>
        <IoIosMenu />
      </button>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
        <div className={styles.drawerInner}>
          <div className={styles.drawerInnerContent}>
            <div className={styles.logo}>
              <Link href="/">
                <a>
                  <div className={styles.logoImg}>
                    <Image
                      src="/images/rura_logo_blue.svg"
                      alt="遠隔接客サービスRURA"
                      layout={'fill'}
                      objectFit={'contain'}
                    />
                  </div>
                </a>
              </Link>
            </div>

            <ul>
              <li>
                <Link href={'/'}>
                  <a onClick={toggleDrawer}>ホーム</a>
                </Link>
              </li>

              {router.pathname == '/' ? (
                <>
                  {navItem.map((items) => (
                    <li key={items.url}>
                      <Scroll to={items.url} smooth={true} duration={600} onClick={toggleDrawer}>
                        {items.name}
                      </Scroll>
                    </li>
                  ))}
                </>
              ) : (
                <>
                  {navItem.map((items) => (
                    <li key={items.url}>
                      <Link href="/" as={`/#${items.url}`}>
                        <a onClick={toggleDrawer}>{items.name}</a>
                      </Link>
                    </li>
                  ))}
                </>
              )}
            </ul>

            <div className={styles.drawerInnerBtn}>
              <div onClick={toggleDrawer}>
                <Button color="primary" size="normal" types="link" linkTo="/download">
                  資料ダウンロード
                </Button>
              </div>
              <div onClick={toggleDrawer}>
                <Button color="secondary" size="normal" types="link" linkTo="/contact">
                  お問い合わせ
                </Button>
              </div>
            </div>
            <ul className={styles.simple}>
              <li>
                <Link href={'/company'}>
                  <a onClick={toggleDrawer}>運営会社</a>
                </Link>
              </li>
              <li>
                <Link href={'/company/privacy-policy'}>
                  <a onClick={toggleDrawer}>プライバシーポリシー</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
