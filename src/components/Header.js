import React from 'react';
import { formatNumber } from '../helpers/formatNumber';
import { makeStyles } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import { headerStyles } from '../styles/styles';

const Header = ({ totalWorth }) => {
  const useStyles = makeStyles({
    ...headerStyles
  });

  const classes = useStyles();
  const matches = useMediaQuery('(max-width:768px)');

  return (
    <Box className={classes.root}>
      <Box
        component='span'
        className={`${classes.text} ${matches ? classes.mobileText : ''}`}
      >
        CRYPTO
      </Box>
      <Box
        component='span'
        className={`${classes.text} ${matches ? classes.mobileText : ''}`}
      >
        Total Profile Worth:&nbsp;&#8377;{formatNumber(totalWorth)}
      </Box>
    </Box>
  );
};

export default Header;
