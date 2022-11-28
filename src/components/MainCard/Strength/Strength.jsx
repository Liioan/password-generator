import { useStrength } from '../../../hooks/useStrength';

//. styles
import styles from './Strength.module.css';

export default function Strength() {
  const { strength, rating } = useStrength();

  return (
    <div className={styles.container}>
      <div className={styles.text}>strength</div>
      <div className={styles.bar}>
        <span style={{ width: `${strength}%` }}>{rating}</span>
      </div>
    </div>
  );
}
