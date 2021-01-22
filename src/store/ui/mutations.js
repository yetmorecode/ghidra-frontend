export function closeView (state, title) {
    state.views.filter((view) => view.title === title).forEach((v) => { v.opened = false })
}

export function saveViewStates (state) {
    const states = {}
    state.views.forEach((v) => { states[v.title] = v.opened })
    var s = JSON.stringify(states);
    console.log(states)
    localStorage.setItem('ghidra-frontend.ui.viewOpenStates', s);
}
