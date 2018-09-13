<template>
  <li
    :class="wrapClasses"
    class="wi-menu-item"
    @click="handleClick">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'WiMenuItem',
  inject: ['changeActiveName'],
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
  },
  methods: {
    handleClick (e) {
      this.active = true
      this.changeActiveName(this.name)
    },
    changeActive (name) {
      
    }
  }
}
</script>
