import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

export const GlobalContext = createContext();

const reducerInitState =  [
        { description: 'Salary', amount: 15000 },
        { description: 'PIAIC fees', amount: -3000 },
        { description: 'Book Purchasing', amount: -1000 }
    ]

export const GlobalProvider = ({children}) => {

    // initializing reducer
    const [transactionListState, dispatch] = useReducer(AppReducer, reducerInitState);

    // reducer actions
    const addTransaction = (transaction)=>{
        // console.log(transaction)
        dispatch({
                type : 'AddTransaction',
                payload: transaction
            });
    }

    const deleteTransaction = (index)=>{
        // console.log(index)
        dispatch({
            type: 'DeleteTransaction',
            payload: index
        });
    }

    return (
        <GlobalContext.Provider value={{transactionListState, addTransaction, deleteTransaction}}>
            {children}
        </GlobalContext.Provider>
    );
}