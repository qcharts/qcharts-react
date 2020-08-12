## Nightingle Rose Chart 南丁格尔玫瑰图

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
    { value: 335, name: '直接访问' },
    { value: 310, name: '邮件营销' },
    { value: 280, name: '联盟广告' },
    { value: 254, name: '视频广告' },
    { value: 200, name: '搜索引擎' }
  ]
  const dataFields = {
    row: 'name',
    value: 'value'
  }
  const size = ['100%', '100%']
  const forceFit = true

  const pieStyle = {
    sector: { lineWidth: 1, strokeColor: '#fff' },
    guideLine: true,
    guideText: true
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
      <QPie
        rose={true}
        radius={0.8}
        pos={[0, 0]}
        size={['80%', '100%']}
        style={pieStyle}
      />
      <QLegend
        style={legendStyle}
        orient={'vertical'}
        align={['right', 'center']}
      />
    </QChart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::

### 设定角度

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
    { value: 335, name: '直接访问' },
    { value: 310, name: '邮件营销' },
    { value: 280, name: '联盟广告' },
    { value: 254, name: '视频广告' },
    { value: 200, name: '搜索引擎' }
  ]
  const dataFields = {
    row: 'name',
    value: 'value'
  }
  const size = ['100%', '100%']
  const forceFit = true

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
      <QPie
        {...{
          size: [360, 360],
          radius: 1,
          rose: true,
          startAngle: Math.PI * 1,
          endAngle: Math.PI * 1.5
        }}
      />
      <QAxis />
      <QAxis
        {...{
          orient: 'right',
          grid: true,
          coord: 'polar',
          coordPos: ['100%', '100%']
        }}
      />
      <QLegend
        style={legendStyle}
        orient={'vertical'}
        align={['right', 'center']}
      />
    </QChart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
