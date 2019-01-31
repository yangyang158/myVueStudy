import _ from 'lodash';

export default {
    name: 'Document',
    data () {
        return {
            titleMsg: '我是title',
            changeColor: false,
            hrefUrl: 'https://www.baidu.com',
            type: 'A',
            showEle: true,
            nameList: ['小明', '小红', '小王'],
            personObject: {
                name: '小李',
                position: '职位是测试',
                age: '今年22'
            },
            count: 0,
            value_a: 1,
            value_b: 1,
            aSubb: 0,
            checkboxGroupSelectedValue: [],
            radioGroupSelectedValue: '',
            selectedValue: '1',
            selectOption: [{
                value: '1',
                label: '星期一'
            }, {
                value: '2',
                label: '星期二'
            }, {
                value: '3',
                label: '星期三'
            }, {
                value: '4',
                label: '星期四'
            }],
            modifyTrim: '',
            noModifyTrim: '',
            noModifyNumber: '',
            modifyNumber: '',
            noModifyLazy: '',
            modifyLazy: '',
            selectedType: '',
            formDetail: {
                name: '',
                address: '',
                sex: 'male',
                like: [],
            },
            likeList: [{
                value: 'sing',
                label: '唱歌'
            }, {
                value: 'run',
                label: '跑步'
            }, {
                value: 'seebook',
                label: '看书'
            }, {
                value: 'play',
                label: '玩'
            }],
            sexList: [{
                value: 'male',
                label: '男'
            }, {
                value: 'female',
                label: '女'
            }]
        };
    },
    methods: {
        clickMe: function (e) {
            this.count--;
        },
        clickMeDouble: function (e) {
            this.count = this.count + 2;
        },
        abTotal: function () {
            console.log('----');
            return _.toNumber(this.value_a) + _.toNumber(this.value_b);
        },
        submitForm: function () {
            console.log('formDetail', this.formDetail);
        },
        asd: function (p1, p2) {
            console.log(p1, p2);
        }
    },
    watch: {
        value_a: function (newValue, oldValue) {
            console.log('newValue', newValue);
            console.log('oldValue', oldValue);
            this.aSubb = newValue - this.value_b;
        },
        value_b: function (newValue, oldValue) {
            console.log('newValue', newValue);
            console.log('oldValue', oldValue);
            this.aSubb = this.value_a - newValue;
        }
    },
    computed: {
        aMultiplyb: function () {
            return this.value_a * this.value_b;
        }
    }
};