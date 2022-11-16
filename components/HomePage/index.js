import CallToActionInput from 'components/CallToActionInput';
import FeatureList from 'components/FeatureList';
import Page from 'components/Page';
import Image from 'next/image';
import __text__ from 'text';
import FeatureSummary from './FeatureSummary';
import styles from './index.module.scss';

export default function HomePage() {
  return (
    <Page>
      <section className={styles.heroSection}>
        <h1 className={styles.heroText}>
          <p>{__text__.HERO.firstLine}</p>
          <p>{__text__.HERO.secondLine}</p>
        </h1>

        <div className={styles.subText}>{__text__.HERO_SUBTEXT}</div>

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
            text={__text__.RESEARCH_SUMMARY}
          />
          <FeatureSummary
            imageSrc="/lof-markets.png"
            imageWidth={112}
            imageHeight={113}
            title="Markets"
            text={__text__.MARKETS_SUMMARY}
          />
          <FeatureSummary
            imageSrc="/lof-investments.png"
            imageWidth={114}
            imageHeight={114}
            title="Investments"
            text={__text__.INVESTMENTS_SUMMARY}
          />
        </ul>
      </section>

      <FeatureList
        className={styles.featureListSection}
        data={[
          {
            imgSrc: '/iPhone-13-Pro-Mockup-Perspective-Left.png',
            ...__text__.GET_REAL_INSIGHT
          },
          {
            reverse: true,
            imgSrc: '/iPhone-13-Pro-Mockup-Perspective-Right-Floating-Shadow.png',
            ...__text__.TRADE_WITH_CONVICTION
          },
          {
            imgSrc: '/iPhone-13-Pro-Mockup-Perspective-Left-Floating-Shadow.png',
            ...__text__.SECURE_YOUR_WEALTH
          }
        ]}
      />
    </Page>
  );
}
