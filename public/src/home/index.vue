<style lang="less" scoped>
.home-page {
    padding: 0 20px;
    text-align: left;
    height: 560px !important;
}
</style>


</style>

<template>
    <div class="home-page">
        <h3>一、路由跳转</h3>
        <div class="detail">
            <p>1、类似浏览器前进、后退的功能</p>
            <button @click="goFront">前进</button>
            <button @click="goback">后退</button>
            <button @click="goNews">去新闻页面</button>
            
        </div>
        <h3>二、路由中的钩子函数</h3>
        <div class="detail">
            <p>1、在路由文件中我们只能写一个beforeEnter,就是在进入此路由配置时</p>
            函数有三个参数：
            <p>to: 路由将要跳转的路径信息，信息是包含在对象里边的。</p>
            <p>from: 路径跳转前的路径信息，也是一个对象的形式。</p>
            <p>next: 路由的控制参数，常用的有next(true)和next(false)。</p>
            <p>2、写在模板中的钩子函数</p>
            <p>beforeRouteEnter：在路由进入前的钩子函数。</p>
            <p>beforeRouteLeave：在路由离开前的钩子函数。</p>
        </div>
        <h3>三、vue-router如何参数传递</h3>
        <div class="detail">
            <p>1、用name、path传递参数： $route.name、$route.path</p>
            <p>获取导航名称：{{ $route.name}}</p>
            <p>获取导航路径：{{ $route.path}}</p>
            <p>2、通过 标签中的to传参</p>
            <p>获取参数：{{ $route.params.name}} {{ $route.params.position}}</p>
            <p>3、一个页面多个router</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home-page',
    methods: {
        goFront(){
            this.$router.go(1);
        },
        goback(){
            this.$router.go(-1);
        },
        goNews(){
            this.$router.push('/news/child/12');
        }
    }
}
</script>