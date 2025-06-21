import React, { createContext } from 'react';

const Context = createContext();

export const UserContext = ({ children }) => {
  const user = {
    name: 'Durga Devi',
    phn: '8807671271'
  };

  return (
    <Context.Provider value={user}>
      {children}
    </Context.Provider>
  );
};
export default Context
