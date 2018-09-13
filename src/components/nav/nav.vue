<template>
  <ul
    :class="wrapClasses"
    class="wi-nav">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'WiNav',
  computed: {
    wrapClasses () {
      return {
        'wi-nav-divider': this.$attrs.divider !== undefined,
        'wi-nav-vertical': this.$attrs.vertical !== undefined
      }
    }
  }
}
</script>
