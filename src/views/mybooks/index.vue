<template>
  <div class="app-container">
    <h2>我的书单:</h2>
    <br>
    <div
      v-for="(item,index) in list"
      :key="index"
    >
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
div {
  margin-bottom: 10px;
  a {
    color: dodgerblue;
    text-decoration: underline;
    font-size: 18px;
  }
}
</style>
<script>

export default {
  data() {
    return {
      list: [
        {
          title: "《精通CSS + DIV》"
        }, {
          title: "《javascript DOM 编程艺术》"
        }, {
          title: "《锋利的jquery》"
        }, {
          title: "《javascript 权威指南》"
        }, {
          title: "《javascript 高级程序设计》"
        }, {
          title: "《html5与css3权威指南》"
        },{
          title: "《编写高质量代码》"
        },{
          title: "《javascript 语言精粹》"
        },{
          title: "《响应式web设计》"
        },{
          title: "《活法》"
        },{
          title: "《干法》"
        },{
          title: "《做最好的自己》"
        },{
          title: "《HTTP 权威指南》"
        },


      ]
    };
  },
  methods: {}
};
</script>
