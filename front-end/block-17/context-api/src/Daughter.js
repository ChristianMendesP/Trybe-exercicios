import React, { useContext } from 'react';
import MyContext from './context/MyContext';

const Daughter = () => {
    const {money, spendMoney} = useContext(MyContext);
    return (
      <>
        <h3>Eu sou a filha</h3>
        <p>Tenho {money}</p>
        <button onClick={() => spendMoney(money - 10)}>Gastar 10</button>
      </>
    );
}

export default Daughter;