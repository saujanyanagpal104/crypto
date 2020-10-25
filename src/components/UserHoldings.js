import React from 'react';
import UserHoldingRow from './UserHoldingsRow';
import { makeStyles } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import {
  TableRow,
  TableCell,
  TableHead,
  Table,
  TableBody,
} from '@material-ui/core';
import {userHoldingsStyles, tableContainerStyles} from '../styles/styles';


const UserHoldings = ({ userHoldings, cryptoList }) => {
  const useStyles = makeStyles({
    ...userHoldingsStyles, ...tableContainerStyles
  });

  const classes = useStyles();
  const matches = useMediaQuery('(max-width:768px)');

  const userHoldingIds = Object.keys(userHoldings);
  const getUpdatedData = cryptoList.data.filter(
    (crypto) => userHoldingIds.indexOf(crypto.id.toString()) !== -1
  );

  return (
    <Box className={classes.root}>
      {getUpdatedData.length ? (
        <Box className={classes.userHoldingsTable}>
          <Table
            className={`${classes.table} ${matches ? classes.mobileTable : ''}`}
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <Box className={classes.columnUserHolding}>
                    <Box
                      component='span'
                      className={`${classes.serialNumber} ${
                        matches ? classes.mobileSerialNumber : ''
                      }`}
                    >
                      #
                    </Box>
                    <Box
                      component='span'
                      className={`${classes.cryptoName} ${
                        matches ? classes.mobileCryptoName : ''
                      }`}
                    >
                      Name
                    </Box>
                  </Box>
                </TableCell>
                <TableCell
                  className={`${classes.tableHeading} ${
                    matches ? classes.mobileTableHeading : ''
                  }`}
                >
                  Current Price
                </TableCell>
                <TableCell
                  className={`${classes.tableHeading} ${
                    matches ? classes.mobileTableHeading : ''
                  }`}
                >
                  My Holdings
                </TableCell>
                <TableCell
                  className={`${classes.tableHeading} ${
                    matches ? classes.mobileTableHeading : ''
                  }`}
                >
                  Bought At/Price Difference
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getUpdatedData.map((updatedData, index) => (
                <UserHoldingRow
                  key={updatedData.id}
                  updatedData={updatedData}
                  userHoldings={userHoldings}
                  serialNumber={index + 1}
                />
              ))}
            </TableBody>
          </Table>
        </Box>
      ) : (
        <Box component='span' className={classes.noHoldings}>
          No Holdings! Go to cryptocurrencies and add.
        </Box>
      )}
    </Box>
  );
};

export default UserHoldings;
