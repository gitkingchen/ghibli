<template>
    <div class="chart-container">
        <empty-box v-if="noData"></empty-box>
        <div
            v-else
            ref="container"
            class="chart-body"
        ></div>
    </div>
</template>
<script>
import { debounce } from "@/utils";

var colors = [];
for (let i = 0; i < 12; i++) {
    colors.push({
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: `#02FBDC`, // 0% 处的颜色
            },
            {
                offset: 1,
                color: "#253E3B", // 100% 处的颜色
            },
        ],
        global: false, // 缺省为 false
    });
}

export default {
    name: "echart",
    props: {
        data: {
            required: true,
        },
        conf: {
            type: Object,
        },
    },
    data() {
        return {
            myChart: null,
            noData: false,
        };
    },
    watch: {
        data(val) {
            this.changeData(val);
        },
    },
    methods: {
        init() {
            let dom = this.$refs.container;
            this.$emit("before-init", echarts);
            this.myChart = echarts.init(dom, "dark");
            this.myChart.setOption(
                Object.assign(
                    {
                        // backgroundColor: "transparent",
                        backgroundColor: {
                            type: "radial",
                            x: 0.5,
                            y: 0.5,
                            r: 0.5,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "#21262E", // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "transparent", // 100% 处的颜色
                                },
                            ],
                            global: false, // 缺省为 false
                        },
                        color: colors,
                    },
                    this.conf
                )
            );
            this.$emit("init", this.myChart);
        },
        changeData(data) {
            if (!data) {
                this.noData = true;
                this.clear(); //没有数据的时候清空当前配置
                return;
            }
            if (!this.myChart) {
                this.init();
            }
            this.myChart.setOption(data);
        },
        onResize() {
            return debounce(
                () => {
                    this.myChart && this.myChart.resize();
                },
                50,
                false
            )();
        },
        clear() {
            this.myChart && this.myChart.clear(); //没有数据的时候清空当前配置
            this.myChart = null;
        },
    },
    mounted() {
        // this.$set(this.conf,)
        this.changeData(this.data);
        window.addEventListener("resize", this.onResize);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.onResize);
    },
};
</script>
<style>
.chart-container,
.chart-body {
    display: block;
    width: 100%;
    height: 100%;
}
.chart-container canvas,
.chart-container svg {
    width: 100%;
    height: 100%;
    display: block;
}
</style>

