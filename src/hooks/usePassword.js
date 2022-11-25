import { useContext } from 'react';
import { PasswordContext } from '../Context/PasswordContext';

export const usePassword = () => {
  const context = useContext(PasswordContext);

  if (context === undefined) {
    throw new Error('usePassword() must be used inside a PasswordProvider');
  }

  return context;
};
