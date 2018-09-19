<template>
  <div
    :class="wrapClasses"
    class="wi-divider">
    <div
      v-if="textValue"
      class="wi-divider-placeholder">
      <span
        v-text="textValue"
        class="wi-text"></span>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'WiDivider',
  props: {
    text: {
      type: [String, Number]
    }
  },
  computed: {
    textValue () {
      return this.text ? this.text : this.$attrs.text ? this.$attrs.text : ''
    },
    wrapClasses () {
      return [
        this.$attrs.type ? `wi-divider-${this.$attrs.type}` : '',
        {
          'wi-divider-text': this.textValue && this.textValue.length,
          'wi-divider-text-center': this.$attrs.position === 'center',
          'wi-divider-text-right': this.$attrs.position === 'right'
        }
      ]
    }
  }
}
</script>
