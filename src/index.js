import qcharts from '@qcharts/core'
import { Chart } from './components/Chart'
import { generateComponent } from './components/Base'

const version = require('../package.json').version

const BlackList = ['h', 'version', 'Chart', 'theme', 'easing']

const components = Object.keys(qcharts || {}).filter(
  t => BlackList.indexOf(t) < 0
)
const Components = components.reduce((a, c) => {
  a['Q' + c] = generateComponent(c)
  return a
}, Object.create(null))

const QchartsReact = {
  version,
  QChart: Chart,
  ...Components
}

export default QchartsReact
