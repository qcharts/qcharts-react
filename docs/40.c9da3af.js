;(window.webpackJsonp = window.webpackJsonp || []).push([
  [40],
  {
    95: function(s, n, a) {
      'use strict'
      a.r(n)
      var t = { components: {} },
        r = a(0),
        e = Object(r.a)(
          t,
          function() {
            var s = this,
              n = s.$createElement,
              a = s._self._c || n
            return a(
              'section',
              [
                a('h2', [s._v('RadialBar Chart 玉玦图')]),
                s._v(' '),
                a(
                  'block-demo',
                  {
                    attrs: {
                      tip: '',
                      source:
                        "import React from 'react'\nimport ReactDOM from 'react-dom'\nimport {\n  Chart,\n  Area,\n  Line,\n  Pie,\n  Bar,\n  Radar,\n  Scatter,\n  Gauge,\n  Funnel,\n  RadialBar,\n  Axis,\n  Legend,\n  Tooltip\n} from 'cat-charts-react'\n\nfunction App() {\n  const data = [\n    {\n      type: '政法干部',\n      count: 6654\n    },\n\n    {\n      type: '平安志愿者',\n      count: 5341\n    },\n\n    {\n      type: '人民调解员',\n      count: 3546\n    },\n\n    {\n      type: '心理咨询师',\n      count: 4321\n    },\n\n    {\n      type: '法律工作者',\n      count: 3923\n    },\n\n    {\n      type: '网格员',\n      count: 5345\n    }\n  ].sort((a, b) => b.count - a.count)\n\n  const dataFields = {\n    row: 'type',\n    value: 'count'\n  }\n  const size = ['100%', '100%']\n  const forceFit = true\n\n  const radialBarStyle = {\n    arc: { lineCap: 'round', anticlockwise: true }\n  }\n\n  const legendStyle = {\n    icon: (attrs, d, i) => ({\n      marginTop: i > 0 ? 10 : 0\n    }),\n    text: (attrs, d, i) => ({\n      marginTop: i > 0 ? 10 : 0\n    })\n  }\n\n  return (\n    <QChart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>\n      <RadialBar\n        min={0}\n        max={10000}\n        radius={0.6}\n        style={radialBarStyle}\n        pos={[0, 0]}\n        size={['80%', '100%']}\n        lineWidth={10}\n      />\n      <Legend\n        orient={'vertical'}\n        align={['right', 'center']}\n        style={legendStyle}\n      />\n    </QChart>\n  )\n}\n\nReactDOM.render(<App />, document.querySelector('#app'))\n"
                    }
                  },
                  [
                    a('pre', { pre: !0 }, [
                      a(
                        'code',
                        {
                          pre: !0,
                          attrs: { 'v-pre': '', class: 'language-javascript' }
                        },
                        [
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('import')]
                          ),
                          s._v(' React '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('from')]
                          ),
                          s._v(' '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'react'")]
                          ),
                          s._v('\n'),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('import')]
                          ),
                          s._v(' ReactDOM '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('from')]
                          ),
                          s._v(' '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'react-dom'")]
                          ),
                          s._v('\n'),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('import')]
                          ),
                          s._v(
                            ' {\n  Chart,\n  Area,\n  Line,\n  Pie,\n  Bar,\n  Radar,\n  Scatter,\n  Gauge,\n  Funnel,\n  RadialBar,\n  Axis,\n  Legend,\n  Tooltip\n} '
                          ),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('from')]
                          ),
                          s._v(' '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'cat-charts-react'")]
                          ),
                          s._v('\n\n'),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-function' } },
                            [
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'hljs-keyword' } },
                                [s._v('function')]
                              ),
                              s._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'hljs-title' } },
                                [s._v('App')]
                              ),
                              s._v('('),
                              a('span', {
                                pre: !0,
                                attrs: { class: 'hljs-params' }
                              }),
                              s._v(') ')
                            ]
                          ),
                          s._v('{\n  '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('const')]
                          ),
                          s._v(' data = [\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('type')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'政法干部'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('count')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('6654')]
                          ),
                          s._v('\n    },\n\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('type')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'平安志愿者'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('count')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('5341')]
                          ),
                          s._v('\n    },\n\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('type')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'人民调解员'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('count')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('3546')]
                          ),
                          s._v('\n    },\n\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('type')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'心理咨询师'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('count')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('4321')]
                          ),
                          s._v('\n    },\n\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('type')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'法律工作者'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('count')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('3923')]
                          ),
                          s._v('\n    },\n\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('type')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'网格员'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('count')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('5345')]
                          ),
                          s._v('\n    }\n  ].sort('),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-function' } },
                            [
                              s._v('('),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'hljs-params' } },
                                [s._v('a, b')]
                              ),
                              s._v(') =>')
                            ]
                          ),
                          s._v(' b.count - a.count)\n\n  '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('const')]
                          ),
                          s._v(' dataFields = {\n    '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('row')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'type'")]
                          ),
                          s._v(',\n    '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('value')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'count'")]
                          ),
                          s._v('\n  }\n  '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('const')]
                          ),
                          s._v(' size = ['),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'100%'")]
                          ),
                          s._v(', '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'100%'")]
                          ),
                          s._v(']\n  '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('const')]
                          ),
                          s._v(' forceFit = '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-literal' } },
                            [s._v('true')]
                          ),
                          s._v('\n\n  '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('const')]
                          ),
                          s._v(' radialBarStyle = {\n    '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('arc')]
                          ),
                          s._v(': { '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('lineCap')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'round'")]
                          ),
                          s._v(', '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('anticlockwise')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-literal' } },
                            [s._v('true')]
                          ),
                          s._v(' }\n  }\n\n  '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('const')]
                          ),
                          s._v(' legendStyle = {\n    '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('icon')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-function' } },
                            [
                              s._v('('),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'hljs-params' } },
                                [s._v('attrs, d, i')]
                              ),
                              s._v(') =>')
                            ]
                          ),
                          s._v(' ({\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('marginTop')]
                          ),
                          s._v(': i > '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('0')]
                          ),
                          s._v(' ? '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('10')]
                          ),
                          s._v(' : '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('0')]
                          ),
                          s._v('\n    }),\n    '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('text')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-function' } },
                            [
                              s._v('('),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'hljs-params' } },
                                [s._v('attrs, d, i')]
                              ),
                              s._v(') =>')
                            ]
                          ),
                          s._v(' ({\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('marginTop')]
                          ),
                          s._v(': i > '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('0')]
                          ),
                          s._v(' ? '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('10')]
                          ),
                          s._v(' : '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('0')]
                          ),
                          s._v('\n    })\n  }\n\n  '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('return')]
                          ),
                          s._v(
                            " (\n    <QChart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>\n      <RadialBar\n        min={0}\n        max={10000}\n        radius={0.6}\n        style={radialBarStyle}\n        pos={[0, 0]}\n        size={['80%', '100%']}\n        lineWidth={10}\n      />\n      <Legend\n        orient={'vertical'}\n        align={['right', 'center']}\n        style={legendStyle}\n      />\n    </QChart>\n  )\n}\n\nReactDOM.render(<App />, document.querySelector('#app'))\n"
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
      n.default = e.exports
    }
  }
])
