import cn from 'classnames';
import styles from './index.module.scss';

/**
 * Represents a section title on various pages.
 *
 * @param {String} text
 * @param {String} className: an additonal className for styling
 */
export default function SectionTitle({ text, className }) {
  return (
    <div className={cn(styles.sectionTitle, { [className]: !!className })}>{text}</div>
  );
}
