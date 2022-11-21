import NextLink from 'components/NextLink';
import useIsDarkMode from 'hooks/useIsDarkMode';
import { useMemo } from 'react';
import styles from './index.module.scss';

export default function Logo({ ...props }) {
  const isDarkMode = useIsDarkMode();

  const imgSrc = useMemo(() => (
    isDarkMode ? '/K33-dark.svg' : '/K33.svg'
  ), [isDarkMode]);

  return (
    <NextLink href="/" className={styles.link}>
      <img src={imgSrc} alt="K33" {...props} />
    </NextLink>
  );
}
