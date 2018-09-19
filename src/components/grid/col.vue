<template>
  <div
    :class="wrapClasses"
    class="wi-col">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WiCol',
  computed: {
    wrapClasses () {
      return [
        this.$attrs.span ? `wi-col-${this.$attrs.span}` : ''
      ]
    }
  }
}
</script>
