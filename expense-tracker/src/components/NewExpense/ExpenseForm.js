import React, {useState} from 'react';
import './ExpenseForm.css';


// Passing data from Parent to child - Props.
// Passing data from Child to Parent - Function

const ExpenseForm = (props) => {
    // Individual States
    const [title,setTitle] =  useState ('');
    const [amount,setAmount] = useState('');
    const [date,setDate] = useState('');

    // Single State
    // const [userInput, setUserInput] = useState({
    //     title : '',
    //     amount : '',
    //     date : ''
    // });

    const titleChangeHandler = (event) => {
        // Single State

        // setUserInput({
        //     ...userInput,
        //     title : event.target.value
        // });
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //          title:event.target.value
        //     }
        // })

        // Multiple State Approach

        setTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     amount : event.target.value
        // });
        setAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     date : event.target.value
        // });
        setDate(event.target.value);
    }   

    const submitHandler = (event) => {
        event.preventDefault(); // To prevent the page from reloading due to onSubmit. 
        const expenseData = {
            title : title,
            amount : amount,
            date: new Date(date)
        }
        props.onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" value={amount} step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={date} min="2019-01-01" max="2022-01-01" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;