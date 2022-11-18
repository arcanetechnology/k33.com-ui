import Footer from 'components/Footer';
import TopBar from 'components/TopBar';
import styles from './index.module.scss';

export default function Page({ children, subLogo }) {
  return (
    <div className={styles.page}>
      <TopBar subLogo={subLogo} />

      <div className={styles.children}>
        {children}
      </div>

      <Footer />
    </div>
  );
}
