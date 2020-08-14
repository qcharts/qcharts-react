(window.webpackJsonpQchartsReact=window.webpackJsonpQchartsReact||[]).push([[19],{81:function(s,a,t){"use strict";t.r(a);var r={components:{}},n=t(0),p=Object(n.a)(r,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("Donut Chart 环图")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { QChart, QPie, QLegend, QTooltip } from 'qcharts-react'\n\nfunction App() {\n  const data = [\n    {\n      year: '2001',\n      population: 41.8\n    },\n    {\n      year: '2002',\n      population: 38\n    },\n    {\n      year: '2003',\n      population: 33.7\n    },\n    {\n      year: '2004',\n      population: 30.7\n    },\n    {\n      year: '2005',\n      population: 25.8\n    },\n    {\n      year: '2006',\n      population: 31.7\n    },\n    {\n      year: '2007',\n      population: 33\n    },\n    {\n      year: '2008',\n      population: 46\n    },\n    {\n      year: '2009',\n      population: 38.3\n    },\n    {\n      year: '2010',\n      population: 28\n    }\n  ]\n  const dataFields = {\n    row: 'year',\n    value: 'population'\n  }\n\n  const pieStyle = {\n    sector: { lineWidth: 1, strokeColor: '#fff' },\n    guideLine: true,\n    guideText: { fontSize: '12px' }\n  }\n\n  const legendStyle = {\n    icon: (attrs, d, i) => ({\n      marginTop: i > 0 ? 10 : 0\n    }),\n    text: (attrs, d, i) => ({\n      marginTop: i > 0 ? 10 : 0\n    })\n  }\n\n  return (\n    <QChart data={data} dataFields={dataFields}>\n      <QPie\n        style={pieStyle}\n        radius={0.7}\n        innerRadius={0.4}\n        pos={[0, 0]}\n        size={['80%', '100%']}\n      />\n      <QLegend\n        orient={'vertical'}\n        align={['right', 'center']}\n        style={legendStyle}\n      />\n    </QChart>\n  )\n}\n\nReactDOM.render(<App />, document.querySelector('#app'))\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" React "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'react'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" ReactDOM "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'react-dom'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { QChart, QPie, QLegend, QTooltip } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'qcharts-react'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("App")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2001'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("41.8")]),s._v("\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2002'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("38")]),s._v("\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2003'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33.7")]),s._v("\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2004'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30.7")]),s._v("\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2005'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("25.8")]),s._v("\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2006'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31.7")]),s._v("\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2007'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33")]),s._v("\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2008'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("46")]),s._v("\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2009'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("38.3")]),s._v("\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2010'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("28")]),s._v("\n    }\n  ]\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" dataFields = {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'year'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'population'")]),s._v("\n  }\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" pieStyle = {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sector")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lineWidth")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("strokeColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#fff'")]),s._v(" },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("guideLine")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("guideText")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fontSize")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'12px'")]),s._v(" }\n  }\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" legendStyle = {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("attrs, d, i")]),s._v(") =>")]),s._v(" ({\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("marginTop")]),s._v(": i > "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" ? "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(" : "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n    }),\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("attrs, d, i")]),s._v(") =>")]),s._v(" ({\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("marginTop")]),s._v(": i > "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" ? "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(" : "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n    })\n  }\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" (\n    "),t("span",{pre:!0,attrs:{class:"xml"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("QChart")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{data}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dataFields")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{dataFields}")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("QPie")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{pieStyle}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{0.7}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("innerRadius")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{0.4}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{[0,")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("0")]),s._v("]}\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{[")]),s._v("'"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("80")]),s._v("%', '"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("100")]),s._v("%']}\n      />")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("QLegend")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{")]),s._v("'"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("vertical")]),s._v("'}\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{[")]),s._v("'"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("right")]),s._v("', '"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("center")]),s._v("']}\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("{legendStyle}")]),s._v("\n      />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("QChart")]),s._v(">")])]),s._v("\n  )\n}\n\nReactDOM.render("),t("span",{pre:!0,attrs:{class:"xml"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("App")]),s._v(" />")])]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".querySelector("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v("))\n")])])])],1)}),[],!1,null,null,null);a.default=p.exports}}]);
//# sourceMappingURL=19.js.map?v=a8a867d