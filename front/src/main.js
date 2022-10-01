import { createApp } from 'vue'
import App from './index.vue'
import { createRouter, createWebHistory } from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

const routes = [
    {
        path:'/',
        name:'home',
        component: () => import('./views/menuPrincipal.vue')
    },
    {
        path:'/',
        name:'home',
        component: () => import('./views/menuPrincipal.vue')
    }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

createApp(App).use(router).mount('#app')