<template>
  <div
    :class="wrapClasses"
    class="wi-panel">
    <div v-if="showHeader" class="wi-panel-header">
      <slot name="header"></slot>
    </div>
    <div class="wi-panel-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WiPanel',
  data () {
    return {
      showHeader: this.$slots.header
    }
  },
  computed: {
    wrapClasses () {
      return [
        {
          'wi-panel-border': this.$attrs.border !== undefined,
          'wi-panel-fixed-left': this.$attrs.fixedleft !== undefined,
          'wi-panel-justify': this.$attrs.justify !== undefined
        }
      ]
    }
  }
};
</script>
