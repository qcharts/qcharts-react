## Stack Bar Chart 堆叠条形图

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
    {
      data: '05-12',
      type: '图例一',
      value: 11
    },
    {
      data: '05-12',
      type: '图例二',
      value: 12.2
    },
    {
      data: '05-13',
      type: '图例一',
      value: 28
    },
    {
      data: '05-13',
      type: '图例二',
      value: 31
    },
    {
      data: '05-14',
      type: '图例一',
      value: 36
    },
    {
      data: '05-14',
      type: '图例二',
      value: 18
    },
    {
      data: '05-15',
      type: '图例一',
      value: 58
    },
    {
      data: '05-15',
      type: '图例二',
      value: 30.2
    },
    {
      data: '05-16',
      type: '图例一',
      value: 86.2
    },
    {
      data: '05-16',
      type: '图例二',
      value: 41.2
    },
    {
      data: '05-17',
      type: '图例一',
      value: 71.2
    },
    {
      data: '05-17',
      type: '图例二',
      value: 45.2
    },
    {
      data: '05-18',
      type: '图例一',
      value: 41.2
    },
    {
      data: '05-18',
      type: '图例二',
      value: 22.2
    },
    {
      data: '05-19',
      type: '图例一',
      value: 16.2
    },
    {
      data: '05-19',
      type: '图例二',
      value: 20.2
    }
  ]
  const dataFields = {
    row: 'type',
    value: 'value',
    text: 'data'
  }
  const size = ['100%', '100%']
  const forceFit = true

  const xAxisStyle = { grid: true }
  const yAxisStyle = { grid: false }

  return (
    <QChart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>
      <Bar transpose={true} stack={true} barWidth={20} />
      <QLegend align={['center', 'bottom']} />
      <QAxis style={xAxisStyle} />
      <QAxis orient={'left'} style={yAxisStyle} />
      <QTooltip formatter={d => `${d.type}: ${d.value}`} />
    </QChart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
