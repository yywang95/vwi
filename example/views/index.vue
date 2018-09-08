<template>
  <wi-layout class="ewi-full-page">
    <wi-sider class="ewi-sider" width="270">
      <!-- 导航 -->
      <wi-nav>
        <wi-nav-item>警告Alert</wi-nav-item>
        <wi-nav-item>按钮Button</wi-nav-item>
        <wi-nav-item>下拉菜单Dropdown</wi-nav-item>
        <wi-nav-item>输入框Input</wi-nav-item>
        <wi-nav-item>文本框Textarea</wi-nav-item>
        <wi-nav-item>下拉框Select</wi-nav-item>
        <wi-nav-item>分页Pagination</wi-nav-item>
        <wi-nav-item>徽章Badge</wi-nav-item>
        <!-- <wi-nav-item>标签Tab</wi-nav-item>
        <wi-nav-item>进度条Progressbar</wi-nav-item>
        <wi-nav-item>面板Panel</wi-nav-item>
        <wi-nav-item>模态框Modal</wi-nav-item>
        <wi-nav-item>滚动监听Scrollspy</wi-nav-item>
        <wi-nav-item>提示Tips</wi-nav-item>
        <wi-nav-item>轮播图Carousel</wi-nav-item> -->
      </wi-nav>
    </wi-sider>
    <wi-content>
      <wi-button>按钮</wi-button>
      <wi-button type="primary" disabled>按钮</wi-button>
      <wi-button type="success">按钮</wi-button>
      <wi-button type="warning">按钮</wi-button>
      <wi-button type="danger">按钮</wi-button>
      <wi-button type="dash">按钮</wi-button>
      <wi-button type="text">按钮</wi-button>
      <wi-button type="link">按钮</wi-button>
    </wi-content>
  </wi-layout>
</template>

<script>
export default {
  name: 'Index'
}
</script>
