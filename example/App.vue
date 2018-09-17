<template>
  <div id="app">
    <Top></Top>
    <Menu></Menu>
    <Content>
      <router-view></router-view>
    </Content>
  </div>
</template>

<script>
import Top from './layout/top'
import Menu from './layout/menu'
import Content from './layout/content'
export default {
  name: 'App',
  components: {Top, Menu, Content}
}
</script>
