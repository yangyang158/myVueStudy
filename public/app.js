import Vue from 'vue';
import router from './src/router.js';
import App from './app.vue';

let app = document.createElement('div');
app.setAttribute('id', 'app');
document.body.appendChild(app);

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});