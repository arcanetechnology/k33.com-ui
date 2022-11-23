import cn from 'classnames';
import ComingSoon from 'components/ComingSoon';
import Logo from 'components/Logo';
import useIsDarkMode from 'hooks/useIsDarkMode';
import GridMenu from './GridMenu';
import styles from './index.module.scss';

export default function TopBar({ subLogo }) {
  const isDarkMode = useIsDarkMode();

  return (
    <div className={cn(styles.topBar, { [styles.dark]: isDarkMode })}>
      <div className={styles.main}>
        <Logo className={styles.logo} />

        <div className={styles.right}>
          <GridMenu />
          <ComingSoon className={styles.comingSoon} />
        </div>
      </div>

      {subLogo && (
        <div className={styles.subline}>
          <img className={styles.sublogo} src={subLogo.image} alt="" />
        </div>
      )}
    </div>
  );
}
