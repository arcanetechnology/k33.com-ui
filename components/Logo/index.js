import NextLink from 'components/NextLink';
import styles from './index.module.scss';

export default function Logo({ ...props }) {
  return (
    <NextLink href="/" className={styles.link}>
      <img src="/K33.svg" alt="K33" {...props} />
    </NextLink>
  );
}
