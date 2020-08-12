## Basic Line Chart 基础折线图

:::demo

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { Chart, Line, Axis, Legend, Tooltip } from 'qcharts-react'
function App() {
  const data = [
    { date: '05-01', catgory: '图例一', sales: 15.2 },
    { date: '05-02', catgory: '图例一', sales: 39.2 },
    { date: '05-03', catgory: '图例一', sales: 31.2 },
    { date: '05-04', catgory: '图例一', sales: 65.2 },
    { date: '05-05', catgory: '图例一', sales: 55.2 },
    { date: '05-06', catgory: '图例一', sales: 75.2 },
    { date: '05-07', catgory: '图例一', sales: 95.2 },
    { date: '05-08', catgory: '图例一', sales: 65.2 }
  ]
  const dataFields = {
    row: 'catgory',
    value: 'sales',
    text: 'date'
  }
  const forceFit = true
  const lineStyle = { point: { strokeColor: '#fff' } }
  const axisStyle = { axis: false, scale: false }

  return (
    <Chart data={data} dataFields={dataFields}>
      <Line style={lineStyle} />
      <Legend align={['center', 'bottom']} />
      <Axis />
      <Axis orient={'left'} style={axisStyle} />
      <Tooltip formatter={data => `${data.date} ${data.sales}`} />
    </Chart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
