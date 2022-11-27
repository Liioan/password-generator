export const useGenerator = (uppercase, lowercase, numbers, symbols) => {
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

  console.log(lowercase, uppercase, numbers, symbols);
  const finalCharSet = [
    ...(lowercase ? lowercaseChars : []),
    ...(uppercase ? uppercaseChars : []),
    ...(numbers ? numbersChars : []),
    ...(symbols ? symbolsChars : []),
  ];

  return finalCharSet;
};
