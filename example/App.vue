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
    <wi-alert type="primary" :dismissible="a">警告<wi-badge>徽章</wi-badge></wi-alert>
    <wi-alert type="secondary">警告<wi-badge>徽章</wi-badge></wi-alert>
    <wi-alert type="success">警告</wi-alert>
    <wi-alert type="warning">警告</wi-alert>
    <wi-alert type="danger">警告</wi-alert>
    <wi-alert type="danger">警告<wi-badge>徽章</wi-badge></wi-alert>
    <wi-badge>徽章</wi-badge>
    <wi-badge>徽章</wi-badge>
    <wi-badge type="danger" pill>徽章</wi-badge>
    <wi-breadcrumb>
      <wi-breadcrumb-item>首页</wi-breadcrumb-item>
      <wi-breadcrumb-item>列表</wi-breadcrumb-item>
      <wi-breadcrumb-item active>详情</wi-breadcrumb-item>
    </wi-breadcrumb>
    <wi-button type="primary" disabled>按钮</wi-button>
    <wi-button type="secondary" disabled>按钮</wi-button>
    <wi-button type="success">按钮</wi-button>
    <wi-button type="danger">按钮</wi-button>
    <wi-button type="warning">按钮</wi-button>
    <wi-button type="info">按钮</wi-button>
    <wi-button type="light">按钮</wi-button>
    <wi-button type="dark">按钮</wi-button>
    <wi-button type="link"><i class="wi-glyphicon glyphicon-glass"></i></wi-button>
    <wi-button type="outline-primary">按钮</wi-button>
    <wi-button type="outline-secondary">按钮</wi-button>
    <wi-button type="outline-success">按钮</wi-button>
    <wi-button type="outline-danger">按钮</wi-button>
    <wi-button type="outline-warning">按钮</wi-button>
    <wi-button type="outline-info">按钮</wi-button>
    <wi-button type="outline-light">按钮</wi-button>
    <wi-button type="outline-dark">按钮</wi-button>
    <wi-button type="outline-link"><i class="wi-glyphicon glyphicon-glass"></i></wi-button>
    <wi-button type="outline-dark" size="sm">按钮</wi-button>
    <wi-button type="outline-dark" size="lg">按钮</wi-button>
    <wi-button type="outline-dark" block>按钮</wi-button>
    <wi-button type="outline-dark" block>按钮</wi-button>
    <wi-button-group>
      <wi-button>按钮1</wi-button>
      <wi-button>按钮2</wi-button>
      <wi-button>按钮3</wi-button>
    </wi-button-group>
    <wi-button-group>
      <wi-button type="outline-warning">按钮1</wi-button>
      <wi-button type="outline-warning">按钮2</wi-button>
      <wi-button type="outline-warning">按钮3</wi-button>
    </wi-button-group>
  </div>
</template>

<script>
import Top from './layout/top'
import Menu from './layout/menu'
import Content from './layout/content'
export default {
  name: 'App',
  components: {Top, Menu, Content},
  data () {
    return {
      a: true
    }
  }
}
</script>
