'use client';

import Link from 'next/link';
import { useState } from 'react';
import { GoArrowRight } from "react-icons/go";

import { Category } from '@/types/category';
import { AreaOrRealmItem } from '@/types/areaOrRealmItem';
import { AREAS } from '@/constants/areas';
import { REALMS } from '@/constants/realms';
import { useGetAreas } from '@/hooks/useGetAreas';
import { useGetRealms } from '@/hooks/useGetRealms';
import { FilterBar } from '@/components/FilterBar/FilterBar';
import { Slider } from '@/components/Slider/Slider';

import styles from './HomeSection.module.scss';

const AREAS_VALUES = Object.keys(AREAS);
const REALMS_VALUES = Object.keys(REALMS);

type Props = {
  category: Category;
  title: string;
};

export const HomeSection = ({ category, title }: Props) => {
  const [selectedFilter, setSelectedFilter] = useState<string>(
    category === 'area' ? AREAS_VALUES[0] : REALMS_VALUES[0]
  );

  const {
    data: areasData,
    isFetching: isAreasDataFetching
  } = useGetAreas(category, selectedFilter);

  const realmCode = category === 'realm' ? REALMS[selectedFilter] ?? '' : '';

  const {
    data: reamlsData,
    isFetching: isRealmsDataFetching
  } = useGetRealms(category, realmCode);

  const isFetching = category === 'area' ? isAreasDataFetching : isRealmsDataFetching;

  const areaItems = areasData?.pages.flatMap((page) => page.body.items.item);
  const realmItems = reamlsData?.pages.flatMap((page) => page.body.items.item);

  const itemsToRender = category === 'area' ? areaItems : realmItems;
  
  const filterItems = category === 'area' ? Object.keys(AREAS) : Object.keys(REALMS);
  
  const handleFilterClick = (value: string) => {
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