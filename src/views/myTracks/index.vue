<template>
    <div class="app-container">
        <div
            ref="chart"
            style="width:100%;height:620px;"
        ></div>
    </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped></style>
<script>
// import echarts from 'echarts';
// import 'echarts/map/js/china';
echarts.registerMap("china", mapRoute); //加载地图json

//改为全局cdn引入了
//console.log(echarts)
//没有引用mapRoute.js ，因为访问不到echarts
//import '@/assets/map/mapRoute';
//import mapRoute from '@/assets/map/mapRoute.json';
//const echarts = require('echarts');
// require('@/assets/map/mapRoute')
//import '@/assets/map/china';

var nameMap = {
    Tokyo: "东京",
    "Kyoto Prefecture": "京都",
    Seoul: "首尔",
    "Jeju-do": "济州岛",
};

var colors = ["#F46E36", "#5DBD32", "#546570", "#8378EA"];
var traData = [
    {
        year: "2012",
        dis: [
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "凯里",
                        value: [107.9874, 26.573],
                    },
                ],
            },
        ],
    },
    {
        year: "2013",
        dis: [
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "天津",
                        value: [117.2059, 39.0908],
                    },
                ],
            },
        ],
    },
    {
        year: "2014",
        dis: [
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "北戴河",
                        value: [119.5221, 39.8223],
                    },
                ],
            },
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "邯郸",
                        value: [114.3804, 36.3803],
                    },
                ],
            },
        ],
    },
    {
        year: "2015",
        dis: [
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "上海",
                        value: [121.4803, 31.2363],
                    },
                    {
                        name: "苏州",
                        value: [120.5896, 31.3045],
                    },
                    {
                        name: "杭州",
                        value: [120.1617, 30.2799],
                    },
                ],
            },
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "南京",
                        value: [118.8029, 32.0647],
                    },
                ],
            },
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "济南",
                        value: [116.7584, 36.5598],
                    },
                    {
                        name: "泰安",
                        value: [117.0949, 36.2058],
                    },
                ],
            },
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "大同",
                        value: [113.3064, 40.0825],
                    },
                ],
            },
        ],
    },
    {
        year: "2016",
        dis: [
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "成都",
                        value: [104.07122, 30.5763],
                    },
                ],
            },
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "天津",
                        value: [117.2059, 39.0908],
                    },
                    {
                        name: "釜山",
                        value: [129.0756, 35.1795],
                    },
                    {
                        name: "福冈",
                        value: [130.4017, 33.5903],
                    },
                ],
            },
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "北戴河",
                        value: [119.5221, 39.8223],
                    },
                ],
            },
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "香港",
                        value: [114.1861, 22.2935],
                    },
                    {
                        name: "澳门",
                        value: [113.5515, 22.1931],
                    },
                ],
            },
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "首尔",
                        value: [126.9779, 37.5665],
                    },
                    {
                        name: "济州岛",
                        value: [126.4983, 33.489],
                    },
                ],
            },
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "武汉",
                        value: [114.3115, 30.5984],
                    },
                    {
                        name: "长沙",
                        value: [112.9454, 28.2348],
                    },
                ],
            },
        ],
    },
    {
        year: "2017",
        dis: [
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "桃林口水库",
                        value: [119.0619, 40.1471],
                    },
                ],
            },
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "东京",
                        value: [139.7648, 35.682],
                    },
                    {
                        name: "京都",
                        value: [135.768, 35.0116],
                    },
                ],
            },
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "重庆",
                        value: [106.5584, 29.5689],
                    },
                ],
            },
        ],
    },
    {
        year: "2018",
        dis: [
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "唐山",
                        value: [118.1864, 39.6365],
                    },
                ],
            },
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "乌镇",
                        value: [120.4982, 30.7542],
                    },
                ],
            },
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "石家庄",
                        value: [114.5215, 38.0483],
                    },
                ],
            },
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "青岛",
                        value: [120.3894, 36.0722],
                    },
                ],
            },
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "烟台",
                        value: [121.4544, 37.47],
                    },
                ],
            },
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "丽江",
                        value: [100.2324, 26.8606],
                    },
                ],
            },
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "香河",
                        value: [117.0124, 39.7679],
                    },
                ],
            },
        ],
    },
    {
        year: "2019",
        dis: [
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "广州",
                        value: [113.2714, 23.1353],
                    },
                    {
                        name: "深圳",
                        value: [114.0645, 22.5484],
                    },
                ],
            },
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "庐山",
                        value: [115.981, 29.5481],
                    },
                    {
                        name: "厦门",
                        value: [118.0959, 24.4857],
                    },
                ],
            },
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "承德",
                        value: [117.9697, 40.9578],
                    },
                ],
            },
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "大连",
                        value: [121.6213, 38.9193],
                    },
                ],
            },
            {
                path: [
                    {
                        name: "北京",
                        value: [116.4551, 40.2539],
                    },
                    {
                        name: "丽江",
                        value: [100.2324, 26.8606],
                    },
                    {
                        name: "大理",
                        value: [100.2742, 25.6122],
                    },
                ],
            },
        ],
    },
];

var convertLineData = function (index) {
    //计算线数据
    var dis = traData[index].dis;
    var result = [];
    for (var i = 0; i < dis.length; i++) {
        var obj = dis[i];
        var line = obj.path;
        var color = colors[i];
        result.push({
            coords: [].concat(line.map((item) => item.value)),
            lineStyle: {
                color: color,
            },
        });
    }
    return result;
};

var convertPointData = function (index) {
    //计算点数据
    var dis = traData[index].dis,
        posArr = [];
    posArr = posArr.concat(...dis.map((item) => item.path));
    return filterByName(posArr, "name");
};

function filterByName(data, Name) {
    //data是json对象，Name是根据什么字段去重
    var map = {},
        dest = [];
    for (var i = 0; i < data.length; i++) {
        var ai = data[i];
        if (i == 0) {
            dest.push(ai);
        } else {
            var filterData = dest.filter(function (e) {
                return e[Name] == ai[Name];
            });
            if (filterData.length == 0) {
                dest.push(ai);
            }
        }
    }
    return dest;
}

export default {
    data() {
        return {
            chart: null,
        };
    },
    methods: {
        initChart() {
            this.chart = echarts.init(this.$refs.chart);

            var option = {
                timeline: {
                    axisType: "category",
                    orient: "vertical",
                    autoPlay: true,
                    inverse: true,
                    //playInterval: 100000, //每过多少秒切换年
                    playInterval: 5000,
                    left: 10,
                    right: null,
                    top: 20,
                    bottom: 20,
                    width: 65,
                    label: {
                        normal: {
                            textStyle: {
                                color: "#ddd",
                            },
                        },
                        emphasis: {
                            textStyle: {
                                color: "#fff",
                            },
                        },
                    },
                    symbol: "none",
                    lineStyle: {
                        color: "#555",
                    },
                    checkpointStyle: {
                        color: "#bbb",
                        borderColor: "#777",
                        borderWidth: 2,
                    },
                    controlStyle: {
                        showNextBtn: true,
                        showPrevBtn: true,
                        normal: {
                            color: "#666",
                            borderColor: "#666",
                        },
                        emphasis: {
                            color: "#aaa",
                            borderColor: "#aaa",
                        },
                    },
                    data: traData.map((item) => item.year),
                },
                baseOption: {
                    animation: true,
                    animationDuration: 1000,
                    animationEasing: "cubicInOut",
                    animationDurationUpdate: 1000,
                    animationEasingUpdate: "quinticInOut",
                    geo: {
                        show: true,
                        map: "china",
                        roam: true,
                        nameMap: nameMap,
                        label: {
                            emphasis: {
                                show: true,
                                color: "#111",
                            },
                        },
                        itemStyle: {
                            normal: {
                                areaColor: "#ededed",
                                borderColor: "#8C98A0",
                            },
                            emphasis: {
                                areaColor: "#01FEA8",
                            },
                        },
                    },
                },
                options: [],
            };

            for (var n = 0; n < traData.length; n++) {
                //渲染每一年的数据，生成点，线，地图数据
                option.options.push({
                    backgroundColor: "#111111",
                    title: [
                        {
                            text: "我的足迹",
                            //subtext: "那些年走过的路，趟过的水\n点标记查看游记",
                            subtext: "世界辣么大，我想去瞅瞅~",
                            left: "75%",
                            top: "8%",
                            textStyle: {
                                color: "#04B9FF",
                                fontSize: 26,
                            },
                            subtextStyle: {
                                color: "#fff",
                                fontSize: 14,
                                lineHeight: 22,
                            },
                        },
                    ],
                    series: [
                        //未知作用
                        // {
                        //     //文字和标志
                        //     name: "light",
                        //     type: "scatter",
                        //     coordinateSystem: "geo",
                        //     data: convertPointData(n),
                        //     //symbolSize: 16,
                        //     label: {
                        //         normal: {
                        //             color: "#777777",
                        //             fontWeight: "bolder",
                        //             fontSize: 14,
                        //             backgroundColor: "#0DF4FD",
                        //             borderColor: "#7D7C69",
                        //             borderWidth: 1,
                        //             borderRadius: 3,
                        //             padding: 3,

                        //             verticalAlign: "middle",
                        //             formatter: "{b}",
                        //             position: "top",
                        //             distance: 10,
                        //             show: true
                        //         },
                        //         emphasis: {
                        //             show: true
                        //         }
                        //     }
                        //     // itemStyle: {
                        //     //     normal: {
                        //     //         color: colors[colorIndex][n]
                        //     //     }
                        //     // }
                        // },
                        //地图
                        {
                            type: "map",
                            map: "china",
                            geoIndex: 0,
                            aspectScale: 0.75, //长宽比
                            roam: true,
                            animation: false,
                        },
                        //地图点的动画效果
                        {
                            type: "effectScatter",
                            coordinateSystem: "geo",
                            data: convertPointData(n),
                            symbolSize: 16,
                            showEffectOn: "render",
                            rippleEffect: {
                                color: "#1ea7e8",
                                scale: 3,
                                brushType: "stroke",
                            },
                            hoverAnimation: true,
                            label: {
                                normal: {
                                    color: "#444",
                                    fontWeight: "bold",
                                    fontSize: 14,
                                    backgroundColor: "#0DF4FD",
                                    borderColor: "#7D7C69",
                                    borderWidth: 1,
                                    borderRadius: 3,
                                    padding: 5,
                                    verticalAlign: "middle",
                                    formatter: "{b}",
                                    position: "top",
                                    distance: 14,
                                    show: true,
                                },
                                emphasis: {
                                    show: true,
                                },
                            },
                            itemStyle: {
                                normal: {
                                    color: "#1ea7e8",
                                },
                            },
                            zlevel: 1,
                        },
                        //地图线的动画效果
                        {
                            type: "lines",
                            zlevel: 2,
                            polyline: true, //多点
                            effect: {
                                smooth: true,
                                show: true,
                                period: 5, //箭头指向速度，值越小速度越快
                                trailLength: 0, //特效尾迹长度[0,1]值越大，尾迹越长重
                                symbol:
                                    "path://M432.333 0c58.982 0 114.585 2.15 166.912 6.349 52.224 4.198 98.611 13.926 139.059 29.081 38.81 15.156 69.53 37.07 92.262 65.741 22.733 28.672 34.1 66.663 34.1 113.767v513.228c0 25.293-5.018 49.255-15.156 72.09-10.137 22.733-23.654 42.598-40.448 59.392-18.534 16.896-39.219 30.31-61.952 40.448-22.732 10.138-46.694 15.155-71.987 15.155l80.896 80.896V1024H108.75v-27.853l80.896-80.896c-25.293 0-49.255-5.017-72.09-15.155-22.733-10.138-43.417-23.552-61.952-40.448-16.896-16.794-30.31-36.66-40.448-59.392C5.018 777.523 0 753.459 0 728.166V214.938c0-47.104 11.366-85.095 34.1-113.767 22.732-28.672 53.554-50.585 92.262-65.74 40.55-15.156 86.835-24.884 139.161-29.082C317.747 2.15 373.35 0 432.333 0zM379.29 214.938H108.749v270.54h270.54v-270.54zM189.645 809.062c10.137 0 20.275-2.56 30.31-7.577 10.138-5.018 18.535-10.957 25.293-17.715 8.397-6.656 14.746-15.156 18.944-25.293 4.198-10.035 6.349-20.173 6.349-30.31 0-11.777-2.15-22.324-6.349-31.642-4.198-9.216-10.547-18.023-18.944-26.522-6.758-6.656-15.155-12.185-25.293-16.384-10.137-4.198-20.173-6.349-30.31-6.349-10.138 0-20.275 2.15-30.31 6.35-10.138 4.198-18.535 9.727-25.293 16.383-8.5 8.5-14.746 17.306-19.047 26.522-4.198 9.216-6.349 19.865-6.349 31.641 0 10.138 2.15 20.276 6.35 30.31 4.198 10.138 10.546 18.638 18.943 25.294 6.759 6.758 15.258 12.697 25.293 17.715 10.138 5.017 20.275 7.577 30.413 7.577z m566.374-594.124H485.48v270.54h270.54v-270.54z m-80.896 594.124c10.138 0 20.275-2.56 30.31-7.577 10.138-5.018 18.535-10.957 25.293-17.715 8.397-6.656 14.746-15.156 18.944-25.293 4.199-10.035 6.35-20.173 6.35-30.31 0-11.777-2.151-22.324-6.35-31.642-4.198-9.216-10.547-18.023-18.944-26.522-6.758-6.656-15.155-12.185-25.292-16.384-10.138-4.198-20.276-6.349-30.31-6.349-10.138 0-20.276 2.15-30.311 6.35-10.138 4.198-18.535 9.727-25.293 16.383-8.5 8.5-14.848 17.306-19.046 26.522-4.199 9.216-6.35 19.865-6.35 31.641 0 10.138 2.151 20.276 6.35 30.31 4.198 10.138 10.547 18.638 18.944 25.294 6.758 6.758 15.257 12.697 25.292 17.715 10.138 5.017 20.276 7.577 30.413 7.577z",
                                symbolSize: 13, //图标大小
                            },
                            lineStyle: {
                                normal: {
                                    width: 2, //尾迹线条宽度
                                    opacity: 0.8, //尾迹线条透明度
                                    curveness: 0.5, //尾迹线条曲直度
                                },
                            },
                            data: convertLineData(n),
                        },
                    ],
                });
            }
            this.chart.setOption(option);
        },
    },
    mounted() {
        this.initChart();
    },
};
</script>
