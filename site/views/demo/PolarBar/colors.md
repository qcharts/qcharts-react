## Basic Line Chart 基础折线图

:::demo

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { QChart, QLegend, QTooltip, QPolarBar } from 'qcharts-react'
function App() {
  const data = [
    { value: 6100, label: 'TOP1' },
    { value: 5200, label: 'TOP2' },
    { value: 4400, label: 'TOP3' },
    { value: 3700, label: 'TOP4' },
    { value: 2800, label: 'TOP5' },
    { value: 3000, label: 'TOP6' },
    { value: 5300, label: 'TOP7' },
    { value: 3400, label: 'TOP8' }
  ]
  const colors = [
    '#47A1FF',
    '#59CB74',
    '#FFB952',
    '#FC6980',
    '#6367EC',
    '#DA65CC',
    '#FBD54A',
    '#ADDF84'
  ]
  const dataFields = {
    value: 'value',
    text: 'label'
  }
  const lineStyle = { point: { strokeColor: '#fff' } }
  const axisStyle = { axis: false, scale: false }
  const bottomAxisStyle = { grid: false }
  const polarBarStyle = {
    pillar: function(attr, data, i) {
      return { fillColor: colors[i] }
    }
  }
  const toolTipStyle = {
    point: function(attr, item, i) {
      return { 'background-color': colors[data.indexOf(item[0])] }
    }
  }
  return (
    <QChart data={data} dataFields={dataFields}>
      <QPolarBar innerRadius={0.1} radius={0.8} style={polarBarStyle} />
      <QTooltip
        style={toolTipStyle}
        formatter={data => `${data.label}: ${data.value}`}
      />
    </QChart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
