import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { TransactionType, GlobalContextPropType } from '../types/AppTypes';

export let GlobalContext = createContext<any>({});

const reducerInitState: TransactionType[] = [
    { description: 'Salary', amount: 15000 },
    { description: 'PIAIC fees', amount: -3000 },
    { description: 'Book Purchasing', amount: -1000 }
];

export const GlobalProvider: React.FC<GlobalContextPropType> = ({ children }) => {
    const [transactionListState, dispatch] = useReducer(AppReducer, reducerInitState);

    const addTransaction = (transaction: TransactionType) => {
        dispatch({
            type: 'AddTransaction',
            payload: transaction
        });
    }

    const deleteTransaction = (index: number) => {
        dispatch({
            type: 'DeleteTransaction',
            payload: index
        });
    }

    return (
        <GlobalContext.Provider value={{ transactionListState, addTransaction, deleteTransaction }}>
            {children}
        </GlobalContext.Provider>
    )
}