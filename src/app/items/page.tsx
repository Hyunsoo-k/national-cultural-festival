import { Suspense } from 'react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants/queryKeys';
import { getAreas } from '@/services/getAreas';
import { getRealms } from '@/services/getRealms';
import { ItemsHeroSection } from '@/components/sections/ItemsHeroSection/ItemsHeroSection';
import { ItemsPageContainer } from '@/components/containers/ItemsPageContainer/ItemsPageContainer';

import styles from './page.module.scss';

type Props = {
  searchParams: Promise<{ category?: 'area' | 'realm' }>;
};

export default async function ItemsPage({ searchParams }: Props) {
  const { category } = await searchParams;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: QUERY_KEYS.areas(),
    queryFn: () => getAreas('전체', undefined),
  });

  await queryClient.prefetchQuery({
    queryKey: QUERY_KEYS.realms(),
    queryFn: () => getRealms('F000', undefined),
  });

  return (
    <main className={styles.itemsPage}>
      <ItemsHeroSection />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense 
          fallback={
            <div className={styles.spinnerWrapper}>
              로딩중
            </div>
          }
        >
          <ItemsPageContainer category={category || 'area'} />
        </Suspense>
      </HydrationBoundary>
    </main>
  );
};