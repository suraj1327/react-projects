import './Expenses.css';
import Card from '../UI/Card';
import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';

function Expenses(props){
    const [filterYear,changeFilterYear] = useState('2020');

    const changeFilterValue = (newYear) => {
        changeFilterYear(newYear);
    }

    const filteredExpenses = props.expenses.filter((expense)=> (expense.date.getFullYear().toString() === filterYear))
    
    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filterYear} onChangeFilter={changeFilterValue}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
                {/* <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}></ExpenseItem>
                <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}></ExpenseItem>
                <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}></ExpenseItem>
                <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}></ExpenseItem> */}
            </Card>
        </div>
    );
}

export default Expenses