import styles from './index.module.scss';

export default function ReportPageHeader({ title, subtitle }) {
  return (
    <section className={styles.reportPageHeader}>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
    </section>
  );
}
