<style lang="less">
    @import './index.less';
</style>
<template>
    <div id="documentpageglobal">
        <div class="content_box">
            <h3>一、Vue.directive自定义指令:Vue.directive()</h3>
            <div class="detail">
                <div v-changeColor="color">{{meaasge}}</div>
                <button @click="changeColor">全局指令——改变颜色</button>
                <br/>
                <button @click="unBind">解绑</button>
                <br/>
                <div v-changeColor2="color2">{{meaasge2}}</div>
                <button @click="changeColor2">全局指令——改变颜色</button>
            </div>
            <h3>二、自定义指令的生命周期</h3>
            <div class="detail">
                自定义指令有五个生命周期（也叫钩子函数）。
                <br/>

                1、bind:只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个绑定时执行一次的初始化动作。
                <br/>
                2、inserted:被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于document中）。
                <br/>
                3、update:被绑定于元素所在的模板更新时调用，而无论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。
                <br/>
                4、componentUpdated:被绑定元素所在模板完成一次更新周期时调用。
                <br/>
                5、unbind:只调用一次，指令与元素解绑时调用。
            </div>
            <h3>三、Vue.extend构造器的延伸</h3>
            <div class="detail">
                经常服务于Vue.component用来生成组件，可以简单理解为当在模板中遇到该组件名称作为标签的自定义元素时，会自动调用“扩展实例构造器”来生产组件实例，并挂载到自定义元素上。
                <br/>
                <!-- <author></author> -->
                <!-- <div class="author"></div> -->
              
            </div>
            <h3>四、Vue.set全局操作</h3>
            <div class="detail">
                Vue.set 的作用就是在构造器外部操作构造器内部的数据、属性或者方法。比如在vue构造器内部定义了一个count为1的数据，我们在构造器外部定义了一个方法，要每次点击按钮给值加1.就需要用到Vue.set。
                <br/>
                <p>为什么要有Vue.set的存在?</p>
                <p>由于Javascript的限制，Vue不能自动检测以下变动的数组。
                    当你利用索引直接设置一个项时，vue不会为我们自动更新。
                    当你修改数组的长度时，vue不会为我们自动更新。
                </p>
                <span>{{count}}</span>
                <button @click="add">以1递增</button>
                <p>
                    <ul>
                        <li v-bind:key="index" v-for="(item, index) in arr">{{item}}</li>
                    </ul>
                </p>
                <button @click="changeArrData">改变数组的值</button>
            </div>
            <h3>五、Vue 生命周期</h3>
            <div class="detail">
                Vue一共有10个生命周期函数，我们可以利用这些函数在vue的每个阶段都进行操作数据或者改变内容。
                <br/>
            </div>
            <h3>六、Vue Component组件</h3>
            <candy-global here="山西" job="前端发开"></candy-global>
            <candy-local  like="编程" country="临猗" @click.native="changeComponent"></candy-local>
            <h3>七、Vue 的Component 标签 </h3>
            <div class="detail">
                component标签是Vue框架自定义的标签，它的用途就是可以动态绑定我们的组件，根据数据的不同更换不同的组件。
                <br/>
                <component v-bind:is="who"></component>
                <button @click="($event)=>changeComponent($event)">切换组件</button>
            </div>
            <h3>八、Vue 的delimiters 选项</h3>
            <div class="detail">
                delimiters的作用是改变我们插值的符号。Vue默认的插值是双大括号{{}}。但有时我们会有需求更改这个插值的形式。
            </div>
            <h3>九、Vue 的混合mixins和继承extends</h3>
            <div class="detail">
                两个都可以理解为继承，mixins接收对象数组（可理解为多继承），extends接收的是对象或函数（可理解为单继承）
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import _ from 'lodash'; 

    // var AuthorExtend = Vue.extend({
    //     data: function () {
    //         return {
    //             authorName: 'Candy Yang',
    //             authorUrl: 'http://www.jspang.com'
    //         };
    //     },
    //     template: '<p><a>{{authorName}}</a></p>'
    // });
    // new AuthorExtend().$mount('author');
    //new AuthorExtend().$mount('.author');

    //全局混入
    Vue.mixin({
        updated:function(){
            console.log('我是全局被混入的');
        }
    })

    //extend 继承钩子函数updated
    var extend={
        updated:function(){
            console.log("extends 数据放生变化,变化成"+this.who+".");
        }
    }
    //mixin 继承钩子函数updated
    var addLog1={
        updated:function(){
            console.log("mixin1 数据放生变化,变化成"+this.who+".");
        }
    }
    var addLog2={
        updated:function(){
            console.log("mixin2 数据放生变化,变化成"+this.who+".");
        }
    }

    const extend2 = {
        data () {
            return {
                meaasge: 'vue注册全局的自定义指令directive',
                meaasge2: 'vue注册局部的自定义指令directive',
                color: 'green',
                color2: 'blue',
                count: 1,
                arr: ['ssss', 'xxxfghx', 'vvvertrev'],
                who: 'componentB'
            }
        }
    }
    const mixin1 = {
        data () {
            return {
                meaasge: 'vue注册全局的自定义指令directive',
                meaasge2: 'vue注册局部的自定义指令directive',
                color: 'green',
                color2: 'blue',
                count: 1,
                arr: ['fff', 'xxxx', 'vvvv'],
                who: 'componentB'
            }
        }
    }
    const mixin2 = {
        data () {
            return {
                meaasge: 'vue注册全局的自定义指令directive1234',
                meaasge2: 'vue注册局部的自定义指令directive2345t s',
                color: 'green',
                color2: 'blue',
                count: 1,
                arr: ['ddddd', 'rrrrr', 'vvyyyyyvv'],
                who: 'componentC'
            }
        }
    }


    //注册一个全局组件
    Vue.component('candy-global',{
        template:`<div style="color:red;">全局化注册的candy-global标签, candy, 来自{{here}}, 工作是{{job}}</div>`,
        props: {
            here: { default: '上海', required: true },
            job: { default: '测试' }
        },
    })

    let cityComponent = {
        template:`<span style="color:pink;">来自{{country}}</span>`,
        props: {
            country: { default: '中国', required: true },
        },
    }

    let candyLocalComponent = {
        template: `
            <div style="color:blue;">
                <span>局部注册的candy-local标签, candy喜欢{{like}},</span>
                <city :country="country"></city>
            </div>`,
        components: {
            city: cityComponent
        },
        props: {
            like: { default: '学习', required: true },
            country: { default: '中国', required: true },
        },
    }

    let outData = {
        meaasge: 'vue注册全局的自定义指令directive',
        meaasge2: 'vue注册局部的自定义指令directive',
        color: 'green',
        color2: 'blue',
        count: 1,
        arr: ['aaa', 'bbb', 'ccc'],
        who: 'componentA'
    };
    
    export default {
        name: 'documentpageglobal',
        // data () {
        //     return outData;
        // },
        template:`<h1 style="color:red">我是选项模板</h1>`,
        methods: {
            changeColor: function () {
                this.color = this.color === 'green' ? 'red' : 'green';
            },
            changeColor2: function () {
                this.color2 = this.color2 === 'blue' ? 'yellow' : 'blue';
            },
            unBind: function () {
                console.log('this', this.$destroy)
                this.$destroy();
            },
            add: function() {
                console.log('----', this)
                //outData.count++;
                Vue.set(this, 'count', 4);

            },
            changeArrData: function(){
                //outData.arr[1] = 'ddd';
                Vue.set(this.arr, 1, '2345');
            },
            changeComponent: function($event){
                console.log('$event', $event, $event.target);
                this.who = this.who==='componentA'?this.who='componentB':this.who==='componentB'?this.who='componentC':this.who='componentA';
            }
        },
        // delimiters:['${','}'],
        mixins:[mixin1, mixin2],
        extends: extend2,
        directives: {
            // 注册一个局部的自定义指令
            changeColor2: {
                bind: function (el, binding) { // 被绑定
                    console.log('局部的自定义指令1 - bind');
                },
                inserted: function () { // 绑定到节点
                    console.log('局部的自定义指令2 - inserted');
                },
                update: function (el, binding) { // 组件更新
                    console.log('el', el);
                    el.style.color = binding.value;
                    console.log('局部的自定义指令3 - update');
                },
                componentUpdated: function () { // 组件更新完成
                    console.log('局部的自定义指令4 - componentUpdated');
                },
            }
        },
        components: {
            "candy-local": candyLocalComponent,
            "componentA": {
                template:`<div>I'm componentA</div>`
            },
            "componentB": {
                template:`<div>I'm componentB</div>`
            },
            "componentC": {
                template:`<div>I'm componentC</div>`
            },

        },
        beforeCreate:function(){
            console.log('1-beforeCreate 初始化之后');
        },
        created:function(){
            console.log('2-created 创建完成');
        },
        beforeMount:function(){
            console.log('3-beforeMount 挂载之前');
        },
        mounted:function(){
            console.log('4-mounted 被创建');
        },
        beforeUpdate:function(){
            console.log('5-beforeUpdate 数据更新前');
        },
        updated:function(){
            console.log('6-updated 被更新后');
        },
        activated:function(){
            console.log('7-activated');
        },
        deactivated:function(){
            console.log('8-deactivated');
        },
        beforeDestroy:function(){
            console.log('9-beforeDestroy 销毁之前');
        },
        destroyed:function(){
            console.log('10-destroyed 销毁之后')
        }
    };
</script>