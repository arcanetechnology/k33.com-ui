import HeroTopSection from 'components/HeroTopSection';
import Page from 'components/Page';
import PlanList from 'components/PlanList';
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

      <div className={styles.productText}>{__text__.PRODUCT_TEXT}</div>

      <PlanList
        data={[
          {
            image: <Image src="/plan-vault.png" width={127} height={137} alt="Vault" />,
            ...__text__.PLAN_VAULT
          },
          {
            image: <Image src="/plan-bespoke.png" width={208} height={136} alt="Bespoke" />,
            ...__text__.PLAN_BESPOKE
          },
          {
            image: <Image src="/plan-professional.png" width={148} height={137} alt="Professional" />,
            ...__text__.PLAN_PROFESSIONAL
          }
        ]}
      />
    </Page>
  );
}
