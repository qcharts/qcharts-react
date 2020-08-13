## Group Column Chart 分组柱状图

:::demo

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { QChart, QBar, QAxis, QLegend, QTooltip } from 'qcharts-react'

function App() {
  const data = [
    {
      product: '05-08',
      year: '图例一',
      sales: 42
    },
    {
      product: '05-08',
      year: '图例二',
      sales: 78.2
    },
    {
      product: '05-08',
      year: '图例三',
      sales: 62
    },
    {
      product: '05-09',
      year: '图例一',
      sales: 80
    },
    {
      product: '05-09',
      year: '图例二',
      sales: 108
    },
    {
      product: '05-09',
      year: '图例三',
      sales: 64
    },
    {
      product: '05-10',
      year: '图例一',
      sales: 36
    },
    {
      product: '05-10',
      year: '图例二',
      sales: 91
    },
    {
      product: '05-10',
      year: '图例三',
      sales: 56
    }
  ]
  const dataFields = {
    row: 'year',
    value: 'sales',
    text: 'product'
  }

  const axisStyle = { axis: false, scale: false }
  const bottomAxisStyle = { grid: false }
  return (
    <QChart data={data} dataFields={dataFields}>
      <QBar transpose={false} barWidth={20} />
      <QLegend align={['center', 'bottom']} />
      <QAxis style={bottomAxisStyle} />
      <QAxis orient={'left'} style={axisStyle} />
      <QTooltip formatter={d => `${d.product} - ${d.year} - ${d.sales}`} />
    </QChart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
