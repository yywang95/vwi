<template>
  <div class="wi-dropdown">
    <Button
      :type="$attrs.type"
      @on-click="handleTroggle">{{$attrs.text}}</Button>
    <transition class="slide">
      <div
        v-show="shown"
        class="wi-dropdown-menu">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import Button from '../button/button'
export default {
  name: 'WiDropdown',
  components: {Button},
  data () {
    return {
      shown: false
    }
  },
  methods: {
    handleTroggle (e) {
      this.shown = !this.shown
      this.$emit('on-troggle', this.shown, e)
    }
  }
}
</script>
