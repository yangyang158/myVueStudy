import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 添加共享值
let state = {
    count: 10,
};
// 添加 同步改变 state的方法
const mutations = {
    add (state, num) {
        state.count += num;
    },
    reduce (state) {
        state.count--;
    }
};
// 在获取数据之前进行的一种再编辑
const getters = {
    count: function (state) {
        state.count += 100;
        return state.count;
    }
};
// actions是可以调用Mutations里的方法， 异步改变 state的方法
const actions = {
    addAction (context) {
        context.commit('add', 10);
        setTimeout(function () {
            context.commit('reduce');
        }, 5000);
        console.log('----我比reduce先执行----');
    },
    reduceAction ({ commit }) {
        commit('reduce');
    }
};

// Vuex——状态管理器 设置共用的属性
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
});