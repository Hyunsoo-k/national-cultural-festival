import styles from './SectionDivider.module.scss';

type Props = {
  label: 'AREA' | 'PERIOD';
};

export const SectionDivider = ({ label }: Props) => {
  return (
    <div className={styles.sectionDivider}>
      <span className={styles.label}>{label}</span>
      <div className={styles.line} />
      <div className={styles.dot} />
    </div>
  );
};