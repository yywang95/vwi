<template>
  <li
    :class="wrapClasses"
    class="wi-menu-item">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'WiMenuItem',
  props: {
    name: {
      type: [String, Number],
      required: true
    }
  },
  data () {
    return {
      active: false
    }
  },
  computed: {
    wrapClasses () {
      return {
        'wi-active': this.active
      }
    }
  }
}
</script>
