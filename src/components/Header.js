import React from 'react';
import { formatNumber } from '../helpers/formatNumber';
import {makeStyles} from '@material-ui/styles';
import {headerStyles, mobileHeaderStyles} from '../styles/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Header = ({ totalWorth }) => {
  const useStyles = makeStyles({
    header: headerStyles,
    mobileHeader: mobileHeaderStyles
  });

  const classes = useStyles();
  const matches = useMediaQuery('(max-width:768px)');

  return (
    <div className={classes.header}>
      <span className={`${matches ? classes.mobileHeader : ''}`}>CRYPTO</span>
      <span className={`${matches ? classes.mobileHeader : ''}`}>Total Profile Worth:&nbsp;&#8377;{formatNumber(totalWorth)}</span>
    </div>
  )
}

export default Header;
