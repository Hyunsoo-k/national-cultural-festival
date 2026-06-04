import styles from './SectionDivider.module.scss';

type Props = {
  label: 'area' | 'realm';
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