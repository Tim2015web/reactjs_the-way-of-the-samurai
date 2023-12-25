import styles from './PreLoader.module.scss';
import preLoader from '../../../assets/images/preLoader.svg';

export function PreLoader() {
  return (
    <div className={styles.preLoader}>
      <img src={preLoader} alt='PreLoader' />
    </div>
  );
};