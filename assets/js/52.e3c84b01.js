(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{492:function(a,e,s){"use strict";s.r(e);var t=s(2),n=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("在之前的函数中，无论是传入的参数还是返回值，都是以6种标准数据为基础的，但还有种函数，参数或返回值是其他函数，称作为高阶函数")]),a._v(" "),e("h2",{attrs:{id:"常见的高阶函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见的高阶函数"}},[a._v("#")]),a._v(" 常见的高阶函数")]),a._v(" "),e("h3",{attrs:{id:"_1-filter-function-iterable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-filter-function-iterable"}},[a._v("#")]),a._v(" 1，filter(function,iterable)")]),a._v(" "),e("p",[a._v("作用：将可迭代对象iterable中的每个元素作为参数传递给函数function，根据函数返回判断为True或Flase，把判断为True的iterable中的元素构建新的迭代器并返回")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("a = filter(lambda x : x-1, [1,2,3,4])\nprint(a)\nprint(list(a))\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("输出为")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("<filter object at 0x000001F8A31C36D0>\n[2, 3, 4]\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h3",{attrs:{id:"_2-map-func-iterable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-map-func-iterable"}},[a._v("#")]),a._v(" 2, map(func,*iterable)")]),a._v(" "),e("p",[a._v("作用：将可迭代对象iterable中的每个元素作为参数传递给函数function，以迭代器形式返回所有结果。不过此时可以传入多个可迭代器对象，且最短的耗尽就停止")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("a = map(lambda x,y : x+y, [1,2,3,4],[1,2,3])\nprint(a)\nprint(list(a))\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("输出为")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("<map object at 0x000001F8A2D42670>\n[2, 4, 6]\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h3",{attrs:{id:"_3-reduce-func-iterable-initial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-reduce-func-iterable-initial"}},[a._v("#")]),a._v(" 3, reduce(func,iterable[,initial])")]),a._v(" "),e("p",[a._v("作用：")]),a._v(" "),e("ul",[e("li",[a._v("若没有指定initial，将iterable的前两个元素传给函数func，把函数返回结果以及iterable的下一个元素又作为参数传入函数，把最后的值返回")]),a._v(" "),e("li",[a._v("若有指定initial，将initial和iterable的第一个元素作为参数调用函数，把函数返回结果以及iterable的下一个元素又作为参数传入函数，把最后的值返回")])]),a._v(" "),e("p",[a._v("注意如今要先导入functools模块才能使用这个函数")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("from functools import reduce\n\na = reduce(lambda x,y : x+y, [1,2,3,4])\nprint(a)\n\nb = reduce(lambda x,y : x+y, [1,2,3,4],2)\nprint(b)\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("p",[a._v("输出为")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("10\n12\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);