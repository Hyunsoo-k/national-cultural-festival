import Image from 'next/image';
import Link from 'next/link';
import { SlArrowDown } from "react-icons/sl";

import styles from './HeroSection.module.scss';

export const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.textArea}>
        <div className={styles.eyeBrow}>
          KOREA CULTURE FESTIVAL GUIDE
        </div>
        <h2 className={styles.title}>
          전국 문화·축제<br />
          안내 가이드 
        </h2>
        <span className={styles.subTitle}>Feel the Culture, Live the Festival</span>
        <p className={styles.description}>
          전국 각지에서 펼쳐지는 다채로운 문화예술 축제를<br />
          지역별, 기간별로 한눈에 확인해 보세요.
        </p>
        <Link href='/#area' className={styles.viewMoreLink}>
          둘러보기
          <SlArrowDown className={styles.arrowIcon} />
        </Link>
      </div>
      <div className={styles.imgArea}>
        <div className={styles.imgWrapper}>
          <Image
            src='/images/hero-section-main.jpg'
            alt='hero-section-main'
            fill
            className={styles.mainImg}
          />
          <Image
            src='/images/hero-section-sub.jpg'
            alt='hero-section-sub'
            width={120}
            height={150}
            className={styles.subImg}
          />
        </div>
      </div>
    </section>
  );
};