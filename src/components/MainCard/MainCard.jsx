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
  const {
    lenght,
    changeUppercase,
    uppercase,
    changeLowercase,
    lowercase,
    changeNumbers,
    numbers,
    changeSymbols,
    symbols,
  } = usePassword();

  const checkboxes = [
    { action: changeUppercase, type: uppercase, text: 'uppercase' },
    { action: changeLowercase, type: lowercase, text: 'lowercase' },
    { action: changeNumbers, type: numbers, text: 'numbers' },
    { action: changeSymbols, type: symbols, text: 'symbols' },
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
          key={checkbox.text}
          text={checkbox.text}
          type={checkbox.type}
          action={checkbox.action}
        />
      ))}
      <button onClick={handleClick} className={styles.btn}>
        generate
      </button>
    </div>
  );
}
