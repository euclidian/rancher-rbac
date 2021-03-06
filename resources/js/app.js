/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

import VueRouter from 'vue-router'
import UserManagementComponent from "./components/UserManagementComponent.vue";
import RancherProjectsComponent from "./components/RancherProjectsComponent.vue";
import StackRancherComponent from "./components/StackRancherComponent.vue";
import StackTemplateComponent from "./components/StackTemplateComponent.vue";
import StackConfigComponent from "./components/StackConfigComponent.vue";
import HalamanListComponent from "./components/menu/HalamanListComponent.vue";
import ServiceAssignmentComponent from "./components/ServiceAssignmentComponent.vue";
import NotFoundComponent from "./components/NotFoundComponent.vue";

window.Vue = require('vue');
window.Vuetify = require('vuetify');
Vue.use(Vuetify)
Vue.use(VueRouter)
window.axios = require('axios');

window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
};

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/NotFoundComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/NotFoundComponent.vue').default);
Vue.component('home-component', require('./src/App.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const router = new VueRouter({
    mode: 'history',
    routes: [
    	{
            path: '/usermanagement',
            name: 'usermanagement',
            component: UserManagementComponent
        },
        {
            path: '/rancherprojects',
            name: 'rancherprojects',
            component: RancherProjectsComponent
        },
        {
            path: '/stack',
            name: 'stack',
            component: StackRancherComponent
        },
        {
            path: '/stack_template',
            name: 'stack_template',
            component: StackTemplateComponent
        },
        {
            path: '/stack_config',
            name: 'stack_config',
            component: StackConfigComponent
        },
        {
            path: '/menu',
            name: 'menu',
            component: HalamanListComponent
        },
        {
            path: '/service_assignment',
            name: 'service_assignment',
            component: ServiceAssignmentComponent
        },
        {
            path: '/*',
            name: 'not_found',
            component: NotFoundComponent
        }
    ],
});

const app = new Vue({
    el: '#app',
    router,
});