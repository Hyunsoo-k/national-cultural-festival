'use client';

import Image from 'next/image';

import { DetailItem } from '@/types/detailItem';
import { decodeHtml } from '@/utils/decodeHtml';

import styles from './DetailHeroSection.module.scss';

type Props = {
  item: DetailItem;
};

export const DetailHeroSection = ({ item }: Props) => {
  return (
    <section className={styles.detailHeroSection}>
      <div className={styles.blurBgWrapper}>
        <Image src={item.imgUrl} alt='blur' fill className={styles.blurBg} />
      </div>
      <div className={styles.imgWrapper}>
        <Image src={item.imgUrl} alt={item.title} fill className={styles.img} />
      </div>
      <div className={styles.info}>
        <span className={styles.realmName}>{item.realmName}</span>
        <h2 className={styles.title}>{decodeHtml(item.title)}</h2>
      </div>
    </section>
  );
};