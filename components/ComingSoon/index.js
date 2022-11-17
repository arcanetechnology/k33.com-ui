import cn from 'classnames';
import styles from './index.module.scss';

export default function ComingSoon({ className }) {
  return (
    <div className={cn(styles.comingSoon, { [className]: !!className })}>
      Coming Soon
    </div>
  );
}
