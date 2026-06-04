import Link from 'next/link';
import Image from 'next/image';
import { CiLocationOn } from "react-icons/ci";
import { PiCalendarMinusThin } from "react-icons/pi";

import { AreaOrRealmItem } from '@/types/areaOrRealmItem';
import { REALMS } from '@/constants/realms';
import { decodeHtml } from '@/utils/decodeHtml';
import { formatDate } from '@/utils/formatDate';

import styles from './Card.module.scss';

type Props = {
  item: AreaOrRealmItem;
};

export const Card = ({ item }: Props) => {
  const realmCode = REALMS[item.realmName as keyof typeof REALMS];
  
  return (
    <Link
      href={`/detail/${item.seq}?realm=${realmCode}&gpsX=${item.gpsX}&gpsY=${item.gpsY}`}
      className={styles.card}
    >
      <div className={styles.thumbnailWrapper}>
        <Image src={item.thumbnail} alt={item.title || ''} fill className={styles.thumbnail} />
      </div>
      <div className={styles.info}>
        <span className={styles.realmName}>{item.realmName || ''}</span>
        <h3 className={styles.title}>
          {decodeHtml(item.title || '')}
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