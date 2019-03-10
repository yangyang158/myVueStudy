import Vue from 'vue';

// 绑定全局指令
// Vue.directive('changeColor', function (el, binding, vnode) {
//     el.style.color = binding.value;
// });
Vue.directive('changeColor', {
    bind: function (el, binding) { // 被绑定
        console.log('1 - bind');
    },
    inserted: function () { // 绑定到节点
        console.log('2 - inserted');
    },
    update: function (el, binding) { // 组件更新
        el.style.color = binding.value;
        console.log('3 - update');
    },
    componentUpdated: function () { // 组件更新完成
        console.log('4 - componentUpdated');
    },
    unbind: function () { // 解绑
        console.log('5 - unbind');
    }
});