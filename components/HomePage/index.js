import CallToActionInput from 'components/CallToActionInput';
import FeatureList from 'components/FeatureList';
import Page from 'components/Page';
import Image from 'next/image';
import __text__ from 'text';
import FeatureSummaryList from './FeatureSummaryList';
import styles from './index.module.scss';

export default function HomePage() {
  return (
    <Page>
      <section className={styles.heroSection}>
        <div className={styles.content}>
          <h1 className={styles.heroText}>
            <p>{__text__.HERO.firstLine}</p>
            <p>{__text__.HERO.secondLine}</p>
          </h1>

          <div className={styles.subText}>{__text__.HERO_SUBTEXT}</div>

          <CallToActionInput className={styles.input} />
        </div>

        <div className={styles.imageWrapper}>
          <img src="/hero.png" alt="" />
        </div>
      </section>

      <section className={styles.trustedBy}>
        <div className={styles.text}>
          Trusted by
        </div>

        <Image src="/trusted-by.png" className={styles.image} alt="trusted by" width={1046} height={51} />
        <Image src="/trusted-by-mobile.png" className={styles.imageMobile} alt="trusted by" width={328} height={67} />
      </section>

      <FeatureSummaryList
        data={[
          {
            imageSrc: '/lof-research.png',
            imageWidth: 110,
            imageHeight: 110,
            title: 'Research',
            text: __text__.RESEARCH_SUMMARY
          },
          {
            imageSrc: '/lof-markets.png',
            imageWidth: 112,
            imageHeight: 113,
            title: 'Markets',
            text: __text__.MARKETS_SUMMARY
          },
          {
            imageSrc: '/lof-investments.png',
            imageWidth: 114,
            imageHeight: 114,
            title: 'Investments',
            text: __text__.INVESTMENTS_SUMMARY
          }
        ]}
      />

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
            comingSoon: true,
            imgSrc: '/iPhone-13-Pro-Mockup-Perspective-Left-Floating-Shadow.png',
            ...__text__.SECURE_YOUR_WEALTH
          }
        ]}
      />

      <section className={styles.whatWeOfferSection}>
        <div className={styles.title}>
          <p>{__text__.INVESTMENT_MANAGER_HERO.firstLine}&nbsp;</p>
          <p>{__text__.INVESTMENT_MANAGER_HERO.secondLine}</p>
        </div>

        <div className={styles.subText}>{__text__.INVESTMENT_MANAGER_SUBTEXT}</div>

        <FeatureSummaryList
          small
          data={[
            {
              imageSrc: '/im-research.png',
              imageWidth: 60,
              imageHeight: 64,
              title: 'Research',
              text: __text__.IM_RESEARCH_SUMMARY
            },
            {
              imageSrc: '/im-advice.png',
              imageWidth: 64,
              imageHeight: 64,
              title: 'Advice',
              text: __text__.IM_ADVICE_SUMMARY
            },
            {
              imageSrc: '/im-markets.png',
              imageWidth: 64,
              imageHeight: 64,
              title: 'Markets',
              text: __text__.IM_MARKETS_SUMMARY
            }
          ]}
        />

        <CallToActionInput className={styles.input} />
      </section>
    </Page>
  );
}
