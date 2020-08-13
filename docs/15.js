(window.webpackJsonpQchartsReact=window.webpackJsonpQchartsReact||[]).push([[15],{95:function(s,a,t){"use strict";t.r(a);var r={components:{}},l=t(0),n=Object(l.a)(r,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("样式调整")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { QChart, QFunnel, QLegend, QTooltip } from 'qcharts-react'\n\nfunction App() {\n  const data = [\n    { value: 3350, label: '直接访问' },\n    { value: 1648, label: '搜索引擎' },\n    { value: 2440, label: '联盟广告' },\n    { value: 1550, label: '视频广告' },\n    { value: 3000, label: '邮件营销' }\n  ]\n  const dataFields = {\n    row: 'label',\n    col: 'value',\n    value: 'value',\n    text: 'label',\n    sort: (a, b) => b.value - a.value\n  }\n\n  const style = {\n    guideLine: true,\n    guideText: true,\n    polygon: { strokeColor: 'transparent' }\n  }\n\n  return (\n    <QChart data={data} dataFields={dataFields}>\n      <QFunnel\n        {...{\n          clientRect: {\n            left: '22%',\n            top: '20%',\n            width: '25%',\n            height: '70%'\n          },\n          align: 'right',\n          pyramid: true\n        }}\n        style={style}\n      />\n      <QFunnel\n        {...{\n          clientRect: {\n            left: '50%',\n            top: '20%',\n            width: '25%',\n            height: '70%'\n          },\n          align: 'left',\n          pyramid: true\n        }}\n        style={style}\n      />\n      <QLegend align={['center', 'bottom']} />\n      <QTooltip\n        {...{\n          formatter: d => `${d.label}: ${d.value}`\n        }}\n      />\n    </QChart>\n  )\n}\n\nReactDOM.render(<App />, document.querySelector('#app'))\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" React "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'react'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" ReactDOM "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'react-dom'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { QChart, QFunnel, QLegend, QTooltip } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'qcharts-react'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("App")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n    { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3350")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'直接访问'")]),s._v(" },\n    { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1648")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'搜索引擎'")]),s._v(" },\n    { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2440")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'联盟广告'")]),s._v(" },\n    { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1550")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'视频广告'")]),s._v(" },\n    { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3000")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'邮件营销'")]),s._v(" }\n  ]\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" dataFields = {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'label'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("col")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'label'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sort")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("a, b")]),s._v(") =>")]),s._v(" b.value - a.value\n  }\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" style = {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("guideLine")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("guideText")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("polygon")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("strokeColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'transparent'")]),s._v(" }\n  }\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" (\n    "),t("span",{pre:!0,attrs:{class:"xml"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("QChart")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{data}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dataFields")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{dataFields}")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("QFunnel")]),s._v("\n        {"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("...")]),s._v("{\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("clientRect:")]),s._v(" {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("left:")]),s._v(" '"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("22")]),s._v("%',\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("top:")]),s._v(" '"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("20")]),s._v("%',\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width:")]),s._v(" '"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("25")]),s._v("%',\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height:")]),s._v(" '"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("70")]),s._v("%'\n          },\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align:")]),s._v(" '"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("right")]),s._v("',\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pyramid:")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("true")]),s._v("\n        }}\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{style}")]),s._v("\n      />")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("QFunnel")]),s._v("\n        {"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("...")]),s._v("{\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("clientRect:")]),s._v(" {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("left:")]),s._v(" '"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("50")]),s._v("%',\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("top:")]),s._v(" '"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("20")]),s._v("%',\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width:")]),s._v(" '"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("25")]),s._v("%',\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height:")]),s._v(" '"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("70")]),s._v("%'\n          },\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align:")]),s._v(" '"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("left")]),s._v("',\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pyramid:")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("true")]),s._v("\n        }}\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{style}")]),s._v("\n      />")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("QLegend")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{[")]),s._v("'"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("center")]),s._v("', '"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bottom")]),s._v("']} />")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("QTooltip")]),s._v("\n        {"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("...")]),s._v("{\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("formatter:")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("d")]),s._v(" =>")]),s._v(" `${d.label}: ${d.value}`\n        }}\n      />\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("QChart")]),s._v(">")])]),s._v("\n  )\n}\n\nReactDOM.render("),t("span",{pre:!0,attrs:{class:"xml"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("App")]),s._v(" />")])]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".querySelector("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v("))\n")])])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);
//# sourceMappingURL=15.js.map?v=196ff90