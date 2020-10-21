import React from 'react';
import { formatNumber } from '../helpers/formatNumber';

const Header = ({ totalWorth }) => (
  <div className='header'>
    <span>CRYPTO</span>
    <span>Total Profile Worth:&nbsp;&#8377;{formatNumber(totalWorth)}</span>
  </div>
);

export default Header;
