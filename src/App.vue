<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>

import 'golden-layout/src/css/goldenlayout-light-theme.css'
import 'golden-layout/src/css/goldenlayout-dark-theme.css'

export default {
  name: 'App',
  mounted: function() {
    this.$store.dispatch('application/fetchGhidraData')
    this.$store.dispatch('project/fetchProjects')
  }
}
</script>
