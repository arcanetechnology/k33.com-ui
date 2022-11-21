import cn from 'classnames';
import Footer from 'components/Footer';
import TopBar from 'components/TopBar';
import DarkModeContext from 'context/DarkModeContext';
import styles from './index.module.scss';

export default function Page({ children, subLogo, dark }) {
  return (
    <DarkModeContext.Provider value={!!dark}>
      <div className={cn(styles.wrapper, { [styles.dark]: dark })}>
        <div className={cn(styles.page, { [styles.dark]: dark })}>
          <TopBar subLogo={subLogo} />

          <div className={styles.children}>
            {children}
          </div>

          <Footer />
        </div>
      </div>
    </DarkModeContext.Provider>
  );
}
