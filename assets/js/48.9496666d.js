(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{488:function(s,a,e){"use strict";e.r(a);var n=e(2),t=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("在14.条件语句里面有说过，其特点是只会满足一次结果，也就是说执行【在判断a的值小于0时，就给a+1】这个逻辑的时候，只要满足一次，就会一直执行。")]),s._v(" "),a("p",[s._v("但是，常常会有当满足某个条件的时候，就要求一直执行，直到不满足条件，就如同“吃饭要吃够才停而不是吃一口就停”一个意思，所以就设计出了循环语句")]),s._v(" "),a("h3",{attrs:{id:"_1-while循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-while循环"}},[s._v("#")]),s._v(" 1，while循环")]),s._v(" "),a("h4",{attrs:{id:"_1-语句格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-语句格式"}},[s._v("#")]),s._v(" （1）语句格式")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("while 判断条件:\n    执行语句...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("例如")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("a = -2\nwhile a < 0:\n    a += 1 \n    print(a)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("输出为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-1\n0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"_2-while-true"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-while-true"}},[s._v("#")]),s._v(" （2）while True")]),s._v(" "),a("p",[s._v("因为给的判断条件是True，所以会无限循环，要退出循环的话，可以借用if+break的语句，如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("a = -2\nwhile True:\n    a += 1\n    print(a)\n    if a <= 0:\n        break\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("输出为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_3-while-else"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-while-else"}},[s._v("#")]),s._v(" （3）while...else")]),s._v(" "),a("p",[s._v("类似于if...else，只是条件不只判定一次")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("a = -2\nwhile a < 0:\n    a += 1 \n    print(a)\nelse:\n    print('a >= 0')\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("输出为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-1\n0\na >= 0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"_4-while循环嵌套"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-while循环嵌套"}},[s._v("#")]),s._v(" （4）while循环嵌套")]),s._v(" "),a("p",[s._v("由于while的判定条件是只要符合就一直执行，使用while进行循环嵌套可以实现一些巧妙的连续效果")]),s._v(" "),a("h3",{attrs:{id:"_2-for循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-for循环"}},[s._v("#")]),s._v(" 2，for循环")]),s._v(" "),a("h4",{attrs:{id:"_1-语句格式-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-语句格式-2"}},[s._v("#")]),s._v(" （1）语句格式")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("for 变量 in 可迭代对象:\n    执行语句...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("这句话的意思是遍历可迭代对象中的每一个元素并赋值给变量，然后执行语句，如下")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("a = 2\nlst = [1, 2, 3, 4]\nfor a in lst:\n    print(a)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("输出为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1\n2\n3\n4\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"_2-for-in-else"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-for-in-else"}},[s._v("#")]),s._v(" （2）for … in … else")]),s._v(" "),a("p",[s._v("这个语句的作用是在遍历完后再执行else后面的语句")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("fruits = ['apple', 'banana', 'cherry']  \nfor fruit in fruits:  \n    print(fruit)  \nelse:  \n    print(\"Loop has ended\")\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("输出为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("apple\nbanana\ncherry\nLoop has ended\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"_3-for-循环嵌套"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-for-循环嵌套"}},[s._v("#")]),s._v(" （3）for 循环嵌套")]),s._v(" "),a("h3",{attrs:{id:"_3-循环控制语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-循环控制语句"}},[s._v("#")]),s._v(" 3，循环控制语句")]),s._v(" "),a("h4",{attrs:{id:"_1-break"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-break"}},[s._v("#")]),s._v(" （1）break")]),s._v(" "),a("p",[s._v("终止所在的循环")]),s._v(" "),a("h4",{attrs:{id:"_2-continue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-continue"}},[s._v("#")]),s._v(" （2）continue")]),s._v(" "),a("p",[s._v("跳过当前，继续到循环位置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("a = -2\nwhile a<5:\n    a += 1\n    if a <= 0:\n        print(a)\n        continue               \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("输出为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-1\n0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_4-pass语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-pass语句"}},[s._v("#")]),s._v(" 4，pass语句")]),s._v(" "),a("p",[s._v("是一个空操作，被执行的什么都不会发生。它适合当语法上需要一条语句但并不需要执行任何代码时用来临时占位")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("a = -2\nwhile a<5:\n    pass\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);