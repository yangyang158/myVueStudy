import Vue from 'vue';
import Input from './input/index.vue';
import RadioGroup from './radio-group/index.vue';

export default {
    install: function (Vue) {
        Vue.component('Input', Input);
        Vue.component('RadioGroup', RadioGroup);
    }
};