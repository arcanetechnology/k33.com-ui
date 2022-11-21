import cn from 'classnames';
import useIsDarkMode from 'hooks/useIsDarkMode';
import styles from './index.module.scss';

export default function ComingSoon({ className }) {
  const isDarkMode = useIsDarkMode();

  return (
    <div className={cn(styles.comingSoon, { [className]: !!className, [styles.dark]: isDarkMode })}>
      Coming Soon
    </div>
  );
}
