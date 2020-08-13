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
  const style = {
    title: { fontSize: 36 }
  }
  return (
    <QChart>
      <QGauge
        {...{
          min: 0,
          max: 100,
          lineWidth: 20,
          tickStep: 10,
          percent: 80,
          title: d => `${d}`
        }}
        style={style}
      />
    </QChart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
