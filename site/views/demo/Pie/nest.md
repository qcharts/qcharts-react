## Nested Pie Chart 嵌套饼图

:::demo

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { QChart, QPie, QLegend, QTooltip } from 'qcharts-react'

function App() {
  const data = [
    { value: 204, name: '图例一' },
    { value: 451, name: '图例二' },
    { value: 347, name: '图例三' },
    { value: 256, name: '图例四' },

    { value: 2790, name: '图例1' },
    { value: 2548, name: '图例2' },
    { value: 1350, name: '图例3' },
    { value: 3100, name: '图例4' },
    { value: 2340, name: '图例5' },
    { value: 1350, name: '图例6' },
    { value: 2450, name: '图例7' },
    { value: 1550, name: '图例8' },
    { value: 3450, name: '图例9' },
    { value: 2750, name: '图例10' }
  ]

  const dataFields = {
    row: 'name',
    value: 'value'
  }

  const pieStyle = {
    guideText: { bgcolor: 'rgba(255,255,255,0.7)', borderRadius: 2 }
  }
  const pie2Style = {}

  const legendStyle = {}

  const colors1 = ['#5982F6', '#59CB74', '#DA65CC', '#FC6980']
  const colors2 = [
    '#47A1FF',
    '#6CD3FF',
    '#A2E5FF',
    '#4DCCCB',
    '#3FDDC7',
    '#ADDF84',
    '#FBD54A',
    '#FFB952',
    '#F79452',
    '#E37474'
  ]
  const colors = colors1.concat(colors2)
  const theme = { colors }
  const theme1 = { colors: colors1 }
  const theme2 = { colors: colors2 }
  return (
    <QChart data={data} dataFields={dataFields} theme={theme}>
      <QPie
        innerRadius={0.5}
        radius={0.7}
        rows={data.slice(4).map(d => d.name)}
        style={pie2Style}
        theme={theme2}
      />
      <QPie
        rows={data.slice(0, 4).map(d => d.name)}
        radius={0.4}
        style={pieStyle}
        theme={theme1}
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
