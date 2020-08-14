(window.webpackJsonpQchartsReact=window.webpackJsonpQchartsReact||[]).push([[30],{79:function(s,a,t){"use strict";t.r(a);var r={components:{}},n=t(0),e=Object(n.a)(r,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("Basic Line Chart 基础折线图")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { QChart, QGauge, QWave } from 'qcharts-react'\nfunction App() {\n  const shape =\n    'm301.855,200.202c-3.674,-1.385 -7.452,-1.966 -11.146,-1.794c0.659,-2.922 0.844,-5.85 0.58,-8.719c-0.937,-10.407 -7.663,-19.864 -18.063,-23.834c-10.697,-4.043 -22.298,-1.168 -29.902,6.403c3.015,0.026 6.074,0.594 9.035,1.728c13.626,5.151 20.465,20.379 15.32,34.004c-1.905,5.02 -5.177,9.115 -9.22,12.05c-6.951,4.992 -16.19,6.536 -24.777,3.271c-13.625,-5.137 -20.471,-20.371 -15.32,-34.004c0.673,-1.768 1.523,-3.423 2.526,-4.992l-0.014,0c0,0 0,0 0,0.014c4.386,-6.853 8.145,-14.279 11.146,-22.187c23.294,-61.505 -7.689,-130.278 -69.215,-153.579c-61.532,-23.293 -130.279,7.69 -153.579,69.202c-6.371,16.785 -8.679,34.097 -7.426,50.901c0.026,0.554 0.079,1.121 0.132,1.688c4.973,57.107 41.767,109.148 98.945,130.793c58.162,22.008 121.303,6.529 162.839,-34.465c7.103,-6.893 17.826,-9.444 27.679,-5.719c11.858,4.491 18.565,16.6 16.719,28.643c4.438,-3.126 8.033,-7.564 10.117,-13.045c5.52,-14.569 -1.82,-30.852 -16.376,-36.359z'\n\n  let style = {\n    wave: {\n      fillColor: '#1890ff',\n      strokeColor: '#1477d4'\n    },\n    shape: {\n      fillColor: '#d3eaff'\n    },\n    text: {\n      fillColor: '#fff',\n      pos: [130, 130]\n    }\n  }\n  return (\n    <QChart>\n      <QWave\n        {...{\n          clientRect: {\n            left: 0,\n            top: 0\n          },\n          radius: 200,\n          percent: 65,\n          shape: shape,\n          // 格式化文本\n          formatter: per => {\n            return '总占比：' + per + '%'\n          }\n        }}\n        style={style}\n      />\n    </QChart>\n  )\n}\n\nReactDOM.render(<App />, document.querySelector('#app'))\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" React "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'react'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" ReactDOM "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'react-dom'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { QChart, QGauge, QWave } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'qcharts-react'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("App")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" shape =\n    "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'m301.855,200.202c-3.674,-1.385 -7.452,-1.966 -11.146,-1.794c0.659,-2.922 0.844,-5.85 0.58,-8.719c-0.937,-10.407 -7.663,-19.864 -18.063,-23.834c-10.697,-4.043 -22.298,-1.168 -29.902,6.403c3.015,0.026 6.074,0.594 9.035,1.728c13.626,5.151 20.465,20.379 15.32,34.004c-1.905,5.02 -5.177,9.115 -9.22,12.05c-6.951,4.992 -16.19,6.536 -24.777,3.271c-13.625,-5.137 -20.471,-20.371 -15.32,-34.004c0.673,-1.768 1.523,-3.423 2.526,-4.992l-0.014,0c0,0 0,0 0,0.014c4.386,-6.853 8.145,-14.279 11.146,-22.187c23.294,-61.505 -7.689,-130.278 -69.215,-153.579c-61.532,-23.293 -130.279,7.69 -153.579,69.202c-6.371,16.785 -8.679,34.097 -7.426,50.901c0.026,0.554 0.079,1.121 0.132,1.688c4.973,57.107 41.767,109.148 98.945,130.793c58.162,22.008 121.303,6.529 162.839,-34.465c7.103,-6.893 17.826,-9.444 27.679,-5.719c11.858,4.491 18.565,16.6 16.719,28.643c4.438,-3.126 8.033,-7.564 10.117,-13.045c5.52,-14.569 -1.82,-30.852 -16.376,-36.359z'")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" style = {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("wave")]),s._v(": {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#1890ff'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("strokeColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#1477d4'")]),s._v("\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("shape")]),s._v(": {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#d3eaff'")]),s._v("\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#fff'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("130")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("130")]),s._v("]\n    }\n  }\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" (\n    "),t("span",{pre:!0,attrs:{class:"xml"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("QChart")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("QWave")]),s._v("\n        {"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("...")]),s._v("{\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("clientRect:")]),s._v(" {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("left:")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("0")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("top:")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("0")]),s._v("\n          },\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius:")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("200")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("percent:")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("65")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("shape:")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("shape")]),s._v(",\n          // 格式化文本\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("formatter:")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("per")]),s._v(" =>")]),s._v(" {\n            return '总占比：' + per + '%'\n          }\n        }}\n        style={style}\n      />\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("QChart")]),s._v(">")])]),s._v("\n  )\n}\n\nReactDOM.render("),t("span",{pre:!0,attrs:{class:"xml"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("App")]),s._v(" />")])]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".querySelector("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v("))\n")])])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);
//# sourceMappingURL=30.js.map?v=a8a867d