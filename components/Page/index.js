import Footer from 'components/Footer';
import TopBar from 'components/TopBar';
import styles from './index.module.scss';

export default function Page({ children }) {
  return (
    <div className={styles.page}>
      <TopBar />

      <div className={styles.children}>
        {children}
      </div>

      <Footer />
    </div>
  );
}
