import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';


const Chart = (props) => {

  const allValues = props.dataPoints.map((dp) => dp.value);
  const maximumValue = Math.max(...allValues);

  return (
    <div className="chart">

      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maximumValue}
          label={dataPoint.label}
        />)
      )}

    </div>
  )
}

export default Chart;
