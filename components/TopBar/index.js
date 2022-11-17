import ComingSoon from 'components/ComingSoon';
import Logo from 'components/Logo';
import styles from './index.module.scss';

export default function TopBar({ subLogo }) {
  return (
    <div className={styles.topBar}>
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
