import cn from 'classnames';
import NextLink from 'components/NextLink';
import Image from 'next/image';
import styles from './index.module.scss';

export default function Item({ small, imageSrc, imageWidth, imageHeight, title, text, url }) {
  return (
    <li className={cn(styles.featureSummaryItem, { [styles.small]: small })}>
      <div className={styles.content}>
        {url ? (
          <NextLink href={url} className={styles.link}>
            <Image src={imageSrc} alt={title} width={imageWidth} height={imageHeight} />
            <div className={styles.title}>{title}</div>
          </NextLink>
        ) : (
          <>
            <Image src={imageSrc} alt={title} width={imageWidth} height={imageHeight} />
            <div className={styles.title}>{title}</div>
          </>
        )}
        <div className={styles.text}>{text}</div>
      </div>
    </li>
  );
}
