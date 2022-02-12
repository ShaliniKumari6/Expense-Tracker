import React, { useState} from 'react';
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';

import ExpenseChart from './ExpenseChart';

const Expenses=(props)=>{
  const [filteredYear,setFilteredYear]=useState('2020')
  const filterChangeHandler=(selectedYear)=>{
    setFilteredYear(selectedYear);
  };
  const filteredExpense=props.items.filter(item=>{
    return item.date.getFullYear().toString()===filteredYear;
  });

 
return (
  
  <div>
  <Card className='expenses'> 
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
    <ExpenseChart expenses={filteredExpense}/>
    <ExpensesList items={filteredExpense}/>
</Card>
</div>
  );

}
export default Expenses;