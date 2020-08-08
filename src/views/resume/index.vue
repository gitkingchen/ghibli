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
                        >https://jinchensite.com</a
                      >
                    </div>
                    <div>
                      <span>Github：</span>
                      <a
                        href="https://github.com/gitkingchen"
                        target="_blank"
                        title="一个有想法就想建个库"
                        >https://github.com/gitkingchen</a
                      >
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
        </div>

        <div class="resume-box">
          <div class="tit">
            <img
              src="https://p5.ssl.qhimg.com/t017887fc7e29c0b6c1.png"
              alt=""
            />
            <span>吃饭家伙</span>
          </div>

          <div class="chart-container">
            <echart :data="chart.skills.data" :conf="chart.skills.conf">
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
          font-size: 20px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>

<script>
import Echart from "@/components/charts/Echart.vue";
import Aboutme from "@/views/aboutme";
import Mytracks from "@/views/mytracks";
const maxVal = 100;
const skills = [
  {
    text: "Vue",
    val: 85
  },
  {
    text: "Jq",
    val: 85
  },
  {
    text: "React/React native",
    val: 30
  },
  {
    text: "小程序开发（uni-app）",
    val: 79
  },
  {
    text: "移动web开发（Vue/Jq）",
    val: 80
  },
  {
    text: "Echarts",
    val: 85
  },
  {
    text: "D3",
    val: 60
  },
  {
    text: "Antv",
    val: 70
  },
  {
    text: "Threejs",
    val: 20
  },
  {
    text: "Bootstrap",
    val: 80
  },
  {
    text: "Linux",
    val: 64
  },
  {
    text: "Python",
    val: 40
  },
  {
    text: "Nodejs",
    val: 70
  },
  {
    text: "Webpack/gulp",
    val: 68
  },
  {
    text: "Chrome扩展开发",
    val: 50
  },
  {
    text: "计算机网络",
    val: 70
  },
  {
    text: "Nginx",
    val: 67
  },
  {
    text: "Element UI",
    val: 86
  },
  {
    text: "Mongodb",
    val: 70
  },
  {
    text: "Docker",
    val: 76
  }
];
const skillsArr = skills.map(item => {
  item.max = maxVal;
  return item;
});

const skillValArr = skills.map(item => {
  return item.val;
});

export default {
  components: {
    Echart,
    Aboutme,
    Mytracks
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
              splitNumber: 2,
              //center: ["50%"],
              name: {
                textStyle: {
                  color: "#fff",
                  fontSize: 16
                }
              },
              indicator: skillsArr,
              splitArea: {
                // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                show: true,
                areaStyle: {
                  // 分隔区域的样式设置。
                  color: ["rgba(255,255,255,0)", "rgba(255,255,255,0)"] //
                  // 分隔区域颜色。 分隔区域会按数组中颜色的顺序依次循环设置颜色。 默认是一个深浅的间隔色。
                }
              },
              axisLine: {
                //指向外圈文本的分隔线样式
                lineStyle: {
                  color: "#ddd"
                }
              },
              splitLine: {
                lineStyle: {
                  color: "#ccc", // 分隔线颜色
                  width: 1 // 分隔线线宽
                }
              }
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
                          color: "#4BFFFC"
                          // shadowColor: '#4BFFFC',
                          // shadowBlur: 10,
                        },
                        shadowColor: "#4BFFFC",
                        shadowBlur: 10
                      }
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
                              color: "#4BFFFC"
                            },
                            {
                              offset: 0.5,
                              color: "rgba(0,0,0,0)"
                            },
                            {
                              offset: 1,
                              color: "#4BFFFC"
                            }
                          ],
                          globalCoord: false
                        },
                        opacity: 1 // 区域透明度
                      }
                    }
                  }
                ]
              }
            ]
          }
        }
      }
    };
  },
  methods: {},
  mounted() {},
  beforeDestroy() {}
};
</script>
