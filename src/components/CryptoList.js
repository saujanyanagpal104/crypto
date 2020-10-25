import React, { useEffect } from 'react';
import CryptoRow from './CryptoRow';
import {makeStyles} from '@material-ui/styles';
import {cryptoListStyles, tableStyles, mobileTableStyles, mobileListTextStyles} from '../styles/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import { TableBody, TableHead, TableRow, Table, TableCell } from '@material-ui/core';

const CryptoList = ({
  cryptoList,
  userHoldings,
  setUserHoldings,
  setTotalWorth,
}) => {
  const useStyles = makeStyles({
    container: cryptoListStyles,
    table: tableStyles,
    mobileTable: mobileTableStyles,
    mobileListText: mobileListTextStyles
  });

  const classes = useStyles();
  const matches = useMediaQuery('(max-width:768px)');


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
    <Box className={`${classes.container} ${classes.table} ${matches ? classes.mobileTable : ''}`}>
      <Box className={ 'list-text'}>
        <Box component='span' className={`${matches ? classes.mobileListText : ''}`}>Today's Cryptocurrency Prices</Box>
      </Box>
      <Box className='crypto-table'>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Box className='column'>
                  <Box component='span' className='serial-number'>#</Box>
                  <Box component='span' className='crypto-name'>Name</Box>
                </Box>
              </TableCell>
              <TableCell className='crypto-price table-heading'>Price</TableCell>
              <TableCell className='crypto-rank table-heading'>Rank</TableCell>
              <TableCell className='crypto-supply table-heading'>
                Circulating Supply
              </TableCell>
              <TableCell className='crypto-my-holdings table-heading'>My Holdings</TableCell>
              <TableCell className='crypto-add-holdings table-heading'>
                Add to My Holdings
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cryptoList.data.map((crypto, index) => (
              <CryptoRow
                key={crypto.id}
                crypto={crypto}
                serialNumber={index + 1}
                userHoldings={userHoldings}
                setUserHoldings={setUserHoldings}
              />
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default CryptoList;