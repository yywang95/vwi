<template>
  <div id="app">
    <div class="wi-container-fluid wi-container-justify">
      <div class="wi-container-fluid wi-col-xs-3 zp-content-box"></div>
      <div class="wi-container-fluid wi-col-xs-3 zp-content-box"></div>
      <div class="wi-container-fluid wi-col-xs-3 zp-content-box"></div>
      <div class="wi-container-fluid wi-col-xs-3 zp-content-box"></div>
    </div>
    <div class="wi-glyphicon glyphicon-glass"></div>

    <wi-alert>警告</wi-alert>
    <wi-alert type="primary" dismissible>警告</wi-alert>
    <wi-alert type="secondary">警告</wi-alert>
    <wi-alert type="success">警告</wi-alert>
    <wi-alert type="warning" dismissible>警告</wi-alert>
    <wi-alert type="danger">警告</wi-alert>
    <wi-alert type="danger" dismissible>警告</wi-alert>
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
