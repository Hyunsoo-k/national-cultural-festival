import styles from './NoItems.module.scss';

export const NoItems = () => {
  return (
    <div className={styles.noItems}>
      <p className={styles.text}>현재 진행중인 행사가 없습니다.</p>
    </div>
  );
};