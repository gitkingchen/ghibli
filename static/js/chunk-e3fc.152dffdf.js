(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-e3fc"],{iKLC:function(t,n,i){"use strict";var e=i("iL/d");i.n(e).a},"iL/d":function(t,n,i){},kvW8:function(t,n,i){"use strict";(function(t){var e=i("jHpe"),a=i.n(e);i("y1X9"),i("bPOv"),i("QWvX"),i("ZgVT"),i("hnpa"),i("PYIv"),i("45FF"),i("c2Kr"),i("9SXm"),i("26Sd"),i("Te+H"),i("+pfR");n.a={data:function(){return{}},mounted:function(){a.a.highlightAll(),this.bindEvent()},methods:{bindEvent:function(){t(".demo_ani").on("click",function(){t(this).find("div").addClass("move")}),t("#resetBtn").on("click",function(){t.each(t(".demo_ani"),function(n,i){t(i).find("div").removeClass("move")})})}}}}).call(this,i("EVdn"))},xaSA:function(t,n,i){"use strict";i.r(n);var e=i("kvW8").a,a=(i("iKLC"),i("KHd+")),o=Object(a.a)(e,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticStyle:{padding:"30px"}},[i("div",[i("strong",[t._v("animation-fill-mode（默认：backwards）")]),t._v(" "),i("div",{staticClass:"demo_ani demo_1"},[i("div")])]),t._v(" "),i("div",{staticStyle:{width:"800px"}},[i("script",{staticClass:"language-markup",attrs:{type:"text/plain"}},[t._v('\n        <div class="demo_ani demo_1">\n            <div></div>\n        </div>\n      ')]),t._v(" "),i("pre",[i("code",{staticClass:"language-scss"},[t._v("\n        @keyframes move{\n\t\t  0%{left:0}\n\t\t  100%{left:600px;}\n\t\t}\n\n\t\t.demo_ani{\n\t\t\tposition: relative;\n\t\t\theight: 120px;\n\t\t}\n\n\t\t.demo_ani div{\n\t\t\twidth: 100px;\n\t\t\theight: 100px;\n\t\t\tborder:1px solid #000;\n  \t\t\tbackground:red;\n  \t\t\tposition: absolute;\n\t\t\ttop:0;\n\t\t\tleft:0;\n\t\t}\n\n\t\t.demo_1 div.move{\n\t\t\tanimation:move 2s;\n\t\t}\n      ")])])]),t._v(" "),i("div",[i("strong",[t._v("animation-fill-mode（forwards）")]),t._v(" "),i("div",{staticClass:"demo_ani demo_2"},[i("div")])]),t._v(" "),i("div",{staticStyle:{width:"800px"}},[i("script",{staticClass:"language-markup",attrs:{type:"text/plain"}},[t._v('\n        <div class="demo_ani demo_2">\n            <div></div>\n        </div>\n      ')]),t._v(" "),i("pre",[i("code",{staticClass:"language-scss"},[t._v("\n        @keyframes move{\n\t\t  0%{left:0}\n\t\t  100%{left:600px;}\n\t\t}\n\n\t\t.demo_ani{\n\t\t\tposition: relative;\n\t\t\theight: 120px;\n\t\t}\n\n\t\t.demo_ani div{\n\t\t\twidth: 100px;\n\t\t\theight: 100px;\n\t\t\tborder:1px solid #000;\n  \t\t\tbackground:red;\n  \t\t\tposition: absolute;\n\t\t\ttop:0;\n\t\t\tleft:0;\n\t\t}\n\n\t\t.demo_2 div.move{\n\t\t\tanimation:move 2s forwards;\n\t\t}\n      ")])])]),t._v(" "),i("div",[i("strong",[t._v("animation-direction（默认：normal）")]),t._v(" "),i("div",{staticClass:"demo_ani demo_3"},[i("div")])]),t._v(" "),i("div",{staticStyle:{width:"800px"}},[i("script",{staticClass:"language-markup",attrs:{type:"text/plain"}},[t._v('\n        <div class="demo_ani demo_3">\n            <div></div>\n        </div>\n      ')]),t._v(" "),i("pre",[i("code",{staticClass:"language-scss"},[t._v("\n        @keyframes move{\n\t\t  0%{left:0}\n\t\t  100%{left:600px;}\n\t\t}\n\n\t\t.demo_ani{\n\t\t\tposition: relative;\n\t\t\theight: 120px;\n\t\t}\n\n\t\t.demo_ani div{\n\t\t\twidth: 100px;\n\t\t\theight: 100px;\n\t\t\tborder:1px solid #000;\n  \t\t\tbackground:red;\n  \t\t\tposition: absolute;\n\t\t\ttop:0;\n\t\t\tleft:0;\n\t\t}\n\n\t\t.demo_3 div.move{\n\t\t\tanimation:move 2s forwards 6;/*0-600px 6次*/\n\t\t}\n      ")])])]),t._v(" "),i("div",[i("strong",[t._v("animation-direction（默认：alternate）")]),t._v(" "),i("div",{staticClass:"demo_ani demo_4"},[i("div")])]),t._v(" "),i("div",{staticStyle:{width:"800px"}},[i("script",{staticClass:"language-markup",attrs:{type:"text/plain"}},[t._v('\n        <div class="demo_ani demo_4">\n            <div></div>\n        </div>\n      ')]),t._v(" "),i("pre",[i("code",{staticClass:"language-scss"},[t._v("\n        @keyframes move{\n\t\t  0%{left:0}\n\t\t  100%{left:600px;}\n\t\t}\n\n\t\t.demo_ani{\n\t\t\tposition: relative;\n\t\t\theight: 120px;\n\t\t}\n\n\t\t.demo_ani div{\n\t\t\twidth: 100px;\n\t\t\theight: 100px;\n\t\t\tborder:1px solid #000;\n  \t\t\tbackground:red;\n  \t\t\tposition: absolute;\n\t\t\ttop:0;\n\t\t\tleft:0;\n\t\t}\n\n\t\t.demo_4 div.move{\n\t\t\tanimation-name:move;\n\t\t\tanimation-duration:2s;/*单次走2s*/\n\t\t\tanimation-timing-function:linear;\n\t\t\tanimation-iteration-count:5;/*走5次，到端就算一次*/\n\t\t\tanimation-fill-mode:forwards;\n\t\t\tanimation-direction:alternate;/*连续性*/\n\t\t\t/*动画播放在第偶数次向前播放，第奇数次向反方向播放,默认第一次不算*/\n\t\t}\n      ")])])]),t._v(" "),i("br"),i("br"),t._v(" "),i("button",{attrs:{id:"resetBtn"}},[t._v("重置所有")])])}],!1,null,"5ced5a82",null);o.options.__file="base.vue";n.default=o.exports}}]);