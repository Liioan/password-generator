import { useState } from 'react';
import { usePassword } from '../../hooks/usePassword';

//.components
import PasswordCopy from './PasswordCopy/PasswordCopy';
import Range from './Range/Range';
import Checkbox from './Checkbox/Checkbox';
import Strenght from './Strength/Strength';
import GenerateButton from './GenerateButton/GenerateButton';

//. styles
import styles from './MainCard.module.css';

export default function MainCard() {
  const {
    //- values
    uppercase,
    lowercase,
    numbers,
    symbols,
  } = usePassword();

  const checkboxes = [
    { action: 'CHANGE_UPPERCASE', type: uppercase, text: 'uppercase' },
    { action: 'CHANGE_LOWERCASE', type: lowercase, text: 'lowercase' },
    { action: 'CHANGE_NUMBERS', type: numbers, text: 'numbers' },
    { action: 'CHANGE_SYMBOLS', type: symbols, text: 'symbols' },
  ];

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>password generator</h1>
      <PasswordCopy />
      <Range />
      <div className={styles.checkboxes}>
        {checkboxes.map(checkbox => (
          <Checkbox
            key={checkbox.action}
            text={checkbox.text}
            type={checkbox.type}
            action={checkbox.action}
          />
        ))}
      </div>
      <Strenght />
      <GenerateButton />
    </div>
  );
}
