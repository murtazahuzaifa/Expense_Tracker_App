import React, { useContext } from 'react';

//import Global Context
import { GlobalContext } from '../hooks/GlobalContext';

const Balance = () => {
    const {transactionListState} = useContext(GlobalContext);

    const balance  = transactionListState.map(transaction => transaction.amount)
    .reduce((a, b) => (a + b), 0)

    return (
        <div className='balance'>
            <h4>BALANCE</h4>
    <span>Rs: {balance}</span>
        </div>
    );
}

export default Balance;