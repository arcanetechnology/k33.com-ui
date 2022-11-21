import cn from 'classnames';
import styles from './index.module.scss';

export default function SectionTitle({ text, className }) {
  return (
    <div className={cn(styles.sectionTitle, { [className]: !!className })}>{text}</div>
  );
}
