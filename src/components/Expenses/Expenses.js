import React, {useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  }

  const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear().toString() === filteredYear);


  return (
    <Card className="expenses">

      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>

    </Card>
  );

}

export default Expenses;
