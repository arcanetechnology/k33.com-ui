import { Button } from '@arcanetechnology/react-ui-lib';
import KeyPoints from 'components/KeyPoints';
import styles from './index.module.scss';

export default function ReportPageReportSection({ title, keyPoints, downloadUrl }) {
  return (
    <section className={styles.reportPageReportSection}>
      <div className={styles.title}>{title}</div>
      <div className={styles.keyPointsWrapper}>
        <KeyPoints keyPoints={keyPoints} />
        <a href={downloadUrl} target="_blank" rel="noreferrer">
          <Button onDark className={styles.button}>Download Sample Report</Button>
        </a>
      </div>
    </section>
  );
}
