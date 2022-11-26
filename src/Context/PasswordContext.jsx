import { createContext, useReducer } from 'react';

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
    default:
      return state;
  }
};

export function PasswordProvider({ children }) {
  const [state, dispatch] = useReducer(passwordReducer, {
    lenght: 20,
    uppercase: true,
    lowercase: true,
    numbers: false,
    symbols: false,
  });

  const changeLenght = lenght => {
    dispatch({ type: 'CHANGE_LENGHT', payload: lenght });
  };

  const changeUppercase = value => {
    dispatch({ type: 'CHANGE_UPPERCASE', payload: value });
  };
  const changeLowercase = value => {
    dispatch({ type: 'CHANGE_SYMBOLS', payload: value });
  };
  const changeNumbers = value => {
    dispatch({ type: 'CHANGE_NUMBERS', payload: value });
  };
  const changeSymbols = value => {
    dispatch({ type: 'CHANGE_SYMBOLS', payload: value });
  };

  return (
    <PasswordContext.Provider
      value={{
        ...state,
        changeLenght,
        changeUppercase,
        changeLowercase,
        changeNumbers,
        changeSymbols,
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
}
