import { useStrenght } from '../../../hooks/useStrenght';

//. styles
import styles from './Strength.module.css';

export default function Strength() {
  const { strenght, rating } = useStrenght();

  return (
    <div className={styles.container}>
      <div className={styles.text}>strenght</div>
      <div className={styles.bar}>
        <span style={{ width: `${strenght}%` }}>{rating}</span>
      </div>
    </div>
  );
}
