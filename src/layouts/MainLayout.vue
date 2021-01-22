<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <span v-if="projectOpened"></span>
          <span v-else>{{ appName }} {{ appVersion }}</span>
        </q-toolbar-title>

        <div v-if="projectOpened"
          :title="appName + ' ' + appVersion + ' - ' + appRelease + ' - ' + appBuildDate">
          {{ appName }} {{ appVersion }}
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header>
          {{ appName }}
        </q-item-label>
        <EssentialRouterLink
          title="All Files"
          caption="Import &amp; Open files"
          icon="folder"
          link="/files"
        />

        <q-item-label header>
          Open Views
        </q-item-label>
        <div v-if="openViews.length > 0">
          <EssentialRouterLink
            v-for="link in openViews"
            :key="link.title"
            v-bind="link"
          />
        </div>
        <div v-else>
          <EssentialRouterLink
            title="Open View"
            caption="Open a view and start working"
            icon="add_to_queue"
            link="/views"
          />
        </div>

        <q-item-label header>
          Application &amp; Links
        </q-item-label>
        <EssentialRouterLink
          title="Settings"
          caption="Customize Ghidra"
          icon="settings"
          link="/settings"
        />
        <EssentialLink
          title="Github"
          caption="NationalSecurityAgency/ghidra"
          icon="contact_support"
          link="https://github.com/NationalSecurityAgency/ghidra"
        />
        <EssentialLink
          title="Twitter"
          caption="#ghidra"
          icon="rss_feed"
          link="https://twitter.com/hashtag/GHIDRA?f=live"
        />
        <EssentialRouterLink
          title="Welcome"
          caption="News &amp; About"
          icon="tour"
          link="/about"
        />

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import EssentialRouterLink from 'components/EssentialRouterLink.vue'

export default {
  name: 'MainLayout',
  components: { EssentialLink, EssentialRouterLink },
  computed: {
    appName() {
      return this.$store.state.application.name
    },
    appRelease() {
      return this.$store.state.application.release
    },
    appVersion() {
      return this.$store.state.application.version
    },
    appBuildDate() {
      return this.$store.state.application.buildDate
    },
    openViews() {
      return this.$store.state.ui.views.filter((view) => view.opened)
    },
    projectOpened() {
      return this.$store.state.project.projectOpened
    }
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
