;(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    77: function(s, n, t) {
      'use strict'
      t.r(n)
      var a = { components: {} },
        r = t(0),
        e = Object(r.a)(
          a,
          function() {
            var s = this,
              n = s.$createElement,
              t = s._self._c || n
            return t(
              'section',
              [
                t('h2', [s._v('ArcPie Chart 弧饼图')]),
                s._v(' '),
                t(
                  'block-demo',
                  {
                    attrs: {
                      tip: '',
                      source:
                        "import React from 'react'\nimport ReactDOM from 'react-dom'\nimport {\n  Chart,\n  Area,\n  Line,\n  Pie,\n  ArcPie,\n  Bar,\n  Radar,\n  Scatter,\n  Gauge,\n  Funnel,\n  Axis,\n  Legend,\n  Tooltip\n} from 'cat-charts-react'\n\nfunction App() {\n  const data = [\n    {\n      type: '污染源',\n      count: 4454\n    },\n\n    {\n      type: '消防场所',\n      count: 1239\n    },\n\n    {\n      type: '安全生产',\n      count: 3758\n    },\n\n    {\n      type: '治安场所',\n      count: 4353\n    }\n  ]\n  const dataFields = {\n    row: 'type',\n    value: 'count'\n  }\n  const size = ['100%', '100%']\n  const forceFit = true\n\n  const style = {\n    arc: { lineCap: 'round' }\n  }\n\n  const legendStyle = {\n    icon: (attrs, d, i) => ({\n      marginTop: i > 0 ? 10 : 0\n    }),\n    text: (attrs, d, i) => ({\n      marginTop: i > 0 ? 10 : 0\n    })\n  }\n\n  return (\n    <QChart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>\n      <ArcPie\n        style={style}\n        radius={0.7}\n        pos={[0, 0]}\n        size={['80%', '100%']}\n        lineWidth={20}\n        padAngle={0.3}\n      />\n      <Legend\n        orient={'vertical'}\n        align={['right', 'center']}\n        style={legendStyle}\n      />\n    </QChart>\n  )\n}\n\nReactDOM.render(<App />, document.querySelector('#app'))\n"
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
                            ' {\n  Chart,\n  Area,\n  Line,\n  Pie,\n  ArcPie,\n  Bar,\n  Radar,\n  Scatter,\n  Gauge,\n  Funnel,\n  Axis,\n  Legend,\n  Tooltip\n} '
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
                          s._v(' data = [\n    {\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('type')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'污染源'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('count')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('4454')]
                          ),
                          s._v('\n    },\n\n    {\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('type')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'消防场所'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('count')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('1239')]
                          ),
                          s._v('\n    },\n\n    {\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('type')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'安全生产'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('count')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('3758')]
                          ),
                          s._v('\n    },\n\n    {\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('type')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'治安场所'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('count')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('4353')]
                          ),
                          s._v('\n    }\n  ]\n  '),
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
                            [s._v("'type'")]
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
                            [s._v("'count'")]
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
                          s._v(' style = {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('arc')]
                          ),
                          s._v(': { '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('lineCap')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'round'")]
                          ),
                          s._v(' }\n  }\n\n  '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('const')]
                          ),
                          s._v(' legendStyle = {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('icon')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-function' } },
                            [
                              s._v('('),
                              t(
                                'span',
                                { pre: !0, attrs: { class: 'hljs-params' } },
                                [s._v('attrs, d, i')]
                              ),
                              s._v(') =>')
                            ]
                          ),
                          s._v(' ({\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('marginTop')]
                          ),
                          s._v(': i > '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('0')]
                          ),
                          s._v(' ? '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('10')]
                          ),
                          s._v(' : '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('0')]
                          ),
                          s._v('\n    }),\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('text')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-function' } },
                            [
                              s._v('('),
                              t(
                                'span',
                                { pre: !0, attrs: { class: 'hljs-params' } },
                                [s._v('attrs, d, i')]
                              ),
                              s._v(') =>')
                            ]
                          ),
                          s._v(' ({\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('marginTop')]
                          ),
                          s._v(': i > '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('0')]
                          ),
                          s._v(' ? '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('10')]
                          ),
                          s._v(' : '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('0')]
                          ),
                          s._v('\n    })\n  }\n\n  '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('return')]
                          ),
                          s._v(
                            " (\n    <QChart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>\n      <ArcPie\n        style={style}\n        radius={0.7}\n        pos={[0, 0]}\n        size={['80%', '100%']}\n        lineWidth={20}\n        padAngle={0.3}\n      />\n      <Legend\n        orient={'vertical'}\n        align={['right', 'center']}\n        style={legendStyle}\n      />\n    </QChart>\n  )\n}\n\nReactDOM.render(<App />, document.querySelector('#app'))\n"
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
