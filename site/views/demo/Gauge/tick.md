## 刻度

可以通过 `tickStep` 和 `tickLength` 分别控制 tick 的生成数和长度。当 `tickLength` 为负值时，将在外圈绘制刻度。

:::demo

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { QChart, QGauge, QTooltip } from 'qcharts-react'

function App() {
  const style = {
    title: { fontSize: 36 }
  }

  return (
    <QChart>
      <QGauge
        {...{
          min: 0,
          max: 100,
          lineWidth: 20,
          tickStep: 10,
          tickLength: -10,
          percent: 80,
          title: d => `${d}`
        }}
        style={style}
      />
    </QChart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::

### 刻度上文字

可以通过 `labelOffset` 设置文字和刻度之间的距离。

:::demo

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { QChart, QGauge } from 'qcharts-react'

function App() {
  const style = {
    title: { fontSize: 36 }
  }
  return (
    <QChart>
      <QGauge
        {...{
          min: 0,
          max: 100,
          tickStep: 10,
          tickLength: 10,
          percent: 40,
          labelOffset: 20,
          title: d => `${d}`
        }}
        style={style}
      />
    </QChart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
