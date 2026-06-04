  import { useRef } from 'react';
  
  import type { AreaOrRealmItem } from '@/types/areaOrRealmItem';
  import { Card } from '../Card/Card';
  import { CardSkeleton } from '@/components/skeletons/CardSkeleton/CardSkeleton';
  import { SliderControls } from './components/SliderControls/SliderControls';

  import styles from './Slider.module.scss';

  type Props = {
    isFetching: boolean;
    items: AreaOrRealmItem[];
  };

  export const Slider = ({ isFetching, items }: Props) => {
    const trackRef = useRef<HTMLUListElement | null>(null);

    return (
      <div className={styles.slider}>
        <ul ref={trackRef} className={styles.track}>
          {isFetching && Array.from({ length: 10 }).map((_, idx) => (
            <li key={idx} className={styles.item}>
              <CardSkeleton key={idx} />
            </li>
          ))}
          {!isFetching && items?.map((item: AreaOrRealmItem) => (
            <li key={item.title} className={styles.item}>
              <Card item={item} />
            </li>
          ))}
        </ul>
        <SliderControls trackRef={trackRef} />
      </div>
    );
  };