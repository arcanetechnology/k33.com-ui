import cn from 'classnames';
import styles from './index.module.scss';
import Item from './Item';

export default function FeatureSummaryList({ data, small }) {
  return (
    <section className={cn(styles.featureSummaryList, { [styles.small]: small })}>
      <ul>
        {data.map((item) => (
          <Item
            key={item.title}
            small={small}
            imageSrc={item.imageSrc}
            imageWidth={item.imageWidth}
            imageHeight={item.imageHeight}
            title={item.title}
            text={item.text}
            url={item.url}
          />
        ))}
      </ul>
    </section>
  );
}
