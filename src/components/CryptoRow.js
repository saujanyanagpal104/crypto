import React from 'react';

const CryptoRow = ({crypto, serialNumber}) => {
    return (
        <tr className='crypto-row'>
            {console.log(crypto)}
            <td>
                <div className='column'>
                    <span className='table-row-serial-number'>{serialNumber}</span>
                    <span className='table-row-name'>{crypto.name} <span className='crypto-symbol'>({crypto.symbol})</span></span>
                </div>
            </td>
            <td className='row-price table-row-item'>{crypto.quote.INR.price} INR</td>
            <td className='table-row-item'>{crypto.cmc_rank}</td>
            <td className='row-circulating-supply table-row-item'>{crypto.circulating_supply} {crypto.symbol}</td>
            <td className='table-row-item'>Later</td>
            <td className='table-row-item'>Later</td>
        </tr>
    )
}

export default CryptoRow;