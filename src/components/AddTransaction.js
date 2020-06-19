import React, {useState, useContext} from 'react';

//import Global Context
import { GlobalContext } from '../hooks/GlobalContext';

//importing style 
import '../style/AddTransaction.css';

const AddTransaction = () => {

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = (event)=>{

        event.preventDefault(); // this function will handle page refresh on form submit

        const transaction = {
            description: desc,
            amount: Number(amount)
        }
        addTransaction(transaction)

        setDesc('');
        setAmount(0)

        }

    const [desc, setDesc] = useState('');
    const [amount, setAmount] = useState(0);

    return (
        <div className='AddTransaction'>
            <br />
            <h4>Add New Transaction:</h4>
            <hr />
            <form className='form-control' onSubmit={onSubmit}>
                <div className='DescriptionInput' >
                    <label htmlFor='description'><input id='description' value={desc} onChange={e=>setDesc(e.target.value)} type='text' required placeholder='Expense Description...' /></label>
                </div>
                <hr/>
                <div className='AmountInput'>
                    Positive amount will be Income. <br/>
                    Negetive amount will be expense.
                    <label htmlFor='amount'><input id='amount' value={amount} onChange={e=>setAmount(e.target.value)} type='number' required placeholder='Rs: Amount..' /></label>
                </div>
                <div className='Submit-btn'>
                    <label ><input id='submit-btn' type='submit' value='ADD' /></label>
                </div>
            </form>
        </div>
    );
}

export default AddTransaction;