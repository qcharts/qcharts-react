## 双色雷达图

:::demo point

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { QChart, QRadar, QLegend, QTooltip } from 'qcharts-react'

function App() {
  const data = [
    { label: '分类一', category: '类别一', value: 19 },
    { label: '分类二', category: '类别一', value: 74 },
    { label: '分类三', category: '类别一', value: 40 },
    { label: '分类四', category: '类别一', value: 46 },
    { label: '分类五', category: '类别一', value: 30 },
    { label: '分类六', category: '类别一', value: 62 },

    { label: '分类一', category: '类别二', value: 69 },
    { label: '分类二', category: '类别二', value: 14 },
    { label: '分类三', category: '类别二', value: 70 },
    { label: '分类四', category: '类别二', value: 26 },
    { label: '分类五', category: '类别二', value: 50 },
    { label: '分类六', category: '类别二', value: 52 }
  ]

  const dataFields = {
    row: 'category',
    value: 'value',
    text: 'label'
  }

  const radarStyle = {
    point: false
  }

  return (
    <QChart data={data} dataFields={dataFields}>
      <QRadar style={radarStyle} />
      <QLegend align={['center', 'bottom']} />
      <QTooltip />
    </QChart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
