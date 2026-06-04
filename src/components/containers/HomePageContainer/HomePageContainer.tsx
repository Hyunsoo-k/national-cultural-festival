import { ScreenPaddingWrapper } from '@/components/layouts/ScreenPaddingWrapper/ScreenPaddingWrapper';
import { HomeHeroSection } from '@/components/sections/HomeHeroSection/HomeHeroSection';
import { SectionDivider } from '@/components/ui/SectionDivider/SectionDivider';
import { HomeSection } from '@/components/sections/HomeSection/HomeSection';

import styles from './HomePageContainer.module.scss';

export const HomePageContainer = () => {
  return (
    <div className={styles.homePageContainer}>
      <HomeHeroSection />
      <ScreenPaddingWrapper>
        <SectionDivider label='area' />
        <HomeSection
          category='area'
          title='지역별 축제'
        />
        <SectionDivider label='realm' />
        <HomeSection
          category='realm'
          title='분야별 축제'
        />
      </ScreenPaddingWrapper>
    </div>
  );
};