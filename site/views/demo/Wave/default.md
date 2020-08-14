## Basic Line Chart 基础折线图

:::demo

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { QChart, QGauge, QWave } from 'qcharts-react'
function App() {
  let style = {
    wave: {
      fillColor: '#1890ff',
      strokeColor: '#1477d4'
    },
    shape: {
      fillColor: '#d3eaff'
    },
    text: {
      fillColor: '#fff'
    }
  }
  return (
    <QChart>
      <QWave
        {...{
          radius: 200,
          percent: 65,
          // 格式化文本
          formatter: per => {
            return '总占比：' + per + '%'
          }
        }}
        style={style}
      />
    </QChart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
