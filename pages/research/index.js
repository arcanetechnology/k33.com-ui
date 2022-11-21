import CallToActionInput from 'components/CallToActionInput';
import FeatureList from 'components/FeatureList';
import HeroTopSection from 'components/HeroTopSection';
import Page from 'components/Page';
import PlanList from 'components/PlanList';
import SectionTitle from 'components/SectionTitle';
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
        <Image src="/quote.png" width={42} height={34} alt="Quote" />
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

      <SectionTitle className={styles.productText} text={__text__.PRODUCT_TEXT} />

      <PlanList
        data={[
          {
            image: <Image src="/plan-free.png" width={113} height={138} alt="Free" />,
            ...__text__.PLAN_FREE,
            button: 'Free'
          },
          {
            image: <Image src="/plan-professional.png" width={148} height={137} alt="Professional" />,
            ...__text__.PLAN_PROFESSIONAL,
            button: '$50 per month'
          }
        ]}
      />

      <section className={styles.bottomSection}>
        <SectionTitle text={__text__.EARLY_ACCESS_TEXT} />
        <div className={styles.earlyAccessSignUpText}>{__text__.EARLY_ACCESS_SIGN_UP}</div>
        <CallToActionInput className={styles.input} />
      </section>
    </Page>
  );
}
