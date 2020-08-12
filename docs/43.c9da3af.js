;(window.webpackJsonp = window.webpackJsonp || []).push([
  [43],
  {
    84: function(s, t, a) {
      'use strict'
      a.r(t)
      var n = { components: {} },
        r = a(0),
        e = Object(r.a)(
          n,
          function() {
            var s = this,
              t = s.$createElement,
              a = s._self._c || t
            return a(
              'section',
              [
                a('h2', [s._v('基础散点图')]),
                s._v(' '),
                a(
                  'block-demo',
                  {
                    attrs: {
                      tip: '',
                      source:
                        "import React from 'react'\nimport ReactDOM from 'react-dom'\nimport {\n  Chart,\n  Area,\n  Line,\n  Pie,\n  Bar,\n  Radar,\n  Scatter,\n  Gauge,\n  Funnel,\n  Axis,\n  Legend,\n  Tooltip\n} from 'cat-charts-react'\n\nfunction App() {\n  const data = [\n    {\n      gender: 'female',\n      height: 161.2,\n      weight: 51.6\n    },\n    {\n      gender: 'female',\n      height: 167.5,\n      weight: 59\n    },\n    {\n      gender: 'female',\n      height: 159.5,\n      weight: 49.2\n    },\n    {\n      gender: 'female',\n      height: 157,\n      weight: 63\n    },\n    {\n      gender: 'female',\n      height: 155.8,\n      weight: 53.6\n    },\n    {\n      gender: 'female',\n      height: 170,\n      weight: 59\n    },\n    {\n      gender: 'female',\n      height: 159.1,\n      weight: 47.6\n    },\n    {\n      gender: 'female',\n      height: 166,\n      weight: 69.8\n    },\n    {\n      gender: 'female',\n      height: 176.2,\n      weight: 66.8\n    },\n    {\n      gender: 'female',\n      height: 160.2,\n      weight: 75.2\n    },\n    {\n      gender: 'female',\n      height: 172.5,\n      weight: 55.2\n    },\n    {\n      gender: 'female',\n      height: 170.9,\n      weight: 54.2\n    },\n    {\n      gender: 'female',\n      height: 172.9,\n      weight: 62.5\n    },\n    {\n      gender: 'female',\n      height: 153.4,\n      weight: 42\n    },\n    {\n      gender: 'female',\n      height: 160,\n      weight: 50\n    },\n    {\n      gender: 'female',\n      height: 147.2,\n      weight: 49.8\n    },\n    {\n      gender: 'female',\n      height: 168.2,\n      weight: 49.2\n    },\n    {\n      gender: 'female',\n      height: 175,\n      weight: 73.2\n    },\n    {\n      gender: 'female',\n      height: 157,\n      weight: 47.8\n    },\n    {\n      gender: 'female',\n      height: 167.6,\n      weight: 68.8\n    },\n    {\n      gender: 'female',\n      height: 159.5,\n      weight: 50.6\n    },\n    {\n      gender: 'female',\n      height: 175,\n      weight: 82.5\n    },\n    {\n      gender: 'female',\n      height: 166.8,\n      weight: 57.2\n    },\n    {\n      gender: 'male',\n      height: 181.6,\n      weight: 75.5\n    },\n    {\n      gender: 'male',\n      height: 176.5,\n      weight: 73\n    },\n    {\n      gender: 'male',\n      height: 175,\n      weight: 70.2\n    },\n    {\n      gender: 'male',\n      height: 174,\n      weight: 73.4\n    },\n    {\n      gender: 'male',\n      height: 151.6,\n      weight: 65.5\n    },\n    {\n      gender: 'male',\n      height: 167,\n      weight: 53\n    },\n    {\n      gender: 'male',\n      height: 155,\n      weight: 50\n    },\n    {\n      gender: 'male',\n      height: 166,\n      weight: 77\n    },\n    {\n      gender: 'male',\n      height: 180.3,\n      weight: 73.6\n    },\n    {\n      gender: 'male',\n      height: 167.6,\n      weight: 74.1\n    },\n    {\n      gender: 'male',\n      height: 188,\n      weight: 85.9\n    },\n    {\n      gender: 'male',\n      height: 180.3,\n      weight: 73.2\n    },\n    {\n      gender: 'male',\n      height: 167.6,\n      weight: 76.3\n    },\n    {\n      gender: 'male',\n      height: 183,\n      weight: 65.9\n    },\n    {\n      gender: 'male',\n      height: 183,\n      weight: 90.9\n    },\n    {\n      gender: 'male',\n      height: 179.1,\n      weight: 89.1\n    },\n    {\n      gender: 'male',\n      height: 170.2,\n      weight: 62.3\n    },\n    {\n      gender: 'male',\n      height: 177.8,\n      weight: 82.7\n    },\n    {\n      gender: 'male',\n      height: 179.1,\n      weight: 79.1\n    },\n    {\n      gender: 'male',\n      height: 190.5,\n      weight: 98.2\n    },\n    {\n      gender: 'male',\n      height: 177.8,\n      weight: 84.1\n    },\n    {\n      gender: 'male',\n      height: 180.3,\n      weight: 83.2\n    },\n    {\n      gender: 'male',\n      height: 180.3,\n      weight: 83.2\n    }\n  ]\n  const dataFields = {\n    row: 'gender',\n    text: 'height',\n    value: 'weight'\n  }\n  const size = ['100%', '100%']\n  const forceFit = true\n  const axisStyle = { axis: false, scale: false }\n\n  return (\n    <QChart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>\n      <Scatter />\n      <Legend align={['center', 'bottom']} />\n      <Axis />\n      <Axis orient={'left'} />\n      <Tooltip\n        {...{\n          title: data => data[0].gender,\n          formatter: data => {\n            return `身高：${data.height}CM  体重：${data.weight}KG `\n          }\n        }}\n      />\n    </QChart>\n  )\n}\n\nReactDOM.render(<App />, document.querySelector('#app'))\n"
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
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'female'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('161.2')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('51.6')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'female'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('167.5')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('59')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'female'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('159.5')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('49.2')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'female'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('157')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('63')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'female'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('155.8')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('53.6')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'female'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('170')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('59')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'female'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('159.1')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('47.6')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'female'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('166')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('69.8')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'female'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('176.2')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('66.8')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'female'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('160.2')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('75.2')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'female'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('172.5')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('55.2')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'female'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('170.9')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('54.2')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'female'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('172.9')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('62.5')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'female'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('153.4')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('42')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'female'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('160')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('50')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'female'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('147.2')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('49.8')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'female'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('168.2')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('49.2')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'female'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('175')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('73.2')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'female'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('157')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('47.8')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'female'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('167.6')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('68.8')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'female'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('159.5')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('50.6')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'female'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('175')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('82.5')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'female'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('166.8')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('57.2')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'male'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('181.6')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('75.5')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'male'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('176.5')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('73')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'male'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('175')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('70.2')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'male'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('174')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('73.4')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'male'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('151.6')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('65.5')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'male'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('167')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('53')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'male'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('155')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('50')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'male'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('166')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('77')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'male'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('180.3')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('73.6')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'male'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('167.6')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('74.1')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'male'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('188')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('85.9')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'male'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('180.3')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('73.2')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'male'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('167.6')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('76.3')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'male'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('183')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('65.9')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'male'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('183')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('90.9')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'male'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('179.1')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('89.1')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'male'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('170.2')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('62.3')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'male'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('177.8')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('82.7')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'male'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('179.1')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('79.1')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'male'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('190.5')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('98.2')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'male'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('177.8')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('84.1')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'male'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('180.3')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('83.2')]
                          ),
                          s._v('\n    },\n    {\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('gender')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'male'")]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('height')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('180.3')]
                          ),
                          s._v(',\n      '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('weight')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('83.2')]
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
                            [s._v("'gender'")]
                          ),
                          s._v(',\n    '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('text')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'height'")]
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
                            [s._v("'weight'")]
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
                          s._v('\n  '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('const')]
                          ),
                          s._v(' axisStyle = { '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('axis')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-literal' } },
                            [s._v('false')]
                          ),
                          s._v(', '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('scale')]
                          ),
                          s._v(': '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-literal' } },
                            [s._v('false')]
                          ),
                          s._v(' }\n\n  '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('return')]
                          ),
                          s._v(
                            " (\n    <QChart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>\n      <Scatter />\n      <Legend align={['center', 'bottom']} />\n      <Axis />\n      <Axis orient={'left'} />\n      <Tooltip\n        {...{\n          title: data => data[0].gender,\n          formatter: data => {\n            return `身高：${data.height}CM  体重：${data.weight}KG `\n          }\n        }}\n      />\n    </QChart>\n  )\n}\n\nReactDOM.render(<App />, document.querySelector('#app'))\n"
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
      t.default = e.exports
    }
  }
])
