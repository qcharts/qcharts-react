import qcharts from '@qcharts/core'
import { Chart } from './components/Chart'
import { generateComponent } from './components/Base'

const version = require('../package.json').version

const BlackList = ['h', 'version', 'Chart']
console.log(qcharts)
const components = Object.keys(qcharts).filter(t => BlackList.indexOf(t) < 0)

const Components = components.reduce((a, c) => {
  a[c] = generateComponent(c)
  return a
}, Object.create(null))

export const QchartsReact = {
  version,
  qcharts,
  Chart,
  ...Components
}

export default QchartsReact
