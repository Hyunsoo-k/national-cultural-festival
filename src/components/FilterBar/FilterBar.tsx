'use client';

import styles from './FilterBar.module.scss';

type FilterItem = {
  readonly code: string;
  readonly name: string;
};

type Props = {
  items: readonly FilterItem[];
  selectedFilter: string | undefined;
  onClick: (value: string) => void;
};

export const FilterBar = ({ items, selectedFilter, onClick }: Props) => {

  return (
    <div className={styles.filterBar}>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.code} className={styles.item}>
            <button
              type="button"
              onClick={() => onClick(item.code)}
              className={`${styles.btn} ${selectedFilter === item.code ? styles.selected : ''}`}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};