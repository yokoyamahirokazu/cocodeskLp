import Link from 'next/link';
import React from 'react';
import styles from '@styles/components/Header.module.css';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { IoIosMenu } from 'react-icons/io';
import { useRouter } from 'next/router';
import { Link as Scroll } from 'react-scroll';
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
    { url: 'operation', name: '運営会社' },
  ];

  return (
    <>
      <button className={styles.drawerBtn} onClick={toggleDrawer}>
        <IoIosMenu />
      </button>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
        <div className={styles.drawerInner}>
          <div className={styles.drawerInnerContent}>
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
              <li>
                <Link href="/terms" as="/terms">
                  <a onClick={toggleDrawer}>利用規約</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" as="/privacy-policy">
                  <a onClick={toggleDrawer}>プライバシーポリシー</a>
                </Link>
              </li>
            </ul>

            <div className={styles.drawerInnerBtn}>
              <div onClick={toggleDrawer}>
                <Button
                  color="primary"
                  size="default"
                  types="link"
                  linkTo="https://www.lss-box-reservation.com/home"
                >
                  ご予約はこちら
                </Button>
              </div>
              <div onClick={toggleDrawer}>
                <Button
                  color="primary"
                  fill="outline"
                  size="default"
                  types="link"
                  linkTo="/contact"
                >
                  お問い合わせ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
