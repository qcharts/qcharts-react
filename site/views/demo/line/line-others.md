## 其它

#### 样式调整

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
    { product: '茶叶', year: '2016', sales: 81.2 },
    { product: '茶叶', year: '2017', sales: 121.2 },
    { product: '茶叶', year: '2018', sales: 41.2 },
    { product: '牛奶', year: '2016', sales: 89.2 },
    { product: '牛奶', year: '2017', sales: 50.6 },
    { product: '牛奶', year: '2018', sales: 80.2 },
    { product: '咖啡', year: '2016', sales: 35.2 },
    { product: '咖啡', year: '2017', sales: 79.6 },
    { product: '咖啡', year: '2018', sales: 61.2 },
    { product: '椰汁', year: '2016', sales: 55.2 },
    { product: '椰汁', year: '2017', sales: 69.6 },
    { product: '椰汁', year: '2018', sales: 21.2 }
  ]

  const dataFields = {
    row: 'year',
    value: 'sales',
    text: 'product'
  }
  const size = ['100%', '100%']
  const forceFit = true
  const lineStyle = {
    point: { pointType: 'star', size: 8, strokeColor: '#fff' },
    'point:hover': function(attrs, data, i, j) {
      //设置symbol样式
      if (data.sales > 60) {
        return { scale: 1.4 }
      } else if (data.sales > 30) {
        return { fillColor: '#0ff' }
      } else {
        return { fillColor: '#0f0' }
      }
    },
    guideline: { fillColor: '#ff0' },
    line: function(attrs, data, i) {
      if (i === 1) {
        return { color: '#00fafc' }
      }
    },
    'line:hover': { color: '#fa3300' }
  }
  const axisStyle = { axis: false, scale: false }

  return (
    <QChart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>
      <QLine smooth={true} style={lineStyle} />
      <QLegend align={['center', 'bottom']} />
      <QAxis />
      <QAxis orient={'left'} style={axisStyle} />
      <QTooltip
        title={'标题'}
        formatter={data => `${data.product} ${data.year} ${data.sales}`}
      />
    </QChart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::

#### 数据更新

:::demo

```javascript
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {
QChart,QArea,QLine,QPie,QBar,QRadar,QScatter,QGauge,QFunnel,QAxis,QLegend,QTooltip
} from 'qcharts-react'

const data = [
  { product: '茶叶', year: '2016', sales: 81.2 },
  { product: '茶叶', year: '2017', sales: 121.2 },
  { product: '茶叶', year: '2018', sales: 41.2 },
  { product: '牛奶', year: '2016', sales: 89.2 },
  { product: '牛奶', year: '2017', sales: 50.6 },
  { product: '牛奶', year: '2018', sales: 80.2 },
  { product: '咖啡', year: '2016', sales: 35.2 },
  { product: '咖啡', year: '2017', sales: 79.6 },
  { product: '咖啡', year: '2018', sales: 61.2 },
  { product: '椰汁', year: '2016', sales: 55.2 },
  { product: '椰汁', year: '2017', sales: 69.6 },
  { product: '椰汁', year: '2018', sales: 21.2 }
]

const newData = [
  { product: '茶叶', year: '2016', sales: 181.2 },
  { product: '茶叶', year: '2017', sales: 51.2 },
  { product: '茶叶', year: '2018', sales: 31.2 },
  { product: '牛奶', year: '2016', sales: 59.2 },
  { product: '牛奶', year: '2017', sales: 179.6 },
  { product: '牛奶', year: '2018', sales: 130.2 },
  { product: '咖啡', year: '2016', sales: 135.2 },
  { product: '咖啡', year: '2017', sales: 69.6 },
  { product: '咖啡', year: '2018', sales: 91.2 },
  { product: '椰汁', year: '2016', sales: 85.2 },
  { product: '椰汁', year: '2017', sales: 59.6 },
  { product: '椰汁', year: '2018', sales: 31.2 }
]

function App() {
  const [currentData, setData] = useState(data)
  const dataFields = {
    row: 'year',
    value: 'sales',
    text: 'product'
  }
  const size = ['100%', '100%']
  const forceFit = true
  const lineStyle = { point: { strokeColor: '#fff' } }
  const axisStyle = { axis: false, scale: false }

  setTimeout(() => {
    setData(newData)
  }, 4000)

  return (
    <QChart
      data={currentData}
      dataFields={dataFields}
      size={size}
      forceFit={forceFit}
    >
      <QLine smooth={true} style={lineStyle} />
      <QLegend align={['center', 'bottom']} />
      <QAxis />
      <QAxis orient={'left'} style={axisStyle} />
      <QTooltip
        title={'标题'}
        formatter={data => `${data.date} ${data.sales}`}
      />
    </QChart>>>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::

#### 多图融合

:::demo

```javascript
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {
QChart,QArea,QLine,QPie,QBar,QRadar,QScatter,QGauge,QFunnel,QAxis,QLegend,QTooltip
} from 'qcharts-react'

function App() {
  const data = [
    { product: '茶叶', year: '2016', sales: 81.2 },
    { product: '茶叶', year: '2017', sales: 121.2 },
    { product: '茶叶', year: '2018', sales: 41.2 },
    { product: '牛奶', year: '2016', sales: 89.2 },
    { product: '牛奶', year: '2017', sales: 50.6 },
    { product: '牛奶', year: '2018', sales: 80.2 },
    { product: '咖啡', year: '2016', sales: 35.2 },
    { product: '咖啡', year: '2017', sales: 79.6 },
    { product: '咖啡', year: '2018', sales: 61.2 },
    { product: '椰汁', year: '2016', sales: 55.2 },
    { product: '椰汁', year: '2017', sales: 69.6 },
    { product: '椰汁', year: '2018', sales: 21.2 }
  ]
  const dataFields = {
    row: 'year',
    value: 'sales',
    text: 'product'
  }
  const size = ['100%', '100%']
  const forceFit = true
  const lineStyle = {
    point: { strokeColor: '#fff' },
    'symbol:hover': { fillColor: '#f00' }
  }
  const axisStyle = { axis: false, scale: false }

  return (
    <QChart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>
      <Bar />
      <QLine axisGap={true} style={lineStyle} />
      <QLegend align={['center', 'bottom']} />
      <QAxis />
      <QAxis orient={'left'} style={axisStyle} />
      <QTooltip
        title={'标题'}
        formatter={data => `${data.product} ${data.year} ${data.sales}`}
      />
    </QChart>>>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
