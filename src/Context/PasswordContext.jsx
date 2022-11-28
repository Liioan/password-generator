import { createContext, useReducer } from 'react';
import { useGenerator } from '../hooks/useGenerator';

export const PasswordContext = createContext();

const passwordReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_LENGHT':
      return { ...state, lenght: action.payload };
    case 'CHANGE_UPPERCASE':
      return { ...state, uppercase: action.payload };
    case 'CHANGE_LOWERCASE':
      return { ...state, lowercase: action.payload };
    case 'CHANGE_NUMBERS':
      return { ...state, numbers: action.payload };
    case 'CHANGE_SYMBOLS':
      return { ...state, symbols: action.payload };
    case 'CHANGE_PASSWORD':
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export function PasswordProvider({ children }) {
  const [state, dispatch] = useReducer(passwordReducer, {
    lenght: 20,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
    password: '',
  });

  const changeLenght = lenght => {
    dispatch({ type: 'CHANGE_LENGHT', payload: lenght });
  };

  const changeValues = (value, action) => {
    dispatch({ type: action, payload: value });
  };

  const generatePassword = () => {
    const result = useGenerator(
      state.lenght,
      state.uppercase,
      state.lowercase,
      state.numbers,
      state.symbols
    );

    if (result !== '#ERR') {
      dispatch({ type: 'CHANGE_PASSWORD', payload: result });
      return '#SUCC';
    } else {
      return '#ERR';
    }
  };

  return (
    <PasswordContext.Provider
      value={{
        ...state,
        changeLenght,
        changeValues,
        generatePassword,
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
}
