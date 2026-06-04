import Image from 'next/image';
import Link from 'next/link';
import { TfiArrowCircleDown } from "react-icons/tfi";

import { ScreenPaddingWrapper } from '@/components/layouts/ScreenPaddingWrapper/ScreenPaddingWrapper';

import styles from './HomeHeroSection.module.scss';

export const HomeHeroSection = () => {
  return (
    <section className={styles.homeHeroSection}>
      <ScreenPaddingWrapper>
        <div className={styles.inner}>
          <div className={styles.eyeBrow}>
            KOREA CULTURE FESTIVAL GUIDE
          </div>
          <div className={styles.main}>
            <h2 className={styles.title}>
              전국 문화·축제<br />
              안내 가이드
            </h2>
            <span className={styles.subTitle}>Feel the Culture, Live the Festival</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.bottom}>
            <p className={styles.description}>
              전국 각지에서 펼쳐지는 다채로운 문화예술 축제를<br />
              지역별, 기간별로 한눈에 확인해 보세요.
            </p>
            <Link href='/#area' className={styles.viewMoreLink}>
              둘러보기
              <TfiArrowCircleDown className={styles.icon} />
            </Link>
          </div>
        </div>
      </ScreenPaddingWrapper>
    </section>
  );
};