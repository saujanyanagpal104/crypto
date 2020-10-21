import React from 'react';
import UserHoldingRow from './UserHoldingsRow';

const UserHoldings = ({ userHoldings, cryptoList, setTotalWorth }) => {
  const userHoldingIds = Object.keys(userHoldings);
  const getUpdatedData = cryptoList.data.filter(
    (crypto) => userHoldingIds.indexOf(crypto.id.toString()) !== -1
  );

  return (
    <div className='user-holdings'>
      {console.log(userHoldings, 'test')}
      <div className='user-holdings-table'>
        <table>
          <thead>
            <tr>
              <th>
                <div className='column'>
                  <span className='serial-number'>#</span>
                  <span className='crypto-name'>Name</span>
                </div>
              </th>
              <th className='crypto-price table-heading'>Current Price</th>
              <th className='crypto-my-holdings table-heading'>My Holdings</th>
              <th className='crypto-add-holdings table-heading'>
                Bought At/Price Difference
              </th>
            </tr>
          </thead>
          <tbody>
            {getUpdatedData.map((updatedData, index) => (
              <UserHoldingRow
                key={updatedData.id}
                updatedData={updatedData}
                userHoldings={userHoldings}
                serialNumber={index + 1}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserHoldings;
