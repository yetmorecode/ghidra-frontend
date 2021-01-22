export function setLoading (state, loading) {
    state.loading = loading
}

export function setClosing (state, closing) {
    state.closing = closing
}

export function updateProjects (state, projects) {
    state.projects = projects
    let hasOpen = false;
    projects.forEach(p => {
        if (p.open === true) {
            state.openProject = p
            state.projectOpened = true
            hasOpen = true
        }
    })
    if (!hasOpen) {
        state.openProject = null
        state.projectOpened = false
    }
}