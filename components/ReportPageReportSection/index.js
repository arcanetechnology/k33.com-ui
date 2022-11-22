import { Button } from '@arcanetechnology/react-ui-lib';
import KeyPoints from 'components/KeyPoints';
import styles from './index.module.scss';

export default function ReportPageReportSection({ title, keyPoints }) {
  return (
    <section className={styles.reportPageReportSection}>
      <div className={styles.title}>{title}</div>
      <div className={styles.keyPointsWrapper}>
        <KeyPoints keyPoints={keyPoints} />
        <Button onDark>Download Sample Report</Button>
      </div>
    </section>
  );
}
