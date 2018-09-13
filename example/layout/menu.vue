<template>
  <div class="zp-menu">
    <div class="zp-menu-one">
      <wi-menu :active-name="activename">
        <wi-menu-item name="1-1">
          <i class="iconfont icon-shouye"></i>
          <div class="zp-menu-one-title">首页</div>
        </wi-menu-item>
        <wi-menu-item name="1-2">
          <i class="iconfont icon-ziyouanpai"></i>
          <div class="zp-menu-one-title">列表</div>
        </wi-menu-item>
        <wi-menu-item name="1-3">
          <i class="iconfont icon-jinnang"></i>
          <div class="zp-menu-one-title">权限</div>
        </wi-menu-item>
        <wi-menu-item name="1-4">
          <i class="iconfont icon-shezhi"></i>
          <div class="zp-menu-one-title">设置</div>
        </wi-menu-item>
      </wi-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutMenu',
  data () {
    return {
      activename: '1-1'
    }
  },
  methods: {
    change () {
      var arr = ['1-1', '1-2', '2-1', '2-2']
      this.activename = arr[this.activeIndex++]
      console.log(this.activename)
    }
  }
}
</script>
