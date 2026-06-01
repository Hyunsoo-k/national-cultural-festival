import { AreaOrRealmItem } from './areaOrRealmItem';
import { DetailItem } from './detailItem';
import { CalendarItem } from './calenderItem';
import { Category } from './category';

export interface Response<T extends Category> {
  header: {
    resultCode: string;
    resultMsg: string;
  };
  body: T extends 'detail'
    ? {
        items: {
          item: DetailItem;
        };
      }
    : {
        items: {
          item: T extends 'area' | 'realms' 
            ? AreaOrRealmItem[] 
            : CalendarItem[];
        };
        totalCount: string;
        pageNo: string;
        numOfRows: string;
      };
}