import FeatureList from 'components/FeatureList';
import Page from 'components/Page';
import ReportPageHeader from 'components/ReportPageHeader';
import ReportPageReportSection from 'components/ReportPageReportSection';
import Head from 'next/head';
import __text__ from 'text/fridayfocus';
import styles from './index.module.scss';

export default function FridayFocusPage() {
  return (
    <Page dark subLogo={{ image: '/research-logo-dark.png' }}>
      <Head>
        <title>The Friday Focus | K33</title>
      </Head>

      <ReportPageHeader
        sectionClassName={styles.header}
        contentClassName={styles.content}
        titleClassName={styles.title}
        subtitleClassName={styles.subtitle}
        title={__text__.TITLE}
        subtitle={__text__.SUBTITLE}
      />

      <ReportPageReportSection
        title={__text__.REPORT.title}
        keyPoints={__text__.REPORT.keyPoints}
        downloadUrl="https://arcane.no/research/the-friday-focus-issue-60"
      />

      <FeatureList
        className={styles.featureList}
        data={[
          {
            reverse: true,
            callToActionInput: true,
            panRightContentItem: true,
            imgSrc: '/lof-friday-focus-landing-page.png',
            ...__text__.GET_ACCESS
          }
        ]}
      />
    </Page>
  );
}
