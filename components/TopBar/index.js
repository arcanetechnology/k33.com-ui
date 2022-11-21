import cn from 'classnames';
import ComingSoon from 'components/ComingSoon';
import Logo from 'components/Logo';
import useIsDarkMode from 'hooks/useIsDarkMode';
import styles from './index.module.scss';

export default function TopBar({ subLogo }) {
  const isDarkMode = useIsDarkMode();

  return (
    <div className={cn(styles.topBar, { [styles.dark]: isDarkMode })}>
      <div className={styles.main}>
        <Logo className={styles.logo} />
        <ComingSoon />
      </div>

      {subLogo && (
        <div className={styles.subline}>
          <img className={styles.sublogo} src={subLogo.image} alt="" />
        </div>
      )}
    </div>
  );
}
