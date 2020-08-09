<template>
    <div class="app-container">
        <p>前端</p>
        <p>本科，自动化专业</p>
        <p>
            大学期间加入大学生创业团队，开启我的技术生涯，读书，视频教学，论坛，QQ群，博客，实习，参与线下分享
        </p>
        <p>
            大四开始跑北京各个大学校招，积累经验，弥补不足
        </p>
        <p>2013.6 本科毕业，加入多盟，踏上前端不归路</p>
        <p>
            2014.4 加入猎豹（金山网络），混入移动互联网
        </p>
        <p>2016.11 加入360，持续学习ing...</p>
        <div
            class="contact"
            style="text-align:center;line-height:4;"
        >
            <div>
                有想骚扰我的，可以加我哈~
            </div>
            <img
                src="@/assets/weixin.jpg"
                width="200"
            />
        </div>

    </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-container {
    // width: 80%;
    margin: 0 auto;
    line-height: 1.6;
    font-size: 18px;
    text-align: center;

    .contact {
        margin: 20px 0;
        font-weight: bold;
    }

    p {
        padding-left: 20px;
        position: relative;
        line-height: 2;
        // &:before {
        //     position: absolute;
        //     top: 7px;
        //     left: 0;
        //     content: "";
        //     width: 10px;
        //     height: 10px;
        //     background-color: #000;
        //     border-radius: 50%;
        // }
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
