<template>
  <div>
    <!-- 主题 -->
    <wi-title tag="h3">一、主题</wi-title>
    <p>
      主题色主要分为
      primary<span class="zp-color-box wi-primary-bg"></span>、
      secondary<span class="zp-color-box wi-secondary-bg"></span>、
      success<span class="zp-color-box wi-success-bg"></span>、
      info<span class="zp-color-box wi-info-bg"></span>、
      warning<span class="zp-color-box wi-warning-bg"></span>、
      danger<span class="zp-color-box wi-danger-bg"></span>、
      light<span class="zp-color-box wi-light-bg"></span>、
      dark<span class="zp-color-box wi-dark-bg"></span>
    </p>
    <p>所有涉及到主题的都会设有以上几种主题颜色</p>
    <wi-title tag="h4" class="zp-m-t-8 zp-m-b-8">设置主题背景色</wi-title>
    <p>要给一个元素添加主题背景色，只需在元素的class中添加<span class="zp-text-highlight">wi-主题名-bg</span></p>
    <wi-title tag="h4" class="zp-m-t-8 zp-m-b-8">设置主题字体色</wi-title>
    <p>要给一个元素添加主题背景色，只需在元素的class中添加<span class="zp-text-highlight">wi-主题名-color</span></p>
    <wi-divider></wi-divider>
    <!-- 标题 -->
    <wi-title class="zp-m-t-16" tag="h3">二、标题</wi-title>
    <wi-title tag="h4" class="zp-m-t-8 zp-m-b-8">基础样式</wi-title>
    <wi-panel border>
      <wi-title tag="h5">实例：</wi-title>
      <wi-title tag="h1">h1.标题</wi-title>
      <wi-divider type="dashed"></wi-divider>
      <wi-title tag="h2">h2.标题</wi-title>
      <wi-divider type="dashed"></wi-divider>
      <wi-title tag="h3">h3.标题</wi-title>
      <wi-divider type="dashed"></wi-divider>
      <wi-title tag="h4">h4.标题</wi-title>
      <wi-divider type="dashed"></wi-divider>
      <wi-title tag="h5">h5.标题</wi-title>
      <wi-divider type="dashed"></wi-divider>
      <wi-title tag="small">small.标题</wi-title>
      <wi-divider type="dashed"></wi-divider>
      <wi-title>normal.标题</wi-title>
      <wi-divider type="dashed"></wi-divider>
      <wi-title class="wi-primary-color">自定义样式.标题</wi-title>
      <wi-divider type="dashed"></wi-divider>
      <wi-title underline>带下划线.标题</wi-title>
    </wi-panel>
    <wi-title class="zp-m-t-16" tag="h3">三、分割线</wi-title>
    <wi-title tag="h4" class="zp-m-t-8 zp-m-b-8">基础样式</wi-title>
    <wi-panel border>
      <wi-title class="zp-m-b-16" tag="h5">实例：</wi-title>
      <wi-title tag="small">点分割</wi-title>
      <wi-divider type="dotted"></wi-divider>
      <wi-title tag="small">虚线分割</wi-title>
      <wi-divider type="dashed"></wi-divider>
      <wi-title tag="small">实线分割</wi-title>
      <wi-divider></wi-divider>
      <wi-title tag="small">带文字且文字居左</wi-title>
      <wi-divider text="我是分割线"></wi-divider>
      <wi-title tag="small">带文字且文字居中</wi-title>
      <wi-divider text="我是分割线" position="center"></wi-divider>
      <wi-title tag="small">带文字且文字居右</wi-title>
      <wi-divider text="我是分割线" position="right"></wi-divider>
    </wi-panel>
  </div>
</template>

<script>
export default {
  name: 'PageLearnCss'
}
</script>
