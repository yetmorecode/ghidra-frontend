import Vue from 'vue'

export function fetchFiles (context) {
    context.commit('setLoading', true)
    Vue.axios.get('http://192.168.1.103/files')
        .then(response => {
            context.commit('setFiles', response.data)
            context.commit('setLoading', false)
        }
    )
}
