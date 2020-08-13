(window.webpackJsonpQchartsReact=window.webpackJsonpQchartsReact||[]).push([[18],{73:function(s,t,a){"use strict";a.r(t);var n={components:{}},r=a(0),e=Object(r.a)(n,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("ArcPie Chart 弧饼图")]),s._v(" "),a("block-demo",{attrs:{tip:"",source:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { QChart, QPie, QLegend, QTooltip } from 'qcharts-react'\n\nfunction App() {\n  const data = [\n    {\n      type: '污染源',\n      count: 4454\n    },\n\n    {\n      type: '消防场所',\n      count: 1239\n    },\n\n    {\n      type: '安全生产',\n      count: 3758\n    },\n\n    {\n      type: '治安场所',\n      count: 4353\n    }\n  ]\n  const dataFields = {\n    row: 'type',\n    value: 'count'\n  }\n\n  const style = {}\n\n  const legendStyle = {}\n\n  return (\n    <QChart data={data} dataFields={dataFields}>\n      <QPie\n        style={style}\n        innerRadius={0.1}\n        startAngle={180}\n        endAngle={360}\n        radius={0.7}\n      />\n      <QLegend style={legendStyle} />\n    </QChart>\n  )\n}\n\nReactDOM.render(<App />, document.querySelector('#app'))\n"}},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" React "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'react'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" ReactDOM "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'react-dom'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { QChart, QPie, QLegend, QTooltip } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'qcharts-react'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("App")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n    {\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'污染源'")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("count")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4454")]),s._v("\n    },\n\n    {\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'消防场所'")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("count")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1239")]),s._v("\n    },\n\n    {\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'安全生产'")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("count")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3758")]),s._v("\n    },\n\n    {\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'治安场所'")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("count")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4353")]),s._v("\n    }\n  ]\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" dataFields = {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'type'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'count'")]),s._v("\n  }\n\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" style = {}\n\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" legendStyle = {}\n\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" (\n    "),a("span",{pre:!0,attrs:{class:"xml"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("QChart")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{data}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dataFields")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{dataFields}")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("QPie")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{style}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("innerRadius")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{0.1}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("startAngle")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{180}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("endAngle")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{360}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{0.7}")]),s._v("\n      />")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("QLegend")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{legendStyle}")]),s._v(" />")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("QChart")]),s._v(">")])]),s._v("\n  )\n}\n\nReactDOM.render("),a("span",{pre:!0,attrs:{class:"xml"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("App")]),s._v(" />")])]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".querySelector("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v("))\n")])])])],1)}),[],!1,null,null,null);t.default=e.exports}}]);
//# sourceMappingURL=18.js.map?v=59d9414