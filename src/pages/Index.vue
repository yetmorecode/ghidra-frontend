<template>
  <q-page class="fit flex">
    <golden-layout v-model="uiState" :show-popout-icon="false" class="hscreen" @beforeItemDestroyed="onDestroy">
      <gl-stack>
        <gl-component 
          v-for="view in openViews"
          :key="view.title"
          :title="view.title"
          >
          {{ view.caption }}
        </gl-component>
      </gl-stack>
    </golden-layout>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  watch: {
    uiState: function (val) {
      var state = JSON.stringify(val);
      localStorage.setItem('ghidra-frontend.ui.goldenLayoutState', state);
    }
  },
  computed: {
    openViews() {
      return this.$store.state.ui.views.filter((view) => view.opened)
    }
  },
  methods: {
    onDestroy(event) {
      const origin = event.origin || event
      if (origin.config.type === 'component') {
        this.$store.dispatch('ui/closeViewByTitle', origin.config.title)
      }
    }
  },
  data: function() {
    return {
      uiState: localStorage.getItem('ghidra-frontend.ui.goldenLayoutState') ? JSON.parse(localStorage.getItem('ghidra-frontend.ui.goldenLayoutState')) : null
    }
  }
}
</script>

<style>
  .hscreen {
    width: 100%;
  }
</style>
