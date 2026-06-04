'use client';

import Link from 'next/link';
import { CiLocationOn } from "react-icons/ci";
import { PiCalendarMinusThin } from "react-icons/pi";
import { LiaWonSignSolid } from "react-icons/lia";
import { PiPhoneCallLight } from "react-icons/pi";
import { RiHome2Line } from "react-icons/ri";

import { formatDate } from '@/utils/formatDate';
import { decodeHtml } from '@/utils/decodeHtml';
import { useGetDetail } from '@/hooks/useGetDetail';
import { useGetRealms } from '@/hooks/useGetRealms';
import { ScreenPaddingWrapper } from '@/components/layouts/ScreenPaddingWrapper/ScreenPaddingWrapper';
import { DetailHeroSection } from '@/components/sections/DetailHeroSection/DetailHeroSection';
import { DetailSectionHeader } from './components/DetailSectionHeader/DetailSectionHeader';
import { KakaoMap } from './components/KakaoMap/KakaoMap';
import { Slider } from '@/components/Slider/Slider';

import styles from './DetailPageContainer.module.scss';

type Props = {
  seq: string;
  realm: string;
  gpsX: string;
  gpsY: string;
};

export const DetailPageContainer = ({ seq, realm, gpsX, gpsY }: Props) => {
  const { data: detailData } = useGetDetail(seq);

  const {
    data: realmsData,
    isFetching: isFetchingRealms
  } = useGetRealms('realm', realm);

  if (!detailData || !realmsData) {
    return null;
  }

  const item = detailData.body.items.item;

  const realmItems = realmsData.pages.flatMap((page) => {
    const item = page.body.items.item;
    const arr = Array.isArray(item) ? item : [item];
    return arr.filter((i) => i?.title && i?.realmName);
  });

  return (
    <div className={styles.detailPageContainer}>
      <DetailHeroSection item={item} />
      <ScreenPaddingWrapper>
        <section className={styles.section}>
          <DetailSectionHeader label='DETAILS' title='상세 정보' />
          <div className={styles.body}>
            <ul className={styles.infoList}>
              <li className={styles.item}>
                <span className={styles.itemLabel}>
                  <CiLocationOn className={styles.icon} />
                  주소
                </span>
                <span className={styles.text}>{item.area} {item.place}</span>
              </li>
              <li className={styles.item}>
                <span className={styles.itemLabel}>
                  <PiCalendarMinusThin className={styles.icon} />
                  기간
                </span>
                <span className={styles.text}>{formatDate(item.startDate)} ~ {formatDate(item.endDate)}</span>
              </li>
              <li className={styles.item}>
                <span className={styles.itemLabel}>
                  <LiaWonSignSolid className={styles.icon} />
                  가격
                </span>
                <span className={styles.text}>{item.price.trim() || '홈페이지 확인'}</span>
              </li>
              <li className={styles.item}>
                <span className={styles.itemLabel}>
                  <PiPhoneCallLight className={styles.icon} />
                  문의
                </span>
                <span className={styles.text}>{item.phone}</span>
              </li>
              <li className={styles.item}>
                <span className={styles.itemLabel}>
                  <RiHome2Line className={styles.icon} />
                  홈페이지
                </span>
                <span className={styles.text}>
                  <Link
                    href={decodeHtml(item.url)}
                    target='_blank'
                    rel="noopener noreferrer"
                    >
                      {decodeHtml(item.url)}
                    </Link>
                </span>
              </li>
            </ul>
          </div>
        </section>
        <section className={styles.section}>
          <DetailSectionHeader label='MAP' title='지도' />
          <div className={styles.body}>
            <KakaoMap lng={parseFloat(gpsX)} lat={parseFloat(gpsY)} />
          </div>
        </section>
        <section className={styles.section}>
          <DetailSectionHeader label='OTHERS' title='같은 분야의 행사' />
          <Slider isFetching={isFetchingRealms} items={realmItems} />
        </section>
      </ScreenPaddingWrapper>
    </div>
  );
};