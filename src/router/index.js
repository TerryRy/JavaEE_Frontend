// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
// import { match } from 'path-to-regexp';

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: () => import('@/components/HelloWorld.vue')
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
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
