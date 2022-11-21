import { useState } from 'react';

//.components
import PasswordCopy from './PasswordCopy/PasswordCopy';

//. styles
import styles from './MainCard.module.css';

export default function MainCard() {
  const [password, setPassword] = useState('');

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>password generator</h1>
      <PasswordCopy generatedPassword={password} />
      <button onClick={() => setPassword('loremipsum')}>update</button>
    </div>
  );
}
