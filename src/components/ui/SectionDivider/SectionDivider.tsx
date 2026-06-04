import type { Category } from '@/types/category';

import styles from './SectionDivider.module.scss';

type Props = {
  label: Category
};

export const SectionDivider = ({ label }: Props) => {
  return (
    <div className={styles.sectionDivider}>
      <span className={styles.label}>{label.toUpperCase()}</span>
      <div className={styles.line} />
      <div className={styles.dot} />
    </div>
  );
};