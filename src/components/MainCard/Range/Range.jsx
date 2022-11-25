import { usePassword } from '../../../hooks/usePassword';

//. styles
import styles from './Range.module.css';

export default function Range() {
  const { lenght, changeLenght } = usePassword();

  const handleChangeLenght = newLenght => {
    changeLenght(newLenght);
  };

  return (
    <div className={styles.range}>
      <div className={styles.rangeText}>
        <span>lenght</span>
        <span>{lenght}</span>
      </div>
      <input
        type='range'
        value={lenght}
        max='35'
        min='5'
        onChange={e => handleChangeLenght(e.target.value)}
        className={styles.rangeInput}
      />
    </div>
  );
}
