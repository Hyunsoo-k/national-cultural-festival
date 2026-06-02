'use client';

import Link from 'next/link';
import { useState } from 'react';

import { Category } from '@/types/category';
import { AreaOrRealmItem } from '@/types/areaOrRealmItem';
import { AREAS } from '@/constants/areas';
import { REALMS } from '@/constants/realms';
import { useGetAreas } from '@/hooks/useGetAreas';
import { useGetRealms } from '@/hooks/useGetRealms';
import { ScreenPaddingWrapper } from '@/components/layouts/ScreenPaddingWrapper/ScreenPaddingWrapper';
import { SectionDivider } from '@/components/ui/SectionDivider/SectionDivider';
import { FilterBar } from '@/components/FilterBar/FilterBar';
import { Card } from '@/components/Card/Card';

import styles from './ItemsPageContainer.module.scss';

const AREAS_VALUES = Object.keys(AREAS);
const REALMS_VALUES = Object.keys(REALMS);

type Props = {
  category: 'area' | 'realm';
};

export const ItemsPageContainer = ({ category }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(category);
  const [selectedFilter, setSelectedFilter] = useState<string>(
    category === 'area' ? AREAS_VALUES[0] : REALMS_VALUES[0]
  );

  const { data: areasData } = useGetAreas(selectedCategory, selectedFilter);

  const { data: reamlsData } = useGetRealms(selectedCategory, REALMS[selectedFilter]);

  const items = areasData?.body.items.item || reamlsData?.body.items.item;

  const filterBarItems = category === 'area' ? AREAS_VALUES : REALMS_VALUES;

  const handleCategoryClick = (category: Category) => {
    console.log(category);
    setSelectedCategory(category);
  };

  const handleFilterClick = (value: string) => {
    setSelectedFilter(value);
  };

  return (
    <ScreenPaddingWrapper>
      <div className={styles.itemsPageContainer}>
        <div className={styles.categories}>
          <Link
            href='/items?category=area'
            onClick={() => handleCategoryClick('area')}
            className={`${styles.category} ${selectedCategory === 'area' ? styles.selected : ''}`}
          >
            지역별
          </Link>
          <Link
            href='/items?category=realm'
            onClick={() => handleCategoryClick('realm')}
            className={`${styles.category} ${selectedCategory === 'realm' ? styles.selected : ''}`}
          >
            분야별
          </Link>
        </div>
        <FilterBar
          items={filterBarItems}
          selectedFilter={selectedFilter}
          onClick={handleFilterClick}
        />
        <SectionDivider label={category.toUpperCase()} />
        <ul className={styles.list}>
          {items?.map((item: AreaOrRealmItem) => (
            <li key={item.title} className={styles.item}>
              <Card item={item} />
            </li>
          ))}
        </ul>
      </div>
    </ScreenPaddingWrapper>
  );
};