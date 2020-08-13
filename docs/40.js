(window.webpackJsonpQchartsReact=window.webpackJsonpQchartsReact||[]).push([[40],{98:function(s,a,t){"use strict";t.r(a);var n={components:{}},r=t(0),p=Object(r.a)(n,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("地图")]),s._v(" "),t("p",[s._v("不同于其他图表类型，地图的渲染需要两份数据。")]),s._v(" "),s._m(0),s._v(" "),t("h3",[s._v("1. 基本地图渲染")]),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),t("p",[s._v("例如，下面的 DEMO 渲染了中国各个省市，如果不设置第二个参数，那么将不会有省市的区别，而是整个中国地图整体而已。")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"fetch('http://s5.qhres.com/static/81bf507dbbc7c08d.json')\n  .then(res => res.json())\n  .then(mapData => {\n    const { Chart, Map, Text, Tooltip } = qcharts\n\n    const chart = new Chart({\n      container: '#app'\n    })\n\n    const map = new qcharts.Map({\n      projection: 'geoMercator'\n    })\n\n    map\n      .setGeomData(mapData, { items: mapData.features })\n      .style('normal', { fillColor: '#214882', color: '#479cd3' })\n\n    const tooltip = new Tooltip()\n    tooltip.formatter(data => `${data.properties.name}`)\n\n    chart\n      .add(map)\n      .add(tooltip)\n      .add(new Text({ text: '中国各省市地图' }))\n\n    chart.render()\n  })\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("fetch("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'http://s5.qhres.com/static/81bf507dbbc7c08d.json'")]),s._v(")\n  .then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("res")]),s._v(" =>")]),s._v(" res.json())\n  .then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("mapData")]),s._v(" =>")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Map")]),s._v(", Text, Tooltip } = qcharts\n\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v("\n    })\n\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" map = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" qcharts.Map({\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("projection")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'geoMercator'")]),s._v("\n    })\n\n    map\n      .setGeomData(mapData, { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("items")]),s._v(": mapData.features })\n      .style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'normal'")]),s._v(", { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#214882'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#479cd3'")]),s._v(" })\n\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" tooltip = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Tooltip()\n    tooltip.formatter("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("data")]),s._v(" =>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${data.properties.name}")]),s._v("`")]),s._v(")\n\n    chart\n      .add(map)\n      .add(tooltip)\n      .add("),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Text({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'中国各省市地图'")]),s._v(" }))\n\n    chart.render()\n  })\n")])])]),t("h3",[s._v("2. 地理信息数据可视化")]),s._v(" "),s._m(3),s._v(" "),t("block-demo",{attrs:{tip:"",source:"fetch('http://s5.qhres.com/static/81bf507dbbc7c08d.json')\n  .then(res => res.json())\n  .then(mapData => {\n    const data = [\n      {\n        name: '新疆维吾尔自治区',\n        gdp: 0\n      },\n\n      {\n        name: '贵州省',\n        gdp: '0.663'\n      },\n\n      {\n        name: '云南省',\n        gdp: '0.701'\n      },\n\n      {\n        name: '江西省',\n        gdp: '1.102'\n      },\n\n      {\n        name: '陕西省',\n        gdp: '1.07'\n      },\n\n      {\n        name: '安徽省',\n        gdp: '1.462'\n      },\n\n      {\n        name: '四川省',\n        gdp: '1.833'\n      },\n\n      {\n        name: '福建省',\n        gdp: '1.484'\n      },\n\n      {\n        name: '湖南省',\n        gdp: '1.641'\n      },\n\n      {\n        name: '湖北省',\n        gdp: '1.796'\n      },\n\n      {\n        name: '河南省',\n        gdp: '2.224'\n      },\n\n      {\n        name: '宁夏回族自治区',\n        gdp: '0.16'\n      },\n\n      {\n        name: '浙江省',\n        gdp: '2.567'\n      },\n\n      {\n        name: '广东省',\n        gdp: '4.63'\n      },\n\n      {\n        name: '江苏省',\n        gdp: '4.486'\n      },\n\n      {\n        name: '上海市',\n        gdp: '1.556'\n      },\n\n      {\n        name: '山西省',\n        gdp: '0.748'\n      },\n\n      {\n        name: '北京市',\n        gdp: '1.405'\n      },\n\n      {\n        name: '山东省',\n        gdp: '3.966'\n      },\n\n      {\n        name: '重庆市',\n        gdp: '0.982'\n      },\n\n      {\n        name: '河北省',\n        gdp: '1.66'\n      },\n\n      {\n        name: '广西壮族自治区',\n        gdp: '0.876'\n      },\n\n      {\n        name: '青海省',\n        gdp: '0.12'\n      },\n\n      {\n        name: '海南省',\n        gdp: '0.243'\n      },\n\n      {\n        name: '辽宁省',\n        gdp: '1.138'\n      },\n\n      {\n        name: '黑龙江省',\n        gdp: '0.624'\n      },\n\n      {\n        name: '甘肃省',\n        gdp: '0.35'\n      },\n\n      {\n        name: '内蒙古自治区',\n        gdp: '0.778'\n      },\n\n      {\n        name: '吉林省',\n        gdp: '0.63'\n      },\n\n      {\n        name: '天津市',\n        gdp: '0.993'\n      }\n    ]\n\n    const { Chart, Map, Text, Tooltip } = qcharts\n\n    const chart = new Chart({\n      container: '#app'\n    })\n\n    const map = new qcharts.Map({\n      projection: 'geoMercator'\n    })\n\n    map\n      .setGeomData(mapData, { items: mapData.features })\n      .mapGeomDataToBind((mapData, i) => {\n        const target = data.filter(d => d.name === mapData.properties.name)\n        return (\n          (target && target[0]) || { name: mapData.properties.name, gdp: 0 }\n        )\n      })\n      .style('normal', (attrs, data, i) => {\n        const gdp = +data.gdp || 0\n        let fillColor = '#ddb926'\n\n        if (gdp > 0 && gdp <= 0.5) {\n          fillColor = '#fad4d5'\n        } else if (gdp > 0.5 && gdp <= 0.8) {\n          fillColor = '#facf00'\n        } else if (gdp > 0.8 && gdp <= 1.2) {\n          fillColor = '#90cefd'\n        } else if (gdp > 1.2 && gdp <= 1.6) {\n          fillColor = '#9ed5d9'\n        } else if (gdp > 1.6 && gdp <= 2) {\n          fillColor = '#f66900'\n        } else if (gdp > 2) {\n          fillColor = '#f64600'\n        }\n\n        return {\n          fillColor,\n          color: '#479cd3'\n        }\n      })\n\n    const tooltip = new Tooltip({ title: '2018上半年全国各省GDP' })\n    tooltip.formatter(data => `${data.name}: ${data.gdp}万亿元`)\n\n    chart\n      .add(map)\n      .add(tooltip)\n      .add(new Text({ text: '2018 年中国上半年各省市 GDP 数据可视化' }))\n\n    chart.render()\n  })\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("fetch("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'http://s5.qhres.com/static/81bf507dbbc7c08d.json'")]),s._v(")\n  .then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("res")]),s._v(" =>")]),s._v(" res.json())\n  .then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("mapData")]),s._v(" =>")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'新疆维吾尔自治区'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'贵州省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0.663'")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'云南省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0.701'")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'江西省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'1.102'")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'陕西省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'1.07'")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'安徽省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'1.462'")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'四川省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'1.833'")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'福建省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'1.484'")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'湖南省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'1.641'")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'湖北省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'1.796'")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'河南省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2.224'")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'宁夏回族自治区'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0.16'")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'浙江省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2.567'")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'广东省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'4.63'")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'江苏省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'4.486'")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'上海市'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'1.556'")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'山西省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0.748'")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'北京市'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'1.405'")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'山东省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'3.966'")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'重庆市'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0.982'")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'河北省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'1.66'")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'广西壮族自治区'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0.876'")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'青海省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0.12'")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'海南省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0.243'")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'辽宁省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'1.138'")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'黑龙江省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0.624'")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'甘肃省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0.35'")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'内蒙古自治区'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0.778'")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'吉林省'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0.63'")]),s._v("\n      },\n\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'天津市'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0.993'")]),s._v("\n      }\n    ]\n\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Map")]),s._v(", Text, Tooltip } = qcharts\n\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v("\n    })\n\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" map = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" qcharts.Map({\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("projection")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'geoMercator'")]),s._v("\n    })\n\n    map\n      .setGeomData(mapData, { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("items")]),s._v(": mapData.features })\n      .mapGeomDataToBind("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("mapData, i")]),s._v(") =>")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" target = data.filter("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" d.name === mapData.properties.name)\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" (\n          (target && target["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("]) || { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": mapData.properties.name, "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gdp")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" }\n        )\n      })\n      .style("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'normal'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("attrs, data, i")]),s._v(") =>")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" gdp = +data.gdp || "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" fillColor = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#ddb926'")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (gdp > "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" && gdp <= "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(") {\n          fillColor = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#fad4d5'")]),s._v("\n        } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (gdp > "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(" && gdp <= "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.8")]),s._v(") {\n          fillColor = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#facf00'")]),s._v("\n        } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (gdp > "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.8")]),s._v(" && gdp <= "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.2")]),s._v(") {\n          fillColor = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#90cefd'")]),s._v("\n        } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (gdp > "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.2")]),s._v(" && gdp <= "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.6")]),s._v(") {\n          fillColor = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#9ed5d9'")]),s._v("\n        } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (gdp > "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.6")]),s._v(" && gdp <= "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(") {\n          fillColor = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#f66900'")]),s._v("\n        } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (gdp > "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(") {\n          fillColor = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#f64600'")]),s._v("\n        }\n\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n          fillColor,\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#479cd3'")]),s._v("\n        }\n      })\n\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" tooltip = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Tooltip({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2018上半年全国各省GDP'")]),s._v(" })\n    tooltip.formatter("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("data")]),s._v(" =>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${data.name}")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${data.gdp}")]),s._v("万亿元`")]),s._v(")\n\n    chart\n      .add(map)\n      .add(tooltip)\n      .add("),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Text({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2018 年中国上半年各省市 GDP 数据可视化'")]),s._v(" }))\n\n    chart.render()\n  })\n")])])]),t("h3",[s._v("属性")]),s._v(" "),s._m(4)],1)}),[function(){var s=this.$createElement,a=this._self._c||s;return a("ul",[a("li",[this._v("必要的：地图地理信息数据，该数据用于渲染地图主体")]),this._v(" "),a("li",[this._v("可选的：当需要利用地图可视化某些数据时，这时候将需要传入其他数据与地图地理信息绑定")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("当实例化 "),a("code",{pre:!0},[this._v("qcharts.Map")]),this._v(" 后可以使用 "),a("code",{pre:!0},[this._v("setGeomData")]),this._v(" 传入用于渲染地图的地理信息。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[t("code",{pre:!0},[s._v("setGeomData")]),s._v(" 接收两个参数，第一个参数为 "),t("strong",[s._v("必须值")]),s._v(" ，第二个参数为 "),t("strong",[s._v("可选值")]),s._v("。当不传入第二个参数时，"),t("code",{pre:!0},[s._v("qcharts.Map")]),s._v(" 将会把 第一个参数 传入的地理信息用于渲染一个整体。")])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("如果需要利用地图的地理信息做某些数据可视化，可以使用 "),a("code",{pre:!0},[this._v("mapGeomDataToBind")]),this._v(" 完成 "),a("strong",[this._v("地理信息")]),this._v(" 与 "),a("strong",[this._v("数据")]),this._v(" 的绑定。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("名称")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("参数")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("projection")]),s._v(" "),t("td",[s._v("设置投影类型")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("(type: String)")])])]),s._v(" "),t("tr",[t("td",[s._v("tooltip")]),s._v(" "),t("td",[s._v("控制 地图主体是否参与 Tooltip 的交互")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("(flag: Boolean)")])])]),s._v(" "),t("tr",[t("td",[s._v("scale")]),s._v(" "),t("td",[s._v("控制 地图主体缩放比例")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("(val: Number)")])])])])])}],!1,null,null,null);a.default=p.exports}}]);
//# sourceMappingURL=40.js.map?v=196ff90