import { AreaOrRealmItem } from './areaOrRealmItem';
import { DetailItem } from './detailItem';
import { Category } from './category';

export interface Response<T extends Category | 'detail'> {
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
          item: AreaOrRealmItem[] 
        };
        totalCount: string;
        PageNo: string;
        numOfRows: string;
      };
}