import { Button } from '@arcanetechnology/react-ui-lib';
import HeroTopSection from 'components/HeroTopSection';
import Page from 'components/Page';
import Head from 'next/head';
import Image from 'next/image';
import ArrowLeft from 'svg/ArrowLeft';
import ArrowRight from 'svg/ArrowRight';
import DownloadDark from 'svg/DownloadDark';
import DownloadLight from 'svg/DownloadLight';
import ExternalLink from 'svg/ExternalLink';
import __text__ from 'text/kvq';
import styles from './index.module.scss';

/**
 * Represents the KVQ product page.
 */
export default function KvqPage() {
  return (
    <Page subLogo={{ image: '/investments-logo.png' }}>
      <Head>
        <title>KVQ | K33</title>
      </Head>

      <HeroTopSection
        oneLiner
        largerSubText
        noCallToActionButton
        heroText={__text__.HERO}
        leftImage={<Image src="/kvq-left-bg.png" width={147} height={424} alt="" />}
        rightImage={<Image src="/kvq-right-bg.png" width={145} height={410} alt="" />}
      />

      <section className={styles.contentSection}>
        <h2 className={styles.title}>{__text__.TITLE}</h2>

        <div className={styles.contentWrapper}>
          <div className={styles.text}>
            {__text__.DESCRIPTION.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className={styles.contacts}>
            <div className={styles.contactTitle}>{__text__.CONTACT}</div>

            <ul className={styles.contactList}>
              <li>
                <div className={styles.image}>
                  <Image src="/Anders.png" alt="Anders Helseth" width={88} height={88} />
                </div>
                <div className={styles.content}>
                  <div className={styles.name}>Anders Helseth</div>
                  <div className={styles.jobTitle}>VP of Research</div>
                  <div className={styles.email}>anders@k33.com</div>
                </div>
              </li>

              <li>
                <div className={styles.image}>
                  <Image src="/Torbjorn.png" alt="Torbjørn Bull Jenssen" width={88} height={88} />
                </div>
                <div className={styles.content}>
                  <div className={styles.name}>Torbjørn Bull Jenssen</div>
                  <div className={styles.jobTitle}>CEO</div>
                  <div className={styles.email}>tbj@k33.com</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.buttons}>
          <a href="/pdf/PDF-report-Methodology.pdf" target="_blank" download>
            <Button iconRight={<DownloadLight />}>Methodology (PDF)</Button>
          </a>
          <a href="/pdf/PDF-report-Assessment-Jan-2023.pdf" target="_blank" download>
            <Button secondary iconRight={<DownloadDark />}>Latest Assessment (PDF)</Button>
          </a>
          <a href="https://vinter.co/k33">
            <Button secondary iconRight={<ExternalLink />}>Go To Vinter</Button>
          </a>
        </div>

        <div className={styles.textLine}>Ticker KVQ on Bloomberg and Refinitiv</div>

        {/* <div className={styles.buttons}>
          <Button secondary iconRight={<ExternalLink />}>Bloomberg</Button>
          <Button secondary iconRight={<ExternalLink />}>Refinitiv</Button>
        </div> */}
      </section>

      <section className={styles.selectionSection}>
        <div className={styles.prevNext}>
          <div className={styles.prevNextItem}>
            <ArrowLeft />
            <div className={styles.prevText}>
              <span className={styles.detailedDescription}>Last selection and rebalancing date : </span>February 1st 2023
            </div>
          </div>

          <div className={styles.prevNextItem}>
            <div className={styles.nextText}>
              <span className={styles.detailedDescription}>Next selection and rebalancing date : </span>May 1st 2023
            </div>
            <ArrowRight />
          </div>
        </div>

        <div className={styles.title}>
          {__text__.SELECTION_TITLE}
        </div>

        <img src="/k33-vinter-quality-index-selection.svg" className={styles.mainImage} alt="K33 Vinter quality index selection" />
      </section>
    </Page>
  );
}
