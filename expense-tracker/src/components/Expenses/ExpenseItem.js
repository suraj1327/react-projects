import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import {useState} from 'react';  // Anything that starts with 'use' and is directly inside the main functions is a hook.

// This is a stateless/Presentational/Dumb component
// There will be a lot of stateless component than stateful component.

const ExpenseItem = (props) => {
    // Returns expense card
    return (
        <li>
            <Card className="expense-item">
                <div>
                    <ExpenseDate date={props.date}></ExpenseDate>
                </div>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">Rs. {props.amount}</div>
                </div>
            </Card>
       </li>
    );
}

export default ExpenseItem