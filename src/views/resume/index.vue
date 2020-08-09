<template>
    <div class="resume-container">
        <div class="resume-wrap">
            <!-- <div class="resume-header">

            </div> -->
            <div class="resume-body">
                <div class="resume-box">
                    <div style="color:#fff;font-size:22px;">
                        求职意向：web前端开发（全职）
                    </div>
                    <div class="tit">
                        <img src="https://p3.ssl.qhimg.com/t014075c3b731da4eeb.png" />
                        <span>基本信息</span>
                    </div>

                    <table class="my-info">
                        <tbody>
                            <tr>
                                <td>姓名：金晨</td>
                                <td>性别：男</td>
                                <td>出生日期：1990-07-04</td>
                            </tr>
                            <tr>
                                <td>院校：河北大学（2009—2013）</td>
                                <td>学历：本科</td>
                                <td>主修专业：自动化</td>
                            </tr>
                            <tr>
                                <td>民族：汉族</td>
                                <td>户籍：河北省唐山市玉田县</td>
                                <td>现住地址：北京市通州区梨园小镇</td>
                            </tr>
                            <tr>
                                <td colspan="6">
                                    爱好：旅行 / 骑行 / 逛B站 / 互联网教学 / 探店
                                </td>
                            </tr>

                            <tr>
                                <td colspan="6">
                                    <div class="concat">
                                        <div>
                                            <span>联系方式：</span>
                                            手机（微信）/18210607608&nbsp;&nbsp;、
                                            邮箱/kingdream90@163.com
                                        </div>

                                        <div>
                                            <span>
                                                个人网站：
                                            </span>
                                            <a
                                                href="https://jinchensite.com"
                                                target="_blank"
                                                title="主要用于学习，总结，实践"
                                            >https://jinchensite.com</a>
                                        </div>
                                        <div>
                                            <span>Github：</span>
                                            <a
                                                href="https://github.com/gitkingchen"
                                                target="_blank"
                                                title="一个有想法就想建个库"
                                            >https://github.com/gitkingchen</a>
                                        </div>
                                        <!-- <div>
                                            <span>掘金：</span>
                                            <a
                                                href="https://juejin.im/user/1556564194631101"
                                                target="_blank"
                                                title=""
                                            >https://juejin.im/user/1556564194631101</a>
                                        </div> -->
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="resume-box">
                    <div class="tit">
                        <img
                            src="https://p4.ssl.qhimg.com/t016774b4c535b9156c.png"
                            alt=""
                        />
                        <span>工作经验</span>
                    </div>
                    <div class="work-cont">
                        <div
                            class="item"
                            v-for="(item,index) in works"
                            :key="index"
                        >

                            <div>{{item.title}}</div>
                            <ul
                                v-for="(tt,i) in item.list"
                                :key="i"
                            >
                                <li
                                    v-for="(mm,j) in tt"
                                    :key="j"
                                >
                                    <strong>{{mm.type | typeFilters}}</strong>
                                    <span>{{mm.val}}</span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div class="resume-box">
                    <div class="tit">
                        <img
                            src="https://p3.ssl.qhimg.com/t01d2e32ed701668ac2.png"
                            alt=""
                        />
                        <span>开源项目</span>
                    </div>
                    <div class="work-cont">
                        <div
                            class="item"
                            v-for="(item,index) in githubs"
                            :key="index"
                        >

                            <ul
                                v-for="(tt,i) in item.list"
                                :key="i"
                            >
                                <li
                                    v-for="(mm,j) in tt"
                                    :key="j"
                                >
                                    <strong>{{mm.type | typeFilters}}</strong>

                                    <a
                                        :href="mm.val"
                                        target="_blank"
                                        v-if="mm.type == 'link'"
                                        style="text-decoration:underline;color:#7cd5ff;"
                                    >{{mm.val}}</a>
                                    <span v-else>
                                        {{mm.val}}
                                    </span>

                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div class="resume-box">
                    <div class="tit">
                        <img
                            src="https://p5.ssl.qhimg.com/t017887fc7e29c0b6c1.png"
                            alt=""
                        />
                        <span>技能雷达</span>
                    </div>

                    <div class="chart-container">
                        <echart
                            :data="chart.skills.data"
                            :conf="chart.skills.conf"
                        >
                        </echart>
                    </div>
                </div>
                <div class="resume-box">
                    <div class="tit">
                        <img
                            src="https://p3.ssl.qhimg.com/t01dd28076f1557e12e.png"
                            alt=""
                        />
                        <span>足绘天下</span>
                    </div>
                    <div class="chart-container">
                        <mytracks />
                    </div>
                </div>
                <div class="resume-box">
                    <div class="tit">
                        <img
                            src="https://p2.ssl.qhimg.com/t01a8c2e68d46f50b5b.png"
                            alt=""
                        />
                        <span>往事如烟</span>
                    </div>
                    <aboutme />
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<style lang="scss">
.resume-container {
    background-image: url(https://p5.ssl.qhimg.com/t01d08cfd2d537ebf4a.png);
    background-size: cover;
    // min-height: calc(100vh - 50px);
    padding: 20px 20px;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;

    .my-info {
        border-collapse: collapse;
        color: #ffffff;
        margin: auto;
    }

    .my-info tr td {
        width: 300px;
        border: 1px solid #5bc0de;
        padding: 10px 10px;

        .concat {
            line-height: 1.8;
            span {
                display: inline-block;
                width: 80px;
            }
            a {
                text-decoration: underline;
                color: #65dbff;
            }
        }
    }

    .resume-wrap {
        height: 100%;

        .resume-header {
            height: 60px;
            line-height: 60px;
            text-align: center;
            font-weight: bold;
            font-size: 28px;
            color: #eee;
        }

        .resume-body {
            // border: 1px solid #00b3fe;
            border-radius: 10px;
            padding: 20px 0;

            .resume-box {
                width: 1000px;
                min-height: 300px;
                margin: 0 auto;

                .work-cont {
                    display: table;
                    margin: 0 auto;
                    letter-spacing: 1px;
                    .item {
                        width: 950px;
                        margin-bottom: 20px;
                        > div {
                            font-size: 20px;
                            color: #fff;
                        }

                        ul {
                            margin-top: 15px;
                            line-height: 1.6;
                            margin-left: 45px;

                            li {
                                color: #fff;
                                strong {
                                    display: inline-block;
                                    width: 90px;
                                }
                            }
                        }
                    }
                }

                .app-container {
                    color: #f3f3f3;
                    p:before {
                        background-color: #b7b7b7;
                    }
                }

                .chart-container {
                    height: 660px;
                }
            }

            .tit {
                border-bottom: 3px solid #ffca0a;
                text-align: center;
                padding: 0 10px 10px 10px;
                margin-bottom: 10px;
                border-radius: 10%;
                width: 200px;
                margin: 20px auto;

                img {
                    width: 30px;
                    vertical-align: middle;
                    margin-right: 10px;
                }

                span {
                    vertical-align: middle;
                    color: #fff;
                    font-size: 24px;
                    font-weight: bold;
                }
            }
        }
    }
}
</style>

<script>
import Echart from "@/components/charts/Echart.vue";
import Aboutme from "@/views/aboutme.vue";
import Mytracks from "@/views/mytracks.vue";
const maxVal = 100;
const skills = [
    {
        text: "Vue",
        val: 85,
    },
    {
        text: "Jq",
        val: 85,
    },
    // {
    //     text: "React/React native",
    //     val: 30,
    // },
    {
        text: "小程序开发",
        val: 79,
    },
    {
        text: "移动web开发（Vue/Jq）",
        val: 80,
    },
    {
        text: "Echarts",
        val: 85,
    },
    {
        text: "D3",
        val: 60,
    },
    {
        text: "Antv",
        val: 70,
    },
    //   {
    //     text: "Threejs",
    //     val: 20
    //   },
    {
        text: "Bootstrap",
        val: 80,
    },
    {
        text: "Linux",
        val: 64,
    },
    {
        text: "Python",
        val: 40,
    },
    {
        text: "Nodejs",
        val: 70,
    },
    {
        text: "Webpack/gulp",
        val: 68,
    },
    {
        text: "Chrome扩展开发",
        val: 60,
    },
    {
        text: "计算机网络",
        val: 70,
    },
    {
        text: "Nginx",
        val: 67,
    },
    {
        text: "Element UI",
        val: 86,
    },
    {
        text: "Mongodb",
        val: 70,
    },
    {
        text: "Docker",
        val: 76,
    },
];
const skillsArr = skills.map((item) => {
    item.max = maxVal;
    return item;
});

const skillValArr = skills.map((item) => {
    return item.val;
});

export default {
    components: {
        Echart,
        Aboutme,
        Mytracks,
    },
    filters: {
        typeFilters(type) {
            var str = "";
            switch (type) {
                case "name":
                    str = "项目名称：";
                    break;
                case "des":
                    str = "项目介绍：";
                    break;
                case "tech":
                    str = "技术栈：";
                    break;
                case "role":
                    str = "角色：";
                    break;
                case "link":
                    str = "链接：";
                    break;
                case "hard":
                    str = "难点：";
                    break;

                default:
                    break;
            }

            return str;
        },
    },
    data() {
        return {
            githubs: [
                {
                    list: [
                        [
                            {
                                type: "name",
                                val: "个人网站",
                            },
                            {
                                type: "des",
                                val:
                                    "主要用于学习并实践新技术，总结平常重复性高的代码块和工具",
                            },
                            {
                                type: "tech",
                                val:
                                    "Element UI + Echarts + Express + Mongodb + Webhooks + Github Pages",
                            },
                            {
                                type: "link",
                                val: "https://jinchensite.com",
                            },
                        ],
                        [
                            {
                                type: "name",
                                val: "downtolocal",
                            },
                            {
                                type: "des",
                                val:
                                    "针对项目线上资源批量下载到本地，改为相对地址引用（想法来自公司需要批量更改CDN地址）",
                            },
                            {
                                type: "tech",
                                val: "Request + Async",
                            },
                            {
                                type: "link",
                                val:
                                    "https://www.npmjs.com/package/downtolocal",
                            },
                        ],
                        [
                            {
                                type: "name",
                                val: "足绘天下",
                            },
                            {
                                type: "des",
                                val:
                                    "由于喜欢背包旅行，所以做了一个记录旅行足迹和游记的可视化项目",
                            },
                            {
                                type: "tech",
                                val: "Echarts + geojson",
                            },
                            {
                                type: "link",
                                val: "https://jinchensite.com/#/resume/index",
                            },
                        ],
                        [
                            {
                                type: "name",
                                val: "比武大赛",
                            },
                            {
                                type: "des",
                                val: "前端组用于知识竞赛的简版小程序",
                            },
                            {
                                type: "tech",
                                val: "小程序云开发",
                            },
                            {
                                type: "link",
                                val: "https://github.com/gitkingchen/biwu_xcx",
                            },
                        ],
                        [
                            {
                                type: "name",
                                val: "thinking-app（开发中）",
                            },
                            {
                                type: "des",
                                val: "记录突发奇想",
                            },
                            {
                                type: "tech",
                                val: "uni-app",
                            },
                        ],
                    ],
                },
            ],
            works: [
                {
                    title:
                        "360-网盾部-猎网平台（2016/11 - 至今 | Web前端高级工程师）",
                    list: [
                        [
                            {
                                type: "name",
                                val: "天津反诈平台",
                            },
                            {
                                type: "des",
                                val:
                                    "协助天津公安局网安侦办，调查，线索追踪案件等",
                            },
                            {
                                type: "tech",
                                val: "Jq + Echarts + Antv",
                            },
                            {
                                type: "role",
                                val:
                                    "调研可视化方案，负责该平台案件协助，定制模块开发",
                            },
                            {
                                type: "hard",
                                val:
                                    "针对不同数据类型，进行过滤，标记转为树状图展示，针对树节点添加交互",
                            },
                        ],
                        [
                            {
                                type: "name",
                                val: "猎网举报小程序",
                            },
                            {
                                type: "des",
                                val: "网民版举报诈骗，钓鱼等案件的工具",
                            },
                            {
                                type: "tech",
                                val: "uni-app",
                            },
                            {
                                type: "role",
                                val: "主要负责线索查询，案件举报等模块开发",
                            },
                            {
                                type: "hard",
                                val:
                                    "根据原型需求，针对h5，app，小程序端，写法上要尽量兼容，对于不好实现的地方需要提出解决方案",
                            },
                        ],
                        [
                            {
                                type: "name",
                                val: "内部管理平台-xshare",
                            },
                            {
                                type: "des",
                                val: "用于管理产品研发组周报，技术分享，评分等",
                            },
                            {
                                type: "tech",
                                val: "Vue + Nginx + Express + Mongodb + Docker",
                            },
                            {
                                type: "role",
                                val: "主要开发人员，技术选型，开发，部署上线",
                            },
                            {
                                type: "hard",
                                val:
                                    "在设计数据表时，需要考虑字段关联性，避免修改时进行复杂操作",
                            },
                        ],
                    ],
                },
                {
                    title: "猎豹-PC浏览器（2014/03 - 2016/11 | Web前端工程师）",
                    list: [
                        [
                            {
                                type: "name",
                                val: "猎豹浏览器的插件扩展",
                            },
                            {
                                type: "des",
                                val:
                                    "集成到猎豹浏览器PC版的插件，方便用户操作，提升浏览器使用体验",
                            },
                            {
                                type: "tech",
                                val: "Jq + Chrome Api",
                            },
                            {
                                type: "role",
                                val:
                                    "主要开发人员，负责天气提醒，小游戏中心，购物推荐等扩展",
                            },
                            {
                                type: "hard",
                                val: "功能模块的拆分",
                            },
                        ],
                        [
                            {
                                type: "name",
                                val: "CM Launcher 设计师平台",
                            },
                            {
                                type: "des",
                                val: "为设计师提供壁纸投稿的变现平台",
                            },
                            {
                                type: "tech",
                                val: "React",
                            },
                            {
                                type: "role",
                                val: "负责抽取并封装公共组件模块",
                            },
                            {
                                type: "hard",
                                val: "从0开始设计开发公共组件，方便开发维护",
                            },
                        ],
                    ],
                },
                {
                    title:
                        "多盟-技术部业务端（2013/01 - 2014/03 | Web前端工程师）",
                    list: [
                        [
                            {
                                type: "name",
                                val: "App开发者和广告主平台",
                            },
                            {
                                type: "des",
                                val:
                                    "为App嵌入开屏，插屏动画广告和广告主投放，统计平台",
                            },
                            {
                                type: "tech",
                                val: "Jq + Css3 + CreateJS",
                            },
                            {
                                type: "role",
                                val:
                                    "根据设计稿，开发并兼容适配 Android/Ios动画广告和平台改版",
                            },
                            {
                                type: "hard",
                                val: "适配不同移动设备，调试麻烦",
                            },
                        ],
                    ],
                },
            ],
            chart: {
                skills: {
                    loading: false,
                    data: {},
                    conf: {
                        backgroundColor: "transparent",
                        color: ["#4A99FF", "#4BFFFC"],
                        radar: {
                            // shape: 'circle',
                            splitNumber: 2,
                            //center: ["50%"],
                            name: {
                                textStyle: {
                                    color: "#fff",
                                    fontSize: 16,
                                },
                            },
                            indicator: skillsArr,
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
                                symbolSize: 10,
                                data: [
                                    {
                                        value: skillValArr,
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
