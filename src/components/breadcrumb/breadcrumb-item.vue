<template>
  <li
    :class="wrapClasses"
    class="wi-breadcrumb-item">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'WiBreadcrumbItem',
  computed: {
    wrapClasses () {
      return [
        {'wi-active': this.$attrs.active}
      ]
    }
  }
}
</script>
