<style scope>
@import './css/iconfont.css';
* {
    padding: 0;
    margin: 0;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#app .menu{
    border-bottom: 1px solid #ccc;
}
#app .menu a{
    display: inline-block;  
    margin: 0 20px;
    line-height: 59px;
}
#app > .content{
    height: calc(100vh - 60px);
}
#app .content > *{
    height: 100%;
    overflow: auto;
}
.fade-enter {
    opacity: 0;
}
.fade-leave{
    opacity: 1;
}
.fade-enter-active{
    transition: opacity .5s;
}
.fade-leave-active{
    opacity: 0;
    transition: opacity .5s;
}
</style>

<template>
    <div id="app">
        <ul class="menu">
            <router-link :to="{name:'Home',params:{position:'前端开发', name: 'candy'}}">主页</router-link>
            <router-link to="/document">文档</router-link>
            <router-link to="/news/sport/1234">新闻</router-link>
            <router-link to="/pos">demo</router-link>
        </ul>
        <div class="content">
            <transition name="fade" mode="out-in">
                <router-view />
            </transition>
            <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
            <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
        </div>
    </div>
</template>

<script>


export default {
  name: 'App'
}
</script>


