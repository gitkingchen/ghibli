<template >
    <div class="regular-container">
        <!--priview-->

        <h2>常用正则</h2>
        <div>匹配数字：<span>/^[0-9]*$/</span></div>
        <div>匹配手机号码：<span>/^1[34578]\d{9}$/</span></div>
        <div>匹配电话号码：<span>/[0-9]{5,}$/</span></div>
        <div>匹配座机：<span>/^\d{3,4}-\d{7,8}(-\d{3,4})?$/</span></div>
        <div>匹配银行账号：<span>/^\d{16,19}$/</span></div>
        <div>匹配邮箱：<span>/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/</span></div>
        <div>匹配网址：<span>/(([-a-zA-Z0-9:%._/\+~#=\u4e00-\u9fa5]{1,256}\.[a-zA-Z\u4e00-\u9fa5]{2,}([-a-zA-Z0-9@:%_\+.~#?&//=]*))|(((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])))/</span></div>
        <div>匹配QQ：<span>/^[1-9]\d{3,10}$/</span></div>
        <div>匹配文件后缀：<span>/(.jpg|.gif)+(\?|\#|$)/</span></div>
        <div>匹配中文：<span>/^[\u4e00-\u9fa5]{0,}$/</span></div>
        <div>匹配身份证号：<span>/(^\d{15}$)|(^\d{17}([0-9]|X)$)/</span></div>
        <div>匹配IP地址：<span>/^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/</span></div>
        <div>匹配首尾空格：<span>/(^\s*)|(\s*$)/g</span></div>

        <div>匹配mac地址：<span>/^([A-Fa-f0-9]{2}[:\-]){5}[A-Fa-f0-9]{2}$/</span></div>
        <div>匹配时间：<span>/^\d{4}[-/]\d{1,2}[-/]\d{1,2} \d{1,2}:\d{1,2}:\d{1,2}/</span></div>
        <div>匹配经度：<span>/^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/</span></div>
        <div>匹配纬度：<span>/^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/</span></div>
        <div>匹配数字+单位：<span>/^(-)?\d+(dbm)?$/i （20dbm） 或 /^([0-9]*[.])?[0-9]+(m)?$/i （20m）</span></div>
        <!--priview-->

    </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
.regular-container {
    padding: 30px;
    h2 {
        margin-bottom: 20px;
    }
    > div {
        line-height: 2;
        font-weight: 600;
        span {
            font-weight: normal;
        }
    }
}
</style>
<script>
import Prism from "prismjs";

export default {
    data() {
        return {};
    },
    mounted() {
        Prism.highlightAll();
        this.bindEvent();
    },
    methods: {
        bindEvent() {},
    },
};
</script>

