<style lang="less" scoped>
.shouyin{
    height: 100%;
    & .row{
        height: 100%;
        & > *{
            height: 100%;
            float: left;
        }
        & .row_left{
            padding: 0 10px;
            border-right: 1px solid #ccc;
            & .operate{
                padding-top: 20px;
            }
        }
        & .row_right{
            padding: 0 10px;
            background-color: #F9FAFC;
            & .title{
                height: 20px;
                border-bottom:1px solid #D3DCE6;
                background-color: #F9FAFC;
                padding:10px;
            }
            & .often-goods-list ul li{
                list-style: none;
                float:left;
                border:1px solid #E5E9F2;
                padding:10px;
                margin:5px;
                background-color:#fff;
            }
            & .o-price{
                color:#58B7FF; 
            }
            & .goods-type{
                clear: both;
                & .cookList li{
                    list-style: none;
                    width:23%;
                    border:1px solid #E5E9F2;
                    height: 100px;
                    overflow: hidden;
                    background-color:#fff;
                    padding: 2px;
                    float:left;
                    margin: 2px;
                }
                & .cookList li .foodImg{
                    float:left;
                    width: 40%;
                    padding: 5px 0;
                }
                & .foodDetail{
                    float:left;
                    width: 60%;
                    padding: 20px 0 0;
                }
                & .foodName{
                    font-size: 18px;
                    padding-left: 10px;
                    color:brown;
                    display: block;
                }
                & .foodPrice{
                    display: block;
                    font-size: 16px;
                    padding-left: 10px;
                    padding-top:10px;
                }
            }

        }
    }
}
</style>
<template>
    <div class="shouyin">
        <el-row class="row">
            <el-col :span="7" class="row_left">
                <el-tabs>
                    <el-tab-pane label="点餐">
                        <el-table :summary-method="getSummaries" :data="tableData" border show-summary  style="width: 100%" height="600">
                            <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                            <el-table-column prop="count" label="数量" width="60"></el-table-column>
                            <el-table-column prop="price" label="金额" width="100"></el-table-column>
                            <el-table-column label="操作" width="100" fixed="right">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                                    <el-button type="text" size="small" @click="deleteOrder(scope.row)">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>   
                        <div class="operate">
                            <el-button type="warning" >挂单</el-button>
                            <el-button type="danger" @click="deleteOrder('all')">全部删除</el-button>
                            <el-button type="success" >结账</el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="挂单">
                        挂单
                    </el-tab-pane>
                    <el-tab-pane label="外卖">
                        外卖
                    </el-tab-pane>
                </el-tabs>
            </el-col>
            <el-col :span="17" class="row_right">
                <div class="often-goods">
                    <div class="title">常用商品</div>
                    <div class="often-goods-list">
                        <ul>
                            <li v-bind:key="index" v-for="(goods, index) in oftenGoods" @click="addOrderList(goods)">
                                <span>{{goods.goodsName}}</span>
                                <span class="o-price">{{goods.price}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="goods-type">
                    <el-tabs>
                        <el-tab-pane label="汉堡">
                            <ul class='cookList'>
                                <li v-bind:key="index" v-for="(goods, index) in type0Goods" @click="addOrderList(goods)">
                                    <span class="foodImg">
                                        <img :src="goods.goodsImg" width="90px" height="90px" />
                                    </span>
                                    <div class="foodDetail">
                                        <span class="foodName">{{goods.goodsName}}</span>
                                        <span class="foodPrice">{{goods.price}}¥</span>
                                    </div>
                                </li>
                            </ul>
                        </el-tab-pane>
                            <el-tab-pane label="小食">
                            小食
                        </el-tab-pane>
                        <el-tab-pane label="饮料">
                            饮料
                        </el-tab-pane>
                        <el-tab-pane label="套餐">
                            套餐
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import {oftenGoods, type0Goods, tableData} from './datas.js';
import _ from 'lodash';

export default {
    name: 'shouyin',
    data(){
        return {
            tableData: tableData,
            type0Goods: type0Goods,
            oftenGoods: oftenGoods,
        }
    },
    methods: {
        addOrderList: function(goods){
            console.log('goods', goods);
            let params = _.clone(goods);
            //先判断当前选择的商品在订单里有没有,有的话只改数量和金额，没有的话添加商品
            let findGoods = _.filter(this.tableData, ['goodsId', goods.goodsId]);
            console.log('findGoods', findGoods)
            if(findGoods.length===0){
                params.count = 1;
                this.tableData.push(params);
            }else{
                let newfindGoods = findGoods[0];
                newfindGoods.count++;
            }
        },
        deleteOrder: function(goods){
            console.log(goods);
            if(typeof goods === 'string'){
                this.tableData = [];
                return;
            }
            let index = _.findIndex(this.tableData, ['goodsId', goods.goodsId]);
            this.tableData.splice(index, 1);
        },
        getSummaries: function(params){
            let sum = ['合计'];
            let {columns, data} = params;
            let priceTotal = _.reduce(this.tableData, (sum, item)=>{
                return sum + item.count * item.price
            }, 0)
            let countTotal = _.sum(_.map(this.tableData, 'count'));
            return ['合计', countTotal, priceTotal]
        }
    }

}
</script>
