<template>
  <button
    type="button"
    :class="wrapClasses"
    class="wi-btn"
    @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'WiButton',
  computed: {
    wrapClasses () {
      return [
        `wi-btn-${this.$attrs.type || 'info'}`,
        {
          'wi-btn-sm': this.$attrs.size === 'sm',
          'wi-btn-lg': this.$attrs.size === 'lg'
        }
      ]
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('on-click', e)
    }
  }
}
</script>
