import React from 'react';
import CryptoRow from './CryptoRow';

const CryptoList = ({cryptoList}) => {
    return (
        <div className='crypto-list-container'>
            <div className='crypto-table'>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <div className='column'>
                                    <span className='serial-number'>#</span>
                                    <span className='crypto-name'>Name</span>
                                </div>
                            </th>
                            <th className='crypto-price table-heading'>Price</th>
                            <th className='crypto-rank table-heading'>Rank</th>
                            <th className='crypto-supply table-heading'>Circulating Supply</th>
                            <th className='crypto-my-holdings table-heading'>My Holdings</th>
                            <th className='crypto-add-holdings table-heading'>Add to My Holdings</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cryptoList.data.map((crypto, index) => <CryptoRow key={crypto.id} crypto={crypto} serialNumber={index + 1} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CryptoList;