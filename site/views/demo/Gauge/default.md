## Basic Gauge 仪表盘

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
      text: '信用分',
      value: 45
    }
  ]
  const dataFields = {
    row: 'text',
    value: 'value'
  }
  const size = ['100%', '100%']
  const forceFit = true

  const style = {
    title: { fontSize: 36 }
  }

  return (
    <QChart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>
      <Gauge
        {...{
          min: 0,
          max: 100,
          lineWidth: 20,
          tickStep: 10,
          title: d => `${d.value}`,
          subTitle: d => `${d.text}`
        }}
        style={style}
      />
    </QChart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
