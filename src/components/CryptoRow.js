import React from 'react';
import AddCryptoInPortfolio from './AddCryptoInPortfolio';
import { formatNumber } from '../helpers/formatNumber';
import Box from '@material-ui/core/Box';
import { TableRow, TableCell } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {tableRowStyles} from '../styles/styles';

const CryptoRow = ({ crypto, serialNumber, userHoldings, setUserHoldings }) => {
  const useStyles = makeStyles({
    ...tableRowStyles
  });

  const classes = useStyles();
  const matches = useMediaQuery('(max-width:768px)');

  const currentHoldingsWorth = userHoldings[crypto.id]
    ? userHoldings[crypto.id].coinQuantity * crypto.quote.INR.price
    : 0;

  return (
    <TableRow>
      <TableCell>
        <Box className={classes.column}>
          <Box
            component='span'
            className={`${classes.tableRowSerialNumber} ${
              matches ? classes.mobileTableRowSerialNumber : ''
            }`}
          >
            {serialNumber}
          </Box>
          <Box
            component='span'
            className={`${classes.tableRowName} ${
              matches ? classes.mobileTableRowName : ''
            }`}
          >
            {crypto.name}&nbsp;
            <Box component='span' className={classes.cryptoSymbol}>
              ({crypto.symbol})
            </Box>
          </Box>
        </Box>
      </TableCell>
      <TableCell
        className={`${classes.rowPrice} ${classes.tableRowItem} ${
          matches ? classes.mobileTableRowItem : ''
        }`}
      >
        <Box component='span'>
          &#8377;{formatNumber(crypto.quote.INR.price)}
        </Box>
      </TableCell>
      <TableCell
        className={`${classes.tableRowItem} ${
          matches ? classes.mobileTableRowItem : ''
        }`}
      >
        {crypto.cmc_rank}
      </TableCell>
      <TableCell
        className={`${classes.rowCirculatingSupply} ${
          matches ? classes.mobileTableRowItem : ''
        }`}
      >
        {formatNumber(crypto.circulating_supply)}&nbsp;{crypto.symbol}
      </TableCell>
      <TableCell
        className={`${classes.tableRowItem} ${
          matches ? classes.mobileTableRowItem : ''
        }`}
      >
        {userHoldings[crypto.id] ? (
          <Box component='span' className={classes.rowHoldings}>
            <Box component='span' className={classes.myHoldings}>
              {formatNumber(userHoldings[crypto.id].coinQuantity)}&nbsp;
              {crypto.symbol}
            </Box>
            <Box component='span' className={classes.holdingsWorth}>
              Worth:&nbsp;&#8377;{formatNumber(currentHoldingsWorth)}
            </Box>
          </Box>
        ) : (
          <Box component='span'>Nothing! But you can add!</Box>
        )}
      </TableCell>
      <TableCell
        className={`${classes.tableRowItem} ${
          matches ? classes.mobileTableRowItem : ''
        }`}
      >
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
