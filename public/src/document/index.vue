<style>
    @import './index.css';
</style>

<template>
    <div id="document-page">
        <div class="content_box">
            <h3>一、HTML 属性中的值应使用 v-bind 指令</h3>
            <h4>1、v-bind:title</h4>
            <div class="detail">
                <span v-bind:title="titleMsg">给元素绑定title属性</span>
            </div>
            <h4>2、v-bind:class、v-bind:id</h4>
            <div class="detail">
                修改颜色<input type="checkbox" v-model="changeColor" />
                <span v-bind:class="{'red': changeColor}">给元素动态绑定class属性</span>
            </div>
            <h4>3、v-bind:href</h4>
            <div class="detail">
                <a v-bind:href="hrefUrl">百度</a>
            </div>
            <h4>4、v-bind:style</h4>
            <div class="detail" v-bind:style="{ color: 'green', fontSize: '20px' }">行内样式</div>
        </div>
        <div class="content_box">
            <h3>二、条件语句，根据条件渲染相应元素</h3>
            <h4>1、v-if、v-else、v-else-if、v-show</h4>
            <div class="detail border">
                选中的：{{selectedType}}
                <input type="radio" value="A" v-model="selectedType" /> A <br/>
                <input type="radio" value="B" v-model="selectedType" /> B <br/>
                <input type="radio" value="C" v-model="selectedType" /> C <br/>
                <input type="radio" value="D" v-model="selectedType" /> 其他 <br/>
                <div v-if="selectedType.includes('A')">
                    A
                </div>
                <div v-else-if="selectedType.includes('B')">
                    B
                </div>
                <div v-else-if="selectedType.includes('C')">
                    C
                </div>
                <div v-else>
                    Not A/B/C
                </div>
            </div>
            <h4>2、v-show</h4>
            <div class="detail border">
                <input type="checkbox" v-model="showEle" />显示
                <div v-show="showEle">
                    喔喔喔喔
                </div>
            </div>
        </div>
        <div class="content_box">
            <h3>三、循环语句 v-for</h3>
            <h4>1、循环数组</h4>
            <div class="detail">
                <span v-for="(name, index) in nameList">
                    {{index}}_{{name}}
                    <span v-if="index+1 !== nameList.length">、</span>
                </span>
            </div>
            <h4>2、循环对象</h4>
            <div class="detail border">
                <span v-for="value in personObject">{{value}}、</span>
                <br/>
                <span v-for="(value, key, index) in personObject">{{index}}_{{key}}: {{value}}, </span>
            </div>
            <h4>3、循环数字</h4>
            <div class="detail">
                <span v-for="value in 6">{{value}}、</span>
                <br/>
            </div>
        </div>
        <div class="content_box">
            <h3>四、事件监听 v-on</h3>
            <h4>1、绑定事件</h4>
            <div class="detail">
                <p v-on:click="count++">
                    以1递增 {{count}}次
                </p>
                <p v-on:click="clickMe">
                    以1递减 {{count}}次
                </p>
            </div>
            <h4>2、绑定事件——简写 @事件名=函数名</h4>
            <div class="detail">
                <p @click="clickMeDouble">
                    以2递增 {{count}}次
                </p>
            </div>
        </div>
        <div class="content_box">
            <h3>五、监听属性 watch、计算属性 computed、方法 methods</h3>
            <div class="detail border">
                <span>a = </span><input v-model="value_a" />
                <br />
                <span>b = </span><input v-model="value_b" />
                <br />
                <span>方法实现: </span><span>a + b = {{abTotal()}}</span>
                <br />
                <span>computed实现: </span><span>a * b = {{aMultiplyb}}</span>
                <br />
                <span>watch: </span><span>a - b = {{aSubb}}</span>
            </div>
            <br/>
            <div class="detail border">
                <p>*methods、computed、watch的区别</p>
                可以实现相同的效果
                <br/>
                <p>
                    1、computed 
                        a、基于缓存，只有相关依赖发生改变时才会重新取值，性能更好
                        b、声明式的解决方案，只需要告诉 vue 某个属性的构成方法，就可以一劳永逸的放手不管了。
                </p>
                <p>
                    2、methods  在重新渲染的时候，函数总会重新调用执行
                </p>
                <p>
                    3、watch    
                        a、监听属性变化
                        b、命令式的解决方案，需要自己处理 vue 某个属性依赖要素的变化，根据变化重置这个属性
                </p>
            </div>
        </div>
        <div class="content_box">
            <h3>六、表单控件</h3>
            <div class="detail border">
                <p v-for="(name, index) in nameList">
                    <input type="checkbox" v-bind:value="name"  v-model="checkboxGroupSelectedValue" />
                    {{name}}
                </p>
                <span>选中的数据为：{{checkboxGroupSelectedValue}}</span>
            </div>
            <br/>
            <div class="detail border">
                <p v-for="(name, index) in nameList">
                    <input type="radio" v-bind:value="name" v-model="radioGroupSelectedValue" />
                    {{name}}
                </p>
                <span>选中的数据为：{{radioGroupSelectedValue}}</span>
            </div>
            <br/>
            <div class="detail border">
                <select v-model="selectedValue">
                    <option v-for="(item, index) in selectOption" v-bind:value="item.value" >
                        {{item.label}}
                    </option>
                </select>
                <br/>
                <span>选中的数据为：{{selectedValue}}</span>
            </div>
             <div class="detail border">
                <p>表单中的修饰符</p>
                <p>1、过滤用户输入的首尾空格</p>
                <span>修饰符v-model.trim：</span><input type="text" v-model.trim="modifyTrim" />
                <br/>
                <span>不使用修饰符v-model.trim：</span><input type="text" v-model="noModifyTrim" />
                <p>2、自动将用户的输入值转为 Number 类型</p>
                <span>修饰符v-model.number</span><input type="number" v-model.number="modifyNumber" />
                <span>类型：{{typeof modifyNumber}}</span>
                <br/>
                <span>不使用修饰符v-model.number</span><input type="number" v-model="noModifyNumber" />
                <span>类型：{{typeof noModifyNumber}}</span>
                <br/>
                <p>3、 change 事件 后同步数据</p>
                <span>修饰符v-model.lazy</span><input v-model.lazy="modifyLazy" />
                值：{{modifyLazy}}
                <br/>
                <span>不使用修饰符v-model.lazy</span><input v-model="noModifyLazy" />
                值：{{noModifyLazy}}
            </div>
        </div>
        <div class="content_box">
            <h3>七、组件</h3>
            <Input placeholder="请输入姓名" v-model="formDetail.name" />
            <Input placeholder="请输入家庭地址" v-model="formDetail.address" />
            <RadioGroup v-bind:option="sexList" radioModel="formDetail.sex" v-on:change="asd"  />
            <button v-on:click="submitForm">提交</button>
        </div>
    </div>
</template>

<script src="./index.js"></script>