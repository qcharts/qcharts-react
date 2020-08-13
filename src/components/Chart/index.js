import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import qcharts from '@qcharts/core'

export class Chart extends PureComponent {
  static propTypes = {
    data: PropTypes.array,
    dataFields: PropTypes.object
  }

  static childContextTypes = {
    addChild: PropTypes.func
  }

  static defaultProps = {
    size: ['100%', '100%'],
    pos: [0, 0]
  }

  constructor(props) {
    super(props)
    this.name = 'chart'
    this.children = []
  }

  getChildContext() {
    return {
      addChild: this.addChild
    }
  }

  addChild = ({ instance, props }) => {
    this.children.push({ instance, props })
  }

  getData = () => {
    const { data } = this.props
    return data
  }

  getDataFields = () => {
    const { dataFields } = this.props
    return dataFields
  }

  componentWillReceiveProps(nextProps) {
    const { data = [], dataFields = {} } = nextProps
    this.chart.attr(nextProps)

    if (data) {
      this.chart.source(data, dataFields)
    }
  }

  componentDidMount() {
    const data = this.getData()
    const dataFields = this.getDataFields()
    const { theme } = this.props
    console.log(theme)
    const chart = (this.chart = new qcharts.Chart({
      container: this.domElementWrap,
      ...this.props
    }))
    if (data && data.length) {
      chart.source(data, dataFields)
    }
    if (theme) {
      qcharts.theme.set(theme)
    }
    this.children.forEach(({ instance, props }) => {
      if (props.rows || props.cols) {
        let source = props.rows
          ? chart.dataset.selectRows(props.rows)
          : chart.dataset.selectCols(props.cols)
        instance.source(source)
      }
      chart.append(instance)
    })
  }

  getContainer = ref => {
    if (!this.domElementWrap) {
      this.domElementWrap = ref
    }
  }

  render() {
    return (
      <div ref={this.getContainer} style={{ width: '100%', height: '100%' }}>
        {this.props.children}
      </div>
    )
  }
}
