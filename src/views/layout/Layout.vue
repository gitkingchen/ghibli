<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>
    <sidebar class="sidebar-container"/>
    <div class="main-container">
      <navbar/>
      <app-main/>
    </div>
    <back-to-top
      :custom-style="myBackToTopStyle"
      :visibility-height="300"
      :back-position="0"
      transition-name="fade"
    />
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
import BackToTop from "@/components/BackToTop";
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  data(){
    return {
        myBackToTopStyle: {
          right: "50px",
          bottom: "50px",
          width: "40px",
          height: "40px",
          "border-radius": "4px",
          "line-height": "45px", // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
          background: "#e7eaf1" // 按钮的背景颜色 The background color of the button
        }
    }
  },
  components: {
    Navbar,
    Sidebar,
    AppMain,
    BackToTop
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('CloseSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>
