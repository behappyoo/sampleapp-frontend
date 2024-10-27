
import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/view/HomeComponent.vue';
import AboutComponent from './components/view/AboutComponent.vue';

const routes = [
    { path: '/', component: HomeComponent },
    { path: '/about', component: AboutComponent },
];

const router = createRouter({
    history: createWebHistory(), // history 모드 설정
    routes,
});

export default router;