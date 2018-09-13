<template>
  <ul class="wi-menu">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'WiMenu',
  provide () {
    return  {
      changeActiveName: this.changeActiveName
    }
  },
  props: {
    activeName: {
      type: [String, Number]
    }
  },
  watch: {
    activeName (value) {
      this.currentActiveName = value
    }
  },
  data () {
    return {
      currentActiveName: this.activeName
    }
  },
  methods: {
    changeActiveName (name) {
      console.log(name)
    }
  }
}
</script>
