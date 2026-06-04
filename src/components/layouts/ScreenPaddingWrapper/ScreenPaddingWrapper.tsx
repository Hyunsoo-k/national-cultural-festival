import { ReactNode } from 'react';

import styles from './ScreenPaddingWrapper.module.scss';

type Props = {
  children: ReactNode;
};

export const ScreenPaddingWrapper = ({ children }: Props) => {
  return (
    <div className={styles.screenPaddingWrapper}>
      {children}
    </div>
  );
};