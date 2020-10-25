import React from 'react';
import UserHoldingRow from './UserHoldingsRow';
import {makeStyles} from '@material-ui/styles';
import {userHoldingsStyles, tableStyles, mobileTableStyles} from '../styles/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import { TableRow, TableCell, TableHead, Table, TableBody } from '@material-ui/core';

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
    <Box className={`${classes.container} ${classes.table} ${matches ? classes.mobileTable : ''}`}>
        {
            getUpdatedData.length ? (<Box className='user-holdings-table'>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Box className='column'>
                      <Box component='span' className='serial-number'>#</Box>
                      <Box component='span' className='crypto-name'>Name</Box>
                    </Box>
                  </TableCell>
                  <TableCell className='crypto-price table-heading'>Current Price</TableCell>
                  <TableCell className='crypto-my-holdings table-heading'>My Holdings</TableCell>
                  <TableCell className='crypto-add-holdings table-heading'>
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
          </Box>) : <Box component='span' className='no-holdings'>No Holdings! Go to cryptocurrencies and add.</Box>
        }
    </Box>
  );
};

export default UserHoldings;
