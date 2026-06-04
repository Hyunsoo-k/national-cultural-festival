import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants/queryKeys';
import { getAreas } from '@/services/getAreas';
import { getRealms } from '@/services/getRealms';
import { HomePageContainer } from '@/components/containers/HomePageContainer/HomePageContainer';

import styles from './page.module.scss';

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: QUERY_KEYS.areas(),
    queryFn: () => getAreas('전체', '1'),
  });

  await queryClient.prefetchQuery({
    queryKey: QUERY_KEYS.realms(),
    queryFn: () => getRealms('F000', '1'),
  });

  return (
    <main className={styles.page}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <HomePageContainer />
      </HydrationBoundary>
    </main>
  );
}