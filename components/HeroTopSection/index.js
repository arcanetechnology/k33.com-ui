import cn from 'classnames';
import CallToActionInput from 'components/CallToActionInput';
import HeroText from 'components/HeroText';
import styles from './index.module.scss';

export default function HeroTopSection({ heroText, subText, leftImage, rightImage, className, oneLiner, largerSubText, noCallToActionButton }) {
  return (
    <section className={cn(styles.heroTopSection, { [className]: !!className })}>
      <div className={styles.leftImageWrapper}>
        {leftImage}
      </div>

      <div className={cn(styles.content, { [styles.oneLiner]: oneLiner })}>
        <HeroText
          className={styles.heroText}
          text={heroText}
        />

        <div className={cn(styles.subText, { [styles.largerSubText]: largerSubText })}>{subText}</div>

        {!noCallToActionButton && (
          <CallToActionInput className={styles.input} />
        )}
      </div>

      <div className={styles.rightImageWrapper}>
        {rightImage}
      </div>
    </section>
  );
}
