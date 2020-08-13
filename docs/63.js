(window.webpackJsonpQchartsReact=window.webpackJsonpQchartsReact||[]).push([[63],{118:function(s,t,r){"use strict";r.r(t);var a={components:{}},e=r(0),n=Object(e.a)(a,(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("section",[r("h2",[s._v("Legend")]),s._v(" "),s._m(0),s._v(" "),r("block-demo",{attrs:{tip:"",source:"const data = [2010, 2011, 2012]\nconst { Chart, Legend } = qcharts\n\nconst chart = new Chart({ container: '#app' })\nchart.source(data)\n\nconst l1 = new Legend({ orient: 'vertical', align: ['left', 'top'] })\nconst l2 = new Legend({ orient: 'vertical', align: ['left', 'bottom'] })\nconst l3 = new Legend({ orient: 'vertical', align: ['center', 'center'] })\nconst l4 = new Legend({ orient: 'vertical', align: ['right', 'top'] })\nconst l5 = new Legend({ orient: 'vertical', align: ['right', 'bottom'] })\n\nchart.add([l1, l2, l3, l4, l5])\n\nchart.render()\n"}},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = ["),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2010")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2011")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2012")]),s._v("]\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Legend } = qcharts\n\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({ "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(" })\nchart.source(data)\n\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" l1 = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'left'")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'top'")]),s._v("] })\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" l2 = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'left'")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'bottom'")]),s._v("] })\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" l3 = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v("] })\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" l4 = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'right'")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'top'")]),s._v("] })\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" l5 = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Legend({ "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vertical'")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": ["),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'right'")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'bottom'")]),s._v("] })\n\nchart.add([l1, l2, l3, l4, l5])\n\nchart.render()\n")])])]),r("h3",[s._v("方法")]),s._v(" "),s._m(1)],1)}),[function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("p",[s._v("当实例化 "),r("code",{pre:!0},[s._v("chart")]),s._v(" 后，向 "),r("code",{pre:!0},[s._v("chart")]),s._v(" 添加 "),r("code",{pre:!0},[s._v("Legend")]),s._v(" 插件即可，"),r("code",{pre:!0},[s._v("chart.add(new Legend())")]),s._v("。")])},function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[s._v("名称")]),s._v(" "),r("th",[s._v("说明")]),s._v(" "),r("th",[s._v("参数")])])]),s._v(" "),r("tbody",[r("tr",[r("td",[s._v("position")]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("Legend")]),s._v(" 位置控制")]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("(type: 'left' | 'top', value: String | Number)")])])]),s._v(" "),r("tr",[r("td",[s._v("top")]),s._v(" "),r("td",[s._v("相当于 "),r("code",{pre:!0},[s._v("position('top')")])]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("(val: String | Number)")])])]),s._v(" "),r("tr",[r("td",[s._v("left")]),s._v(" "),r("td",[s._v("相当于 "),r("code",{pre:!0},[s._v("position('left')")])]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("(val: String | Number)")])])]),s._v(" "),r("tr",[r("td",[s._v("vertical")]),s._v(" "),r("td",[s._v("控制 "),r("code",{pre:!0},[s._v("Legend")]),s._v(" 水平布局或垂直布局")]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("(flag: Boolean)")])])])])])}],!1,null,null,null);t.default=n.exports}}]);
//# sourceMappingURL=63.js.map?v=59d9414