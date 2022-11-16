import CallToActionInput from 'components/CallToActionInput';
import FeatureList from 'components/FeatureList';
import Page from 'components/Page';
import Image from 'next/image';
import text from 'text';
import FeatureSummary from './FeatureSummary';
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

      <section className={styles.featureSummary}>
        <ul>
          <FeatureSummary
            imageSrc="/lof-research.png"
            imageWidth={110}
            imageHeight={110}
            title="Research"
            text="Weekly reports on digital asset markets & macro, from industry leading analysts."
          />
          <FeatureSummary
            imageSrc="/lof-markets.png"
            imageWidth={112}
            imageHeight={113}
            title="Markets"
            text="Get best execution across multiple exchanges, with a custody solution tailored just for you."
          />
          <FeatureSummary
            imageSrc="/lof-investments.png"
            imageWidth={114}
            imageHeight={114}
            title="Investments"
            text="Gain long-term managed exposure to digital assets through tailored managed funds."
          />
        </ul>
      </section>

      <FeatureList
        className={styles.featureListSection}
        data={[
          {
            imgSrc: '/iPhone-13-Pro-Mockup-Perspective-Left.png',
            ...text.GET_REAL_INSIGHT
          },
          {
            reverse: true,
            imgSrc: '/iPhone-13-Pro-Mockup-Perspective-Right-Floating-Shadow.png',
            ...text.TRADE_WITH_CONVICTION
          },
          {
            imgSrc: '/iPhone-13-Pro-Mockup-Perspective-Left-Floating-Shadow.png',
            ...text.SECURE_YOUR_WEALTH
          }
        ]}
      />
    </Page>
  );
}
