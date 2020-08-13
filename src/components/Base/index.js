import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import qcharts from '@qcharts/core'

class BaseComponent extends PureComponent {
  static contextTypes = {
    addChild: PropTypes.func
  }

  constructor(props, name) {
    super(props)
    this.name = name
  }

  applyStyle = instance => {
    const { style, theme } = this.props
    if (theme) {
      instance.theme.set(theme)
    }
    if (!style || typeof style !== 'object') {
      return
    }

    Object.keys(style).forEach(type => {
      instance.style(type, style[type])
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.instance) {
      this.instance.attr(nextProps)
      this.applyStyle(this.instance)
    }
  }

  render() {
    const Component = qcharts[this.name]
    const instance = new Component(this.props || {})
    this.applyStyle(instance)
    this.instance = instance
    this.context.addChild({ instance, props: this.props })
    return null
  }
}

export function generateComponent(name) {
  class ChartComponent extends BaseComponent {
    constructor(props) {
      super(props, name)
    }
  }

  return ChartComponent
}
