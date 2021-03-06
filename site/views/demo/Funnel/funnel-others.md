## 样式调整

:::demo

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { QChart, QFunnel, QLegend, QTooltip } from 'qcharts-react'

function App() {
  const data = [
    { value: 3350, label: '直接访问' },
    { value: 1648, label: '搜索引擎' },
    { value: 2440, label: '联盟广告' },
    { value: 1550, label: '视频广告' },
    { value: 3000, label: '邮件营销' }
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
    polygon: { strokeColor: 'transparent' }
  }

  return (
    <QChart data={data} dataFields={dataFields}>
      <QFunnel
        {...{
          clientRect: {
            left: '22%',
            top: '20%',
            width: '25%',
            height: '70%'
          },
          align: 'right',
          pyramid: true
        }}
        style={style}
      />
      <QFunnel
        {...{
          clientRect: {
            left: '50%',
            top: '20%',
            width: '25%',
            height: '70%'
          },
          align: 'left',
          pyramid: true
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
