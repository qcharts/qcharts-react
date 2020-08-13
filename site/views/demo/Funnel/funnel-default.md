## Basic Funnel Chart 基础漏斗图

:::demo

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { QChart, QFunnel, QLegend, QTooltip } from 'qcharts-react'

function App() {
  const data = [
    { value: 3721, label: '浏览网站' },
    { value: 3006, label: '放入购入车' },
    { value: 2505, label: '生成订单' },
    { value: 2151, label: '支付订金' },
    { value: 1782, label: '完成订单' },
    { value: 1503, label: '完成交易' },
    { value: 1204, label: '未完成交易' }
  ]
  const dataFields = {
    row: 'label',
    col: 'value',
    value: 'value',
    text: 'label',
    sort: (a, b) => b.value - a.value
  }

  const style = {
    guideLine: true,
    guideText: true,
    polygon: { strokeColor: 'transparent' },
    'polygon:hover': (polygon, dataOrigin, index) => {
      return { opacity: 0.5 }
    }
  }

  return (
    <QChart data={data} dataFields={dataFields}>
      <QFunnel
        {...{
          align: 'center',
          formatter: d => `${d.value}`
        }}
        style={style}
      />
      <QLegend align={['center', 'bottom']} />
      <QTooltip
        {...{
          formatter: d => `${d.label}: ${d.value}`
        }}
      />
    </QChart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
