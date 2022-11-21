import HeroTopSection from 'components/HeroTopSection';
import Page from 'components/Page';
import Image from 'next/image';
import __text__ from 'text/about';
import styles from './index.module.scss';

export default function AboutPage() {
  return (
    <Page>
      <HeroTopSection
        oneLiner
        largerSubText
        noCallToActionButton
        heroText={__text__.HERO}
        subText={__text__.HERO_SUBTEXT}
        leftImage={<Image src="/about-left-bg.png" width={191} height={567} alt="" />}
        rightImage={<Image src="/about-right-bg.png" width={209} height={611} alt="" />}
      />

      <section className={styles.aboutUsSection}>
        <div className={styles.text}>
          {__text__.ABOUT_US.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className={styles.imageWrapper}>
          <Image src="/AboutUs.png" alt="The Team" width={636} height={737} />
        </div>
      </section>
    </Page>
  );
}
