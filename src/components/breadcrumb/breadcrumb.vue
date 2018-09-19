<template>
  <nav>
    <ol class="wi-breadcrumb wi-clearfix">
      <slot></slot>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'WiBreadcrumb',
  computed: {
    wrapClasses () {
      return [
        `wi-alert-${this.$attrs.type || 'info'}`,
        {'wi-alert-dismissible': this.$attrs.dismissable}
      ]
    }
  }
}
</script>
