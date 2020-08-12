## RadialBar Chart 玉玦图

:::demo

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import {
  Chart,
  Area,
  Line,
  Pie,
  Bar,
  Radar,
  Scatter,
  Gauge,
  Funnel,
  RadialBar,
  Axis,
  Legend,
  Tooltip
} from 'qcharts-react'

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
  const size = ['100%', '100%']
  const forceFit = true

  const radialBarStyle = {
    arc: { lineCap: 'round', anticlockwise: true }
  }

  const legendStyle = {
    icon: (attrs, d, i) => ({
      marginTop: i > 0 ? 10 : 0
    }),
    text: (attrs, d, i) => ({
      marginTop: i > 0 ? 10 : 0
    })
  }

  return (
    <QChart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>
      <RadialBar
        min={0}
        max={10000}
        radius={0.6}
        style={radialBarStyle}
        pos={[0, 0]}
        size={['80%', '100%']}
        lineWidth={10}
      />
      <QLegend
        orient={'vertical'}
        align={['right', 'center']}
        style={legendStyle}
      />
    </QChart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
