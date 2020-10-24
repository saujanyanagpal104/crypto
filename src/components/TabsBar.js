import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {tabStyles} from '../styles/styles';

const TabsBar = ({
  userHoldingsTab,
  setUserHoldingsTab,
  cryptoListTab,
  setCryptoListTab,
}) => {

  const useStyles = makeStyles({
    tab: tabStyles
  });

  const classes = useStyles();


  const openCryptoTab = () => {
    setUserHoldingsTab(false);
    setCryptoListTab(true);
  };

  const openUserHoldings = () => {
    setCryptoListTab(false);
    setUserHoldingsTab(true);
  };

  return (
    <div className={classes.tab}>
      <span
        className={`tab ${cryptoListTab ? 'active-tab' : ''}`}
        onClick={openCryptoTab}
      >
        CRYPTOCURRENCIES
      </span>
      <span
        className={`tab ${userHoldingsTab ? 'active-tab' : ''}`}
        onClick={openUserHoldings}
      >
        MY HOLDINGS
      </span>
    </div>
  );
};

export default TabsBar;
