<template>
  <div class="app-container">
    <div ref="chart" style="width:1200px;height:700px;"></div>
  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
<script>
//import echarts from 'echarts';

//改为全局cdn引入了

//import mapRoute from '@/assets/map/mapRoute.json';
//没有引用mapRoute.js ，因为访问不到echarts
echarts.registerMap('mapRoute', mapRoute);
//const echarts = require('echarts');
//import '@/assets/map/mapRoute';
// require('@/assets/map/mapRoute')
//import d from '@/assets/map/china';
//import 'echarts/map/js/mapRoute';

var nameMap = {
	"Tokyo":"东京",
	"Kyoto Prefecture":"京都",
	"Seoul":"首尔",
	"Jeju-do":"济州岛"
}

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
		   	backgroundColor: '#1D346F',
		    geo: {
		        map: "mapRoute",
		        nameMap:nameMap,
		        roam: true,
		        top: 120,
		        label: {
		            normal: {
		                show: false,
		                fontSize: "14",
		                color: "rgba(0,0,0,0.7)"
		            }
		        },
		        itemStyle: {
		            normal: {
		                // shadowBlur: 50,
		                // shadowColor: 'rgba(0, 0, 0, 0.2)',
		                borderColor: "rgba(0, 0, 0, 0.2)"
		            },
		            emphasis: {
		                areaColor: "#f2d5ad",
		                shadowOffsetX: 0,
		                shadowOffsetY: 0,
		                borderWidth: 0
		            }
		        }
		    },
		    series: [{
		        name: "",
		        type: "map",
		        geoIndex: 0,
		        data: [
		        {
			        name: '北京',
			        value: 54
			    },
			    {
			        name: '天津',
			        value: 13
			    },]
		    }]
		};
  		this.chart.setOption(option);
  	}
  },
  mounted(){
  	this.initChart();
  }
};
</script>
