<style lang="less" scoped>
    @import './index.less';
</style>

<template>
    <div id="InstanceAttr">
        <div class="content_box">
            <h3>一、Vue挂载——$mount()</h3>
            <div class="detail">
                {{message}}
            </div>
            <h3>二、Vue销毁——$destroy()</h3>
            <div class="detail">
                <button @click="destroy">销毁</button>
            </div>
            <h3>三、Vue更新——$forceUpdate()</h3>
            <div class="detail">
                <button @click="update">更新</button>
            </div>
            <h3>四、Vue数据修改——$nextTick()</h3>
            <div class="detail">
                <p>当Vue构造器里的data值被修改完成后会调用这个方法，也相当于一个钩子函数吧，和构造器里的updated生命周期很像。</p>
                <button @click="changeData">数据修改</button>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import Vue from 'vue';
// var jspang = Vue.extend({
//     template:`<p>{{message}}</p>`,
//     data: function(){
//         return {
//             message:'Hello ,I am JSPang'
//         }
//     }
// })
// var vm = new jspang().$mount("#InstanceAttr")
export default {
    name: "InstanceAttr",
    // el: "InstanceAttr",
    data() {
        return {
            message: 111
        }
    },
    methods: {
        destroy: function(){
            this.$destroy();
        },
        update: function(){
            this.$forceUpdate();
        },
        changeData: function(){
            this.message = '数据被更改';
            this.$nextTick(function(){
                console.log('message更新完后我被调用了');
            })
        }
    },
    destroyed: function(){
        console.log('生命周期——销毁')
    },
    updated: function(){
        console.log('生命周期——更新')
    },
}
</script>

