import React, { useEffect } from 'react';
import CryptoRow from './CryptoRow';
import { makeStyles } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import {
  TableBody,
  TableHead,
  TableRow,
  Table,
  TableCell,
} from '@material-ui/core';
import {cryptoListStyles, tableContainerStyles} from '../styles/styles';

const CryptoList = ({
  cryptoList,
  userHoldings,
  setUserHoldings,
  setTotalWorth,
}) => {
  const useStyles = makeStyles({
    ...tableContainerStyles, ...cryptoListStyles
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
    <Box className={classes.root}>
      <Box
        className={`${classes.listText} ${
          matches ? classes.mobileListText : ''
        }`}
      >
        <Box
          component='span'
          className={`${matches ? classes.mobileListText : ''}`}
        >
          Today's Cryptocurrency Prices
        </Box>
      </Box>
      <Box className={classes.cryptoTable}>
        <Table
          className={`${classes.table} ${matches ? classes.mobileTable : ''}`}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Box className={classes.columnCrypto}>
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
                Price
              </TableCell>
              <TableCell
                className={`${classes.tableHeading} ${
                  matches ? classes.mobileTableHeading : ''
                }`}
              >
                Rank
              </TableCell>
              <TableCell
                className={`${classes.tableHeading} ${
                  matches ? classes.mobileTableHeading : ''
                }`}
              >
                Circulating Supply
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
