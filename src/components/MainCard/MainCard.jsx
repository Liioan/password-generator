import { useState } from 'react';

//.components
import PasswordCopy from './PasswordCopy/PasswordCopy';

//. styles
import styles from './MainCard.module.css';

export default function MainCard() {
  const [password, setPassword] = useState('');
  const [lenght, setLenght] = useState(20);

  const handleClick = () => {
    setPassword('');
    for (let i = 0; i < lenght; i++) {
      setPassword(prev => (prev += Math.round(Math.random() * 9)));
    }
  };

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>password generator</h1>
      <PasswordCopy generatedPassword={password} />

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
          onChange={e => setLenght(e.target.value)}
          className={styles.rangeInput}
        />
      </div>

      <button onClick={handleClick} className={styles.btn}>
        generate
      </button>
    </div>
  );
}
