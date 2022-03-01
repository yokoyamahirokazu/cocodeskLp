import styles from '@styles/components/Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer>
      <p className={styles.footerCopyRight}>© タイムリープ株式会社</p>
    </footer>
  );
};
