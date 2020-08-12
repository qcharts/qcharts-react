;(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    92: function(s, a, t) {
      'use strict'
      t.r(a)
      var n = { components: {} },
        r = t(0),
        e = Object(r.a)(
          n,
          function() {
            var s = this,
              a = s.$createElement,
              t = s._self._c || a
            return t(
              'section',
              [
                t('h2', [s._v('Stack Column Chart 堆叠柱状图')]),
                s._v(' '),
                t(
                  'block-demo',
                  {
                    attrs: {
                      tip: '',
                      source:
                        "import React from 'react'\nimport ReactDOM from 'react-dom'\nimport {\n  Chart,\n  Area,\n  Line,\n  Pie,\n  Bar,\n  Radar,\n  Scatter,\n  Gauge,\n  Funnel,\n  Axis,\n  Legend,\n  Tooltip\n} from 'cat-charts-react'\n\nfunction App() {\n  const data = [\n    {\n      data: '05-01',\n      type: '图例一',\n      value: 11\n    },\n    {\n      data: '05-01',\n      type: '图例二',\n      value: 12.2\n    },\n    {\n      data: '05-02',\n      type: '图例一',\n      value: 28\n    },\n    {\n      data: '05-02',\n      type: '图例二',\n      value: 31\n    },\n    {\n      data: '05-03',\n      type: '图例一',\n      value: 36\n    },\n    {\n      data: '05-03',\n      type: '图例二',\n      value: 18\n    },\n    {\n      data: '05-04',\n      type: '图例一',\n      value: 58\n    },\n    {\n      data: '05-04',\n      type: '图例二',\n      value: 30.2\n    },\n    {\n      data: '05-05',\n      type: '图例一',\n      value: 86.2\n    },\n    {\n      data: '05-05',\n      type: '图例二',\n      value: 41.2\n    },\n    {\n      data: '05-06',\n      type: '图例一',\n      value: 71.2\n    },\n    {\n      data: '05-06',\n      type: '图例二',\n      value: 45.2\n    },\n    {\n      data: '05-07',\n      type: '图例一',\n      value: 41.2\n    },\n    {\n      data: '05-07',\n      type: '图例二',\n      value: 22.2\n    },\n    {\n      data: '05-08',\n      type: '图例一',\n      value: 16.2\n    },\n    {\n      data: '05-08',\n      type: '图例二',\n      value: 20.2\n    }\n  ]\n  const dataFields = {\n    row: 'type',\n    value: 'value',\n    text: 'data'\n  }\n  const size = ['100%', '100%']\n  const forceFit = true\n  const axisStyle = { axis: false, scale: false }\n\n  return (\n    <QChart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>\n      <Bar stack={true} />\n      <Legend align={['center', 'bottom']} />\n      <Axis />\n      <Axis orient={'left'} style={axisStyle} />\n      <Tooltip formatter={d => `${d.type}: ${d.value}`} />\n    </QChart>\n  )\n}\n\nReactDOM.render(<App />, document.querySelector('#app'))\n"
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
                          s._v(' data = [\n    {\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('data')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'05-01'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('type')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'图例一'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('value')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('11')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('data')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'05-01'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('type')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'图例二'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('value')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('12.2')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('data')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'05-02'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('type')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'图例一'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('value')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('28')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('data')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'05-02'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('type')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'图例二'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('value')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('31')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('data')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'05-03'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('type')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'图例一'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('value')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('36')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('data')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'05-03'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('type')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'图例二'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('value')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('18')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('data')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'05-04'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('type')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'图例一'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('value')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('58')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('data')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'05-04'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('type')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'图例二'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('value')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('30.2')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('data')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'05-05'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('type')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'图例一'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('value')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('86.2')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('data')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'05-05'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('type')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'图例二'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('value')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('41.2')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('data')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'05-06'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('type')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'图例一'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('value')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('71.2')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('data')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'05-06'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('type')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'图例二'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('value')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('45.2')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('data')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'05-07'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('type')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'图例一'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('value')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('41.2')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('data')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'05-07'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('type')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'图例二'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('value')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('22.2')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('data')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'05-08'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('type')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'图例一'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('value')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('16.2')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('data')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'05-08'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('type')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'图例二'")]
                          ),
                          s._v(',\n      '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('value')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('20.2')]
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
                            [s._v("'data'")]
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
                          s._v('\n  '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('const')]
                          ),
                          s._v(' axisStyle = { '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('axis')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-literal' } },
                            [s._v('false')]
                          ),
                          s._v(', '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('scale')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-literal' } },
                            [s._v('false')]
                          ),
                          s._v(' }\n\n  '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('return')]
                          ),
                          s._v(
                            " (\n    <QChart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>\n      <Bar stack={true} />\n      <Legend align={['center', 'bottom']} />\n      <Axis />\n      <Axis orient={'left'} style={axisStyle} />\n      <Tooltip formatter={d => `${d.type}: ${d.value}`} />\n    </QChart>\n  )\n}\n\nReactDOM.render(<App />, document.querySelector('#app'))\n"
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
      a.default = e.exports
    }
  }
])
