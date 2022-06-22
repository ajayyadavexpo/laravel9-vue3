import { createWebHistory, createRouter } from 'vue-router';
import home from './pages/home.vue';
import login from './pages/login.vue';
import register from './pages/register.vue';

const routes = [
    {
        path : '/',
        name : 'Home',
        component : home
    },
    {
        path : '/login',
        name : 'Login',
        component : login
    },
    {
        path : '/register',
        name : 'Register',
        component : register
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
