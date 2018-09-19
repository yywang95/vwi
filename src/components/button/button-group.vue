<template>
  <div
    :class="wrapClasses"
    class="wi-btn-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WiButtonGroup',
  computed: {
    wrapClasses () {
      return [
        {
          'wi-btn-group-sm': this.$attrs.size === 'sm',
          'wi-btn-group-lg': this.$attrs.size === 'lg'
        }
      ]
    }
  }
}
</script>
