import { createContext, useReducer } from 'react';

export const PasswordContext = createContext();

const passwordReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_LENGHT':
      return { ...state, lenght: action.payload };
    default:
      return state;
  }
};

export function PasswordProvider({ children }) {
  const [state, dispatch] = useReducer(passwordReducer, {
    lenght: 20,
  });

  const changeLenght = lenght => {
    dispatch({ type: 'CHANGE_LENGHT', payload: lenght });
  };

  return (
    <PasswordContext.Provider value={{ ...state, changeLenght }}>
      {children}
    </PasswordContext.Provider>
  );
}
