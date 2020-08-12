;(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    76: function(s, t, a) {
      'use strict'
      a.r(t)
      var r = { components: {} },
        n = a(0),
        e = Object(n.a)(
          r,
          function() {
            var s = this,
              t = s.$createElement,
              a = s._self._c || t
            return a(
              'section',
              [
                a('h2', [s._v('Basic Gauge 仪表盘')]),
                s._v(' '),
                a(
                  'block-demo',
                  {
                    attrs: {
                      tip: '',
                      source:
                        "import React from 'react'\nimport ReactDOM from 'react-dom'\nimport {\n  Chart,\n  Area,\n  Line,\n  Pie,\n  Bar,\n  Radar,\n  Scatter,\n  Gauge,\n  Funnel,\n  Axis,\n  Legend,\n  Tooltip\n} from 'cat-charts-react'\n\nfunction App() {\n  const data = [\n    {\n      text: '信用分',\n      value: 45\n    }\n  ]\n  const dataFields = {\n    row: 'text',\n    value: 'value'\n  }\n  const size = ['100%', '100%']\n  const forceFit = true\n\n  const style = {\n    title: { fontSize: 36 }\n  }\n\n  return (\n    <QChart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>\n      <Gauge\n        {...{\n          min: 0,\n          max: 100,\n          lineWidth: 20,\n          tickStep: 10,\n          title: d => `${d.value}`,\n          subTitle: d => `${d.text}`\n        }}\n        style={style}\n      />\n    </QChart>\n  )\n}\n\nReactDOM.render(<App />, document.querySelector('#app'))\n"
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
                            ' {\n  Chart,\n  Area,\n  Line,\n  Pie,\n  Bar,\n  Radar,\n  Scatter,\n  Gauge,\n  Funnel,\n  Axis,\n  Legend,\n  Tooltip\n} '
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
                            [s._v('text')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'信用分'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('value')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('45')]
                          ),
                          s._v('\n    }\n  ]\n  '),
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
                            [s._v("'text'")]
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
                            [s._v("'value'")]
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
                          s._v(' style = {\n    '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('title')]
                          ),
                          s._v(': { '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('fontSize')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('36')]
                          ),
                          s._v(' }\n  }\n\n  '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('return')]
                          ),
                          s._v(' (\n    '),
                          a('span', { pre: !0, attrs: { class: 'xml' } }, [
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'hljs-tag' } },
                              [
                                s._v('<'),
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-name' } },
                                  [s._v('Chart')]
                                ),
                                s._v(' '),
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-attr' } },
                                  [s._v('data')]
                                ),
                                s._v('='),
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-string' } },
                                  [s._v('{data}')]
                                ),
                                s._v(' '),
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-attr' } },
                                  [s._v('dataFields')]
                                ),
                                s._v('='),
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-string' } },
                                  [s._v('{dataFields}')]
                                ),
                                s._v(' '),
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-attr' } },
                                  [s._v('size')]
                                ),
                                s._v('='),
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-string' } },
                                  [s._v('{size}')]
                                ),
                                s._v(' '),
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-attr' } },
                                  [s._v('forceFit')]
                                ),
                                s._v('='),
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-string' } },
                                  [s._v('{forceFit}')]
                                ),
                                s._v('>')
                              ]
                            ),
                            s._v('\n      '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'hljs-tag' } },
                              [
                                s._v('<'),
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-name' } },
                                  [s._v('Gauge')]
                                ),
                                s._v('\n        {'),
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-attr' } },
                                  [s._v('...')]
                                ),
                                s._v('{\n          '),
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-attr' } },
                                  [s._v('min:')]
                                ),
                                s._v(' '),
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-attr' } },
                                  [s._v('0')]
                                ),
                                s._v(',\n          '),
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-attr' } },
                                  [s._v('max:')]
                                ),
                                s._v(' '),
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-attr' } },
                                  [s._v('100')]
                                ),
                                s._v(',\n          '),
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-attr' } },
                                  [s._v('lineWidth:')]
                                ),
                                s._v(' '),
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-attr' } },
                                  [s._v('20')]
                                ),
                                s._v(',\n          '),
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-attr' } },
                                  [s._v('tickStep:')]
                                ),
                                s._v(' '),
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-attr' } },
                                  [s._v('10')]
                                ),
                                s._v(',\n          '),
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-attr' } },
                                  [s._v('title:')]
                                ),
                                s._v(' '),
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-attr' } },
                                  [s._v('d')]
                                ),
                                s._v(' =>')
                              ]
                            ),
                            s._v(
                              ' `${d.value}`,\n          subTitle: d => `${d.text}`\n        }}\n        style={style}\n      />\n    '
                            ),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'hljs-tag' } },
                              [
                                s._v('</'),
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-name' } },
                                  [s._v('Chart')]
                                ),
                                s._v('>')
                              ]
                            ),
                            s._v('\n  )\n}\n\nReactDOM.render('),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'hljs-tag' } },
                              [
                                s._v('<'),
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-name' } },
                                  [s._v('App')]
                                ),
                                s._v(' />')
                              ]
                            ),
                            s._v(", document.querySelector('#app'))\n")
                          ])
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
      t.default = e.exports
    }
  }
])
