import { useState } from 'react';
import { usePassword } from '../../hooks/usePassword';

//.components
import PasswordCopy from './PasswordCopy/PasswordCopy';
import Range from './Range/Range';
import Checkbox from './Checkbox/Checkbox';

//. styles
import styles from './MainCard.module.css';

export default function MainCard() {
  const [password, setPassword] = useState('');
  const { lenght } = usePassword();

  const checkboxes = [
    { name: 'uppercase letters', state: 'uper' },
    { name: 'lowercase letters', state: 'lowr' },
    { name: 'numbers', state: 'nums' },
    { name: 'symbols', state: 'symb' },
  ];

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
      {checkboxes.map(checkbox => (
        <Checkbox
          key={checkbox.name}
          text={checkbox.name}
          type={checkbox.state}
        />
      ))}
      <button onClick={handleClick} className={styles.btn}>
        generate
      </button>
    </div>
  );
}
