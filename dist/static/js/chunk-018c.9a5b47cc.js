(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-018c"],{"NR5/":function(n,t,e){"use strict";e.r(t);var i=e("jHpe"),o=e.n(i),a=(e("y1X9"),e("QWvX"),e("ZgVT"),e("bPOv"),e("hnpa"),e("PYIv"),e("45FF"),e("c2Kr"),e("9SXm"),e("26Sd"),e("Te+H"),e("+pfR"),{data:function(){return{}},mounted:function(){o.a.highlightAll(),this.bindEvent()},methods:{bindEvent:function(){var n=document.getElementById("demo"),t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(){return window.setTimeout(callback,1e3/60)},e=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||function(n){window.clearTimeout(n)},i=null;t(function o(a){console.log("time",a),console.log("performance.now()",performance.now()),i||(i=a);var r=a-i;n.style.left=Math.min(r/10,300)+"px",r<3e3?t(o):e(o)})}}}),r=(e("sKj6"),e("KHd+")),s=Object(r.a)(a,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticStyle:{padding:"30px"}},[e("div",[e("strong",[n._v("requestAnimationFrame")]),n._v(" "),e("div",{attrs:{id:"demo"}})]),n._v(" "),e("div",{staticStyle:{width:"800px","margin-top":"200px"}},[e("script",{staticClass:"language-markup",attrs:{type:"text/plain"}},[n._v('\n\n        频率：\n        60HZ = （T = 1/60）\n        1秒钟刷新60次 = 一次 0.0167秒 = 一次 16.7ms\n\t\t卡顿的原因：\n        setTimeout的执行步调和屏幕的刷新步调不一致\n\t\t1，屏幕刷新频率和屏幕分辨率，屏幕尺寸有关\n\t\t2，setTimeout的执行时间不确定，先完成主线程任务，然后再去异步队列，\n        所以实际的执行时间是比设定的晚一些的\n        \n        <div id="demo"></div>\n      ')]),n._v(" "),e("pre",[e("code",{staticClass:"language-scss"},[n._v("\n        #demo{\n\t\t\tposition: absolute;\n\t\t\tleft:0;\n\t\t\ttop:0;\n\t\t\twidth: 100px;\n\t\t\theight: 100px;\n\t\t\tbackground: red;\n\t\t}\n      ")])]),n._v(" "),e("pre",[e("code",{staticClass:"language-js"},[n._v("\n        var oDemo = document.getElementById('demo')\n        var raf = (function(){\n            return \n                window.requestAnimationFrame || \n                window.webkitRequestAnimationFrame || \n                function(){\n                    return window.setTimeout(callback,1000/60)\n                }\n        })();\n\n        var cancelAFrame = (function(){\n            return \n                window.cancelAnimationFrame || \n                window.webkitCancelAnimationFrame || \n                function (id) {\n                    window.clearTimeout(id);\n                };\n        })();\n\n        var start = null;\n        function move(time){\n            console.log('time',time)\n            console.log('performance.now()',performance.now())\n        /*\n            每次刷新屏幕的时间戳(递增的),表示requestAnimationFrame() 开始去执行回调函数的时刻。\n            每次刷新屏幕的时间戳的差值是16ms左右\n        */\n            \n            if (!start) start = time;\n            var progress = time - start;\n            oDemo.style.left = Math.min(progress / 10, 300) + 'px';\n\n            if (progress < 3000) {\n                raf(move)\n            }else{\n                window.cancelAFrame(move);\n            }\n            \n        }\n\n        raf(move);\n      ")])])])])}],!1,null,"10441b26",null);s.options.__file="requestAnimationFrame.vue";t.default=s.exports},YXJd:function(n,t,e){},sKj6:function(n,t,e){"use strict";var i=e("YXJd");e.n(i).a}}]);