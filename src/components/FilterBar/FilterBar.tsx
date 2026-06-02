'use client';

import styles from './FilterBar.module.scss';

type Props = {
  items: string[];
  selectedFilter: string | undefined;
  onClick: (value: string) => void;
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