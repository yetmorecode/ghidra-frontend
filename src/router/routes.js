
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/about', component: () => import('pages/About.vue') },
      { path: '/settings', component: () => import('pages/Settings.vue') },
      { path: '/projects', component: () => import('pages/Settings.vue') },
      { path: '/files', component: () => import('pages/Files.vue') },
      { path: '/views', component: () => import('pages/Settings.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
