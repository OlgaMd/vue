import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import User from './components/User';
import Users from './components/Users';
import Home from './components/Home';

Vue.use(Router);

const NotFound = { template: '<h2>Страница не найдена</h2>' }

const routes = [
    { path: '/', component: Home },
    { path: '/users', component: Users },
    { path: '/user', component: User },
    { path: '*', component: NotFound }
];

const router = new Router({
    mode: 'history',
    routes: routes
});

new Vue({
    el: '#app',
    render: h => h(App),
    router
});
