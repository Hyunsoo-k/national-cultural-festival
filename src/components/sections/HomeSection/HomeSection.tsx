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

type Props = {
  category: Category;
  title: string;
};

export const HomeSection = ({ category, title }: Props) => {
  const areasValues = Object.keys(AREAS);
  const realmsValues = Object.keys(REALMS);

  const [selectedFilter, setSelectedFilter] = useState<string>(
    category === 'area' ? areasValues[0] : realmsValues[0]
  );

  const {
    data: areasData,
    isFetching: isAreasFetching
  } = useGetAreas(category, selectedFilter);

  const {
    data: realmsData,
    isFetching: isRealmsFetching
  } = useGetRealms(category, REALMS[selectedFilter]);

  const isFetching = category === 'area' ? isAreasFetching : isRealmsFetching;

  const items = category === 'area'
    ? areasData?.body?.items?.item
    : realmsData?.body?.items?.item;
  
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
       <Slider isFetching={isFetching} items={items as AreaOrRealmItem[]} />
    </section>
  );
};