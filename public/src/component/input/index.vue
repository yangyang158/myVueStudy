<template>
    <div class="hr1-form-input">
        <input 
            type="text" 
            v-bind:placeholder="placeholder"
            v-bind:value="value"
            v-on:input="$emit('input', $event.target.value)"
        />
    </div>
</template>
<script src="./index.js"></script>