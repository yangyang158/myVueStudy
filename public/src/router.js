import Vue from 'vue';
import Router from 'vue-router';

import Home from './home/index.vue';
import HomeLeft from './home/left.vue';
import HomeRight from './home/right.vue';

import Document from './document/index.vue';
import Basic from './document/basics/index.vue';
import GlobalAPI from './document/global-api/index.vue';
import InstanceAttr from './document/instance-attr/index.vue';

import Pos from './pos/index.vue';

import ComponentList from './component/component-list.js';
import RegisterDirective from './register-directive.js';

import News from './news/index.vue';
import Error from './error.vue';

Vue.use(Router);
Vue.use(ComponentList);

export default new Router({
    // mode: 'hash',
    routes: [{
        path: '/home',
        name: 'Home',
        components: {
            default: Home,
            left: HomeLeft,
            right: HomeRight
        },
        beforeEnter: (to, from, next) => {
            console.log('我进入了主页');
            console.log(to);
            console.log(from);
            next();// 不掉用的next(true/false),页面被拦截, 不会继续渲染
            // 跳往别的页面
            // next({
            //     path: '/document/basic'
            // });
        }
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
        }],
        redirect: '/document/basic'
    }, {
        path: '/news/:type/:num(\\d+)',
        name: 'News',
        component: News
    }, {
        path: '/',
        redirect: '/pos'
    }, {
        path: '/pos',
        component: Pos
    }, {
        // 找不到页面时的配置
        path: '*',
        component: Error
    }]
});