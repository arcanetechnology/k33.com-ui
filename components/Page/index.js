import Footer from 'components/Footer';
import styles from './index.module.scss';

export default function Page({ children }) {
  return (
    <div className={styles.page}>
      <div className={styles.children}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
