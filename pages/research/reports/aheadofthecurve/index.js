import FeatureList from 'components/FeatureList';
import Page from 'components/Page';
import ReportPageHeader from 'components/ReportPageHeader';
import ReportPageReportSection from 'components/ReportPageReportSection';
import Head from 'next/head';
import __text__ from 'text/aheadofthecurve';
import styles from './index.module.scss';

export default function AheadOfTheCurvePage() {
  return (
    <Page dark subLogo={{ image: '/research-logo-dark.png' }}>
      <Head>
        <title>Ahead of the curve | k33.com</title>
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
      />

      <FeatureList
        className={styles.featureList}
        data={[
          {
            reverse: true,
            callToActionInput: true,
            panRightContentItem: true,
            imgSrc: '/lof-ahead-the-curve-landing-page.png',
            ...__text__.GET_ACCESS
          }
        ]}
      />
    </Page>
  );
}
