<template>
    <div class="resume-container">
        <div class="resume-wrap">
            <div class="resume-header">
                简历
            </div>
            <div class="resume-body">
                <div class="">
                    <div class="resume-box">
                        <div class="tit">
                            <img
                                src="https://p3.ssl.qhimg.com/t014075c3b731da4eeb.png"
                                alt=""
                            >
                            <span>个人资料</span>
                        </div>

                        <table class="my-info">
                            <tbody>
                                <tr>
                                    <td>年龄：</td>
                                    <td>33</td>
                                    <td>性别：</td>
                                    <td>男</td>
                                </tr>
                                <tr>
                                    <td>诈骗金额：</td>
                                    <td>1000</td>
                                    <td>诈骗人数：</td>
                                    <td>2人</td>
                                </tr>
                                <tr>
                                    <td>手机号：</td>
                                    <td
                                        colspan="3"
                                        class="font01"
                                    >18212345678、18387654321</td>
                                </tr>

                                <tr>
                                    <td>案发时间：</td>
                                    <td>2020.06.01</td>
                                    <td>交易平台：</td>
                                    <td>微信</td>
                                </tr>
                                <tr>
                                    <td>证件：</td>
                                    <td colspan="3">身份证（130229196603020011）</td>
                                </tr>
                                <tr>
                                    <td>住址：</td>
                                    <td colspan="3">北京市朝阳区</td>
                                </tr>
                                <tr>
                                    <td>IP：</td>
                                    <td colspan="3">123.23.52.32、113.13.52.32</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="resume-box">
                        <div class="tit">
                            <img
                                src="https://p3.ssl.qhimg.com/t01a23993f6622e75d5.png"
                                alt=""
                            >
                            <span>技能</span>
                        </div>

                        <echart
                            :data="chart.skills.data"
                            :conf="chart.skills.conf"
                        >
                        </echart>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import Echart from "@/components/charts/Echart.vue";

export default {
    components: {
        Echart,
    },
    data() {
        return {
            chart: {
                skills: {
                    loading: false,
                    data: {},
                    conf: {
                        backgroundColor: "transparent",
                        color: ["#4A99FF", "#4BFFFC"],
                        radar: {
                            // shape: 'circle',
                            center: ["50%", "65%"],
                            name: {
                                textStyle: {
                                    color: "#fff",
                                    fontSize: 16,
                                },
                            },
                            indicator: [
                                {
                                    text: "电信诈骗",
                                    max: 5000,
                                },
                                {
                                    text: "网络赌博",
                                    max: 5000,
                                },
                                {
                                    text: "黑客入侵",
                                    max: 5000,
                                },
                            ],
                            splitArea: {
                                // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                                show: true,
                                areaStyle: {
                                    // 分隔区域的样式设置。
                                    color: [
                                        "rgba(255,255,255,0)",
                                        "rgba(255,255,255,0)",
                                    ], //
                                    // 分隔区域颜色。 分隔区域会按数组中颜色的顺序依次循环设置颜色。 默认是一个深浅的间隔色。
                                },
                            },
                            axisLine: {
                                //指向外圈文本的分隔线样式
                                lineStyle: {
                                    color: "#ddd",
                                },
                            },
                            splitLine: {
                                lineStyle: {
                                    color: "#ccc", // 分隔线颜色
                                    width: 1, // 分隔线线宽
                                },
                            },
                        },
                        series: [
                            {
                                type: "radar",
                                symbolSize: 9,
                                data: [
                                    {
                                        value: [4000, 1000, 2000],
                                        //name: legendData[1],
                                        itemStyle: {
                                            normal: {
                                                lineStyle: {
                                                    color: "#4BFFFC",
                                                    // shadowColor: '#4BFFFC',
                                                    // shadowBlur: 10,
                                                },
                                                shadowColor: "#4BFFFC",
                                                shadowBlur: 10,
                                            },
                                        },
                                        areaStyle: {
                                            normal: {
                                                // 单项区域填充样式
                                                color: {
                                                    type: "linear",
                                                    x: 0, //右
                                                    y: 0, //下
                                                    x2: 1, //左
                                                    y2: 1, //上
                                                    colorStops: [
                                                        {
                                                            offset: 0,
                                                            color: "#4BFFFC",
                                                        },
                                                        {
                                                            offset: 0.5,
                                                            color:
                                                                "rgba(0,0,0,0)",
                                                        },
                                                        {
                                                            offset: 1,
                                                            color: "#4BFFFC",
                                                        },
                                                    ],
                                                    globalCoord: false,
                                                },
                                                opacity: 1, // 区域透明度
                                            },
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                },
            },
        };
    },
    methods: {},
    mounted() {},
    beforeDestroy() {},
};
</script>
<style lang="scss">
.resume-container {
    background-image: url(https://p2.ssl.qhimg.com/t01e903e22b8750f72f.png);
    background-size: cover;
    height: 100%;
    padding: 20px 20px;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;

    .resume-box {
        flex: 1;
        border: 1px solid #00b3fe;
        padding: 10px;
        margin-top: 10px;
        border-radius: 6px;
        height: 300px;
        overflow: hidden;
        box-sizing: border-box;
        .chart-container {
            height: calc(100% - 45px);
        }
    }

    .my-info {
        border-collapse: collapse;
        color: #ffffff;
        margin: auto;
    }

    .my-info tr td {
        border: 1px solid #5bc0de;
        padding-top: 5px;
        padding-bottom: 5px;
        text-indent: 10px;
    }

    .black-top {
        width: 100%;

        th,
        td {
            text-align: center;
        }
    }

    .resume-flex-box {
        display: flex;
    }

    .resume-wrap {
        height: 100%;
        flex-direction: column;

        .resume-header {
            height: 60px;
            line-height: 60px;
            text-align: center;
            font-weight: bold;
            font-size: 28px;
            color: #eee;
        }

        .resume-body {
            flex: 1;
            height: calc(100% - 60px);
            flex-direction: row;

            .tit {
                border-bottom: 3px solid #ffca0a;
                width: 35%;
                text-align: center;
                overflow: hidden;
                padding: 0 10px 10px 10px;
                margin-bottom: 10px;
                border-radius: 10%;

                img {
                    width: 30px;
                    vertical-align: middle;
                    margin-right: 10px;
                }

                span {
                    vertical-align: middle;
                }
            }
        }
    }
}
</style>