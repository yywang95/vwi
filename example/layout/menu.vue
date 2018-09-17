<template>
  <div class="zp-menu">
    <div class="zp-menu-one">
      <wi-menu :active-name="activename">
        <wi-menu-item name="1-1">
          <router-link to="/" tag="div">
            <i class="iconfont icon-shouye"></i>
            <div class="zp-menu-one-title">首页</div>
          </router-link>
        </wi-menu-item>
        <wi-menu-item name="1-2">
          <router-link to="/build" tag="div">
            <i class="iconfont icon-ziyouanpai"></i>
            <div class="zp-menu-one-title">开发教程</div>
          </router-link>
        </wi-menu-item>
        <wi-menu-item name="1-3">
          <router-link to="/learnCss" tag="div">
            <i class="iconfont icon-canting"></i>
            <div class="zp-menu-one-title">基础样式</div>
          </router-link>
        </wi-menu-item>
        <wi-menu-item name="1-4">
          <router-link to="/learnLayout" tag="div">
            <i class="iconfont icon-zhusu"></i>
            <div class="zp-menu-one-title">布局</div>
          </router-link>
        </wi-menu-item>
        <wi-menu-item name="1-5">
          <router-link to="/learnButton" tag="div">
            <i class="iconfont icon-shouji"></i>
            <div class="zp-menu-one-title">按钮</div>
          </router-link>
        </wi-menu-item>
        <wi-menu-item name="1-6">
          <i class="iconfont icon-shezhi"></i>
          <div class="zp-menu-one-title">设置</div>
        </wi-menu-item>
      </wi-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layoutMenu',
  data () {
    return {
      activename: '1-1'
    }
  }
}
</script>
