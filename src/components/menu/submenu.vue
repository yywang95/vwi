<template>
  <li class="wi-menu-submenu">
    <div class="wi-menu-submenu-title" @click="handleTroggle">
      <slot name="title"></slot>
      <i :class="iconClasses" class="wi-icon iconfont"></i>
    </div>
    <transition name="slide">
      <ul
        v-show="spread"
        class="wi-menu">
        <slot></slot>
      </ul>
    </transition>
  </li>
</template>

<script>
export default {
  name: 'WiSubmenu',
  computed: {
    iconClasses () {
      return this.spread ? 'icon-xiangshangjiantou' : 'icon-xiangxiajiantou'
    }
  },
  data () {
    return {
      spread: true
    }
  },
  methods: {
    handleTroggle (e) {
      this.spread = !this.spread
      this.$emit('on-troggle', this.spread, e)
    }
  }
}
</script>
