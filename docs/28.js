(window.webpackJsonpQchartsReact=window.webpackJsonpQchartsReact||[]).push([[28],{86:function(s,a,t){"use strict";t.r(a);var r={components:{}},n=t(0),e=Object(n.a)(r,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("自定义")]),s._v(" "),s._m(0),s._v(" "),t("block-demo",{attrs:{tip:"",source:"const data = [\n  {\n    sex: 'male',\n    value: [45, 35, 25]\n  }\n]\n\nconst shape =\n  'M367.855,428.202c-3.674-1.385-7.452-1.966-11.146-1.794c0.659-2.922,0.844-5.85,0.58-8.719 c-0.937-10.407-7.663-19.864-18.063-23.834c-10.697-4.043-22.298-1.168-29.902,6.403c3.015,0.026,6.074,0.594,9.035,1.728 c13.626,5.151,20.465,20.379,15.32,34.004c-1.905,5.02-5.177,9.115-9.22,12.05c-6.951,4.992-16.19,6.536-24.777,3.271 c-13.625-5.137-20.471-20.371-15.32-34.004c0.673-1.768,1.523-3.423,2.526-4.992h-0.014c0,0,0,0,0,0.014 c4.386-6.853,8.145-14.279,11.146-22.187c23.294-61.505-7.689-130.278-69.215-153.579c-61.532-23.293-130.279,7.69-153.579,69.202 c-6.371,16.785-8.679,34.097-7.426,50.901c0.026,0.554,0.079,1.121,0.132,1.688c4.973,57.107,41.767,109.148,98.945,130.793 c58.162,22.008,121.303,6.529,162.839-34.465c7.103-6.893,17.826-9.444,27.679-5.719c11.858,4.491,18.565,16.6,16.719,28.643 c4.438-3.126,8.033-7.564,10.117-13.045C389.751,449.992,382.411,433.709,367.855,428.202z'\n\nconst { Chart, Progress, Tooltip } = qcharts\n\nconst chart = new Chart({ container: '#app' })\n\nchart.source(data, {\n  row: 'sex',\n  text: 'sex',\n  value: 'value'\n})\n\nconst progress = new Progress({\n  min: 0,\n  max: 100,\n  type: 'wave',\n  formatter: d => `当前工作进度：${d.value[0]}%`,\n  lineWidth: 2\n}).style('normal', (attrs, d, i) => {\n  return {\n    shape: shape,\n    wavesColor: ['#3488da', '#2c65c6'],\n    amplitude: 20,\n    shapeColor: '#58b8fe',\n    shapeFillColor: '#e5f7ff'\n  }\n})\n\nchart\n  .add(progress)\n  .add(new Tooltip({ formatter: d => `${d.sex}: ${d.value[0]}%` }))\n\nchart.render()\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sex")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'male'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("45")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("25")]),s._v("]\n  }\n]\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" shape =\n  "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'M367.855,428.202c-3.674-1.385-7.452-1.966-11.146-1.794c0.659-2.922,0.844-5.85,0.58-8.719 c-0.937-10.407-7.663-19.864-18.063-23.834c-10.697-4.043-22.298-1.168-29.902,6.403c3.015,0.026,6.074,0.594,9.035,1.728 c13.626,5.151,20.465,20.379,15.32,34.004c-1.905,5.02-5.177,9.115-9.22,12.05c-6.951,4.992-16.19,6.536-24.777,3.271 c-13.625-5.137-20.471-20.371-15.32-34.004c0.673-1.768,1.523-3.423,2.526-4.992h-0.014c0,0,0,0,0,0.014 c4.386-6.853,8.145-14.279,11.146-22.187c23.294-61.505-7.689-130.278-69.215-153.579c-61.532-23.293-130.279,7.69-153.579,69.202 c-6.371,16.785-8.679,34.097-7.426,50.901c0.026,0.554,0.079,1.121,0.132,1.688c4.973,57.107,41.767,109.148,98.945,130.793 c58.162,22.008,121.303,6.529,162.839-34.465c7.103-6.893,17.826-9.444,27.679-5.719c11.858,4.491,18.565,16.6,16.719,28.643 c4.438-3.126,8.033-7.564,10.117-13.045C389.751,449.992,382.411,433.709,367.855,428.202z'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Progress, Tooltip } = qcharts\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(" })\n\nchart.source(data, {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sex'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sex'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v("\n})\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" progress = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Progress({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("min")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("max")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'wave'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("formatter")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`当前工作进度："),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${d.value["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("]}")]),s._v("%`")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lineWidth")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v("\n}).style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'normal'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("attrs, d, i")]),s._v(") =>")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("shape")]),s._v(": shape,\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("wavesColor")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#3488da'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#2c65c6'")]),s._v("],\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("amplitude")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("shapeColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#58b8fe'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("shapeFillColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#e5f7ff'")]),s._v("\n  }\n})\n\nchart\n  .add(progress)\n  .add("),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Tooltip({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("formatter")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${d.sex}")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${d.value["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("]}")]),s._v("%`")]),s._v(" }))\n\nchart.render()\n")])])]),t("block-demo",{attrs:{tip:"",source:"const data = [\n  {\n    sex: 'male',\n    value: 63\n  },\n\n  {\n    sex: 'female',\n    value: 55\n  }\n]\n\nconst shapes = [\n  'M804.571429 402.285714v237.714286a54.857143 54.857143 0 0 1-109.714286 0V438.857143h-36.571429v521.142857c0 35.437714-28.562286 64-64 64s-64-28.562286-64-64V694.857143h-36.571428v265.142857c0 35.437714-28.562286 64-64 64S365.714286 995.437714 365.714286 960V438.857143H329.142857v201.142857a54.857143 54.857143 0 0 1-109.714286 0V402.285714c0-60.562286 49.152-109.714286 109.714286-109.714285h365.714286c60.562286 0 109.714286 49.152 109.714286 109.714285z m-164.571429-256c0 70.838857-57.161143 128-128 128S384 217.124571 384 146.285714 441.161143 18.285714 512 18.285714s128 57.161143 128 128z',\n\n  'M877.714286 603.428571q0 22.857143-16 38.857143t-38.857143 16q-29.142857 0-45.714286-24.571428L647.428571 438.857143h-25.714285v75.428571l141.142857 234.857143q5.142857 8.571429 5.142857 18.857143 0 14.857143-10.857143 25.714286t-25.714286 10.857143H621.714286v155.428571q0 26.285714-18.857143 45.142857t-45.142857 18.857143H466.285714q-26.285714 0-45.142857-18.857143t-18.857143-45.142857v-155.428571H292.571429q-14.857143 0-25.714286-10.857143t-10.857143-25.714286q0-10.285714 5.142857-18.857143l141.142857-234.857143V438.857143h-25.714285l-129.714286 194.857143q-16.571429 24.571429-45.714286 24.571428-22.857143 0-38.857143-16t-16-38.857143q0-16.571429 9.142857-30.285714l146.285715-219.428571q41.714286-61.142857 100.571428-61.142857h219.428572q58.857143 0 100.571428 61.142857l146.285715 219.428571q9.142857 13.714286 9.142857 30.285714zM640 146.285714q0 53.142857-37.428571 90.571429T512 274.285714t-90.571429-37.428571T384 146.285714t37.428571-90.571428T512 18.285714t90.571429 37.428572T640 146.285714z'\n]\n\nconst { Chart, Progress, Tooltip } = qcharts\n\nconst chart = new Chart({ container: '#app'})\n\nchart.source(data, {\n  row: 'sex',\n  text: 'sex',\n  value: 'value'\n})\n\nconst colors = ['#1296db', '#d4237a']\n\nconst progress = new Progress({\n  min: 0,\n  max: 100,\n  lineWidth: 2,\n  type: 'wave',\n  formatter: d => `${d.value}`\n}).style('normal', (attrs, d, i) => {\n  return {\n    outlineColor: colors[i],\n    wavesColor: colors[i],\n    shape: shapes[i],\n    shapeColor: colors[i],\n    shapeScale: 0.2\n  }\n})\n\nchart.add(progress).add(new Tooltip({ formatter: d => `${d.value}` }))\n\nchart.render()\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sex")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'male'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("63")]),s._v("\n  },\n\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sex")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'female'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("55")]),s._v("\n  }\n]\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" shapes = [\n  "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'M804.571429 402.285714v237.714286a54.857143 54.857143 0 0 1-109.714286 0V438.857143h-36.571429v521.142857c0 35.437714-28.562286 64-64 64s-64-28.562286-64-64V694.857143h-36.571428v265.142857c0 35.437714-28.562286 64-64 64S365.714286 995.437714 365.714286 960V438.857143H329.142857v201.142857a54.857143 54.857143 0 0 1-109.714286 0V402.285714c0-60.562286 49.152-109.714286 109.714286-109.714285h365.714286c60.562286 0 109.714286 49.152 109.714286 109.714285z m-164.571429-256c0 70.838857-57.161143 128-128 128S384 217.124571 384 146.285714 441.161143 18.285714 512 18.285714s128 57.161143 128 128z'")]),s._v(",\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'M877.714286 603.428571q0 22.857143-16 38.857143t-38.857143 16q-29.142857 0-45.714286-24.571428L647.428571 438.857143h-25.714285v75.428571l141.142857 234.857143q5.142857 8.571429 5.142857 18.857143 0 14.857143-10.857143 25.714286t-25.714286 10.857143H621.714286v155.428571q0 26.285714-18.857143 45.142857t-45.142857 18.857143H466.285714q-26.285714 0-45.142857-18.857143t-18.857143-45.142857v-155.428571H292.571429q-14.857143 0-25.714286-10.857143t-10.857143-25.714286q0-10.285714 5.142857-18.857143l141.142857-234.857143V438.857143h-25.714285l-129.714286 194.857143q-16.571429 24.571429-45.714286 24.571428-22.857143 0-38.857143-16t-16-38.857143q0-16.571429 9.142857-30.285714l146.285715-219.428571q41.714286-61.142857 100.571428-61.142857h219.428572q58.857143 0 100.571428 61.142857l146.285715 219.428571q9.142857 13.714286 9.142857 30.285714zM640 146.285714q0 53.142857-37.428571 90.571429T512 274.285714t-90.571429-37.428571T384 146.285714t37.428571-90.571428T512 18.285714t90.571429 37.428572T640 146.285714z'")]),s._v("\n]\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Progress, Tooltip } = qcharts\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v("})\n\nchart.source(data, {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sex'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sex'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v("\n})\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" colors = ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#1296db'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#d4237a'")]),s._v("]\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" progress = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Progress({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("min")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("max")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lineWidth")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'wave'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("formatter")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${d.value}")]),s._v("`")]),s._v("\n}).style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'normal'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("attrs, d, i")]),s._v(") =>")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("outlineColor")]),s._v(": colors[i],\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("wavesColor")]),s._v(": colors[i],\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("shape")]),s._v(": shapes[i],\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("shapeColor")]),s._v(": colors[i],\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("shapeScale")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.2")]),s._v("\n  }\n})\n\nchart.add(progress).add("),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Tooltip({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("formatter")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${d.value}")]),s._v("`")]),s._v(" }))\n\nchart.render()\n")])])])],1)}),[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("通过设置 "),a("code",{pre:!0},[this._v("type")]),this._v(" 为 "),a("code",{pre:!0},[this._v("wave")]),this._v(" 也使用 "),a("code",{pre:!0},[this._v("path")]),this._v("。")])}],!1,null,null,null);a.default=e.exports}}]);
//# sourceMappingURL=28.js.map?v=a8a867d