## Stacked Area Chart 堆叠面积图

:::demo

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import {
  QChart,
  QArea,
  QLine,
  QPie,
  QBar,
  QRadar,
  QScatter,
  QGauge,
  QFunnel,
  QAxis,
  QLegend,
  QTooltip
} from 'qcharts-react'

function App() {
  const data = [
    { date: '05-01', category: '图例一', sales: 15.2 },
    { date: '05-02', category: '图例一', sales: 39.2 },
    { date: '05-03', category: '图例一', sales: 31.2 },
    { date: '05-04', category: '图例一', sales: 65.2 },
    { date: '05-05', category: '图例一', sales: 55.2 },
    { date: '05-06', category: '图例一', sales: 75.2 },
    { date: '05-07', category: '图例一', sales: 95.2 },
    { date: '05-08', category: '图例一', sales: 65.2 },
    { date: '05-01', category: '图例二', sales: 10.2 },
    { date: '05-02', category: '图例二', sales: 30.2 },
    { date: '05-03', category: '图例二', sales: 25.2 },
    { date: '05-04', category: '图例二', sales: 70.2 },
    { date: '05-05', category: '图例二', sales: 45.2 },
    { date: '05-06', category: '图例二', sales: 56.2 },
    { date: '05-07', category: '图例二', sales: 70.2 },
    { date: '05-08', category: '图例二', sales: 45.2 }
  ]
  const dataFields = {
    row: 'category',
    value: 'sales',
    text: 'date'
  }

  const areaStyle = {
    point: false
  }
  const axisStyle = { axis: false, scale: false }
  const bottomAxisStyle = { grid: false }
  return (
    <QChart data={data} dataFields={dataFields}>
      <QArea style={areaStyle} />
      <QLegend align={['center', 'bottom']} />
      <QAxis style={bottomAxisStyle} />
      <QAxis orient={'left'} style={axisStyle} />
      <QTooltip formatter={data => `${data.date} ${data.sales}`} />
    </QChart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
