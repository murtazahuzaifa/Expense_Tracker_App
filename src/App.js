import React from 'react';
// imorting Components
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

//importing hooks
import { GlobalProvider } from './hooks/GlobalContext';

//importing Style
import './style/App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="App-Container">
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
