<template>
  <div class="app-container">
    <p>90后前端大叔，不知不觉，自己都大叔了。</p>
    <p>本科学的自动化专业，当时复课一年，没想到后来却报了这个坑爹的专业。</p>
    <p>4年基本课满，感觉和高中没啥区别，重要的是完全不知道这个是干嘛的。</p>
    <p>每天就是不断的上课，做实验，最后还要焊个收音机。。。最后考试都是懵逼的，但不及格还要花时间重修，哎，简直是坑爹的！</p>
    <p>后来在业余时间加了个大学生创业团队，开始是负责做运营工作，没事发发帖子，搞搞SEO，当时特别崇拜开发这个大学生网站的大牛，他是学校计算机中心主席。</p>
    <p>觉得还是想学学技术，但我又没搞过计算机，计算机对于我们专业是选修。所以也有自知之明，打算从html入手，正好当时看百度知道问问这个咋学，帖子里流行html5是未来标准的段子很多，所以我就开始买书，看视频，下载各种psd练练手，慢慢地有了自己的作品，虽然专业课还得学习，但当时的我感觉自己着了魔
    似的学习技术，占用了我很多的专业课时间，大三整个一年都是在自习室度过的。</p>
    <p>报应就是大三的专业课有一半多是挂科的。哎。最后差点拿不到学位证了。</p>
    <p>后来到了大四，还没事往北京的名牌大学里跑校招，印象最深的是，在中科院里和一群985,211的应届生一起参加大型互联网公司的笔试和机试，虽然最后自我感觉答的挺好，第一个交了卷，但后来也就没后来了。。</p>
    <p>就这样，后来误打误撞进了我毕业后第一家公司 Domob（多盟），这个公司基本都是百度出来的，学习到了很多。</p>
    <p>然后干了一年到了猎豹（当时的金山网络），那时移动互联网风生水起，2年间换了5次工位，3个部门。</p>
    <p>2016年底跳槽到360，至今马马虎虎做个小前端，打打酱油。</p>

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
