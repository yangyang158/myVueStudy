import Vue from 'vue';
import Router from 'vue-router';
import Home from './home/index.vue';
import Document from './document/index.vue';
import Basic from './document/basics/index.vue';
import GlobalAPI from './document/global-api/index.vue';
import InstanceAttr from './document/instance-attr/index.vue';

import ComponentList from './component/component-list.js';
import RegisterDirective from './register-directive.js';

Vue.use(Router);
Vue.use(ComponentList);

export default new Router({
    routes: [{
        path: '/home',
        name: 'Home',
        component: Home
    }, {
        path: '/document',
        name: 'Document',
        component: Document,
        children: [{
            path: '/document/basic',
            name: 'Basic',
            component: Basic,
        }, {
            path: '/document/globalAPI',
            name: 'GlobalAPI',
            component: GlobalAPI,
        }, {
            path: '/document/instance-attr',
            name: 'InstanceAttr',
            component: InstanceAttr,
        }]
    }, {
        path: '/',
        redirect: '/home'
    }]
});