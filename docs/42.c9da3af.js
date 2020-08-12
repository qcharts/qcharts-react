;(window.webpackJsonp = window.webpackJsonp || []).push([
  [42],
  {
    81: function(s, a, t) {
      'use strict'
      t.r(a)
      var n = { components: {} },
        r = t(0),
        p = Object(r.a)(
          n,
          function() {
            var s = this,
              a = s.$createElement,
              t = s._self._c || a
            return t(
              'section',
              [
                t('h2', [s._v('多类别气泡图')]),
                s._v(' '),
                t(
                  'block-demo',
                  {
                    attrs: {
                      tip: '',
                      source:
                        "import React from 'react'\nimport ReactDOM from 'react-dom'\nimport {\n  Chart,\n  Area,\n  Line,\n  Pie,\n  Bar,\n  Radar,\n  Scatter,\n  Gauge,\n  Funnel,\n  Axis,\n  Legend,\n  Tooltip\n} from 'cat-charts-react'\n\nconst data = [\n  {\n    continent: 'Americas',\n    Country: 'Argentina',\n    LifeExpectancy: 75.32,\n    GDP: 12779.37964,\n    Population: 40301927\n  },\n  {\n    continent: 'Americas',\n    Country: 'Brazil',\n    LifeExpectancy: 72.39,\n    GDP: 9065.800825,\n    Population: 190010647\n  },\n  {\n    continent: 'Americas',\n    Country: 'Canada',\n    LifeExpectancy: 80.653,\n    GDP: 36319.23501,\n    Population: 33390141\n  },\n  {\n    continent: 'Americas',\n    Country: 'Chile',\n    LifeExpectancy: 78.553,\n    GDP: 13171.63885,\n    Population: 16284741\n  },\n  {\n    continent: 'Americas',\n    Country: 'Colombia',\n    LifeExpectancy: 72.889,\n    GDP: 7006.580419,\n    Population: 44227550\n  },\n  {\n    continent: 'Americas',\n    Country: 'Costa Rica',\n    LifeExpectancy: 78.782,\n    GDP: 9645.06142,\n    Population: 4133884\n  },\n  {\n    continent: 'Americas',\n    Country: 'Cuba',\n    LifeExpectancy: 78.273,\n    GDP: 8948.102923,\n    Population: 11416987\n  },\n  {\n    continent: 'Americas',\n    Country: 'Dominican Republic',\n    LifeExpectancy: 72.235,\n    GDP: 6025.374752,\n    Population: 9319622\n  },\n  {\n    continent: 'Americas',\n    Country: 'Ecuador',\n    LifeExpectancy: 74.994,\n    GDP: 6873.262326,\n    Population: 13755680\n  },\n  {\n    continent: 'Americas',\n    Country: 'El Salvador',\n    LifeExpectancy: 71.878,\n    GDP: 5728.353514,\n    Population: 6939688\n  },\n  {\n    continent: 'Americas',\n    Country: 'Guatemala',\n    LifeExpectancy: 70.259,\n    GDP: 5186.050003,\n    Population: 12572928\n  },\n  {\n    continent: 'Americas',\n    Country: 'Honduras',\n    LifeExpectancy: 70.198,\n    GDP: 3548.330846,\n    Population: 7483763\n  },\n  {\n    continent: 'Americas',\n    Country: 'Jamaica',\n    LifeExpectancy: 72.567,\n    GDP: 7320.880262,\n    Population: 2780132\n  },\n  {\n    continent: 'Americas',\n    Country: 'Mexico',\n    LifeExpectancy: 76.195,\n    GDP: 11977.57496,\n    Population: 108700891\n  },\n  {\n    continent: 'Americas',\n    Country: 'Nicaragua',\n    LifeExpectancy: 72.899,\n    GDP: 2749.320965,\n    Population: 5675356\n  },\n  {\n    continent: 'Americas',\n    Country: 'Panama',\n    LifeExpectancy: 75.537,\n    GDP: 9809.185636,\n    Population: 3242173\n  },\n  {\n    continent: 'Americas',\n    Country: 'Paraguay',\n    LifeExpectancy: 71.752,\n    GDP: 4172.838464,\n    Population: 6667147\n  },\n  {\n    continent: 'Americas',\n    Country: 'Peru',\n    LifeExpectancy: 71.421,\n    GDP: 7408.905561,\n    Population: 28674757\n  },\n  {\n    continent: 'Americas',\n    Country: 'Puerto Rico',\n    LifeExpectancy: 78.746,\n    GDP: 19328.70901,\n    Population: 3942491\n  },\n  {\n    continent: 'Americas',\n    Country: 'Trinidad and Tobago',\n    LifeExpectancy: 69.819,\n    GDP: 18008.50924,\n    Population: 1056608\n  },\n  {\n    continent: 'Americas',\n    Country: 'United States',\n    LifeExpectancy: 78.242,\n    GDP: 42951.65309,\n    Population: 301139947\n  },\n  {\n    continent: 'Americas',\n    Country: 'Uruguay',\n    LifeExpectancy: 76.384,\n    GDP: 10611.46299,\n    Population: 3447496\n  },\n  {\n    continent: 'Americas',\n    Country: 'Venezuela',\n    LifeExpectancy: 73.747,\n    GDP: 11415.80569,\n    Population: 26084662\n  },\n  {\n    continent: 'Asia',\n    Country: 'China',\n    LifeExpectancy: 72.961,\n    GDP: 4959.114854,\n    Population: 1318683096\n  },\n  {\n    continent: 'Asia',\n    Country: 'Hong Kong, China',\n    LifeExpectancy: 82.208,\n    GDP: 39724.97867,\n    Population: 6980412\n  },\n  {\n    continent: 'Asia',\n    Country: 'Japan',\n    LifeExpectancy: 82.603,\n    GDP: 31656.06806,\n    Population: 127467972\n  },\n  {\n    continent: 'Asia',\n    Country: 'Korea, Dem. Rep.',\n    LifeExpectancy: 67.297,\n    GDP: 1593.06548,\n    Population: 23301725\n  },\n  {\n    continent: 'Asia',\n    Country: 'Korea, Rep.',\n    LifeExpectancy: 78.623,\n    GDP: 23348.13973,\n    Population: 49044790\n  },\n  {\n    continent: 'Europe',\n    Country: 'Albania',\n    LifeExpectancy: 76.423,\n    GDP: 5937.029526,\n    Population: 3600523\n  },\n  {\n    continent: 'Europe',\n    Country: 'Austria',\n    LifeExpectancy: 79.829,\n    GDP: 36126.4927,\n    Population: 8199783\n  },\n  {\n    continent: 'Europe',\n    Country: 'Belgium',\n    LifeExpectancy: 79.441,\n    GDP: 33692.60508,\n    Population: 10392226\n  },\n  {\n    continent: 'Europe',\n    Country: 'Bosnia and Herzegovina',\n    LifeExpectancy: 74.852,\n    GDP: 7446.298803,\n    Population: 4552198\n  },\n  {\n    continent: 'Europe',\n    Country: 'Bulgaria',\n    LifeExpectancy: 73.005,\n    GDP: 10680.79282,\n    Population: 7322858\n  },\n  {\n    continent: 'Europe',\n    Country: 'Croatia',\n    LifeExpectancy: 75.748,\n    GDP: 14619.22272,\n    Population: 4493312\n  },\n  {\n    continent: 'Europe',\n    Country: 'Czech Republic',\n    LifeExpectancy: 76.486,\n    GDP: 22833.30851,\n    Population: 10228744\n  },\n  {\n    continent: 'Europe',\n    Country: 'Denmark',\n    LifeExpectancy: 78.332,\n    GDP: 35278.41874,\n    Population: 5468120\n  },\n  {\n    continent: 'Europe',\n    Country: 'Finland',\n    LifeExpectancy: 79.313,\n    GDP: 33207.0844,\n    Population: 5238460\n  },\n  {\n    continent: 'Europe',\n    Country: 'France',\n    LifeExpectancy: 80.657,\n    GDP: 30470.0167,\n    Population: 61083916\n  },\n  {\n    continent: 'Europe',\n    Country: 'Germany',\n    LifeExpectancy: 79.406,\n    GDP: 32170.37442,\n    Population: 82400996\n  },\n  {\n    continent: 'Europe',\n    Country: 'Greece',\n    LifeExpectancy: 79.483,\n    GDP: 27538.41188,\n    Population: 10706290\n  },\n  {\n    continent: 'Europe',\n    Country: 'Hungary',\n    LifeExpectancy: 73.338,\n    GDP: 18008.94444,\n    Population: 9956108\n  },\n  {\n    continent: 'Europe',\n    Country: 'Iceland',\n    LifeExpectancy: 81.757,\n    GDP: 36180.78919,\n    Population: 301931\n  },\n  {\n    continent: 'Europe',\n    Country: 'Ireland',\n    LifeExpectancy: 78.885,\n    GDP: 40675.99635,\n    Population: 4109086\n  },\n  {\n    continent: 'Europe',\n    Country: 'Italy',\n    LifeExpectancy: 80.546,\n    GDP: 28569.7197,\n    Population: 58147733\n  },\n  {\n    continent: 'Europe',\n    Country: 'Montenegro',\n    LifeExpectancy: 74.543,\n    GDP: 9253.896111,\n    Population: 684736\n  },\n  {\n    continent: 'Europe',\n    Country: 'Netherlands',\n    LifeExpectancy: 79.762,\n    GDP: 36797.93332,\n    Population: 16570613\n  },\n  {\n    continent: 'Europe',\n    Country: 'Norway',\n    LifeExpectancy: 80.196,\n    GDP: 49357.19017,\n    Population: 4627926\n  },\n  {\n    continent: 'Europe',\n    Country: 'Poland',\n    LifeExpectancy: 75.563,\n    GDP: 15389.92468,\n    Population: 38518241\n  },\n  {\n    continent: 'Europe',\n    Country: 'Portugal',\n    LifeExpectancy: 78.098,\n    GDP: 20509.64777,\n    Population: 10642836\n  },\n  {\n    continent: 'Europe',\n    Country: 'Romania',\n    LifeExpectancy: 72.476,\n    GDP: 10808.47561,\n    Population: 22276056\n  },\n  {\n    continent: 'Europe',\n    Country: 'Serbia',\n    LifeExpectancy: 74.002,\n    GDP: 9786.534714,\n    Population: 10150265\n  },\n  {\n    continent: 'Europe',\n    Country: 'Slovak Republic',\n    LifeExpectancy: 74.663,\n    GDP: 18678.31435,\n    Population: 5447502\n  },\n  {\n    continent: 'Europe',\n    Country: 'Slovenia',\n    LifeExpectancy: 77.926,\n    GDP: 25768.25759,\n    Population: 2009245\n  },\n  {\n    continent: 'Europe',\n    Country: 'Spain',\n    LifeExpectancy: 80.941,\n    GDP: 28821.0637,\n    Population: 40448191\n  },\n  {\n    continent: 'Europe',\n    Country: 'Sweden',\n    LifeExpectancy: 80.884,\n    GDP: 33859.74835,\n    Population: 9031088\n  },\n  {\n    continent: 'Europe',\n    Country: 'Switzerland',\n    LifeExpectancy: 81.701,\n    GDP: 37506.41907,\n    Population: 7554661\n  },\n  {\n    continent: 'Europe',\n    Country: 'Turkey',\n    LifeExpectancy: 71.777,\n    GDP: 8458.276384,\n    Population: 71158647\n  },\n  {\n    continent: 'Europe',\n    Country: 'United Kingdom',\n    LifeExpectancy: 79.425,\n    GDP: 33203.26128,\n    Population: 60776238\n  },\n  {\n    continent: 'Oceania',\n    Country: 'Australia',\n    LifeExpectancy: 81.235,\n    GDP: 34435.36744,\n    Population: 20434176\n  },\n  {\n    continent: 'Oceania',\n    Country: 'New Zealand',\n    LifeExpectancy: 80.204,\n    GDP: 25185.00911,\n    Population: 4115771\n  }\n]\n\nfunction App() {\n  const dataFields = {\n    row: 'continent',\n    text: 'GDP',\n    value: 'LifeExpectancy'\n  }\n  const size = ['100%', '100%']\n  const forceFit = true\n  const axisStyle = { axis: false, scale: false }\n\n  return (\n    <QChart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>\n      <Scatter\n        {...{\n          areaField: 'Population',\n          areaRange: [4, 30],\n          layoutWay: {\n            GDP: { min: 1200 }\n          }\n        }}\n      />\n      <Legend align={['center', 'bottom']} />\n      <Axis />\n      <Axis orient={'left'} />\n      <Tooltip\n        {...{\n          title: data => data[0].Country,\n          formatter: data => {\n            return ` 人均寿命：${data.LifeExpectancy} GDP：${data.GDP} `\n          }\n        }}\n      />\n    </QChart>\n  )\n}\n\nReactDOM.render(<App />, document.querySelector('#app'))\n"
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
                            { pre: !0, attrs: { class: 'hljs-keyword' } },
                            [s._v('const')]
                          ),
                          s._v(' data = [\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Americas'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Argentina'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('75.32')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('12779.37964')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('40301927')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Americas'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Brazil'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('72.39')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('9065.800825')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('190010647')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Americas'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Canada'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('80.653')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('36319.23501')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('33390141')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Americas'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Chile'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('78.553')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('13171.63885')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('16284741')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Americas'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Colombia'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('72.889')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('7006.580419')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('44227550')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Americas'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Costa Rica'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('78.782')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('9645.06142')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('4133884')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Americas'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Cuba'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('78.273')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('8948.102923')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('11416987')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Americas'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Dominican Republic'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('72.235')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('6025.374752')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('9319622')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Americas'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Ecuador'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('74.994')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('6873.262326')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('13755680')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Americas'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'El Salvador'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('71.878')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('5728.353514')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('6939688')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Americas'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Guatemala'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('70.259')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('5186.050003')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('12572928')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Americas'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Honduras'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('70.198')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('3548.330846')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('7483763')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Americas'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Jamaica'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('72.567')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('7320.880262')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('2780132')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Americas'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Mexico'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('76.195')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('11977.57496')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('108700891')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Americas'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Nicaragua'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('72.899')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('2749.320965')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('5675356')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Americas'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Panama'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('75.537')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('9809.185636')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('3242173')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Americas'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Paraguay'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('71.752')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('4172.838464')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('6667147')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Americas'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Peru'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('71.421')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('7408.905561')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('28674757')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Americas'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Puerto Rico'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('78.746')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('19328.70901')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('3942491')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Americas'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Trinidad and Tobago'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('69.819')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('18008.50924')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('1056608')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Americas'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'United States'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('78.242')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('42951.65309')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('301139947')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Americas'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Uruguay'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('76.384')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('10611.46299')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('3447496')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Americas'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Venezuela'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('73.747')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('11415.80569')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('26084662')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Asia'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'China'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('72.961')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('4959.114854')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('1318683096')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Asia'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Hong Kong, China'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('82.208')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('39724.97867')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('6980412')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Asia'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Japan'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('82.603')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('31656.06806')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('127467972')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Asia'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Korea, Dem. Rep.'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('67.297')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('1593.06548')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('23301725')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Asia'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Korea, Rep.'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('78.623')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('23348.13973')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('49044790')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Albania'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('76.423')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('5937.029526')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('3600523')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Austria'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('79.829')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('36126.4927')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('8199783')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Belgium'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('79.441')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('33692.60508')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('10392226')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Bosnia and Herzegovina'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('74.852')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('7446.298803')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('4552198')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Bulgaria'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('73.005')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('10680.79282')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('7322858')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Croatia'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('75.748')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('14619.22272')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('4493312')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Czech Republic'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('76.486')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('22833.30851')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('10228744')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Denmark'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('78.332')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('35278.41874')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('5468120')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Finland'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('79.313')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('33207.0844')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('5238460')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'France'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('80.657')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('30470.0167')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('61083916')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Germany'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('79.406')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('32170.37442')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('82400996')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Greece'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('79.483')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('27538.41188')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('10706290')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Hungary'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('73.338')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('18008.94444')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('9956108')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Iceland'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('81.757')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('36180.78919')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('301931')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Ireland'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('78.885')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('40675.99635')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('4109086')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Italy'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('80.546')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('28569.7197')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('58147733')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Montenegro'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('74.543')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('9253.896111')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('684736')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Netherlands'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('79.762')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('36797.93332')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('16570613')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Norway'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('80.196')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('49357.19017')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('4627926')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Poland'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('75.563')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('15389.92468')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('38518241')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Portugal'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('78.098')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('20509.64777')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('10642836')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Romania'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('72.476')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('10808.47561')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('22276056')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Serbia'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('74.002')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('9786.534714')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('10150265')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Slovak Republic'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('74.663')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('18678.31435')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('5447502')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Slovenia'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('77.926')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('25768.25759')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('2009245')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Spain'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('80.941')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('28821.0637')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('40448191')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Sweden'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('80.884')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('33859.74835')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('9031088')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Switzerland'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('81.701')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('37506.41907')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('7554661')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Turkey'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('71.777')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('8458.276384')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('71158647')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Europe'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'United Kingdom'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('79.425')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('33203.26128')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('60776238')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Oceania'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Australia'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('81.235')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('34435.36744')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('20434176')]
                          ),
                          s._v('\n  },\n  {\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('continent')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'Oceania'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Country')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-string' } },
                            [s._v("'New Zealand'")]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('LifeExpectancy')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('80.204')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('GDP')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('25185.00911')]
                          ),
                          s._v(',\n    '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-attr' } },
                            [s._v('Population')]
                          ),
                          s._v(': '),
                          t(
                            'span',
                            { pre: !0, attrs: { class: 'hljs-number' } },
                            [s._v('4115771')]
                          ),
                          s._v('\n  }\n]\n\n'),
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
                            [s._v("'continent'")]
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
                            [s._v("'GDP'")]
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
                            [s._v("'LifeExpectancy'")]
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
                            " (\n    <QChart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>\n      <Scatter\n        {...{\n          areaField: 'Population',\n          areaRange: [4, 30],\n          layoutWay: {\n            GDP: { min: 1200 }\n          }\n        }}\n      />\n      <Legend align={['center', 'bottom']} />\n      <Axis />\n      <Axis orient={'left'} />\n      <Tooltip\n        {...{\n          title: data => data[0].Country,\n          formatter: data => {\n            return ` 人均寿命：${data.LifeExpectancy} GDP：${data.GDP} `\n          }\n        }}\n      />\n    </QChart>\n  )\n}\n\nReactDOM.render(<App />, document.querySelector('#app'))\n"
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
      a.default = p.exports
    }
  }
])
