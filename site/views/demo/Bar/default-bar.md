## Basic Bar Chart 基础条形图

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
    { value: 6100, label: 'TOP1' },
    { value: 5200, label: 'TOP2' },
    { value: 4400, label: 'TOP3' },
    { value: 3700, label: 'TOP4' },
    { value: 2800, label: 'TOP5' },
    { value: 2000, label: 'TOP6' },
    { value: 1300, label: 'TOP7' },
    { value: 400, label: 'TOP8' }
  ]
  const dataFields = {
    row: '*',
    value: 'value',
    text: 'label'
  }
  const size = ['100%', '100%']
  const forceFit = true

  const barStyle = { pillar: { fillColor: '#47A1FF' } }
  const xAxisStyle = { grid: true }
  const yAxisStyle = { grid: false }
  const legendStyle = {
    text: { text: '图例一' }
  }

  return (
    <QChart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>
      <QBar transpose={true} barWidth={18} style={barStyle} />
      <QLegend align={['center', 'bottom']} style={legendStyle} />
      <QAxis style={xAxisStyle} />
      <QAxis orient={'left'} style={yAxisStyle} />
      <QTooltip formatter={d => `${d.label}: ${d.value}`} />
    </QChart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
