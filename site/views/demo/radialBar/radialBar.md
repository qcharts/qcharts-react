## RadialBar Chart 玉玦图

:::demo

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { QChart, QRadialBar, QLegend, QTooltip } from 'qcharts-react'

function App() {
  const data = [
    {
      type: '政法干部',
      count: 6654
    },

    {
      type: '平安志愿者',
      count: 5341
    },

    {
      type: '人民调解员',
      count: 3546
    },

    {
      type: '心理咨询师',
      count: 4321
    },

    {
      type: '法律工作者',
      count: 3923
    },

    {
      type: '网格员',
      count: 5345
    }
  ].sort((a, b) => b.count - a.count)

  const dataFields = {
    row: 'type',
    value: 'count'
  }

  const radialBarStyle = {
    arc: { lineCap: 'round' }
  }

  return (
    <QChart data={data} dataFields={dataFields}>
      <QRadialBar
        min={0}
        max={10000}
        radius={0.6}
        style={radialBarStyle}
        lineWidth={10}
      />
      <QLegend orient={'vertical'} align={['right', 'center']} />
    </QChart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
