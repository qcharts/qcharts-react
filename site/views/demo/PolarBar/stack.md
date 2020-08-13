## Basic Line Chart 基础折线图

:::demo

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { QChart, QLegend, QTooltip, QPolarBar } from 'qcharts-react'
function App() {
  const data = [
    {
      product: '05-08',
      year: '图例一',
      sales: 3000
    },
    {
      product: '05-08',
      year: '图例二',
      sales: 1000
    },
    {
      product: '05-08',
      year: '图例三',
      sales: 2000
    },
    {
      product: '05-09',
      year: '图例一',
      sales: 3000
    },
    {
      product: '05-09',
      year: '图例二',
      sales: 1000
    },
    {
      product: '05-09',
      year: '图例三',
      sales: 2000
    },

    {
      product: '05-10',
      year: '图例一',
      sales: 1700
    },
    {
      product: '05-10',
      year: '图例二',
      sales: 2400
    },
    {
      product: '05-10',
      year: '图例三',
      sales: 3700
    },

    {
      product: '05-11',
      year: '图例一',
      sales: 4200
    },
    {
      product: '05-11',
      year: '图例二',
      sales: 2800
    },
    {
      product: '05-11',
      year: '图例三',
      sales: 3100
    },

    {
      product: '05-12',
      year: '图例一',
      sales: 5100
    },
    {
      product: '05-12',
      year: '图例二',
      sales: 2500
    },
    {
      product: '05-12',
      year: '图例三',
      sales: 350
    }
  ]
  const dataFields = {
    row: 'year',
    value: 'sales',
    text: 'product'
  }
  const lineStyle = { point: { strokeColor: '#fff' } }
  const axisStyle = { axis: false, scale: false }
  const bottomAxisStyle = { grid: false }
  return (
    <QChart data={data} dataFields={dataFields}>
      <QPolarBar
        stack={true}
        innerRadius={0.1}
        radius={0.8}
        //groupPadAngle={Math.PI * 0.1}
      />
      <QLegend />
      <QTooltip />
    </QChart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
