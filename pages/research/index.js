import HeroTopSection from 'components/HeroTopSection';
import Page from 'components/Page';
import Image from 'next/image';
import __text__ from 'text/research';
// import styles from './index.module.scss';

export default function ResearchPage() {
  return (
    <Page subLogo={{ image: '/research-logo.png' }}>
      <HeroTopSection
        heroText={__text__.HERO}
        subText={__text__.HERO_SUBTEXT}
        leftImage={<Image src="/research-left-bg.png" width={241} height={576} alt="" />}
        rightImage={<Image src="/research-right-bg.png" width={214} height={598} alt="" />}
      />
    </Page>
  );
}
