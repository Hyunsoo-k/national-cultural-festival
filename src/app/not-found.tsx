import Link from 'next/link';

import styles from './not-found.module.scss';

export default function NotFound() {
  return (
    <main className={styles.notFoundPage}>
      <div className={styles.corners}>
        <span className={styles.cornerTl} />
        <span className={styles.cornerTr} />
        <span className={styles.cornerBl} />
        <span className={styles.cornerBr} />
      </div>
      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          PAGE NOT FOUND
          <span className={styles.eyebrowLine} />
        </div>
        <h1 className={styles.title}>찾을 수 없는 페이지입니다</h1>
        <p className={styles.description}>
          요청하신 페이지가 존재하지 않거나<br />
          이동되었을 수 있습니다.
        </p>
        <span className={styles.divider} />
        <Link href='/' className={styles.btn}>
          홈으로 돌아가기
        </Link>
      </div>
      <div className={styles.bgText} aria-hidden='true'>404</div>
    </main>
  );
}