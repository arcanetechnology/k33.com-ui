import cn from 'classnames';
import Footer from 'components/Footer';
import TopBar from 'components/TopBar';
import DarkModeContext from 'context/DarkModeContext';
import styles from './index.module.scss';

/**
 * A common page component encapsulating styles and wrapping specific page content.
 *
 * @param {Component} children: page content
 * @param {Object} subLogo: { image }, if provided, displays an additional sub logo below the top bar
 * @param {Boolean} dark: true when the application is in a dark mode
 */
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
