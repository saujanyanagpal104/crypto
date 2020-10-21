import React from "react";
import AddCryptoInPortfolio from "./AddCryptoInPortfolio";
import {formatNumber} from '../helpers/formatNumber';

const CryptoRow = ({ crypto, serialNumber, userHoldings, setUserHoldings }) => {
    const currentHoldingsWorth = userHoldings[crypto.id] ? userHoldings[crypto.id].coinQuantity * crypto.quote.INR.price : 0;

  return (
    <tr className="crypto-row">
      <td>
        <div className="column">
          <span className="table-row-serial-number">{serialNumber}</span>
          <span className="table-row-name">
            {crypto.name}&nbsp;<span className="crypto-symbol">({crypto.symbol})</span>
          </span>
        </div>
      </td>
  <td className="row-price table-row-item"><span>&#8377;{formatNumber(crypto.quote.INR.price)}</span></td>
      <td className="table-row-item">{crypto.cmc_rank}</td>
      <td className="row-circulating-supply table-row-item">
        {formatNumber(crypto.circulating_supply)}&nbsp;{crypto.symbol}
      </td>
      <td className="table-row-item">
        {userHoldings[crypto.id] ? (
          <span className="row-holdings">
            <span className='my-holdings'>
              {formatNumber(userHoldings[crypto.id].coinQuantity)}&nbsp;{crypto.symbol}
            </span>
            <span className='holdings-worth'>
              Worth:&nbsp;&#8377;{formatNumber(currentHoldingsWorth)}
            </span>
          </span>
        ) : (
          <span className="no-coins">Nothing! But you can add!</span>
        )}
      </td>
      <td className="table-row-item">
        <AddCryptoInPortfolio
          crypto={crypto}
          userHoldings={userHoldings}
          setUserHoldings={setUserHoldings}
        />
      </td>
    </tr>
  );
};

export default CryptoRow;
