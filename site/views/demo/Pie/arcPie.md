## ArcPie Chart 弧饼图

:::demo

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { QChart, QPie, QLegend, QTooltip } from 'qcharts-react'

function App() {
  const data = [
    {
      type: '污染源',
      count: 4454
    },

    {
      type: '消防场所',
      count: 1239
    },

    {
      type: '安全生产',
      count: 3758
    },

    {
      type: '治安场所',
      count: 4353
    }
  ]
  const dataFields = {
    row: 'type',
    value: 'count'
  }

  const style = {}

  const legendStyle = {}

  return (
    <QChart data={data} dataFields={dataFields}>
      <QPie
        style={style}
        innerRadius={0.1}
        startAngle={180}
        endAngle={360}
        radius={0.7}
      />
      <QLegend style={legendStyle} />
    </QChart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
