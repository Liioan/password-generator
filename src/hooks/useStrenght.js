import { usePassword } from './usePassword';
import { useState, useEffect } from 'react';

export const useStrenght = () => {
  const { lenght, uppercase, lowercase, numbers, symbols } = usePassword();

  const [rating, setRating] = useState('very weak');
  const [strenght, setStrenght] = useState(0);

  const calculateStrenght = () => {
    let strenght = 0;
    const lenghtRating = (lenght - 5) / 4;

    uppercase ? (strenght += 5) : strenght;
    lowercase ? (strenght += 5) : strenght;
    numbers ? (strenght += 5) : strenght;
    symbols ? (strenght += 5) : strenght;

    let finalStrenght = Math.floor(strenght * lenghtRating);

    if (finalStrenght > 100) {
      finalStrenght = 100;
    }
    setStrenght(finalStrenght);
  };

  useEffect(() => {
    calculateStrenght();
  }, [lenght, uppercase, lowercase, numbers, symbols]);

  useEffect(() => {
    if (strenght < 20) {
      setRating('very weak');
    }
    if (strenght < 40 && strenght >= 20) {
      setRating('weak');
    }
    if (strenght < 60 && strenght >= 40) {
      setRating('moderate');
    }
    if (strenght < 80 && strenght >= 60) {
      setRating('safe');
    }
    if (strenght <= 100 && strenght >= 80) {
      setRating('very safe');
    }
  }, [strenght]);

  return { strenght, rating };
};
