import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {tabStyles} from '../styles/styles';
import Box from '@material-ui/core/Box';

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
    <Box className={classes.tab}>
      <Box
        component='span'
        className={`tab ${cryptoListTab ? 'active-tab' : ''}`}
        onClick={openCryptoTab}
      >
        CRYPTOCURRENCIES
      </Box>
      <Box
        component='span'
        className={`tab ${userHoldingsTab ? 'active-tab' : ''}`}
        onClick={openUserHoldings}
      >
        MY HOLDINGS
      </Box>
    </Box>
  );
};

export default TabsBar;
