import { Button } from '@arcanetechnology/react-ui-lib';
import cn from 'classnames';
import CallToActionInput from 'components/CallToActionInput';
import ComingSoon from 'components/ComingSoon';
import KeyPoints from 'components/KeyPoints';
import NextLink from 'components/NextLink';
import useIsDarkMode from 'hooks/useIsDarkMode';
import styles from './index.module.scss';

/**
 * Represents a list of features. Data for the features is provided by the data array prop.
 * Each feature item is usually represented by an image on the left and content on the right, with a title, subtitle, key points, and a button.
 *
 * @param {Array} data: Array of objects describing one feature:
 *                         - reverse: if true, content is on the left and image is on the right
 *                         - title,
 *                         - subtitle
 *                         - imgSrc
 *                         - comingSoon: if true, displays a Coming Soon label instead of an action button
 *                         - keyPoints: Array of Strings, each representing a bullet point,
 *                         - buttonUrl
 *                         - callToActionInput: displays call to action input instead of a button
 *                         - panRightContentItem: pans the right content item to the endge of the page
 * @param {String} className: an additonal className for styling
 */
export default function FeatureList({ data, className }) {
  const isDarkMode = useIsDarkMode();

  return (
    <div className={cn(styles.featureList, { [className]: !!className, [styles.dark]: isDarkMode })}>
      {data.map((item) => (
        <div className={cn(styles.featureItem, { [styles.reverse]: item.reverse })} key={item.title}>
          <div className={cn(styles.contentItem, { [styles.panToTheRight]: item.reverse && item.panRightContentItem })}>
            {item.imgSrc && (
              <img className={styles.image} src={item.imgSrc} alt={item.title} />
            )}
          </div>
          <div className={cn(styles.contentItem, { [styles.panToTheRight]: !item.reverse && item.panRightContentItem })} data-right-content-item>
            {item.comingSoon && (
              <ComingSoon className={styles.comingSoon} />
            )}
            <div className={styles.title}>{item.title}</div>
            <div className={styles.subtitle}>{item.subtitle}</div>

            <KeyPoints keyPoints={item.keyPoints} />

            {!item.comingSoon && !item.callToActionInput && (
              <NextLink href={item.buttonUrl || '/'}>
                <Button arrowRight onDark={isDarkMode}>{item.buttonLabel || 'Find Out More'}</Button>
              </NextLink>
            )}
            {item.callToActionInput && (
              <CallToActionInput className={styles.input} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
