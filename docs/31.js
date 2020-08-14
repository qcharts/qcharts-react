(window.webpackJsonpQchartsReact=window.webpackJsonpQchartsReact||[]).push([[31],{82:function(s,a,t){"use strict";t.r(a);var r={components:{}},n=t(0),e=Object(n.a)(r,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("Basic Line Chart 基础折线图")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { QChart, QGauge, QWave } from 'qcharts-react'\nfunction App() {\n  let style = {\n    wave: {\n      fillColor: '#1890ff',\n      strokeColor: '#1477d4'\n    },\n    shape: {\n      fillColor: '#d3eaff'\n    },\n    text: {\n      fillColor: '#fff'\n    }\n  }\n  return (\n    <QChart>\n      <QWave\n        {...{\n          radius: 200,\n          percent: 65,\n          // 格式化文本\n          formatter: per => {\n            return '总占比：' + per + '%'\n          }\n        }}\n        style={style}\n      />\n    </QChart>\n  )\n}\n\nReactDOM.render(<App />, document.querySelector('#app'))\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" React "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'react'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" ReactDOM "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'react-dom'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { QChart, QGauge, QWave } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'qcharts-react'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("App")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" style = {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("wave")]),s._v(": {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#1890ff'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("strokeColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#1477d4'")]),s._v("\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("shape")]),s._v(": {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#d3eaff'")]),s._v("\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#fff'")]),s._v("\n    }\n  }\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" (\n    "),t("span",{pre:!0,attrs:{class:"xml"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("QChart")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("QWave")]),s._v("\n        {"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("...")]),s._v("{\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius:")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("200")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("percent:")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("65")]),s._v(",\n          // 格式化文本\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("formatter:")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("per")]),s._v(" =>")]),s._v(" {\n            return '总占比：' + per + '%'\n          }\n        }}\n        style={style}\n      />\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("QChart")]),s._v(">")])]),s._v("\n  )\n}\n\nReactDOM.render("),t("span",{pre:!0,attrs:{class:"xml"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("App")]),s._v(" />")])]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".querySelector("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v("))\n")])])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);
//# sourceMappingURL=31.js.map?v=4c1dc12