import React, { useState, useEffect } from 'react';
import Header from './Header';
import CryptoList from './CryptoList';
import UserHoldings from './UserHoldings';
import TabsBar from './TabsBar';
// import '../styles/index.css';
import { makeStyles } from '@material-ui/core/styles';
import {containerStyles, loadingStyles, mobileContainerStyles} from '../styles/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';

const App = () => {
  const [cryptoList, setCryptoList] = useState([]);
  const [userHoldings, setUserHoldings] = useState(
    JSON.parse(localStorage.getItem('UserHoldings')) || {}
  );
  const [userHoldingsTab, setUserHoldingsTab] = useState(false);
  const [cryptoListTab, setCryptoListTab] = useState(true);
  const [isFetched, setIsFetched] = useState(false);
  const [totalWorth, setTotalWorth] = useState(0);
  const useStyles = makeStyles({
    container: containerStyles,
    loading: loadingStyles,
    mobileContainer: mobileContainerStyles
  });
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:768px)');

  useEffect(() => {
    let fetchList = async () => {
      let fetchData = await fetch(
        'https://damp-thicket-11337.herokuapp.com/'
      ).then((res) => res.json());
      setCryptoList(fetchData);
      setIsFetched(true);
    };

    fetchList();
  }, []);

  return (
    <Box className={`${classes.container} ${matches ? classes.mobileContainer : ''}`}>
      <Header totalWorth={totalWorth} />
      {isFetched ? (
        <>
          {userHoldingsTab && (
            <UserHoldings userHoldings={userHoldings} cryptoList={cryptoList} />
          )}
          {cryptoListTab && (
            <CryptoList
              cryptoList={cryptoList}
              userHoldings={userHoldings}
              setUserHoldings={setUserHoldings}
              setTotalWorth={setTotalWorth}
            />
          )}
        </>
      ) : (
        <span className={classes.loading}>Loading...</span>
      )}
      <TabsBar
        userHoldingsTab={userHoldingsTab}
        setUserHoldingsTab={setUserHoldingsTab}
        cryptoListTab={cryptoListTab}
        setCryptoListTab={setCryptoListTab}
      />
    </Box>
  );
};

export default App;
