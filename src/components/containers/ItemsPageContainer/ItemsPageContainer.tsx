'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import type { Category } from '@/types/category';
import type { AreaOrRealmItem } from '@/types/areaOrRealmItem';
import { AREAS } from '@/constants/areas';
import { REALMS } from '@/constants/realms';
import { useGetAreas } from '@/hooks/useGetAreas';
import { useGetRealms } from '@/hooks/useGetRealms';
import { ScreenPaddingWrapper } from '@/components/layouts/ScreenPaddingWrapper/ScreenPaddingWrapper';
import { SectionDivider } from '@/components/ui/SectionDivider/SectionDivider';
import { FilterBar } from '@/components/FilterBar/FilterBar';
import { CardSkeleton } from '@/components/skeletons/CardSkeleton/CardSkeleton';
import { Card } from '@/components/Card/Card';

import styles from './ItemsPageContainer.module.scss';

type AreaKey = keyof typeof AREAS;
type RealmKey = keyof typeof REALMS;

const AREA_FILTERS = Object.keys(AREAS) as AreaKey[];
const REALM_FILTERS = Object.keys(REALMS) as RealmKey[];

type Props = {
  category: Category;
};

export const ItemsPageContainer = ({ category }: Props) => {
  const isAreaCategory = category === 'area';

  const [selectedFilter, setSelectedFilter] = useState<AreaKey | RealmKey>(
    isAreaCategory ? AREA_FILTERS[0] : REALM_FILTERS[0]
  );

  const lastItemRef = useRef<HTMLLIElement | null>(null);

  const areasQuery = useGetAreas(category, selectedFilter);

  const realmCode = !isAreaCategory ? (REALMS[selectedFilter as RealmKey] ?? '') : '';
  const realmsQuery = useGetRealms(category, realmCode);

  const {
    data,
    isFetching,
    fetchNextPage,
    hasNextPage,
  } = isAreaCategory ? areasQuery : realmsQuery;

  const items = data?.pages.flatMap((page) => {
    const item = page.body.items.item;
    const arr = Array.isArray(item) ? item : [item];
    
    return arr.filter((i) => i?.title && i?.realmName);
  }) ?? [];

  const filterItems: (AreaKey | RealmKey)[] = isAreaCategory ? AREA_FILTERS : REALM_FILTERS;

  useEffect(() => {
    const target = lastItemRef.current;

    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage && !isFetching) {
          fetchNextPage();
        }
      },
      { root: null, threshold: 0.7 }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [hasNextPage, fetchNextPage, isFetching]);

  const handleCategoryClick = (nextCategory: Category) => {
    setSelectedFilter(
      nextCategory === 'area' ? AREA_FILTERS[0] : REALM_FILTERS[0]
    );
  };

  return (
    <ScreenPaddingWrapper>
      <div className={styles.itemsPageContainer}>
        <div className={styles.categories}>
          <Link
            href="/items?category=area"
            onClick={() => handleCategoryClick('area')}
            className={`${styles.category} ${isAreaCategory ? styles.selected : ''}`}
          >
            지역별
          </Link>
          <Link
            href="/items?category=realm"
            onClick={() => handleCategoryClick('realm')}
            className={`${styles.category} ${!isAreaCategory ? styles.selected : ''}`}
          >
            분야별
          </Link>
        </div>
        <FilterBar
          items={filterItems as AreaKey[] | RealmKey[]}
          selectedFilter={selectedFilter}
          onClick={(value) => setSelectedFilter(value as AreaKey | RealmKey)}
        />
        <SectionDivider label={category} />
        <ul className={styles.list}>
          {items.map((item: AreaOrRealmItem, idx) => (
            <li
              key={idx}
              className={styles.item}
              ref={idx === items.length - 1 ? lastItemRef : null}
            >
              <Card item={item} />
            </li>
          ))}
          {isFetching && hasNextPage &&
            Array.from({ length: 12 }).map((_, idx) => (
              <li
                key={`skeleton-${idx}`}
                className={styles.item}
                >
                <CardSkeleton />
              </li>
            ))}
        </ul>
      </div>
    </ScreenPaddingWrapper>
  );
};