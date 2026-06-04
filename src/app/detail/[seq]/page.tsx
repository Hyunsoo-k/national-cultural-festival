import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants/queryKeys';
import { getDetail } from '@/services/getDetail';
import { DetailPageContainer } from '@/components/containers/DetailPageContainer/DetailPageContainer';

import styles from './page.module.scss';

type Props = {
  params: Promise<{ seq: string }>;
  searchParams: Promise<{ gpsX: string; gpsY: string, realm: string }>;
};

export default async function DetailPage({ params, searchParams }: Props) {
  const { seq } = await params;
  const { realm, gpsX, gpsY } = await searchParams;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: QUERY_KEYS.detail(seq),
    queryFn: () => getDetail(seq)
  });

  return (
    <main className={styles.detailPage}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DetailPageContainer seq={seq} realm={realm} gpsX={gpsX} gpsY={gpsY}/>
      </HydrationBoundary>
    </main>
  );
}