# qcharts-react

> 基于 [qcharts](https://github.com/spritejs/q-charts) 封装的 React 图表组件库。使用上基本与 [qcharts](https://github.com/spritejs/q-charts) 一致。

## 安装

### npm

```shell
npm i spritejs @qcharts/core qcharts-react
```

### CDN

在 HTML 文件依次引入 `spritejs`、`@qcharts/core` 和 `qcharts-react`

```html
<script src="https://unpkg.com/spritejs@3/dist/spritejs.min.js"></script>
<script src="https://unpkg.com/@qcharts/core@1/lib/index.js"></script>
<script src="https://unpkg.com/qcharts-react/lib/index.js"></script>
```

## 绘制

:::demo

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { QChart, QBar, QAxis, QTooltip } from 'qcharts-react'

function App() {
  const data = [
    { value: 6100, label: 'TOP1' },
    { value: 5200, label: 'TOP2' },
    { value: 4400, label: 'TOP3' },
    { value: 3700, label: 'TOP4' },
    { value: 2800, label: 'TOP5' },
    { value: 2000, label: 'TOP6' },
    { value: 1300, label: 'TOP7' },
    { value: 400, label: 'TOP8' }
  ]
  const dataFields = {
    row: '*',
    value: 'value',
    text: 'label'
  }
  const axisStyle = { grid: false }
  return (
    <QChart data={data} dataFields={dataFields} forceFit={true}>
      <QBar />
      <QAxis style={axisStyle} />
      <QAxis orient={'left'} />
      <QTooltip />
    </QChart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
