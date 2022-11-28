import { usePassword } from './usePassword';
import { useState, useEffect } from 'react';

export const useStrength = () => {
  const { lenght, uppercase, lowercase, numbers, symbols } = usePassword();

  const [rating, setRating] = useState('very weak');
  const [strength, setStrength] = useState(0);

  const calculateStrength = () => {
    let strength = 0;
    const lenghtRating = (lenght - 5) / 4;

    uppercase ? (strength += 5) : strength;
    lowercase ? (strength += 5) : strength;
    numbers ? (strength += 5) : strength;
    symbols ? (strength += 5) : strength;

    let finalStrength = Math.floor(strength * lenghtRating);

    if (finalStrength > 100) {
      finalStrength = 100;
    }
    setStrength(finalStrength);
  };

  useEffect(() => {
    calculateStrength();
  }, [lenght, uppercase, lowercase, numbers, symbols]);

  useEffect(() => {
    if (strength < 20) {
      setRating('very weak');
    }
    if (strength < 40 && strength >= 20) {
      setRating('weak');
    }
    if (strength < 60 && strength >= 40) {
      setRating('moderate');
    }
    if (strength < 80 && strength >= 60) {
      setRating('secure');
    }
    if (strength <= 100 && strength >= 80) {
      setRating('very secure');
    }
  }, [strength]);

  return { strength, rating };
};
