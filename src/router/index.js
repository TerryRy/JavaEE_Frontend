// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
// import { match } from 'path-to-regexp';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: () => import('@/views/HomePage.vue')
    },
    {
        path: '/login',
        name: 'LoginP',
        component: () => import('@/components/login/LoginP.vue')
    },
    {
        path: '/register',
        name: 'RegisterP',
        component: () => import('@/components/login/RegisterP.vue')
    },
    {
        path: '/blogDetail',
        name: 'BlogDetail',
        component: () => import('@/views/Blog/BlogDetail.vue')
    },
    {
        path: '/blogEditor',
        name: 'BlogEditor',
        component: () => import('@/views/Blog/BlogEditor.vue')
    },
    {
        path: '/other',
        name: 'OtherPage',
        component: () =>import('@/components/HelloWorld.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
