<template>
  <ul class="wi-menu">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'WiMenu',
  props: {
    activeName: {
      type: [String, Number]
    }
  },
  watch: {
    activeName (value) {
      this.currentActiveName = value
    }
  },
  data () {
    return {
      currentActiveName: this.activeName
    }
  }
}
</script>
