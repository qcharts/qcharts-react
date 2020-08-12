## Basic Column Chart 基础柱状图

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
    { value: 22, label: '05-01' },
    { value: 60, label: '05-02' },
    { value: 56, label: '05-03' },
    { value: 85, label: '05-04' },
    { value: 136, label: '05-05' },
    { value: 108, label: '05-06' },
    { value: 64, label: '05-07' },
    { value: 35, label: '05-08' }
  ]
  const dataFields = {
    row: '*',
    value: 'value',
    text: 'label'
  }
  const size = ['100%', '100%']
  const forceFit = true
  const columnStyle = {
    pillar: { fillColor: '#47A1FF' }
  }
  const axisStyle = { axis: false, scale: false }
  const legendStyle = { text: { text: '图例一' } }

  return (
    <QChart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>
      <QBar style={columnStyle} />
      <QLegend align={['center', 'bottom']} style={legendStyle} />
      <QAxis />
      <QAxis orient={'left'} style={axisStyle} />
      <QTooltip formatter={d => `${d.label}: ${d.value}`} />
    </QChart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
