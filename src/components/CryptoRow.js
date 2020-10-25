import React from 'react';
import AddCryptoInPortfolio from './AddCryptoInPortfolio';
import { formatNumber } from '../helpers/formatNumber';
import Box from '@material-ui/core/Box';
import { TableRow, TableCell } from '@material-ui/core';

const CryptoRow = ({ crypto, serialNumber, userHoldings, setUserHoldings }) => {
  const currentHoldingsWorth = userHoldings[crypto.id]
    ? userHoldings[crypto.id].coinQuantity * crypto.quote.INR.price
    : 0;

  return (
    <TableRow className='crypto-row'>
      <TableCell>
        <Box className='column'>
          <Box component='span' className='table-row-serial-number'>{serialNumber}</Box>
          <Box component='span' className='table-row-name'>
            {crypto.name}&nbsp;
            <Box component='span' className='crypto-symbol'>({crypto.symbol})</Box>
          </Box>
        </Box>
      </TableCell>
      <TableCell className='row-price table-row-item'>
        <Box component='span'>&#8377;{formatNumber(crypto.quote.INR.price)}</Box>
      </TableCell>
      <TableCell className='table-row-item'>{crypto.cmc_rank}</TableCell>
      <TableCell className='row-circulating-supply table-row-item'>
        {formatNumber(crypto.circulating_supply)}&nbsp;{crypto.symbol}
      </TableCell>
      <TableCell className='table-row-item'>
        {userHoldings[crypto.id] ? (
          <Box component='span' className='row-holdings'>
            <Box component='span' className='my-holdings'>
              {formatNumber(userHoldings[crypto.id].coinQuantity)}&nbsp;
              {crypto.symbol}
            </Box>
            <Box component='span' className='holdings-worth'>
              Worth:&nbsp;&#8377;{formatNumber(currentHoldingsWorth)}
            </Box>
          </Box>
        ) : (
          <Box component='span' className='no-coins'>Nothing! But you can add!</Box>
        )}
      </TableCell>
      <TableCell className='table-row-item'>
        <AddCryptoInPortfolio
          crypto={crypto}
          userHoldings={userHoldings}
          setUserHoldings={setUserHoldings}
        />
      </TableCell>
    </TableRow>
  );
};

export default CryptoRow;
