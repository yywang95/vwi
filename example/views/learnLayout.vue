<template>
  <div>
    <p>框架提供了几种快速布局的方式</p>
    <!-- 左侧固定，右侧自适应< -->
    <wi-title tag="h3">一、左侧固定，右侧自适应</wi-title>
    <p>要求设置左侧容器的宽度</p>
    <div class="zp-m-t-16">
      <wi-panel fixedleft border>
        <wi-panel>
          <div class="zp-content-box wi-primary-bg learn-layout-box-width">左侧</div>
        </wi-panel>
        <wi-panel>
          <div class="zp-content-box wi-info-bg">右侧</div>
        </wi-panel>
      </wi-panel>
    </div>
    <wi-divider></wi-divider>
    <!-- space between -->
    <wi-title class="zp-m-t-16" tag="h3">二、两端对齐</wi-title>
    <p>要求设置每个容器的宽度，剩余空间平分在各个框之间，超出换行显示</p>
    <div class="zp-m-t-16">
      <wi-panel justify>
        <wi-panel>
          <div class="zp-content-box wi-primary-bg learn-layout-box-width"></div>
        </wi-panel>
        <wi-panel>
          <div class="zp-content-box wi-info-bg learn-layout-box-width"></div>
        </wi-panel>
        <wi-panel>
          <div class="zp-content-box wi-success-bg learn-layout-box-width"></div>
        </wi-panel>
        <wi-panel>
          <div class="zp-content-box wi-warning-bg learn-layout-box-width"></div>
        </wi-panel>
      </wi-panel>
    </div>
    <wi-divider></wi-divider>
    <!-- border -->
    <wi-title class="zp-m-t-16" tag="h3">三、带边框容器</wi-title>
    <div class="zp-m-t-16">
      <wi-panel border>
        <div class="zp-content-box"></div>
      </wi-panel>
    </div>
    <wi-divider></wi-divider>
    <!-- header -->
    <wi-title class="zp-m-t-16" tag="h3">四、带头部容器</wi-title>
    <div class="zp-m-t-16">
      <wi-panel border>
        <template slot="header">
          <wi-title tag="h3">标题</wi-title>
        </template>
        <div class="zp-content-box"></div>
      </wi-panel>
    </div>
    <wi-divider></wi-divider>
    <!-- 栅格 -->
    <wi-title class="zp-m-t-16" tag="h3">五、栅格布局 24栅格</wi-title>
    <div class="zp-m-t-16">
      <wi-row>
        <wi-col span="2">
          <div class="zp-content-box wi-primary-bg">2</div>
        </wi-col>
        <wi-col span="2">
          <div class="zp-content-box wi-success-bg">2</div>
        </wi-col>
        <wi-col span="2">
          <div class="zp-content-box wi-warning-bg">2</div>
        </wi-col>
        <wi-col span="1">
          <div class="zp-content-box wi-info-bg">1</div>
        </wi-col>
        <wi-col span="3">
          <div class="zp-content-box wi-danger-bg">3</div>
        </wi-col>
      </wi-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageLearnLayout'
}
</script>
