import React from 'react';
import {formatNumber} from '../helpers/formatNumber';

const UserHoldingRow = ({userHoldings, serialNumber, updatedData}) => {
    const differencePrice = parseInt(updatedData.quote.INR.price) - parseInt(userHoldings[updatedData.id].quote.INR.price)

    return (
        <tr className='user-holding-row'>
            <td>
                <div className="column">
                <span className="table-row-serial-number">{serialNumber}</span>
                <span className="table-row-name">
                    {userHoldings[updatedData.id].name}&nbsp;<span className="crypto-symbol">({userHoldings[updatedData.id].symbol})</span>
                </span>
                </div>
            </td>
        <td className="row-price table-row-item"><span>&#8377;{formatNumber(updatedData.quote.INR.price)}</span></td>
            <td className="table-row-item">
                <span className="row-holdings">
                    <span className='my-holdings'>
                    {formatNumber(userHoldings[updatedData.id].coinQuantity)}&nbsp;{userHoldings[updatedData.id].symbol}
                    </span>
                    <span className='holdings-worth'>
                    Worth:&nbsp;&#8377;{formatNumber(userHoldings[updatedData.id].coinQuantity * userHoldings[updatedData.id].coinQuantity)}
                    </span>
                </span>
            </td>
            <td className='table-row-item'>
                <span className='bought-at'>&#8377;{formatNumber(userHoldings[updatedData.id].quote.INR.price)}</span>/<span className={`difference-price ${differencePrice > 0 ? 'profit' : 'loss'}`}>&#8377;{formatNumber(differencePrice)}</span>}
            </td>
        </tr>
    )
}

export default UserHoldingRow;