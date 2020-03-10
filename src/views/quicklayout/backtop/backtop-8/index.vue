<template >
  <div style="padding:30px;">
    <!--priview-->
    <div>
      <div>
        内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>
        内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>
        内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>
        内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>
      </div>
      <br><br><br>
      <button type="button" id="btn">回到顶部</button>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div>
          内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>
          内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>
          内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>
          内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>
        </div>
        <br><br><br>
        <button type="button" id="btn">回到顶部</button>

      </script>

      <pre><code class="language-js">
        let Obtn = document.getElementById('btn');
        const scrollToTop = () => {
          const c = document.documentElement.scrollTop || document.body.scrollTop;
          if (c > 0) {
            window.scrollTo({
              left:0,
              top:c - c/5,//可以改变速度
              behavior:'auto'
              //smooth与requestAnimationFrame 冲突
            });
            window.requestAnimationFrame(scrollToTop);
          }
        }

        Obtn.onclick = function(){
          scrollToTop()
        } 
      </code></pre>

    </div>
    <!--code-->

  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "@/styles/layout-common.scss";
</style>
<script>
import Prism from "prismjs";

export default {
  data() {
    return {};
  },
  mounted() {
    Prism.highlightAll();
    this.bindEvent();
  },
  methods: {
    bindEvent() {
      let Obtn = document.getElementById('btn');
      const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
          window.scrollTo({
            left:0,
            top:c - c/5,
            behavior:'auto'
            //smooth与requestAnimationFrame 冲突
          });
          window.requestAnimationFrame(scrollToTop);
        }
      }

      Obtn.onclick = function(){
        scrollToTop()
      }
    }
  }
};
</script>

