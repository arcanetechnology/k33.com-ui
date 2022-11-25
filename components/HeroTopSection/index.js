import cn from 'classnames';
import CallToActionInput from 'components/CallToActionInput';
import HeroText from 'components/HeroText';
import styles from './index.module.scss';

/**
 * Represents a common hero top section for different pages, outlining a header text in the center, tiny description, a call to action, and decorative images on the sides.
 * The component is also configurable through different boolean props as some pages require unique styling.
 *
 * @param {String} heroText
 * @param {String} subText
 * @param {Component} leftImage
 * @param {Component} rightImage
 * @param {String} className
 * @param {Boolean} oneLiner
 * @param {Boolean} largerSubText
 * @param {Boolean} noCallToActionButton
 */
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
