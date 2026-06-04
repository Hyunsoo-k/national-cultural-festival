import { BarLoader } from 'react-spinners';

import styles from "./PageContainerSpinner.module.scss";

export const PageContainerSpinner = () => {
  return (
    <div className={styles.pageContainerSpinner}>
      <BarLoader className={styles.spinnerIcon} color='#221A14' />
    </div>
  );
};