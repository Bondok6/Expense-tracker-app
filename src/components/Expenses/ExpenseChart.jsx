import React from 'react';
import Chart from '../Chart/Chart';


const ExpenseChart = (props) => {

  const dataChart = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Agu', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const exp of props.expenses) {
    const expMonth = exp.date.getMonth();
    dataChart[expMonth].value += exp.amount;
  }

  return (
      <Chart dataPoints = {dataChart} />   
  )
}

export default ExpenseChart;
