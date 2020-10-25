import React, { useState } from 'react';
import {makeStyles} from '@material-ui/styles';
import {addInPortfolioButtonStyles, mobileAddInPortfolioContainer} from '../styles/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';

const AddCryptoInPortfolio = ({ crypto, userHoldings, setUserHoldings }) => {
  const [toggleElement, setToggleElement] = useState(false);
  const [amount, setAmount] = useState();
  const [coinAdded, setCoinAdded] = useState(false);
  const useStyles = makeStyles({
    portfolioButton: addInPortfolioButtonStyles,
    mobilePortfolio: mobileAddInPortfolioContainer
  });

  const classes = useStyles();

  const matches = useMediaQuery('(max-width:768px)');

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
    <Box className={`${classes.portfolioButton} ${matches ? classes.mobilePortfolio : ''}`}>
      {!toggleElement ? (
        <Box className='add-in-portfolio-button' onClick={toggleValueField}>
          Add to Portfolio
        </Box>
      ) : coinAdded ? (
        <Box component='span' className='coin-added'>Coin Added!</Box>
      ) : (
        <form>
          <input
            type='number'
            name='amount'
            value={amount}
            onChange={changeAmount}
            placeholder='Amount(in INR)'
          />
          <Box className='add-in-portfolio-buttons'>
            <button onClick={toggleValueField}>Cancel</button>
            <button onClick={addToPortfolio}>Add</button>
          </Box>
        </form>
      )}
    </Box>
  );
};

export default AddCryptoInPortfolio;
