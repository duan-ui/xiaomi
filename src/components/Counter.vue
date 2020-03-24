<template>
    <div style="text-align:center">
        <button @click="num++"> {{num}} </button>
    </div>
</template>
<script>
export default {
    beforeCreate(){
        console.log("创建前beforeCreate");
    },
    created(){
        console.log("创建完成， created");
        // 可以访问到this关键字
        this.ind = setInterval(()=>{
            this.num++;
            if(this.num>=30){
                this.$emit("done",this.num);
            }
        },500)
        // 每隔500毫秒让num+1
        //  当组件num值大于30时候让父组件关闭自己
    },
    beforeMount(){
        console.log("渲染前beforeMount");
    },
    mounted(){
        console.log("渲染完毕mounted");
        // 可以访问渲染好dom节点
    },
    beforeUpdate(){
        console.log("更新前beforeUpdate");
        // 会执行多次
    },
    updated(){
        console.log("更新完毕 updated");
        // 会执行多次
    },
    beforeDestroy(){
         console.log("销毁前 beforeDestroy");
         clearInterval(this.ind);
          
    },
    destroyed(){
         console.log("销毁完成 destroyed");
    },
    data(){return {
        ind:null,//用来停止间隔调用
        num:1
        }}
}
</script>
<style >

</style>