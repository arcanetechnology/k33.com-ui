import { Button } from '@arcanetechnology/react-ui-lib/lib/index.cjs';
import FeatureList from 'components/FeatureList';
import KeyPoints from 'components/KeyPoints';
import Page from 'components/Page';
import ReportPageHeader from 'components/ReportPageHeader';
import __text__ from 'text/aheadofthecurve';
import styles from './index.module.scss';

export default function AheadOfTheCurvePage() {
  return (
    <Page dark subLogo={{ image: '/research-logo-dark.png' }}>
      <ReportPageHeader
        title={__text__.TITLE}
        subtitle={__text__.SUBTITLE}
      />

      <section className={styles.reportSection}>
        <div className={styles.title}>{__text__.REPORT.title}</div>
        <div className={styles.keyPointsWrapper}>
          <KeyPoints keyPoints={__text__.REPORT.keyPoints} />
          <Button onDark>Download Sample Report</Button>
        </div>
      </section>

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
