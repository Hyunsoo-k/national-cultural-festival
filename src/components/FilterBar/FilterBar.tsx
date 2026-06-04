'use client';

import type { AreaKey } from '@/types/areaKey';
import type { RealmKey } from '@/types/realmKey';

import styles from './FilterBar.module.scss';

type Props = {
  items: AreaKey[] | RealmKey[];
  selectedFilter: string | undefined;
  onClick: (filterItem: AreaKey | RealmKey) => void;
};

export const FilterBar = ({ items, selectedFilter, onClick }: Props) => {

  return (
    <div className={styles.filterBar}>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item} className={styles.item}>
            <button
              type="button"
              onClick={() => onClick(item)}
              className={`${styles.btn} ${selectedFilter === item ? styles.selected : ''}`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};