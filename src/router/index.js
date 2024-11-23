import { createRouter, createWebHistory } from 'vue-router';
import lab2 from '../components/lab2.vue';
import HomePage from '../components/lab1.vue';
import LabBa from '../components/lab3.vue';
import PostVue from '../components/post.vue';
import PostDetail from '../components/postdetail.vue';
import Lab5 from '../components/lab5.vue';
import Lab6 from '../components/lab6.vue';
import Bai4 from '../components/Bai4.vue';

const routes = [
    { path: '/lab1', component: HomePage },
    { path: '/lab2', component: lab2 },
    { path: '/lab3', component: LabBa },
    { path: '/post', component: PostVue },
    { path: '/postdetail', component: PostDetail },
    { path: '/lab5', component: Lab5 },
    { path: '/lab6', component: Lab6 },
    { path: '/Bai4', component: Bai4 },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
