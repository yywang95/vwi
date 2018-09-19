<template>
  <span
    :class="wrapClasses"
    class="wi-badge">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'WiBadge',
  computed: {
    wrapClasses () {
      return [
        `wi-badge-${this.$attrs.type || 'info'}`,
        {
          'wi-badge-pill': this.$attrs.pill !== undefined
        }
      ]
    }
  }
}
</script>
