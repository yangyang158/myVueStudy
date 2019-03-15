<style scoped>
.main{
    width: 95%;
    height: 100%;
    float: left;
}
</style>
<template>
    <div class="pos">
        <leftNav />
        <div class="main">
            <shouyin></shouyin>
        </div>
    </div>
</template>
<script>
import leftNav from "./leftNav.vue";
import shouyin from './shouyin.vue';

export default {
    name: 'pos',
    components: {
        leftNav,
        shouyin
    }
}
</script>
