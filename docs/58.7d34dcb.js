(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{66:function(s,a,t){"use strict";t.r(a);var r={components:{}},n=t(0),l=Object(n.a)(r,function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("基础坐标轴")]),s._v(" "),t("block-demo",{attrs:{tip:"基础坐标",source:"const data = [\n  { month: 'Jan', city: 'London', value: 3.9 },\n  { month: 'Feb', city: 'London', value: 4.2 },\n  { month: 'Mar', city: 'London', value: 5.7 },\n  { month: 'Apr', city: 'London', value: 8.5 },\n  { month: 'May', city: 'London', value: 11.9 },\n  { month: 'Jun', city: 'London', value: 15.2 }\n]\n\nconst { Chart, Axis ,Line } = qcharts\n\nconst chart = new Chart({\n  container: '#app',\n  size: ['100%', '100%']\n}).source(data, {\n  row: 'city',\n  value: 'value',\n  text: 'month'\n})\n\nconst line = new Line()\n\nlet xAxis = new Axis({ })\n.style('label',function(attrs,data,i){\n\tif(i%2 === 0){\n    \treturn false\n    }else{\n      if(data.text.indexOf('A')===0){\n        return {\n          rotate:45,\n          translate:[-5,-5],\n          anchor:[0,0],\n          color:'#00f'\n        }\n      }else{\n        return {color:'#f00'}\n      }\n    }\n})\n.style('scale',function(attrs,data,i){\n\tif(i%2 === 0){\n    \treturn false\n    }\n})\nlet yAxis = new Axis({ orient: 'left' })\n\nchart.add([line,xAxis,yAxis])\nchart.render()\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Jan'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3.9")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Feb'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4.2")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Mar'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5.7")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Apr'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("8.5")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'May'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("11.9")]),s._v(" },\n  { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Jun'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15.2")]),s._v(" }\n]\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Axis ,Line } = qcharts\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v("]\n}).source(data, {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'city'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'month'")]),s._v("\n})\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" line = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Line()\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" xAxis = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Axis({ })\n.style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'label'")]),s._v(","),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("attrs,data,i")]),s._v(")")]),s._v("{\n\t"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v("(i%"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(" === "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("){\n    \t"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n    }"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v("{\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v("(data.text.indexOf("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'A'")]),s._v(")==="),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("){\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rotate")]),s._v(":"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("45")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("translate")]),s._v(":["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-5")]),s._v(","),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-5")]),s._v("],\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("anchor")]),s._v(":["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(","),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("],\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(":"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#00f'")]),s._v("\n        }\n      }"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v("{\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(":"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#f00'")]),s._v("}\n      }\n    }\n})\n.style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'scale'")]),s._v(","),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("attrs,data,i")]),s._v(")")]),s._v("{\n\t"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v("(i%"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(" === "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("){\n    \t"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n    }\n})\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" yAxis = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Axis({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'left'")]),s._v(" })\n\nchart.add([line,xAxis,yAxis])\nchart.render()\n")])])])],1)},[],!1,null,null,null);a.default=l.exports}}]);