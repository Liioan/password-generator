import { useEffect, useState } from 'react';

export const useGenerator = ({
  lenght,
  uppercase,
  lowercase,
  numbers,
  symbols,
}) => {
  //. chars arrays
  const uppercaseChars = (() => {
    const chars = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    return chars;
  })();
  const lowercaseChars = (() => {
    const chars = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    return chars.map(char => char.toLowerCase());
  })();

  const numbersChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const symbolsChars = ['!', '@', '#', '$', '%', '^', '&', '*', '.', ',', '?'];

  const finalCharSet = [
    ...(lowercase ? lowercaseChars : []),
    ...(uppercase ? uppercaseChars : []),
    ...(numbers ? numbersChars : []),
    ...(symbols ? symbolsChars : []),
  ];

  const generateNewPassword = (() => {
    if (finalCharSet.length) {
      let password = '';
      for (let i = 0; i < lenght; i++) {
        password +=
          finalCharSet[Math.floor(Math.random() * finalCharSet.length)];
      }
      return password;
    } else {
      return '#ERR';
    }
  })();

  return generateNewPassword;
};
