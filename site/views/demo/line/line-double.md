## Double Line Chart 双折线图

:::demo

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { QChart, QLine, QAxis, QLegend, QTooltip } from 'qcharts-react'

function App() {
  const data = [
    { date: '05-01', catgory: '图例一', sales: 15.2 },
    { date: '05-02', catgory: '图例一', sales: 39.2 },
    { date: '05-03', catgory: '图例一', sales: 51.2 },
    { date: '05-04', catgory: '图例一', sales: 65.2 },
    { date: '05-05', catgory: '图例一', sales: 55.2 },
    { date: '05-06', catgory: '图例一', sales: 75.2 },
    { date: '05-07', catgory: '图例一', sales: 95.2 },
    { date: '05-08', catgory: '图例一', sales: 65.2 },
    { date: '05-01', catgory: '图例二', sales: 20.2 },
    { date: '05-02', catgory: '图例二', sales: 49.2 },
    { date: '05-03', catgory: '图例二', sales: 57.2 },
    { date: '05-04', catgory: '图例二', sales: 55.2 },
    { date: '05-05', catgory: '图例二', sales: 75.2 },
    { date: '05-06', catgory: '图例二', sales: 95.2 },
    { date: '05-07', catgory: '图例二', sales: 110.2 },
    { date: '05-08', catgory: '图例二', sales: 85.2 }
  ]

  const dataFields = {
    row: 'catgory',
    value: 'sales',
    text: 'date'
  }

  const lineStyle = { point: { strokeColor: '#fff' } }
  const axisStyle = { axis: false, scale: false }
  const axisBottomStyle = { grid: false }

  return (
    <QChart data={data} dataFields={dataFields}>
      <QLine style={lineStyle} />
      <QLegend align={['center', 'bottom']} />
      <QAxis orient={'bottom'} style={axisBottomStyle} />
      <QAxis orient={'left'} style={axisStyle} />
      <QTooltip
        title={'展示结果'}
        formatter={data => `${data.date} ${data.sales}`}
      />
    </QChart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
