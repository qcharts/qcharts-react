;(window.webpackJsonp = window.webpackJsonp || []).push([
  [53],
  {
    49: function(t, _, v) {
      'use strict'
      v.r(_)
      var e = { components: {} },
        r = v(0),
        d = Object(r.a)(
          e,
          function() {
            var t = this,
              _ = t.$createElement,
              v = t._self._c || _
            return v('section', [
              v('h1', [t._v('图表构成')]),
              t._v(' '),
              v('h2', [t._v('组件介绍')]),
              t._v(' '),
              t._m(0),
              t._v(' '),
              t._m(1),
              t._v(' '),
              v('h3', [t._v('容器组件')]),
              t._v(' '),
              v('table', [
                t._m(2),
                t._v(' '),
                v('tbody', [
                  v('tr', [
                    t._m(3),
                    t._v(' '),
                    v('td', [t._v('容器组件')]),
                    t._v(' '),
                    v(
                      'td',
                      [
                        t._v('图表容器组件，所有其他组件必须被 '),
                        v('Chart'),
                        t._v(' 包裹')
                      ],
                      1
                    )
                  ])
                ])
              ]),
              t._v(' '),
              v('h3', [t._v('Visual 组件')]),
              t._v(' '),
              t._m(4),
              t._v(' '),
              v('h3', [t._v('Plugin 组件')]),
              t._v(' '),
              t._m(5)
            ])
          },
          [
            function() {
              var t = this.$createElement,
                _ = this._self._c || t
              return _('p', [
                this._v('在 '),
                _('code', { pre: !0 }, [this._v('cat-charts-react')]),
                this._v(' 中，组件对应 '),
                _('code', { pre: !0 }, [this._v('qcharts')]),
                this._v(' 分为 3 种类型（本质上都属于 组件）：')
              ])
            },
            function() {
              var t = this.$createElement,
                _ = this._self._c || t
              return _('ul', [
                _('li', [this._v('容器 组件：负责管理数据以及其他子组件')]),
                this._v(' '),
                _('li', [
                  _('code', { pre: !0 }, [this._v('Visual')]),
                  this._v(' 组件：负责绘制相应可视类型图形')
                ]),
                this._v(' '),
                _('li', [
                  _('code', { pre: !0 }, [this._v('Plugin')]),
                  this._v(' 组件：辅助图表呈现或交互')
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                _ = this._self._c || t
              return _('thead', [
                _('tr', [
                  _('th', [this._v('名称')]),
                  this._v(' '),
                  _('th', [this._v('类型')]),
                  this._v(' '),
                  _('th', [this._v('描述')])
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                _ = this._self._c || t
              return _('td', [_('code', { pre: !0 }, [this._v('<QChart />')])])
            },
            function() {
              var t = this,
                _ = t.$createElement,
                v = t._self._c || _
              return v('table', [
                v('thead', [
                  v('tr', [
                    v('th', [t._v('名称')]),
                    t._v(' '),
                    v('th', [t._v('类型')]),
                    t._v(' '),
                    v('th', [t._v('描述')])
                  ])
                ]),
                t._v(' '),
                v('tbody', [
                  v('tr', [
                    v('td', [v('code', { pre: !0 }, [t._v('<Line />')])]),
                    t._v(' '),
                    v('td', [t._v('Visual 组件')]),
                    t._v(' '),
                    v('td', [t._v('绘制折线图图形')])
                  ]),
                  t._v(' '),
                  v('tr', [
                    v('td', [v('code', { pre: !0 }, [t._v('<Area />')])]),
                    t._v(' '),
                    v('td', [t._v('Visual 组件')]),
                    t._v(' '),
                    v('td', [t._v('绘制面积图图形')])
                  ]),
                  t._v(' '),
                  v('tr', [
                    v('td', [v('code', { pre: !0 }, [t._v('<Bar />')])]),
                    t._v(' '),
                    v('td', [t._v('Visual 组件')]),
                    t._v(' '),
                    v('td', [t._v('绘制柱状图（或条形图）图形')])
                  ]),
                  t._v(' '),
                  v('tr', [
                    v('td', [v('code', { pre: !0 }, [t._v('<Pie />')])]),
                    t._v(' '),
                    v('td', [t._v('Visual 组件')]),
                    t._v(' '),
                    v('td', [t._v('绘制饼图图形')])
                  ]),
                  t._v(' '),
                  v('tr', [
                    v('td', [v('code', { pre: !0 }, [t._v('<ArcPie />')])]),
                    t._v(' '),
                    v('td', [t._v('Visual 组件')]),
                    t._v(' '),
                    v('td', [t._v('绘制弧饼图图形')])
                  ]),
                  t._v(' '),
                  v('tr', [
                    v('td', [v('code', { pre: !0 }, [t._v('<Radar />')])]),
                    t._v(' '),
                    v('td', [t._v('Visual 组件')]),
                    t._v(' '),
                    v('td', [t._v('绘制雷达图图形')])
                  ]),
                  t._v(' '),
                  v('tr', [
                    v('td', [v('code', { pre: !0 }, [t._v('<Scatter />')])]),
                    t._v(' '),
                    v('td', [t._v('Visual 组件')]),
                    t._v(' '),
                    v('td', [t._v('绘制散点图图图形')])
                  ]),
                  t._v(' '),
                  v('tr', [
                    v('td', [v('code', { pre: !0 }, [t._v('<Funnel />')])]),
                    t._v(' '),
                    v('td', [t._v('Visual 组件')]),
                    t._v(' '),
                    v('td', [t._v('绘制漏斗图图形')])
                  ]),
                  t._v(' '),
                  v('tr', [
                    v('td', [v('code', { pre: !0 }, [t._v('<Gauge />')])]),
                    t._v(' '),
                    v('td', [t._v('Visual 组件')]),
                    t._v(' '),
                    v('td', [t._v('绘制仪表盘图形')])
                  ]),
                  t._v(' '),
                  v('tr', [
                    v('td', [v('code', { pre: !0 }, [t._v('<RadialBar />')])]),
                    t._v(' '),
                    v('td', [t._v('Visual 组件')]),
                    t._v(' '),
                    v('td', [t._v('绘制玉玦图图形')])
                  ])
                ])
              ])
            },
            function() {
              var t = this,
                _ = t.$createElement,
                v = t._self._c || _
              return v('table', [
                v('thead', [
                  v('tr', [
                    v('th', [t._v('名称')]),
                    t._v(' '),
                    v('th', [t._v('类型')]),
                    t._v(' '),
                    v('th', [t._v('描述')])
                  ])
                ]),
                t._v(' '),
                v('tbody', [
                  v('tr', [
                    v('td', [v('code', { pre: !0 }, [t._v('<Legend />')])]),
                    t._v(' '),
                    v('td', [t._v('Plugin 组件')]),
                    t._v(' '),
                    v('td', [t._v('绘制图例')])
                  ]),
                  t._v(' '),
                  v('tr', [
                    v('td', [v('code', { pre: !0 }, [t._v('<Axis />')])]),
                    t._v(' '),
                    v('td', [t._v('Plugin 组件')]),
                    t._v(' '),
                    v('td', [t._v('绘制坐标轴')])
                  ]),
                  t._v(' '),
                  v('tr', [
                    v('td', [v('code', { pre: !0 }, [t._v('<Tooltip />')])]),
                    t._v(' '),
                    v('td', [t._v('Plugin 组件')]),
                    t._v(' '),
                    v('td', [t._v('绘制提示框')])
                  ])
                ])
              ])
            }
          ],
          !1,
          null,
          null,
          null
        )
      _.default = d.exports
    }
  }
])
