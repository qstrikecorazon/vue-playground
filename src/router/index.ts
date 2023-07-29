import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/paragraph',
            name: 'paragraph',
            component: () => import('@/views/ParagraphView.vue')
        },
        {
            path: '/application',
            name: 'application',
            component: () => import('@/views/Pixi.vue')
        }
    ]
})

export default router
