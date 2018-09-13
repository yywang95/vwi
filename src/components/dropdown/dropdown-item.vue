<template>
  <div
    :class="wrapClasses"
    class="wi-dropdown-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WiDropdownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    wrapClasses () {
      return {
        'wi-disabled': this.disabled
      }
    }
  }
}
</script>
