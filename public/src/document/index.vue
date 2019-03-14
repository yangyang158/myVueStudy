<style lang="less">
    @import './index.less';
</style>

<template>
    <div id="document-page">
        <ul class="menus">
            <li><a href="#/document/basic">vue内部指令了解</a></li> 
            <li><a href="#/document/globalAPI">vue全局API</a></li>    
            <li><a href="#/document/instance-attr">vue实例属性</a></li>    
        </ul>  
        <div class="content">
            <transition name="fade" mode="out-in">
                <router-view />
            </transition>
        </div>
    </div>
</template>
