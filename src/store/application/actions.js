import Vue from 'vue'

export function fetchGhidraData (context) {
    Vue.axios.get('http://192.168.1.103/application')
        .then(response => {
            context.commit('updateData', response.data)
        }
    )
}
