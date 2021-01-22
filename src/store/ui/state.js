export default function () {
  const views = [
    {
      opened: true,
      hidden: false,
      title: 'Memory Map',
      caption: 'Show & edit memory layout',
      icon: 'calendar_view_day'
    },
    {
      opened: true,
      hidden: false,
      title: 'Listing',
      caption: 'Assembly listing',
      icon: 'notes'
    },
    {
      opened: true,
      hidden: false,
      title: 'Decomplier',
      caption: 'Decompile into C',
      icon: 'local_bar'
    },
    {
      opened: true,
      hidden: false,
      title: 'Datatype Manager',
      caption: 'Create & Show Datatypes',
      icon: 'view_compact'
    },
    {
      opened: false,
      hidden: false,
      title: 'Symbol Tree',
      caption: 'All defined symbols',
      icon: ''
    },
    {
      opened: false,
      hidden: false,
      title: 'Datatype Editor',
      caption: 'Edit Datatypes',
      icon: ''
    },
    {
      opened: false,
      hidden: false,
      title: 'Function Calls',
      caption: 'Outgoing and incoming functions',
      icon: ''
    },
    {
      opened: false,
      hidden: false,
      title: 'Strings',
      caption: 'Defined Strings',
      icon: ''
    }
  ]
  const states = localStorage.getItem('ghidra-frontend.ui.viewOpenStates') ? JSON.parse(localStorage.getItem('ghidra-frontend.ui.viewOpenStates')) : {}
  const statefulViews = views.map((v) => ({ 
    ...v, 
    opened: states[v.title] !== undefined ? states[v.title] : v.opened
  }))
  return {
    views: statefulViews
  }
}
