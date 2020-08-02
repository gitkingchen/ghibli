<template>
    <div class="app-container">
        <p>90后前端大叔</p>
        <p>本科，自动化专业</p>
        <p>
            大学期间加入大学生创业团队，开启我的码农生涯，起初负责运营工作，后来想学技术，从HTML开始学起，读书，视频教学，论坛，博客，实习，参与线下分享
        </p>
        <p>
            大四开始跑北京各个大学校招，积累经验，弥补不足
        </p>
        <p>2013.6 毕业，入职Domob（多盟），踏上前端不归路</p>
        <p>
            2014.4 跳槽到猎豹（当时的金山网络），混入移动互联网
        </p>
        <p>2016.11 跳槽到360，至今仍从事前端，后来打开后端新大门，持续学习中</p>
        <div class="contact">有想骚扰我的，可以加我嘿~</div>
        <img
            src="@/assets/weixin.jpg"
            width="200"
        />
    </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-container {
    width: 80%;
    margin: 0 auto;
    line-height: 1.6;

    .contact {
        margin: 20px 0;
        font-weight: bold;
    }

    p {
        padding-left: 20px;
        position: relative;
        &:before {
            position: absolute;
            top: 7px;
            left: 0;
            content: "";
            width: 10px;
            height: 10px;
            background-color: #000;
            border-radius: 50%;
        }
    }
}
</style>
<script>
export default {
    data() {
        return {};
    },
    methods: {},
};
</script>
