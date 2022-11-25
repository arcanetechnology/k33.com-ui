import cn from 'classnames';
import useIsDarkMode from 'hooks/useIsDarkMode';
import styles from './index.module.scss';

/**
 * Encapsulates UI for key points used across different components.
 *
 * @param {Array} keyPoints: list of texts
 */
export default function KeyPoints({ keyPoints }) {
  const isDarkMode = useIsDarkMode();

  return (
    <ul className={cn(styles.keyPoints, { [styles.dark]: isDarkMode })}>
      {keyPoints.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  );
}
