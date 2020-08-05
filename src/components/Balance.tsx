import React, { useContext } from 'react';
import {TransactionType} from '../types/AppTypes';

//import Global Context
import { GlobalContext } from '../hooks/GlobalContext';

const Balance:React.FC = () => {
    const {transactionListState} = useContext(GlobalContext);

    const balance  = transactionListState.map((transaction:TransactionType) => transaction.amount)
    .reduce((a:number, b:number) => (a + b), 0)

    return (
        <div className='balance'>
            <h4>BALANCE</h4>
    <span>Rs: {balance}</span>
        </div>
    );
}

export default Balance;