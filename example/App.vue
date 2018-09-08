<template>
  <div id="app">
    <i class="glyphicon glyphicon-backward"></i>
  </div>
</template>

<script>
import Index from './views/index'
export default {
  name: 'App',
  components: {Index},
  methods: {
    click (e) {
      console.log('aaa')
    }
  }
}
</script>
