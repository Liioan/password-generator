import { useState } from 'react';
import { usePassword } from '../../hooks/usePassword';

//.components
import PasswordCopy from './PasswordCopy/PasswordCopy';
import Range from './Range/Range';
import Checkbox from './Checkbox/Checkbox';
import Strenght from './Strength/Strength';

//. styles
import styles from './MainCard.module.css';

export default function MainCard() {
  const [password, setPassword] = useState('');
  const { generatePassword } = usePassword();
  const handleClick = () => {
    setPassword(generatePassword());
  };

  const {
    //- values
    uppercase,
    lowercase,
    numbers,
    symbols,
    //- functions
    changeUppercase,
    changeLowercase,
    changeNumbers,
    changeSymbols,
  } = usePassword();

  const checkboxes = [
    { action: changeUppercase, type: uppercase, text: 'uppercase' },
    { action: changeLowercase, type: lowercase, text: 'lowercase' },
    { action: changeNumbers, type: numbers, text: 'numbers' },
    { action: changeSymbols, type: symbols, text: 'symbols' },
  ];

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>password generator</h1>
      <PasswordCopy generatedPassword={password} />
      <Range />
      <div className={styles.checkboxes}>
        {checkboxes.map(checkbox => (
          <Checkbox
            key={checkbox.text}
            text={checkbox.text}
            type={checkbox.type}
            action={checkbox.action}
          />
        ))}
      </div>
      <Strenght />

      <button onClick={handleClick} className={styles.btn}>
        generate
      </button>
    </div>
  );
}
