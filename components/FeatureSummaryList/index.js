import cn from 'classnames';
import styles from './index.module.scss';
import Item from './Item';

/**
 * A summary of features. Data for the features is provided by the data array prop.
 * Each item is represented by an image and some content (title and text).
 *
 * @param {Array} data: Array of objects describing one feature:
 *                        - imageSrc
 *                        - imageWidth
 *                        - imageHeight
 *                        - title
 *                        - text
 *                        - url
 * @param {Boolean} small: if true, the component is rendered in a small UI style
 */
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
