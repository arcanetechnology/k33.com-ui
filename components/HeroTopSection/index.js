import cn from 'classnames';
import CallToActionInput from 'components/CallToActionInput';
import HeroText from 'components/HeroText';
import styles from './index.module.scss';

export default function HeroTopSection({ heroText, subText, leftImage, rightImage, className }) {
  return (
    <section className={cn(styles.heroTopSection, { [className]: !!className })}>
      <div className={styles.leftImageWrapper}>
        {leftImage}
      </div>

      <div className={styles.content}>
        <HeroText
          className={styles.heroText}
          text={heroText}
        />

        <div className={styles.subText}>{subText}</div>

        <CallToActionInput className={styles.input} />
      </div>

      <div className={styles.rightImageWrapper}>
        {rightImage}
      </div>
    </section>
  );
}
