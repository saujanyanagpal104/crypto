import React from 'react';
import { formatNumber } from '../helpers/formatNumber';
import Box from '@material-ui/core/Box';
import { TableRow, TableCell } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {tableRowStyles} from '../styles/styles';

const UserHoldingRow = ({ userHoldings, serialNumber, updatedData }) => {
  const useStyles = makeStyles({
    ...tableRowStyles
  });

  const classes = useStyles();
  const matches = useMediaQuery('(max-width:768px)');

  const differencePrice =
    parseInt(updatedData.quote.INR.price) -
    parseInt(userHoldings[updatedData.id].quote.INR.price);

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
            {userHoldings[updatedData.id].name}&nbsp;
            <Box component='span' className={classes.cryptoSymbol}>
              ({userHoldings[updatedData.id].symbol})
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
          &#8377;{formatNumber(updatedData.quote.INR.price)}
        </Box>
      </TableCell>
      <TableCell
        className={`${classes.tableRowItem} ${
          matches ? classes.mobileTableRowItem : ''
        }`}
      >
        <Box component='span' className={classes.rowHoldings}>
          <Box component='span' className={classes.myHoldings}>
            {formatNumber(userHoldings[updatedData.id].coinQuantity)}&nbsp;
            {userHoldings[updatedData.id].symbol}
          </Box>
          <Box component='span' className={classes.holdingsWorth}>
            Worth:&nbsp;&#8377;
            {formatNumber(
              userHoldings[updatedData.id].coinQuantity *
                userHoldings[updatedData.id].coinQuantity
            )}
          </Box>
        </Box>
      </TableCell>
      <TableCell
        className={`${classes.tableRowItem} ${
          matches ? classes.mobileTableRowItem : ''
        }`}
      >
        <Box component='span'>
          &#8377;{formatNumber(userHoldings[updatedData.id].quote.INR.price)}
        </Box>
        /
        <Box
          component='span'
          className={`${classes.differencePrice} ${
            differencePrice > 0 ? classes.profit : classes.loss
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
