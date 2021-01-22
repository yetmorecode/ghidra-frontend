export function updateData (state, data) {
    console.log(state, data)
    state.name = data.name
    state.release = data.release
    state.version = data.version
    state.buildDate = data.buildDate
}
