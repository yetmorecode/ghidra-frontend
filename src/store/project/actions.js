import Vue from 'vue'

export function fetchProjects (context) {
    context.commit('setLoading', true)
    Vue.axios.get('http://192.168.1.103/projects')
        .then(response => {
            context.commit('updateProjects', response.data)
            context.commit('setLoading', false)
        }
    )
}

export function openProject (context, name) {
    Vue.axios.get('http://192.168.1.103/projects/open/' + name)
        .then(response => {
            context.commit('updateProjects', response.data)
            context.dispatch('file/fetchFiles', null, {root:true})
        }
    )
}

export function closeProject (context, name) {
    context.commit('setClosing', true)
    Vue.axios.get('http://192.168.1.103/projects/close')
        .then(response => {
            context.commit('updateProjects', response.data)
            context.commit('setClosing', false)
        }
    )
}
