(window.webpackJsonpQchartsReact=window.webpackJsonpQchartsReact||[]).push([[41],{123:function(s,a,t){"use strict";t.r(a);var n={components:{}},r=t(0),e=Object(r.a)(n,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("散点")]),s._v(" "),s._m(0),s._v(" "),t("block-demo",{attrs:{tip:"",source:"fetch('http://s5.qhres.com/static/81bf507dbbc7c08d.json')\n  .then(res => res.json())\n  .then(mapData => {\n    const data = [\n      {\n        name: '海南省',\n        value: 29925.73\n      },\n      {\n        name: '河南省',\n        value: 17737.01\n      },\n      {\n        name: '河北省',\n        value: 13177.64\n      },\n      {\n        name: '湖北省',\n        value: 12174.96\n      },\n      {\n        name: '广东省',\n        value: 8230.15\n      },\n      {\n        name: '湖南省',\n        value: 8173.05\n      },\n      {\n        name: '江西省',\n        value: 7423.08\n      },\n      {\n        name: '黑龙省江',\n        value: 6829.69\n      },\n      {\n        name: '四川省',\n        value: 6158.43\n      },\n      {\n        name: '安徽省',\n        value: 5930.8\n      }\n    ]\n\n    const { Chart, Tooltip, Text, Map } = qcharts\n\n    const chart = new Chart({\n      container: '#app'\n    })\n\n    const map = new qcharts.Map({\n      tooltip: false,\n      projection: 'geoMercator'\n    })\n\n    map\n      .setGeomData(mapData, { items: mapData.features })\n      .mapGeomDataToBind((mapData, i) => {\n        const target = data.filter(d => d.name === mapData.properties.name)\n        return (\n          (target && target[0]) || { name: mapData.properties.name, gdp: 0 }\n        )\n      })\n      .style('normal', (attrs, dataOrigin, i) => ({\n        fillColor: data.includes(dataOrigin) ? '#25243f' : '#0f0c29',\n        color: '#3B5077'\n      }))\n\n    map.add(Map.Scatter, {\n      effect(attrs, data, i) {\n        return data.value > 10000\n      },\n\n      style: {\n        normal(attrs, data, i) {\n          return {\n            fillColor: 'yellow',\n            radius: data.value / 5000,\n            color: 'transparent',\n\n            shadow: {\n              color: '#333',\n              blur: 10\n            }\n          }\n        },\n        hover(attrs, data, i) {\n          return { radius: attrs.radius * 2 }\n        }\n      }\n    })\n\n    const tooltip = new Tooltip()\n    tooltip.formatter(data => `${data.name} 购买力 ${data.value}`)\n\n    chart\n      .add(map)\n      .add(tooltip)\n      .add(new Text({ text: '201X 双十一中国各省购买力' }))\n\n    chart.render()\n  })\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("fetch("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'http://s5.qhres.com/static/81bf507dbbc7c08d.json'")]),s._v(")\n  .then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("res")]),s._v(" =>")]),s._v(" res.json())\n  .then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("mapData")]),s._v(" =>")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'海南省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("29925.73")]),s._v("\n      },\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'河南省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("17737.01")]),s._v("\n      },\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'河北省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("13177.64")]),s._v("\n      },\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'湖北省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("12174.96")]),s._v("\n      },\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'广东省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("8230.15")]),s._v("\n      },\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'湖南省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("8173.05")]),s._v("\n      },\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'江西省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("7423.08")]),s._v("\n      },\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'黑龙省江'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("6829.69")]),s._v("\n      },\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'四川省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("6158.43")]),s._v("\n      },\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'安徽省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5930.8")]),s._v("\n      }\n    ]\n\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Tooltip, Text, "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Map")]),s._v(" } = qcharts\n\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v("\n    })\n\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" map = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" qcharts.Map({\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tooltip")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("projection")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'geoMercator'")]),s._v("\n    })\n\n    map\n      .setGeomData(mapData, { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("items")]),s._v(": mapData.features })\n      .mapGeomDataToBind("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("mapData, i")]),s._v(") =>")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" target = data.filter("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" d.name === mapData.properties.name)\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" (\n          (target && target["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("]) || { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": mapData.properties.name, "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" }\n        )\n      })\n      .style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'normal'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("attrs, dataOrigin, i")]),s._v(") =>")]),s._v(" ({\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": data.includes(dataOrigin) ? "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#25243f'")]),s._v(" : "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#0f0c29'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#3B5077'")]),s._v("\n      }))\n\n    map.add("),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Map")]),s._v(".Scatter, {\n      effect(attrs, data, i) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" data.value > "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10000")]),s._v("\n      },\n\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v(": {\n        normal(attrs, data, i) {\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'yellow'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": data.value / "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5000")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'transparent'")]),s._v(",\n\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("shadow")]),s._v(": {\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#333'")]),s._v(",\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("blur")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v("\n            }\n          }\n        },\n        hover(attrs, data, i) {\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": attrs.radius * "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(" }\n        }\n      }\n    })\n\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" tooltip = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Tooltip()\n    tooltip.formatter("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("data")]),s._v(" =>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${data.name}")]),s._v(" 购买力 "),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${data.value}")]),s._v("`")]),s._v(")\n\n    chart\n      .add(map)\n      .add(tooltip)\n      .add("),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Text({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'201X 双十一中国各省购买力'")]),s._v(" }))\n\n    chart.render()\n  })\n")])])])],1)}),[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("散点支持动效，当 "),a("code",{pre:!0},[this._v("effect(attrs, data, i)")]),this._v(" 的返回结果为 "),a("code",{pre:!0},[this._v("true")]),this._v(" 时，该即可开启动效。")])}],!1,null,null,null);a.default=e.exports}}]);
//# sourceMappingURL=41.js.map?v=a8a867d