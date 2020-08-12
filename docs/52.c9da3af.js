;(window.webpackJsonp = window.webpackJsonp || []).push([
  [52],
  {
    48: function(s, a, t) {
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
                t('h1', [s._v('cat-charts-react')]),
                s._v(' '),
                s._m(0),
                s._v(' '),
                t('h2', [s._v('安装')]),
                s._v(' '),
                t('h3', [s._v('npm')]),
                s._v(' '),
                s._m(1),
                s._v(' '),
                t('h3', [s._v('CDN')]),
                s._v(' '),
                s._m(2),
                s._v(' '),
                s._m(3),
                s._v(' '),
                t('h2', [s._v('绘制')]),
                s._v(' '),
                t(
                  'block-demo',
                  {
                    attrs: {
                      tip: '',
                      source:
                        "import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { Chart, Bar, Axis } from 'cat-charts-react'\n\nfunction App() {\n  const data = [\n    { value: 6100, label: 'TOP1' },\n    { value: 5200, label: 'TOP2' },\n    { value: 4400, label: 'TOP3' },\n    { value: 3700, label: 'TOP4' },\n    { value: 2800, label: 'TOP5' },\n    { value: 2000, label: 'TOP6' },\n    { value: 1300, label: 'TOP7' },\n    { value: 400, label: 'TOP8' }\n  ]\n  const dataFields = {\n    row: '*',\n    value: 'value',\n    text: 'label'\n  }\n\n  return (\n    <QChart data={data} dataFields={dataFields} forceFit={true}>\n      <Bar />\n      <Axis />\n      <Axis orient={'left'} />\n    </QChart>\n  )\n}\n\nReactDOM.render(<App />, document.querySelector('#app'))\n"
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
                          s._v(' { Chart, Bar, Axis } '),
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
                          s._v('\n  }\n\n  '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('return')]
                          ),
                          s._v(' (\n    '),
                          t('span', { pre: !0, attrs: { class: 'xml' } }, [
                            t(
                              'span',
                              { pre: !0, attrs: { class: 'hljs-tag' } },
                              [
                                s._v('<'),
                                t(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-name' } },
                                  [s._v('Chart')]
                                ),
                                s._v(' '),
                                t(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-attr' } },
                                  [s._v('data')]
                                ),
                                s._v('='),
                                t(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-string' } },
                                  [s._v('{data}')]
                                ),
                                s._v(' '),
                                t(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-attr' } },
                                  [s._v('dataFields')]
                                ),
                                s._v('='),
                                t(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-string' } },
                                  [s._v('{dataFields}')]
                                ),
                                s._v(' '),
                                t(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-attr' } },
                                  [s._v('forceFit')]
                                ),
                                s._v('='),
                                t(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-string' } },
                                  [s._v('{true}')]
                                ),
                                s._v('>')
                              ]
                            ),
                            s._v('\n      '),
                            t(
                              'span',
                              { pre: !0, attrs: { class: 'hljs-tag' } },
                              [
                                s._v('<'),
                                t(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-name' } },
                                  [s._v('Bar')]
                                ),
                                s._v(' />')
                              ]
                            ),
                            s._v('\n      '),
                            t(
                              'span',
                              { pre: !0, attrs: { class: 'hljs-tag' } },
                              [
                                s._v('<'),
                                t(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-name' } },
                                  [s._v('Axis')]
                                ),
                                s._v(' />')
                              ]
                            ),
                            s._v('\n      '),
                            t(
                              'span',
                              { pre: !0, attrs: { class: 'hljs-tag' } },
                              [
                                s._v('<'),
                                t(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-name' } },
                                  [s._v('Axis')]
                                ),
                                s._v(' '),
                                t(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-attr' } },
                                  [s._v('orient')]
                                ),
                                s._v('='),
                                t(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-string' } },
                                  [s._v('{')]
                                ),
                                s._v("'"),
                                t(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-attr' } },
                                  [s._v('left')]
                                ),
                                s._v("'} />")
                              ]
                            ),
                            s._v('\n    '),
                            t(
                              'span',
                              { pre: !0, attrs: { class: 'hljs-tag' } },
                              [
                                s._v('</'),
                                t(
                                  'span',
                                  { pre: !0, attrs: { class: 'hljs-name' } },
                                  [s._v('Chart')]
                                ),
                                s._v('>')
                              ]
                            ),
                            s._v('\n  )\n}\n\nReactDOM.render('),
                            t(
                              'span',
                              { pre: !0, attrs: { class: 'hljs-tag' } },
                              [
                                s._v('<'),
                                t(
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
          [
            function() {
              var s = this.$createElement,
                a = this._self._c || s
              return a('blockquote', [
                a('p', [
                  this._v('基于 '),
                  a(
                    'a',
                    { attrs: { href: 'https://github.com/spritejs/q-charts' } },
                    [this._v('qcharts')]
                  ),
                  this._v(' 封装的 React 图表组件库。使用上基本与 '),
                  a(
                    'a',
                    { attrs: { href: 'https://github.com/spritejs/q-charts' } },
                    [this._v('qcharts')]
                  ),
                  this._v(' 一致。')
                ])
              ])
            },
            function() {
              var s = this.$createElement,
                a = this._self._c || s
              return a('pre', { pre: !0 }, [
                a(
                  'code',
                  { pre: !0, attrs: { 'v-pre': '', class: 'language-shell' } },
                  [this._v('npm i spritejs @qcharts/core cat-charts-react\n')]
                )
              ])
            },
            function() {
              var s = this.$createElement,
                a = this._self._c || s
              return a('p', [
                this._v('在 HTML 文件依次引入 '),
                a('code', { pre: !0 }, [this._v('spritejs')]),
                this._v('、'),
                a('code', { pre: !0 }, [this._v('@qcharts/core')]),
                this._v(' 和 '),
                a('code', { pre: !0 }, [this._v('cat-charts-react')])
              ])
            },
            function() {
              var s = this,
                a = s.$createElement,
                t = s._self._c || a
              return t('pre', { pre: !0 }, [
                t(
                  'code',
                  { pre: !0, attrs: { 'v-pre': '', class: 'language-html' } },
                  [
                    t('span', { pre: !0, attrs: { class: 'hljs-tag' } }, [
                      s._v('<'),
                      t('span', { pre: !0, attrs: { class: 'hljs-name' } }, [
                        s._v('script')
                      ]),
                      s._v(' '),
                      t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                        s._v('src')
                      ]),
                      s._v('='),
                      t('span', { pre: !0, attrs: { class: 'hljs-string' } }, [
                        s._v(
                          '"https://unpkg.com/spritejs/dist/spritejs.min.js"'
                        )
                      ]),
                      s._v('>')
                    ]),
                    t('span', { pre: !0, attrs: { class: 'hljs-tag' } }, [
                      s._v('</'),
                      t('span', { pre: !0, attrs: { class: 'hljs-name' } }, [
                        s._v('script')
                      ]),
                      s._v('>')
                    ]),
                    s._v('\n'),
                    t('span', { pre: !0, attrs: { class: 'hljs-tag' } }, [
                      s._v('<'),
                      t('span', { pre: !0, attrs: { class: 'hljs-name' } }, [
                        s._v('script')
                      ]),
                      s._v(' '),
                      t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                        s._v('src')
                      ]),
                      s._v('='),
                      t('span', { pre: !0, attrs: { class: 'hljs-string' } }, [
                        s._v('"https://unpkg.com/@qcharts/core/lib/index.js"')
                      ]),
                      s._v('>')
                    ]),
                    t('span', { pre: !0, attrs: { class: 'hljs-tag' } }, [
                      s._v('</'),
                      t('span', { pre: !0, attrs: { class: 'hljs-name' } }, [
                        s._v('script')
                      ]),
                      s._v('>')
                    ]),
                    s._v('\n'),
                    t('span', { pre: !0, attrs: { class: 'hljs-tag' } }, [
                      s._v('<'),
                      t('span', { pre: !0, attrs: { class: 'hljs-name' } }, [
                        s._v('script')
                      ]),
                      s._v(' '),
                      t('span', { pre: !0, attrs: { class: 'hljs-attr' } }, [
                        s._v('src')
                      ]),
                      s._v('='),
                      t('span', { pre: !0, attrs: { class: 'hljs-string' } }, [
                        s._v(
                          '"https://unpkg.com/cat-charts-react/lib/index.js"'
                        )
                      ]),
                      s._v('>')
                    ]),
                    t('span', { pre: !0, attrs: { class: 'hljs-tag' } }, [
                      s._v('</'),
                      t('span', { pre: !0, attrs: { class: 'hljs-name' } }, [
                        s._v('script')
                      ]),
                      s._v('>')
                    ]),
                    s._v('\n')
                  ]
                )
              ])
            }
          ],
          !1,
          null,
          null,
          null
        )
      a.default = l.exports
    }
  }
])
