import ComingSoon from 'components/ComingSoon';
import styles from './index.module.scss';

export default function PlanList({ data }) {
  return (
    <section className={styles.planList}>
      {data.map((item) => (
        <div className={styles.item} key={item.title}>
          <ComingSoon className={styles.comingSoon} />

          <div className={styles.imageWrapper}>
            {item.image}
          </div>

          <div className={styles.title}>{item.title}</div>

          <div className={styles.subtitle}>{item.subtitle}</div>

          <ul className={styles.keyPoints}>
            {item.keyPoints.map((keyPoint) => (
              <li key={keyPoint}>{keyPoint}</li>
            ))}
          </ul>

          {item.button && (
            <div className={styles.disabledButton}>{item.button}</div>
          )}
        </div>
      ))}
    </section>
  );
}
