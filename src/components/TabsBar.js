import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { tabsStyles } from '../styles/styles';

const TabsBar = ({
  userHoldingsTab,
  setUserHoldingsTab,
  cryptoListTab,
  setCryptoListTab,
}) => {
  const useStyles = makeStyles({
    ...tabsStyles
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
    <Box className={classes.root}>
      <Box
        component='span'
        className={`${classes.tab} ${cryptoListTab ? classes.activeTab : ''}`}
        onClick={openCryptoTab}
      >
        CRYPTOCURRENCIES
      </Box>
      <Box
        component='span'
        className={`${classes.tab} ${userHoldingsTab ? classes.activeTab : ''}`}
        onClick={openUserHoldings}
      >
        MY HOLDINGS
      </Box>
    </Box>
  );
};

export default TabsBar;
