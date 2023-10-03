(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{496:function(s,a,t){"use strict";t.r(a);var r=t(2),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("在之前我们有说过类似于random这一些类似的模块，在使用它们的方法的时候，是需要先导入这个模块的；在讲函数、类的时候，我们也有说过，要设计一个可供其他场景调用的函数或类，这种情况下，我们可以先自行打包然后再导入调用即可\n这一小节，具体对其进行一下介绍")]),s._v(" "),a("h2",{attrs:{id:"_1-模块定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-模块定义"}},[s._v("#")]),s._v(" 1，模块定义")]),s._v(" "),a("p",[s._v("Python模块就是一个python文件，以.py结尾，一般在程序的开头部分导入，并可分为如下三类：")]),s._v(" "),a("ul",[a("li",[s._v("标准库模块：是内置的，不需要额外下载或配置文件路径之类，如os、datetime、random等等")]),s._v(" "),a("li",[s._v("第三方模块：不是python自带的，需要通过自行下载（如pip、镜像下载等），典型的如numpy、pandas等")]),s._v(" "),a("li",[s._v("自定义模块：就是自行创建出来的一个py文件，里面包含你需要的函数、类等")])]),s._v(" "),a("h2",{attrs:{id:"_2-模块的导入和调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-模块的导入和调用"}},[s._v("#")]),s._v(" 2，模块的导入和调用")]),s._v(" "),a("h3",{attrs:{id:"_1-直接使用import"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-直接使用import"}},[s._v("#")]),s._v(" （1）直接使用import")]),s._v(" "),a("p",[s._v("当想导入整个模块，好方便使用模块中的所有内容时，就可以直接使用import导入整个包，如下")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import random\nimport os\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_2-使用form-import"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用form-import"}},[s._v("#")]),s._v(" （2）使用form...import...")]),s._v(" "),a("p",[s._v("当不需要导入整个模块，只需要其中少数内容时，可以使用 from [模块名] import [目标名] 的方法，如下")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#从time模块中导入sleep方法\nfrom time import sleep\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_3-使用import-as"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用import-as"}},[s._v("#")]),s._v(" （3）使用import...as...")]),s._v(" "),a("p",[s._v("当模块名太长时，为了后面的调用方便，可以给自定义一个简写名，如下")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import numpy as np\nimport pandas as pd\nimport matplotlib as mlt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_4-调用目标模块的函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-调用目标模块的函数"}},[s._v("#")]),s._v(" （4）调用目标模块的函数")]),s._v(" "),a("p",[s._v("使用模块名.函数名的方式来进行")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('import random\nprint ("随机数: "， random.random())\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_5-搜索路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-搜索路径"}},[s._v("#")]),s._v(" （5）搜索路径")]),s._v(" "),a("p",[s._v("当在程序中导入一个模块的时候，python会按如下路径去寻找要导入的模块：")]),s._v(" "),a("p",[s._v("1，当前文件所在目录")]),s._v(" "),a("p",[s._v("2，搜索在shell变量PYTHONPATH中的所有目录（简单理解就是查找设定的环境变量）")]),s._v(" "),a("p",[s._v("3，再找不到就去找默认路径，然后再找不到就报错了")]),s._v(" "),a("p",[s._v("如果要导入一个自定义路径的模块，可以借用sys模块，如下")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import sys\nsys.path.append('想导入的模块所在路径')\nimport 模块名\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("blockquote",[a("p",[s._v("路径写法和相对路径")]),s._v(" "),a("p",[s._v("绝对路径：从根目录开始的完整路径，如/home/user/documents/file.txt")]),s._v(" "),a("p",[s._v("相对路径：从当前文件所在目录开始的路径，以'..'开头表示向上走一级，'../../'表示向上走两级")])]),s._v(" "),a("h2",{attrs:{id:"_3-dir-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-dir-函数"}},[s._v("#")]),s._v(" 3，dir()函数")]),s._v(" "),a("p",[s._v("返回指定对象内所有定义的所有名称的列表。可用来返回某一模块内所有指定的函数、类和变量列表，如下")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import os\nprint(dir(os))\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);