## Donut Chart 环图

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
      year: '2001',
      population: 41.8
    },
    {
      year: '2002',
      population: 38
    },
    {
      year: '2003',
      population: 33.7
    },
    {
      year: '2004',
      population: 30.7
    },
    {
      year: '2005',
      population: 25.8
    },
    {
      year: '2006',
      population: 31.7
    },
    {
      year: '2007',
      population: 33
    },
    {
      year: '2008',
      population: 46
    },
    {
      year: '2009',
      population: 38.3
    },
    {
      year: '2010',
      population: 28
    }
  ]
  const dataFields = {
    row: 'year',
    value: 'population'
  }

  const pieStyle = {
    sector: { lineWidth: 1, strokeColor: '#fff' },
    guideLine: true,
    guideText: { fontSize: '12px' }
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
    <QChart data={data} dataFields={dataFields}>
      <QPie
        style={pieStyle}
        radius={0.7}
        innerRadius={0.4}
        pos={[0, 0]}
        size={['80%', '100%']}
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
