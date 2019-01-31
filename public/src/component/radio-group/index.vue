<template>
    <div class="hr1-form-radio-group">
        <p class="radio" v-for="(opt) in option">
            <input 
                name="radio-data"
                type="radio"
                v-bind:value="opt.value"
                v-model="radioModel"
                v-on:change="$emit('input', $event.target.value)"
            />
            <span>{{opt.label}}</span>
        </p>
    </div>
</template>
<script src="./index.js"></script>