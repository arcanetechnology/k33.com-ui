import { useMemo } from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

/**
 * @param {String | Array} text: could be either a single String or an Array of lines
 */
export default function HeroText({ text, className }) {
  const lines = useMemo(() => (
    Array.isArray(text) ? text : [text]
  ), [text]);

  return (
    <h1 className={cn(styles.heroText, { [className]: !!className })} data-testid="heroText">
      {lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </h1>
  );
}
