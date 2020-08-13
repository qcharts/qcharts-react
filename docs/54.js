(window.webpackJsonpQchartsReact=window.webpackJsonpQchartsReact||[]).push([[54],{63:function(v,t,_){"use strict";_.r(t);var r={components:{}},e=_(0),d=Object(e.a)(r,(function(){var v=this.$createElement;this._self._c;return this._m(0)}),[function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("section",[_("h2",[v._v("雷达图")]),v._v(" "),_("h3",[v._v("attrs")]),v._v(" "),_("p",[v._v("attrs 包含若干属性，可以初始化图表的时候对图表进行配置")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("属性")]),v._v(" "),_("th",[v._v("说明")]),v._v(" "),_("th",[v._v("类型")]),v._v(" "),_("th",[v._v("默认值")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("pos")]),v._v(" "),_("td",[v._v("组件左上角偏移，可设置百分比或者像素")]),v._v(" "),_("td",[v._v("Array")]),v._v(" "),_("td",[v._v("[0,0]")])]),v._v(" "),_("tr",[_("td",[v._v("size")]),v._v(" "),_("td",[v._v("组件大小，可设置百分比或者像素")]),v._v(" "),_("td",[v._v("Array")]),v._v(" "),_("td",[v._v("['100%','100%']")])]),v._v(" "),_("tr",[_("td",[v._v("padding")]),v._v(" "),_("td",[v._v("图表的 padding")]),v._v(" "),_("td",[v._v("Number，Array")]),v._v(" "),_("td",[v._v("[0,0,0,0]")])]),v._v(" "),_("tr",[_("td",[v._v("gridType")]),v._v(" "),_("td",[v._v("网格的类型，可选值为'polygon'和'circle'")]),v._v(" "),_("td",[v._v("String")]),v._v(" "),_("td",[v._v("polygon")])]),v._v(" "),_("tr",[_("td",[v._v("splitNumber")]),v._v(" "),_("td",[v._v("背景网格的层数")]),v._v(" "),_("td",[v._v("Number")]),v._v(" "),_("td",[v._v("4")])]),v._v(" "),_("tr",[_("td",[v._v("startAngle")]),v._v(" "),_("td",[v._v("坐标轴的起始角度")]),v._v(" "),_("td",[v._v("Number")]),v._v(" "),_("td",[v._v("270")])]),v._v(" "),_("tr",[_("td",[v._v("radius")]),v._v(" "),_("td",[v._v("雷达图的轴长,范围[0,1]")]),v._v(" "),_("td",[v._v("Number")]),v._v(" "),_("td",[v._v("0.6")])]),v._v(" "),_("tr",[_("td",[v._v("labelOffset")]),v._v(" "),_("td",[v._v("雷达图轴标记偏移量")]),v._v(" "),_("td",[v._v("Number")]),v._v(" "),_("td",[v._v("6")])])])]),v._v(" "),_("h3",[v._v("可配置 Style 名称")]),v._v(" "),_("pre",{pre:!0},[_("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[_("span",{pre:!0,attrs:{class:"hljs-keyword"}},[v._v("const")]),v._v(" radar = "),_("span",{pre:!0,attrs:{class:"hljs-keyword"}},[v._v("new")]),v._v(" Radar()\nradar.style("),_("span",{pre:!0,attrs:{class:"hljs-string"}},[v._v("'point'")]),v._v(", { "),_("span",{pre:!0,attrs:{class:"hljs-attr"}},[v._v("size")]),v._v(": "),_("span",{pre:!0,attrs:{class:"hljs-number"}},[v._v("5")]),v._v(" })\n"),_("span",{pre:!0,attrs:{class:"hljs-comment"}},[v._v("// 或者函数模式")]),v._v("\n"),_("span",{pre:!0,attrs:{class:"hljs-comment"}},[v._v("// radar.style('point',(attr,data,i)=>{return {size:5}})")]),v._v("\n")])]),v._v(" "),_("p",[v._v("style 方式支持链式调用，第一个参数为 style 名称，第二个参数为设置的样式 Object，也可以为函数形式，对样式进行详细设置")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("名称")]),v._v(" "),_("th")])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("guideline")]),v._v(" "),_("td",[v._v("指导线样式")])]),v._v(" "),_("tr",[_("td",[v._v("axis")]),v._v(" "),_("td",[v._v("坐标轴的样式")])]),v._v(" "),_("tr",[_("td",[v._v("axis:hover")]),v._v(" "),_("td",[v._v("坐标轴 hover 样式")])]),v._v(" "),_("tr",[_("td",[v._v("grid")]),v._v(" "),_("td",[v._v("雷达图背景网格样式")])]),v._v(" "),_("tr",[_("td",[v._v("grid:hover")]),v._v(" "),_("td",[v._v("雷达图背景网格 hover 样式")])]),v._v(" "),_("tr",[_("td",[v._v("label")]),v._v(" "),_("td",[v._v("类别指示文字的样式(x 轴)")])]),v._v(" "),_("tr",[_("td",[v._v("label:hover")]),v._v(" "),_("td",[v._v("类别指示文字的 hover 样式")])]),v._v(" "),_("tr",[_("td",[v._v("scale")]),v._v(" "),_("td",[v._v("数值指示文字,(y 轴)")])]),v._v(" "),_("tr",[_("td",[v._v("scale:hover")]),v._v(" "),_("td",[v._v("数值指示文字 hover 样式(y 轴)")])]),v._v(" "),_("tr",[_("td",[v._v("section")]),v._v(" "),_("td",[v._v("雷达图数据区样式")])]),v._v(" "),_("tr",[_("td",[v._v("section:hover")]),v._v(" "),_("td",[v._v("雷达图数据区 hover 样式")])])])])])}],!1,null,null,null);t.default=d.exports}}]);
//# sourceMappingURL=54.js.map?v=196ff90