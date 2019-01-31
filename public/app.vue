<style>
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
#app .menu li{
    display: inline-block;  
    margin: 0 20px;
    line-height: 60px;
}
#app .content{
    height: calc(100vh - 71px);
    padding-top: 10px;
}
#app .content > *{
    height: 100%;
    overflow: auto;
}
</style>

<template>
    <div id="app">
        <ul class="menu">
            <li><a href="#/home">主页</a></li>
            <li><a href="#/document">文档</a></li>
        </ul>
        <div class="content">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>


