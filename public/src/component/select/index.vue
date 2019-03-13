<template>
    <div class="hr1-form-select">
        <div class="hr1-form-input">
            <input type="text" readonly="readonly" @click="click"  />
        </div>
        <div class="hr1-dropdown">
            <ul>
                <li v-bind:key="index" v-for="(opt, index) in options">
                    {opt}
                </li>
            </ul>
        </div>
    </div>
</template>
<script src="./index.js"></script>