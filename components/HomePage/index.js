import CallToActionInput from 'components/CallToActionInput';
import Page from 'components/Page';
import styles from './index.module.scss';

export default function HomePage() {
  return (
    <Page>
      <div className={styles.heroSection}>
        <h1 className={styles.heroText}>
          <p>Safe. Secure.</p>
          <p>Digital assets.</p>
        </h1>

        <div className={styles.subText}>
          Make informed decisions backed by industry leading research, enter the market guided by our multi-exchange brokerage service, and invest safely for the long term in tailored managed funds.
        </div>

        <CallToActionInput className={styles.input} />
      </div>
    </Page>
  );
}
