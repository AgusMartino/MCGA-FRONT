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
        path:'/ConfiguracionPeaje',
        name:'ConfiguracionPeaje',
        component: () => import('./views/ConfiguracionPeaje.vue')
    },
    {
        path:'/informacionPeaje',
        name:'informacionPeaje',
        component: () => import('./views/informacionPeaje.vue')
    },
    {
        path:'/estadoServicios',
        name:'estadoServicios',
        component: () => import('./views/estadoServicios.vue')
    }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

createApp(App).use(router).mount('#app')