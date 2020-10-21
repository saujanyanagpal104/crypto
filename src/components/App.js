import React, {useState, useEffect} from 'react';
import Header from './Header';
import CryptoList from './CryptoList';
import UserHoldings from './UserHoldings';
import TabsBar from './TabsBar';
import '../styles/index.css';

const App = () => {
    const [cryptoList, setCryptoList] = useState([]);
    const [userHoldings, setUserHoldings] = useState([]);
    const [userHoldingsTab, setUserHoldingsTab] = useState(false);
    const [cryptoListTab, setCryptoListTab] = useState(true);
    const [isFetched, setIsFetched] = useState(false);

    useEffect(() => {
        let fetchList = async () => {
            let fetchData = await fetch('https://damp-thicket-11337.herokuapp.com/').then(res => res.json());
            setCryptoList(fetchData);
            setIsFetched(true);
        }
 
        fetchList();
    }, []);

    return(
        <div className='container'>
            <Header />
            {userHoldingsTab && <UserHoldings userHoldings={userHoldings} />}
            {(cryptoListTab && isFetched) ? <CryptoList cryptoList={cryptoList} /> : null}
            <TabsBar userHoldingsTab={userHoldingsTab} setUserHoldingsTab={setUserHoldingsTab} cryptoListTab={cryptoListTab} setCryptoListTab={setCryptoListTab} />
        </div>
    )
}

export default App;