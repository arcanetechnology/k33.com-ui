import CallToActionInput from 'components/CallToActionInput';
import Page from 'components/Page';
import Image from 'next/image';
import styles from './index.module.scss';

export default function HomePage() {
  return (
    <Page>
      <section className={styles.heroSection}>
        <h1 className={styles.heroText}>
          <p>Safe. Secure.</p>
          <p>Digital assets.</p>
        </h1>

        <div className={styles.subText}>
          Make informed decisions backed by industry leading research, enter the market guided by our multi-exchange brokerage service, and invest safely for the long term in tailored managed funds.
        </div>

        <CallToActionInput className={styles.input} />
      </section>

      <section className={styles.trustedBy}>
        <div className={styles.text}>
          Trusted by
        </div>

        <Image src="/trusted-by.png" className={styles.image} alt="trusted by" width={1046} height={51} />
        <Image src="/trusted-by-mobile.png" className={styles.imageMobile} alt="trusted by" width={328} height={67} />
      </section>
    </Page>
  );
}
