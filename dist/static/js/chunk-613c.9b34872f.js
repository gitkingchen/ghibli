(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-613c"],{Xf3F:function(n,t,e){"use strict";e.r(t);var i=e("jHpe"),o=e.n(i),s=(e("y1X9"),e("QWvX"),e("ZgVT"),e("bPOv"),e("hnpa"),e("PYIv"),e("45FF"),e("c2Kr"),e("9SXm"),e("26Sd"),e("Te+H"),e("+pfR"),{data:function(){return{}},mounted:function(){o.a.highlightAll(),this.bindEvent()},methods:{bindEvent:function(){}}}),r=(e("mm10"),e("KHd+")),c=Object(r.a)(s,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticStyle:{padding:"30px"}},[t("div",[t("strong",[this._v("节流（在频繁的操作下，规定时间内只执行一次）")])]),this._v(" "),t("div",{staticStyle:{width:"800px"}},[t("pre",[t("code",{staticClass:"language-js"},[this._v("\n        // 函数节流非常适用于函数被频繁调用的场景，例如：window.onresize() 事件、mousemove 事件、上传进度等情况。\n        // fn 是需要执行的函数\n        // wait 是时间间隔\n        const throttle = (fn, wait = 50) => {\n\n          // 上一次执行 fn 的时间\n          let previous = 0\n          // 将 throttle 处理结果当作函数返回\n          return function(...args) {\n            console.log('频繁执行')\n            // 获取当前时间，转换成时间戳，单位毫秒\n            let now = +new Date()\n            // 将当前时间和上一次执行函数的时间进行对比\n            // 大于等待时间就把 previous 设置为当前时间并执行函数 fn\n            if (now - previous > wait) {\n              previous = now\n              fn.apply(this, args)\n            }\n          }\n        }\n\n        // DEMO\n        // 执行 throttle 函数返回新函数\n        const betterFn = throttle(() => console.log('fn 函数执行了，在规定的一秒内只执行一次'), 1000)\n        // 每 10 毫秒执行一次 betterFn 函数，但是只有时间差大于 1000 时才会执行 fn\n        setInterval(betterFn, 10)\n\n    ")])])])])}],!1,null,"031991f6",null);c.options.__file="throttle.vue";t.default=c.exports},chCr:function(n,t,e){},mm10:function(n,t,e){"use strict";var i=e("chCr");e.n(i).a}}]);