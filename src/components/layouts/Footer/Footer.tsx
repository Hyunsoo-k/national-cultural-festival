import Link from 'next/link';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.body}>
          <span className={styles.eyebrow}>
            KOREA NATIONAL FESTIVAL
          </span>
          <h2 className={styles.title}>
            <Link href='/'>전국문화축제 안내 가이드</Link>
          </h2>
          <span className={styles.description}>
            전국 각지에서 펼쳐지는 다채로운 문화예술 축제를<br />
            지역별, 분야별로 한눈에 확인해 보세요.
          </span>
          <span className={styles.subTitle}>
            Feel the Culture, Live the Festival
          </span>
        </div>
        <div className={styles.bottom}>
          <span className={styles.copyright}>
            © 2026 HYUNSOO KIM. All rights reserved.
          </span>
          <span className={styles.dataSource}>
            데이터출처 공공데이터포털
          </span>
        </div>
      </div>
    </footer>
  );
};