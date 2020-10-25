import React from 'react';
import { formatNumber } from '../helpers/formatNumber';
import Box from '@material-ui/core/Box';
import { TableRow, TableCell } from '@material-ui/core';

const UserHoldingRow = ({ userHoldings, serialNumber, updatedData }) => {
  const differencePrice =
    parseInt(updatedData.quote.INR.price) -
    parseInt(userHoldings[updatedData.id].quote.INR.price);

  return (
    <TableRow className='user-holding-row'>
      <TableCell>
        <Box className='column'>
          <Box component='span' className='table-row-serial-number'>{serialNumber}</Box>
          <Box component='span' className='table-row-name'>
            {userHoldings[updatedData.id].name}&nbsp;
            <Box component='span' className='crypto-symbol'>
              ({userHoldings[updatedData.id].symbol})
            </Box>
          </Box>
        </Box>
      </TableCell>
      <TableCell className='row-price table-row-item'>
        <Box component='span'>&#8377;{formatNumber(updatedData.quote.INR.price)}</Box>
      </TableCell>
      <TableCell className='table-row-item'>
        <Box component='span' className='row-holdings'>
          <Box component='span' className='my-holdings'>
            {formatNumber(userHoldings[updatedData.id].coinQuantity)}&nbsp;
            {userHoldings[updatedData.id].symbol}
          </Box>
          <Box component='span' className='holdings-worth'>
            Worth:&nbsp;&#8377;
            {formatNumber(
              userHoldings[updatedData.id].coinQuantity *
                userHoldings[updatedData.id].coinQuantity
            )}
          </Box>
        </Box>
      </TableCell>
      <TableCell className='table-row-item'>
        <Box component='span' className='bought-at'>
          &#8377;{formatNumber(userHoldings[updatedData.id].quote.INR.price)}
        </Box>
        /
        <Box component='span'
          className={`difference-price ${
            differencePrice > 0 ? 'profit' : 'loss'
          }`}
        >
          &#8377;{formatNumber(differencePrice)}
        </Box>
        }
      </TableCell>
    </TableRow>
  );
};

export default UserHoldingRow;
