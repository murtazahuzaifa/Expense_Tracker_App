import React, { useContext } from 'react';
import {TransactionType} from '../types/AppTypes';
// import AddTransaction from './AddTransaction';

//import Global Context
import { GlobalContext } from '../hooks/GlobalContext';

//importing style 
import '../style/TransactionList.css';

const TransactionList:React.FC = () => {

    const { transactionListState, deleteTransaction } = useContext(GlobalContext);

    const createTransationLists = (transaction:TransactionType, index:number, deleteTransaction:(transaction: number) => void) => {
        const sign = transaction.amount > 0 ? 'Rs:' : '-Rs:'
        const class_name = transaction.amount > 0 ? 'positive-income': "negative-expense"

        return (
            <li key={index} className={class_name}>
                <button className='delete-btn' onClick={() => deleteTransaction(index)} > X</button>
                <div>
                    <span className='list-text'>{transaction.description}</span> <span className='list-text' >{`${sign}`}{Math.abs(transaction.amount)}</span>
                </div>
            </li>
        );
    }

    return (
        <div className='TransactionList'>
            <br />
            <h3 className='title'>Transactions:</h3>
            <hr />
            <ul>
                {transactionListState.map(
                    (transaction:TransactionType, index:number) => createTransationLists(transaction, index, deleteTransaction)
                    // <li key={transaction.id}><span>{transaction.description}</span> <span>${transaction.amount}</span></li>
                )}
            </ul>
        </div>
    );
}

export default TransactionList;