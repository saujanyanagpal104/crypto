import React from 'react';
import UserHoldingRow from './UserHoldingsRow';
import {makeStyles} from '@material-ui/styles';
import {userHoldingsStyles, tableStyles, mobileTableStyles} from '../styles/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const UserHoldings = ({ userHoldings, cryptoList }) => {
  const useStyles = makeStyles({
    container: userHoldingsStyles,
    table: tableStyles,
    mobileTable: mobileTableStyles,
  });

  const classes = useStyles();
  const matches = useMediaQuery('(max-width:768px)');

  const userHoldingIds = Object.keys(userHoldings);
  const getUpdatedData = cryptoList.data.filter(
    (crypto) => userHoldingIds.indexOf(crypto.id.toString()) !== -1
  );

  return (
    <div className={`${classes.container} ${classes.table} ${matches ? classes.mobileTable : ''}`}>
        {
            getUpdatedData.length ? (<div className='user-holdings-table'>
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
          </div>) : <span className='no-holdings'>No Holdings! Go to cryptocurrencies and add.</span>
        }
    </div>
  );
};

export default UserHoldings;
