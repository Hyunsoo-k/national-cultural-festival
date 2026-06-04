'use client';

import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';

import styles from './KakaoMap.module.scss';

type Props = {
  lat: number;
  lng: number;
};

export const KakaoMap = ({ lat, lng }: Props) => {
  const [loading] = useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_MAP_KEY as string,
  });

  if (loading) {
    return null;
  }

  if (!lat || !lng) {
    return (
      <div className={styles.noGps}>
        <p className={styles.text}>
          한국 문화 정보원에서 지도 좌표를 제공하지 않는 행사입니다.
          자세한 주소는 위 상세 정보란, 혹은 홈페이지에서 확인하실 수 있습니다.
        </p>
      </div>
    )
  }

  return (
    <Map
      center={{ lat, lng }}
      className={styles.map}
      level={3}
    >
      <MapMarker position={{ lat, lng }} />
    </Map>
  );
};