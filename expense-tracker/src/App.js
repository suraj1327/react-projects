import Expenses from "./components/Expenses/Expenses";
//import React from 'react';   Need to add to all the components in earlier versions.
import NewExpense from "./components/NewExpense/NewExpense";

import {useState} from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

  const AddExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [
        expense,
        ...prevState
      ];
    })
  }
  
  return (
    <div>
      <h2>Lets get Started!</h2>
        <NewExpense onAddExpense={AddExpenseHandler}/>
        <Expenses expenses={expenses}></Expenses>
    </div>
  );

  // Alternative to the tradition return with React import. The code below is the under the hood code. What actually happens...
  //return React.createElement('div',{},React.createElement('h2',{},'Lets get Started!'),React.createElement(Expenses,{expenses:expenses}))
}

export default App;
