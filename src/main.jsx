import { PasswordProvider } from './Context/PasswordContext';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PasswordProvider>
      <App />
    </PasswordProvider>
  </React.StrictMode>
);
