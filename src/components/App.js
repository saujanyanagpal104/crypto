import React, { useState, useEffect } from 'react';
import Header from './Header';
import CryptoList from './CryptoList';
import UserHoldings from './UserHoldings';
import TabsBar from './TabsBar';
import '../styles/index.css';

const App = () => {
  const [cryptoList, setCryptoList] = useState([]);
  const [userHoldings, setUserHoldings] = useState(
    JSON.parse(localStorage.getItem('UserHoldings')) || {}
  );
  const [userHoldingsTab, setUserHoldingsTab] = useState(false);
  const [cryptoListTab, setCryptoListTab] = useState(true);
  const [isFetched, setIsFetched] = useState(false);
  const [totalWorth, setTotalWorth] = useState(0);

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
    <div className='container'>
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
        <span className='loading'>Loading...</span>
      )}
      <TabsBar
        userHoldingsTab={userHoldingsTab}
        setUserHoldingsTab={setUserHoldingsTab}
        cryptoListTab={cryptoListTab}
        setCryptoListTab={setCryptoListTab}
      />
    </div>
  );
};

export default App;
