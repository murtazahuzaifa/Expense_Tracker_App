import React, {useState, useContext} from 'react';
// import {TransactionType} from '../types/AppTypes';

//import Global Context
import { GlobalContext } from '../hooks/GlobalContext';

//importing style 
import '../style/AddTransaction.css';

const AddTransaction = () => {
    const {addTransaction} = useContext(GlobalContext);

    const [desc, setDesc] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);

    const handleSetDesc = (e:React.ChangeEvent<HTMLInputElement>)=>{setDesc(e.target.value)};
    const handleSetAmount = (e:React.ChangeEvent<HTMLInputElement>)=>{setAmount(Number(e.target.value))};
    const onSubmit = (event:React.FormEvent)=>{

        event.preventDefault(); // this function will handle page refresh on form submit

        const transaction = {
            description: desc,
            amount: Number(amount)
        }
        addTransaction(transaction)

        setDesc('');
        setAmount(0)

        };

    return (
        <div className='AddTransaction'>
            <br />
            <h4>Add New Transaction:</h4>
            <hr />
            <form className='form-control' onSubmit={onSubmit}>
                <div className='DescriptionInput' >
                    <label htmlFor='description'><input id='description' value={desc} onChange={handleSetDesc} type='text' required placeholder='Expense Description...' /></label>
                </div>
                <hr/>
                <div className='AmountInput'>
                    Positive amount will be Income. <br/>
                    Negetive amount will be expense.
                    <label htmlFor='amount'><input id='amount' value={amount} onChange={handleSetAmount} type='number' required placeholder='Rs: Amount..' /></label>
                </div>
                <div className='Submit-btn'>
                    <label ><input id='submit-btn' type='submit' value='ADD' /></label>
                </div>
            </form>
        </div>
    );
}

export default AddTransaction;