<style lang="less" scoped>
.news{
    padding: 0 20px;
    text-align: left;
}

</style>

<template>
    <div class="news">
        <h2>一、url上传变量</h2>
        <p>新闻类型：{{$route.params.type}}, 数量：{{$route.params.num}}</p>
        <h2>二、通过Vuex添加共享字段</h2>
        <p>公共字段count：{{$store.state.count}}</p>
        <p>公共字段count：{{count}}</p>
        <button @click="$store.commit('add', 2)">+</button>
        <button @click="reduce">-</button>
        <h2>三、状态对象赋值给内部对象, 也就是把stroe.js中的值，赋值给我们模板里data中的值</h2>
        <p>实际开发中我们不喜欢使用$store.state.count去获取属性值，希望跟调用模板里的属性一样即调用count。</p>
        三种方式实现:
        <p>通过computed的计算属性直接赋值</p>
        <p>通过mapState的对象来赋值</p>
        <p>通过mapState的数组来赋值</p>
        <h2>四、actions异步修改状态</h2>
        <button @click="addAction">+</button>
        <button @click="reduceAction">-</button>
    </div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';
import store from '../vuex/store.js';

export default {
    name: 'news',
    store,
    // computed: {
    //     count(){
    //         return this.$store.state.count
    //     }
    // },
    // computed:mapState({
    //     count: state=>state.count
    // }),
    computed: {
        ...mapState(["count"]),
        //...mapGetters(["count"])
    },
    methods: {
        ...mapMutations(['add','reduce']),
        ...mapActions(['addAction', 'reduceAction'])
    },
    beforeRouteEnter:(to,from,next)=>{
        console.log("准备进入路由模板");
        next();
    },
    beforeRouteLeave: (to, from, next) => {
        console.log("准备离开路由模板");
        next();
    }
}
</script>