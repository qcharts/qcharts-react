(window.webpackJsonpQchartsReact=window.webpackJsonpQchartsReact||[]).push([[10],{95:function(s,a,t){"use strict";t.r(a);var r={components:{}},l=t(0),e=Object(l.a)(r,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("Basic Column Chart 基础柱状图")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { QChart, QBar, QAxis, QLegend, QTooltip } from 'qcharts-react'\n\nfunction App() {\n  const data = [\n    { value: 22, label: '05-01' },\n    { value: 60, label: '05-02' },\n    { value: 56, label: '05-03' },\n    { value: 85, label: '05-04' },\n    { value: 136, label: '05-05' },\n    { value: 108, label: '05-06' },\n    { value: 64, label: '05-07' },\n    { value: 35, label: '05-08' }\n  ]\n  const dataFields = {\n    row: '*',\n    value: 'value',\n    text: 'label'\n  }\n\n  const columnStyle = {\n    pillar: { fillColor: '#47A1FF' }\n  }\n  const axisStyle = { axis: false, scale: false }\n  const legendStyle = { text: { text: '图例一' } }\n  const bottomAxisStyle = { grid: false }\n  return (\n    <QChart data={data} dataFields={dataFields}>\n      <QBar style={columnStyle} />\n      <QLegend align={['center', 'bottom']} style={legendStyle} />\n      <QAxis style={bottomAxisStyle} />\n      <QAxis orient={'left'} style={axisStyle} />\n      <QTooltip formatter={d => `${d.label}: ${d.value}`} />\n    </QChart>\n  )\n}\n\nReactDOM.render(<App />, document.querySelector('#app'))\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" React "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'react'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" ReactDOM "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'react-dom'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { QChart, QBar, QAxis, QLegend, QTooltip } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'qcharts-react'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("App")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n    { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("22")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-01'")]),s._v(" },\n    { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("60")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-02'")]),s._v(" },\n    { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("56")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-03'")]),s._v(" },\n    { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("85")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-04'")]),s._v(" },\n    { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("136")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-05'")]),s._v(" },\n    { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("108")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-06'")]),s._v(" },\n    { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("64")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-07'")]),s._v(" },\n    { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-08'")]),s._v(" }\n  ]\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" dataFields = {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'*'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'label'")]),s._v("\n  }\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" columnStyle = {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pillar")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#47A1FF'")]),s._v(" }\n  }\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" axisStyle = { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("axis")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("scale")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(" }\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" legendStyle = { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(" } }\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" bottomAxisStyle = { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("grid")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(" }\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" (\n    "),t("span",{pre:!0,attrs:{class:"xml"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("QChart")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{data}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dataFields")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{dataFields}")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("QBar")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{columnStyle}")]),s._v(" />")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("QLegend")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{[")]),s._v("'"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("center")]),s._v("', '"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bottom")]),s._v("']} "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{legendStyle}")]),s._v(" />")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("QAxis")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{bottomAxisStyle}")]),s._v(" />")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("QAxis")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{")]),s._v("'"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("left")]),s._v("'} "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{axisStyle}")]),s._v(" />")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("QTooltip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("formatter")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{d")]),s._v(" =>")]),s._v(" `${d.label}: ${d.value}`} />\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("QChart")]),s._v(">")])]),s._v("\n  )\n}\n\nReactDOM.render("),t("span",{pre:!0,attrs:{class:"xml"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("App")]),s._v(" />")])]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".querySelector("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v("))\n")])])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);
//# sourceMappingURL=10.js.map?v=64ff076