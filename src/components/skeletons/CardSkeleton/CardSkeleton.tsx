import { CiLocationOn } from 'react-icons/ci';
import { PiCalendarMinusThin } from 'react-icons/pi';

import styles from './CardSkeleton.module.scss';

export const CardSkeleton = () => {
  return (
    <div className={styles.cardSkeleton}>
      <div className={styles.thumbnail} />
      <div className={styles.info}>
        <div className={styles.serviceName} />
        <div className={styles.title} />
        <div className={styles.area}>
          <CiLocationOn className={styles.icon} />
          <div className={styles.text} />
        </div>
        <span className={styles.date}>
          <PiCalendarMinusThin className={styles.icon} />
          <div className={styles.text} />
        </span>
      </div>
    </div>
  );
};