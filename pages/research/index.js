import CallToActionInput from 'components/CallToActionInput';
import HeroText from 'components/HeroText';
import Page from 'components/Page';
import styles from './index.module.scss';

export default function ResearchPage() {
  return (
    <Page subLogo={{ image: '/research-logo.png' }}>
      <section className={styles.heroSection}>
        <div className={styles.leftImageWrapper}>
          <img src="/research-left-bg.png" alt="" />
        </div>

        <div className={styles.content}>
          <HeroText
            className={styles.heroText}
            text="Get real insight from industry experts"
          />

          <div className={styles.subText}>Understand the digital assets industry, gain insight into the markets, and go deep on the protocols that matter.</div>

          <CallToActionInput className={styles.input} />
        </div>

        <div className={styles.rightImageWrapper}>
          <img src="/research-right-bg.png" alt="" />
        </div>
      </section>
    </Page>
  );
}
