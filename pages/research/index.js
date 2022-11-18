import FeatureList from 'components/FeatureList';
import HeroTopSection from 'components/HeroTopSection';
import Page from 'components/Page';
import Image from 'next/image';
import __text__ from 'text/research';
import styles from './index.module.scss';

export default function ResearchPage() {
  return (
    <Page subLogo={{ image: '/research-logo.png' }}>
      <HeroTopSection
        heroText={__text__.HERO}
        subText={__text__.HERO_SUBTEXT}
        leftImage={<Image src="/research-left-bg.png" width={241} height={576} alt="" />}
        rightImage={<Image src="/research-right-bg.png" width={214} height={598} alt="" />}
      />

      <section className={styles.quoteSection}>
        <Image src="/quote.png" width={42} height={34} />
        <div className={styles.header}>{__text__.OUR_PHILOSOPHY_HEADER}</div>
        <div className={styles.text}>{__text__.OUR_PHILOSOPHY_TEXT}</div>
      </section>

      <FeatureList
        className={styles.featureList}
        data={[
          {
            imgSrc: '/Ahead-of-the-curve.png',
            buttonUrl: '/research/reports/aheadofthecurve',
            ...__text__.AHEAD_OF_THE_CURVE
          },
          {
            reverse: true,
            imgSrc: '/The-fundamentals.png',
            comingSoon: true,
            ...__text__.THE_FUNDAMENTALS
          },
          {
            imgSrc: '/Friday-Focus.png',
            buttonUrl: '/research/reports/fridayfocus',
            ...__text__.THE_FRIDAY_FOCUS,
          }
        ]}
      />
    </Page>
  );
}
