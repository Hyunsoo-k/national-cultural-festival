import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants/queryKeys';
import { getAreas } from '@/services/getAreas';
import { getRealms } from '@/services/getRealms';
import { HomeContainer } from '@/components/containers/HomeContainer/HomeContainer';

import styles from './page.module.scss';

export default async function Home() {
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
    <main className={styles.page}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <HomeContainer />
      </HydrationBoundary>
    </main>
  );
}