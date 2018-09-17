<template>
  <div>
    <!-- 左侧固定，右侧自适应< -->
    <wi-title tag="h3">按钮</wi-title>
    <wi-title tag="h4" class="zp-m-t-8 zp-m-b-8">主题色按钮</wi-title>
    <wi-panel>
      <wi-button type="primary">primary</wi-button>
      <wi-button type="secondary">secondary</wi-button>
      <wi-button type="success">success</wi-button>
      <wi-button type="info">info</wi-button>
      <wi-button type="warning">warning</wi-button>
      <wi-button type="danger">danger</wi-button>
      <wi-button type="light">light</wi-button>
      <wi-button type="dark">dark</wi-button>
      <wi-button type="link">link</wi-button>
    </wi-panel>
    <wi-title tag="h4" class="zp-m-t-8 zp-m-b-8">边框按钮</wi-title>
    <wi-panel>
      <wi-button type="outline-primary">primary</wi-button>
      <wi-button type="outline-secondary">secondary</wi-button>
      <wi-button type="outline-success">success</wi-button>
      <wi-button type="outline-info">info</wi-button>
      <wi-button type="outline-warning">warning</wi-button>
      <wi-button type="outline-danger">danger</wi-button>
      <wi-button type="outline-light">light</wi-button>
      <wi-button type="outline-dark">dark</wi-button>
    </wi-panel>
    <wi-title tag="h4" class="zp-m-t-8 zp-m-b-8">禁用按钮</wi-title>
    <wi-panel>
      <wi-button type="primary" disabled>primary</wi-button>
      <wi-button type="secondary" disabled>secondary</wi-button>
      <wi-button type="success" disabled>success</wi-button>
      <wi-button type="info" disabled>info</wi-button>
      <wi-button type="warning" disabled>warning</wi-button>
      <wi-button type="danger" disabled>danger</wi-button>
      <wi-button type="light" disabled>light</wi-button>
      <wi-button type="dark" disabled>dark</wi-button>
      <wi-button type="link" disabled>link</wi-button>
    </wi-panel>
    <wi-panel>
      <wi-button type="outline-primary" disabled>primary</wi-button>
      <wi-button type="outline-secondary" disabled>secondary</wi-button>
      <wi-button type="outline-success" disabled>success</wi-button>
      <wi-button type="outline-info" disabled>info</wi-button>
      <wi-button type="outline-warning" disabled>warning</wi-button>
      <wi-button type="outline-danger" disabled>danger</wi-button>
      <wi-button type="outline-light" disabled>light</wi-button>
      <wi-button type="outline-dark" disabled>dark</wi-button>
    </wi-panel>
    <wi-title tag="h4" class="zp-m-t-8 zp-m-b-8">按钮大小</wi-title>
    <wi-panel>
      <wi-button type="primary" size="lg">大按钮</wi-button>
      <wi-button type="secondary">正常大小</wi-button>
      <wi-button type="success" size="sm">小按钮</wi-button>
    </wi-panel>
    <wi-title tag="h4" class="zp-m-t-8 zp-m-b-8">按钮组</wi-title>
    <wi-panel>
      <wi-button-group>
        <wi-button size="lg">按钮</wi-button>
        <wi-button size="lg">按钮</wi-button>
        <wi-button size="lg">按钮</wi-button>
      </wi-button-group>
      <wi-button-group>
        <wi-button>按钮</wi-button>
        <wi-button>按钮</wi-button>
        <wi-button>按钮</wi-button>
      </wi-button-group>
      <wi-button-group>
        <wi-button size="sm">按钮</wi-button>
        <wi-button size="sm">按钮</wi-button>
        <wi-button size="sm">按钮</wi-button>
      </wi-button-group>
    </wi-panel>
  </div>
</template>

<script>
export default {
  name: 'PageLearnButton'
}
</script>
