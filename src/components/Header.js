import React from 'react';
import { formatNumber } from '../helpers/formatNumber';
import {makeStyles} from '@material-ui/styles';
import {headerStyles, mobileHeaderStyles} from '../styles/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';

const Header = ({ totalWorth }) => {
  const useStyles = makeStyles({
    header: headerStyles,
    mobileHeader: mobileHeaderStyles
  });

  const classes = useStyles();
  const matches = useMediaQuery('(max-width:768px)');

  return (
    <Box className={classes.header}>
      <Box component='span' className={`${matches ? classes.mobileHeader : ''}`}>CRYPTO</Box>
      <Box component='span' className={`${matches ? classes.mobileHeader : ''}`}>Total Profile Worth:&nbsp;&#8377;{formatNumber(totalWorth)}</Box>
    </Box>
  )
}

export default Header;
