(window.webpackJsonpQchartsReact=window.webpackJsonpQchartsReact||[]).push([[33],{110:function(s,a,n){"use strict";n.r(a);var t={components:{}},r=n(0),l=Object(r.a)(t,(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("section",[n("h2",[s._v("图片遮罩")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),n("block-demo",{attrs:{tip:"",source:"const data = [\n  '佯装',\n  '瞰舒',\n  '纯真',\n  '灰烬',\n  '段情',\n  '何以',\n  '苦笑',\n  '纠结',\n  '远昔',\n  '桥雨',\n  '卡拉',\n  '漏朽',\n  '聚夜',\n  '亦难',\n  '造梦',\n  '旧景',\n  '雪鬓',\n  '冷咖',\n  '流转',\n  '一线',\n  '流逝',\n  '囚活',\n  '悲切',\n  '暧昧',\n  '擒拿',\n  '紊乱',\n  '心死',\n  '君颜',\n  '倒戈',\n  '佘温',\n  '遗忘',\n  '空位',\n  '成活',\n  '注缘',\n  '慢性',\n  '素锦',\n  '失温',\n  '诠释',\n  '禾锄',\n  '相思'\n].map(t => ({ name: t, value: ~~(Math.random() * 10000) }))\n\nconst imageMask = new Image()\nimageMask.crossOrigin = ''\nimageMask.src = 'http://p5.qhimg.com/t01bf5867049198aa0b.png'\n\nimageMask.onload = () => {\n  const ds = data.map(d => d.value)\n  const min = Math.min.apply(null, ds)\n  const max = Math.max.apply(null, ds)\n  const colors = ['#3b90ff', '#f5cc00', '#8344e5', '#48c252']\n\n  const { Chart, WordCloud, Tooltip } = qcharts\n  const chart = new Chart({ container: '#app', size: [500, 400] })\n\n  const wordCloud = new WordCloud({\n    padding: 0,\n    font: 'Impact',\n    imageMask: imageMask\n  })\n    .source(data.slice(0))\n    .setDataFields({ x: 'name', y: 'value' })\n    .fontSize(d => {\n      if (d.value) {\n        return ((d.value - min) / (max - min)) * 14 + 4\n      }\n      return 0\n    })\n    .style('normal', (attrs, d, i) => {\n      return { color: colors[i % 4] }\n    })\n\n  chart\n    .add(wordCloud)\n    .add(new Tooltip().formatter(d => `${d.name}: ${d.value}`))\n  chart.render()\n}\n"}},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'佯装'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'瞰舒'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'纯真'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'灰烬'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'段情'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'何以'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'苦笑'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'纠结'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'远昔'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'桥雨'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'卡拉'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'漏朽'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'聚夜'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'亦难'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'造梦'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'旧景'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'雪鬓'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'冷咖'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'流转'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'一线'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'流逝'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'囚活'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'悲切'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'暧昧'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'擒拿'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'紊乱'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'心死'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'君颜'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'倒戈'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'佘温'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'遗忘'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'空位'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'成活'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'注缘'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'慢性'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'素锦'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'失温'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'诠释'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'禾锄'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'相思'")]),s._v("\n].map("),n("span",{pre:!0,attrs:{class:"hljs-function"}},[n("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("t")]),s._v(" =>")]),s._v(" ({ "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": t, "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": ~~("),n("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random() * "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10000")]),s._v(") }))\n\n"),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" imageMask = "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Image()\nimageMask.crossOrigin = "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v("\nimageMask.src = "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'http://p5.qhimg.com/t01bf5867049198aa0b.png'")]),s._v("\n\nimageMask.onload = "),n("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("() =>")]),s._v(" {\n  "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" ds = data.map("),n("span",{pre:!0,attrs:{class:"hljs-function"}},[n("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" d.value)\n  "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" min = "),n("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".min.apply("),n("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(", ds)\n  "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" max = "),n("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".max.apply("),n("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(", ds)\n  "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" colors = ["),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#3b90ff'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#f5cc00'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#8344e5'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#48c252'")]),s._v("]\n\n  "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, WordCloud, Tooltip } = qcharts\n  "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({ "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("400")]),s._v("] })\n\n  "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" wordCloud = "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" WordCloud({\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("padding")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("font")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Impact'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("imageMask")]),s._v(": imageMask\n  })\n    .source(data.slice("),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("))\n    .setDataFields({ "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'name'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(" })\n    .fontSize("),n("span",{pre:!0,attrs:{class:"hljs-function"}},[n("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" {\n      "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (d.value) {\n        "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" ((d.value - min) / (max - min)) * "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("14")]),s._v(" + "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v("\n      }\n      "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n    })\n    .style("),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'normal'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),n("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("attrs, d, i")]),s._v(") =>")]),s._v(" {\n      "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" { "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": colors[i % "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v("] }\n    })\n\n  chart\n    .add(wordCloud)\n    .add("),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Tooltip().formatter("),n("span",{pre:!0,attrs:{class:"hljs-function"}},[n("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),n("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${d.name}")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${d.value}")]),s._v("`")]),s._v("))\n  chart.render()\n}\n")])])]),n("block-demo",{attrs:{tip:"",source:"var presents = [\n  '圣诞树',\n  '贺卡',\n  '圣诞礼盒',\n  '围巾',\n  '袜子',\n  '苹果',\n  '手链',\n  '巧克力',\n  '玫瑰',\n  '香水',\n  '乐高',\n  '芭比',\n  '项链',\n  '抱枕',\n  '变形金刚',\n  '摆件',\n  '魔方',\n  '文具',\n  '棒棒糖',\n  '蓝牙耳帽',\n  '超级飞侠',\n  '暖手宝',\n  '夜灯',\n  '堆袜',\n  '耳钉',\n  '公仔',\n  '手机壳',\n  '八音盒',\n  '剃须刀',\n  '打火机',\n  '手表',\n  '巴克球',\n  '模型',\n  '音响',\n  '蒙奇奇',\n  '保温杯'\n]\n\nvar data = []\nfor (var i = 0; i < presents.length; ++i) {\n  data.push({\n    name: presents[i],\n    value: (presents.length - i) * 20\n  })\n}\nfor (var i = 10; i < presents.length; ++i) {\n  var cnt = Math.floor(Math.random() * 10)\n  for (var j = 0; j < cnt; ++j) {\n    data.push({\n      name: presents[i],\n      value: Math.random() * 10\n    })\n  }\n}\n\nconst imageMask = new Image()\nimageMask.crossOrigin = ''\nimageMask.src = 'http://p6.qhimg.com/t01cd27d4a0fdcac94e.png'\n\nimageMask.onload = () => {\n  const ds = data.map(d => d.value)\n  const min = Math.min.apply(null, ds)\n  const max = Math.max.apply(null, ds)\n  const colors = ['#3b90ff', '#f5cc00', '#8344e5', '#48c252']\n\n  const { Chart, WordCloud, Tooltip } = qcharts\n  const chart = new Chart({ container: '#app', size: [500, 400] })\n\n  const wordCloud = new WordCloud({\n    padding: 0,\n    font: 'Impact',\n    imageMask: imageMask\n  })\n    .source(data.slice(0))\n    .setDataFields({ x: 'name', y: 'value' })\n    .fontSize(d => {\n      if (d.value) {\n        return ((d.value - min) / (max - min)) * 14 + 4\n      }\n      return 0\n    })\n    .style('normal', (attrs, d, i) => {\n      return { color: colors[i % 4] }\n    })\n\n  chart\n    .add(wordCloud)\n    .add(new Tooltip().formatter(d => `${d.name}: ${d.value}`))\n  chart.render()\n}\n"}},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" presents = [\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'圣诞树'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'贺卡'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'圣诞礼盒'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'围巾'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'袜子'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'苹果'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'手链'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'巧克力'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'玫瑰'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'香水'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'乐高'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'芭比'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'项链'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'抱枕'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'变形金刚'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'摆件'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'魔方'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'文具'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'棒棒糖'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'蓝牙耳帽'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'超级飞侠'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'暖手宝'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'夜灯'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'堆袜'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'耳钉'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'公仔'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'手机壳'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'八音盒'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'剃须刀'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'打火机'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'手表'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'巴克球'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'模型'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'音响'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'蒙奇奇'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'保温杯'")]),s._v("\n]\n\n"),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" data = []\n"),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" i = "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; i < presents.length; ++i) {\n  data.push({\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": presents[i],\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": (presents.length - i) * "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v("\n  })\n}\n"),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" i = "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v("; i < presents.length; ++i) {\n  "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" cnt = "),n("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".floor("),n("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random() * "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(")\n  "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" j = "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; j < cnt; ++j) {\n    data.push({\n      "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": presents[i],\n      "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random() * "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v("\n    })\n  }\n}\n\n"),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" imageMask = "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Image()\nimageMask.crossOrigin = "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v("\nimageMask.src = "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'http://p6.qhimg.com/t01cd27d4a0fdcac94e.png'")]),s._v("\n\nimageMask.onload = "),n("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("() =>")]),s._v(" {\n  "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" ds = data.map("),n("span",{pre:!0,attrs:{class:"hljs-function"}},[n("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" d.value)\n  "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" min = "),n("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".min.apply("),n("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(", ds)\n  "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" max = "),n("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".max.apply("),n("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(", ds)\n  "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" colors = ["),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#3b90ff'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#f5cc00'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#8344e5'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#48c252'")]),s._v("]\n\n  "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, WordCloud, Tooltip } = qcharts\n  "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({ "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("400")]),s._v("] })\n\n  "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" wordCloud = "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" WordCloud({\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("padding")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("font")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Impact'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("imageMask")]),s._v(": imageMask\n  })\n    .source(data.slice("),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("))\n    .setDataFields({ "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'name'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(" })\n    .fontSize("),n("span",{pre:!0,attrs:{class:"hljs-function"}},[n("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" {\n      "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (d.value) {\n        "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" ((d.value - min) / (max - min)) * "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("14")]),s._v(" + "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v("\n      }\n      "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n    })\n    .style("),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'normal'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),n("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("attrs, d, i")]),s._v(") =>")]),s._v(" {\n      "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" { "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": colors[i % "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v("] }\n    })\n\n  chart\n    .add(wordCloud)\n    .add("),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Tooltip().formatter("),n("span",{pre:!0,attrs:{class:"hljs-function"}},[n("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),n("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${d.name}")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${d.value}")]),s._v("`")]),s._v("))\n  chart.render()\n}\n")])])])],1)}),[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("可以使用 "),a("strong",[this._v("图片遮罩")]),this._v(" 增强词云的设计美感。")])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("下面的例子使用的图片遮罩为："),a("img",{attrs:{src:"http://p5.qhimg.com/t01bf5867049198aa0b.png",alt:"图片遮罩"}})])}],!1,null,null,null);a.default=l.exports}}]);
//# sourceMappingURL=33.js.map?v=64ff076