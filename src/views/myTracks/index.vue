<template>
  <div class="app-container">
    <div ref="chart" style="width:1200px;height:700px;"></div>
  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
<script>
// import echarts from 'echarts';
// import 'echarts/map/js/china';
echarts.registerMap('china', mapRoute);//加载地图json

//改为全局cdn引入了
//console.log(echarts)
//没有引用mapRoute.js ，因为访问不到echarts
//import '@/assets/map/mapRoute';
//import mapRoute from '@/assets/map/mapRoute.json';
//const echarts = require('echarts');
// require('@/assets/map/mapRoute')
//import '@/assets/map/china';


var nameMap = {
	"Tokyo":"东京",
	"Kyoto Prefecture":"京都",
	"Seoul":"首尔",
	"Jeju-do":"济州岛"
}

var colors = ["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"];

var traData = [
	{
		year:'2013',
		dis:[
			{//每个完整的路线的颜色不一样
				lineId:1,
				color:'red',
				path:[
					{
						name:'北京',
						value:[116.4551, 40.2539]
					},
					{
						name:'四川',
						value:[103.9526, 30.7617]
					},
					{
						name:'湖北',
						value:[114.3896, 30.6628]
					}
				]
			},
			{//每个完整的路线的颜色不一样
				lineId:2,
				color:'green',
				path:[
					{
						name:'北京',
						value:[116.4551, 40.2539]
					},
					{
						name:'四川1',
						value:[102.9526, 31.7617]
					},
					{
						name:'湖北1',
						value:[113.3896, 31.6628]
					}
				]
			},
		]
	},
	{
		year:'2014',
		dis:[
			{//每个完整的路线的颜色不一样
				lineId:3,
				color:'blue',
				path:[
					{
						name:'北京',
						value:[116.4551, 40.2539]
					},
					{
						name:'四川2',
						value:[102.9526, 30.7617]
					},
					{
						name:'湖北2',
						value:[116.3896, 30.6628]
					}
				]
			},
			{//每个完整的路线的颜色不一样
				lineId:4,
				color:'pink',
				path:[
					{
						name:'北京',
						value:[116.4551, 40.2539]
					},
					{
						name:'四川3',
						value:[100.9526, 31.7617]
					},
					{
						name:'湖北3',
						value:[117.3896, 31.6628]
					}
				]
			},
		]
	}
]

var convertLineData = function(index) {//计算线数据
    var dis = traData[index].dis;
	var result = [];
	for(var i=0;i<dis.length;i++){
		var obj = dis[i];
		var line = obj.path;
		var color = obj.color;
		result.push({
			coords:[].concat(line.map((item)=>item.value)),
			lineStyle:{
				//color:colors[i]
				color:color
			}
		})
	}
	return result;
};

var convertPointData = function(index) {//计算点数据
	var dis = traData[index].dis,posArr = [];
	posArr = posArr.concat(...dis.map((item)=>item.path));
	return filterByName(posArr,'name');
};

function filterByName(data, Name) {   //data是json对象，Name是根据什么字段去重
    var map = {},
      dest = [];
    for (var i = 0; i < data.length; i++) {
        var ai = data[i];
        if (i == 0) {
            dest.push(ai);
        } else {
            var filterData = dest.filter(function (e) {
                return e[Name] == ai[Name];
            })
            if (filterData.length == 0) {
                dest.push(ai);
            }
        }
    }
    return dest;
}

var geoCoordMap = {
    '台湾': [121.5135,25.0308],
    '黑龙江': [127.9688, 45.368],
    '内蒙古': [110.3467, 41.4899],
    '北京市': [116.4551, 40.2539],
    // "吉林": [125.8154, 44.2584],
    // "辽宁": [123.1238, 42.1216],
    // "河北": [114.4995, 38.1006],
    // "天津": [117.4219, 39.4189],
    // "山西": [112.3352, 37.9413],
    // "陕西": [109.1162, 34.2004],
    // "甘肃": [103.5901, 36.3043],
    // "宁夏": [106.3586, 38.1775],
    // "青海": [101.4038, 36.8207],
    // "新疆": [87.9236, 43.5883],
    // "西藏": [91.11, 29.97],
    // "四川": [103.9526, 30.7617],
    // "重庆": [108.384366, 30.439702],
    // "山东": [117.1582, 36.8701],
    // "河南": [113.4668, 34.6234],
    // "江苏": [118.8062, 31.9208],
    // "安徽": [117.29, 32.0581],
    // "湖北": [114.3896, 30.6628],
    // "浙江": [119.5313, 29.8773],
    // "福建": [119.4543, 25.9222],
    // "江西": [116.0046, 28.6633],
    // "湖南": [113.0823, 28.2568],
    // "贵州": [106.6992, 26.7682],
    // "云南": [102.9199, 25.4663],
    // "广东": [113.12244, 23.009505],
    // "广西": [108.479, 23.1152],
    // "海南": [110.3893, 19.8516],
    // '上海': [121.4648, 31.2891],
    
};



export default {
  data() {
    return {
    	chart: null,
    };
  },
  methods: {
  	initChart(){
  		this.chart = echarts.init(this.$refs.chart);

  		var option = {
  			timeline: {
				axisType: 'category',
				orient: 'vertical',
				autoPlay: true,
				inverse: true,
				playInterval: 100000,//每过多少秒切换年
				left: 10,
				right: null,
				top: 20,
				bottom: 20,
				width: 65,
				label: {
					normal: {
						textStyle: {
							color: '#ddd'
						}
					},
					emphasis: {
						textStyle: {
							color: '#fff'
						}
					}
				},
				symbol: 'none',
				lineStyle: {
					color: '#555'
				},
				checkpointStyle: {
					color: '#bbb',
					borderColor: '#777',
					borderWidth: 2
				},
				controlStyle: {
					showNextBtn: true,
					showPrevBtn: true,
					normal: {
						color: '#666',
						borderColor: '#666'
					},
					emphasis: {
						color: '#aaa',
						borderColor: '#aaa'
					}
				},
				data: traData.map((item)=>item.year)
			},
  			baseOption:{
  				animation: true,
                animationDuration: 1000,
                animationEasing: 'cubicInOut',
				animationDurationUpdate: 1000,
				animationEasingUpdate: 'quinticInOut',
				geo: {
					show: true,
			  		map: "china",
			  		roam:true,
			        nameMap:nameMap,
			        // itemStyle: {
           //              normal: {
           //                  borderColor: 'rgba(147, 235, 248, 1)',
           //                  borderWidth: 1,
           //                  areaColor: {
           //                      type: 'radial',
           //                      x: 0.5,
           //                      y: 0.5,
           //                      r: 0.8,
           //                      colorStops: [{
           //                          offset: 0,
           //                          color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
           //                      }, {
           //                          offset: 1,
           //                          color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
           //                      }],
           //                      globalCoord: false // 缺省为 false
           //                  },
           //                  shadowColor: 'rgba(128, 217, 248, 1)',
           //                  // shadowColor: 'rgba(255, 255, 255, 1)',
           //                  shadowOffsetX: -2,
           //                  shadowOffsetY: 2,
           //                  shadowBlur: 10
           //              },
           //              emphasis: {
           //                  areaColor: '#389BB7',
           //                  borderWidth: 0
           //              }
           //          }
			    },
			},
			options:[
			]
		};

		for (var n = 0; n < traData.length; n++) {//渲染每一年的数据，生成点，线，地图数据
		    option.options.push({
		        backgroundColor: '#051b4a',
		        // title: [{
		        //         /* text: '地图',
		        //          subtext: '内部数据请勿外传',
		        //          left: 'center',
		        //          textStyle: {
		        //              color: '#fff'
		        //          }*/
		        //     },
		        //     {
		        //         id: 'statistic',
		        //         text: year[n] + "年数据统计情况",
		        //         left: '75%',
		        //         top: '8%',
		        //         textStyle: {
		        //             color: '#fff',
		        //             fontSize: 30
		        //         }
		        //     }
		        // ],
		        series: [
		            //未知作用
		            {
		                //文字和标志
		                name: 'light',
		                type: 'scatter',
		                coordinateSystem: 'geo',
		                data: convertPointData(n),
		                symbolSize:10,
		                label: {
		                    normal: {
		                        formatter: '{b}',
		                        position: 'top',
		                        show: true
		                    },
		                    emphasis: {
		                        show: true
		                    }
		                },
		                // itemStyle: {
		                //     normal: {
		                //         color: colors[colorIndex][n]
		                //     }
		                // }
		            },
		            //地图
		            {
		                type: 'map',
		                map: 'china',
		                geoIndex: 0,
		                aspectScale: 0.75, //长宽比
		                label: {
		                    normal: {
		                        show: false
		                    },
		                    emphasis: {
		                        show: false,
		                        textStyle: {
		                            color: '#fff'
		                        }
		                    }
		                },
		                roam: true,
		                itemStyle: {
		                    normal: {
		                        areaColor: '#031525',
		                        borderColor: '#FFFFFF',
		                    },
		                    emphasis: {
		                        areaColor: '#2B91B7'
		                    }
		                },
		                animation: false,
		            },
		            //地图点的动画效果
		            // {
		            //     //  name: 'Top 5',
		            //     type: 'effectScatter',
		            //     coordinateSystem: 'geo',
		            //     data: convertPointData(mapData[n].sort(function(a, b) {
		            //         return b.value - a.value;
		            //     }).slice(0, 20)),
		            //     symbolSize: function(val) {
		            //         return val[2] / 10;
		            //     },
		            //     showEffectOn: 'render',
		            //     rippleEffect: {
		            //         brushType: 'stroke'
		            //     },
		            //     hoverAnimation: true,
		            //     label: {
		            //         normal: {
		            //             formatter: '{b}',
		            //             position: 'right',
		            //             show: true
		            //         }
		            //     },
		            //     itemStyle: {
		            //         normal: {
		            //             color: colors[colorIndex][n],
		            //             shadowBlur: 10,
		            //             shadowColor: colors[colorIndex][n]
		            //         }
		            //     },
		            //     zlevel: 1
		            // },
		            //地图线的动画效果
		            {
		                type: 'lines',
		                zlevel: 2,
		                polyline:true,//多点
		                effect: {
		                    show: true,
		                    period: 6, //箭头指向速度，值越小速度越快
                            trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
		                    //symbol: 'arrow', //箭头图标
		                    // symbol:'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
		                    symbol:"image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAhCAYAAADtR0oPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAB2ElEQVQ4T32USU7DQBBFbcKMAAFigcSSg3ADtmzZc0juwQ6JMA9hCBAG81/Rv9W2HEp6cae7fk1tuW6appLVCWwmPTEOw0H2ww8CHHEaiLmERTh9ic/0bBBwiNOiWE7MCwynsXgVH2KCYFYLnNfFhtgSiMj8Lu4TIzFGQLQ1sS12xZFA8CZuxYk4FVdiRDmwIBDtiH1xIA7FsdgTZF4SA5xJTcNE3RSeio1gq4I+a08DAaWtiBhfMpqmP0T0mgXlaL/ZSMY4icx+3JMFRKUUnozPNhHs+TzuwBtEJiJztzEpAlBaXBwCR0bAIZdkQ2xBBC4FbJLhWdhehAUEzBn4A9SMkw0xe87QKolNDh+FjTUZyEzAXJKzcMA7Y0PgDFNLehC2O9HbQ5mBHnDAeEvLKYUA448z8EozTvZ4W8sessAZEHBZ3AWi8h6ikq6ASGSgrCfRvbj8LiFgk0MEzJ9psfaU8Gm9fGVJRKdhMljQyoCx6ZIYLSN1hmhYtEpik5LIgPNNWpdNt0pik2hEZZyXad1bkpt2D0S/EGUPvSW5Bz4pQ0E5UzN4Sjhdi3Pxb9NEcQbqPxNuGEGYv94Iux9ll1ESH2M9wywyWDj9LWOdM9hKZxsOyamqfgG1ZQ8JFbfSTwAAAABJRU5ErkJggg==",
		                    symbolSize: 10, //图标大小
		                },
		                lineStyle: {
		                    normal: {
		                    	//color:'green',
		                        //color: colors[n],
		                        width: 1, //尾迹线条宽度
		                        opacity: 0.5, //尾迹线条透明度
		                        curveness: .3 //尾迹线条曲直度
		                    }
		                },
		                data: convertLineData(n)
		            },
		        ]
		    })
		}
  		this.chart.setOption(option);
  	}
  },
  mounted(){
  	this.initChart();
  }
};
</script>
