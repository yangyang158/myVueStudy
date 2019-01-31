import Vue from 'vue'
import Router from 'vue-router'
import Home from './home/index.vue'
import Document from './document/index.vue'
import ComponentList from './component/component-list.js'

Vue.use(Router)
Vue.use(ComponentList)

export default new Router({
    routes: [{
        path: '/home',
        name: 'Home',
        component: Home
    }, {
        path: '/document',
        name: 'Document',
        component: Document
    }, {
        path: '/',
        redirect: '/home'
    }]
})
