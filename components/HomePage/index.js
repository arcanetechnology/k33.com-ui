import CallToActionInput from 'components/CallToActionInput';
import Page from 'components/Page';
import Image from 'next/image';
import FeatureItem from './FeatureItem';
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

      <section className={styles.listOfFeatures}>
        <ul>
          <FeatureItem
            imageSrc="/lof-research.png"
            imageWidth={110}
            imageHeight={110}
            title="Research"
            text="Weekly reports on digital asset markets & macro, from industry leading analysts."
          />
          <FeatureItem
            imageSrc="/lof-markets.png"
            imageWidth={112}
            imageHeight={113}
            title="Markets"
            text="Get best execution across multiple exchanges, with a custody solution tailored just for you."
          />
          <FeatureItem
            imageSrc="/lof-investments.png"
            imageWidth={114}
            imageHeight={114}
            title="Investments"
            text="Gain long-term managed exposure to digital assets through tailored managed funds."
          />
        </ul>
      </section>
    </Page>
  );
}
