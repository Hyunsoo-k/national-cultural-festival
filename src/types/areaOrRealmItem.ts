import { RealmName } from './realmName';

export interface AreaOrRealmItem {
  serviceName: string;
  seq: string;
  title: string | undefined;
  startDate: number;
  endDate: number;
  place: string;
  realmName: RealmName;
  area: string;
  thumbnail: string;
  gpsX: number;
  gpsY: number;
  sigungu: string;
}