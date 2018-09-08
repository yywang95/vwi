<template>
  <transition name="fade">
    <div
      v-if="show"
      :class="wrapClasses"
      class="wi-alert">
      <span
        v-show="$attrs.dismissable"
        class="wi-close"
        @click="handleClose">
        <span>&times;</span>
      </span>
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'WiAlert',
  data () {
    return {
      show: true
    }
  },
  computed: {
    wrapClasses () {
      return [
        `wi-alert-${this.$attrs.type || 'info'}`,
        {'wi-alert-dismissible': this.$attrs.dismissable}
      ]
    }
  },
  methods: {
    handleClose (e) {
      this.show = false
      this.$emit('on-dismiss', e)
    }
  }
}
</script>
