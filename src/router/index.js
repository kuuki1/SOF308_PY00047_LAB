import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/lab2.vue';
import HomePage from '../components/lab1.vue'

const routes = [
    { path: '/lab1', component: HomePage },
    { path: '/lab2', component: About }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
