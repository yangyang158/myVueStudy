/*
 * http://eslint.org/docs/rules/
 * https://github.com/yannickcr/eslint-plugin-react
 */
module.exports = {
    'parserOptions': {
        "parser": "babel-eslint",
        // 代码是 ECMAScript 模块
        sourceType: 'module'
    },
    'globals': {
        //配置全局变量
        '_': true,
        'moment': true
    },
    'env': {
        'browser': true,
        'node': true,
        'es6': true,
    },
    // 扩展一个流行的风格指南，即 eslint-config-standard 
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended',
        'standard'
    ],
    'plugins': [
        'html',
        // standard风格的依赖包
        "standard",
        // standard风格的依赖包
        "promise"
    ],
    'rules': {
        "indent": ["error", 4],
        'no-unused-vars': 0,//未使用过的变量0:关闭规则，1:开启规则
        'no-console': ['warn', {allow: ['warn', 'error']}],
        'eqeqeq': ['warn', 'always'],
        'max-len': ['warn', 120],
        'no-multi-spaces': 'error',//不允许重复使用分隔空格
        'no-multiple-empty-lines': 'error',//禁止出现多行空行（最多两行）
        'quotes': [2, 'single'],// js中使用单引号
        'semi': ['error', 'always'],
        'eol-last': ['error', 'never'],//要求或禁止文件末尾保留一行空行 (eol-last)
        "comma-dangle": ["error", "only-multiline"],//要求使用拖尾逗号

        // Vue相关校验规则
        "vue/script-indent": ["error", 4,]

    },
};
           