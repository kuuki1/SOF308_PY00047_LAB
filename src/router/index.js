import { createRouter, createWebHistory } from 'vue-router';
import lab2 from '../components/lab2.vue';
import HomePage from '../components/lab1.vue';
import LabBa from '../components/lab3.vue';
import PostVue from '../components/post.vue'
// import PostDetail from '../components/postdetail.vue'

const routes = [
    { path: '/lab1', component: HomePage },
    { path: '/lab2', component: lab2 },
    { path: '/lab3', component: LabBa },
    { path: '/post', component: PostVue },
    // { path: '/postdetail', component: PostDetail }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
