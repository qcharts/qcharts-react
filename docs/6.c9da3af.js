;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    83: function(s, a, t) {
      'use strict'
      t.r(a)
      var r = { components: {} },
        e = t(0),
        l = Object(e.a)(
          r,
          function() {
            var s = this,
              a = s.$createElement,
              t = s._self._c || a
            return t(
              'section',
              [
                t('h2', [s._v('Basic Bar Chart 基础条形图')]),
                s._v(' '),
                t(
                  'block-demo',
                  {
                    attrs: {
                      tip: '',
                      source:
                        "import React from 'react'\nimport ReactDOM from 'react-dom'\nimport {\n  Chart,\n  Area,\n  Line,\n  Pie,\n  Bar,\n  Radar,\n  Scatter,\n  Gauge,\n  Funnel,\n  Axis,\n  Legend,\n  Tooltip\n} from 'cat-charts-react'\n\nfunction App() {\n  const data = [\n    { value: 6100, label: 'TOP1' },\n    { value: 5200, label: 'TOP2' },\n    { value: 4400, label: 'TOP3' },\n    { value: 3700, label: 'TOP4' },\n    { value: 2800, label: 'TOP5' },\n    { value: 2000, label: 'TOP6' },\n    { value: 1300, label: 'TOP7' },\n    { value: 400, label: 'TOP8' }\n  ]\n  const dataFields = {\n    row: '*',\n    value: 'value',\n    text: 'label'\n  }\n  const size = ['100%', '100%']\n  const forceFit = true\n\n  const barStyle = { pillar: { fillColor: '#47A1FF' } }\n  const xAxisStyle = { grid: true }\n  const yAxisStyle = { grid: false }\n  const legendStyle = {\n    text: { text: '图例一' }\n  }\n\n  return (\n    <QChart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>\n      <Bar transpose={true} barWidth={18} style={barStyle} />\n      <Legend align={['center', 'bottom']} style={legendStyle} />\n      <Axis style={xAxisStyle} />\n      <Axis orient={'left'} style={yAxisStyle} />\n      <Tooltip formatter={d => `${d.label}: ${d.value}`} />\n    </QChart>\n  )\n}\n\nReactDOM.render(<App />, document.querySelector('#app'))\n"
                    }
                  },
                  [
                    t('pre', { pre: !0 }, [
                      t(
                        'code',
                        {
                          pre: !0,
                          attrs: { 'v-pre': '', class: 'language-javascript' }
                        },
                        [
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('import')]
                          ),
                          s._v(' React '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('from')]
                          ),
                          s._v(' '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'react'")]
                          ),
                          s._v('\n'),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('import')]
                          ),
                          s._v(' ReactDOM '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('from')]
                          ),
                          s._v(' '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'react-dom'")]
                          ),
                          s._v('\n'),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('import')]
                          ),
                          s._v(
                            ' {\n  Chart,\n  Area,\n  Line,\n  Pie,\n  Bar,\n  Radar,\n  Scatter,\n  Gauge,\n  Funnel,\n  Axis,\n  Legend,\n  Tooltip\n} '
                          ),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('from')]
                          ),
                          s._v(' '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'cat-charts-react'")]
                          ),
                          s._v('\n\n'),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-function' } },
                            [
                              t(
                                'span',
                                { pre: !0, attrs: { class: 'hljs-keyword' } },
                                [s._v('function')]
                              ),
                              s._v(' '),
                              t(
                                'span',
                                { pre: !0, attrs: { class: 'hljs-title' } },
                                [s._v('App')]
                              ),
                              s._v('('),
                              t('span', {
                                pre: !0,
                                attrs: { class: 'hljs-params' }
                              }),
                              s._v(') ')
                            ]
                          ),
                          s._v('{\n  '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('const')]
                          ),
                          s._v(' data = [\n    { '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('value')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('6100')]
                          ),
                          s._v(', '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('label')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'TOP1'")]
                          ),
                          s._v(' },\n    { '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('value')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('5200')]
                          ),
                          s._v(', '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('label')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'TOP2'")]
                          ),
                          s._v(' },\n    { '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('value')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('4400')]
                          ),
                          s._v(', '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('label')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'TOP3'")]
                          ),
                          s._v(' },\n    { '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('value')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('3700')]
                          ),
                          s._v(', '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('label')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'TOP4'")]
                          ),
                          s._v(' },\n    { '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('value')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('2800')]
                          ),
                          s._v(', '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('label')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'TOP5'")]
                          ),
                          s._v(' },\n    { '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('value')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('2000')]
                          ),
                          s._v(', '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('label')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'TOP6'")]
                          ),
                          s._v(' },\n    { '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('value')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('1300')]
                          ),
                          s._v(', '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('label')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'TOP7'")]
                          ),
                          s._v(' },\n    { '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('value')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('400')]
                          ),
                          s._v(', '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('label')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'TOP8'")]
                          ),
                          s._v(' }\n  ]\n  '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('const')]
                          ),
                          s._v(' dataFields = {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('row')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'*'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('value')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'value'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('text')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'label'")]
                          ),
                          s._v('\n  }\n  '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('const')]
                          ),
                          s._v(' size = ['),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'100%'")]
                          ),
                          s._v(', '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'100%'")]
                          ),
                          s._v(']\n  '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('const')]
                          ),
                          s._v(' forceFit = '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-literal' } },
                            [s._v('true')]
                          ),
                          s._v('\n\n  '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('const')]
                          ),
                          s._v(' barStyle = { '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('pillar')]
                          ),
                          s._v(': { '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('fillColor')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'#47A1FF'")]
                          ),
                          s._v(' } }\n  '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('const')]
                          ),
                          s._v(' xAxisStyle = { '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('grid')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-literal' } },
                            [s._v('true')]
                          ),
                          s._v(' }\n  '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('const')]
                          ),
                          s._v(' yAxisStyle = { '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('grid')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-literal' } },
                            [s._v('false')]
                          ),
                          s._v(' }\n  '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('const')]
                          ),
                          s._v(' legendStyle = {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('text')]
                          ),
                          s._v(': { '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('text')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'图例一'")]
                          ),
                          s._v(' }\n  }\n\n  '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('return')]
                          ),
                          s._v(
                            " (\n    <QChart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>\n      <Bar transpose={true} barWidth={18} style={barStyle} />\n      <Legend align={['center', 'bottom']} style={legendStyle} />\n      <Axis style={xAxisStyle} />\n      <Axis orient={'left'} style={yAxisStyle} />\n      <Tooltip formatter={d => `${d.label}: ${d.value}`} />\n    </QChart>\n  )\n}\n\nReactDOM.render(<App />, document.querySelector('#app'))\n"
                          )
                        ]
                      )
                    ])
                  ]
                )
              ],
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      a.default = l.exports
    }
  }
])
