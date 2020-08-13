## 样式调整

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
    { value: 3350, label: '直接访问' },
    { value: 1548, label: '搜索引擎' },
    { value: 2340, label: '联盟广告' },
    { value: 1350, label: '视频广告' },
    { value: 3100, label: '邮件营销' }
  ]
  const dataFields = {
    row: '*',
    value: 'value',
    text: 'label'
  }
  const columnStyle = {}
  const axisStyle = { axis: false, scale: false }
  const bottomAxisStyle = { grid: false }
  return (
    <QChart data={data} dataFields={dataFields}>
      <QBar style={columnStyle} />
      <QAxis style={bottomAxisStyle} />
      <QAxis orient={'left'} style={axisStyle} />
      <QTooltip formatter={d => `${d.label}: ${d.value}`} />
    </QChart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::

## 负值柱状图

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
      product: '茶叶',
      year: '2016',
      sales: -81.2
    },
    {
      product: '茶叶',
      year: '2017',
      sales: 121.2
    },
    {
      product: '茶叶',
      year: '2018',
      sales: -41.2
    },
    {
      product: '牛奶',
      year: '2016',
      sales: 85.2
    },
    {
      product: '牛奶',
      year: '2017',
      sales: 79.6
    },
    {
      product: '牛奶',
      year: '2018',
      sales: 81.2
    },
    {
      product: '咖啡',
      year: '2016',
      sales: -65.2
    },
    {
      product: '咖啡',
      year: '2017',
      sales: -59.6
    },
    {
      product: '咖啡',
      year: '2018',
      sales: -61.2
    },
    {
      product: '椰汁',
      year: '2016',
      sales: 35.2
    },
    {
      product: '椰汁',
      year: '2017',
      sales: 79.6
    },
    {
      product: '椰汁',
      year: '2018',
      sales: 21.2
    }
  ]
  const dataFields = {
    row: 'year',
    col: 'product',
    value: 'sales',
    text: 'product'
  }
  const size = ['100%', '100%']
  const forceFit = true
  const axisStyle = { axis: false, scale: false }
  const bottomAxisStyle = { grid: false }
  return (
    <QChart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>
      <QBar />
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

## Data Update 数据更新

:::demo

```javascript
import React, { useState } from 'react'
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

const data = [
  {
    product: '茶叶',
    year: '2016',
    sales: 81.2
  },
  {
    product: '茶叶',
    year: '2017',
    sales: 121.2
  },
  {
    product: '茶叶',
    year: '2018',
    sales: 41.2
  },
  {
    product: '牛奶',
    year: '2016',
    sales: 85.2
  },
  {
    product: '牛奶',
    year: '2017',
    sales: 79.6
  },
  {
    product: '牛奶',
    year: '2018',
    sales: 81.2
  },
  {
    product: '咖啡',
    year: '2016',
    sales: 65.2
  },
  {
    product: '咖啡',
    year: '2017',
    sales: 59.6
  },
  {
    product: '咖啡',
    year: '2018',
    sales: 61.2
  },
  {
    product: '椰汁',
    year: '2016',
    sales: 35.2
  },
  {
    product: '椰汁',
    year: '2017',
    sales: 79.6
  },
  {
    product: '椰汁',
    year: '2018',
    sales: 21.2
  }
]
const dataNew = [
  {
    product: '茶叶',
    year: '2016',
    sales: 81.2
  },
  {
    product: '茶叶',
    year: '2017',
    sales: 121.2
  },
  {
    product: '茶叶',
    year: '2018',
    sales: 41.2
  },
  {
    product: '茶叶',
    year: '2019',
    sales: 61.2
  },
  {
    product: '牛奶',
    year: '2016',
    sales: 85.2
  },
  {
    product: '牛奶',
    year: '2017',
    sales: 79.6
  },
  {
    product: '牛奶',
    year: '2018',
    sales: 81.2
  },
  {
    product: '牛奶',
    year: '2019',
    sales: 111.2
  },
  {
    product: '咖啡',
    year: '2016',
    sales: 65.2
  },
  {
    product: '咖啡',
    year: '2017',
    sales: 59.6
  },
  {
    product: '咖啡',
    year: '2018',
    sales: 61.2
  },
  {
    product: '咖啡',
    year: '2019',
    sales: 161.2
  }
]

function App() {
  const [currentData, setData] = useState(data)
  const dataFields = {
    row: 'year',
    col: 'product',
    value: 'sales',
    text: 'product'
  }
  const axisStyle = { axis: false, scale: false }
  const bottomAxisStyle = { grid: false }
  setTimeout(() => {
    setData(dataNew)
  }, 2000)

  return (
    <QChart data={currentData} dataFields={dataFields}>
      <QBar />
      <QLegend align={['center', 'bottom']} />
      <QAxis style={bottomAxisStyle} />
      <QAxis orient={'left'} style={axisStyle} />
      <QTooltip formatter={d => `${d.year}: ${d.product}: ${d.sales}`} />
    </QChart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
