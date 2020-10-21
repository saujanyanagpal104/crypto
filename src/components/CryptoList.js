import React, { useEffect } from 'react';
import CryptoRow from './CryptoRow';

const CryptoList = ({
  cryptoList,
  userHoldings,
  setUserHoldings,
  setTotalWorth,
}) => {
  useEffect(() => {
    const userHoldingIds = Object.keys(userHoldings);
    const getUpdatedData = cryptoList.data.filter(
      (crypto) => userHoldingIds.indexOf(crypto.id.toString()) !== -1
    );

    const calculateTotalWorth = () => {
      let totalAmount = 0;
      for (let i = 0; i < getUpdatedData.length; i++) {
        let amount =
          getUpdatedData[i].quote.INR.price *
          userHoldings[getUpdatedData[i].id].coinQuantity;
        totalAmount += amount;
      }
      setTotalWorth(totalAmount);
    };

    calculateTotalWorth();
  }, [cryptoList.data, userHoldings, setTotalWorth]);

  return (
    <div className='crypto-list-container'>
      <div className='list-text'>
        <span>Today's Cryptocurrency Prices</span>
      </div>
      <div className='crypto-table'>
        <table>
          <thead>
            <tr>
              <th>
                <div className='column'>
                  <span className='serial-number'>#</span>
                  <span className='crypto-name'>Name</span>
                </div>
              </th>
              <th className='crypto-price table-heading'>Price</th>
              <th className='crypto-rank table-heading'>Rank</th>
              <th className='crypto-supply table-heading'>
                Circulating Supply
              </th>
              <th className='crypto-my-holdings table-heading'>My Holdings</th>
              <th className='crypto-add-holdings table-heading'>
                Add to My Holdings
              </th>
            </tr>
          </thead>
          <tbody>
            {cryptoList.data.map((crypto, index) => (
              <CryptoRow
                key={crypto.id}
                crypto={crypto}
                serialNumber={index + 1}
                userHoldings={userHoldings}
                setUserHoldings={setUserHoldings}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoList;
