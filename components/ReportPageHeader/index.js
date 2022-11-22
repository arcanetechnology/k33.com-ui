import cn from 'classnames';
import styles from './index.module.scss';

export default function ReportPageHeader({ sectionClassName, contentClassName, titleClassName, subtitleClassName, title, subtitle }) {
  return (
    <section className={cn(styles.reportPageHeader, { [sectionClassName]: !!sectionClassName })}>
      <div className={cn(styles.content, { [contentClassName]: !!contentClassName })}>
        <div className={cn(styles.title, { [titleClassName]: !!titleClassName })}>{title}</div>
        <div className={cn(styles.subtitle, { [subtitleClassName]: !!subtitleClassName })}>{subtitle}</div>
      </div>
    </section>
  );
}
