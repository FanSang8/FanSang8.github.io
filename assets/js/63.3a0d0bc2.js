(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{513:function(s,a,e){"use strict";e.r(a);var n=e(2),t=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"一-概念理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-概念理解"}},[s._v("#")]),s._v(" 一，概念理解")]),s._v(" "),a("p",[s._v("在寻常意义的理解中，说到字典可能就会想到新华字典、牛津字典等，字典比较重要的特性就是能通过一个明显的索引去找到对应的内容，如通过“zhao”这个注音去找到“找”这些字。Python的字典数据类型有类似的意思，只不过这次是把这种索引也作为一个值存放了起来。")]),s._v(" "),a("h4",{attrs:{id:"_1-具体含义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-具体含义"}},[s._v("#")]),s._v(" 1，具体含义")]),s._v(" "),a("p",[s._v("（1）字典由{}来包含内容\n（2）字典包含内容的形式为键值对（key：value）的形式，每个键值对之间用逗号，隔开，如下")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("a = {'姓名': '张三', '年龄': 28}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_2-特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-特点"}},[s._v("#")]),s._v(" 2，特点")]),s._v(" "),a("p",[s._v("（1）可变，不是序列\n（2）键需为不可变类型，如数字、字符串、元组；值无限制\n（3）键重复会导致前面的值被覆盖；值可重复")]),s._v(" "),a("h3",{attrs:{id:"二-创建字典"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-创建字典"}},[s._v("#")]),s._v(" 二，创建字典")]),s._v(" "),a("h4",{attrs:{id:"_1-直接在空字典里面写键值对"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-直接在空字典里面写键值对"}},[s._v("#")]),s._v(" 1，直接在空字典里面写键值对")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("a = {'姓名': '张三', '年龄': 28}\nprint(a)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("输出为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{'姓名': '张三', '年龄': 28}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_2-定义空字典-然后往里面加键值对"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-定义空字典-然后往里面加键值对"}},[s._v("#")]),s._v(" 2，定义空字典，然后往里面加键值对")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("a = {}\na['姓名'] = '张三'\na['年龄'] = 28\nprint(a)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("输出为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{'姓名': '张三', '年龄': 28}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_3-把键作为关键字传入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-把键作为关键字传入"}},[s._v("#")]),s._v(" 3，把键作为关键字传入")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('a = dict(姓名="张三", 年龄=28)\nprint(a)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("输出为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{'姓名': '张三', '年龄': 28}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_4-利用可迭代对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-利用可迭代对象"}},[s._v("#")]),s._v(" 4，利用可迭代对象")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('a = dict([("姓名", "张三"), ("年龄", 28)])\nprint(a)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("输出为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{'姓名': '张三', '年龄': 28}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_5-通过zip-把对应元素打包成元组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-通过zip-把对应元素打包成元组"}},[s._v("#")]),s._v(" 5，通过zip()把对应元素打包成元组")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('a = dict(zip(["姓名", "年龄"], ["张三", 28]))\nprint(a)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("输出为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{'姓名': '张三', '年龄': 28}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_6-利用类方法fromkeys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-利用类方法fromkeys"}},[s._v("#")]),s._v(" 6，利用类方法fromkeys()")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('dic1 = dict.fromkeys(("name", "age", "sex"))\nprint(dic1)\ndic2 = dict.fromkeys(("name", "age", "sex"), "I\ndon\'t know!")\nprint(dic2)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("输出为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{'name': None, 'age': None, 'sex': None}\n{'name': \"I don't know!\", 'age': \"I don't know!\", 'sex': \"I don't know!\"}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"三-相关内置函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-相关内置函数"}},[s._v("#")]),s._v(" 三，相关内置函数")]),s._v(" "),a("h4",{attrs:{id:"_1-dict-kwarg-dict-mapping-dict-iterable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-dict-kwarg-dict-mapping-dict-iterable"}},[s._v("#")]),s._v(" 1，dict(**kwarg) / dict(mapping) / dict(iterable)")]),s._v(" "),a("p",[s._v("作用：创建一个字典并返回，可以是传入关键字、函数方式、可迭代对象来创建")]),s._v(" "),a("h4",{attrs:{id:"_2-zip-iterables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-zip-iterables"}},[s._v("#")]),s._v(" 2，zip(*iterables)")]),s._v(" "),a("p",[s._v("作用：传入可迭代对象，取出每个可迭代对象的第i个元素组成第i个元组，返回这些元组的迭代器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('result1 = zip("abcd", "efgh")\nprint(list(result1))\nresult4 = zip("abcd")\nprint(list(result4))\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("输出为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[('a', 'e'), ('b', 'f'), ('c', 'g'), ('d', 'h')]\n[('a',), ('b',), ('c',), ('d',)]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"_3-classmethod-fromkeys-iterable-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-classmethod-fromkeys-iterable-value"}},[s._v("#")]),s._v(" 3，classmethod fromkeys(iterable[, value])")]),s._v(" "),a("p",[s._v("作用：创建一个新字典，以 iterable 的元素作为键，value 作为值（默认为None）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('dic2 = dict.fromkeys(("name", "age", "sex"), "I don\'t know!")\nprint(dic2)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("输出为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{'name': \"I don't know!\", 'age': \"I don't know!\", 'sex': \"I don't know!\"}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"四-访问和修改字典"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-访问和修改字典"}},[s._v("#")]),s._v(" 四，访问和修改字典")]),s._v(" "),a("p",[a("strong",[s._v("访问")]),s._v("：类似索引访问的方法，只是把放索引的位置换成放key值，即可访问相关的value值\n"),a("strong",[s._v("修改")]),s._v("：类似索引修改的方法，只是把放索引的位置换成放key值，即可修改相关的value值，没有找到则新增此键值对")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('a = dict([("姓名", "张三"), ("年龄", 28)]))\nprint(a["姓名"])\na["姓名"] = "阿鸡"\nprint(a)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("输出为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("张三\n{'姓名': '阿鸡', '年龄': 28}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"五-字典的对象方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五-字典的对象方法"}},[s._v("#")]),s._v(" 五，字典的对象方法")]),s._v(" "),a("h4",{attrs:{id:"_1-查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-查"}},[s._v("#")]),s._v(" 1，查")]),s._v(" "),a("p",[a("strong",[s._v("（1）dict.keys()")]),s._v("\n作用：返回所作用字典的所有键的视图对象")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("怎么理解视图对象？")]),s._v("\n一种特殊的数据格式，就相当于一个投影，所以原字典内容变化时，对应的视图对象也可能发生变化")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('a = dict([("姓名", "张三"), ("年龄", 28)])\nb = a.keys()\nprint(b)\nprint(list(b))\n\nprint("-----------------")\n\na["练习"] = "两年半"\nprint(b)\nprint(list(b))\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("输出为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("dict_keys(['姓名', '年龄'])\n['姓名', '年龄']\n-----------------\ndict_keys(['姓名', '年龄', '练习'])\n['姓名', '年龄', '练习']\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("strong",[s._v("（2）dict.values()")]),s._v("\n作用：返回所作用字典的所有值的视图对象")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('a = dict([("姓名", "张三"), ("年龄", 28)])\nb = a.values()\nprint(b)\nprint(list(b))\n\nprint("-----------------")\n\na["姓名"] = "阿鸡"\nprint(b)\nprint(list(b))\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("输出为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("dict_values(['张三', 28])\n['张三', 28]\n----------------\ndict_values(['阿鸡', 28])\n['阿鸡', 28]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("strong",[s._v("（3）dict.items()")]),s._v("\n作用：返回返回所作用字典的所有键值对的视图对象")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('a = dict([("姓名", "张三"), ("年龄", 28)])\nb = a.items()\nprint(b)\nprint(list(b))\n\nprint("-----------------")\n\na["姓名"] = "阿鸡"\nprint(b)\nprint(list(b))\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("输出为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("dict_items([('姓名', '张三'), ('年龄', 28)])\n[('姓名', '张三'), ('年龄', 28)]\n----------------\ndict_items([('姓名', '阿鸡'), ('年龄', 28)])\n[('姓名', '阿鸡'), ('年龄', 28)]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("strong",[s._v("（4）dict.get(key[, default])")]),s._v("\n作用：返回指定的键 key 对应的值，key不存在时，返回default（默认None）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('a = dict([("姓名", "张三"), ("年龄", 28)])\nprint(a.get("姓名"))\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("输出为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("张三\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_2-改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-改"}},[s._v("#")]),s._v(" 2，改")]),s._v(" "),a("p",[a("strong",[s._v("（1）dict.update([other])")]),s._v("\n作用：\n使用other传入的键值对更新字典，如果jian相同，则覆盖原有键;\nother需要是字典对象、包含键值对的可迭代对象、关键字参数；\n原有修改，无返回值")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('a = dict([("姓名", "张三"), ("年龄", 28)])\na.update({"练习" : "两年半"})\nprint(a)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("输出为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{'姓名': '张三', '年龄': 28, '练习': '两年半'}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("（2）dict.pop(key[, default])")]),s._v("\n作用：移除指定的键key，并返回对应的值value")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('a = dict([("姓名", "张三"), ("年龄", 28)])\nprint(a.pop("姓名"))\nprint(a)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("输出为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("张三\n{'年龄': 28}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("（3）dict.popitem()")]),s._v("\n作用：从字典中移除最后一个键值对, 并返回它们构成的元组")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('a = dict([("姓名", "张三"), ("年龄", 28)])\nprint(a.popitem())\nprint(a)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("输出为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("('年龄', 28)\n{'姓名': '张三'}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("（4）dict.clear()")]),s._v("\n作用：移除字典中的所有元素，无返回值")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('a = dict([("姓名", "张三"), ("年龄", 28)])\na.clear()\nprint(a)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("输出为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_3-其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-其他"}},[s._v("#")]),s._v(" 3，其他")]),s._v(" "),a("p",[a("strong",[s._v("（1）dict.copy()")]),s._v("\n作用：返回原字典的浅拷贝")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('a = dict([("姓名", "张三"), ("年龄", 28)])\nb = a.copy()\nprint(b)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("输出为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{'姓名': '张三', '年龄': 28}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);