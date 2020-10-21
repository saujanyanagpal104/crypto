import React from 'react';

const TabsBar = ({
  userHoldingsTab,
  setUserHoldingsTab,
  cryptoListTab,
  setCryptoListTab,
}) => {
  const openCryptoTab = () => {
    setUserHoldingsTab(false);
    setCryptoListTab(true);
  };

  const openUserHoldings = () => {
    setCryptoListTab(false);
    setUserHoldingsTab(true);
  };

  return (
    <div className='tabs-container'>
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
