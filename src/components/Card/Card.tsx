import Link from 'next/link';
import Image from 'next/image';
import { CiLocationOn } from "react-icons/ci";
import { PiCalendarMinusThin } from "react-icons/pi";

import { AreaOrRealmItem } from '@/types/areaOrRealmItem';
import { decodeHtml } from '@/utils/decodeHtml';
import { formatDate } from '@/utils/formatDate';

import styles from './Card.module.scss';

type Props = {
  item: AreaOrRealmItem;
};

export const Card = ({ item }: Props) => {
  
  return (
    <Link href={`/detail/${item.seq}?gpsX=${item.gpsX}&gpsY=${item.gpsY}`} className={styles.card}>
      <div className={styles.thumbnailWrapper}>
        <Image src={item.thumbnail} alt={item.title} fill />
      </div>
      <div className={styles.info}>
        <span className={styles.serviceName}>{item.serviceName}</span>
        <h3 className={styles.title}>
          {decodeHtml(item.title)}
        </h3>
        <span className={styles.area}>
          <CiLocationOn className={styles.icon} />{item.area} {item.sigungu}
        </span>
        <span className={styles.date}>
          <PiCalendarMinusThin className={styles.icon} />
          {formatDate(item.startDate)} ~ {formatDate(item.endDate)}
        </span>
      </div>
    </Link>
  );
};