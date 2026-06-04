import { ScreenPaddingWrapper } from '@/components/layouts/ScreenPaddingWrapper/ScreenPaddingWrapper';

import styles from './ItemsHeroSection.module.scss';

export const ItemsHeroSection = () => {
  return (
    <div className={styles.itemsHeroSection}>
      <ScreenPaddingWrapper>
        <div className={styles.inner}>
          <header className={styles.header}>
            <h2 className={styles.title}>
              지역별 <strong className={styles.strong}>문화축제</strong><br />
              한눈에 모아보기
            </h2>
            <span className={styles.description}>
              전국 각지의 특색있는 축제를<br />
              지역과 분야별로 탐색해보세요.
            </span>
          </header>
        </div>
      </ScreenPaddingWrapper>
    </div>
  );
};