import cn from 'classnames';
import styles from './index.module.scss';
import useIsDarkMode from 'hooks/useIsDarkMode';
import Mailbox from 'svg/Mailbox';

export default function SuccessMessage({ isVisible }) {
  const isDarkMode = useIsDarkMode();

  return (
    <div className={cn(styles.successMessage, { [styles.visible]: isVisible, [styles.dark]: isDarkMode })}>
      <div className={styles.header}>
        <Mailbox dark={isDarkMode} />
        <div className={styles.text}>Check your email</div>
      </div>

      <div className={styles.message}>We’re excited to have you onboard!</div>
    </div>
  );
}
