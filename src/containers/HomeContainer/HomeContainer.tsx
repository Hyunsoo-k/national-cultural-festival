import { HomeHeroSection } from '@/components/sections/HomeHeroSection/HomeHeroSection';
import { SectionDivider } from '@/components/ui/SectionDivider/SectionDivider';
import { HomeSection } from '@/components/sections/HomeSection/HomeSection';

import styles from './HomeContainer.module.scss';
import { ScreenPaddingWrapper } from '@/components/layouts/ScreenPaddingWrapper/ScreenPaddingWrapper';

export const HomeContainer = () => {
  return (
    <main className={styles.homeContainer}>
      <HomeHeroSection />
      <ScreenPaddingWrapper>
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
      </ScreenPaddingWrapper>
    </main>
  );
};