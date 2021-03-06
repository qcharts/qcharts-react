## Group Bar Chart 分组条形图

:::demo

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { QChart, QBar, QAxis, QLegend, QTooltip } from 'qcharts-react'

function App() {
  const data = [
    {
      product: '05-12',
      year: '图例一',
      sales: 3000
    },
    {
      product: '05-12',
      year: '图例二',
      sales: 3500
    },
    {
      product: '05-12',
      year: '图例三',
      sales: 2000
    },
    {
      product: '05-13',
      year: '图例一',
      sales: 5800
    },
    {
      product: '05-13',
      year: '图例二',
      sales: 4200
    },
    {
      product: '05-13',
      year: '图例三',
      sales: 2700
    },
    {
      product: '05-14',
      year: '图例一',
      sales: 2600
    },
    {
      product: '05-14',
      year: '图例二',
      sales: 1800
    },
    {
      product: '05-14',
      year: '图例三',
      sales: 3800
    },
    {
      product: '05-15',
      year: '图例一',
      sales: 3400
    },
    {
      product: '05-15',
      year: '图例二',
      sales: 5100
    },
    {
      product: '05-15',
      year: '图例三',
      sales: 4300
    },
    {
      product: '05-16',
      year: '图例一',
      sales: 3100
    },
    {
      product: '05-16',
      year: '图例二',
      sales: 3400
    },
    {
      product: '05-16',
      year: '图例三',
      sales: 2100
    }
  ]
  const dataFields = {
    row: 'year',
    value: 'sales',
    text: 'product'
  }

  const xAxisStyle = { grid: true }
  const yAxisStyle = { grid: false }

  return (
    <QChart data={data} dataFields={dataFields}>
      <QBar transpose={true} barWidth={12} />
      <QLegend align={['center', 'bottom']} />
      <QAxis style={xAxisStyle} />
      <QAxis orient={'left'} style={yAxisStyle} />
      <QTooltip formatter={d => `${d.product} - ${d.year} - ${d.sales}`} />
    </QChart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```
