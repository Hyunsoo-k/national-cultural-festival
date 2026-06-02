import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants/queryKeys';
import { REALMS } from '@/constants/realms';
import { getAreas } from '@/services/getAreas';
import { getRealms } from '@/services/getRealms';
import { HomeHeroSection } from '@/components/sections/HomeHeroSection/HomeHeroSection';
import { SectionDivider } from '@/components/ui/SectionDivider/SectionDivider';
import { HomeSection } from '@/components/sections/HomeSection/HomeSection';

import styles from './page.module.scss';

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: QUERY_KEYS.areas(),
    queryFn: () => getAreas('전체'),
  });

  await queryClient.prefetchQuery({
    queryKey: QUERY_KEYS.realms(),
    queryFn: () => getRealms('F000'),
  });

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <HomeHeroSection />
          <SectionDivider label='AREA' />
          <HomeSection
            category='area'
            title='지역별 축제'
          />
          <SectionDivider label='REALM' />
          <HomeSection
            category='realm'
            title='분야별 축제'
          />
        </HydrationBoundary>
      </main>
    </div>
  );
}