import Vue from 'vue'

export function closeViewByTitle (context, title) {
    context.commit('closeView', title)
    context.commit('saveViewStates')
}
