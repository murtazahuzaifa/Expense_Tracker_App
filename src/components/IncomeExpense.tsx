import React, { useContext } from 'react';
import {TransactionType} from '../types/AppTypes';
//import Global Context
import { GlobalContext } from '../hooks/GlobalContext';

//importing style 
import '../style/IncomeExpense.css';

const IncomeExpense:React.FC = () => {
    const { transactionListState } = useContext(GlobalContext);
    
    const income = transactionListState.map((transaction:TransactionType) => transaction.amount)
    .filter((amount:number) => amount > 0).reduce((a:number, b:number) => (a + b), 0)

    const expense = transactionListState.map((transaction:TransactionType) => transaction.amount)
    .filter((amount:number) => amount < 0).reduce((a:number, b:number) => (a + b), 0) * -1

    return (
        <div className='income-expense-container'>
            <div className='income'><h5>INCOME</h5><span>Rs:{income}</span></div>
            <hr />
            <div className='expense'><h5>EXPENSE</h5><span>Rs:{expense}</span></div>
        </div>
    );
}

export default IncomeExpense;