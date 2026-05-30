'use client';

import { useState } from 'react';

import styles from './FilterBar.module.scss';

type Props = {
  items: string[];
  onClick: () => void;
};

export const FilterBar = ({ items, onClick }: Props) => {
  const [selected, setSelected] = useState<string>(items[0]);

  const handleItemSelect = (value: string) => {
    setSelected(value);
    onClick();
  };

  return (
    <div className={styles.filterBar}>
      <ul className={styles.list}>
        {items.map((item: string) => (
          <li
            key={item}
            onClick={() => handleItemSelect(item)}
            className={styles.item}
          >
            <button
              onClick={() => handleItemSelect(item)}
              className={`${styles.btn} ${selected === item ? styles.selected : ''}`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};