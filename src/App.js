import React, {useState} from 'react';
import './App.css';
import Expenses from './components/Expense/Expenses'
import NewExpense from './components/NewExpense/NewExpense';
const Dummy_Expenses = [
  // {
  //   id: 'e1',
  //   title: 'NoteBook',
  //   amount: 94.12,
  //   date: new Date(2020, 7, 14),
  // },
  // { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  // {
  //   id: 'e3',
  //   title: 'Car Insurance',
  //   amount: 294.67,
  //   date: new Date(2023, 2, 28),
  // },
  // {
  //   id: 'e4',
  //   title: 'New Desk (Wooden)',
  //   amount: 450,
  //   date: new Date(2024, 2, 12),
  // },
];



function App() {
 const [expenses,setExpenses] = useState(Dummy_Expenses);
  const addExpenseHendler=(expense)=>{
   setExpenses(prevExpense=>{
     return [expense, ...prevExpense]
   })};
  return (
  <div className="App">
    <NewExpense onAddExpense={addExpenseHendler}/>
  <Expenses items={expenses}></Expenses>
  </div>
    
  );
}

export default App;
