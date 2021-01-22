<template>
  <q-page class="fit flex">
    <div class="q-pa-md fit">
      <q-table
        v-if="projectOpened"
        title="Files"
        :data="files"
        :columns="fileColumns"
        dense
        row-key="pathname"
        :pagination="initialPagination"
      >
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search"></q-icon>
            </template>
          </q-input>
          <q-btn class="q-ml-sm" color="primary" label="Change Project" @click="onProjectChange" />
          <q-btn class="q-ml-sm" color="primary" :loading="projectClosing" label="Close Project" @click="onProjectClose" />
        </template>
      </q-table>
      <div v-else>
        <p>Currently there is no project open. Please open a project first.</p>
        <q-btn color="primary" label="Open Project" @click="projectDialogOpen = true" />
      </div>
      
    </div>
     <div class="q-pa-md q-gutter-sm">
    <q-dialog content-class="no-shadow" position="top" v-model="projectDialogOpen">
      <q-card class="no-shadow text-white dialog-card">
        <q-bar class="dialog-title-bar">
          Select Project
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section class="q-pt-none">
          <q-table
            :data="projects"
            :columns="projectColumns"
            :pagination="initialPagination"
            @row-click="onProjectSelected"
            hide-bottom
            >
            <template v-slot:body-cell-name="props">
              <q-td :props="props">
                <div :title="props.row.name" class="name-text">{{ props.row.name }}</div>
              </q-td>
            </template>
            <template v-slot:body-cell-open="props">
              <q-td :props="props">
                <q-icon v-if="props.row.open" name="check" />
              </q-td>
            </template>
            <template v-slot:body-cell-path="props">
              <q-td :props="props">
                <div :title="props.row.path" class="path-text">{{ props.row.path }}</div>
              </q-td>
            </template>
          </q-table>
        </q-card-section>
      </q-card>
    </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { date, format } from 'quasar'

export default {
  name: 'Files',
  computed: {
    files: function() {
      return this.$store.state.file.files
    },
    projectOpened: function () {
      return this.$store.state.project.projectOpened
    },
    projects: function() {
      return this.$store.state.project.projects
    },
    projectClosing: function () {
      return this.$store.state.project.closing
    }
  },
  mounted: function() {
    this.$store.dispatch('file/fetchFiles')
  },
  methods: {
    onProjectSelected: async function (event, row) {
      this.$store.dispatch('project/openProject', row.name)
    },
    onProjectChange: function () {
      this.projectDialogOpen = true
    },
    onProjectClose: function () {
      this.$store.dispatch('project/closeProject')
    }
  },
  data: function() {
    return {
      projectDialogOpen: false,
      initialPagination: {
        page: 1,
        rowsPerPage: 0
      },
      filter: "",
      projectColumns: [
        { name: 'open', label: '', field: 'open', align: 'center' },
        { name: 'name', label: 'Name', field: 'name', align: 'left', sortable: true },
        { name: 'path', label: 'Path', field: 'path', align: 'left' },
        { name: 'locked', label: 'Locked', field: 'locked', align: 'center', format: v => (v == true ? 'Yes' : 'No') }
      ],
      fileColumns: [
        { name: 'name', label: 'Name', field: 'name', sortable: true, align: 'left', sortable: true },
        { name: 'type', label: 'Type', field: 'contentType', align: 'left', sortable: true },
        { name: 'format', label: 'Format', field: r => { return r.meta["Executable Format"] || ""}, align: 'left', sortable: true},
        { name: 'language', label: 'Language', field: r => { return r.meta["Language ID"] || ""}, align: 'left', sortable: true },
        { name: 'compiler', label: 'Compiler', field: r => { return r.meta["Language ID"] || ""}, align: 'left', sortable: true },
        { name: 'size', label: 'Size', field: r => { return parseInt(r.meta["# of Bytes"]) || 0}, align: 'left', format: v => format.humanStorageSize(v), sortable: true },
        { name: 'modified', 
          label: 'Modified', 
          field: 'lastModified', 
          align: 'left', 
          format: v => date.formatDate(v, 'YYYY-MM-DD HH:mm:ss'), 
          sortable: true
        }
      ]
    }
  }
}
</script>

<style>
  .dialog-card {
    width: 50%;
  }

  .dialog-title-bar {
    height: 50px;
  }

  .path-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 200px;
  }

  .name-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100px;
  }
</style>
