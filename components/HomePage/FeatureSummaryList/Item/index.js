import cn from 'classnames';
import Image from 'next/image';
import styles from './index.module.scss';

export default function Item({ small, imageSrc, imageWidth, imageHeight, title, text }) {
  return (
    <li className={cn(styles.featureSummaryItem, { [styles.small]: small })}>
      <div className={styles.content}>
        <Image src={imageSrc} alt={title} width={imageWidth} height={imageHeight} />
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </li>
  );
}
