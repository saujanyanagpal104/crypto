import React, { useState } from 'react';

const AddCryptoInPortfolio = ({ crypto, userHoldings, setUserHoldings }) => {
  const [toggleElement, setToggleElement] = useState(false);
  const [amount, setAmount] = useState();
  const [coinAdded, setCoinAdded] = useState(false);

  const toggleValueField = () => {
    setToggleElement(!toggleElement);
  };

  const changeAmount = (e) => {
    setAmount(e.target.value);
  };

  const addToPortfolio = (e) => {
    e.preventDefault();
    const coinQuantity = amount / crypto.quote.INR.price;
    const totalQuantity = userHoldings[crypto.id]
      ? userHoldings[crypto.id].coinQuantity + coinQuantity
      : coinQuantity;
    const totalHoldings = {
      ...userHoldings,
      [crypto.id]: { ...crypto, coinQuantity: totalQuantity },
    };
    localStorage.setItem('UserHoldings', JSON.stringify(totalHoldings));
    setUserHoldings(totalHoldings);
    setCoinAdded(true);
    setTimeout(() => {
      setToggleElement(!toggleElement);
      setAmount();
      setCoinAdded(false);
    }, 3000);
  };

  return (
    <div className='add-in-portfolio-container'>
      {!toggleElement ? (
        <div className='add-in-portfolio-button' onClick={toggleValueField}>
          Add in Portfolio
        </div>
      ) : coinAdded ? (
        <span className='coin-added'>Coin Added!</span>
      ) : (
        <form>
          <input
            type='number'
            name='amount'
            value={amount}
            onChange={changeAmount}
            placeholder='Amount(in INR)'
          />
          <div className='add-in-portfolio-buttons'>
            <button onClick={toggleValueField}>Cancel</button>
            <button onClick={addToPortfolio}>Add</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddCryptoInPortfolio;
