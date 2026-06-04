import styles from './DetailSectionHeader.module.scss';

type Props = {
  label: string;
  title: string;
};

export const DetailSectionHeader = ({ label, title}: Props) => {
  return (
    <header className={styles.detailSectionHeader}>
      <span className={styles.label}>{label}</span>
      <h3 className={styles.title}>{title}</h3>
    </header>
  );
};