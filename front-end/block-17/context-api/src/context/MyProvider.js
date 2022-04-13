import React, { useState } from 'react';
import MyContext from './MyContext';

function MyProvider({ children }) {

  const [money, spendMoney] = useState(1000000);
  const myProps = { money, spendMoney };
  
  return (
    <MyContext.Provider value={myProps}>
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;