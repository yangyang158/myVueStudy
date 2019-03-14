<style lang="less" scoped>
.news{
    padding: 0 20px;
    text-align: left;
}

</style>

<template>
    <div class="news">
        <h2>一、url上传变量</h2>
        <p>新闻类型：{{$route.params.type}}, 数量：{{$route.params.num}}</p>
    </div>
</template>

<script>

export default {
    name: 'news',
    beforeRouteEnter:(to,from,next)=>{
        console.log("准备进入路由模板");
        next();
    },
    beforeRouteLeave: (to, from, next) => {
        console.log("准备离开路由模板");
        next();
    }
}
</script>