## Basic Pie Chart 基本饼图

:::demo

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { QChart, QPie, QAxis, QLegend, QTooltip } from 'qcharts-react'

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
    },
    {
      year: '2011',
      population: 42.5
    },
    {
      year: '2012',
      population: 30.3
    },
    {
      year: '2013',
      population: 56
    },
    {
      year: '2014',
      population: 74
    },
    {
      year: '2015',
      population: 80
    },
    {
      year: '2016',
      population: 74
    },
    {
      year: '2017',
      population: 62
    },
    {
      year: '2018',
      population: 54
    },
    {
      year: '2019',
      population: 27
    },
    {
      year: '2020',
      population: 41
    }
  ]
  const dataFields = {
    row: 'year',
    value: 'population'
  }

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
    <QChart data={data} dataFields={dataFields}>
      <QPie style={pieStyle} radius={0.7} pos={[0, 0]} size={['80%', '100%']} />
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
