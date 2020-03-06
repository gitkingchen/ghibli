<template>
  <div class="app-container">
    <h2>PPT:</h2>
    <br>
    <div
      v-for="(item,index) in list"
      :key="index"
    >
      <a
        target="_blank"
        :href="item.link"
      >{{item.title}}</a>
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
          link: "https://ppt.baomitu.com/d/ee025ba4",
          title: "chrome扩展开发"
        }, {
          link: "https://ppt.baomitu.com/d/cddde09a",
          title: "移动端开发"
        }, {
          link: "https://ppt.baomitu.com/d/7bccf577",
          title: "小程序"
        }, {
          link: "https://ppt.baomitu.com/d/7d9b466b",
          title: "vue cl3"
        }, {
          link: "https://ppt.baomitu.com/d/2795858a",
          title: "antv-G6"
        }, {
          link: "https://ppt.baomitu.com/d/25886adf",
          title: "css grid"
        },


      ]
    };
  },
  methods: {}
};
</script>
