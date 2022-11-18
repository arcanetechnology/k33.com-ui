import HeroTopSection from 'components/HeroTopSection';
import Page from 'components/Page';
import Image from 'next/image';
import __text__ from 'text/markets';
import styles from './index.module.scss';

export default function MarketsPage() {
  return (
    <Page subLogo={{ image: '/markets-logo.png' }}>
      <HeroTopSection
        className={styles.heroSection}
        heroText={__text__.HERO}
        subText={__text__.HERO_SUBTEXT}
        leftImage={<Image src="/markets-left-bg.png" width={238} height={634} alt="" />}
        rightImage={<Image src="/markets-right-bg.png" width={238} height={634} alt="" />}
      />
    </Page>
  );
}
