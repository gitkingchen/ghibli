<template>
  <div class="app-container">
    <p>90后前端大叔</p>
    <p>本科，自动化专业</p>
    <p>大学期间加入大学生创业团队，开启我的码农生涯，起初负责运营工作，SEO，觉得还是想学学技术，从HTML开始学起，读书，视频教学，论坛，博客，实习，也因此占据了很多专业课时间，大三基本在自习室度过</p>
    <p>即便挂了柯南，仍挂科8门。经后期努力，幸运地躲过了大清考</p>
    <p>大四到处跑北京名牌大学校招，参加大型互联网公司的笔试和机试，积累经验，弥补不足</p>
    <p>2013.6 毕业，入职Domob（多盟），跟随一个不错的Leader学习前端</p>
    <p>2014.4 跳槽到猎豹（当时的金山网络），那时移动互联网风生水起，2年间换了5次工位，3个部门，同时接触了很多人，经历并学习很多</p>
    <p>2016.11 跳槽到360，至今仍在前端领域打打酱油，时不时学习后端其他领域</p>

    <div class="contact">有想骚扰我的，可以加我哈~</div>
      <img src="@/assets/weixin.jpg" width="200">
    </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-container{
      width: 80%;
      margin:0 auto;
      line-height: 1.6;

      .contact{
        margin: 20px 0;
        font-weight: bold;
      }

      p{
        padding-left: 20px;
        position: relative;
        &:before{
          position:absolute;
          top:7px;
          left:0;
          content:'';
          width:10px;
          height:10px;
          background-color: #000;
          border-radius: 50%;
        }
      }
  }

</style>
<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {}
};
</script>
