import React from 'react';
import './NewExpense.css';
import ExpenseFrom from './ExpenseForm';

const NewExpense = (props) => {

  const saveExpenseDataHandler = (expenseEnteredData)=> {
    const expenseData = {
      ...expenseEnteredData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseFrom onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense
