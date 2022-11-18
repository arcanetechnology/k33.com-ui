import { Button } from '@arcanetechnology/react-ui-lib';
import cn from 'classnames';
import ComingSoon from 'components/ComingSoon';
import NextLink from 'components/NextLink';
import styles from './index.module.scss';

export default function FeatureList({ data, className }) {
  return (
    <div className={cn(styles.featureList, { [className]: !!className })}>
      {data.map((item) => (
        <div className={cn(styles.featureItem, { [styles.reverse]: item.reverse })} key={item.title}>
          <div className={styles.contentItem}>
            <img className={styles.image} src={item.imgSrc} alt={item.title} />
          </div>
          <div className={styles.contentItem}>
            {item.comingSoon && (
              <ComingSoon className={styles.comingSoon} />
            )}
            <div className={styles.title}>{item.title}</div>
            <div className={styles.subtitle}>{item.subtitle}</div>
            <ul className={styles.keyPoints}>
              {item.keyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            {!item.comingSoon && (
              <NextLink href={item.buttonUrl || '/'}>
                <Button arrowRight>Find Out More</Button>
              </NextLink>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
