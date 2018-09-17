<template>
  <component
    :is="tagname"
    :class="wrapClasses"
    class="wi-title">
    <slot></slot>
  </component>
</template>

<script>
// 默认可选标题列表
const tagList = ['h1', 'h2', 'h3', 'h4', 'h5', 'small']

export default {
  name: 'WiTitle',
  computed: {
    tagname () {
      return tagList.indexOf(this.$attrs.tag) > -1 ? this.$attrs.tag : 'div'
    },
    wrapClasses () {
      return [
        `wi-title-${this.tagname}`,
        {
          'wi-title-underline': this.$attrs.underline !== undefined
        }
      ]
    }
  }
};
</script>
