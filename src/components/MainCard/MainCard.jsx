import { useState } from 'react';
import { usePassword } from '../../hooks/usePassword';

//.components
import PasswordCopy from './PasswordCopy/PasswordCopy';
import Range from './Range/Range';

//. styles
import styles from './MainCard.module.css';

export default function MainCard() {
  const { lenght } = usePassword();
  const [password, setPassword] = useState('');

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
      <Range />
      <button onClick={handleClick} className={styles.btn}>
        generate
      </button>
    </div>
  );
}
