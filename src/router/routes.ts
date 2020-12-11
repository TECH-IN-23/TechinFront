import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'LOGIN', component: () => import('pages/LOGIN/LOGIN.vue') },
      { path: 'HOME', component: () => import('pages/HOME/HOME.vue') },
      { path: 'PRODUTOS', component: () => import('pages/PRODUTOS/PRODUTOS.vue') },
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
