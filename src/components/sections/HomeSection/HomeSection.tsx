'use client';

import Link from 'next/link';
import { useState } from 'react';
import { GoArrowRight } from "react-icons/go";

import type { Category } from '@/types/category';
import type { AreaOrRealmItem } from '@/types/areaOrRealmItem';
import type { AreaKey } from '@/types/areaKey';
import type { RealmKey } from '@/types/realmKey';
import { AREAS } from '@/constants/areas';
import { REALMS } from '@/constants/realms';
import { useGetAreas } from '@/hooks/useGetAreas';
import { useGetRealms } from '@/hooks/useGetRealms';
import { FilterBar } from '@/components/FilterBar/FilterBar';
import { Slider } from '@/components/Slider/Slider';

import styles from './HomeSection.module.scss';

const AREA_FILTERS = Object.keys(AREAS) as AreaKey[];
const REALM_FILTERS = Object.keys(REALMS) as RealmKey[];

type Props = {
  category: Category;
  title: string;
};

export const HomeSection = ({ category, title }: Props) => {
  const isAreaCategory = category === 'area';

  const [selectedFilter, setSelectedFilter] = useState<AreaKey | RealmKey>(
    isAreaCategory ? AREA_FILTERS[0] : REALM_FILTERS[0]
  );

  const {
    data: areasData,
    isFetching: isAreasDataFetching
  } = useGetAreas(category, selectedFilter);

  const realmCode = category === 'realm' ? (REALMS[selectedFilter as RealmKey] ?? '') : '';

  const {
    data: reamlsData,
    isFetching: isRealmsDataFetching
  } = useGetRealms(category, realmCode);

  const isFetching = category === 'area' ? isAreasDataFetching : isRealmsDataFetching;

  const areaItems = areasData?.pages.flatMap((page) => page.body.items.item);
  const realmItems = reamlsData?.pages.flatMap((page) => page.body.items.item);

  const itemsToRender = category === 'area' ? areaItems : realmItems;
  
  const filterItems = category === 'area' ? AREA_FILTERS : REALM_FILTERS;
  
  const handleFilterClick = (value: AreaKey | RealmKey) => {
      setSelectedFilter(value);
  };

  return (
    <section className={styles.homeSection}>
      <FilterBar
        items={filterItems}
        selectedFilter={selectedFilter}
        onClick={handleFilterClick}
      />
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <Link href={`/items?category=${category}`} className={styles.viewMoreBtn}>
          전체보기
          <GoArrowRight className={styles.arrowIcon}/>
        </Link>
      </header>
       <Slider isFetching={isFetching} items={itemsToRender as AreaOrRealmItem[]} />
    </section>
  );
};