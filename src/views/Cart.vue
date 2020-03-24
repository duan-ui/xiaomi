<template>
    <div>
        <h1>购物车</h1>
    </div>
</template>
<script>
export default {
    beforeRouteLeave(to,from,next){
     let flag=window.confirm("你确定离开吗");
     if(flag){
         next();
     }else{
         next(false);
     }
    }
}
</script>